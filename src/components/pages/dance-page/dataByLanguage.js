import { byLanguage, getUUID } from '../../../utility';
import { BOLLYWOOD_ID, BELLYDANCE_ID } from '../../../constants';

export default {
  [BOLLYWOOD_ID]: {
    title: byLanguage({
      en: 'Bollywood Dance',
      ch: '宝莱坞舞蹈'
    }),
    description: byLanguage({
      en: 'Originated in India.',
      ch: '来自古老的印度。'
    }),
    button: byLanguage({
      en: 'Learn Bollywood',
      ch: '学习宝莱坞舞蹈'
    }),
    courses: [
      {
        id: getUUID(),
        name: byLanguage({
          en: 'Intermediate Adult Richmond',
          ch: '列治文成人中级班'
        }),
        location: '1234 Alpha St',
        time: '9pm'
      }
    ]
  },
  [BELLYDANCE_ID]: {
    title: byLanguage({
      en: 'Middle Eastern Bellydance',
      ch: '中东肚皮舞'
    }),
    description: byLanguage({
      en: 'Originated in the Middle East.',
      ch: '来自古老的中东。'
    }),
    button: byLanguage({
      en: 'Learn Bellydance',
      ch: '学习肚皮舞'
    }),
    courses: [
      {
        id: getUUID(),
        name: byLanguage({
          en: 'Intermediate Adult Richmond',
          ch: '列治文成人中级班'
        }),
        location: '1234 Alpha St',
        time: '9pm'
      }
    ]
  }
};
