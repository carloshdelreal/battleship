import GameBoard from './gameboard';
import { arrInclude } from '../auxFunctions';

const Player = (playerName, computer) => {
  const name = playerName;
  const shots = [];

  const gameBoard = GameBoard();
  const shot = (xCoord, yCoord) => {
    let x = xCoord;
    let y = yCoord;
    let arr = null;
    if (computer) {
      do {
        x = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
        y = Math.floor(Math.random() * (9 - 0 + 1)) + 0;
        arr = [x, y];
      } while (arrInclude(shots, arr) === true);
    } else {
      if (xCoord == null) return null;
      arr = [x, y];
      if (arrInclude(shots, arr)) {
        return null;
      }
    }
    shots.push([x, y]);
    return { x: arr[0], y: arr[1] };
  };

  const reset = () => {
    shots.length = 0;
    gameBoard.reset();
  };

  return { name, shot, shots, gameBoard, reset };
};

export default Player;
