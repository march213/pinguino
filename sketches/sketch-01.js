const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [600, 600],
};

const sketch = () => {
  return ({ context: ctx, width: windowWidth, height: windowHeight }) => {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, windowWidth, windowHeight);

    ctx.lineWidth = 3;

    const width = 60;
    const height = 60;
    const gap = 40;
    let x, y;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = 75 + (width + gap) * i;
        y = 75 + (height + gap) * j;

        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.stroke();
        ctx.closePath();

        if (Math.random() > 0.5) {
          ctx.beginPath();
          ctx.rect(x + 8, y + 8, width - 16, height - 16);
          ctx.stroke();
          ctx.closePath();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
