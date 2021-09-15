const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context: ctx, width, height }) => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    ctx.lineWidth = width * 0.01;
    ctx.strokeStyle = "#fff";

    const w = width * 0.1;
    const h = height * 0.1;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;

    const off = width * 0.08;

    let x, y;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = ix + (w + gap) * i;
        y = iy + (h + gap) * j;

        ctx.beginPath();
        ctx.rect(x, y, w, h);

        ctx.stroke();
        ctx.closePath();

        if (Math.random() > 0.5) {
          ctx.beginPath();
          ctx.rect(x + off, y + off, w - off * 2, h - off * 2);
          ctx.stroke();
          ctx.closePath();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
