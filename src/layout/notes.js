import React, { useState, useEffect } from 'react';
import InputGroup from './InputGroup';
import MessageGroup from './MessageGroup';
import CalculateButton from './CalculateButton';

const Calculations = () => {
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [sideC, setSideC] = useState('');
  const [angleA, setAngleA] = useState('');
  const [angleB, setAngleB] = useState('');
  const [angleC, setAngleC] = useState('');
  const [angleAtype, setAngleAtype] = useState('');
  const [angleBtype, setAngleBtype] = useState('');
  const [angleCtype, setAngleCtype] = useState('');

  const [triangle, setTriangle] = useState('');
  const [message, setMessage] = useState('');
  const [calculate, setCalculate] = useState('');

  const [triangle1, setTriangle1] = useState(['hello', 'bye']);
  const [triangle2, setTriangle2] = useState([]);
  const [triangle3, setTriangle3] = useState([]);

  useEffect(() => {
    if (
      message === `These side lengths produce a valid ${triangle} triangle.`
    ) {
      angleAnalysis(parseInt(angleA), 'A');
      angleAnalysis(parseInt(angleB), 'B');
      angleAnalysis(parseInt(angleC), 'C');
    }

    console.log(triangle1[0]);
    console.log(triangle1);

    if (
      sideA === '' ||
      sideB === '' ||
      sideC === '' ||
      angleA === '' ||
      angleB === '' ||
      angleC === ''
    ) {
      missingData();
    }

    if (sideA !== '' && sideB !== '' && sideC !== '') {
      // if (angleA !== '') {
      //   let placeholder = angleA;
      //   SSS();
      //   setAngleA(placeholder);
      //   console.log('aaaaaaa');
      // }
      // if (angleB !== '') {
      //   let placeholder = angleB;
      //   SSS();
      //   setAngleB(placeholder);
      //   console.log('bbbbbbb');
      // }
      // if (angleC !== '') {
      //   let placeholder = angleC;
      //   SSS();
      //   setAngleC(placeholder);
      //   console.log('cccccc');
      // }

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
        if (
          parseInt(angleA) === 0 ||
          parseInt(angleB) === 0 ||
          parseInt(angleC) === 0
        ) {
          setMessage('One of the sides is too long to be a valid triangle.');
        } else {
          setMessage(
            `These side lengths produce a valid ${triangle} triangle.`
          );
        }
      } else {
        setMessage('These sides do not produce a valid triangle.');
      }
    }
  }, [calculate, triangle, sideA, sideB, sideC, angleA, angleB, angleC]);

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
      whichAngle('Right angle');
    } else if (angle < 90) {
      whichAngle('Acute angle');
    } else if (angle > 90) {
      whichAngle('Obtuse angle');
    }
  };

  const inputAnalysis = (inputType) => {
    switch (inputType) {
      case 'sideA':
        setSideA(document.getElementById(inputType).value);
        break;
      case 'sideB':
        setSideB(document.getElementById(inputType).value);
        break;
      case 'sideC':
        setSideC(document.getElementById(inputType).value);
        break;
      case 'angleA':
        setAngleA(document.getElementById(inputType).value);
        break;
      case 'angleB':
        setAngleB(document.getElementById(inputType).value);
        break;
      case 'angleC':
        setAngleC(document.getElementById(inputType).value);
        break;
      default:
        return;
    }
  };

  const missingData = () => {
    console.log('sa: ', sideA);
    console.log('sb: ', sideB);
    console.log('sc: ', sideC);

    console.log('aa: ', angleA);
    console.log('ab: ', angleB);
    console.log('ac: ', angleC);

    const data =
      // all three
      sideA !== '' &&
      sideB !== '' &&
      sideC !== '' &&
      angleA === '' &&
      angleB === '' &&
      angleC === ''
        ? 'abc'
        : sideA === '' &&
          sideB === '' &&
          sideC === '' &&
          angleA !== '' &&
          angleB !== '' &&
          angleC !== ''
        ? 'ABC'
        : // two sides
        sideA !== '' &&
          sideB !== '' &&
          sideC === '' &&
          angleA !== '' &&
          angleB === '' &&
          angleC === ''
        ? 'abA'
        : sideA === '' &&
          sideB !== '' &&
          sideC !== '' &&
          angleA !== '' &&
          angleB === '' &&
          angleC === ''
        ? 'bAc'
        : sideA !== '' &&
          sideB === '' &&
          sideC !== '' &&
          angleA !== '' &&
          angleB === '' &&
          angleC === ''
        ? 'acA'
        : sideA !== '' &&
          sideB !== '' &&
          sideC === '' &&
          angleA === '' &&
          angleB !== '' &&
          angleC === ''
        ? 'baB'
        : sideA === '' &&
          sideB !== '' &&
          sideC !== '' &&
          angleA === '' &&
          angleB !== '' &&
          angleC === ''
        ? 'bcB'
        : sideA !== '' &&
          sideB === '' &&
          sideC !== '' &&
          angleA === '' &&
          angleB !== '' &&
          angleC === ''
        ? 'cBa'
        : sideA !== '' &&
          sideB !== '' &&
          sideC === '' &&
          angleA === '' &&
          angleB === '' &&
          angleC !== ''
        ? 'aCb'
        : sideA === '' &&
          sideB !== '' &&
          sideC !== '' &&
          angleA === '' &&
          angleB === '' &&
          angleC !== ''
        ? 'cbC'
        : sideA !== '' &&
          sideB === '' &&
          sideC !== '' &&
          angleA === '' &&
          angleB === '' &&
          angleC !== ''
        ? 'caC'
        : // one side
        sideA !== '' &&
          sideB === '' &&
          sideC === '' &&
          angleA !== '' &&
          angleB !== '' &&
          angleC === ''
        ? 'ABa'
        : sideA !== '' &&
          sideB === '' &&
          sideC === '' &&
          angleA === '' &&
          angleB !== '' &&
          angleC !== ''
        ? 'BaC'
        : sideA !== '' &&
          sideB === '' &&
          sideC === '' &&
          angleA !== '' &&
          angleB === '' &&
          angleC !== ''
        ? 'ACa'
        : sideA === '' &&
          sideB !== '' &&
          sideC === '' &&
          angleA !== '' &&
          angleB !== '' &&
          angleC === ''
        ? 'BAb'
        : sideA === '' &&
          sideB !== '' &&
          sideC === '' &&
          angleA === '' &&
          angleB !== '' &&
          angleC !== ''
        ? 'BCb'
        : sideA === '' &&
          sideB !== '' &&
          sideC === '' &&
          angleA !== '' &&
          angleB === '' &&
          angleC !== ''
        ? 'CbA'
        : sideA === '' &&
          sideB === '' &&
          sideC !== '' &&
          angleA !== '' &&
          angleB !== '' &&
          angleC === ''
        ? 'AcB'
        : sideA === '' &&
          sideB === '' &&
          sideC !== '' &&
          angleA === '' &&
          angleB !== '' &&
          angleC !== ''
        ? 'CBc'
        : sideA === '' &&
          sideB === '' &&
          sideC !== '' &&
          angleA !== '' &&
          angleB === '' &&
          angleC !== ''
        ? 'CAc'
        : null;

    console.log('data: ', data);

    switch (data) {
      // all three
      case 'abc':
        SSS();
        break;
      case 'ABC':
        AAA();
        break;
      // two sides
      case 'abA':
        SSA(sideA, sideB, angleA);
        break;
      case 'bAc':
        SAS(sideB, angleA, sideC);
        break;
      case 'acA':
        SSA(sideA, sideC, angleA);
        break;
      case 'baB':
        SSA(sideB, sideA, angleB);
        break;
      case 'bcB':
        SSA(sideB, sideC, angleB);
        break;
      case 'cBa':
        SAS(sideC, angleB, sideA);
        break;
      case 'aCb':
        SAS(sideA, angleC, sideB);
        break;
      case 'cbC':
        SSA(sideC, sideB, angleC);
        break;
      case 'caC':
        SSA(sideC, sideA, angleC);
        break;
      // one side
      case 'ABa':
        AAS(angleA, angleB, sideA);
        break;
      case 'BaC':
        ASA(angleB, sideA, angleC);
        break;
      case 'ACa':
        AAS(angleA, angleC, sideA);
        break;
      case 'BAb':
        AAS(angleB, angleA, sideB);
        break;
      case 'BCb':
        AAS(angleB, angleC, sideB);
        break;
      case 'CbA':
        ASA(angleC, sideB, angleA);
        break;
      case 'AcB':
        ASA(angleA, sideC, angleB);
        break;
      case 'CBc':
        AAS(angleC, angleB, sideC);
        break;
      case 'CAc':
        AAS(angleC, angleA, sideC);
        break;
      default:
        setMessage(
          'Please provide more information for a valid triangle to be calculated.'
        );
        return;
    }
  };

  const setCalculation = (match, comparison, calculation, set) => {
    let optionA = comparison === 'side' ? sideA : angleA;
    let optionB = comparison === 'side' ? sideB : angleB;
    let optionC = comparison === 'side' ? sideC : angleC;
    let positionA = set === 'side' ? triangle1[0] : triangle1[3];
    let positionB = set === 'side' ? triangle1[1] : triangle1[4];
    let positionC = set === 'side' ? triangle1[2] : triangle1[5];

    if (match === optionA) {
      if (positionA.length === 0) {
        set === 'side' ? setSideA(calculation) : setAngleA(calculation);
        comparison === 'side'
          ? (triangle1[0] = calculation)
          : (triangle1[3] = calculation);
      }
    } else if (match === optionB) {
      if (positionB.lemgth === 0) {
        set === 'side' ? setSideB(calculation) : setAngleB(calculation);
        comparison === 'side'
          ? (triangle1[1] = calculation)
          : (triangle1[4] = calculation);
      }
    } else if (match === optionC) {
      if (positionC.length === 0) {
        set === 'side' ? setSideC(calculation) : setAngleC(calculation);
        comparison === 'side'
          ? (triangle1[2] = calculation)
          : (triangle1[5] = calculation);
      }
    }
  };

  const toRad = Math.PI / 180;
  const toDeg = 180 / Math.PI;

  const SSS = () => {
    setAngleA(
      (
        Math.acos(
          (sideB ** 2 + sideC ** 2 - sideA ** 2) / (2 * sideB * sideC)
        ) * toDeg
      ).toFixed(2)
    );
    setAngleB(
      (
        Math.acos(
          (sideC ** 2 + sideA ** 2 - sideB ** 2) / (2 * sideC * sideA)
        ) * toDeg
      ).toFixed(2)
    );
    setAngleC(
      (
        Math.acos(
          (sideA ** 2 + sideB ** 2 - sideC ** 2) / (2 * sideA * sideB)
        ) * toDeg
      ).toFixed(2)
    );
  };

  const AAA = () => {
    setMessage(
      'I am sorry but you cannot solve the length of the sides by only providing the angles. You will need to provide the length of at least 1 side.'
    );
  };

  const SAS = (side1, angle, side2) => {
    console.log('SAS');
    const missingSide = Math.sqrt(
      side1 ** 2 + side2 ** 2 - 2 * side1 * side2 * Math.cos(angle * toRad)
    ).toFixed(2);

    const missingAngle1 = (Math.sin(angle * toRad) * 5) / missingSide;

    console.log('missingAngle1: ', missingAngle1);

    if (sideA === '') {
      setSideA(missingSide);
    } else if (sideB === '') {
      setSideB(missingSide);
    } else if (sideC === '') {
      setSideC(missingSide);
    }
  };

  const SSA = (side1, side2, angle) => {
    const missingAngle1 = (
      Math.asin((Math.sin(angle * toRad) / side1) * side2) * toDeg
    ).toFixed(2);

    const missingAngle2 = 180 - angle - missingAngle1;

    const missingSide = (
      (Math.sin(missingAngle2 * toRad) * side1) /
      Math.sin(angle * toRad)
    ).toFixed(2);

    if (sideA === '') {
      setSideA(missingSide);
    } else if (sideB === '') {
      setSideB(missingSide);
    } else if (sideC === '') {
      setSideC(missingSide);
    }
  };

  const AAS = (angle1, angle2, side) => {
    const missingAngle = 180 - angle1 - angle2;

    const missingSide1 = (
      (side * Math.sin(angle2 * toRad)) /
      Math.sin(angle1 * toRad)
    ).toFixed(2);

    const missingSide2 = (
      (side * Math.sin(missingAngle * toRad)) /
      Math.sin(angle1 * toRad)
    ).toFixed(2);

    if (angleA === '') {
      setAngleA(missingAngle);
      setSideC(missingSide1);
      setSideA(missingSide2);
    } else if (angleB === '') {
      setAngleB(missingAngle);
      setSideA(missingSide1);
      setSideB(missingSide2);
    } else if (angleC === '') {
      setAngleC(missingAngle);
      setSideB(missingSide1);
      setSideC(missingSide2);
    }
  };

  const ASA = (angle1, side, angle2) => {
    const missingAngle = 180 - angle1 - angle2;

    const missingSide1 = (
      (side / Math.sin(missingAngle * toRad)) *
      Math.sin(angle1 * toRad)
    ).toFixed(2);

    const missingSide2 = (
      (side / Math.sin(missingAngle * toRad)) *
      Math.sin(angle2 * toRad)
    ).toFixed(2);

    if (angleA === '') {
      setAngleC(missingAngle);
      setSideA(missingSide1);
      setSideB(missingSide2);
    } else if (angleB === '') {
      setAngleA(missingAngle);
      setSideB(missingSide1);
      setSideC(missingSide2);
    } else if (angleC === '') {
      setAngleB(missingAngle);
      setSideC(missingSide1);
      setSideA(missingSide2);
    }
  };

  return (
    <div>
      <InputGroup
        onChangeSideA={() =>
          window.setTimeout(function () {
            inputAnalysis('sideA');
          }, 2)
        }
        onChangeSideB={() =>
          window.setTimeout(function () {
            inputAnalysis('sideB');
          }, 2)
        }
        onChangeSideC={() =>
          window.setTimeout(function () {
            inputAnalysis('sideC');
          }, 2)
        }
        onChangeAngleA={() =>
          window.setTimeout(function () {
            inputAnalysis('angleA');
          }, 2)
        }
        messageAngleA={angleAtype}
        onChangeAngleB={() =>
          window.setTimeout(function () {
            inputAnalysis('angleB');
          }, 2)
        }
        messageAngleB={angleBtype}
        onChangeAngleC={() =>
          window.setTimeout(function () {
            inputAnalysis('angleC');
          }, 2)
        }
        messageAngleC={angleCtype}
      />

      {parseInt(angleA) === 0 ||
      parseInt(angleB) === 0 ||
      parseInt(angleC) === 0 ||
      angleA === '' ||
      angleB === '' ||
      angleC === '' ||
      message === 'These sides do not produce a valid triangle.' ||
      message ===
        'I am sorry but you cannot solve the length of the sides by only providing the angles. You will need to provide the length of at least 1 side.' ? (
        <MessageGroup message={message} />
      ) : (
        <MessageGroup
          message={message}
          sideA={'SideA: ' + sideA}
          sideB={'SideB: ' + sideB}
          sideC={'SideC: ' + sideC}
          angleA={'AngleA: ' + angleA}
          angleAtype={angleAtype}
          angleB={'AngleB: ' + angleB}
          angleBtype={angleBtype}
          angleC={'AngleC: ' + angleC}
          angleCtype={angleCtype}
        />
      )}
      <br />
      <br />
      <CalculateButton
        onClick={() => {
          // reset();
          calculate === 1 ? setCalculate(0) : setCalculate(1);
          missingData();
        }}
      />
    </div>
  );
};

export default Calculations;
