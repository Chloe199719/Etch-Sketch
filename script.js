// Setting Variables
let square = 16;
let squares = square * square;

//  Dom Elements
document.documentElement.style.setProperty(`--rows`, square);
const box = document.querySelector(`.box`);
const rows = document.querySelector(`#rows`);
const updateBtn = document.querySelector(`.update`);
const valueUpdate = document.querySelector(`.value`);
const colorPicker = document.querySelector(`#favcolor`);
const colorPicker1 = document.querySelector(`#background`);
const eraseBtn = document.querySelector(`.erase`);
const drawBtn = document.querySelector(`.draw`);

// Mouse fixer
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//Update / Restart button for now
const handleUpdate = function () {
  document.documentElement.style.setProperty(`--rows`, rows.value);
  document.querySelectorAll(`.board`).forEach((e) => e.remove());
  divs(rows.value * rows.value);
  eventupdate();
};

// Display selected grid size
const changeGridSize = function () {
  valueUpdate.textContent = rows.value;
};
// Event listeners for User Inputs
rows.addEventListener(`change`, changeGridSize);

updateBtn.addEventListener(`click`, handleUpdate);

// Draws the s number of dives
const divs = function (s) {
  for (let i = 0; i < s; i++) {
    const div = document.createElement(`div`);
    div.className = `board`;
    box.appendChild(div);
  }
};

divs(squares);

// Create event for mouse drawing
const eventupdate = function () {
  const test = document.querySelectorAll(`.board`);
  const loop = function (e) {
    if (e.type === `mouseover` && !mouseDown) return;
    // this.classList.add(`board-hover`);
    this.style.background = `${colorPicker.value}`;
    console.log(this.style.color);
  };
  test.forEach((t) => {
    t.addEventListener(`mousedown`, loop);
  });
  test.forEach((t) => {
    t.addEventListener(`mouseover`, loop);
  });
};
eventupdate();

colorPicker1.addEventListener(`change`, function (e) {
  document.documentElement.style.setProperty(`--color`, this.value);
});

// Erase button
eraseBtn.addEventListener(`click`, function (e) {
  const d = document.querySelectorAll(`.board`);
  const loop = function (e) {
    if (e.type === `mouseover` && !mouseDown) return;
    this.style.removeProperty(`background`);
  };
  d.forEach((t) => {
    t.addEventListener(`mousedown`, loop);
  });
  d.forEach((t) => {
    t.addEventListener(`mouseover`, loop);
  });
});

// Draw Button

drawBtn.addEventListener(`click`, eventupdate);
