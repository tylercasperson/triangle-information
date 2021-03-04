import React, { useEffect, useRef } from 'react';

const Drawing = (props) => {
  const canvasRef = useRef('');

  useEffect(() => {
    const drawTriangle = () => {
      let context = canvasRef.current.getContext('2d');
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);

      //   let x1 = props.x1;
      //   let x2 = props.x2;
      //   let x3 = props.x3;
      //   let y1 = props.y1;
      //   let y2 = props.y2;
      //   let y3 = props.y3;

      //   console.log('y3: ', y3);

      let triangleWidth = 50 / 2;
      let triangleHeight = 43.3 / 2;
      let widthToTop = 25 / 2;

      let aspectRatio = Math.min(
        320 / (triangleWidth * 0.7),
        320 / (triangleHeight * 0.7)
      );
      console.log('aspectRatio: ', aspectRatio);

      let startX = context.canvas.width / 2 - (triangleWidth * aspectRatio) / 4;
      let startY =
        (triangleHeight * aspectRatio) / 4 + context.canvas.height / 2;
      let pointX2 =
        context.canvas.width / 2 + (triangleWidth * aspectRatio) / 4;
      let endX = (widthToTop / triangleWidth) * 320;
      let endY = context.canvas.height / 2 - (triangleHeight * aspectRatio) / 4;

      let x1 = startX;
      let x2 = pointX2;
      let x3 = endX;
      let y1 = startY;
      let y2 = startY;
      let y3 = endY;

      // let x1 = 0;
      // let x2 = 50;
      // let x3 = 25;
      // let y1 = 0;
      // let y2 = 0;
      // let y3 = 43.3;

      // middle of canvas
      context.beginPath();
      context.rect(context.canvas.width / 2, context.canvas.height / 2, 1, 1);
      context.stroke();
      context.closePath();

      // // works
      // let startX = context.canvas.width / 2 - (x2 * aspectRatio) / 4;
      // let startY = (y3 * aspectRatio) / 4 + context.canvas.height / 2;
      // let pointX2 = context.canvas.width / 2 + (x2 * aspectRatio) / 4;
      // let endX = (x3 / x2) * 320;
      // let endY = context.canvas.height / 2 - (y3 * aspectRatio) / 4;

      // starting point
      context.beginPath();
      context.rect(startX, startY, 1, 1);
      context.rect(pointX2, startY, 1, 1);
      context.rect(endX, endY, 1, 1);

      context.stroke();
      context.closePath();

      let medianSideA = Math.sqrt(2 * x2 ** 2 + 2 * x2 ** 2 - x2 ** 2) / 2;
      let medianSideB = Math.sqrt(2 * x2 ** 2 + 2 * x2 ** 2 - x2 ** 2) / 2;
      let medianSideC = Math.sqrt(2 * x2 ** 2 + 2 * x2 ** 2 - x2 ** 2) / 2;

      console.log('medianSideA: ', medianSideA);
      console.log('medianSideB: ', medianSideB);
      console.log('medianSideC: ', medianSideC);

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
      context.lineWidth = 1;
      context.strokeStyle = 'black';

      // context.scale(1, -1);
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(pointX2, startY);
      context.lineTo(endX, endY);
      context.lineTo(startX, startY);
      context.stroke();
      context.closePath();

      // //correct version
      // context.scale(1, -1);
      // context.beginPath();
      // context.moveTo(x1, y1);
      // context.lineTo(x2, y2);
      // context.lineTo(x3, y3);
      // context.lineTo(x1, y1);
      // context.stroke();
      // context.closePath();

      // need to scale the font
      //   context.font = '10px Arial';
      //   context.fillText('A', x2, y2);
      //   context.fillText('B', x1, y1);
      //   context.fillText('C', x3, y3);

      //   context.fillText('a', x1, y3 / 2);
      //   context.fillText('b', x2, y3 / 2);
      //   context.fillText('c', x2 / 2, y2);

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

    drawTriangle(props.x1, props.y1, props.x2, props.y2, props.x3, props.y3);
  }, []);
  //props.x1, props.y1, props.x2, props.y2, props.x3, props.y3

  return (
    <canvas
      style={{
        border: 'solid 1pt black',
      }}
      height='320'
      width='320'
      ref={canvasRef}
    ></canvas>
  );
};

export default Drawing;
