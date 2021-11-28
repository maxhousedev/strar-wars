import createUnorderedList from '../utils/Components/createUnorderedList';
import createTitle from '../utils/Components/createTitle';
import { getFilmList } from './getData';
import { createFilmCard } from './createFilmCard';

export default function renderFilmList(mountElement, data) {
  window.location.hash = '';
  const filmList = getFilmList(data);
  const Title = createTitle({
    tagName: 'h2',
    textContent: 'Список эпизодов',
  });

  const filmListParams = {
    ulID: 'film-list',
    ulClassList: ['d-flex', 'flex-wrap', 'p-2'],
    itemIDPrefix: 'filmList-item-',
    itemClassList: ['filmList-item', 'mb-4', 'me-4'],
    children: filmList.map((film) => createFilmCard(film)),
  };
  const FilmList = createUnorderedList(filmListParams);

  if (mountElement) {
    mountElement.innerHTML = '';
    mountElement.appendChild(Title);
    mountElement.appendChild(FilmList);
  }
}
