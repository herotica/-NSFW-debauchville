import all from './items/*.md';

export default all
  .map((places) => ({ ...places, html: places.html.replace(/^\t{3}/gm, '') }))
