// GrowMatic SA — homepage behaviour (redesign)
// Nav scroll state, scroll-reveals, hero flow streams, footer growth canvas.
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
    setTimeout(function () {
      els.forEach(function (el) { if (el.style.opacity === "0") show(el); });
    }, 6000);
  })();

  // ---------- Hero: flowing signal streams ----------
  // Faint green->blue lines spanning the full width, each carrying travelling
  // light pulses that flow left-to-right — "data moving through" the page,
  // spread across the hero rather than clustered in one corner.
  (function () {
    var el = document.getElementById("hero-fx");
    if (!el) return;
    var ctx = el.getContext("2d");
    if (!ctx) return;
    var t = 0;
    var STREAMS = 7;

    var draw = function () {
      var w = el.clientWidth, h = el.clientHeight;
      if (el.width !== w || el.height !== h) { el.width = w; el.height = h; }
      ctx.clearRect(0, 0, w, h);

      for (var i = 0; i < STREAMS; i++) {
        var p = i / (STREAMS - 1);
        var y = h * (0.14 + p * 0.72);
        var amp = h * 0.028 * (0.5 + Math.sin(p * Math.PI));
        var freq = 1.0 + p * 0.7;
        var phase = t * 0.5 + i * 0.8;

        // faint base line
        ctx.beginPath();
        for (var s = 0; s <= 80; s++) {
          var u = s / 80;
          var x = u * w;
          var yy = y + Math.sin(u * Math.PI * 2 * freq + phase) * amp;
          if (s === 0) ctx.moveTo(x, yy); else ctx.lineTo(x, yy);
        }
        var a = 0.05 + 0.06 * Math.sin(p * Math.PI);
        var g = ctx.createLinearGradient(0, 0, w, 0);
        g.addColorStop(0, "rgba(31,157,92,0)");
        g.addColorStop(0.5, "rgba(31,157,92," + a.toFixed(3) + ")");
        g.addColorStop(1, "rgba(31,78,140,0)");
        ctx.strokeStyle = g;
        ctx.lineWidth = 1;
        ctx.stroke();

        // travelling pulses
        for (var k = 0; k < 2; k++) {
          var pos = ((t * 0.05 * (0.7 + p) + i * 0.17 + k * 0.5) % 1 + 1) % 1;
          var px = pos * w;
          var py = y + Math.sin(pos * Math.PI * 2 * freq + phase) * amp;
          var col = k === 0 ? "31,157,92" : "31,78,140";
          var edge = Math.sin(pos * Math.PI); // fade in/out at the edges
          var glow = ctx.createRadialGradient(px, py, 0, px, py, 12);
          glow.addColorStop(0, "rgba(" + col + "," + (0.5 * edge).toFixed(3) + ")");
          glow.addColorStop(1, "rgba(" + col + ",0)");
          ctx.fillStyle = glow;
          ctx.fillRect(px - 12, py - 12, 24, 24);
          ctx.beginPath();
          ctx.arc(px, py, 1.7, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(" + col + "," + (0.85 * edge).toFixed(3) + ")";
          ctx.fill();
        }
      }

      t += 0.02;
      if (!reduce) requestAnimationFrame(draw);
    };
    draw();
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
