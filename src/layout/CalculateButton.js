import React from 'react';

const CalculateButton = (props) => {
  return (
    <button
      style={{ height: '5vh', width: '8vw', fontSize: '2vh' }}
      onClick={props.onClick}
    >
      Calculate
    </button>
  );
};

export default CalculateButton;
