import characters from './_items.js';

const contents = JSON.stringify(characters.map(character => {
  console.log('>>char', character);
  return {
    title: character.title,
    slug: character.slug,
    excerpt: character.excerpt,
  };
}));

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
