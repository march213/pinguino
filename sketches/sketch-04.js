const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
  // animate: true,
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    const cols = 10;
    const rows = 10;
    const numOfCells = cols * rows;

    const gridw = width * 0.8;
    const gridh = height * 0.8;
    const cellw = gridw / cols;
    const cellh = gridh / rows;

    const marginx = (width - gridw) * 0.5;
    const marginy = (height - gridh) * 0.5;

    context.lineWidth = 4;

    for (i = 0; i < numOfCells; i += 1) {
      const col = i % cols;
      const row = Math.floor(i / cols);

      const x = col * cellw;
      const y = row * cellh;

      const w = cellw * 0.8;
      const h = cellh * 0.8;

      context.save();
      context.translate(x, y);
      context.translate(marginx, marginy);
      context.translate(cellw * 0.5, cellh * 0.5);

      context.beginPath();
      context.moveTo(w * -0.5, 0);
      context.lineTo(w * 0.5, 0);
      context.stroke();
      context.closePath();

      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
