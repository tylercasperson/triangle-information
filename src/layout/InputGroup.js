import React from 'react';
import InputBox from './InputBox';

const InputGroup = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '60vw',
        marginLeft: '20vw',
        marginTop: '5vh',
      }}
    >
      <div style={{ width: '40%' }}>
        <InputBox
          inputType='sideA'
          inputLabel='Side A length'
          // value={props.sideAvalue}
          onChange={props.onChangeSideA}
        />
        <InputBox
          inputType='sideB'
          inputLabel='Side B length'
          // value={props.sideBvalue}
          onChange={props.onChangeSideB}
        />
        <InputBox
          inputType='sideC'
          inputLabel='Side C length'
          // value={props.sideCvalue}
          onChange={props.onChangeSideC}
        />
      </div>
      <div style={{ width: '60%' }}>
        <div
          style={{
            display: 'flex',
          }}
        >
          <InputBox
            inputType='angleA'
            inputLabel='Angle A degrees'
            // value={props.angleAvalue}
            onChange={props.onChangeAngleA}
          />
          <div style={{ marginLeft: '2vw' }}>{props.messageAngleA}</div>
        </div>
        <div
          style={{
            display: 'flex',
          }}
        >
          <InputBox
            inputType='angleB'
            inputLabel='Angle B degrees'
            // value={props.angleBvalue}
            onChange={props.onChangeAngleB}
          />
          <div style={{ marginLeft: '2vw' }}>{props.messageAngleB}</div>
        </div>
        <div
          style={{
            display: 'flex',
          }}
        >
          <InputBox
            inputType='angleC'
            inputLabel='Angle C degrees'
            // value={props.angleCvalue}
            onChange={props.onChangeAngleC}
          />{' '}
          <div style={{ marginLeft: '2vw' }}>{props.messageAngleC}</div>
        </div>
      </div>
    </div>
  );
};

export default InputGroup;
