import React from 'react';
import { Link } from 'react-router-dom';

import './AboutPage.scss';

import { getImageUrl } from '../../../utility';
import { 
  BELLYDANCE_ID,
  UYGHUR_ID
} from '../../../constants.js'

const AboutPage = () => (
  <div className="page-content">
    <div className="container">
      <div className="about__banner">
        <div className="banner__image-wrapper">
          <img
            className="about__banner__image"
            src={getImageUrl('adalat-omar-sword.jpg')}
            alt="Adalat Omar Bellydance Sword"
            width="400"
            height="270"
          />
        </div>
        <div className="banner__context">
          <div>
            <h2 className="about-banner__title title">Adalat Omar</h2>
            <p className="subtitle">professional dance artist in Vancouver, Canada</p>
            <p>
              Adalat Omar is an award-winning professional dance artist, choreographer and dance instructor based in Vancouver Canada.
            </p>
            <p>
            She is internationally-known for her professional Uyghur Traditional Dance and Middle Eastern Oriental Dance. She is also well proficient in Bollywood, Uzbek, Tajik and Persian dance styles.
            </p>
          </div>
        </div>
      </div>

      <div className="about__banner">
        <div className="banner__image-wrapper">
          <img
            className="about__banner__image"
            src={getImageUrl('adalat-dance-petals.jpg')}
            alt="Adalat Omar Bellydance Sword"
            width="400"
            height="270"
          />
        </div>
        <div className="banner__context">
          <div>
            <h2 className="about-banner__title title">Passion for dance</h2>
            <p className="subtitle">always learning from the best teachers</p>
            <p>
              Adalat Omar has a professional dance degree. She graduated from the Xinjiang Uyghur Art Institute’s Dance Faculty. She received her early professional training for Oriental Belly Dance from Rahma Haddad (Vancouver).
            </p>
            <p>
              Over the years, she has continued to improve her skills from the world’s top Middle Eastern dancers and teachers like Randa Kamel (Egypt), Tito Seif (Egypt), Mohamed Shahin (Egypt / USA), Mohamed Salah (Egypt), Sema Yildiz (Turkey), Ragaey Hussein (Egypt) and many more.
            </p>
          </div>
        </div>
      </div>

      <div className="about__banner">
        <div className="banner__image-wrapper">
          <img
            className="about__banner__image"
            src={getImageUrl('adalat-dark.jpg')}
            alt="Adalat Omar Bellydance Vancouver, dark dress"
            width="400"
            height="270"
          />
        </div>
        <div className="banner__context">
          <div>
            <h2 className="about-banner__title title">Performances</h2>
            <p className="subtitle">events, festivals, theatre productions</p>
            <p>
              Adalat Omar has been performing mainly in the Greater Vancouver area. The venues include Arabic, Greek, Persian, Turkish, Mediterranean restaurants, weddings, events, festivals and theatre productions.
            </p>    
            <p>
              Locally, Adalat Omar regularly performs at the Afghan Horseman Restaurant, Paradiz Teahouse & Hookah Lounge, Cazba Restaurant, Saray Turkish Restaurant, Taverna Greka, Zeitoon Restaurant and Arwaz Hookah Lounge. She also regularly performs at weddings, private party and corporate events.
            </p>
          </div>
        </div>
      </div>

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
    </div>
  </div>
);

export default AboutPage;
