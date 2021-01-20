import React from 'react';

const SideInput = (props) => {
  return (
    <div>
      <br />
      <label htmlFor={'side' + props.side}>Side {props.side} length: </label>
      <input
        style={{ width: '20vw' }}
        type='number'
        placeholder='Numbers only (natural, or decimals)'
        id={'side' + props.side}
        name={'side' + props.side}
        onChange={props.onChange}
      />
      <br />
    </div>
  );
};

export default SideInput;
