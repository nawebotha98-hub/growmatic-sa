// GrowMatic SA — homepage behaviour (redesign)
// Nav scroll state, scroll-reveals, hero particle canvas, footer growth canvas.
(function () {
  "use strict";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---------- Nav: blur + hairline on scroll ----------
  var nav = document.getElementById("nav");
  if (nav) {
    var onScroll = function () {
      var s = window.scrollY > 20;
      nav.style.background = s ? "rgba(250,250,248,0.85)" : "transparent";
      nav.style.backdropFilter = s ? "blur(12px)" : "none";
      nav.style.webkitBackdropFilter = s ? "blur(12px)" : "none";
      nav.style.borderBottomColor = s ? "#e4e4e0" : "transparent";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // ---------- Scroll reveals ----------
  (function () {
    var els = document.querySelectorAll("[data-reveal]");
    var show = function (el) {
      var delay = parseInt(el.getAttribute("data-reveal-delay") || "0", 10);
      setTimeout(function () {
        el.style.opacity = "1";
        el.style.transform = "none";
      }, reduce ? 0 : delay);
    };
    els.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(32px) scale(0.99)";
      el.style.transition = "opacity .9s cubic-bezier(0.22,1,0.36,1), transform .9s cubic-bezier(0.22,1,0.36,1)";
    });
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach(show);
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { show(e.target); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
    // Fail-safe: never leave content hidden
    setTimeout(function () {
      els.forEach(function (el) { if (el.style.opacity === "0") show(el); });
    }, 6000);
  })();

  // ---------- Hero particle canvas ----------
  (function () {
    var el = document.getElementById("hero-fx");
    if (!el) return;
    var ctx = el.getContext("2d");
    if (!ctx) return;
    var SIGNAL = "31,157,92";
    var t = 0;
    var mouse = { x: 0, y: 0 };
    window.addEventListener("mousemove", function (e) {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    });
    var dots = Array.from({ length: 22 }, function (_, i) {
      return {
        a: (i / 22) * Math.PI * 2 + (i % 5) * 0.3,
        r: 0.5 + (i % 5) * 0.13,
        s: (0.04 + (i % 3) * 0.03) * (i % 2 === 0 ? 1 : -1),
        size: 1.5 + (i % 3),
        wob: (i % 4) * 0.6
      };
    });
    var loop = function () {
      var w = el.clientWidth, h = el.clientHeight;
      if (el.width !== w || el.height !== h) { el.width = w; el.height = h; }
      ctx.clearRect(0, 0, w, h);
      var cx = w * 0.72 + mouse.x * 18;
      var cy = h * 0.42 + mouse.y * 14;
      var R = Math.min(w * 0.17, 250);
      var pulse = 0.5 + 0.5 * Math.sin(t * 1.4);

      var glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 2.4);
      glow.addColorStop(0, "rgba(" + SIGNAL + "," + (0.10 + pulse * 0.05) + ")");
      glow.addColorStop(1, "rgba(" + SIGNAL + ",0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);
      var glow2 = ctx.createRadialGradient(w * 0.12, h * 0.85, 0, w * 0.12, h * 0.85, R * 2);
      glow2.addColorStop(0, "rgba(" + SIGNAL + ",0.05)");
      glow2.addColorStop(1, "rgba(" + SIGNAL + ",0)");
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, w, h);

      var ring = function (rx, ry, rot, alpha, cometSpeed) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rot);
        ctx.beginPath();
        ctx.ellipse(0, 0, rx, ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(" + SIGNAL + "," + alpha + ")";
        ctx.lineWidth = 1;
        ctx.stroke();
        var ca = t * cometSpeed;
        for (var k = 0; k < 7; k++) {
          var a = ca - k * 0.055;
          ctx.beginPath();
          ctx.arc(Math.cos(a) * rx, Math.sin(a) * ry, 2.4 - k * 0.28, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(" + SIGNAL + "," + (0.7 - k * 0.095) + ")";
          ctx.fill();
        }
        ctx.restore();
      };
      ring(R * 1.45, R * 0.5, t * 0.25, 0.28, 1.1);
      ring(R * 1.7, R * 0.42, -t * 0.18 + 0.9, 0.16, -0.8);

      for (var k = 0; k < 3; k++) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(t * (0.2 + k * 0.07) + k);
        ctx.beginPath();
        for (var i = 0; i <= 6; i++) {
          var a2 = (i / 6) * Math.PI * 2;
          var r = R * (0.55 - k * 0.09) * (1 + pulse * 0.03);
          if (i === 0) ctx.moveTo(Math.cos(a2) * r, Math.sin(a2) * r * 0.92);
          else ctx.lineTo(Math.cos(a2) * r, Math.sin(a2) * r * 0.92);
        }
        ctx.closePath();
        ctx.strokeStyle = "rgba(" + SIGNAL + "," + (0.42 - k * 0.1) + ")";
        ctx.lineWidth = 1;
        ctx.stroke();
        if (k === 0) { ctx.fillStyle = "rgba(" + SIGNAL + "," + (0.04 + pulse * 0.03) + ")"; ctx.fill(); }
        ctx.restore();
      }

      dots.forEach(function (d) {
        var a = d.a + t * d.s;
        var wobble = Math.sin(t * 0.8 + d.wob) * R * 0.05;
        var x = cx + Math.cos(a) * (R * 1.9 * d.r + wobble);
        var y = cy + Math.sin(a) * (R * 0.9 * d.r + wobble);
        var dist = Math.hypot(x - cx, y - cy);
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
      if (!reduce) requestAnimationFrame(loop);
    };
    loop();
  })();

  // ---------- Footer growth canvas ----------
  (function () {
    var el = document.getElementById("growth-fx");
    if (!el) return;
    var ctx = el.getContext("2d");
    if (!ctx) return;
    var progress = 0, t = 0, started = reduce;
    if (!reduce && "IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) { started = true; io.disconnect(); } });
      }, { threshold: 0.3 });
      io.observe(el);
    } else {
      started = true;
    }
    var ease = function (x) { return 1 - Math.pow(1 - x, 3); };
    var loop = function () {
      var w = el.clientWidth, h = el.clientHeight;
      if (el.width !== w || el.height !== h) { el.width = w; el.height = h; }
      ctx.clearRect(0, 0, w, h);
      if (started && progress < 1) progress = Math.min(1, progress + (reduce ? 1 : 0.008));
      var p = ease(progress);
      var base = h - 28;
      var n = 9;
      var bw = 30, gap = 34;
      var total = n * bw + (n - 1) * gap;
      var x0 = (w - total) / 2;
      var sway = Math.sin(t * 0.9) * 0.06;

      for (var i = 0; i < n; i++) {
        var stagger = Math.min(1, Math.max(0, (p * (n + 2) - i) / 2));
        var bh = (0.18 + (i / (n - 1)) * 0.62) * (h - 60) * ease(stagger);
        var x = x0 + i * (bw + gap);
        ctx.fillStyle = "rgba(31,157,92," + (0.16 + (i / (n - 1)) * 0.3) + ")";
        ctx.fillRect(x, base - bh, bw, bh);
      }

      var sx = x0 - 20, sy = base;
      var exBase = x0 + total - bw / 2, eyBase = base - (h - 60) * 0.86;
      var ex = exBase + Math.sin(t * 0.9) * 4 * p;
      var ey = eyBase + Math.cos(t * 0.7) * 2 * p;
      ctx.beginPath();
      ctx.moveTo(sx, sy);
      ctx.bezierCurveTo(x0 + total * 0.35, base - 8, x0 + total * 0.55, base - (h - 60) * 0.4, ex, ey);
      ctx.strokeStyle = "#1f9d5c";
      ctx.lineWidth = 3;
      ctx.lineCap = "round";
      var len = 1200;
      ctx.setLineDash([len]);
      ctx.lineDashOffset = len * (1 - p);
      ctx.stroke();
      ctx.setLineDash([]);

      var lp = Math.max(0, (progress - 0.8) / 0.2);
      if (lp > 0) {
        var leaf = function (angle, size) {
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
      if (!reduce) requestAnimationFrame(loop);
    };
    loop();
  })();
})();
