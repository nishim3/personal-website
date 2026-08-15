# personal-website

An extremely minimal personal website — a single `index.html`, no build step, no dependencies.

## Editing

Open `index.html` and replace:

- The `<title>` and `<h1>` with your name
- The paragraph with a sentence or two about yourself
- The placeholder links (GitHub, LinkedIn, X) with your real profile URLs

## Previewing locally

Open the file directly in a browser, or serve it:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploying

Any static host works: GitHub Pages, Cloudflare Pages, Netlify, or Vercel. Just point it at this folder.
