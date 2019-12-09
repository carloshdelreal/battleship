import './style.scss';
import { createButtons, createDOMBoard, createGrid } from './DOM/dom';

window.onload = () => {
  const container = document.querySelector('.container');
  const boardDOM = createDOMBoard();

  const { row, startBtn, resetGame } = createButtons();
  container.appendChild(boardDOM);
  container.appendChild(row);

  const grid = document.querySelectorAll('.enemy-grid .grid-item');
  for (let i = 0; i < 100; i += 1) {
    grid[i].addEventListener('click', (event) => {
      event.target.style.backgroundColor = 'red';
    });
  }

  // resetGame.addEventListener('click', () => {
  //   console.log('reset');
  // });
};
