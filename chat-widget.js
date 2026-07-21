// GrowMatic SA — shared "Matt" chat widget.
// Loaded on every page (homepage + product landing pages) so Matt can
// assist visitors everywhere. Self-contained: needs only the chat markup
// (teaser / launcher / panel) present in the page and styles.css.

(() => {
  "use strict";

  const CHAT_API_BASE = "https://growmatic-backend-production.up.railway.app/api/site-chat";
  const CHAT_STREAM_URL = CHAT_API_BASE + "/stream";
  const SESSION_KEY = "growmatic_chat_session_id";
  const HISTORY_KEY = "growmatic_chat_history";
  const TEASER_DISMISSED_KEY = "growmatic_chat_teaser_dismissed_v2";
  const GREETING = {
    role: "assistant",
    content:
      "Hi, I'm Matt from GrowMatic SA. Tell me a bit about your business and what's slowing you down, and I'll show you how we can help you save time and win more customers. Happy to talk pricing too.",
  };

  const launcher = document.getElementById("chat-launcher");
  const panel = document.getElementById("chat-panel");
  const messagesEl = document.getElementById("chat-messages");
  const inputEl = document.getElementById("chat-input");
  const sendBtn = document.getElementById("chat-send");
  const escalationEl = document.getElementById("chat-escalation");
  const teaserEl = document.getElementById("chat-teaser");
  const teaserOpenBtn = document.getElementById("chat-teaser-open");
  const teaserDismissBtn = document.getElementById("chat-teaser-dismiss");
  const waFloatBtn = document.getElementById("wa-float-btn");
  if (!launcher || !panel) return;

  let open = false;
  let sending = false;
  let messages = [];

  const getOrCreateSessionId = () => {
    let id = localStorage.getItem(SESSION_KEY);
    if (id) return id;
    id =
      window.crypto && window.crypto.randomUUID
        ? window.crypto.randomUUID()
        : "sess-" + Date.now() + "-" + Math.random().toString(16).slice(2);
    localStorage.setItem(SESSION_KEY, id);
    return id;
  };
  const sessionId = getOrCreateSessionId();

  const loadHistory = () => {
    try {
      const raw = localStorage.getItem(HISTORY_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  };
  const saveHistory = () => {
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(messages.slice(-40)));
    } catch (e) {
      /* storage full/unavailable — chat still works, just won't persist */
    }
  };

  const scrollToBottom = () => {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  };

  const renderMessages = () => {
    messagesEl.innerHTML = "";
    messages.forEach((m) => {
      const row = document.createElement("div");
      row.className = "chat-msg " + (m.role === "user" ? "from-user" : "from-assistant");
      if (m.role === "assistant") {
        const av = document.createElement("img");
        av.className = "chat-msg-avatar";
        av.src = "assets/logo.png";
        av.alt = "";
        row.appendChild(av);
      }
      const bubble = document.createElement("div");
      bubble.className = "chat-bubble";
      // The bubble renders raw text, so markdown the model occasionally emits
      // (e.g. **bold**) would show as literal asterisks. Strip bold/header
      // markers from assistant replies; user text stays verbatim.
      bubble.textContent =
        m.role === "assistant"
          ? m.content.replace(/\*\*([^*]+)\*\*/g, "$1").replace(/\*\*/g, "").replace(/^#{1,4}\s+/gm, "")
          : m.content;
      row.appendChild(bubble);
      messagesEl.appendChild(row);
    });
  };

  const setEscalationVisible = (visible) => {
    escalationEl.hidden = !visible;
  };

  const showError = (text) => {
    const el = document.createElement("div");
    el.className = "chat-error";
    el.textContent = text;
    messagesEl.appendChild(el);
    scrollToBottom();
  };

  const showTypingIndicator = () => {
    const row = document.createElement("div");
    row.className = "chat-msg from-assistant";
    row.id = "chat-typing-row";
    const av = document.createElement("img");
    av.className = "chat-msg-avatar";
    av.src = "assets/logo.png";
    av.alt = "";
    row.appendChild(av);
    const typing = document.createElement("div");
    typing.className = "chat-typing";
    typing.innerHTML = "<span></span><span></span><span></span>";
    row.appendChild(typing);
    messagesEl.appendChild(row);
    scrollToBottom();
    return row;
  };

  const setSending = (val) => {
    sending = val;
    sendBtn.disabled = val || !inputEl.value.trim();
    inputEl.disabled = val;
  };

  const openPanel = () => {
    open = true;
    panel.hidden = false;
    launcher.classList.add("is-open");
    launcher.setAttribute("aria-expanded", "true");
    if (waFloatBtn) waFloatBtn.classList.add("is-hidden");
    dismissTeaser();
    scrollToBottom();
    inputEl.focus();
  };

  const closePanel = () => {
    open = false;
    panel.hidden = true;
    launcher.classList.remove("is-open");
    launcher.setAttribute("aria-expanded", "false");
    if (waFloatBtn) waFloatBtn.classList.remove("is-hidden");
  };

  const dismissTeaser = () => {
    teaserEl.hidden = true;
    try {
      localStorage.setItem(TEASER_DISMISSED_KEY, "1");
    } catch (e) {
      /* ignore */
    }
  };

  launcher.addEventListener("click", () => {
    if (open) closePanel();
    else openPanel();
  });
  teaserOpenBtn.addEventListener("click", () => {
    dismissTeaser();
    openPanel();
  });
  teaserDismissBtn.addEventListener("click", dismissTeaser);

  if (!localStorage.getItem(TEASER_DISMISSED_KEY)) {
    setTimeout(() => {
      if (!open) teaserEl.hidden = false;
    }, 1600);
  }

  const history = loadHistory();
  messages = history.length > 0 ? history : [GREETING];
  renderMessages();

  const sendMessage = async () => {
    const text = inputEl.value.trim();
    if (!text || sending) return;

    messages.push({ role: "user", content: text });
    renderMessages();
    saveHistory();
    inputEl.value = "";
    setSending(true);
    scrollToBottom();

    const typingRow = showTypingIndicator();
    let bubbleEl = null;
    let fullText = "";

    try {
      const res = await fetch(CHAT_STREAM_URL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ sessionId, message: text }),
      });

      if (!res.ok || !res.body) {
        let data = {};
        try {
          data = await res.json();
        } catch (e) {
          /* ignore non-JSON error body */
        }
        throw new Error(data.error || "Something went wrong.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let finalEvent = null;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const chunks = buffer.split("\n\n");
        buffer = chunks.pop() || "";

        for (const chunk of chunks) {
          const line = chunk.trim();
          if (!line.startsWith("data:")) continue;
          let parsed;
          try {
            parsed = JSON.parse(line.slice(5).trim());
          } catch (e) {
            continue;
          }

          if (parsed.token) {
            fullText += parsed.token;
            if (!bubbleEl) {
              typingRow.innerHTML = "";
              const av = document.createElement("img");
              av.className = "chat-msg-avatar";
              av.src = "assets/logo.png";
              av.alt = "";
              typingRow.appendChild(av);
              bubbleEl = document.createElement("div");
              bubbleEl.className = "chat-bubble";
              typingRow.appendChild(bubbleEl);
            }
            bubbleEl.textContent = fullText;
            scrollToBottom();
          } else if (parsed.done) {
            finalEvent = parsed;
          }
        }
      }

      if (finalEvent && finalEvent.error) {
        throw new Error(finalEvent.error);
      }

      typingRow.remove();
      messages.push({ role: "assistant", content: fullText.trim() || "…" });
      renderMessages();
      saveHistory();

      if (finalEvent && (finalEvent.bookingRequested || finalEvent.leadCaptured)) {
        setEscalationVisible(true);
      }
    } catch (err) {
      typingRow.remove();
      showError("Couldn't reach Matt — please try again, or contact us directly below.");
      setEscalationVisible(true);
    } finally {
      setSending(false);
      scrollToBottom();
    }
  };

  sendBtn.addEventListener("click", sendMessage);
  inputEl.addEventListener("input", () => {
    sendBtn.disabled = sending || !inputEl.value.trim();
  });
  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });
})();
