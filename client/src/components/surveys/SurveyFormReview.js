import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import formFields from './formFields';
import * as actions from '../../actions';

const SurveyField = ({
  cancelSurveySubmit,
  formValues,
  sendSurvey,
  history,
}) => {
  function renderContent() {
    return formFields.map(({ name, label }) => {
      return (
        <div key={name}>
          <label>{label}</label>
          <div>{formValues[name]}</div>
        </div>
      );
    });
  }

  return (
    <div>
      <h5>Please Confirm Your Entries</h5>
      {renderContent()}
      <button
        onClick={() => cancelSurveySubmit()}
        className="yellow darken-3 white-text btn-flat"
      >
        Back
      </button>
      <button
        onClick={() => sendSurvey(formValues, history)}
        className="green btn-flat right white-text"
        type="submit"
      >
        Send Surveys
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyField));
