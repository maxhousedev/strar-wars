export default function createHeader({
  headerClassList = [],
  navClassList = [],
}) {
  const Header = document.createElement('header');
  Header.classList.add(...headerClassList);
  const Nav = document.createElement('nav');
  Nav.classList.add(...navClassList);
  Header.appendChild(Nav);

  return { Header, Nav };
}
