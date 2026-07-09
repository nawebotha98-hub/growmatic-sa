(() => {
  "use strict";

  const WHATSAPP_NUMBER = "27671082665";
  const wa = (text) => "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
  const waCall = wa("Hi! I'd like to book a free strategy call.");
  const waGeneral = wa("Hi! I'd like to learn more about GrowMatic SA.");
  const waEarly = wa("Hi! I'd like early access to the AI Receptionist.");
  const planLink = (plan) => wa("Hi! I'm interested in the " + plan + " plan");

  document.querySelectorAll(".wa-call").forEach((el) => (el.href = waCall));
  document.querySelectorAll(".wa-general").forEach((el) => (el.href = waGeneral));
  document.querySelectorAll(".wa-early").forEach((el) => (el.href = waEarly));

  const services = [
    { eyebrow: "Chat Agent", title: "AI customer service agent.", desc: "One AI agent, three channels — WhatsApp, email, and a live chat widget embedded on your own website. Answers FAQs, qualifies leads, drafts on-brand email replies and follow-ups, and only escalates to you when a human actually needs to step in." },
    { eyebrow: "Lead Capture", title: "Lead capture and follow-up.", desc: "Captures leads from any source and follows up automatically over WhatsApp and email until they book or buy." },
    { eyebrow: "Booking", title: "Booking and appointments.", desc: "Customers self-book on WhatsApp in seconds. Automated reminders go out before every appointment so fewer people forget to show up." },
    { eyebrow: "Missed Call", title: "Missed call text-back.", desc: "When you can't get to the phone, we auto-send the caller a WhatsApp message within seconds. A missed call turns into a live conversation instead of a lost customer — built for trades, salons, and anyone who can't stop what they're doing to answer." },
    { eyebrow: "Dashboard", title: "Client dashboard.", desc: "A private, always-up-to-date link showing your upcoming bookings and leads — generated automatically from the same system that runs your WhatsApp. No extra app, no separate login, just one link that's always current." },
    { eyebrow: "Reputation", title: "Review and reputation manager.", desc: "Automatically asks happy customers for a Google review at the right moment. AI drafts on-brand replies to every review, ready for you to approve with one tap." },
    { eyebrow: "Social", title: "Social media automation.", desc: "Generates, schedules, and posts to Facebook and Instagram consistently — without you ever opening the app." },
    { eyebrow: "Custom", title: "Custom AI workflows.", desc: "Any repetitive process mapped and automated: invoices, onboarding, reporting. If a human is repeating it, we replace it." }
  ];

  const steps = [
    { num: "01", title: "Free strategy call", desc: "We find your biggest time-wasters." },
    { num: "02", title: "Custom build plan", desc: "Designed around your business." },
    { num: "03", title: "We build it for you", desc: "No code, no tech stress — just approve." },
    { num: "04", title: "Go live and grow", desc: "System runs, we optimise monthly." }
  ];

  const industries = [
    { eyebrow: "Hospitality", title: "Restaurants & cafés", desc: "Reservations, WhatsApp orders, reviews, loyalty." },
    { eyebrow: "Retail", title: "Retail & local shops", desc: "Restock alerts, promos, enquiry management." },
    { eyebrow: "Wellness", title: "Beauty & wellness", desc: "Self-booking, reminders, rebooking nudges." },
    { eyebrow: "Trades", title: "Trades & services", desc: "Lead qualification, quote follow-up, scheduling." }
  ];

  const plans = [
    { name: "Lead Response Bot", tag: "Most Popular", tagColor: "#1f9d5c", bg: "rgba(255,255,255,0.04)", setup: "R5,000", monthly: "R3,500/mo", btnBg: "#1f9d5c", btnBorder: "none", link: planLink("Lead Response Bot"),
      features: ["AI agent answering on WhatsApp, email & website chat — 24/7, replies in seconds", "Lead capture & instant follow-up on every enquiry", "Booking & appointment automation straight into your diary", "Missed Call Text-Back included", "Monthly performance report"] },
    { name: "Admin Autopilot", tag: "Plan", tagColor: "rgba(255,255,255,0.4)", bg: "#0a0a0a", setup: "R7,500", monthly: "R4,500/mo", btnBg: "transparent", btnBorder: "1px solid rgba(255,255,255,0.2)", link: planLink("Admin Autopilot"),
      features: ["Everything in Lead Response Bot", "Automated quoting & invoice follow-ups", "Customer reminders (reduce no-shows)", "Client Dashboard included", "Priority support + monthly strategy review"] },
    { name: "Custom Automation Build", tag: "Plan", tagColor: "rgba(255,255,255,0.4)", bg: "#0a0a0a", setup: "From R15,000", monthly: "Custom", btnBg: "transparent", btnBorder: "1px solid rgba(255,255,255,0.2)", link: planLink("Custom Automation Build"),
      features: ["Bespoke workflow automation (CRM, email, WhatsApp, sheets)", "Full business audit + dedicated account manager", "Unlimited custom automations", "Staff training included", "SLA and uptime guarantees"] }
  ];

  const faqs = [
    { q: "Do I need technical knowledge to use this?", a: "Not at all. We build, set up, and manage everything for you. You just approve and go live. If you can use WhatsApp, you can use our systems." },
    { q: "How long does setup take?", a: "Most systems go live within about 2 weeks. We keep you updated every step of the way." },
    { q: "Will this work with WhatsApp?", a: "Absolutely. WhatsApp integration is at the core of what we do. Our AI agents can chat with your customers on WhatsApp 24/7, just like a real person." },
    { q: "What happens if something breaks?", a: "We monitor your systems and fix issues fast. Admin Autopilot and Custom Automation Build include priority support. You're never left hanging." },
    { q: "Is this affordable for a small business?", a: "Yes — our Lead Response Bot package is designed to be accessible for small businesses. The ROI typically pays for itself within the first month through saved time and captured leads." },
    { q: "Can I see it before I pay?", a: "Of course. Book a free strategy call and we'll show you a live demo tailored to your business. No pressure, no obligation." }
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
      <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="plan-cta" style="background:${p.btnBg};border:${p.btnBorder}">Get started</a>
    </div>`).join("");

  document.getElementById("faq-list").innerHTML = faqs.map((f) => `
    <details class="faq-item">
      <summary><span class="faq-q">${escapeHtml(f.q)}</span><span class="faq-plus">+</span></summary>
      <p>${escapeHtml(f.a)}</p>
    </details>`).join("");

  // ---------- Nav scroll effect ----------
  const nav = document.getElementById("nav");
  const onScroll = () => {
    if (window.scrollY > 20) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

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
  (function initHeroCanvas() {
    const canvas = document.getElementById("hero-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const SIGNAL = "31,157,92";
    let t = 0;
    const mouse = { x: 0, y: 0 };
    window.addEventListener("mousemove", (e) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    });
    const dots = Array.from({ length: 22 }, (_, i) => ({
      a: (i / 22) * Math.PI * 2 + (i % 5) * 0.3,
      r: 0.5 + (i % 5) * 0.13,
      s: (0.04 + (i % 3) * 0.03) * (i % 2 === 0 ? 1 : -1),
      size: 1.5 + (i % 3),
      wob: (i % 4) * 0.6
    }));
    const loop = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
      ctx.clearRect(0, 0, w, h);
      const cx = w * 0.72 + mouse.x * 18;
      const cy = h * 0.42 + mouse.y * 14;
      const R = Math.min(w * 0.17, 250);
      const pulse = 0.5 + 0.5 * Math.sin(t * 1.4);

      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 2.4);
      glow.addColorStop(0, "rgba(" + SIGNAL + "," + (0.10 + pulse * 0.05) + ")");
      glow.addColorStop(1, "rgba(" + SIGNAL + ",0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);
      const glow2 = ctx.createRadialGradient(w * 0.12, h * 0.85, 0, w * 0.12, h * 0.85, R * 2);
      glow2.addColorStop(0, "rgba(" + SIGNAL + ",0.05)");
      glow2.addColorStop(1, "rgba(" + SIGNAL + ",0)");
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, w, h);

      const ring = (rx, ry, rot, alpha, cometSpeed) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rot);
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(" + SIGNAL + "," + alpha + ")";
        ctx.lineWidth = 1;
        ctx.stroke();
        const ca = t * cometSpeed;
        for (let k = 0; k < 7; k++) {
          const a = ca - k * 0.055;
          ctx.beginPath();
          ctx.arc(Math.cos(a) * rx, Math.sin(a) * ry, 2.4 - k * 0.28, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(" + SIGNAL + "," + (0.7 - k * 0.095) + ")";
          ctx.fill();
        }
        ctx.restore();
      };
      ring(R * 1.45, R * 0.5, t * 0.25, 0.28, 1.1);
      ring(R * 1.7, R * 0.42, -t * 0.18 + 0.9, 0.16, -0.8);

      for (let k = 0; k < 3; k++) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t * (0.2 + k * 0.07) + k);
        ctx.beginPath();
        for (let i = 0; i <= 6; i++) {
          const a = (i / 6) * Math.PI * 2;
          const r = R * (0.55 - k * 0.09) * (1 + pulse * 0.03);
          if (i === 0) ctx.moveTo(Math.cos(a) * r, Math.sin(a) * r * 0.92);
          else ctx.lineTo(Math.cos(a) * r, Math.sin(a) * r * 0.92);
        }
        ctx.closePath();
        ctx.strokeStyle = "rgba(" + SIGNAL + "," + (0.42 - k * 0.1) + ")";
        ctx.lineWidth = 1;
        ctx.stroke();
        if (k === 0) { ctx.fillStyle = "rgba(" + SIGNAL + "," + (0.04 + pulse * 0.03) + ")"; ctx.fill(); }
        ctx.restore();
      }

      dots.forEach((d) => {
        const a = d.a + t * d.s;
        const wobble = Math.sin(t * 0.8 + d.wob) * R * 0.05;
        const x = cx + Math.cos(a) * (R * 1.9 * d.r + wobble);
        const y = cy + Math.sin(a) * (R * 0.9 * d.r + wobble);
        const dist = Math.hypot(x - cx, y - cy);
        if (dist < R * 1.6) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(cx + (x - cx) * 0.35, cy + (y - cy) * 0.35);
          ctx.strokeStyle = "rgba(" + SIGNAL + "," + (0.14 * (1 - dist / (R * 1.6))) + ")";
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(a + t * 0.5);
        ctx.fillStyle = d.size > 2.5 ? "rgba(" + SIGNAL + ",0.45)" : "rgba(10,10,10,0.35)";
        ctx.fillRect(-d.size / 2, -d.size / 2, d.size, d.size);
        ctx.restore();
      });

      t += 0.01;
      requestAnimationFrame(loop);
    };
    loop();
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
