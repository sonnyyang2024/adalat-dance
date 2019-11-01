import { byLanguage, getUUID } from '../../../utility';

export default {
  ctaMessage: byLanguage({
    en: 'Contact Adalat for your next event or class.',
    ch: '联系Adalat来预定活动或课程。'
  }),
  ctaButton: byLanguage({
    en: 'Contact Adalat',
    ch: '联系Adalat'
  }),
  contact: byLanguage({
    en: 'Phone',
    ch: '电话'
  }),
  contactMessage: byLanguage({
    en: 'Contact Us',
    ch: '联系我们'
  }),
  socialMedia: {
    title: byLanguage({
      en: 'Social Media',
      ch: '社交媒体'
    }),
    list: [
      {
        id: getUUID(),
        name: 'Facebook',
        linkTo: 'https://www.facebook.com/adalatdance'
      },
      {
        id: getUUID(),
        name: 'Instagram',
        linkTo: 'https://instagram.com/adalat_dance'
      },
      {
        id: getUUID(),
        name: 'Youtube',
        linkTo: 'https://www.youtube.com/user/adalatdance'
      }
    ]
  }
};
