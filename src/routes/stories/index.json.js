import stories from './_items.js';

const contents = JSON.stringify(stories.map(story => {
  return {
    title: story.title,
    slug: story.slug,
    excerpt: story.excerpt,
  };
}));

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
