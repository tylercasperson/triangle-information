import React from 'react';

const SideInput = (props) => {
  return (
    <div>
      <label htmlFor={props.inputType}>{props.inputLabel}: </label>
      <input
        style={{ width: '8vw' }}
        type='number'
        placeholder={props.placeholder}
        // 'Numbers only (natural, or decimals)'
        value={props.value}
        id={props.inputType}
        name={props.inputType}
        onChange={props.onChange}
      />
    </div>
  );
};

export default SideInput;
