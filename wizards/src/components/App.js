import React, { useState } from 'react';
import './App.css';
import WizardPeople from './WizardPeople';
import { addWizard } from '../actions';
import { connect } from 'react-redux';

function App(props) {
  const [fields, setFields] = useState({
    name: '',
    age: '',
  });

  const handleChange = (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fields);
    props.addWizard(fields);
    setFields({
      name: '',
      age: '',
    });
  };

  return (
    <div className='App'>
      <h2>Welcome to Hogwarts!</h2>
      <p>Meet some of our wizards!</p>
      <form>
        <label>
          Add Wizards to Hogwarts:
          <input
            name='name'
            onChange={handleChange}
            type='text'
            value={fields.name}
            placeholder='Name'
          />
          <input
            name='age'
            onChange={handleChange}
            type='text'
            value={fields.age}
            placeholder='Age'
          />
        </label>
        <button type='submit' onClick={handleSubmit}>
          Add!
        </button>
      </form>
      <WizardPeople />
    </div>
  );
}
export default connect(null, { addWizard })(App);
