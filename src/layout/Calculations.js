import React, { useState, useEffect } from 'react';
import InputGroup from './InputGroup';
import MessageGroup from './MessageGroup';
import CalculateButton from './CalculateButton';
import Drawing from './Drawing';

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

  const [calculate, setCalculate] = useState(0);

  const [triangle, setTriangle] = useState('');
  const [message, setMessage] = useState('');

  const [originalInput, setOriginalInput] = useState(['', '', '', '', '', '']);
  const [triangle1, setTriangle1] = useState(['', '', '', '', '', '']);
  const [triangle2, setTriangle2] = useState([]);
  const [triangle3, setTriangle3] = useState([]);

  const logValues = () => {
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
  };

  useEffect(() => {
    missingData();
    logValues();

    whichTriangle();

    console.log('oI: ', originalInput);
  }, [calculate, angleA, angleB, angleC]);

  const whichTriangle = () => {
    if (sideA === sideB && sideA === sideC && sideB === sideC) {
      setTriangle('Equilateral');
    } else if (sideA !== sideB && sideA !== sideC && sideB !== sideC) {
      setTriangle('scalene');
    } else {
      setTriangle('Isosceles');
    }

    if (triangle1.length === 6) {
      if (
        +sideA + +sideB >= +sideC &&
        +sideA + +sideC >= +sideB &&
        +sideB + +sideC >= +sideA
      ) {
        if (angleA + angleB + angleC === 180) {
          setMessage(
            `These side lengths produce a valid ${triangle} triangle.`
          );
        } else {
          setMessage(
            'The angles do not add up to 180 degrees so the data provided does not make this a valid triangle.'
          );
        }
      } else {
        setMessage(
          'The sides do not connect. One is too long or too short to be a valid triangle.'
        );
      }
    } else {
      setMessage('More data is needed.');
    }
    triangleData();

    anotherTriangle();
  };

  const triangleData = () => {
    // let sideOne =
    //   originalInput !== ''
    //   // ? (document.getElementById('sideA').value = { sideA })
    //     : null;
    // let emptyArr = originalInput.filter((empty) => empty === '').length;
    // console.log(emptyArr);
    // if (emptyArr === 3 && triangle1.length === 0) {
    // setSideA(originalInput[0]);
    // setSideB(originalInput[1]);
    // setSideC(originalInput[2]);
    // setAngleA(originalInput[3]);
    // setAngleB(originalInput[4]);
    // setAngleC(originalInput[5]);
    setTriangle1([sideA, sideB, sideC, angleA, angleB, angleC]);
    trianglePlots(triangle1);
    // }
  };

  const angleAnalysis = (angle, abc) => {
    console.log('angleAnalysis');
    console.log('angle: ', angle);
    const whichAngle = (angleType) => {
      console.log('whichAngle');
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

  const missingData = () => {
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
        SSA(sideA, sideB, angleA, data);
        break;
      case 'bAc':
        SAS(sideB, angleA, sideC, data);
        break;
      case 'acA':
        SSA(sideA, sideC, angleA, data);
        break;
      case 'baB':
        SSA(sideB, sideA, angleB, data);
        break;
      case 'bcB':
        SSA(sideB, sideC, angleB, data);
        break;
      case 'cBa':
        SAS(sideC, angleB, sideA, data);
        break;
      case 'aCb':
        SAS(sideA, angleC, sideB, data);
        break;
      case 'cbC':
        SSA(sideC, sideB, angleC, data);
        break;
      case 'caC':
        SSA(sideC, sideA, angleC, data);
        break;
      // one side
      case 'ABa':
        AAS(angleA, angleB, sideA, data);
        break;
      case 'BaC':
        ASA(angleB, sideA, angleC, data);
        break;
      case 'ACa':
        AAS(angleA, angleC, sideA, data);
        break;
      case 'BAb':
        AAS(angleB, angleA, sideB, data);
        break;
      case 'BCb':
        AAS(angleB, angleC, sideB, data);
        break;
      case 'CbA':
        ASA(angleC, sideB, angleA, data);
        break;
      case 'AcB':
        ASA(angleA, sideC, angleB, data);
        break;
      case 'CBc':
        AAS(angleC, angleB, sideC, data);
        break;
      case 'CAc':
        AAS(angleC, angleA, sideC, data);
        break;
      default:
        setMessage(
          'Please provide more information for a valid triangle to be calculated.'
        );
        return;
    }
  };

  const setCalculation = (match, comparison, calculation, set, exactMatch) => {
    let optionA = comparison === 'side' ? sideA : angleA;
    let optionB = comparison === 'side' ? sideB : angleB;
    let optionC = comparison === 'side' ? sideC : angleC;

    if (exactMatch === 'a' || match === optionA) {
      set === 'side' ? setSideA(calculation) : setAngleA(calculation);
    } else if (exactMatch === 'b' || match === optionB) {
      set === 'side' ? setSideB(calculation) : setAngleB(calculation);
    } else if (exactMatch === 'c' || match === optionC) {
      set === 'side' ? setSideC(calculation) : setAngleC(calculation);
    }
  };

  const toRad = Math.PI / 180;
  const toDeg = 180 / Math.PI;

  const angleLawOfSines = (side1, angle1, side2) => {
    console.log('angleLawOfSines');

    return (
      Math.asin((Math.sin(angle1 * toRad) * side1) / side2) * toDeg
    ).toFixed(2);
  };

  const angleLowOfCosines = (side1, side2, side3) => {
    return (
      Math.acos((side2 ** 2 + side3 ** 2 - side1 ** 2) / (2 * side2 * side3)) *
      toDeg
    ).toFixed(2);
  };

  const AA = (angle1, angle2) => {
    return (180 - angle1 - angle2).toFixed(2);
  };

  const sideLawOfCosine = (side1, side2, angle3) => {
    console.log('sideLawOfCosine');

    return Math.sqrt(
      side1 ** 2 + side2 ** 2 - 2 * side1 * side2 * Math.cos(angle3 * toRad)
    ).toFixed(2);
  };

  const sideLawOfSine = (side1, angle1, angle2) => {
    console.log('sideLawOfSine');

    return (
      (Math.sin(angle2 * toRad) * side1) /
      Math.sin(angle1 * toRad)
    ).toFixed(2);
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

    let angle2 =
      angle === angleA
        ? 'b'
        : angle === angleB
        ? 'c'
        : angle === angleC
        ? 'a'
        : null;
    let angle3 =
      angle === angleA
        ? 'c'
        : angle === angleB
        ? 'a'
        : angle === angleC
        ? 'b'
        : null;

    const missingSide = sideLawOfCosine(side1, side2, angle);
    const missingAngle1 = angleLawOfSines(side1, angle, missingSide);
    const missingAngle2 = AA(angle, missingAngle1);
    setCalculation('', 'side', missingSide, 'side');
    setCalculation(null, 'exact', missingAngle1, 'angle', angle2);
    setCalculation(null, 'exact', missingAngle2, 'angle', angle3);
  };

  const SSA = (side1, side2, angle) => {
    console.log('SSA');

    let angle2 =
      angle === angleA
        ? 'b'
        : angle === angleB
        ? 'a'
        : angle === angleC
        ? 'b'
        : null;
    let angle3 =
      angle === angleA
        ? 'b'
        : angle === angleB
        ? 'c'
        : angle === angleC
        ? 'a'
        : null;

    const missingAngle1 = angleLawOfSines(side2, angle, side1);
    const missingAngle2 = AA(angle, missingAngle1);
    const missingSide = sideLawOfSine(side1, angle, missingAngle2);
    setCalculation(null, 'exact', missingAngle1, 'angle', angle2);
    setCalculation('', 'side', missingSide, 'side');
    setCalculation(null, 'exact', missingAngle2, 'angle', angle3);
  };

  const AAS = (angle1, angle2, side) => {
    console.log('AAS');

    let side2 =
      side === sideA ? 'b' : side === sideB ? 'c' : side === sideC ? 'a' : null;
    let side3 =
      side === sideA ? 'c' : side === sideB ? 'a' : side === sideC ? 'b' : null;

    const missingAngle = AA(angle1, angle2);
    const missingSide1 = sideLawOfSine(side, angle1, angle2);
    const missingSide2 = sideLawOfCosine(missingSide1, side, missingAngle);
    setCalculation('', 'angle', missingAngle, 'angle');
    setCalculation(null, 'exact', missingSide1, 'side', side2);
    setCalculation(null, 'exact', missingSide2, 'side', side3);
  };

  const ASA = (angle1, side, angle2) => {
    console.log('ASA');

    let side2 =
      side === sideA ? 'b' : side === sideB ? 'c' : side === sideC ? 'a' : null;
    let side3 =
      side === sideA ? 'c' : side === sideB ? 'a' : side === sideC ? 'b' : null;

    const missingAngle = AA(angle1, angle2);
    const missingSide1 = sideLawOfSine(side, missingAngle, angle2);
    const missingSide2 = sideLawOfCosine(missingSide1, side, angle1);
    setCalculation('', 'angle', missingAngle, 'angle');
    setCalculation(null, 'exact', missingSide1, 'side', side2);
    setCalculation(null, 'exact', missingSide2, 'side', side3);
  };

  const trianglePlots = (arr) => {
    // let x1 = sideC;
    // let y1 = 0;
    // let x2 = 0;
    // let y2 = 0;
    // let x3 = sideLawOfSine(sideA, 90, 180 - 90 - angleB);
    // let y3 = sideLawOfSine(sideA, 90, angleB);

    // a , 90 , 180-90-B
    // let height = sideLawOfSine(15.52, 90, 59); //x
    let height = sideLawOfSine(50, 90, 180 - 90 - 133); //x
    // a , 90 , B
    // let abc = sideLawOfSine(15.52, 90, 31); //y
    let abc = sideLawOfSine(50, 90, 133); //y

    console.log('x: ', height);
    console.log('y: ', abc);
  };

  const anotherTriangle = () => {
    // setTriangle2([
    //   originalInput[0],
    //   originalInput[1],
    //   originalInput[2],
    //   180 - triangle1[3],
    //   triangle1[4],
    //   triangle1[5],
    // ]);

    console.log('t2: ', triangle2);
  };

  const onChange = () => {
    let emptyArr = originalInput.filter((empty) => empty === '').length;

    let angleOne = document.getElementById('angleA').value;
    let angleTwo = document.getElementById('angleB').value;
    let angleThree = document.getElementById('angleC').value;

    setOriginalInput([
      document.getElementById('sideA').value,
      document.getElementById('sideB').value,
      document.getElementById('sideC').value,
      angleOne,
      angleTwo,
      angleThree,
    ]);

    angleAnalysis(parseInt(angleOne), 'A');
    angleAnalysis(parseInt(angleTwo), 'B');
    angleAnalysis(parseInt(angleThree), 'C');

    if (emptyArr <= 4) {
      setSideA(document.getElementById('sideA').value);
      setSideB(document.getElementById('sideB').value);
      setSideC(document.getElementById('sideC').value);
      setAngleA(angleOne);
      setAngleB(angleTwo);
      setAngleC(angleThree);

      setCalculate(calculate + 1);
    }
  };

  return (
    <div>
      <InputGroup
        onChangeSideA={() => onChange()}
        onChangeSideB={() => onChange()}
        onChangeSideC={() => onChange()}
        onChangeAngleA={() => onChange()}
        messageAngleA={angleAtype}
        onChangeAngleB={() => onChange()}
        messageAngleB={angleBtype}
        onChangeAngleC={() => onChange()}
        messageAngleC={angleCtype}
      />
      <br />

      <Drawing
        x1={sideC}
        y1={0}
        x2={0}
        y2={0}
        // x3={sideLawOfSine(sideA, 90, 180 - 90 - angleB)}
        // y3={sideLawOfSine(sideA, 90, angleB)}
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
          setCalculate(calculate + 1);
        }}
      />
      <br />
      <br />
      <div>
        SSA; ['',8,13,'',31,''] [15.52,8,13,92.2,31,56.8] SAS; ['',5,7,49,'','']
        [5.3,5,7,49,45.4,85.6] AAS; ['','',7,35,'',62] [4.55,7.87,7,35,83,62]
        ASA; ['','',9,76,34,''] [9.29,5.36,9,76,34,70]
      </div>
    </div>
  );
};

export default Calculations;
