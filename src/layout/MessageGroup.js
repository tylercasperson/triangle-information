import React from 'react';

const MessageGroup = (props) => {
  return (
    <div>
      <br />
      {props.message}
      <br />
      <br />
      <div>{props.sideA}</div>
      <div>{props.sideB}</div>
      <div>{props.sideC}</div>
      <div>
        {props.angleA}
        {'  '} {props.angleAtype}
      </div>
      <div>
        {props.angleB}
        {'  '} {props.angleBtype}
      </div>
      <div>
        {props.angleC}
        {'  '} {props.angleCtype}
      </div>
    </div>
  );
};

export default MessageGroup;
