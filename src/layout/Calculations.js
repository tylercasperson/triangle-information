import React, { useState, useEffect } from 'react';
import SideInput from './SideInput';

const Calculations = () => {
  const [sideA, setsideA] = useState('');
  const [sideB, setsideB] = useState('');
  const [sideC, setsideC] = useState('');
  const [triangle, setTriangle] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (sideA !== '' && sideB !== '' && sideC !== '') {
      if (sideA === sideB && sideA === sideC) {
        setTriangle('Equilateral');
      } else if (sideA !== sideB && sideA !== sideC) {
        setTriangle('Scaleneal');
      } else {
        setTriangle('Isosceles');
      }

      if (
        +sideA + +sideB >= +sideC &&
        +sideA + +sideC >= +sideB &&
        +sideB + +sideC >= +sideA
      ) {
        setMessage(`These side lengths produce a valid ${triangle} triangle.`);
      } else {
        setMessage('These sides do not produce a valid triangle.');
      }
    }
  }, [triangle, sideA, sideB, sideC]);

  const sideAnalysis = (side) => {
    switch (side) {
      case 'a':
        setsideA(document.getElementById('side' + side).value);
        break;
      case 'b':
        setsideB(document.getElementById('side' + side).value);
        break;
      case 'c':
        setsideC(document.getElementById('side' + side).value);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <SideInput
        side='a'
        onChange={() =>
          window.setTimeout(function () {
            sideAnalysis('a');
          }, 2)
        }
      />
      <SideInput
        side='b'
        onChange={() =>
          window.setTimeout(function () {
            sideAnalysis('b');
          }, 2)
        }
      />
      <SideInput
        side='c'
        onChange={() =>
          window.setTimeout(function () {
            sideAnalysis('c');
          }, 2)
        }
      />
      <br />
      {message}
    </div>
  );
};

export default Calculations;
