import React from 'react';
import { Link } from 'react-router-dom';

import './AboutPage.scss';

import { getImageUrl } from '../../../utility';
import {
  BELLYDANCE_ID,
  UYGHUR_ID
} from '../../../constants';

// hooks
import useDataByLanguage from '../../../hooks/useDataByLanguage';

// data
import dataByLanguage from './dataByLanguage';

const AboutPage = () => {
  const data = useDataByLanguage(dataByLanguage);
  const { sections } = data;

  return (
    <div className="page-content">
      <div className="container">
        {
          sections.map((section) => (
            <div className="about__banner" key={section.id}>
              <div className="banner__image-wrapper">
                <img
                  className="about__banner__image"
                  src={getImageUrl(section.imageSrc)}
                  alt={`Adalat Omar Vancouver Bellydance ${section.title}`}
                  width="400"
                  height="270"
                />
              </div>
              <div className="banner__context">
                <div>
                  <h2 className="about-banner__title title">{section.title}</h2>
                  <p className="subtitle">{section.subtitle}</p>
                  {section.description}
                </div>
              </div>
            </div>
          ))
        }

        {/* NEED TO TRANSLATE */}
        <div className="about__banner">
          <div className="banner__image-wrapper">
            <img
              className="about__banner__image"
              src={getImageUrl('adalat-wings-purple.jpg')}
              alt="Adalat Omar Bellydance Vancouver, candles, events"
              width="400"
              height="270"
            />
          </div>
          <div className="banner__context">
            <div>
              <h2 className="about-banner__title title">Productions</h2>
              <p className="subtitle">movies, tv, and theatre productions</p>
              <p>
                Adalat Omar is one of the main dancers in popular TV series “Shimmy’’. She has also appeared on TV series “The Real Housewives of Vancouver” and movie “Kayan” and she has performed as a featured artist with dance and music troupe around the world for many events and festivals.
              </p>
              <p>
              She is currently the official dance choreographer for 2019 and 2020 Beauties of 5 Continents International Pageant.
              </p>
            </div>
          </div>
        </div>

        <div className="about__banner">
          <div className="banner__image-wrapper">
            <img
              className="about__banner__image"
              src={getImageUrl('adalat-dance-company.jpg')}
              alt="Adalat Omar Bellydance Vancouver, Adalat Dance Company"
              width="400"
              height="270"
            />
          </div>
          <div className="banner__context">
            <div>
              <h2 className="about-banner__title title">Adalat Dance Company</h2>
              <p className="subtitle">group performance services</p>
              <p>
                Adalat Omar is a founding member of a professional Middle Eastern Oriental Dance and Uyghur Traditional Dance group - Adalat Dance Company. It performs for large events and festivals in Canada.         
              </p>
            </div>
          </div>
        </div>

        <div className="about__banner">
          <div className="banner__image-wrapper">
            <img
              className="about__banner__image"
              src={getImageUrl('adalat-omar-class.jpg')}
              alt="Adalat Omar Bellydance Vancouver, Adalat Dance Company, Bellydance class Vancouver"
              width="400"
              height="270"
            />
          </div>
          <div className="banner__context">
            <div>
              <h2 className="about-banner__title title">Dance Classes</h2>
              <p className="subtitle">group & private classes</p>
              <p>
                Adalat Omar teaches classes in Middle Eastern Oriental Dance and Uyghur Traditional Folk Dance for many years. Currently, her advanced class students proudly perform  groups or solo dance in many festivals and events as a part of Adalat Dance Company. They are booked for many upcoming events.
              </p>
              <p> Her Uyghur kids class also successfully performed Uyghur traditional folk dance at many festivals, such as Nowruz Festival, Canada Day Festival, Silk Road Festival, Turkic Festival, World Festival, and Fusion Festival.</p>
              <Link
                className="button"
                to={`/dance/${BELLYDANCE_ID}`}
              >
                <span className="button__text">
                  Learn Bellydance
                </span>
              </Link>

              <Link
                className="button"
                to={`/dance/${UYGHUR_ID}`}
              >
                <span className="button__text">
                  Learn Uyghur Dance
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* END OF NEED TO TRANSLATE */} 
      </div>
    </div>
  );
};

export default AboutPage;
