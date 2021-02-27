# Debauchville [NSFW]

A wiki for the deviant city of debauchville, an adult, erotic worldbuilding project based in a city with a long history of brazen disregard to social conventions and a hedonistic attitude to all things sexual. 100% NSFW.

## Contribution

Due the work & expense of servers, this 'wiki', will be JAMstack/static, which for those who don't know translates to prebuild servers on a file, why? no server costs, easy of transport between hosts.

The downside is no easy contribution, once up & ready will try Trello, where people can join, and following some contribution outlines, will allow people to make contributions to the site, whilst still being reletively managable, should contributions scale, will look at other workflows.

Contribution guide to be updated..

#### Kinks

Allowed/encouraged; Straight, lesbian, futa, 
Accepted, but not intented scope; trap,
Explicitly denied for this project; Loli, shota, gay, guro, furry/monster/tentacle

## Content Licence

MIT, but unless mentioned in a page I'd consider everything to be essentially public domain.

#### Original Template

sapper-blog-template
A starter template for building markdown-powered blogs with [Sapper](https://github.com/sveltejs/sapper) and [Svelte](https://github.com/sveltejs/svelte).

## ✨ Getting started

```bash
npm install # or yarn!
npm run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.

## 🏗 Structure

The base structure of this template is the same as Sapper's [default template](https://github.com/sveltejs/sapper-template/). These are some of the new things you'll find here:

### src/routes/blog

This is the home of your blog. The most important files in here are:

- `_posts.js`: this module contains the logic for loading and parsing your markdown posts.
- `[slug].svelte`: this is the template of your blog post page.
- `index.svelte`: this is the template of your article list page.

### src/routes/blog/posts

This is where your markdown posts live in. All `.md` files in this directory are treated as blog posts and parsed automatically by the `_posts.js` module.

- The markdown file name becomes the post slug. For example `hello-world.md` becomes `http://localhost:3000/blog/hello-world`.
- Everything between the start of the post and the `<!-- more -->` tag becomes the article's "excerpt".
- Frontmatter properties supported are `title` and `date`.
