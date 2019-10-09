import React from 'react';
import Button from './common/Button';

import './Footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="footer__column">
        <h2>Contact Ada for your next event or class.</h2>
        <Button text="Contact Adalat" />
      </div>
      <div className="footer__column">
        <h3>Contact Ada</h3>
        <p>Phone: 604-123-4567</p>
        <h3>Leana (Assistant)</h3>
        <p>Phone: 604-123-4567</p>
        <p>English, Mandarin, Cantonese</p>
      </div>
      <div className="footer__column">
        <h3>Social Media</h3>
        <p>Facebook</p>
        <p>Instagram</p>
        <p>Youtube</p>
      </div>
    </div>
  </div>
);

export default Footer;
