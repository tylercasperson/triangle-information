import React, { useState, useEffect } from 'react';
import InputBox from './InputBox';

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
      <InputBox
        inputType='sideA'
        inputLabel='Side A length'
        placeholder='Numbers only (natural, or decimals)'
        onChange={() =>
          window.setTimeout(function () {
            sideAnalysis('A');
          }, 2)
        }
      />
      <InputBox
        inputType='sideB'
        inputLabel='Side B length'
        placeholder='Numbers only (natural, or decimals)'
        onChange={() =>
          window.setTimeout(function () {
            sideAnalysis('B');
          }, 2)
        }
      />
      <InputBox
        inputType='sideC'
        inputLabel='Side C length'
        placeholder='Numbers only (natural, or decimals)'
        onChange={() =>
          window.setTimeout(function () {
            sideAnalysis('C');
          }, 2)
        }
      />
      <br />

      <br />
      {message}
    </div>
  );
};

export default Calculations;
