import Player from '../factories/player';
import { createButtons, createDOMBoard } from './dom';

function addGridListeners() {
  const grid = document.querySelectorAll('.enemy-grid .grid-item');
  for (let i = 0; i < 100; i += 1) {
    grid[i].addEventListener('click', (event) => {
      const e = event;
      e.target.classList.add('hitted');
      console.log(e.target);
      console.log(e.target.getAttribute('x'));
      console.log(e.target.getAttribute('y'));
    });
  }
}

export default function load() {
  const container = document.querySelector('.container');
  const { row: boardDOM, gPlayer, gEnemy } = createDOMBoard();

  const { row: buttonsDOM, startBtn } = createButtons();
  container.appendChild(boardDOM);
  container.appendChild(buttonsDOM);

  addGridListeners(gEnemy);

  const player = Player('Carlos', true);
  const computer = Player('Computer', true);
  player.grid = gPlayer;
  computer.grid = gEnemy;
  const players = [player, computer];
  return { startBtn, players };
}
