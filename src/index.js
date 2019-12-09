import './style.scss';
import { createButtons, createGrid } from './DOM/dom';

createButtons();
createGrid();

window.onload = () => {
  const grid = document.querySelectorAll('.grid2');
  //grid.style.backgroundColor="red";

  for (var i = 0; i < 100; i++) {
    grid[i].addEventListener('click', function(event) {
      event.target.style.backgroundColor = 'red';
    });
  }

  const resetButton = document.querySelector('.btn-danger');
  resetButton.addEventListener('click', () => {
    createGrid();
  });
};
