import React from 'react';

const SideInput = (props) => {
  return (
    <div>
      <br />
      <label htmlFor={'side' + props.side}>Side {props.side} length: </label>
      <input
        style={{ width: '25vw' }}
        type='number'
        placeholder='Numbers only (natural, negative, and decimals)'
        id={'side' + props.side}
        onKeyPress={props.keyDown}
        name={'side' + props.side}
      />
      <br />
    </div>
  );
};

export default SideInput;
