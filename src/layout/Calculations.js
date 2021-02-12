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
      SSS();
      AAA();
      AA(30, 60);
      SAS(5, 49, 7);
      SSA(13, 8, 31);
      AAS(35, 105, 7);
      ASA(87, 18.9, 42);

      console.log(sideA);
      console.log(sideB);
      console.log(sideC);

      SOHCAHTOA();

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

  const inputAnalysis = (side) => {
    switch (side) {
      case 'sideA':
        setSideA(document.getElementById(side).value);
        break;
      case 'sideB':
        setSideB(document.getElementById(side).value);
        break;
      case 'sideC':
        setSideC(document.getElementById(side).value);
        break;
      default:
        return;
    }
  };

  const SSS = () => {
    console.log(
      'COS(a): ',
      (
        Math.acos(
          (sideB ** 2 + sideC ** 2 - sideA ** 2) / (2 * sideB * sideC)
        ) *
        (180 / Math.PI)
      ).toFixed(2)
    );
    console.log(
      'COS(b): ',
      (
        Math.acos(
          (sideC ** 2 + sideA ** 2 - sideB ** 2) / (2 * sideC * sideA)
        ) *
        (180 / Math.PI)
      ).toFixed(2)
    );
    console.log(
      'COS(c): ',
      (
        Math.acos(
          (sideA ** 2 + sideB ** 2 - sideC ** 2) / (2 * sideA * sideB)
        ) *
        (180 / Math.PI)
      ).toFixed(2)
    );
  };

  const AAA = () => {
    console.log(
      'I am sorry but you cannot solve the length of the sides by only providing the angles. You will need to provide the length of atleast 1 side.'
    );
  };

  const AA = (angle1, angle2) => {
    console.log(180 - (angle1 + angle2));
  };

  const SAS = (side1, angle, side2) => {
    console.log(
      'SAS: ',
      Math.sqrt(
        side1 ** 2 +
          side2 ** 2 -
          2 * side1 * side2 * Math.cos(angle * (Math.PI / 180))
      ).toFixed(2)
    );
  };

  const SSA = (side1, side2, angle) => {
    console.log(
      'SSA: ',
      (
        Math.asin((Math.sin(angle * (Math.PI / 180)) * side1) / side2) *
        (180 / Math.PI)
      ).toFixed(2)
    );
  };

  const AAS = (angle1, angle2, side) => {
    console.log(
      'AAS: ',
      (
        (side / Math.sin(angle1 * (Math.PI / 180))) *
        Math.sin(angle2 * (Math.PI / 180))
      ).toFixed(2)
    );
  };

  const ASA = (angle1, side, angle2) => {
    const angle3 = 180 - angle1 - angle2;
    console.log(
      'ASA: ',
      (
        (side / Math.sin(angle3 * (Math.PI / 180))) *
        Math.sin(angle2 * (Math.PI / 180))
      ).toFixed(2)
    );
  };

  const SOHCAHTOA = () => {
    // might not need
    console.log(Math.asin(sideA / sideB) * (180 / Math.PI));
  };

  return (
    <div>
      <InputBox
        inputType='sideA'
        inputLabel='Side A length'
        placeholder='Numbers only (natural, or decimals)'
        onChange={() =>
          window.setTimeout(function () {
            inputAnalysis('sideA');
          }, 2)
        }
      />
      <InputBox
        inputType='sideB'
        inputLabel='Side B length'
        placeholder='Numbers only (natural, or decimals)'
        onChange={() =>
          window.setTimeout(function () {
            inputAnalysis('sideB');
          }, 2)
        }
      />
      <InputBox
        inputType='sideC'
        inputLabel='Side C length'
        placeholder='Numbers only (natural, or decimals)'
        onChange={() =>
          window.setTimeout(function () {
            inputAnalysis('sideC');
          }, 2)
        }
      />
      <br />
      {message}
    </div>
  );
};

export default Calculations;
