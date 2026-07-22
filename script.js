(() => {
  "use strict";

  const WHATSAPP_NUMBER = "27827900255";
  const wa = (text) => "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
  const waCall = wa("Hi! I'd like to book a free automation review.");
  const waGeneral = wa("Hi! I'd like to learn more about GrowMatic SA.");
  const waDemo = wa("Hi! I'd like to see your automation in action on WhatsApp.");
  const planLink = (plan) => wa("Hi! I'm interested in the " + plan + " plan");

  document.querySelectorAll(".wa-call").forEach((el) => (el.href = waCall));
  document.querySelectorAll(".wa-general").forEach((el) => (el.href = waGeneral));
  document.querySelectorAll(".wa-demo").forEach((el) => (el.href = waDemo));

  const services = [
    { eyebrow: "Never Miss a Lead", title: "Every Missed Call, Recovered.", desc: "The problem: when you can't get to the phone, most callers don't leave a message — they simply call the next business. The moment a call is missed, we send the caller a friendly WhatsApp within seconds. The result: a missed call becomes a live conversation instead of a lost customer — the easiest place to start, and usually the one that pays for itself first." },
    { eyebrow: "Customer Communication", title: "24/7 Customer Response.", desc: "The problem: enquiries come in after hours and across WhatsApp, email and your website — and a slow reply loses the sale. Our always-on response system answers every customer in seconds, day or night, and only brings you in when a real person is genuinely needed. The result: no enquiry ever goes cold, and you look bigger and more professional than the competition." },
    { eyebrow: "Lead Management", title: "Turn More Enquiries Into Customers.", desc: "The problem: most leads never get a second follow-up, so they quietly go cold. We capture every enquiry from every source and follow up automatically until the customer books, buys, or clearly says no. The result: more of the leads you already work hard to get actually turn into paying customers." },
    { eyebrow: "Email & Admin", title: "Email & Everyday Admin, Off Your Plate.", desc: "The problem: your inbox, quotes, invoices and repetitive admin eat hours every week and pull you away from real work. We automate the back-and-forth — drafting and sending replies, chasing quotes and invoices, sorting and routing email, and handling the recurring paperwork. The result: a calmer inbox, less manual admin, and hours back in your week." },
    { eyebrow: "Bookings & Scheduling", title: "Effortless Booking & Appointments.", desc: "The problem: endless back-and-forth to set a time, plus costly no-shows. Customers self-book in seconds, and friendly reminders go out automatically before every appointment. The result: a fuller diary, far fewer no-shows, and zero admin on your side." },
    { eyebrow: "Reputation & Reviews", title: "Build a 5-Star Reputation.", desc: "The problem: your happiest customers rarely leave a review, and the reviews you do get sit unanswered. We ask satisfied customers for a Google review at exactly the right moment and draft an on-brand reply to every review for you to approve in one tap. The result: more 5-star reviews, more trust, and more new customers finding you online." },
    { eyebrow: "Business Intelligence", title: "See Your Business at a Glance.", desc: "The problem: your bookings and leads are scattered across your phone, inbox and memory. A private, always-current dashboard shows every upcoming booking and new lead in one place — no extra app, no separate login. The result: you always know exactly where the business stands, without digging for it." },
    { eyebrow: "Process Optimisation", title: "Streamline the Work Behind the Scenes.", desc: "The problem: onboarding, reporting and repeated hand-offs eat hours of manual work every week. As your automation consultant, we map the repetitive processes in your business and take them off your plate — one workflow at a time. The result: less manual work, fewer mistakes, and more time to focus on growth. If your team is repeating it, we can automate it." }
  ];

  const steps = [
    { num: "01", title: "Free automation review", desc: "We look at your business and find where you're losing time and leads." },
    { num: "02", title: "Start with one", desc: "We pick the single automation that'll pay off fastest — no big commitment." },
    { num: "03", title: "We set it up", desc: "We build, connect and test everything for you. You just approve and go live." },
    { num: "04", title: "Prove it, then grow", desc: "Once it's working, we automate the next thing — leads, email, admin, bookings." }
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
    { name: "Never Miss a Lead", tag: "Start Here", tagColor: "#1f9d5c", bg: "rgba(255,255,255,0.04)", setup: "R1,500", monthly: "+ R650/mo", btnBg: "#1f9d5c", btnBorder: "none", link: planLink("Never Miss a Lead"),
      features: ["Instant WhatsApp reply to every missed call, 24/7", "Common questions answered & the lead's details captured", "Automatic follow-up so no enquiry goes cold", "Every lead in one place — nothing slips through", "30-day pilot · month-to-month · cancel anytime"] },
    { name: "Growth Starter", tag: "Most Popular", tagColor: "#1f9d5c", bg: "#0a0a0a", setup: "R5,000", monthly: "+ R3,500/mo", btnBg: "transparent", btnBorder: "1px solid rgba(255,255,255,0.2)", link: planLink("Growth Starter"),
      features: ["Everything in Never Miss a Lead", "24/7 customer response on WhatsApp, email & website chat", "Every enquiry captured and followed up automatically", "Bookings & appointments straight into your diary", "Monthly results report"] },
    { name: "Business Autopilot", tag: "Scale Up", tagColor: "rgba(255,255,255,0.4)", bg: "#0a0a0a", setup: "From R7,500", monthly: "+ R4,500/mo", btnBg: "transparent", btnBorder: "1px solid rgba(255,255,255,0.2)", link: planLink("Business Autopilot"),
      features: ["Everything in Growth Starter", "Email & everyday admin automated — quotes, invoices, inbox", "Reminders that cut no-shows", "Live business dashboard included", "Priority support + monthly growth review"] }
  ];

  const faqs = [
    { q: "Can I try it before I pay?", a: "Yes. WhatsApp us and you'll watch the automation reply to you in seconds — the exact experience your own customers would get. Then you can start with a 30-day pilot, month-to-month, cancel anytime. No lock-in." },
    { q: "Do I have to automate everything at once?", a: "Not at all — that's the point. Most businesses start with the single automation that pays for itself fastest (usually recovering missed calls), prove it works, and only then add more. You grow at your pace." },
    { q: "What does it cost to start?", a: "Our starter automation is R1,500 once-off setup + R650/mo, month-to-month. One recovered job usually covers months of it. Bigger packages that add lead follow-ups, bookings, email and admin are R5,000 setup + R3,500/mo and up." },
    { q: "Do I need any technical knowledge?", a: "None. We build, connect, test and manage everything for you — you just approve and go live. If you can use WhatsApp, you'll be completely fine." },
    { q: "Can you help with email and admin too?", a: "Yes — that's core to what we do as an automation consultancy. Beyond leads and missed calls, we automate the repetitive back-office work: drafting and sorting email, chasing quotes and invoices, and the everyday admin that eats your week." },
    { q: "What if I want to stop?", a: "Every plan is month-to-month — cancel anytime, no penalties. We'd rather earn your business every month by keeping the results coming than lock you into a contract." }
  ];

  // Recent work / social proof. Add a client here the moment you deliver one —
  // the section stays hidden until this array has at least one entry, so the
  // live site never shows an empty "Recent Work" block. Shape:
  //   { business: "Joe's Electrical", trade: "Electrician", town: "Gqeberha",
  //     quote: "Every missed call now gets an instant WhatsApp back — we booked 3 jobs in the first week we'd otherwise have lost." }
  const work = [
    // { business: "", trade: "", town: "", quote: "" },
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
      <div class="plan-monthly">${escapeHtml(p.monthly)}</div>
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

  // Render Recent Work if we have any — otherwise remove the whole section so
  // it never appears empty on the live site.
  (function renderWork() {
    const list = document.getElementById("work-list");
    const section = document.getElementById("work");
    if (!list) return;
    if (!work.length) { if (section) section.remove(); return; }
    list.innerHTML = work.map((w) => `
      <div class="work-card reveal">
        <div class="work-stars">★★★★★</div>
        <p class="work-quote">${escapeHtml(w.quote)}</p>
        <div class="work-who"><strong>${escapeHtml(w.business)}</strong><span>${escapeHtml([w.trade, w.town].filter(Boolean).join(" · "))}</span></div>
      </div>`).join("");
  })();

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

  // ---------- Hero canvas: 3D emerald flow field ----------
  // A premium, GPU-rendered particle field drifting through perspective depth
  // along a flow field — soft green points, depth-fogged, biased to the open
  // right side so the headline (left) stays clear. Parallax responds to pointer
  // and device tilt; it fades in once and loops seamlessly. Reduced motion draws
  // a single static frame; if WebGL is unavailable it falls back to the CSS
  // depth-glows alone (a clean light hero, never broken).
  (function initHeroCanvas() {
    const canvas = document.getElementById("hero-canvas");
    if (!canvas) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let gl;
    try {
      gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: false, antialias: true })
        || canvas.getContext("experimental-webgl", { alpha: true, premultipliedAlpha: false });
    } catch (e) { gl = null; }
    if (!gl) return;

    const VS = `
      attribute vec3 aBase; attribute vec2 aSeed;
      uniform float uTime,uAspect,uDpr,uFade,uField; uniform vec2 uPointer;
      varying float vA,vC;
      vec3 flow(vec3 p,float t){
        float x=sin(p.y*1.3+t*0.5+aSeed.x*6.2831)+cos(p.z*0.9-t*0.4);
        float y=sin(p.z*1.1+t*0.45)+cos(p.x*1.2+t*0.5+aSeed.y*6.2831);
        float z=sin(p.x*1.0-t*0.35)+cos(p.y*1.4+t*0.4);
        return vec3(x,y,z);
      }
      void main(){
        float t=uTime; vec3 p=aBase;
        p+=flow(aBase,t)*0.11*uField;
        p.x+=sin(t*0.10+aSeed.x)*0.05*p.z;
        p.y+=cos(t*0.08+aSeed.y)*0.04*p.z;
        p.x+=uPointer.x*0.26*p.z;
        p.y+=uPointer.y*0.26*p.z;
        float persp=1.85/(p.z+1.25);
        vec2 pos=vec2(p.x,p.y)*persp; pos.x/=uAspect;
        gl_Position=vec4(pos,0.0,1.0);
        float fog=smoothstep(3.4,0.35,p.z);
        float clear=smoothstep(-0.85,0.30,pos.x);
        vA=fog*uFade*(0.14+aSeed.x*0.5)*(0.32+0.68*clear);
        vC=clamp(aSeed.y*0.55+(1.0-fog)*0.5,0.0,1.0);
        float size=(9.0+aSeed.y*26.0)*persp*uDpr;
        gl_PointSize=clamp(size,1.0,80.0*uDpr);
      }`;
    const FS = `
      precision mediump float; varying float vA,vC;
      uniform vec3 uColA,uColB; uniform float uAlpha;
      void main(){
        vec2 d=gl_PointCoord-0.5; float r=length(d);
        if(r>0.5) discard;
        float glow=pow(smoothstep(0.5,0.0,r),1.7);
        gl_FragColor=vec4(mix(uColA,uColB,vC), glow*vA*uAlpha);
      }`;

    const compile = (type, src) => {
      const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
      return s;
    };
    let prog;
    try {
      prog = gl.createProgram();
      gl.attachShader(prog, compile(gl.VERTEX_SHADER, VS));
      gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FS));
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
    } catch (e) { return; }
    gl.useProgram(prog);

    const N = Math.min(1500, Math.max(500, Math.round(window.innerWidth * window.innerHeight / 1700)));
    const base = new Float32Array(N * 3);
    const seed = new Float32Array(N * 2);
    const rand = (a, b) => a + Math.random() * (b - a);
    for (let i = 0; i < N; i++) {
      base[i * 3] = rand(-1.7, 2.0);
      base[i * 3 + 1] = rand(-1.25, 1.25);
      base[i * 3 + 2] = rand(0.25, 3.3);
      seed[i * 2] = Math.random();
      seed[i * 2 + 1] = Math.random();
    }
    const buf = (data, loc, size) => {
      const b = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, b);
      gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
      const a = gl.getAttribLocation(prog, loc);
      gl.enableVertexAttribArray(a); gl.vertexAttribPointer(a, size, gl.FLOAT, false, 0, 0);
    };
    buf(base, "aBase", 3); buf(seed, "aSeed", 2);

    const U = (n) => gl.getUniformLocation(prog, n);
    const uTime = U("uTime"), uAspect = U("uAspect"), uDpr = U("uDpr"), uFade = U("uFade"),
      uField = U("uField"), uPointer = U("uPointer"), uColA = U("uColA"), uColB = U("uColB"), uAlpha = U("uAlpha");

    let W = 0, H = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.uniform1f(uAspect, W / H); gl.uniform1f(uDpr, dpr);
    };
    window.addEventListener("resize", resize);

    gl.disable(gl.DEPTH_TEST);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.uniform3f(uColA, 0.10, 0.52, 0.31);
    gl.uniform3f(uColB, 0.18, 0.72, 0.42);
    gl.uniform1f(uAlpha, 0.62);
    resize();

    let pxT = 0, pyT = 0, px = 0, py = 0;
    window.addEventListener("mousemove", (e) => { pxT = e.clientX / W * 2 - 1; pyT = -(e.clientY / H * 2 - 1); });
    window.addEventListener("deviceorientation", (e) => {
      if (e.gamma == null) return;
      pxT = Math.max(-1, Math.min(1, e.gamma / 35));
      pyT = Math.max(-1, Math.min(1, (e.beta - 45) / 35));
    });

    const start = performance.now();
    let fade = 0;
    const draw = (now) => {
      const t = (now - start) / 1000;
      fade = Math.min(1, fade + 0.012);
      const auto = 0.35 * Math.sin(t * 0.15);
      px += ((pxT || auto) - px) * 0.04;
      py += ((pyT || 0.2 * Math.cos(t * 0.12)) - py) * 0.04;
      gl.clearColor(0, 0, 0, 0); gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(uTime, reduceMotion ? 6.0 : t);
      gl.uniform1f(uFade, fade);
      gl.uniform1f(uField, reduceMotion ? 0.0 : 1.0);
      gl.uniform2f(uPointer, px, py);
      gl.drawArrays(gl.POINTS, 0, N);
      if (!reduceMotion) requestAnimationFrame(draw);
    };
    if (reduceMotion) { fade = 1; draw(start + 6000); }
    else requestAnimationFrame(draw);
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

// ---------- Contact form ----------
// Posts name/phone/email/message to the backend, which notifies the owner by
// WhatsApp + email (POST /api/contact-lead). The WhatsApp buttons and Matt
// chat still work as before — this catches the visitor who'd rather just
// leave their details and get a call back.
(function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const ENDPOINT = "https://growmatic-backend-production.up.railway.app/api/contact-lead";
  const nameEl = document.getElementById("cf-name");
  const phoneEl = document.getElementById("cf-phone");
  const emailEl = document.getElementById("cf-email");
  const messageEl = document.getElementById("cf-message");
  const honeypotEl = document.getElementById("cf-company");
  const submitBtn = document.getElementById("cf-submit");
  const statusEl = document.getElementById("cf-status");

  const setStatus = (msg, kind) => {
    statusEl.textContent = msg;
    statusEl.className = "cf-status" + (kind ? " is-" + kind : "");
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Honeypot: real users never see this field. If it's filled, it's a bot —
    // pretend all is well and quietly drop it.
    if (honeypotEl && honeypotEl.value) {
      form.reset();
      setStatus("Thanks! We'll be in touch.", "ok");
      return;
    }

    const name = nameEl.value.trim();
    const phone = phoneEl.value.trim();
    const email = emailEl.value.trim();
    const message = messageEl.value.trim();

    if (!name) {
      setStatus("Please add your name so we know who we're talking to.", "err");
      nameEl.focus();
      return;
    }
    if (!phone && !email) {
      setStatus("Please add a phone number or email so we can reach you.", "err");
      phoneEl.focus();
      return;
    }

    submitBtn.disabled = true;
    setStatus("Sending…", "");

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, message }),
      });
      if (!res.ok) throw new Error("Request failed with status " + res.status);
      form.reset();
      setStatus(
        "Thanks " + name.split(" ")[0] + "! We've got your details and will be in touch within one business day. 🌱",
        "ok"
      );
    } catch (err) {
      setStatus(
        "Sorry, that didn't go through. Please WhatsApp us on 082 790 0255 or email ewan@growmaticsa.com and we'll sort you out.",
        "err"
      );
    } finally {
      submitBtn.disabled = false;
    }
  });
})();
