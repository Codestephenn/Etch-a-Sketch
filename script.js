// Constants
const GRIDSIDE = 350; // Size of the grid area
let rowsOrCols = 16; // Initial number of rows or columns

// DOM Elements
const gridReset = document.querySelector("#reset-grid"); // Button to reset the grid
const sketchArea = document.querySelector("#sketch-area"); // Container for the grid cells

// Set the size of the sketch area
sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;

// Function to reset the grid based on user input
function resetGrid(){
  let number = prompt("Please enter a number between 1 and 100: ");
  if (number !== null ){ 
    number = parseInt(number);
    if (!isNaN(number) && number >= 1 && number <= 100){
      rowsOrCols = number;
      clearGrid(); // Clear the existing grid
      createGridCells(); // Create a new grid with the updated number of rows or columns
    }
    else {
      alert("Invalid input. Please enter a number between 1 and 100");
    }
  }
}

// Function to set the background color of the grid cell
function setBackgroundColor(){
  this.style.backgroundColor = "black";
}

// Function to create grid cells
function createGridCells() {
  const numberOfSquare = (rowsOrCols * rowsOrCols);
  const widthOrHeight = `${(GRIDSIDE / rowsOrCols) - 2}px`;
  
  for(let i = 0; i < numberOfSquare; i++){
    const gridCell = document.createElement("div");
    
    gridCell.style.width = widthOrHeight;
    gridCell.style.height = widthOrHeight;
    gridCell.classList.add("cell");
    
    sketchArea.appendChild(gridCell); // Append the grid cell to the sketch area
    
    gridCell.addEventListener("mouseover", setBackgroundColor); // Add event listener for mouseover
  }
}

// Function to clear the existing grid
function clearGrid() {
  sketchArea.innerHTML = "";
}

// Event listener for the reset button
gridReset.addEventListener("click", resetGrid);

// Initial grid creation
createGridCells();