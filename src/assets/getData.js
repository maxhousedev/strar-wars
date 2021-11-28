function getNum(subStr) {
  return (urlStr) => urlStr.replace(subStr, '').replace('/', '');
}

const getEpisodeNum = getNum('https://swapi.dev/api/films/');
const getPlanetNum = getNum('https://swapi.dev/api/planets/');
const getSpeciesNum = getNum('https://swapi.dev/api/species/');

export function getFilmList(filmsData) {
  const { results } = filmsData;

  const filmTitles = results.map((item) => ({
    director: item.director,
    producer: item.producer,
    created: item.created,
    edited: item.edited,
    released: item.release_date,
    title: item.title,
    openingCrawl: item.opening_crawl,
    episodeNum: getEpisodeNum(item.url),
    planets: item.planets,
    species: item.species,
  }));

  const imgUrl = [
    'https://im0-tub-ru.yandex.net/i?id=a0f044ec461f6c78c32a80641655da16-l&n=13',
    'https://images5.alphacoders.com/339/thumb-1920-339226.jpg',
    'https://movies.k210.org/images/movies/108/fanart/original/wUYTfFbfPiZC6Lcyt1nonr69ZmK.jpg',
    'https://image.tmdb.org/t/p/original/r7dNNDrAVRDi1acgh1nAe0nCVSt.jpg',
    'https://www.themoviedb.org/t/p/original/bAvC84Sw0HGKBpDmQJpOYbdGDCG.jpg',
    'https://image.tmdb.org/t/p/original/iP2tEA2A77qhbhRfcFkiD6WFOqH.jpg',
  ];
  for (let i = 0; i < 6; i++) {
    filmTitles[i].imgUrl = imgUrl[i];
  }

  return filmTitles;
}

export function getPlanetList(episode, planetsData) {
  const { planets } = episode;
  return planets.map((item) => planetsData.results[getPlanetNum(item)]);
}

export function getSpeciesList(episode, spicesData) {
  const { species } = episode;
  return species.map((item) => spicesData.results[getSpeciesNum(item)]);
}
