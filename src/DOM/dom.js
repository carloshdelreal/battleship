import { createDiv, createElem } from './elmcreator';

function boats() {
  const rightCol = createDiv(['col-2']);
  const battleship = createDiv(['ship', 'battleship']);
  const carrier = createDiv(['ship', 'carrier']);
  const submarine = createDiv(['ship', 'submarine']);
  const destroyer = createDiv(['ship', 'destroyer']);
  const patrol = createDiv(['ship', 'patrolBoat']);
  rightCol.appendChild(battleship);
  rightCol.appendChild(carrier);
  rightCol.appendChild(submarine);
  rightCol.appendChild(destroyer);
  rightCol.appendChild(patrol);
  return rightCol;
}

function createButtons() {
  const row = createDiv(['row']);
  const col = createDiv(['col-md-3']);
  const startBtn = createElem('button', '', ['btn', 'btn-primary']);
  startBtn.innerText = 'New Game';

  col.appendChild(startBtn);
  row.appendChild(col);

  const div = createDiv(['wrapper']);
  const createp1 = createElem('p', '', ['red']);
  createp1.innerText = 'Hitted';
  div.appendChild(createp1);

  const createp2 = createElem('p', '', ['blue']);
  createp2.innerText = 'Missed';
  div.appendChild(createp2);
  row.appendChild(div);
  return { row, startBtn };
}

function createGrid(gridClassName) {
  let rows = 0;
  const x = 10;
  const classArr = ['grid', gridClassName];
  const col = createDiv(classArr);

  for (rows = 0; rows < x; rows += 1) {
    const row = createDiv([]);
    col.appendChild(row);
    for (let columns = 0; columns < x; columns += 1) {
      row.insertAdjacentHTML(
        'beforeend',
        `<div class='grid-item' x=${columns} y=${rows}></div>`,
      );
    }
  }
  return col;
}

function createGridTitle(titleText) {
  const title = createDiv(['title']);
  const head = createElem('h3', '', []);
  head.innerText = titleText;
  title.appendChild(head);
  return { title, head };
}

function createDOMBoard() {
  const row = createDiv(['row', 'justify-content-md-center']);

  const leftCol = createDiv(['col-']);
  const { title: gPTitle, head: pTitle } = createGridTitle('Player 1');
  const gPlayer = createGrid('player-grid');
  leftCol.appendChild(gPTitle);
  leftCol.appendChild(gPlayer);

  const rightCol = createDiv(['col-']);
  const { title: gETitle, head: eTitle } = createGridTitle('Enemy (Computer)');
  const gEnemy = createGrid('enemy-grid');
  rightCol.appendChild(gETitle);
  rightCol.appendChild(gEnemy);

  row.appendChild(leftCol);
  row.appendChild(createDiv(['col-1']));
  row.appendChild(rightCol);
  row.appendChild(boats());

  return { row, gPlayer, gEnemy, pTitle, eTitle };
}

function winner() {
  const div = createElem('div', 'winner', ['popup']);
  const content = createDiv(['content']);
  const h4 = createElem('h4', '', ['title']);
  h4.innerText = 'Congratulations You Win!!';
  content.appendChild(h4);
  div.appendChild(content);
  return { winnerDOM: div, winnerText: h4 };
}

export { createButtons, createDOMBoard, createGrid, winner };
