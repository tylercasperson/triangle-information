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

  const [triangle1, setTriangle1] = useState([]);
  const [triangle2, setTriangle2] = useState([]);
  const [triangle3, setTriangle3] = useState([]);

  useEffect(() => {
    // console.log('before');
    // console.log('sa: ', sideA);
    // console.log('sb: ', sideB);
    // console.log('sc: ', sideC);

    // console.log('aa: ', angleA);
    // console.log('ab: ', angleB);
    // console.log('ac: ', angleC);

    missingData();

    console.log(
      'a: ',
      sideA,
      'b: ',
      sideB,
      'c: ',
      sideC,
      'A: ',
      angleA,
      'B: ',
      angleB,
      'C: ',
      angleC
    );

    // if (
    //   message === `These side lengths produce a valid ${triangle} triangle.`
    // ) {
    //   angleAnalysis(parseInt(angleA), 'A');
    //   angleAnalysis(parseInt(angleB), 'B');
    //   angleAnalysis(parseInt(angleC), 'C');
    // }
    // if (
    //   sideA === '' ||
    //   sideB === '' ||
    //   sideC === '' ||
    //   angleA === '' ||
    //   angleB === '' ||
    //   angleC === ''
    // ) {
    // missingData();
    // }
    // if (sideA !== '' && sideB !== '' && sideC !== '') {
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
    // if (sideA === sideB && sideA === sideC && sideB === sideC) {
    //   setTriangle('Equilateral');
    // } else if (sideA !== sideB && sideA !== sideC && sideB !== sideC) {
    //   setTriangle('Scaleneal');
    // } else {
    //   setTriangle('Isosceles');
    // }
    //   if (
    //     +sideA + +sideB >= +sideC &&
    //     +sideA + +sideC >= +sideB &&
    //     +sideB + +sideC >= +sideA
    //   ) {
    //     if (
    //       parseInt(angleA) === 0 ||
    //       parseInt(angleB) === 0 ||
    //       parseInt(angleC) === 0
    //     ) {
    //       setMessage('One of the sides is too long to be a valid triangle.');
    //     } else {
    //       setMessage(
    //         `These side lengths produce a valid ${triangle} triangle.`
    //       );
    //     }
    //   } else {
    //     setMessage('These sides do not produce a valid triangle.');
    //   }
    // }
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
    // console.log('sa: ', sideA);
    // console.log('sb: ', sideB);
    // console.log('sc: ', sideC);

    // console.log('aa: ', angleA);
    // console.log('ab: ', angleB);
    // console.log('ac: ', angleC);

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

    // console.log('data: ', data);

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
    const optionA = comparison === 'side' ? sideA : angleA;
    const optionB = comparison === 'side' ? sideB : angleB;
    const optionC = comparison === 'side' ? sideC : angleC;

    if (match === optionA) {
      set === 'side' ? setSideA(calculation) : setAngleA(calculation);
    } else if (match === optionB) {
      set === 'side' ? setSideB(calculation) : setAngleB(calculation);
    } else if (match === optionC) {
      set === 'side' ? setSideC(calculation) : setAngleC(calculation);
    }

    console.log('option: ', optionB, 'match: ', match);
    console.log('a: ', optionA === match);
    console.log('b: ', optionB === match);
    console.log('c: ', optionC === match);

    console.log(
      'a: ',
      sideA,
      'b: ',
      sideB,
      'c: ',
      sideC,
      'A: ',
      angleA,
      'B: ',
      angleB,
      'C: ',
      angleC
    );

    console.log(
      'match: ',
      match,
      'comparison: ',
      comparison,
      'calculation: ',
      calculation,
      'set: ',
      set
    );
  };

  const toRad = Math.PI / 180;
  const toDeg = 180 / Math.PI;

  const angleLawOfSines = (side1, angle1, side2) => {
    console.log('angleLawOfSines');
    console.log(side1);
    console.log(angle1);
    console.log(side2);
    console.log(
      'answer: ',
      Math.asin((Math.sin(angle1 * toRad) * side1) / side2) * toDeg
    );
    return Math.asin((Math.sin(angle1 * toRad) * side1) / side2) * toDeg;
  };

  const angleLowOfCosines = (side1, side2, side3) => {
    return (
      Math.acos((side2 ** 2 + side3 ** 2 - side1 ** 2) / (2 * side2 * side3)) *
      toDeg
    );
  };

  const AA = (angle1, angle2) => {
    return 180 - angle1 - angle2;
  };

  const sideLawOfCosine = (side1, side2, angle3) => {
    console.log('sideLawOfCosine');
    // already checked

    return Math.sqrt(
      side1 ** 2 + side2 ** 2 - 2 * side1 * side2 * Math.cos(angle3 * toRad)
    );
  };

  const sideLawOfSine = (side1, angle1, angle2) => {
    console.log('sideLawOfSine');
    // already checked
    return (Math.sin(angle2 * toRad) * side1) / Math.sin(angle1 * toRad);
  };

  const SSS = () => {
    console.log('SSS');
    setAngleA(angleLowOfCosines(sideA, sideB, sideC));
    setAngleB(angleLowOfCosines(sideB, sideA, sideC));
    setAngleC(angleLowOfCosines(sideC, sideA, sideB));
  };

  const AAA = () => {
    setMessage(
      'I am sorry but you cannot solve the length of the sides by only providing the angles. You will need to provide the length of at least 1 side.'
    );
  };

  const SAS = (side1, angle, side2) => {
    console.log('SAS');

    const missingSide = sideLawOfCosine(side1, side2, angle);
    const missingAngle1 = angleLawOfSines(side1, angle, missingSide);
    const missingAngle2 = AA(angle, missingAngle1);
    setCalculation('', 'side', missingSide, 'side');
    setCalculation(side1, 'side', missingAngle1, 'angle');
    setCalculation(side2, 'side', missingAngle2, 'angle');
  };

  const SSA = (side1, side2, angle) => {
    console.log('SSA');

    const missingAngle1 = angleLawOfSines(side2, angle, side1);
    const missingAngle2 = AA(angle, missingAngle1);
    const missingSide = sideLawOfSine(side1, angle, missingAngle2);
    setCalculation(side2, 'side', missingAngle1, 'angle');
    setCalculation('', 'side', missingSide, 'side');
    setCalculation('', 'angle', missingAngle2, 'angle');
  };

  const AAS = (angle1, angle2, side) => {
    console.log('AAS');

    const missingAngle = AA(angle1, angle2);
    const missingSide1 = sideLawOfSine(side, angle1, angle2);
    const missingSide2 = sideLawOfCosine(missingSide1, side, missingAngle);
    setCalculation('', 'angle', missingAngle, 'angle');
    setCalculation(angle2, 'angle', missingSide1, 'side');
    setCalculation('', 'angle', missingSide2, 'side');
  };

  const ASA = (angle1, side, angle2) => {
    console.log('ASA');

    const missingAngle = AA(angle1, angle2);
    const missingSide1 = sideLawOfSine(side, missingAngle, angle2);
    const missingSide2 = sideLawOfCosine(missingSide1, side, angle1);
    setCalculation('', 'angle', missingAngle, 'angle');
    setCalculation(angle2, 'angle', missingSide1, 'side');
    setCalculation(angle1, 'angle', missingSide2, 'side');
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
      <br />
      <br />
      {/* <textarea rows='30' cols='40'></textarea>
      <div */}
      <div>
        SSA; ['',8,13,'',31,''] [15.52,8,13,92.2,31,56.8] SAS; ['',5,7,49,'','']
        [5.3,5,7,49,45.4,85.6] AAS; ['','',7,35,'',62] [4.55,7.87,7,35,83,62]
        ASA; ['','',9,76,34,''] [9.29,5.36,9,76,34,70]
      </div>
    </div>
  );
};

export default Calculations;
