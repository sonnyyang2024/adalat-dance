import React from 'react';

// data
import dataByLanguage from './dataByLanguage';

// hooks
import useDataByLanguage from '../../../hooks/useDataByLanguage';

// style
import './ContactForm.scss';

const ContactForm = () => {
  const {
    title,
    name,
    email,
    phone,
    details,
    submit
  } = useDataByLanguage(dataByLanguage);

  return (
    <form className="contact-form">
      <div className="contact-form__container">
        <h1 className="contact-form__title">{title}</h1>
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
            <textarea className="contact__textarea" required></textarea>
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
