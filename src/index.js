import './style.scss';
import pageLoad from './DOM/pageLoad';

function fireBoard(x, y, grid) {
  grid.children[x].children[y].classList.add('hitted');
}

function resetBoard(grid) {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      grid.children[i].children[j].classList.remove('hitted');
    }
  }
}

let turn = 0;
function swichTurn() {
  if (turn === 0) {
    turn = 1;
  } else {
    turn = 0;
  }
}

window.onload = () => {
  const { players, startBtn, resetBtn } = pageLoad();

  function startGame() {
    resetBoard(players[1].grid);
    resetBoard(players[0].grid);
    players[0].reset();
    players[1].reset();

    let winner = false;

    do {
      const fire = players[turn].shot();
      console.log(`${players[turn].name} fires: ${fire.x}, ${fire.y}`);

      swichTurn();

      fireBoard(fire.x, fire.y, players[turn].grid);
      players[turn].gameBoard.receiveAttack(fire.x, fire.y);

      if (players[turn].gameBoard.allSunk()) {
        console.log('Player won');
        winner = true;
      }
    } while (winner === false);
  }

  startBtn.addEventListener('click', () => {
    startGame();
  });
};
