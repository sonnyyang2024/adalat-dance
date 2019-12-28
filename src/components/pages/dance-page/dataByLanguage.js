import React, { Fragment } from 'react';

import { byLanguage, getUUID } from '../../../utility';
import { BOLLYWOOD_ID, BELLYDANCE_ID, UYGHUR_ID } from '../../../constants';

export default {
  [BOLLYWOOD_ID]: {
    title: byLanguage({
      en: 'Bollywood Dance',
      ch: '宝莱坞舞蹈'
    }),
    description: byLanguage({
      en: '',
      ch: ''
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
      },
      {
        id: getUUID(),
        name: 'adalat-omar-bollywood.jpg'
      }
    ],
  },
  [BELLYDANCE_ID]: {
    title: byLanguage({
      en: 'Middle Eastern Bellydance',
      ch: '中东肚皮舞'
    }),
    description: byLanguage({
      en: '',
      ch: ''
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
        name: 'adalat-dark.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-drum.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-omar-black-dress2.jpg'
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
        name: 'adalat-omar-dress-white-candle.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-omar-white-dress2.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-bellydance-pink.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-dance-company.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-omar-blue-bellydance.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-omar-blue-veil.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-omar-pattern-dress.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-omar-patter-dress.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-omar-pattern-dress-2.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-omar-pattern-dress3.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-omar-pink-dress.jpg'
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
          en: 'Beginner Class',
          ch: '初级班'
        }),
        description: '',
        location: "Dancin' Stars",
        address: '7757 Edmonds Street, Burnaby',
        fullAddress: "Dancin' Stars, 7757 Edmonds Street, Burnaby",
        time: '7:00-8:30PM',
        date: byLanguage({
          en: 'Every Thursday (Jan 16th to Feb 27)',
          ch: '每周四 （1月16日至2月27日）'
        }),
        contactNames: [
          'adalat_omar',
          'dancin_stars'
        ],
        price: byLanguage({
          en: (
            <Fragment>
              <strong>$140 / 7 classes <small>(full term)</small></strong>
              <p>$25 / drop-in</p>
            </Fragment>
          ),
          ch: (
            <Fragment>
              <strong>$140 / 7节课 (全期)</strong>
              <p>$25 / 单次课</p>
            </Fragment>
          )
        })
      },
      {
        id: getUUID(),
        name: byLanguage({
          en: 'Beginner Class',
          ch: '初级班'
        }),
        address: '250 - 12551 Vickers Way, Richmond',
        fullAddress: '250 - 12551 Vickers Way, Richmond',
        time: '7:00 - 8:30PM',
        date: byLanguage({
          en: 'Every Monday (Jan 6th - Feb 24th)',
          ch: '每周一 （1月6日至2月24日）'
        }),
        contactNames: [
          'adalat_omar',
          'leana_li'
        ],
        price: byLanguage({
          en: (
            <Fragment>
              <strong>$160 / 8 classes <small>(full term)</small></strong>
              <p>$25 / drop-in</p>
            </Fragment>
          ),
          ch: (
            <Fragment>
              <strong>$160 / 8节课 (全期)</strong>
              <p>$25 / 单次课</p>
            </Fragment>
          )
        })
      },
      {
        id: getUUID(),
        name: byLanguage({
          en: 'Intermediate Class',
          ch: '中级班'
        }),
        address: '250 - 12551 Vickers Way, Richmond',
        fullAddress: '250 - 12551 Vickers Way, Richmond',
        time: '7:00 - 8:30PM',
        date: byLanguage({
          en: 'Every Wednesday (Jan 8th - Mar 25)',
          ch: '每周三 （1月8日至3月25日）'
        }),
        contactNames: [
          'adalat_omar',
          'leana_li'
        ],
        price: byLanguage({
          en: (
            <Fragment>
              <strong>$240 / 12 classes <small>(full term)</small></strong>
              <p>$25 / drop-in</p>
            </Fragment>
          ),
          ch: (
            <Fragment>
              <strong>$240 / 12节课 (全期)</strong>
              <p>$25 / 单次课</p>
            </Fragment>
          )
        })
      }
    ],
    coursesFor: byLanguage({
      en: 'Bellydance Classes',
      ch: '肚皮舞课程'
    }),
    otherClassCta: byLanguage({
      en: 'Check Out Uyghur Dance Classes',
      ch: '查看维吾尔民族舞课程'
    }),
    otherClassCtaLink: '/dance/uyghur'
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
        name: 'adalat-uyghur-class.jpg'
      },
      {
        id: getUUID(),
        name: 'adalat-omar-uyghur-performance.jpg'
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
          en: 'All-Level Class',
          ch: '全等级班'
        }),
        location: "Dancin' Stars",
        address: '7757 Edmonds Street, Burnaby, BC',
        fullAddress: "Dancin' Stars, 7757 Edmonds Street, Burnaby",
        time: '4:30 - 6:00PM',
        date: byLanguage({
          en: 'Every Wednesday (Jan 8th - Mar 25th)',
          ch: '每周三 （1月8日至3月25日）'
        }),
        contactNames: [
          'adalat_omar',
          'dancin_stars'
        ],
        price: byLanguage({
          en: (
            <Fragment>
              <strong>$240 / 12 classes <small>(full term)</small></strong>
              <p>$25 / drop-in</p>
            </Fragment>
          ),
          ch: (
            <Fragment>
              <strong>$240/ 12节课 (全期)</strong>
              <p>$25 / 单次课</p>
            </Fragment>
          )
        })
      }
    ],
    coursesFor: byLanguage({
      en: 'Classes for Uyghur Dance',
      ch: '维吾尔舞蹈课程'
    }),
    coursesNotes: byLanguage({
      en: 'All classes are cancelled on statutory holidays. Please double check with class contact before joining a new class.',
      ch: '加拿大法定节假日没有课程。请与课程联系确认后再加入新的课程。'
    }),
    otherClassCta: byLanguage({
      en: 'Check Out Bellydance Classes',
      ch: '查看肚皮舞课程'
    }),
    otherClassCtaLink: '/dance/bellydance'
  },
  privateClassTitle: byLanguage({
    en: 'Private Classes',
    ch: '私人课程'
  }),
  contactCtaButton: byLanguage({
    en: 'Contact Adalat',
    ch: '联系Adalat'
  }),
  contactCtaMessage: byLanguage({
    en: "Can't find any class that suits your style or level? Ask Adalat about private classes.",
    ch: '找不到适合你的风格和等级的课程？向Adalat咨询一对一私人课程。'
  }),
  servicesTitle: byLanguage({
    en: 'Services',
    ch: '服务'
  }),
  servicesCtaButton: byLanguage({
    en: 'Book Adalat for Your Next Event',
    ch: '为你的下一个活动预定Adalat'
  }),
  servicesCtaButtonAbout: byLanguage({
    en: 'More About Adalat',
    ch: '更多关于Adalat'
  }),
  servicesSubtitle: byLanguage({
    en: 'events, festivals, theatre productions',
    ch: '活动、节日表演、电影艺术制作'
  }),
  servicesDescription: byLanguage({
    en: (
      <Fragment>
        <p>Adalat Omar has been performing mainly in the Greater Vancouver area. The venues include Arabic, Greek, Persian, Turkish, Mediterranean restaurants, weddings, events, festivals and theatre productions.</p>
        <p>She is one of the main dancers in popular TV series "Shimmy". She has also appeared on TV series “The Real Housewives of Vancouver” and movie “Kayan”. She has performed as a featured artist with dance and music troupe around the world for many events and festivals.</p>
      </Fragment>
    ),
    ch: (
      <Fragment>
        <p>
          Adalat Omar主要在大温哥华地区演出。 这些场所包括阿拉伯文，希腊文，波斯文，土耳其文，地中海餐馆，婚礼，活动，节日和戏剧作品。
        </p>
        <p>
          她是受欢迎的电视连续剧《Shimmy》的主要舞者之一。她还出演了电视连续剧《温哥华的真正的家庭主妇》和电影《Kayan》。她曾在世界各地的舞蹈和音乐团担任特色艺术家，参加过许多活动和节日。
        </p>
      </Fragment>
    )
  })
};
