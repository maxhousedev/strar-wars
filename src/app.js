import './scss/styles.scss';
import loadCSS from './utils/js/loadCSS';
import StarWarsPromises from './assets/loadResources';
import createRoot from './utils/Components/creatRoot';
import easyLoader from './utils/Components/EasyLoader/easyLoader';
import renderHeader from './assets/Header';
import renderMain from './assets/Main';
import getFromHash from './assets/getFromHash';
import renderFilmList from './assets/renderFilmList';
import renderEpisode from './assets/renderEpisode';

export default function createApp() {
  // styles
  const bootstrap = {
    href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
    integrity:
      'sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3',
    crossorigin: 'anonymous',
  };
  const cssLoaded = {};

  const Root = createRoot({ classList: ['container'] });
  document.body.appendChild(Root);
  easyLoader.show();

  Promise.all([
    loadCSS({ cssLoaded, ...bootstrap }),
    ...StarWarsPromises.map((fn) => fn()),
  ]).then((values) => {
    easyLoader.remove();

    const { Header } = renderHeader();
    Root.appendChild(Header);
    const { Main, Container } = renderMain();
    Root.appendChild(Main);

    const [, films, planets, species] = values;
    renderFilmList(Container, films);

    window.addEventListener('hashchange', () => {
      const episodeNum = getFromHash(window.location.hash);

      if (episodeNum === 0) {
        renderFilmList(Container, films);
      } else {
        renderEpisode(Container, films, planets, species);
      }
    });

    document.querySelector('a.js-reload').addEventListener('click', () => {
      window.location.reload();
    });
  });
}
