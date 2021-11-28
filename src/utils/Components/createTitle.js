export default function createTitle({
  tagName = 'h1',
  textContent = 'Title',
  classList = [],
}) {
  const Title = document.createElement(tagName);
  Title.textContent = textContent;
  if (classList.length) {
    Title.classList.add(...classList);
  }

  return Title;
}
