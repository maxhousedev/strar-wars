export default function createRoot({ id = 'root', classList = [] }) {
  const Root = document.createElement('div');
  Root.id = id;
  if (classList.length) Root.classList.add(...classList);

  return Root;
}
