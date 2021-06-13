import stories from './_items.js';

const contents = JSON.stringify(stories.map(story => {
  return {
    title: story.title,
    data: story.data,
    slug: story.slug,
    thumbnail: story.thumbnail,
  };
}));

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
