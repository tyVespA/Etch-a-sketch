const rainbowModeBtn = document.querySelector(".rainbow-mode");
const slider = document.querySelector("#grid-size");
let sliderVal = slider.value;
const clearGridBtn = document.querySelector(".clear-grid");
const grid = document.querySelector(".grid");
let gridSizeDisplay = document.querySelector(".grid-size-display");
let cells = grid.childNodes;
let mouseDown = false
grid.onmousedown = () => (mouseDown = true)
grid.onmouseup = () => (mouseDown = false)
let colorSelected;
let rainbowMode = false;

createGrid(20, 20);

// prevents dragging when mousedown
grid.addEventListener("dragstart", (e) => {
  e.preventDefault();
})
grid.addEventListener("drop", (e) => {
  e.preventDefault();
})

function selectColor () {
  if (rainbowMode == false) {
    colorSelected = document.querySelector("#color-picker").value;
  } else {
    colorSelected = getRandomColor()
  }
}

function getRandomColor () {
  return '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6);
}

rainbowModeBtn.addEventListener("click", () => {
  if (rainbowMode == false) {
    rainbowMode = true
    rainbowModeBtn.classList.add("active");
  } else {
    rainbowMode = false
    rainbowModeBtn.classList.remove("active");
  }
})

// grabs grid size slider's value and calls createGrid passing it
slider.addEventListener("input", () => {
  sliderVal = slider.value;
  gridSizeDisplay.textContent = sliderVal + " x " + sliderVal;

  grid.replaceChildren();
  createGrid(sliderVal, sliderVal);
})

// removes colors
clearGridBtn.addEventListener("click", clearGrid);
function clearGrid() {
  grid.replaceChildren();
  createGrid(sliderVal, sliderVal)
}

// apply color
function applyColor() {
  cells.forEach((cell) => {
    // applies color to the first cell clicked
    cell.addEventListener("mousedown", () => {
      selectColor()
      cell.style.backgroundColor = colorSelected;
    })
    // applies color to all other cells while mouse btn is pressed
    cell.addEventListener("mouseover", () => {
      selectColor()
      if (mouseDown == true) {
        cell.style.backgroundColor = colorSelected;
      }
    })
  })
}

function createGrid(rows, cols) {
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-cols', cols);

  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    grid.appendChild(cell);
    cell.classList.add("grid-item-border");
    cell.setAttribute('draggable', false);
  };

  applyColor()
}

