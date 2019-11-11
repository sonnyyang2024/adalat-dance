import React from 'react';
import './ContactForm.scss';

const ContactForm = () => {

  return (
    <form className="contact-form">
      <div className="contact-form__container">
        <h1 className="contact-form__title">Inquiries?</h1>
        <p className="contact-form__subtitle">ask us here</p>

        <div className="columns">
          <div className="column field half-width">
            <label>Name</label>
            <input type="text" name="name" />
          </div>
          <div className="column field half-width">
            <label>Email</label>
            <input type="email" name="email" />
          </div>
        </div>
        <div className="field">
            <label>Details of my inquiry</label>
            <textarea className="contact__textarea"></textarea>
          </div>
        <div className="contact-form__button-wrapper">
          <input
            className="contact-form__button button"
            type="submit"
            value="Submit Inquiry" 
          />
        </div>
      </div>
    </form>
  )
}

export default ContactForm;
