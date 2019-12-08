import GameBoard from './gameboard';
import { arrInclude } from '../auxFunctions';

const Player = (computer) => {
  const shots = [];

  const gameBoard = new GameBoard();
  const shot = () => {
    let arr = null;
    if (computer) {
      do {
        const X = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
        const Y = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
        arr = [X, Y];
      } while (arrInclude(shots, arr) == true);
    }
    shots.push(arr);
    return { x: arr[0], y: arr[1] };
  };

  return { shot, shots };
};

export default Player;
