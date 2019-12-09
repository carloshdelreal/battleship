import './style.scss';
import { createButtons, createDOMBoard } from './DOM/dom';
import Player from './factories/player';

let turn = 0;

window.onload = () => {
  const container = document.querySelector('.container');
  const boardDOM = createDOMBoard();

  const { row, startBtn, resetGame } = createButtons();
  container.appendChild(boardDOM);
  container.appendChild(row);

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

  resetGame.addEventListener('click', () => {
    resetBoard(grid);
  });

  startBtn.addEventListener('click', () => {
    startGame();
  });
};

function fireBoard(x, y, targetGrid) {
  const grid = document.querySelector(targetGrid);
  grid.children[x].children[y].classList.add('hitted');
}

function resetBoard(grid) {
  for (let i = 0; i < 100; i += 1) {
    grid[i].classList.remove('hitted');
  }
}

function swichTurn() {
  if (turn === 0) {
    turn = 1;
  } else {
    turn = 0;
  }
}

function startGame() {
  console.log('startGame');

  const player = new Player(true);
  const computer = new Player(true);
  const players = [player, computer];

  resetBoard();
  let winner = false;
  let validHit = false;
  do {
    if (player.gameBoard.allSunk()) {
      console.log('Player won');
      winner = true;
    } else if (computer.gameBoard.allSunk()) {
      console.log('computer won');
      winner = true;
    }

    const fire = players[turn].shot();
    if (turn === 0) {
      fireBoard(fire.x, fire.y, '.enemy-grid');
    } else {
      fireBoard(fire.x, fire.y, '.player-grid');
    }
    swichTurn();
    players[turn].gameBoard.receiveAttack(fire.x, fire.y);
    swichTurn();
  } while (winner === false);
}
