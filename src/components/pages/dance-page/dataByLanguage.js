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
    video: 'bellydance.mp4',
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
          en: 'Basic Techniques & Combos',
          ch: '基础技巧组合'
        }),
        address: '4351 No. 3 Rd, Richmond, BC',
        fullAddress: '4351 No. 3 Rd, Richmond, BC',
        time: '6:00 PM – 7:30 PM',
        date: byLanguage({
          en: 'Mondays\nSep 8 – Nov 24',
          ch: '周一\n9月8日 – 11月24日'
        }),
        contactNames: [
          'danya',
          'adalat_omar',
        ],
        price: byLanguage({
          en: (
            <Fragment>
              <p> $308 per course (11 sessions)</p>
              <p> Drop-in $38</p>
            </Fragment>
          ),
          ch: (
            <Fragment>
              <p> $308 整个课程 (11节课)</p>
              <p> 单次课 $38</p>
            </Fragment>
          )
        })
      },
      {
        id: getUUID(),
        name: byLanguage({
          en: 'Choreography',
          ch: '编舞课'
        }),
        address: '4351 No. 3 Rd, Richmond, BC',
        fullAddress: '4351 No. 3 Rd, Richmond, BC',
        time: '7:45 PM – 9:15 PM',
        date: byLanguage({
          en: 'Mondays\nSep 8 – Nov 24',
          ch: '周一\n9月8日 – 11月24日'
        }),
        contactNames: [
          'danya',
          'adalat_omar',
        ],
        price: byLanguage({
          en: (
            <Fragment>
              <p> $308 per course (11 sessions)</p>
              <p> Drop-in $38</p>
            </Fragment>
          ),
          ch: (
            <Fragment>
              <p> $308 整个课程 (11节课)</p>
              <p> 单次课 $38</p>
            </Fragment>
          )
        })
      },
      {
        id: getUUID(),
        name: byLanguage({
          en: 'Beginner Belly Dance',
          ch: '肚皮舞初级班'
        }),
        address: '200 - 4789 Kingsway, Burnaby, BC',
        fullAddress: '200 - 4789 Kingsway, Burnaby, BC',
        time: '7:30 PM – 9:00 PM',
        date: byLanguage({
          en: 'Tuesdays\nSept 9 - Nov 25',
          ch: '周二\n9月9日 - 11月25日'
        }),
        contactNames: [
          'danya',
          'adalat_omar',
        ],
        price: byLanguage({
          en: (
            <Fragment>
              <p> $308 per course (11 sessions)</p>
              <p> Drop-in $38</p>
            </Fragment>
          ),
          ch: (
            <Fragment>
              <p> $308 整个课程 (11节课)</p>
              <p> 单次课 $38</p>
            </Fragment>
          )
        })
      },
      {
        id: getUUID(),
        name: byLanguage({
          en: 'Performing Arts Class (Audition required)',
          ch: '表演艺术班 (需试镜)'
        }),
        address: '4351 No. 3 Rd, Richmond, BC',
        fullAddress: '4351 No. 3 Rd, Richmond, BC',
        time: '3:30 PM - 5:30 PM',
        date: byLanguage({
          en: 'Sundays',
          ch: '周日'
        }),
        contactNames: [
          'danya',
          'adalat_omar',
        ],
        price: byLanguage({
          en: (
            <Fragment>
              <p>Contact for pricing</p>
            </Fragment>
          ),
          ch: (
            <Fragment>
              <p>联系了解价格</p>
            </Fragment>
          )
        })
      },
    ],
    coursesFor: byLanguage({
      en: 'Bellydance Group Classes',
      ch: '肚皮舞团体课'
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
    video: 'uyghur.mp4',
    button: byLanguage({
      en: 'Learn Uyghur Dance',
      ch: '学习维吾尔舞'
    }),
    coursesNotes: byLanguage({
      en: 'All classes are cancelled on statutory holidays. Please double check with class contact before joining a new class.',
      ch: '加拿大法定节假日没有课程。请与课程联系确认后再加入新的课程。'
    }),
    courses: [
      {
        id: getUUID(),
        name: byLanguage({
          en: 'Uyghur Dance',
          ch: '维吾尔舞'
        }),
        address: '5451 Minoru Blvd, Richmond, BC',
        fullAddress: '5451 Minoru Blvd, Richmond, BC',
        time: '7:00 PM – 8:30 PM',
        date: byLanguage({
          en: 'Wednesdays\nSep 10 – Nov 19',
          ch: '周三\n9月10日 – 11月19日'
        }),
        contactNames: [
          'danya',
          'adalat_omar',
        ],
        price: byLanguage({
          en: (
            <Fragment>
              <p> $308 per course (11 sessions)</p>
              <p> Drop-in $38</p>
            </Fragment>
          ),
          ch: (
            <Fragment>
              <p> $308 整个课程 (11节课)</p>
              <p> 单次课 $38</p>
            </Fragment>
          )
        })
      },
    ],
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
    en: "Thursdays only at Burnaby Private Studio. One-on-one: $110 per session. Package price available.",
    ch: '私人课程 – 仅周四在Burnaby私人工作室。 一对一: $110 每节课。套餐价格可咨询。'
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
