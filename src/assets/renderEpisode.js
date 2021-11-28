import { getFilmList, getPlanetList, getSpeciesList } from './getData';
import { createFilmCard } from './createFilmCard';
import getFromHash from './getFromHash';
import createTitle from '../utils/Components/createTitle';

function createPlanets(film, planetsData) {
  const Planets = document.createElement('div');
  const PlanetTitle = createTitle({
    tagName: 'h3',
    textContent: 'Список планет:',
  });
  Planets.appendChild(PlanetTitle);

  const planetList = getPlanetList(film, planetsData);

  planetList.forEach((planet) => {
    if (planet) {
      const { name, gravity, terrain, climate } = planet;

      const Name = createTitle({
        tagName: 'h5',
        textContent: `${name}`,
        classList: ['fw-bold'],
      });

      const Description = document.createElement('p');
      Description.innerHTML = `
        <b>Гравитация:</b> ${gravity}<br>
        <b>Поверхность:</b> ${terrain}<br>
        <b>Климат:</b> ${climate}`;

      Planets.appendChild(Name);
      Planets.appendChild(Description);
    }
  });

  return Planets;
}

function createSpecies(film, speciesData) {
  const Species = document.createElement('div');
  const SpeciesTitle = createTitle({
    tagName: 'h3',
    textContent: 'Список рас:',
  });
  Species.appendChild(SpeciesTitle);

  const speciesList = getSpeciesList(film, speciesData);

  speciesList.forEach((species) => {
    if (species) {
      const { name, language, homeworld } = species;

      const Name = createTitle({
        tagName: 'h5',
        textContent: `${name}`,
        classList: ['fw-bold'],
      });

      const Description = document.createElement('p');
      Description.innerHTML = `
        <b>Язык:</b> ${language}<br>
        <b>Родная планета:</b> ${homeworld}`;

      Species.appendChild(Name);
      Species.appendChild(Description);
    }
  });

  return Species;
}

export default function renderEpisode(
  mountElement,
  filmsData,
  planetsData,
  speciesData
) {
  const episodeNum = getFromHash(window.location.hash);
  if (episodeNum) {
    mountElement.innerHTML = '';
    const films = getFilmList(filmsData);
    const film = films[episodeNum - 1];
    const Title = createTitle({
      tagName: 'h2',
      textContent: `Эпизод ${film.episodeNum}`,
    });

    mountElement.appendChild(Title);

    const Raw = document.createElement('div');
    Raw.classList.add('row');
    mountElement.appendChild(Raw);

    const CardContainer = document.createElement('div');
    CardContainer.classList.add('col-4');
    Raw.appendChild(CardContainer);

    const Card = createFilmCard(film, false);
    CardContainer.appendChild(Card);

    createPlanets(film, planetsData);

    const Planets = createPlanets(film, planetsData);
    Planets.classList.add('col-4');
    Raw.appendChild(Planets);

    const Species = createSpecies(film, speciesData);
    Species.classList.add('col-4');
    Raw.appendChild(Species);
  }
}
