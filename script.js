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
  const currentSizeDiv = document.querySelector('.current-size');
  currentSizeDiv.textContent = `${size} x ${size}`
}

createGrid(24);


// Delete grid
function deleteGrid() {
  const squareRows = document.querySelectorAll('.square-row');
  squareRows.forEach(row => {
    row.remove();
  });
}


// Color grid
function getRandomColor() {
  let o = Math.round;
  let r = Math.random; 
  let s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ')';
}

let rgbaShade = 100;
let randomColor = false;

function colorGrid(randomColor = false) {
  const squares = document.querySelectorAll('.square');

  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      if (randomColor === true) {
        square.style.background = getRandomColor();
        console.log(getRandomColor());
      } else {
        if (!(square.classList[1] == 'active')) { // Doesn't count if the square is already painted
          if (rgbaShade > 0) {
            rgbaShade -= 10;
          }
        }
        square.style.background = `rgba(${rgbaShade}, ${rgbaShade}, ${rgbaShade})`;
        square.classList.add('active');
      }
    });
  });
}

const randomColorsButton = document.querySelector('.random-colors');
randomColorsButton.addEventListener('click', () => {
  deleteGrid();
  createGrid(currentSize);
  if (randomColor == true) {
    randomColor = false;
    randomColorsButton.textContent = 'Random colors';
  } else {
    randomColorsButton.textContent = 'Dark';
    randomColor = true;
  }
  rgbaShade = 100;
  colorGrid(randomColor);
});

colorGrid(randomColor);


// Change grid size
function changeSize() {
  size = prompt('Enter new size (10-100)');
  if ((size < 10) || (size > 100)) {
    return;
  }
  deleteGrid();
  createGrid(size);
  rgbaShade = 100;
  colorGrid(randomColor);
}

const sizeButton = document.querySelector('.change-size');
sizeButton.addEventListener('click', () => {
  changeSize();
});


// Clear grid
function clearGrid() {
  deleteGrid();
  createGrid(currentSize);
  rgbaShade = 100;
  colorGrid(randomColor);
}

const clearButton = document.querySelector('.clear-grid');
clearButton.addEventListener('click', () => {
  clearGrid();
});