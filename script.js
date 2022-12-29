const grid = document.querySelector(".grid");
const clearGridBtn = document.querySelector(".clear-grid");
const slider = document.querySelector("#grid-size");
let gridSizeDisplay = document.querySelector(".grid-size-display");
let cells = grid.childNodes;
let colorSelected;

createGrid(20, 20);

// prevents dragging when mousedown
grid.addEventListener("dragstart", (e) => {
  e.preventDefault();
})
grid.addEventListener('drop', (e) => {
  e.preventDefault();
})

// grabs grid size slider's value and calls createGrid passing it
slider.addEventListener("input", () => {
  let sliderVal = slider.value;
  gridSizeDisplay.textContent = sliderVal + " x " + sliderVal;

  grid.replaceChildren();
  createGrid(sliderVal, sliderVal);
})

function selectColor () {
  colorSelected = document.querySelector("#color-picker").value;
}

// apply color
let mouseDown = false
grid.onmousedown = () => (mouseDown = true)
grid.onmouseup = () => (mouseDown = false)

function applyColor() {
  cells.forEach((cell) => {
    selectColor()
    // applies color to the first cell clicked
    cell.addEventListener("mousedown", () => {
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