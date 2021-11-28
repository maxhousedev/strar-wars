export default function loadCSS({
  cssLoaded,
  href = '',
  integrity = '',
  crossorigin = '',
}) {
  if (!cssLoaded[href]) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;

    cssLoaded[href] = new Promise((resolve) => {
      link.addEventListener('load', () => resolve());
    });
    document.head.appendChild(link);
  }

  return cssLoaded[href];
}
