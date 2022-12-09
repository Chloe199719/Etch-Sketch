let square = 16;
let squares = square * square;
document.documentElement.style.setProperty(`--rows`, square);
const box = document.querySelector(`.box`);
const rows = document.querySelector(`#rows`);
const updateBtn = document.querySelector(`.update`);
const valueUpdate = document.querySelector(`.value`);
const colorPicker = document.querySelector(`#favcolor`);
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
// const div = document.createElement(`div`);
// box.appendChild(div);
// box.appendChild(div);
// box.appendChild(div);
// console.log(div);
const handleUpdate = function () {
  document.documentElement.style.setProperty(`--rows`, rows.value);
  document.querySelectorAll(`.board`).forEach((e) => e.remove());
  divs(rows.value * rows.value);
  eventupdate();
};

const changeGridSize = function () {
  valueUpdate.textContent = rows.value;
};

rows.addEventListener(`change`, changeGridSize);

updateBtn.addEventListener(`click`, handleUpdate);
// rows.addEventListener(`mousemove`, handleUpdate);

const divs = function (s) {
  for (let i = 0; i < s; i++) {
    const div = document.createElement(`div`);
    div.className = `board`;
    box.appendChild(div);
  }
};

divs(squares);

const eventupdate = function () {
  const test = document.querySelectorAll(`.board`);
  const loop = function (e) {
    if (e.type === `mouseover` && !mouseDown) return;
    this.classList.add(`board-hover`);
  };
  test.forEach((t) => {
    t.addEventListener(`mousedown`, loop);
  });
  test.forEach((t) => {
    t.addEventListener(`mouseover`, loop);
  });
};
eventupdate();

colorPicker.addEventListener(`change`, function (e) {
  document.documentElement.style.setProperty(`--color`, this.value);
});
