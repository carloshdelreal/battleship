import GameBoard from './gameboard';
import { arrInclude } from '../auxFunctions';

const Player = (playerName, computer) => {
  const name = playerName;
  let shots = [];

  const gameBoard = GameBoard();
  const shot = () => {
    let arr = null;
    if (computer) {
      do {
        const X = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
        const Y = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
        arr = [X, Y];
      } while (arrInclude(shots, arr) === true);
    }
    shots.push(arr);
    return { x: arr[0], y: arr[1] };
  };

  const reset = () => {
    shots = [];
    gameBoard.reset();
  };

  return { name, shot, shots, gameBoard, reset };
};

export default Player;
