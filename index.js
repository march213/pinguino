function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

let year = 2042;
let nextYear = year + 1;

let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");

for (let i = 1; i <= 5; i++) {
  let width = 60;
  let height = 60;
  let gap = 40;
  let x = 20 + (width + gap) * i;
  let y = 20;

  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  ctx.stroke();
  ctx.closePath();
}
