import Player from '../factories/player';
import { createButtons, createDOMBoard, winner } from './dom';

export default function load() {
  const container = document.querySelector('.container');
  const { row: boardDOM, gPlayer, gEnemy } = createDOMBoard();

  const { row: buttonsDOM, startBtn } = createButtons();
  const { winnerDOM, winnerText } = winner();
  container.appendChild(boardDOM);
  container.appendChild(buttonsDOM);
  container.appendChild(winnerDOM);

  const player = Player('Carlos', false);
  const computer = Player('Computer', true);
  player.grid = gPlayer;
  computer.grid = gEnemy;
  const players = [player, computer];
  return { startBtn, players, winnerDOM, winnerText };
}
