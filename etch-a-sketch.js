// Create grid
let currentSize;

function createGrid(size) {
  let squareDiv;
  let squareRow;
  const gridContainer = document.querySelector('.grid');

  for (let i = 0; i < size; i++) {
    squareRow = document.createElement('div');
    squareRow.classList.add('square-row');

    for (let i = 0; i < size; i++) {
      squareDiv = document.createElement('div');
      squareDiv.classList.add('square');
      squareRow.appendChild(squareDiv);
    }
    gridContainer.appendChild(squareRow);
  }
  currentSize = size;
}

createGrid(48);


// Delete grid
function deleteGrid() {
  const squareRows = document.querySelectorAll('.square-row');
  squareRows.forEach(row => {
    row.remove();
  });
}


// Color grid
function colorGrid() {
  const squares = document.querySelectorAll('.square');

  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.classList.add('colored');
    });
  });
}

colorGrid();


// Change grid size
function changeSize() {
  size = prompt('Enter new size (10-100)');
  if ((size < 10) || (size > 100)) {
    return;
  }
  deleteGrid();
  createGrid(size);
  colorGrid();
}

const sizeButton = document.querySelector('.change-size');
sizeButton.addEventListener('click', () => {
  changeSize();
});


// Clean grid
function cleanGrid() {
  deleteGrid();
  createGrid(currentSize);
  colorGrid();
}

const cleanButton = document.querySelector('.clean-grid');
cleanButton.addEventListener('click', () => {
  cleanGrid();
});