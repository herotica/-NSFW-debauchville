import places from './_items.js';

const contents = JSON.stringify(places.map(place => {
  return {
    title: place.title,
    slug: place.slug,
    excerpt: place.excerpt,
  };
}));

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
