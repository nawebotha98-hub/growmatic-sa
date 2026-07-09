# growmatic-sa
AI Automation Platform for South African Businesses

Static marketing site for growmaticsa.com, built from the Claude Design handoff. Plain HTML/CSS/JS, no build step, no backend — hosted on GitHub Pages instead of Lovable.

## Local preview
Open `index.html` directly in a browser, or serve the folder (e.g. `python3 -m http.server`) to test with proper relative paths.

## Deployment
Pushing to `main` triggers `.github/workflows/deploy-pages.yml`, which publishes this repo to GitHub Pages. The `CNAME` file points the deployment at `growmaticsa.com`.

One-time setup required in the repo settings (see the accompanying DNS/Pages setup notes): enable Pages with source "GitHub Actions", and point growmaticsa.com's DNS at GitHub Pages.
