// Create grid

let squareDiv;
let squareRow;
const gridContainer = document.querySelector('.grid-container');

for (let i = 0; i < 16; i++) {
  squareRow = document.createElement('div');
  squareRow.classList.add('square-row');

  for (let i = 0; i < 16; i++) {
    squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    squareRow.appendChild(squareDiv);
  }
  gridContainer.appendChild(squareRow);
}

// Color grid
const squares = document.querySelectorAll('.square');

squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    square.classList.add('colored');
  });
});