let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");

ctx.lineWidth = 3;

function drawSquares() {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let width = 60;
      let height = 60;
      let gap = 40;
      let x = 100 + (width + gap) * i;
      let y = 100 + (height + gap) * j;

      ctx.beginPath();
      ctx.rect(x, y, width, height);
      ctx.stroke();
      ctx.closePath();

      // if (i > 0 && i < 4) {
      //   ctx.beginPath();
      //   ctx.rect(x + 8, y + 8, width - 16, height - 16);
      //   ctx.stroke();
      //   ctx.closePath();
      // }

      if (Math.random() > 0.5) {
        ctx.beginPath();
        ctx.rect(x + 8, y + 8, width - 16, height - 16);
        ctx.stroke();
        ctx.closePath();
      }
    }
  }
}

drawSquares();
