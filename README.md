# personal-website

A minimal Matrix-themed personal website with a markdown blog — no build step, no installs.

## Editing

Open `index.html` and replace:

- The `<title>`, and the `NAME` constant in the script at the bottom (it powers the typing effect)
- The paragraph with a sentence or two about yourself
- The placeholder links (GitHub, LinkedIn, X) with your real profile URLs

## Writing a blog post

1. Create a markdown file in `blog/posts/`, e.g. `blog/posts/my-post.md`
2. Add an entry (newest first) to `blog/posts.js`:

```js
{
  slug: "my-post",       // must match the filename without .md
  title: "My Post",
  date: "2026-09-01",
},
```

The post shows up on the blog page automatically. Posts are rendered client-side with [marked](https://github.com/markedjs/marked), loaded from a CDN.

Note: the blog loads post files with `fetch`, so it needs to be served over HTTP — opening `index.html` directly as a file won't load posts (see below).

## Previewing locally

Open the file directly in a browser, or serve it:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploying

Any static host works: GitHub Pages, Cloudflare Pages, Netlify, or Vercel. Just point it at this folder.
