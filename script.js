//variables
const canvasButton = document.querySelector('#canvas');
const clearButton = document.querySelector('#clear');
const fillAction = document.querySelectorAll('.fill');
const container = document.querySelector('#container');

// used to ensure grid in place as window loads
function createGrid(gridSize) {
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    
    for (let i = 0; i < gridSize **2; i++) {
      const grid = document.createElement('div');
      container.appendChild(grid);
      grid.classList.add('box');
    }
}
createGrid(16);


clearButton.addEventListener('click', (e) => {
  document.documentElement.style.overflow = 'auto';
  clear()
})

function clear(){
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].style.backgroundColor = 'lightgrey';
  }
}

canvasButton.addEventListener('click', (e) => {
  document.documentElement.style.overflow = 'auto';
  let gridSize = prompt('selet a grid size between 1 and 100');
  inputCheck(gridSize);
  createGrid(gridSize);
})

fillAction.forEach((button) => {
  button.addEventListener('click', (e) => {
    fill = button.id;
    if (fill == 'draw'){
        fillMatrix();    
    } else if (fill == 'colour'){
        fillcolorMatrix();
    }
  })
})                          
                    
// decided to include error handling for user experience
function inputCheck(gridSize){
  if (gridSize < 1 || gridSize > 100 || isNaN(gridSize)){
    alert ('Needs to be a number between 1 and 100');
  } else { 
    return gridSize;
  }
}

const matrix = document.getElementsByClassName('box');

function fillMatrix(){
  for (let i = 0; i < matrix.length; i++) { 
    matrix[i].addEventListener('pointerenter', function() {
      document.documentElement.style.overflow = 'hidden';
      matrix[i].classList.add('active');
      matrix[i].style.backgroundColor = 'darkslategrey';
    });
  }
}

function fillcolorMatrix(){
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].addEventListener('pointerenter', function() {
      document.documentElement.style.overflow = 'hidden';
      matrix[i].classList.add('active');
      matrix[i].style.backgroundColor= random_bg_color();
    });
  }
}

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
         
  return "rgb(" + x + "," + y + "," + z + ")";
}