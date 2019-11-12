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
    submit
  } = useDataByLanguage(dataByLanguage);

  const handleSubmit = (e) => {
    e.persist();
    e.preventDefault();

    setSubmitState(submitStates.submitting);
    
    const form = e.target;
    const formData = new FormData(form);

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      details: formData.get('details'),
      _gotcha: formData.get('city'),
      _replyto: formData.get('email'),
      _subject: `Website Inquiry from ${formData.get('name')}`
    };

    axios.post('https://formspree.io/mbjjoweo', data)
      .then(() => {

        setSubmitState(submitStates.submissionSuccess);
      })
      .catch((error) => {
        setSubmitState(submitStates.submissionFailure);
      });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        style={{display: 'none'}}
        name='city'
      />
      <div className="contact-form__container">
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
          <input
            className="contact-form__button button"
            type="submit"
            value={submit}
          />
        </div>
      </div>
    </form>
  )
}

export default ContactForm;
