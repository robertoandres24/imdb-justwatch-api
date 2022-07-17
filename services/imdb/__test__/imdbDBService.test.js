const {
  createJustWatchUrl, cleanTitle, isTvShow, sanitizeList,
} = require('../imdbDBService');

describe('imdbDBService ', () => {
  it('should createJustWatchUrl(), if is Movie', () => {
    const item = {
      title: 'matrix',
      tvShow: false,
    };
    const url = createJustWatchUrl(item);
    expect(url).toBe(`https://www.justwatch.com/cl/pelicula/${item.title}`);
  });
  it('should createJustWatchUrl(), if is Tv-show', () => {
    const item = {
      title: 'rockefeller-plaza',
      tvShow: true,
    };
    const url = createJustWatchUrl(item);
    expect(url).toBe('https://www.justwatch.com/cl/serie/rockefeller-plaza');
  });
  it('should cleanTitle()', () => {
    const title = 'La profecía';
    const cleaned = cleanTitle(title);
    expect(cleaned).toBe('la-profecia');
  });
  it('should determine if isTvShow()', () => {
    const item = {
      title: 'La lista de Schindler',
      details: '19933h 15m12Biography, Drama, History',
    };
    const bool = isTvShow(item.details);
    expect(bool).toBe(false);
  });
  it('should sanitizeList()', () => {
    const imdbList = [
      {
        title: 'La lista de Schindler',
        details: '19933h 15m12Biography, Drama, History',
      },
      {
        title: 'Primal',
        details: '2019-TV Series11eps12Animation, Action, Adventure',
      },
    ];
    const cleanedList = sanitizeList(imdbList);
    expect(cleanedList).toEqual([{ title: 'la-lista-de-schindler', tvShow: false }, { title: 'primal', tvShow: true }]);
  });
});
