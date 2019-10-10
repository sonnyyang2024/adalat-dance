import { byLanguage, getUUID } from '../../../utility';

export default {
  ctaMessage: byLanguage({
    en: 'Contact Ada for your next event or class.',
    ch: '联系Ada来预定活动或课程。'
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
    en: 'Call us',
    ch: '请致电我们'
  }),
  contacts: [
    {
      id: getUUID(),
      name: 'Ada',
      phoneNumber: '604-123-4567'
    },
    {
      id: getUUID(),
      name: 'Leana',
      phoneNumber: '604-782-6544',
      notes: 'English, Mandarin, Cantonese'
    }
  ],
  socialMedia: {
    title: byLanguage({
      en: 'Social Media',
      ch: '社交媒体'
    }),
    list: [
      {
        id: getUUID(),
        name: 'Facebook',
        linkTo: 'https://facebook.com/adaladance'
      },
      {
        id: getUUID(),
        name: 'Instagram',
        linkTo: 'https://instagram.com/adaladance'
      },
      {
        id: getUUID(),
        name: 'Youtube',
        linkTo: 'https://youtube.com/adaladance'
      }
    ]
  }
};
