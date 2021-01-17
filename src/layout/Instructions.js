import React from 'react';

const Instructions = () => {
  return (
    <div
      style={{
        height: '5vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '40vw',
          textAlign: 'center',
        }}
      >
        Enter a number (natural or decimal) for each side. As soon as all three
        fields have valid data in them, calculations will run to let you know
        information about the triangle.
      </div>
    </div>
  );
};

export default Instructions;
