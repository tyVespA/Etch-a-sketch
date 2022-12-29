const grid = document.querySelector(".grid");
const clearGridBtn = document.querySelector(".clear-grid");
const slider = document.querySelector("#grid-size");
let gridSizeDisplay = document.querySelector(".grid-size-display");
let cells = grid.childNodes;

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

function createGrid(rows, cols) {
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    grid.appendChild(cell);
    cell.classList.add("grid-item-border");
    cell.setAttribute('draggable', false);
  };

  cells = grid.childNodes;
}

// apply color
let mouseDown = false
grid.onmousedown = () => (mouseDown = true)
grid.onmouseup = () => (mouseDown = false)

cells.forEach((cell) => {
  cell.addEventListener("mousedown", () => {
    cell.style.cssText = ("background: black");
  })
  cell.addEventListener("mouseover", () => {
    if (mouseDown == true) {
      cell.style.cssText = ("background: black");
    }
  })
})






