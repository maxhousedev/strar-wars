import createAnchor from '../utils/Components/createAnchor';
import createImg from '../utils/Components/createImg';
import createTitle from '../utils/Components/createTitle';

export const EPISODE_HASH_PREFIX = '#episode-';

export function createFilmCard(film, withButton = true) {
  const Card = document.createElement('div');
  Card.classList.add('card');

  const Img = createImg({
    src: film.imgUrl,
    classList: ['card-img-top'],
    alt: `episode-${film.episodeNum}`,
  });
  Card.appendChild(Img);

  const CardBody = document.createElement('div');
  CardBody.classList.add('card-body');

  const Title = createTitle({
    tagName: 'h5',
    classList: ['card-title'],
    textContent: film.title,
  });
  CardBody.appendChild(Title);

  let Button = null;

  if (withButton) {
    const EpisodeNum = document.createElement('p');
    EpisodeNum.classList.add('card-text');
    EpisodeNum.textContent = `Эпизод ${film.episodeNum}`;
    CardBody.appendChild(EpisodeNum);

    Button = createAnchor({
      href: `${EPISODE_HASH_PREFIX}${film.episodeNum}`,
      classList: ['btn', 'btn-outline-primary', 'js-about'],
      textContent: 'Подробнее...',
    });
  } else {
    const Crawl = document.createElement('p');
    Crawl.classList.add('card-text');
    Crawl.textContent = film.openingCrawl;
    CardBody.appendChild(Crawl);

    Button = createAnchor({
      href: '#',
      classList: ['btn', 'btn-outline-primary', 'js-catalog'],
      textContent: 'Назад к каталогу',
    });
  }

  const Released = document.createElement('p');
  Released.classList.add('card-text');
  Released.textContent = `Дата выпуска ${new Date(
    film.released
  ).toLocaleDateString()}`;
  CardBody.appendChild(Released);

  if (Button) {
    CardBody.appendChild(Button);
  }

  Card.appendChild(CardBody);

  return Card;
}
