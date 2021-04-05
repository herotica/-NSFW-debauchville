import all from './items/*.md';

export default all
  .map((stories) => ({ ...stories, html: stories.html.replace(/^\t{3}/gm, '') }))
