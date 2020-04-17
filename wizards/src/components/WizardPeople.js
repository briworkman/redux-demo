import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Wizard from './Wizard';
import { fetchWizards } from '../actions';

const WizardPeople = (props) => {
  useEffect(() => {
    props.fetchWizards();
  }, []);
  if (props.isFetching) {
    return <h2>Loading Wizards... </h2>;
  }
  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.Wizards.map((wizard) => (
        <Wizard key={wizard.id} wizard={wizard} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Wizards: state.Wizards,
    isFetching: state.isFetching,
    error: state.error,
  };
};
export default connect(mapStateToProps, { fetchWizards })(WizardPeople);
