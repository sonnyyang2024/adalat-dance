import React, { useState } from 'react';

import axios from 'axios';

// data
import dataByLanguage from './dataByLanguage';

// hooks
import useDataByLanguage from '../../../hooks/useDataByLanguage';

// style
import './ContactForm.scss';

const submitStates = {
  notSubmitted: 'not submitted',
  submitting: 'submitting',
  submissionSuccess: 'submission success',
  submissionFailure: 'submission failed'
};

const ContactForm = () => {
  const [submitState, setSubmitState] = useState(submitStates.notSubmitted);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    name,
    email,
    phone,
    details,
    interest,
    interestDefault,
    interests,
    submit,
    submitting,
    submitSuccess,
    submitSuccessMessage,
    submitFailure,
    submitFailureMessage
  } = useDataByLanguage(dataByLanguage);

  const handleSubmit = (e) => {
    e.persist();
    e.preventDefault();

    setSubmitState(submitStates.submitting);

    const form = e.target;
    const formData = [...new FormData(form)].reduce((formData, [key, value]) => ({
      ...formData,
      [key]: value
    }), {});

    const data = {
      interest: formData.interest,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      details: formData.details,
      _gotcha: formData.city,
      _replyto: formData.email,
      _subject: `Website Inquiry about ${formData.interest} from ${formData.name}`
    };

    axios.post('https://formspree.io/xwkvnawz', data)
      .then(() => {
        setSubmitState(submitStates.submissionSuccess);
        document.getElementById('form--contact').reset();
        setTimeout(() => {
          setSubmitState(submitStates.notSubmitted);
        }, 4000);
      })
      .catch((error) => {
        setSubmitState(submitStates.submissionFailure);
        setErrorMessage(error);
        setTimeout(() => {
          setSubmitState(submitStates.notSubmitted);
          // document.getElementById('form--contact').reset();
        }, 4000);
      });
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit} id="form--contact">
        <input
          style={{ display: 'none' }}
          name="city"
        />
        <div className="contact-form__container">
          <div className="field">
            <label htmlFor="interest">{interest} *</label>
            <select name="interest" required>
              <option
                value=""
              >
                {interestDefault}
              </option>
              {
                interests.map(interest => (
                  <option
                    value={interest}
                    key={interest}
                  >
                    {interest}
                  </option>
                ))
              }
            </select>
          </div>
          <div className="column field half-width field--float">
            <label>{name} *</label>
            <input type="text" name="name" placeholder={name + ' *'} required />
          </div>
          <div className="columns">
            <div className="column field half-width field--float">
              <label>{email} *</label>
              <input type="email" name="email" placeholder={email + ' *'} required />
            </div>
            <div className="column field half-width field--float">
              <label>{phone}</label>
              <input type="tel" name="phone" placeholder={phone} />
            </div>
          </div>
          <div className="field field--float">
            <label>{details} *</label>
            <textarea
              className="contact__textarea"
              name="details"
              placeholder={details + ' *'}
              required
            />
          </div>
          
            {
              submitState === submitStates.notSubmitted && (
              <div className="contact-form__button-wrapper">
                <button
                  className="contact-form__button button"
                  type="submit"
                >
                  <span className="button__text">{submit}</span>
                </button>
              </div>
            )}
            {
              submitState === submitStates.submitting && (
                <button
                  className="contact-form__button button--loading"
                >
                  <div className="lds-heart"><div></div></div>
                  <span className="button__text">{submitting}</span>
                </button>
            )}
            {
              submitState === submitStates.submissionSuccess && (
                <div className="contact-form__button-wrapper">
                  <button
                    className="contact-form__button button--disabled"
                  >
                    <span className="button__text">{submitSuccess}</span>
                  </button>
                  <p>{submitSuccessMessage}</p>
                </div>
            )}
          {
            submitState === submitStates.submissionFailure && (
              <div className="contact-form__button-wrapper">
                <button
                  className="contact-form__button button--disabled"
                >
                  <span className="button__text">{submitFailure}</span>
                </button>
                <p>{submitFailureMessage}</p>
                <p className="erorr">{errorMessage.toString()}</p>
              </div>
          )}
          </div>
      </form>
    </div>
  );
};

export default ContactForm;
