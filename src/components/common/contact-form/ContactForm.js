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

  const {
    name,
    email,
    phone,
    details,
    interest,
    interestDefault,
    interests,
    submit
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

    axios.post('https://formspree.io/mbjjoweo', data)
      .then(() => {
        setSubmitState(submitStates.submissionSuccess);
        setTimeout(() => {
          setSubmitState(submitStates.notSubmitted);
        }, 3000);
      })
      .catch((error) => {
        setSubmitState(submitStates.submissionFailure);
      });
  };

  return (
    <div className="contact-form">
      {
        (
          <form onSubmit={handleSubmit}>
            <input
              style={{ display: 'none' }}
              name='city'
            />
            <div className="contact-form__container">
              <div className="field">
                <label htmlFor="interest">{interest} *</label>
                <select name="interest" required>
                  <option
                    value=''
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
              <div className="column field half-width">
                <label>{name} *</label>
                <input type="text" name="name" required />
              </div>
              <div className="columns">
                <div className="column field half-width">
                  <label>{email} *</label>
                  <input type="email" name="email" required />
                </div>
                <div className="column field half-width">
                  <label>{phone}</label>
                  <input type="tel" name="phone" />
                </div>
              </div>
              <div className="field">
                <label>{details} *</label>
                <textarea className="contact__textarea" required name="details"></textarea>
              </div>
              <div className="contact-form__button-wrapper">
                {
                  submitState === submitStates.notSubmitted && (
                    <button
                      className="contact-form__button button"
                      type="submit"
                    >
                      <span className="button__text">{submit}</span>
                    </button>
                )}
                {
                  submitState === submitStates.submitting && (
                    <button
                      className="contact-form__button button--loading"
                    >
                      <div className="lds-heart"><div></div></div>
                      <span className="button__text">submitting</span>
                    </button>
                )}
                {
                  submitState === submitStates.submissionSuccess && (
                    <button
                      className="contact-form__button button--disabled"
                    >
                      <span className="button__text">submitted!</span>
                    </button>
                )}
                {
                  submitState === submitStates.submissionFailure && (
                    <>
                      <button
                        className="contact-form__button button--disabled"
                      >
                        <span className="button__text">submission failed</span>
                      </button>
                      <p>Please try again later.</p>
                    </>
                )}
              </div>
            </div>
          </form>
        )}
    </div>
  );
};

export default ContactForm;
