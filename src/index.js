import './style.scss';
import { fireBoard, resetBoard, arrInclude } from './auxFunctions';
import pageLoad from './DOM/pageLoad';
import placeShips from './DOM/putBoats';

window.onload = () => {
  const { players, startBtn, winnerDOM, winnerText } = pageLoad();

  function won(winner) {
    const grid = document.querySelectorAll('.grid-item');
    for (let i = 0; i < 100; i += 1) {
      grid[i].removeEventListener('click', () => {});
    }
    winnerDOM.style.display = 'block';

    winnerText.innerText = `Congratulations ${winner} is the winner`;

    window.onclick = (event) => {
      if (event.target === winnerDOM) {
        winnerDOM.style.display = 'none';
      }
    };
  }

  function startGame() {
    resetBoard(players[1].grid);
    resetBoard(players[0].grid);
    players[0].reset();
    players[1].reset();
    placeShips(players[0].gameBoard.seeds);
    // console.log(createSeeds(players[0].gameBoard));
  }

  function battleTurn(x, y) {
    let hit = null;
    players[0].shot(x, y);
    hit = players[1].gameBoard.receiveAttack(x, y);
    fireBoard(x, y, players[1].grid, hit);
    // console.log(`${players[0].name} fires: ${x}, ${y} and hit: ${hit}`);
    if (players[1].gameBoard.allSunk() === true) {
      won(players[0].name);
    }
    // Computer Attack
    const shot = players[1].shot();

    hit = players[0].gameBoard.receiveAttack(shot.x, shot.y);
    fireBoard(shot.x, shot.y, players[0].grid, hit);
    // console.log(
    //   `${players[1].name} fires: ${shot.x}, ${shot.y} and hit: ${hit}`,
    // );
    if (players[0].gameBoard.allSunk() === true) {
      won(players[1].name);
    }
  }

  startBtn.addEventListener('click', () => {
    startGame();
  });

  const grid = document.querySelectorAll('.enemy-grid .grid-item');
  for (let i = 0; i < 100; i += 1) {
    grid[i].addEventListener('click', (event) => {
      const x = event.target.getAttribute('x');
      const y = event.target.getAttribute('y');

      if (arrInclude(players[0].shots, [x, y]) === false) {
        battleTurn(x, y);
      }
    });
  }
};
