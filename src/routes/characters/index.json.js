import characters from "./_items.js";

const contents = JSON.stringify(
  characters.map((character) => {
    return {
      title: character.title,
      slug: character.slug,
      thumbnail: character.data.thumbnail,
      gender: character.data.gender,
      excerpt: character.excerpt,
      editDate: character.editDate,
    };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  res.end(contents);
}
