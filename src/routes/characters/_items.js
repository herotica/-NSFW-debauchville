import all from './items/*.md';

export default all
  .map((character) => ({ ...character, html: character.html.replace(/^\t{3}/gm, '') }))
