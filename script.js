// Constants
const GRIDSIDE = 350; // Size of the grid area
let rowsOrCols = 16; // Initial number of rows or columns

// DOM Elements
const gridReset = document.querySelector("#reset-grid"); // Button to reset the grid
const gridClear = document.querySelector("#grid-clear");
const gridSizeValue = document.querySelector("#grid-size");
const sketchArea = document.querySelector("#sketch-area"); // Container for the grid cells

// Set the size of the sketch area
sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;

// Function to reset the grid based on user input
function resetGrid() {
  let number = prompt("Please enter a number between 1 and 100: ");
  if (number !== null) {
    number = parseInt(number);
    if (!isNaN(number) && number >= 1 && number <= 100) {
      rowsOrCols = number;
      clearGrid(); // Clear the existing grid
      createGridCells(); // Create a new grid with the updated number of rows or columns
    } else {
      alert("Invalid input. Please enter a number between 1 and 100");
    }
  }
}

// Function to generate a random RGB color
function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  // return RGB color String
  return `rgb(${red}, ${green}, ${blue})`;
}

// Function to set the background color of the grid cell to a random color
function setBackgroundColor() {
  const randomColor = getRandomColor();
  this.style.backgroundColor = randomColor;
}

// Function to create grid cells
function createGridCells() {
  const numberOfSquare = rowsOrCols * rowsOrCols;
  const widthOrHeight = `${GRIDSIDE / rowsOrCols - 2}px`;

  for (let i = 0; i < numberOfSquare; i++) {
    const gridCell = document.createElement("div");

    gridCell.style.width = widthOrHeight;
    gridCell.style.height = widthOrHeight;
    gridCell.classList.add("cell");

    sketchArea.appendChild(gridCell); // Append the grid cell to the sketch area

    gridCell.addEventListener("mouseover", setBackgroundColor); // Add event listener for mouseover

    gridSizeValue.textContent = `Grid Size: ${rowsOrCols} x ${rowsOrCols} (Resolution)`;
  }
}

// Function to clear the existing grid
function clearGrid() {
  sketchArea.innerHTML = "";
}

// Event listener for the reset button
gridReset.addEventListener("click", resetGrid);

// Event listener for Clear grid button
gridClear.addEventListener("click", clearGrid);

// Initial grid creation
createGridCells();

// Footer
const footer = document.querySelector("footer");
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;