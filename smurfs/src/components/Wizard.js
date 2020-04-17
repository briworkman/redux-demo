import React from 'react';

const Wizard = (props) => {
  return (
    <div>
      <h1>Name: {props.wizard.name}</h1>
      <h2>Age: {props.wizard.age}</h2>
    </div>
  );
};
export default Wizard;
