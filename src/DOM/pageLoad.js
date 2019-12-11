import Player from '../factories/player';
import { createButtons, createDOMBoard } from './dom';

export default function load() {
  const container = document.querySelector('.container');
  const { row: boardDOM, gPlayer, gEnemy } = createDOMBoard();

  const { row: buttonsDOM, startBtn } = createButtons();
  container.appendChild(boardDOM);
  container.appendChild(buttonsDOM);

  const player = Player('Carlos', false);
  const computer = Player('Computer', true);
  player.grid = gPlayer;
  computer.grid = gEnemy;
  const players = [player, computer];
  return { startBtn, players };
}
