import React from 'react';
import Fade from 'react-reveal/Fade';

import PropTypes from 'prop-types';

// utility
import { getImageUrl } from '../../../../utility';

// components
import Button from '../../../common/button/Button';

// styles
import './Hero.scss';

const Hero = ({
  title,
  subtitle,
  information,
  callToAction,
  imageName
}) => {
  const scrollToSchedule = () => {
    const scheduleElement = document.getElementById('schedule');
    if (scheduleElement) {
      scheduleElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact-form');
    if (contactElement) {
      contactElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
  <div className="hero">
    <div className="container">
      <div className="hero__left">
        <div className="hero__left__content">
          <Fade bottom duration={1200}>
            <h1 className="hero__title">{title}</h1>
          </Fade>

          <Fade bottom delay={500} duration={1500}>
            <p className="hero__subtitle">{subtitle}</p>
          </Fade>

          <Fade bottom delay={600} duration={1600}>
            {
              information && (
                <div className="hero__description">
                  {information}
                </div>
              )
            }
          </Fade>

          <Fade bottom delay={900} duration={1600}>
            {
              callToAction && (
                <div className="hero__button-wrapper">
                  {Array.isArray(callToAction) ? (
                    callToAction.map((action, index) => {
                      if (action.text === 'Class Schedule' || action.text === '课程表') {
                        return (
                          <button 
                            key={index}
                            className="button"
                            onClick={scrollToSchedule}
                          >
                            {action.text}
                          </button>
                        );
                      } else if (action.text === 'Contact' || action.text === '联系我们') {
                        return (
                          <button 
                            key={index}
                            className="button"
                            onClick={scrollToContact}
                          >
                            {action.text}
                          </button>
                        );
                      } else {
                        return <Button key={index} text={action.text} link={action.link} />;
                      }
                    })
                  ) : (
                    <Button text={callToAction} link="/dance/bellydance#schedule" />
                  )}
                </div>
              )
            }
          </Fade>
        </div>
      </div>
      <div className="hero__right">
        <Fade right duration={1800}>
          <img
            className="hero__image"
            src={getImageUrl(imageName)}
            alt={imageName}
            width="500"
            height="600"
          />
        </Fade>
      </div>
    </div>
  </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  information: PropTypes.element,
  callToAction: PropTypes.string,
  imageName: PropTypes.string.isRequired
};

Hero.defaultProps = {
  information: null,
  callToAction: null
};

export default Hero;
