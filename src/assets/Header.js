import createHeader from '../utils/Components/createHeader';
import logoImg from '../img/logo.jpg';
import createUnorderedList from '../utils/Components/createUnorderedList';
import createAnchor from '../utils/Components/createAnchor';
import createImg from '../utils/Components/createImg';

const headerClassList = [
  'container-fluid',
  'd-flex',
  'justify-content-between',
  'align-items-center',
  'py-2',
  'px-4',
  'bg-light',
];

const navListParams = {
  ulID: 'nav-list',
  ulClassList: ['d-flex', 'justify-content-between', 'w-100', 'm-0'],
  itemIDPrefix: 'nav-item-',
  itemClassList: [],
};

const navClassList = [
  'd-none',
  'd-lg-flex',
  'col-lg-10',
  'align-items-center',
  'navbar',
  'navbar-light',
];

const Logo = createAnchor({
  textContent: '',
  classList: ['col-12', 'col-lg-2', 'order-lg-first', 'js-reload'],
});

const Img = createImg({
  src: logoImg,
  classList: ['mx-auto', 'mx-lg-0'],
  alt: 'Star Wars',
});
Img.style.width = '50px';
Img.style.borderRadius = '50%';

Logo.appendChild(Img);

const Catalog = createAnchor({
  textContent: 'Каталог',
  classList: ['btn', 'btn-sm', 'btn-outline-primary', 'js-catalog'],
});

const Episodes = [];

for (let i = 0; i < 6; i++) {
  const Episode = createAnchor({
    href: `#episode-${i + 1}`,
    textContent: `Эпизод ${i + 1}`,
    classList: ['btn', 'btn-sm', 'btn-outline-info', 'js-episode'],
  });
  Episodes.push(Episode);
}

const children = [Catalog, ...Episodes];
navListParams.children = children;

export default function renderHeader() {
  const { Header, Nav } = createHeader({ headerClassList, navClassList });
  Header.appendChild(Logo);
  const NavList = createUnorderedList(navListParams);
  Nav.appendChild(NavList);
  return { Header, Nav };
}
