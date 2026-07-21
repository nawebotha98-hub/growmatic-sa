(() => {
  "use strict";

  const WHATSAPP_NUMBER = "27827900255";
  const wa = (text) => "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
  const waCall = wa("Hi! I'd like to book a free business consultation.");
  const waGeneral = wa("Hi! I'd like to learn more about GrowMatic SA.");
  const waEarly = wa("Hi! I'd like early access to the Virtual Receptionist.");
  const planLink = (plan) => wa("Hi! I'm interested in the " + plan + " plan");

  document.querySelectorAll(".wa-call").forEach((el) => (el.href = waCall));
  document.querySelectorAll(".wa-general").forEach((el) => (el.href = waGeneral));
  document.querySelectorAll(".wa-early").forEach((el) => (el.href = waEarly));

  const services = [
    { eyebrow: "Customer Communication", title: "24/7 Customer Response.", desc: "The problem: enquiries come in after hours and across WhatsApp, email and your website — and a slow reply loses the sale. Our always-on response system answers every customer in seconds, day or night, and only brings you in when a real person is genuinely needed. The result: no enquiry ever goes cold, and you look bigger and more professional than the competition." },
    { eyebrow: "Lead Management", title: "Turn More Enquiries Into Customers.", desc: "The problem: most leads never get a second follow-up, so they quietly go cold. We capture every enquiry from every source and follow up automatically until the customer books, buys, or clearly says no. The result: more of the leads you already pay to get actually turn into paying customers." },
    { eyebrow: "Bookings & Scheduling", title: "Effortless Booking & Appointments.", desc: "The problem: endless back-and-forth to set a time, plus costly no-shows. Customers self-book in seconds, and friendly reminders go out automatically before every appointment. The result: a fuller diary, far fewer no-shows, and zero admin on your side." },
    { eyebrow: "Never Miss a Lead", title: "Every Missed Call, Recovered.", desc: "The problem: when you can't get to the phone, most callers don't leave a message — they simply call the next business. The moment a call is missed, we send the caller a friendly WhatsApp within seconds. The result: a missed call becomes a live conversation instead of a lost customer — ideal for trades, medical, security and anyone who can't stop mid-job to answer." },
    { eyebrow: "Business Intelligence", title: "See Your Business at a Glance.", desc: "The problem: your bookings and leads are scattered across your phone, inbox and memory. A private, always-current dashboard shows every upcoming booking and new lead in one place — no extra app, no separate login. The result: you always know exactly where the business stands, without digging for it." },
    { eyebrow: "Reputation & Reviews", title: "Build a 5-Star Reputation.", desc: "The problem: your happiest customers rarely leave a review, and the reviews you do get sit unanswered. We ask satisfied customers for a Google review at exactly the right moment and draft an on-brand reply to every review for you to approve in one tap. The result: more 5-star reviews, more trust, and more new customers finding you online." },
    { eyebrow: "Marketing on Autopilot", title: "Show Up Consistently, Effortlessly.", desc: "The problem: staying active on social media falls to the bottom of the list every week. We create, schedule and post to Facebook and Instagram consistently on your behalf. The result: your business stays visible and top-of-mind — without you ever opening the app." },
    { eyebrow: "Process Optimisation", title: "Streamline the Work Behind the Scenes.", desc: "The problem: quotes, invoices, onboarding and reporting eat hours of manual admin every week. We map the repetitive processes in your business and take them off your plate. The result: less manual work, fewer mistakes, and more time to focus on growth. If your team is repeating it, we can streamline it." }
  ];

  const steps = [
    { num: "01", title: "Free consultation", desc: "We learn your business and find where you're losing time and sales." },
    { num: "02", title: "Your growth plan", desc: "A simple plan built around your goals — no jargon, no guesswork." },
    { num: "03", title: "We set it all up", desc: "We build and manage everything for you. You just approve and go live." },
    { num: "04", title: "Go live and grow", desc: "It runs quietly in the background while we fine-tune it every month." }
  ];

  const industries = [
    { eyebrow: "Trades", title: "Electricians & plumbers", desc: "Answer every callout, follow up quotes, book jobs — even mid-job." },
    { eyebrow: "Security", title: "Security & response", desc: "Instant enquiry response, faster call-outs, organised scheduling." },
    { eyebrow: "Construction", title: "Construction & contractors", desc: "Capture project leads, chase quotes, keep site admin under control." },
    { eyebrow: "Medical", title: "Medical & healthcare", desc: "Self-booking, reminders that cut no-shows, a calmer front desk." },
    { eyebrow: "Professional", title: "Professional services", desc: "Qualify enquiries, book consultations, reduce back-office admin." },
    { eyebrow: "Property", title: "Property & real estate", desc: "Respond to every listing enquiry instantly and never lose a buyer." },
    { eyebrow: "Retail", title: "Retail & e-commerce", desc: "Answer product questions, recover sales, manage enquiries at scale." },
    { eyebrow: "Any Business", title: "Any growing business", desc: "Manufacturing, logistics, wellness & more — if you have customers, we can help." }
  ];

  const plans = [
    { name: "Growth Starter", tag: "Most Popular", tagColor: "#1f9d5c", bg: "rgba(255,255,255,0.04)", setup: "R5,000", monthly: "R3,500/mo", btnBg: "#1f9d5c", btnBorder: "none", link: planLink("Growth Starter"),
      features: ["24/7 customer response on WhatsApp, email & website chat — replies in seconds", "Every enquiry captured and followed up automatically", "Bookings & appointments straight into your diary", "Missed calls recovered instantly by WhatsApp", "Monthly results report"] },
    { name: "Business Autopilot", tag: "Plan", tagColor: "rgba(255,255,255,0.4)", bg: "#0a0a0a", setup: "R7,500", monthly: "R4,500/mo", btnBg: "transparent", btnBorder: "1px solid rgba(255,255,255,0.2)", link: planLink("Business Autopilot"),
      features: ["Everything in Growth Starter", "Automatic quoting & invoice follow-ups", "Reminders that cut no-shows", "Live business dashboard included", "Priority support + monthly growth review"] },
    { name: "Custom Growth Solution", tag: "Plan", tagColor: "rgba(255,255,255,0.4)", bg: "#0a0a0a", setup: "From R15,000", monthly: "Custom", btnBg: "transparent", btnBorder: "1px solid rgba(255,255,255,0.2)", link: planLink("Custom Growth Solution"),
      features: ["Tailored solution mapped to your exact workflow", "Full business review + dedicated account manager", "Unlimited custom processes streamlined", "Staff training included", "Service-level & uptime guarantees"] }
  ];

  const faqs = [
    { q: "Do I need any technical knowledge?", a: "Not at all. We build, set up, and manage everything for you — you just approve and go live. If you can use WhatsApp, you'll have no trouble at all." },
    { q: "How long until it's up and running?", a: "Most businesses are live within about 2 weeks. We keep you updated every step of the way." },
    { q: "Will this work with WhatsApp?", a: "Absolutely. WhatsApp is at the heart of what we do — your customers get looked after on WhatsApp 24/7, just like they're talking to a helpful member of your team." },
    { q: "What happens if something goes wrong?", a: "We keep an eye on everything and fix issues fast. Business Autopilot and the Custom Growth Solution include priority support — you're never left hanging." },
    { q: "Is this affordable for a small business?", a: "Yes — our Growth Starter package is designed to be accessible for smaller businesses. It typically pays for itself within the first month through the time you save and the customers you stop losing." },
    { q: "Can I see it before I commit?", a: "Of course. Book a free business consultation and we'll walk you through exactly how it would work for your business. No pressure, no obligation." }
  ];

  const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  document.getElementById("service-list").innerHTML = services.map((s) => `
    <div class="service-row reveal">
      <div class="service-inner">
        <div class="service-eyebrow">${escapeHtml(s.eyebrow)}</div>
        <div>
          <h3>${escapeHtml(s.title)}</h3>
          <p>${escapeHtml(s.desc)}</p>
        </div>
      </div>
    </div>`).join("");

  document.getElementById("steps-list").innerHTML = steps.map((st) => `
    <div class="reveal">
      <div class="hr"></div>
      <div class="step-num">${escapeHtml(st.num)}</div>
      <h3 class="step-title">${escapeHtml(st.title)}</h3>
      <p class="step-desc">${escapeHtml(st.desc)}</p>
    </div>`).join("");

  document.getElementById("industries-list").innerHTML = industries.map((ind) => `
    <div class="reveal">
      <div class="hr"></div>
      <div class="industry-eyebrow">${escapeHtml(ind.eyebrow)}</div>
      <h3 class="industry-title">${escapeHtml(ind.title)}</h3>
      <p class="industry-desc">${escapeHtml(ind.desc)}</p>
    </div>`).join("");

  document.getElementById("plans-list").innerHTML = plans.map((p) => `
    <div class="plan reveal" style="background:${p.bg}">
      <div class="plan-tag" style="color:${p.tagColor}">${escapeHtml(p.tag)}</div>
      <h3 class="plan-name">${escapeHtml(p.name)}</h3>
      <div class="plan-setup">${escapeHtml(p.setup)}</div>
      <div class="plan-setup-label">once-off setup</div>
      <div class="plan-monthly">+ ${escapeHtml(p.monthly)}</div>
      <div class="hr"></div>
      <div class="plan-features">
        ${p.features.map((f) => `<div class="plan-feature"><span class="check">✓</span><span>${escapeHtml(f)}</span></div>`).join("")}
      </div>
      <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="plan-cta" style="background:${p.btnBg};border:${p.btnBorder}">Book a free consultation</a>
    </div>`).join("");

  document.getElementById("faq-list").innerHTML = faqs.map((f) => `
    <details class="faq-item">
      <summary><span class="faq-q">${escapeHtml(f.q)}</span><span class="faq-plus">+</span></summary>
      <p>${escapeHtml(f.a)}</p>
    </details>`).join("");

  // ---------- Hero phone: cycle WhatsApp → Email → Website chat ----------
  (function initPhoneCycle() {
    const inner = document.getElementById("phone-inner");
    const tabs = document.getElementById("phone-tabs");
    if (!inner || !tabs) return;

    const labels = ["WhatsApp", "Email", "Website chat"];

    const wa = [
      ["in", "Hi, are you open on Sundays?", "14:02", false],
      ["out", "We're closed Sundays, but open Mon–Sat 9am–9pm 😊", "14:02", true],
      ["in", "Can I book for 4 on Friday at 7?", "14:03", false],
      ["out", "Done — Friday 7pm for 4 is confirmed ✅ Reminder set.", "14:03", true]
    ];
    const web = [
      ["in", "Do you work with medical practices?"],
      ["out", "We do! We help practices cut no-shows and answer patients 24/7."],
      ["in", "Sounds good 👍"],
      ["out", "Want a quick demo? I can set it up in 2 minutes 🚀"]
    ];

    const screenWA = () => `
      <div class="phone-header">
        <img src="assets/logo.png" alt="GrowMatic">
        <div><div class="phone-title">GrowMatic Assistant</div><div class="phone-status">online</div></div>
      </div>
      <div class="phone-messages">
        ${wa.map((m, i) => `<div class="msg msg-${m[0] === "out" ? "out" : "in"}" style="animation-delay:${0.3 + i * 0.5}s">${escapeHtml(m[1])}<div class="msg-time">${escapeHtml(m[2])}${m[3] ? ' <span class="msg-tick">✓✓</span>' : ""}</div></div>`).join("")}
      </div>`;

    const screenEmail = () => `
      <div class="mail-header">
        <div class="mail-icon">✉</div>
        <div><div class="phone-title" style="color:var(--ink)">Inbox</div><div class="phone-status" style="color:rgba(0,0,0,0.45);opacity:1">Answered automatically · in seconds</div></div>
      </div>
      <div class="mail-body">
        <div class="mail-card" style="animation-delay:.3s">
          <div class="mail-from"><span>Sarah — Woodlands Dental</span><span style="font-size:10px;color:rgba(0,0,0,0.4);font-weight:400">now</span></div>
          <div class="mail-sub">Subject: Appointment availability</div>
          <div class="mail-text">Hi, do you have anything open this week for a check-up?</div>
        </div>
        <div class="mail-card reply" style="animation-delay:1.1s">
          <div class="mail-badge">✓ Replied automatically</div>
          <div class="mail-text">Hi Sarah! Thanks for reaching out 😊 We've got Thursday 10:30 or Friday 14:00 open — want me to book one in for you?</div>
        </div>
      </div>`;

    const screenWeb = () => `
      <div class="web-header">
        <div class="web-avatar"><img src="assets/logo.png" alt="Matt"><span class="dot"></span></div>
        <div><div class="phone-title">Matt</div><div class="phone-status">usually replies in seconds</div></div>
      </div>
      <div class="web-body">
        ${web.map((m, i) => `<div class="web-msg web-${m[0]}" style="animation-delay:${0.3 + i * 0.5}s">${escapeHtml(m[1])}</div>`).join("")}
      </div>`;

    const screens = [screenWA, screenEmail, screenWeb];
    let idx = 0;
    const paint = () => {
      inner.innerHTML = screens[idx]();
      tabs.innerHTML = `<div class="phone-dots">${[0, 1, 2].map((k) => `<span class="phone-dot${k === idx ? " active" : ""}"></span>`).join("")}</div><span class="phone-tab-label">${labels[idx]}</span>`;
    };
    paint();
    setInterval(() => {
      inner.style.opacity = "0";
      setTimeout(() => { idx = (idx + 1) % 3; paint(); inner.style.opacity = "1"; }, 350);
    }, 5200);
  })();

  // ---------- Missed-call cost calculator ----------
  (function initCostCalculator() {
    const calls = document.getElementById("calls");
    const job = document.getElementById("job");
    const oMonth = document.getElementById("o-month");
    const oYear = document.getElementById("o-year");
    const oMo = document.getElementById("o-mo");
    if (!calls || !job || !oYear) return;

    const zar = new Intl.NumberFormat("en-ZA", { style: "currency", currency: "ZAR", maximumFractionDigits: 0 });
    const calc = () => {
      const c = Math.max(0, Number(calls.value) || 0);
      const v = Math.max(0, Number(job.value) || 0);
      const monthly = Math.round(c * 4.33);   // missed calls per month
      const perMonth = (monthly / 3) * v;      // conservative: 1 in 3 becomes a sale
      oMonth.textContent = "≈ " + monthly;
      oYear.textContent = zar.format(perMonth * 12);
      oMo.textContent = "That's about " + zar.format(perMonth) + "/month walking past your door.";
    };
    calls.addEventListener("input", calc);
    job.addEventListener("input", calc);
    calc();
  })();

  // ---------- Nav scroll effect ----------
  const nav = document.getElementById("nav");
  const onScroll = () => {
    if (window.scrollY > 20) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---------- Mobile nav toggle ----------
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  const closeMenu = () => {
    nav.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
  };
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("menu-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));

  // ---------- Scroll reveals ----------
  const revealShow = (el) => {
    const delay = parseInt(el.dataset.delay || "0", 10);
    if (delay) el.style.transitionDelay = delay + "ms";
    el.classList.add("is-visible");
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        revealShow(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  const observeReveals = () => {
    document.querySelectorAll(".reveal").forEach((el) => {
      if (el.dataset.revealInit) return;
      el.dataset.revealInit = "1";
      io.observe(el);
    });
  };
  observeReveals();
  // Fallback: never leave content hidden if IO somehow misses it
  setTimeout(() => {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => revealShow(el));
  }, 6000);

  // ---------- Hero canvas ----------
  // "Flow": a field of fine threads streaming in silky curves across the
  // hero — work, enquiries and follow-ups flowing through the system. The
  // threads ride a smooth trig-noise flow field and leave fading trails
  // (destination-out, so the canvas stays transparent and the CSS glows show
  // through). Density and opacity are weighted toward the phone's side so
  // the headline column stays calm. Retina-scaled; prefers-reduced-motion
  // gets a static stream-lines texture instead of a loop.
  (function initHeroCanvas() {
    const canvas = document.getElementById("hero-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const GREEN = "31,157,92";
    const INK = "10,10,10";
    const COUNT = 420;

    let w = 0, h = 0;
    const resize = () => {
      w = canvas.clientWidth; h = canvas.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineCap = "round";
    };

    const particles = Array.from({ length: COUNT }, () => ({}));
    const spawn = (p) => {
      p.x = Math.random() * w;
      p.y = Math.random() * h;
      p.life = 2 + Math.random() * 5; // seconds
      p.green = Math.random() < 0.85;
      p.width = 0.7 + Math.random() * 1.1;
      p.speed = 26 + Math.random() * 34; // px/s
    };

    // Smooth pseudo-noise direction field; drifts slowly with time.
    const angleAt = (x, y, t) =>
      (Math.sin(x * 0.0021 + t * 0.10) +
       Math.cos(y * 0.0024 - t * 0.085) +
       Math.sin((x + y) * 0.0012 + t * 0.05)) * 1.05;

    const step = (t, dt, fade) => {
      if (fade) {
        ctx.globalCompositeOperation = "destination-out";
        ctx.fillStyle = "rgba(0,0,0,0.055)";
        ctx.fillRect(0, 0, w, h);
        ctx.globalCompositeOperation = "source-over";
      }
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!(p.life > 0) || p.x < -24 || p.x > w + 24 || p.y < -24 || p.y > h + 24) spawn(p);
        const a = angleAt(p.x, p.y, t);
        const nx = p.x + Math.cos(a) * p.speed * dt;
        const ny = p.y + Math.sin(a) * p.speed * dt;
        // Quieter over the text column, fuller around the phone.
        const sideWeight = 0.25 + 0.75 * Math.min(1, Math.max(0, (p.x / w - 0.02) / 0.72));
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = p.green
          ? "rgba(" + GREEN + "," + (0.03 + 0.14 * sideWeight) + ")"
          : "rgba(" + INK + "," + (0.015 + 0.06 * sideWeight) + ")";
        ctx.lineWidth = p.width;
        ctx.stroke();
        p.x = nx; p.y = ny;
        p.life -= dt;
      }
    };

    resize();
    window.addEventListener("resize", () => { resize(); if (reduceMotion) drawStatic(); });
    particles.forEach(spawn);

    const drawStatic = () => {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(spawn);
      for (let i = 0; i < 200; i++) step(i / 30, 1 / 30, false);
    };
    if (reduceMotion) { drawStatic(); return; }

    let last = null;
    const loop = (now) => {
      if (last === null) last = now;
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      step(now / 1000, dt, true);
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  })();

  // ---------- Footer growth canvas ----------
  (function initGrowthCanvas() {
    const canvas = document.getElementById("growth-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let progress = 0, t = 0, started = false;
    const io2 = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { started = true; io2.disconnect(); } });
    }, { threshold: 0.3 });
    io2.observe(canvas);
    const ease = (x) => 1 - Math.pow(1 - x, 3);
    const loop = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
      ctx.clearRect(0, 0, w, h);
      if (started && progress < 1) progress = Math.min(1, progress + 0.008);
      const p = ease(progress);
      const base = h - 28;
      const n = 9;
      const bw = 30, gap = 34;
      const total = n * bw + (n - 1) * gap;
      const x0 = (w - total) / 2;
      const sway = Math.sin(t * 0.9) * 0.06;

      for (let i = 0; i < n; i++) {
        const stagger = Math.min(1, Math.max(0, (p * (n + 2) - i) / 2));
        const bh = (0.18 + (i / (n - 1)) * 0.62) * (h - 60) * ease(stagger);
        const x = x0 + i * (bw + gap);
        ctx.fillStyle = "rgba(31,157,92," + (0.16 + (i / (n - 1)) * 0.3) + ")";
        ctx.fillRect(x, base - bh, bw, bh);
      }

      const sx = x0 - 20, sy = base;
      const exBase = x0 + total - bw / 2, eyBase = base - (h - 60) * 0.86;
      const ex = exBase + Math.sin(t * 0.9) * 4 * p;
      const ey = eyBase + Math.cos(t * 0.7) * 2 * p;
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.bezierCurveTo(x0 + total * 0.35, base - 8, x0 + total * 0.55, base - (h - 60) * 0.4, ex, ey);
      ctx.strokeStyle = "#1f9d5c";
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      const len = 1200;
      ctx.setLineDash([len]);
      ctx.lineDashOffset = len * (1 - p);
      ctx.stroke();
      ctx.setLineDash([]);

      const lp = Math.max(0, (progress - 0.8) / 0.2);
      if (lp > 0) {
        const leaf = (angle, size) => {
          ctx.save();
          ctx.translate(ex, ey);
          ctx.rotate(angle + sway);
          ctx.scale(ease(lp) * size, ease(lp) * size);
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.bezierCurveTo(10, -14, 26, -16, 34, -4);
          ctx.bezierCurveTo(24, 6, 8, 6, 0, 0);
          ctx.closePath();
          ctx.fillStyle = "#1f9d5c";
          ctx.fill();
          ctx.restore();
        };
        leaf(-1.9, 1);
        leaf(-0.9, 1.25);
      }
      t += 0.016;
      requestAnimationFrame(loop);
    };
    loop();
  })();
})();

// ---------- Chat widget (Matt) ----------
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
