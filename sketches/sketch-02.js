const canvasSketch = require("canvas-sketch");
const random = require("canvas-sketch-util/random");
const math = require("canvas-sketch-util/math");

const settings = {
  dimensions: [1080, 1080],
};

// const degToRad = (deg) => {
//   return (deg / 180) * Math.PI;
// };
//
// const randomRange = (min, max) => {
//   return Math.random() * (max - min) + min;
// };

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "black";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "white";
    context.strokeStyle = "gold";

    const cx = width * 0.5;
    const cy = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;
    let x, y;

    const num = 40;
    const radius = width * 0.3;

    for (let i = 0; i < num; i += 1) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

      /*
       * Rectangles
       */
      context.save();

      // canvas transformations
      context.translate(x, y);
      context.rotate(-angle);
      context.scale(random.range(0.1, 2), random.range(0.2, 0.5));

      // shape
      context.beginPath();
      context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
      context.fill();

      context.closePath();
      context.restore();

      /*
       * Arcs
       */
      context.save();

      // canvas transformations
      context.translate(cx, cy);
      context.rotate(angle);

      // shape
      context.lineWidth = random.range(5, 15);

      context.beginPath();
      context.arc(
        0,
        0,
        radius * random.range(0.7, 1.3),
        slice * random.range(-8, 1),
        slice * random.range(1, 5)
      );
      context.stroke();
      context.closePath();

      context.restore();
    }
  };
};

canvasSketch(sketch, settings);
