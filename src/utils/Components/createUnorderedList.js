export default function createUnorderedList({
  ulID = '',
  ulClassList = [],
  itemIDPrefix = 'item-',
  itemClassList = [],
  children = [],
}) {
  const Ul = document.createElement('ul');
  if (ulID !== '') {
    Ul.id = ulID;
  }
  if (ulClassList.length) {
    Ul.classList.add(...ulClassList);
  }

  for (let i = 0; i < children.length; i++) {
    const Li = document.createElement('li');
    Li.id = `${itemIDPrefix}-${i}`;
    if (itemClassList.length) {
      Li.classList.add(...itemClassList);
    }
    Li.appendChild(children[i]);
    Ul.appendChild(Li);
  }

  return Ul;
}
