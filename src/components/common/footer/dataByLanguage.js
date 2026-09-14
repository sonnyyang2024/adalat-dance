/* eslint-disable max-len */
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
    en: 'Contact Me',
    ch: '联系我'
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
        // 🛠️ 已经完美更新为 2026 最新 Instagram 链接
        linkTo: 'https://www.instagram.com/adalat_dance_academy/'
      },
      {
        id: getUUID(),
        name: 'Youtube',
        linkTo: 'https://www.youtube.com/user/adalatdance'
      }
    ]
  }
};
