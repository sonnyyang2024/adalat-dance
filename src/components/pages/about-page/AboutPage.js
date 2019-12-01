import React from 'react';

import './AboutPage.scss';

import { getImageUrl } from '../../../utility';

const AboutPage = () => (
  <div className="page-content">
    <div className="about__banner about__banner--pink">
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
            Adalat Omar is an award-winning professional dance artist, choreographer and dance instructor based in Vancouver Canada. She is internationally-known for her professional Uyghur Traditional Dance and Middle Eastern Oriental Dance. She is also well proficient in Bollywood, Uzbek, Tajik and Persian dance styles.  
          </p>
        </div>
      </div>
    </div>

    <div className="about__banner about__banner--pink">
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
            Adalat Omar has a professional dance degree. She graduated from the Xinjiang Uyghur Art Institute’s Dance Faculty. She received her early professional training for Oriental Belly Dance from Rahma Haddad (Vancouver). Over the years, she has continued to improve her skills from the world’s top Middle Eastern dancers and teachers like Randa Kamel (Egypt), Tito Seif (Egypt), Mohamed Shahin (Egypt / USA), Mohamed Salah (Egypt), Sema Yildiz (Turkey), Ragaey Hussein (Egypt) and many more.
          </p>
        </div>
      </div>
    </div>

    <div className="about__banner about__banner--pink">
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
            Adalat Omar has a professional dance degree. She graduated from the Xinjiang Uyghur Art Institute’s Dance Faculty. She received her early professional training for Oriental Belly Dance from Rahma Haddad (Vancouver). Over the years, she has continued to improve her skills from the world’s top Middle Eastern dancers and teachers like Randa Kamel (Egypt), Tito Seif (Egypt), Mohamed Shahin (Egypt / USA), Mohamed Salah (Egypt), Sema Yildiz (Turkey), Ragaey Hussein (Egypt) and many more.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
