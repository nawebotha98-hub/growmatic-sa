# GrowMatic SA — canonical website (READ THIS FIRST)

**This repository IS "the website."** It is the live, canonical site for
`growmaticsa.com` — hand-built HTML/CSS/JS (referred to by the owner,
Ewan, as "the website I made with Claude design"). All future website
work (copy changes, animations, SEO, design) belongs here unless Ewan
explicitly says otherwise in a given conversation. Do not ask him to
re-clarify which site is "the website" — this file is the answer.

## Do NOT confuse this with `growmaticsa-com`

There is a **separate** GitHub repo, `growmaticsa-com`, built with
Lovable (React/Vite/Tailwind/shadcn). It looks similar (near-identical
branding and even similar hero copy at various points) and may itself be
configured as a GitHub Pages custom domain for `growmaticsa.com`. **It is
not the site Ewan considers "his" website.** If GitHub Pages custom-domain
settings on that repo conflict with this one (domain contention — DNS
resolving inconsistently, HTTPS cert problems, a shared link "not
opening"), the fix is to point `growmaticsa.com` at THIS repo
(`growmatic-sa`) in GitHub Settings > Pages, not the other way around.

## How this site is structured / deployed

- Plain static site: `index.html`, `styles.css`, `script.js`, `assets/`.
  No build step, no framework, no `node_modules`.
- Deploys via `.github/workflows/deploy.yml` (GitHub Actions →
  `actions/upload-pages-artifact` → `actions/deploy-pages`) on every push
  to `main`. This workflow was accidentally deleted around 2026-07-10
  (commit `e180d07`, "retire this repo's Pages deployment in favor of
  growmaticsa-com") and restored 2026-07-16 — if it goes missing again,
  that silently kills the ability to publish with no visible error.
- Custom domain is set via the `CNAME` file (`growmaticsa.com`) in the
  repo root — **do not remove this file.**
- Content (services, pricing, FAQs, industries, plans) lives inline in
  `script.js` as JS arrays rendered into the DOM — there is no CMS/DB
  backing this site's copy (unlike the Lovable repo, which pulls some
  sections from a Supabase `site_content` table).

## Related repos (for context, not "the website")

- `growmatic-sa-backend` — the shared Express/Node backend (Railway),
  handles the email auto-reply assistant (monitors
  `growmaticsa@gmail.com`, which Cloudflare Email Routing feeds from
  `ewan@growmaticsa.com`; replies send from
  `notifications@growmaticsa.com`), WhatsApp via Twilio, and site-chat.
  This backend is shared infrastructure and isn't tied to either frontend
  exclusively.
- `growmaticsa-com` — the Lovable-built decoy/secondary property described
  above. Do not treat as the live site.
