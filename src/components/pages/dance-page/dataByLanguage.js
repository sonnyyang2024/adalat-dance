import { byLanguage, getUUID } from '../../../utility';
import { BOLLYWOOD_ID, BELLYDANCE_ID, UYGHUR_ID } from '../../../constants';

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
    })
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
    imageNames: [
      'adalat-studio-bellydance.jpg',
      'blue.jpg',
      'ada-white.jpg'
    ],
    courses: [
      {
        id: getUUID(),
        name: byLanguage({
          en: 'Intermediate Adult Richmond',
          ch: '列治文成人中级班'
        }),
        location: '1234 Alpha St',
        time: '9pm',
        date: '2019/10/24'
      }
    ],
    coursesFor: byLanguage({
      en: 'Bellydance Classes',
      ch: '肚皮舞课程'
    })
  },
  [UYGHUR_ID]: {
    title: byLanguage({
      en: 'Uyghur Traditional Dance',
      ch: '维吾尔传统舞蹈'
    }),
    description: byLanguage({
      en: 'Just like its people, Uyghur dance is graceful yet cheerful. It is weaved with cultures from along the silk road, yet preserves its unique heritage. It is usually performed with Uyghur singing and musical accompaniment.',
      ch: '维吾尔传统舞蹈，就和它的人民一样，既优美又令人欢快。它由丝绸之路上多国文化细细织成，又保持了自己独特的魅力。维吾尔舞蹈演出通常伴随着维吾尔歌曲和乐器。'
    }),
    button: byLanguage({
      en: 'Learn Uyghur Dance',
      ch: '学习维吾尔舞'
    }),
    imageNames: [
      'adalat-uyghur.jpg'
    ],
    courses: [
      {
        id: getUUID(),
        name: byLanguage({
          en: 'Intermediate Adult Richmond',
          ch: '列治文成人中级班'
        }),
        location: '1234 Alpha St',
        time: '7pm - 8:30pm',
        date: '2019/10/24'
      },
      {
        id: getUUID(),
        name: byLanguage({
          en: 'Intermediate Kids Burnaby',
          ch: '本拿比儿童中级班'
        }),
        location: '1234 Alpha St',
        time: '7pm - 8:30pm',
        date: '2019/10/27'
      }
    ],
    coursesFor: byLanguage({
      en: 'Classes for Uyghur Dance',
      ch: '维吾尔舞蹈课程'
    })
  }
};
