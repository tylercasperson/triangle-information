import React, { useState, useEffect } from 'react';
import SideInput from './SideInput';

const Calculations = () => {
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [sideC, setSideC] = useState('');
  const [triangle, setTriangle] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (sideA !== '' && sideB !== '' && sideC !== '') {
      if (sideA === sideB && sideA === sideC && sideB === sideC) {
        setTriangle('Equilateral');
      } else if (sideA !== sideB && sideA !== sideC && sideB !== sideC) {
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
      case 'A':
        setSideA(document.getElementById('side' + side).value);
        break;
      case 'B':
        setSideB(document.getElementById('side' + side).value);
        break;
      case 'C':
        setSideC(document.getElementById('side' + side).value);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <SideInput
        side='A'
        onChange={() =>
          window.setTimeout(function () {
            sideAnalysis('A');
          }, 2)
        }
      />
      <SideInput
        side='B'
        onChange={() =>
          window.setTimeout(function () {
            sideAnalysis('B');
          }, 2)
        }
      />
      <SideInput
        side='C'
        onChange={() =>
          window.setTimeout(function () {
            sideAnalysis('C');
          }, 2)
        }
      />
      <br />
      {message}
    </div>
  );
};

export default Calculations;
