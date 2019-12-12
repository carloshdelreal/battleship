function createDiv(classes) {
  const element = document.createElement('div');
  classes.forEach((cls) => {
    element.classList.add(cls);
  });
  return element;
}

function createElem(element, id, classes) {
  const elem = document.createElement(element);
  classes.forEach((cls) => {
    elem.classList.add(cls);
  });
  if (id.length > 2) {
    elem.id = id;
  }

  return elem;
}

function tabElem(name, main) {
  const liElm = createElem('li', 'nav-item', []);
  let aHome = null;
  if (main) {
    aHome = createElem('a', `${name}-tab`, ['nav-link', 'active']);
    aHome.setAttribute('aria-selected', true);
  } else {
    aHome = createElem('a', `${name}-tab`, ['nav-link']);
    aHome.setAttribute('aria-selected', false);
  }
  aHome.href = `#${name}`;
  aHome.setAttribute('aria-controls', `${name}`);
  aHome.setAttribute('data-toggle', 'tab');
  aHome.setAttribute('role', 'tab');
  aHome.innerText = `${name}`;
  liElm.appendChild(aHome);
  return liElm;
}

function tabContent(name, main) {
  let elm = null;

  if (main) {
    elm = createElem('div', `${name}`, ['tab-pane', 'fade', 'show', 'active']);
  } else {
    elm = createElem('div', `${name}`, ['tab-pane', 'fade']);
  }
  elm.setAttribute('role', 'tabpanel');
  elm.setAttribute('aria-labelledby', `${name}-tab`);
  return elm;
}

export {
  createDiv, createElem, tabElem, tabContent,
};
