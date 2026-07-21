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

  // ---------- Hero phone: a LIVE demo of GrowMatic answering ----------
  // Instead of dropping a whole conversation in at once, each channel now
  // plays out message-by-message: a customer writes in, a typing indicator
  // appears, then the automated reply lands — the product doing its job in
  // real time. Cycles WhatsApp → Email → Website chat and loops.
  (function initPhoneCycle() {
    const inner = document.getElementById("phone-inner");
    const tabs = document.getElementById("phone-tabs");
    if (!inner || !tabs) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const labels = ["WhatsApp", "Email", "Website chat"];

    // Each channel: a header, a scrolling body, and a scripted sequence of
    // steps. `in` = customer message (lands immediately); `out` = automated
    // reply (a typing indicator shows first, then the message).
    const channels = [
      {
        header: `<div class="phone-header">
            <img src="assets/logo.png" alt="GrowMatic">
            <div><div class="phone-title">GrowMatic Assistant</div><div class="phone-status">online</div></div>
          </div>`,
        bodyClass: "phone-messages",
        typing: `<div class="msg-typing"><span></span><span></span><span></span></div>`,
        steps: [
          { dir: "in",  text: "Hi, are you open on Sundays?", meta: "14:02" },
          { dir: "out", text: "We're closed Sundays, but open Mon–Sat 9am–9pm 😊", meta: "14:02", tick: true },
          { dir: "in",  text: "Can I book for 4 on Friday at 7?", meta: "14:03" },
          { dir: "out", text: "Done — Friday 7pm for 4 is confirmed ✅ Reminder set.", meta: "14:03", tick: true }
        ],
        render: (s) => `<div class="msg msg-${s.dir === "out" ? "out" : "in"}">${escapeHtml(s.text)}<div class="msg-time">${escapeHtml(s.meta)}${s.tick ? ' <span class="msg-tick">✓✓</span>' : ""}</div></div>`
      },
      {
        header: `<div class="mail-header">
            <div class="mail-icon">✉</div>
            <div><div class="phone-title" style="color:var(--ink)">Inbox</div><div class="phone-status" style="color:rgba(0,0,0,0.45);opacity:1">Answered automatically · in seconds</div></div>
          </div>`,
        bodyClass: "mail-body",
        typing: `<div class="mail-typing"><div class="dots"><span></span><span></span><span></span></div><span class="lbl">Drafting reply…</span></div>`,
        steps: [
          { dir: "in",  html: `<div class="mail-card"><div class="mail-from"><span>Sarah — Woodlands Dental</span><span style="font-size:10px;color:rgba(0,0,0,0.4);font-weight:400">now</span></div><div class="mail-sub">Subject: Appointment availability</div><div class="mail-text">Hi, do you have anything open this week for a check-up?</div></div>` },
          { dir: "out", html: `<div class="mail-card reply"><div class="mail-badge">✓ Replied automatically</div><div class="mail-text">Hi Sarah! Thanks for reaching out 😊 We've got Thursday 10:30 or Friday 14:00 open — want me to book one in for you?</div></div>` }
        ],
        render: (s) => s.html
      },
      {
        header: `<div class="web-header">
            <div class="web-avatar"><img src="assets/logo.png" alt="Matt"><span class="dot"></span></div>
            <div><div class="phone-title">Matt</div><div class="phone-status">usually replies in seconds</div></div>
          </div>`,
        bodyClass: "web-body",
        typing: `<div class="web-typing"><span></span><span></span><span></span></div>`,
        steps: [
          { dir: "in",  text: "Do you work with medical practices?" },
          { dir: "out", text: "We do! We help practices cut no-shows and answer patients 24/7." },
          { dir: "in",  text: "Sounds good 👍" },
          { dir: "out", text: "Want a quick demo? I can set it up in 2 minutes 🚀" }
        ],
        render: (s) => `<div class="web-msg web-${s.dir}">${escapeHtml(s.text)}</div>`
      }
    ];

    const setTabs = (idx) =>
      tabs.innerHTML = `<div class="phone-dots">${channels.map((_, k) => `<span class="phone-dot${k === idx ? " active" : ""}"></span>`).join("")}</div><span class="phone-tab-label">${labels[idx]}</span>`;

    // Reduced motion / no-JS-timers safety: paint the first channel fully,
    // no sequencing, no loop.
    if (reduceMotion) {
      const ch = channels[0];
      inner.innerHTML = ch.header + `<div class="${ch.bodyClass}">${ch.steps.map(ch.render).join("")}</div>`;
      setTabs(0);
      return;
    }

    let token = 0; // cancels an in-flight sequence when the channel changes
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    async function playChannel(idx) {
      const mine = ++token;
      const ch = channels[idx];
      setTabs(idx);
      inner.innerHTML = ch.header + `<div class="${ch.bodyClass}"></div>`;
      const body = inner.querySelector("." + ch.bodyClass);
      inner.style.opacity = "1";

      await sleep(500);
      for (const step of ch.steps) {
        if (mine !== token) return;
        if (step.dir === "out") {
          body.insertAdjacentHTML("beforeend", ch.typing);
          const typingEl = body.lastElementChild;
          await sleep(1050);
          if (mine !== token) return;
          typingEl.remove();
        }
        body.insertAdjacentHTML("beforeend", ch.render(step));
        body.scrollTop = body.scrollHeight;
        await sleep(step.dir === "out" ? 1400 : 800);
      }
      if (mine !== token) return;
      await sleep(2400);
      if (mine !== token) return;

      // Fade out, advance, replay.
      inner.style.opacity = "0";
      await sleep(360);
      if (mine !== token) return;
      playChannel((idx + 1) % channels.length);
    }

    playChannel(0);
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
  // The brand logo, brought to life: a rising green bar chart, a growth line
  // climbing up through it, and a little plant sprouting two leaves at the
  // top — "business growth" as the logo tells it. It grows in over ~9s, holds,
  // softly fades and regrows, so it loops seamlessly. Kept quiet (low alpha,
  // soft green) and positioned to the right so it sits behind/beside the phone
  // and never competes with the headline. Retina-scaled; reduced motion draws
  // one fully-grown static frame.
  (function initHeroCanvas() {
    const canvas = document.getElementById("hero-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const GREEN = "31,157,92";
    const LEAF = "46,178,96";
    const CYCLE = 9; // seconds per grow→hold→fade loop
    // Ascending bar heights (fraction of hero height), left→right, like the logo.
    const BARS = [0.12, 0.16, 0.205, 0.255, 0.305, 0.355];

    let w = 0, h = 0;
    const resize = () => {
      w = canvas.clientWidth; h = canvas.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
    };

    const clamp = (v) => (v < 0 ? 0 : v > 1 ? 1 : v);
    const seg = (p, a, b) => clamp((p - a) / (b - a));
    const easeOut = (x) => 1 - Math.pow(1 - x, 3);
    const easeInOut = (x) => x * x * (3 - 2 * x);

    const roundRectPath = (x, y, rw, rh, r) => {
      const rr = Math.min(r, rw / 2, Math.abs(rh) / 2);
      if (ctx.roundRect) { ctx.beginPath(); ctx.roundRect(x, y, rw, rh, rr); return; }
      ctx.beginPath();
      ctx.moveTo(x + rr, y);
      ctx.arcTo(x + rw, y, x + rw, y + rh, rr);
      ctx.arcTo(x + rw, y + rh, x, y + rh, rr);
      ctx.arcTo(x, y + rh, x, y, rr);
      ctx.arcTo(x, y, x + rw, y, rr);
      ctx.closePath();
    };

    const drawLeaf = (x, y, angle, len, alpha) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.quadraticCurveTo(len * 0.5, -len * 0.44, len, 0);
      ctx.quadraticCurveTo(len * 0.5, len * 0.44, 0, 0);
      ctx.closePath();
      ctx.fillStyle = "rgba(" + LEAF + "," + alpha.toFixed(3) + ")";
      ctx.fill();
      ctx.restore();
    };

    // Draws one frame at loop-progress p (0..1). env scales the whole thing's
    // opacity for the fade-in / fade-out at the loop seams.
    const drawFrame = (p, env) => {
      ctx.clearRect(0, 0, w, h);
      if (env <= 0.001) return;

      // Chart geometry — sits in the open gap beside the phone so the whole
      // motif (bars, line and the sprout) stays visible, not hidden behind it.
      const baseY = 0.72 * h;
      const x0 = 0.47 * w, x1 = 0.66 * w;
      const span = x1 - x0;
      const slot = span / BARS.length;
      const barW = slot * 0.52;

      // 1) Bars rise one after another.
      for (let i = 0; i < BARS.length; i++) {
        const g = easeOut(seg(p, 0.05 + i * 0.035, 0.05 + i * 0.035 + 0.3));
        const fullH = BARS[i] * h;
        const bh = fullH * g;
        if (bh < 0.5) continue;
        const bx = x0 + i * slot + (slot - barW) / 2;
        roundRectPath(bx, baseY - bh, barW, bh, Math.min(6, barW / 2));
        ctx.fillStyle = "rgba(" + GREEN + "," + (0.11 * env).toFixed(3) + ")";
        ctx.fill();
      }

      // 2) Growth line climbs up-right, with a faint area fill and a glowing tip.
      const lp = easeOut(seg(p, 0.12, 0.62));
      const ly0 = 0.66 * h, ly1 = 0.35 * h;
      const lineX0 = 0.43 * w, lineX1 = 0.625 * w;
      const pointAt = (u) => {
        const x = lineX0 + (lineX1 - lineX0) * u;
        const y = ly0 + (ly1 - ly0) * easeInOut(u) - Math.sin(u * Math.PI) * 0.02 * h;
        return [x, y];
      };
      if (lp > 0.01) {
        const steps = 48;
        const last = Math.max(1, Math.round(steps * lp));
        // area fill
        ctx.beginPath();
        ctx.moveTo(pointAt(0)[0], baseY);
        for (let s = 0; s <= last; s++) { const [px, py] = pointAt((s / steps)); ctx.lineTo(px, py); }
        const [ex] = pointAt(last / steps);
        ctx.lineTo(ex, baseY);
        ctx.closePath();
        ctx.fillStyle = "rgba(" + GREEN + "," + (0.05 * env).toFixed(3) + ")";
        ctx.fill();
        // line
        ctx.beginPath();
        for (let s = 0; s <= last; s++) { const [px, py] = pointAt((s / steps)); if (s === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py); }
        ctx.strokeStyle = "rgba(" + GREEN + "," + (0.5 * env).toFixed(3) + ")";
        ctx.lineWidth = 2.4;
        ctx.stroke();
        // glowing tip
        const [tx, ty] = pointAt(last / steps);
        const glow = ctx.createRadialGradient(tx, ty, 0, tx, ty, 22);
        glow.addColorStop(0, "rgba(" + LEAF + "," + (0.55 * env).toFixed(3) + ")");
        glow.addColorStop(1, "rgba(" + LEAF + ",0)");
        ctx.fillStyle = glow;
        ctx.fillRect(tx - 24, ty - 24, 48, 48);
        ctx.beginPath();
        ctx.arc(tx, ty, 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + LEAF + "," + (0.85 * env).toFixed(3) + ")";
        ctx.fill();
      }

      // 3) Sprout: a stem rises from the line's tip, then two leaves unfurl.
      const [tipX, tipY] = pointAt(1);
      const stemP = easeOut(seg(p, 0.5, 0.8));
      if (stemP > 0.01) {
        const stemH = 0.095 * h * stemP;
        ctx.beginPath();
        ctx.moveTo(tipX, tipY);
        ctx.quadraticCurveTo(tipX + 6, tipY - stemH * 0.6, tipX + 2, tipY - stemH);
        ctx.strokeStyle = "rgba(" + LEAF + "," + (0.8 * env).toFixed(3) + ")";
        ctx.lineWidth = 2.6;
        ctx.stroke();
        const topX = tipX + 2, topY = tipY - stemH;
        const leafP = easeOut(seg(p, 0.66, 0.92));
        if (leafP > 0.01) {
          const ll = 0.088 * h * leafP;
          drawLeaf(topX, topY + 3, -Math.PI * 0.74, ll, 0.85 * env);   // left leaf, up-left
          drawLeaf(topX, topY + 5, -Math.PI * 0.2, ll * 1.05, 0.85 * env); // right leaf, up-right
        }
      }
    };

    resize();
    const renderStatic = () => drawFrame(0.86, 1); // fully grown, pre-fade
    window.addEventListener("resize", () => { resize(); if (reduceMotion) renderStatic(); });
    if (reduceMotion) { renderStatic(); return; }

    const loop = (now) => {
      const p = ((now / 1000) % CYCLE) / CYCLE;
      const env = Math.min(seg(p, 0, 0.08), 1 - seg(p, 0.9, 1));
      drawFrame(p, easeInOut(clamp(env)));
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
