const grid = document.querySelector(".grid");
const clearGridBtn = document.querySelector(".clear-grid");
const slider = document.querySelector("#grid-size");
let gridSizeDisplay = document.querySelector(".grid-size-display");
// let gridSize = document.querySelector("#grid-size").value;

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
    cell.innerText = ("");
    grid.appendChild(cell).className = "grid-item";
  };
}



