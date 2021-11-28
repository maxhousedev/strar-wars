import './easyLoader.css';
import icon from './loader.svg';

const overlayID = 'easyLoader-overlay';

function show() {
  const overlay = document.createElement('div');
  overlay.id = overlayID;
  overlay.classList.add('overlay');
  overlay.innerHTML = icon;
  document.body.appendChild(overlay);
}

function remove() {
  const overlay = document.getElementById(overlayID);
  if (overlay) {
    overlay.remove();
  }
}

const easyLoader = {
  show,
  remove,
};

export default easyLoader;
