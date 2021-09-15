let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");

ctx.lineWidth = 2;

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    let width = 60;
    let height = 60;
    let gap = 40;
    let x = 10 + (width + gap) * i;
    let y = 10 + (height + gap) * j;

    ctx.beginPath();
    ctx.rect(x, y, width, height);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.rect(x + 8, y + 8, width - 16, height - 16);
    ctx.stroke();
    ctx.closePath();
  }
}
