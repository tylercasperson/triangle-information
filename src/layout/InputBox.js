import React from 'react';

const SideInput = (props) => {
  return (
    <div>
      <br />
      <label htmlFor={props.inputType}>{props.inputLabel}: </label>
      <input
        style={{ width: '20vw' }}
        type='number'
        placeholder={props.placeholder}
        // 'Numbers only (natural, or decimals)'
        id={props.inputType}
        name={props.inputType}
        onChange={props.onChange}
      />
      <br />
    </div>
  );
};

export default SideInput;
