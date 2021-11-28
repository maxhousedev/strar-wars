export default function createAnchor({
  href = '#',
  target = '_self',
  classList = [],
  disable = false,
  textContent = 'new Anchor',
}) {
  const A = document.createElement('a');
  A.href = href;
  A.target = target;
  A.disable = disable;
  A.textContent = textContent;
  if (classList.length) {
    A.classList.add(...classList);
  }

  return A;
}
