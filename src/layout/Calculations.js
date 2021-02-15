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

  const reset = () => {
    setSideA('');
    setSideB('');
    setSideC('');
    setAngleA('');
    setAngleB('');
    setAngleC('');
    setAngleAtype('');
    setAngleBtype('');
    setAngleCtype('');
    setTriangle('');
    setMessage('');
    setCalculate('');
  };

  useEffect(() => {
    angleAnalysis(parseInt(angleA), 'A');
    angleAnalysis(parseInt(angleB), 'B');
    angleAnalysis(parseInt(angleC), 'C');

    missingData();

    if (sideA !== '' && sideB !== '' && sideC !== '') {
      if (sideA === sideB && sideA === sideC && sideB === sideC) {
        setTriangle('Equilateral');
      } else if (sideA !== sideB && sideA !== sideC && sideB !== sideC) {
        setTriangle('Scaleneal');
      } else {
        setTriangle('Isosceles');
      }

      console.log(sideA);
      console.log(sideB);
      console.log(sideC);

      console.log(angleA);
      console.log(angleB);
      console.log(angleC);

      if (
        +sideA + +sideB >= +sideC &&
        +sideA + +sideC >= +sideB &&
        +sideB + +sideC >= +sideA
      ) {
        console.log(parseInt(angleA) === 0 || angleB === 0 || angleC === 0);
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
  }, [calculate, sideA, sideB, sideC, angleA, angleB, angleC]);

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
        ? 'bcA'
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
        ? 'abB'
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
        ? 'acB'
        : sideA !== '' &&
          sideB !== '' &&
          sideC === '' &&
          angleA === '' &&
          angleB === '' &&
          angleC !== ''
        ? 'abC'
        : sideA === '' &&
          sideB !== '' &&
          sideC !== '' &&
          angleA === '' &&
          angleB === '' &&
          angleC !== ''
        ? 'bcC'
        : sideA !== '' &&
          sideB === '' &&
          sideC !== '' &&
          angleA === '' &&
          angleB === '' &&
          angleC !== ''
        ? 'acC'
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
        ? 'BCa'
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
        ? 'ABb'
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
        ? 'ACb'
        : sideA === '' &&
          sideB === '' &&
          sideC !== '' &&
          angleA !== '' &&
          angleB !== '' &&
          angleC === ''
        ? 'ABc'
        : sideA === '' &&
          sideB === '' &&
          sideC !== '' &&
          angleA === '' &&
          angleB !== '' &&
          angleC !== ''
        ? 'BCc'
        : sideA === '' &&
          sideB === '' &&
          sideC !== '' &&
          angleA !== '' &&
          angleB === '' &&
          angleC !== ''
        ? 'ACc'
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
        SSA(sideA, sideB, angleA);
        break;
      case 'bcA':
        SAS(sideB, angleA, sideC);
        break;
      case 'acA':
        SSA(sideA, sideC, angleA);
        break;
      case 'abB':
        SSA(sideB, sideA, angleB);
        break;
      case 'bcB':
        SSA(sideB, sideC, angleB);
        break;
      case 'acB':
        SAS(sideC, angleB, sideA);
        break;
      case 'abC':
        SAS(sideA, angleC, sideB);
        break;
      case 'bcC':
        SSA(sideC, sideB, angleC);
        break;
      case 'acC':
        SSA(sideC, sideA, angleC);
        break;
      // one side
      case 'ABa':
        AAS(angleA, angleB, sideA);
        break;
      case 'BCa':
        ASA(angleB, sideA, angleC);
        break;
      case 'ACa':
        AAS(angleA, angleC, sideA);
        break;
      case 'ABb':
        AAS(angleB, angleA, sideB);
        break;
      case 'BCb':
        AAS(angleB, angleC, sideB);
        break;
      case 'ACb':
        ASA(angleA, sideB, angleC);
        break;
      case 'ABc':
        ASA(angleA, sideC, angleB);
        break;
      case 'BCc':
        AAS(angleC, angleB, sideC);
        break;
      case 'ACc':
        AAS(angleC, angleA, sideC);
        break;
      default:
        return;
    }
  };

  const rad = Math.PI / 180;
  const deg = 180 / Math.PI;

  const SSS = () => {
    // cosA
    setAngleA(
      (
        Math.acos(
          (sideB ** 2 + sideC ** 2 - sideA ** 2) / (2 * sideB * sideC)
        ) *
        (180 / Math.PI)
      ).toFixed(2)
    );
    // cosB
    setAngleB(
      (
        Math.acos(
          (sideC ** 2 + sideA ** 2 - sideB ** 2) / (2 * sideC * sideA)
        ) *
        (180 / Math.PI)
      ).toFixed(2)
    );
    setAngleC(
      (
        Math.acos(
          (sideA ** 2 + sideB ** 2 - sideC ** 2) / (2 * sideA * sideB)
        ) *
        (180 / Math.PI)
      ).toFixed(2)
    );
  };

  const AAA = () => {
    setMessage(
      'I am sorry but you cannot solve the length of the sides by only providing the angles. You will need to provide the length of atleast 1 side.'
    );
  };

  const AA = (angle1, angle2) => {
    if (sideA === '' && sideB === '' && sideC === '') {
      AAA();
    } else {
      const missingAngle = 180 - angle1 - angle2;

      if (angleA === '') {
        setAngleA(missingAngle);
      } else if (angleB === '') {
        setAngleB(missingAngle);
      } else if (angleC === '') {
        setAngleC(missingAngle);
      }
    }
  };

  const SAS = (side1, angle, side2) => {
    const missingSide = Math.sqrt(
      side1 ** 2 +
        side2 ** 2 -
        2 * side1 * side2 * Math.cos(angle * (Math.PI / 180))
    ).toFixed(2);

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
      Math.asin((Math.sin(angle * rad) / side1) * side2) * deg
    ).toFixed(2);

    AA(angle, missingAngle1);
    // need to find a way to combine AA and missing angle 2
    const missingAngle2 = 180 - angle - missingAngle1;

    const missingSide =
      (Math.sin(missingAngle2 * rad) * side1) / Math.sin(angle * rad);

    if (sideA === '') {
      setSideA(missingSide);
    } else if (sideB === '') {
      setSideB(missingSide);
    } else if (sideC === '') {
      setSideC(missingSide);
    }
  };

  const AAS = (angle1, angle2, side) => {
    AA(angle1, angle2);

    const missingSide = (
      (side / Math.sin(angle1 * (Math.PI / 180))) *
      Math.sin(angle2 * (Math.PI / 180))
    ).toFixed(2);

    if (sideA === '') {
      setSideA(missingSide);
    } else if (sideB === '') {
      setSideB(missingSide);
    } else if (sideC === '') {
      setSideC(missingSide);
    }

    SSA(side, missingSide, angle1);
  };

  const ASA = (angle1, side, angle2) => {
    AA(angle1, angle2);

    const missingAngle = 180 - angle1 - angle2;

    const missingSide = (
      (side / Math.sin(missingAngle * (Math.PI / 180))) *
      Math.sin(angle2 * (Math.PI / 180))
    ).toFixed(2);

    if (sideA === '') {
      setSideA(missingSide);
    } else if (sideB === '') {
      setSideB(missingSide);
    } else if (sideC === '') {
      setSideC(missingSide);
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
      angleC === '' ? (
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
