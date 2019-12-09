import { createDiv, createElem, tabElem, tabContent } from './elmcreator';

function createButtons() {
  const container = document.querySelector('.container');
  const row = createDiv(['row']);
  const col = createDiv(['col-md-3']);
  const startBtn = createElem('button', '', ['btn', 'btn-primary']);
  const resetGame = createElem('button', '', ['btn', 'btn-danger']);
  startBtn.innerText = 'New Game';
  resetGame.innerText = 'Reset Board';

  col.appendChild(startBtn);
  col.appendChild(resetGame);
  row.appendChild(col);
  container.appendChild(row);
}

function createGrid() {
  const container = document.querySelector('.container');
  const row = createDiv(['row']);
  const col = createDiv(['column-1']);
  const col2 = createDiv(['column-2']);
  const title = createDiv(['title']);
  const head = createElem('h3', '', []);
  head.innerText = 'Player';
  title.appendChild(head);
  col.appendChild(title);
  const title2 = createDiv(['title2']);
  const head2 = createElem('h3', '', []);
  head2.innerText = 'Computer';
  title2.appendChild(head2);
  col2.appendChild(title2);
  let rows = 0;
  let x = 10;

  for (rows = 0; rows < x; rows++) {
    for (var columns = 0; columns < x; columns++) {
      col.insertAdjacentHTML('beforeend', "<div class='grid'></div>");
      col2.insertAdjacentHTML('beforeend', "<div class='grid2'></div>");
    }
  }
  row.appendChild(col);
  row.appendChild(col2);
  container.appendChild(row);
}

export { createButtons, createGrid };
