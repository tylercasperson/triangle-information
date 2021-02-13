import React, { useState, useEffect } from 'react';
import InputBox from './InputBox';

const AngleCalculations = () => {
  const [angleA, setAngleA] = useState('');
  const [angleB, setAngleB] = useState('');
  const [angleC, setAngleC] = useState('');
  const [angleAtype, setAngleAtype] = useState('');
  const [angleBtype, setAngleBtype] = useState('');
  const [angleCtype, setAngleCtype] = useState('');
  const [triangle, setTriangle] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const angleAnalysis = (angle, abc) => {
      const whichAngle = (angleType) => {
        if (abc === 'A') {
          setAngleAtype(angleType);
        } else if (abc === 'B') {
          setAngleBtype(angleType);
        } else if (abc === 'C') {
          setAngleCtype(angleType);
        }
      };
      if (angle === 90) {
        whichAngle('Right');
      } else if (angle < 90) {
        whichAngle('Acute');
      } else if (angle > 90) {
        whichAngle('Obtuse');
      }
    };

    angleAnalysis(parseFloat(angleA), 'A');
    angleAnalysis(parseFloat(angleB), 'B');
    angleAnalysis(parseFloat(angleC), 'C');
  }, [angleA, angleB, angleC]);

//   const inputAnalysis = (inputType) => {
//     switch (inputType) {
//       case 'angleA':
//         setAngleA(document.getElementById(inputType).value);
//         break;
//       case 'angleB':
//         setAngleB(document.getElementById(inputType).value);
//         break;
//       case 'angleC':
//         setAngleC(document.getElementById(inputType).value);
//         break;
//       default:
//         return;
//     }
//   };

  return (
    <div>
      <InputBox
        inputType='angleA'
        inputLabel='Angle A degrees'
        placeholder='Numbers only (natural, or decimals)'
        onChange={() =>
          window.setTimeout(function () {
            inputAnalysis('angleA');
          }, 2)
        }
      />
      <InputBox
        inputType='angleB'
        inputLabel='Angle B degrees'
        placeholder='Numbers only (natural, or decimals)'
        onChange={() =>
          window.setTimeout(function () {
            inputAnalysis('angleB');
          }, 2)
        }
      />
      <InputBox
        inputType='angleC'
        inputLabel='Angle C degrees'
        placeholder='Numbers only (natural, or decimals)'
        onChange={() =>
          window.setTimeout(function () {
            inputAnalysis('angleC');
          }, 2)
        }
      />
      {angleC}
      <br />
      {angleAtype}
      {angleBtype}
      {angleCtype}
    </div>
  );
};

export default AngleCalculations;




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