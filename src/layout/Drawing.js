import React, { useEffect, useRef } from 'react';

// https://stackoverflow.com/questions/32767203/draw-the-angle-marks-of-a-triangle-in-canvas

const Drawing = (props) => {
  const canvasRef = useRef('');

  useEffect(() => {
    drawTriangle(10, 150, 200, 20, 30, 30);
  }, [canvasRef]);

  const drawTriangle = (x1, y1, x2, y2, x3, y3) => {
    let context = canvasRef.current.getContext('2d');

    const distance = (x, y, xx, yy) => {
      return Math.sqrt(Math.pow(x - xx, 2) + Math.pow(y - yy, 2));
    };

    const direction = (x, y, xx, yy) => {
      let angV = Math.acos(
        (xx - x) / Math.sqrt(Math.pow(x - xx, 2) + Math.pow(y - yy, 2))
      );

      if (y - yy > 0) angV = -angV;

      return (angV + Math.PI * 2) % (Math.PI * 2);
    };

    const drawAngle = (x, y, dirA, dirB) => {
      dirB += Math.PI;
      let sweepAng = dirB - dirA;
      let startAng = dirA;
      if (Math.abs(sweepAng) > Math.PI) {
        sweepAng = Math.PI * 2 - sweepAng;
        startAng = dirB;
      }
      context.beginPath();
      if (sweepAng < 0) {
        context.arc(x, y, minDist, startAng + sweepAng, startAng);
      } else {
        context.arc(x, y, minDist, startAng, startAng + sweepAng);
      }
      context.stroke();
    };
    // draw lines
    context.lineWidth = 3;
    context.strokeStyle = 'black';

    // context.beginPath();
    // context.moveTo(0, 0);
    // context.lineTo(100, 0);
    // context.stroke();
    // context.closePath();

    // context.beginPath();
    // context.moveTo(100, 0);
    // context.lineTo(0, 100);
    // context.stroke();
    // context.closePath();

    // context.beginPath();
    // context.moveTo(0, 100);
    // context.lineTo(0, 0);
    // context.stroke();
    // context.closePath();

    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.closePath();
    context.stroke();

    // work out the radius of the angle stroke
    let dist1 = distance(x1, y1, x2, y2);
    let dist2 = distance(x2, y2, x3, y3);
    let dist3 = distance(x3, y3, x1, y1);
    let minDist = Math.min(dist1, dist2, dist3);
    if (minDist === 0) {
      return; //if there are no angles to draw and exit
    }
    minDist /= 5; //get the amgle arc radius 1/5th

    let dir1 = direction(x1, y1, x2, y2);
    let dir2 = direction(x2, y2, x3, y3);
    let dir3 = direction(x3, y3, x1, y1);

    drawAngle(x1, y1, dir1, dir3); // draw the angle stroke first corner
    drawAngle(x2, y2, dir2, dir1); //draw the angle stroke second corner
    drawAngle(x3, y3, dir3, dir2); //draw the angle stroke third corner
  };

  return <canvas ref={canvasRef}></canvas>;
};

export default Drawing;
