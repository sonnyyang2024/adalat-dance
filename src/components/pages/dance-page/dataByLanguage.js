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
    }),
    imageNames: [
      {
        id: getUUID(),
        name: 'adalat-bollywood-pink.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-bollywood-1.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-bollywood-2.jpg'
      }
    ],
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
      {
        id: getUUID(),
        name: 'adalat-dance-petals.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-wings-purple.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-studio-bellydance.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-dark.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-drum.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-omar-sword.jpg'
      },
      {
        id: getUUID(),
        name: 'ada-white.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-candles-lg.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-bellydance-pink.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-dance-company.jpg'
      }
    ],
    coursesNotes: byLanguage({
      en: 'All classes are cancelled on statutory holidays. Please double check with class contact before joining a new class.',
      ch: '加拿大法定节假日没有课程。请与课程联系确认后再加入新的课程。'
    }),
    courses: [
      {
        id: getUUID(),
        name: byLanguage({
          en: 'Beginners Adult Class',
          ch: '成人初级班'
        }),
        description: '',
        location: "Dancin' Stars",
        address: '7757 Edmonds Street, Burnaby',
        fullAddress: "Dancin' Stars, 7757 Edmonds Street, Burnaby",
        time: byLanguage({
          en: 'Time TBA',
          ch: '时间待定'
        }),
        date: byLanguage({
          en: 'Every Monday',
          ch: '每周一'
        }),
        notes: byLanguage({
          en: "Please register at Dancin' Stars or contact Adalat.",
          ch: "请联系Dancin' Stars或Adalat注册课程。"
        }),
        contactNames: [
          'adalat_omar',
          'dancin_stars'
        ]
      },
      {
        id: getUUID(),
        name: byLanguage({
          en: 'All-Level Adult Class',
          ch: '全等级成人班'
        }),
        description: byLanguage({
          en: 'Learn new choreography while practicing techniques. ',
          ch: '在学习编舞的同时巩固基础动作。'
        }),
        address: '250 - 12551 Vickers Way, Richmond',
        fullAddress: '250 - 12551 Vickers Way, Richmond',
        time: '7:00 - 8:30PM',
        date: byLanguage({
          en: 'Every Wednesday',
          ch: '每周三'
        }),
        contactNames: [
          'adalat_omar',
          'leana_li'
        ]
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
      {
        id: getUUID(),
        name: 'adalat-uyghur-green.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-uyghur-class.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-uyghur-pink.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-uyghur.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-uyghur-red.jpg'
      }
    ],
    courses: [
      {
        id: getUUID(),
        name: byLanguage({
          en: 'All-Levels Kids Class',
          ch: '全等级儿童班'
        }),
        location: "Dancin' Stars",
        address: '7757 Edmonds Street, Burnaby, BC',
        fullAddress: "Dancin' Stars, 7757 Edmonds Street, Burnaby",
        time: '4:30 - 6:00PM',
        date: byLanguage({
          en: 'Every Wednesday',
          ch: '每周三'
        }),
        contactNames: [
          'adalat_omar',
          'dancin_stars'
        ]
      },
      {
        id: getUUID(),
        name: byLanguage({
          en: 'All-Levels Adult Class',
          ch: '全等级成人班'
        }),
        location: '',
        address: '250 - 12551 Vickers Way, Richmond',
        fullAddress: '250 - 12551 Vickers Way, Richmond',
        time: '7 - 8:30PM',
        date: byLanguage({
          en: 'Every Monday',
          ch: '每周一'
        }),
        contactNames: [
          'adalat_omar',
          'leana_li'
        ]
      }
    ],
    coursesFor: byLanguage({
      en: 'Classes for Uyghur Dance',
      ch: '维吾尔舞蹈课程'
    }),
    coursesNotes: byLanguage({
      en: 'All classes are cancelled on statutory holidays. Please double check with class contact before joining a new class.',
      ch: '加拿大法定节假日没有课程。请与课程联系确认后再加入新的课程。'
    })
  },
  contactCtaButton: byLanguage({
    en: 'Contact Adalat',
    ch: '联系Adalat'
  }),
  contactCtaMessage: byLanguage({
    en: "Can't find any class that suits your style or level? Ask Adalat about private classes.",
    ch: '找不到适合你的风格和等级的课程？向Adalat咨询一对一私人课程。'
  })
};
