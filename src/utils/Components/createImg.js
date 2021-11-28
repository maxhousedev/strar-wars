export default function createImg({
  src = '',
  classList = [],
  alt = 'new image',
}) {
  const Img = document.createElement('img');
  if (src !== '') {
    Img.src = src;
  }

  if (classList.length) {
    Img.classList.add(...classList);
  }

  Img.alt = alt;

  return Img;
}
