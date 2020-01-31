import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

import './AboutPage.scss';

import { getImageUrl } from '../../../utility';

// hooks
import useDataByLanguage from '../../../hooks/useDataByLanguage';

// data
import dataByLanguage from './dataByLanguage';

const AboutPage = () => {
  const data = useDataByLanguage(dataByLanguage);
  const { sections } = data;

  const getDelay = index => {
    if (index > 0 && index <= 3) {
      return index * 400
    }

    return 0
  }

  return (
    <div className="page-content about">
      <div className="container">
        {
          sections.map((section, index) => (
            <div className="about__banner" key={section.id}>
              <Fade delay={getDelay(index)}>
                <div className="banner__image-wrapper">
                  <img
                    className="about__banner__image"
                    src={getImageUrl(section.imageSrc)}
                    alt={`Adalat Omar Vancouver Bellydance ${section.title}`}
                    width="400"
                    height="270"
                  />
                </div>
              </Fade>

              <Fade delay={getDelay(index) + 100} duration={1300}>
                <div className="banner__context">
                  <div>
                    <h2 className="about-banner__title title">{section.title}</h2>
                    <p className="subtitle">{section.subtitle}</p>
                    {section.description}

                    { section.buttons && section.buttons.map(button => (
                      <Link
                        className="button"
                        to={button.link}
                      >
                        <span className="button__text">
                          {button.text}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
                </Fade>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default AboutPage;
