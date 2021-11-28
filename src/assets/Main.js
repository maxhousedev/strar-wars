import createTitle from '../utils/Components/createTitle';

function createContainer() {
  const Container = document.createElement('div');
  Container.classList.add('bg-light', 'p-2');

  return Container;
}

export default function renderMain() {
  const Main = document.createElement('main');
  const Title = createTitle({
    textContent: 'вселенная звездных войн',
    classList: ['my-2', 'text-uppercase'],
  });
  Main.appendChild(Title);
  const Container = createContainer();
  Main.appendChild(Container);

  return { Main, Container };
}
