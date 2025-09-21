/* eslint-disable max-len */
import React, { Fragment } from 'react';
import {
  BELLYDANCE_ID,
  UYGHUR_ID
} from '../../../constants';

import { byLanguage, getUUID } from '../../../utility';

export default {
  title: 'Adalat Omar',
  subtitle: byLanguage({
    en: 'Professional dance artist based in Vancouver, Canada',
    ch: '加拿大温哥华 专业舞蹈艺术家'
  }),
  information: byLanguage({
    en: (
      <Fragment>
        <p>Performs, designs, and teaches Middle Eastern Bellydance, Traditional Uyghur Dance and else.</p>
      </Fragment>
    ),
    ch: (
      <Fragment>
        <p>中东肚皮舞、维吾尔舞、宝莱坞舞蹈编排、表演与培训。</p>
      </Fragment>
    )
  }),
  callToAction: byLanguage({
    en: [
      { text: 'Class Schedule', link: '#schedule' },
      { text: 'Contact', link: '#contact-form' }
    ],
    ch: [
      { text: '课程表', link: '#schedule' },
      { text: '联系我们', link: '#contact-form' }
    ]
  }),
  banners: [
    {
      title: byLanguage({
        en: 'Classes',
        ch: '课程'
      }),
      list: [
        {
          id: getUUID(),
          name: byLanguage({
            en: 'Bellydance',
            ch: '肚皮舞'
          }),
          description: byLanguage({
            en: 'Learn Oriental Bellydance with Adalat.',
            ch: '跟着Adalat学习东方肚皮舞。'
          }),
          imageName: 'adalat-students-bellydance.jpg',
          linkTo: `/dance/${BELLYDANCE_ID}`
        },
        {
          id: getUUID(),
          name: byLanguage({
            en: 'Uyghur Traditional Dance',
            ch: '维吾尔传统舞'
          }),
          description: byLanguage({
            en: 'Learn authentic Uyghur folk dance with Adalat.',
            ch: '跟着Adalat学习正宗的新疆维吾尔族舞蹈。'
          }),
          imageName: 'adalat-uyghur.jpg',
          linkTo: `/dance/${UYGHUR_ID}`
        },
        {
          id: getUUID(),
          name: byLanguage({
            en: 'Private Lessons',
            ch: '私人一对一课程'
          }),
          description: byLanguage({
            en: 'Thursdays only at Burnaby Private Studio. One-on-one: $110 per session. Package price available.',
            ch: '仅周四在Burnaby私人工作室, 一对一: $110 每节课。套餐价格可咨询。'
          }),
          imageName: 'adalat-bellydance-pink.JPG'
        }
      ]
    },
    {
      title: byLanguage({
        en: 'Services',
        ch: '服务'
      }),
      type: 'in-page',
      list: [
        {
          id: getUUID(),
          name: byLanguage({
            en: 'Festivals & Theatre Productions',
            ch: '节庆和剧场制作'
          }),
          description: byLanguage({
            en: 'Hire Adalat and Adalat Dance Company for your next tv show, movie, or festival production.',
            ch: '聘请Adalat和她的公司来创造你的下一个电视剧、电影或节庆表演制作。'
          }),
          imageName: 'bellydance-group.jpg',
          linkTo: '#contact-form'
        },
        {
          id: getUUID(),
          name: byLanguage({
            en: 'Parties and Events',
            ch: '聚会与活动'
          }),
          description: byLanguage({
            en: 'Hire Adalat for weddings, birthday parties, and other celebrations!',
            ch: '婚礼、生日派对、重大庆祝，让Adalat点亮你的派对，让你的来宾赞不绝口'
          }),
          imageName: 'adalat-candle-min.jpg',
          linkTo: '#contact-form'
        }
      ]
    },
    
  ],
  publicShows: {
    title: byLanguage({
      en: '✨ Adalat Dance Academy ✨ 2025 Fall Semester',
      ch: '✨ Adalat舞蹈学院 ✨ 2025秋季学期'
    }),
    subtitle: byLanguage({
      en: 'Registration is open now - Belly Dance & Uyghur Dance',
      ch: '现在开放注册 - 肚皮舞和维吾尔舞'
    }),
    showTableColumns: [
      {
        key: 'class',
        label: byLanguage({
          en: 'Class',
          ch: '课程'
        }),
      },
      {
        key: 'day',
        label: byLanguage({
          en: 'Day',
          ch: '日期'
        }),
      },
      {
        key: 'schedule',
        label: byLanguage({
          en: 'Schedule',
          ch: '时间安排'
        }),
      },
      {
        key: 'location',
        label: byLanguage({
          en: 'Location',
          ch: '地点'
        }),
      },
      {
        key: 'price',
        label: byLanguage({
          en: 'Price',
          ch: '价格'
        }),
      }
    ],
    showList: [
      {
        id: getUUID(),
        class: byLanguage({
          en: 'Basic Techniques & Combos',
          ch: '基础技巧组合'
        }),
        day: byLanguage({
          en: 'Mondays\nSep 8 – Nov 24',
          ch: '周一\n9月8日 – 11月24日'
        }),
        schedule: byLanguage({
          en: ' 6:00 PM – 7:30 PM',
          ch: ' 下午6:00 – 7:30'
        }),
        location: byLanguage({
          en: ' 4351 No. 3 Rd, Richmond, BC',
          ch: ' 4351 No. 3 Rd, Richmond, BC'
        }),
        price: byLanguage({
          en: ' $308 per course (11 sessions)',
          ch: ' $308 整个课程 (11节课)'
        })
      },
      {
        id: getUUID(),
        class: byLanguage({
          en: 'Choreography',
          ch: '编舞课'
        }),
        day: byLanguage({
          en: 'Mondays\nSep 8 – Nov 24',
          ch: '周一\n9月8日 – 11月24日'
        }),
        schedule: byLanguage({
          en: ' 7:45 PM – 9:15 PM',
          ch: ' 晚上7:45 – 9:15'
        }),
        location: byLanguage({
          en: ' 4351 No. 3 Rd, Richmond, BC',
          ch: ' 4351 No. 3 Rd, Richmond, BC'
        }),
        price: byLanguage({
          en: ' $308 per course (11 sessions)',
          ch: ' $308 整个课程 (11节课)'
        })
      },
      {
        id: getUUID(),
        class: byLanguage({
          en: 'Performing Arts Class (Audition required)',
          ch: '表演艺术班 (需试镜)'
        }),
        day: byLanguage({
          en: 'Sundays\n',
          ch: '周日\n'
        }),
        schedule: byLanguage({
          en: ' 3:30 PM – 5:30 PM',
          ch: ' 下午3:30 – 5:30'
        }),
        location: byLanguage({
          en: ' 4351 No. 3 Rd, Richmond, BC',
          ch: ' 4351 No. 3 Rd, Richmond, BC'
        }),
        price: byLanguage({
          en: 'Contact for pricing',
          ch: '联系了解价格'
        })
      },
      {
        id: getUUID(),
        class: byLanguage({
          en: 'Beginner Belly Dance',
          ch: '肚皮舞初级班'
        }),
        day: byLanguage({
          en: 'Tuesdays\nSept 9 - Nov 25',
          ch: '周二\n9月9日 - 11月25日'
        }),
        schedule: byLanguage({
          en: ' 7:30 PM – 9:00 PM',
          ch: ' 晚上7:30 – 9:00'
        }),
        location: byLanguage({
          en: ' 200 - 4789 Kingsway, Burnaby, BC',
          ch: ' 200 - 4789 Kingsway, Burnaby, BC'
        }),
        price: byLanguage({
          en: ' $308 per course (11 sessions)',
          ch: ' $308 整个课程 (11节课)'
        })
      },
      {
        id: getUUID(),
        class: byLanguage({
          en: 'Uyghur Dance',
          ch: '维吾尔舞'
        }),
        day: byLanguage({
          en: 'Wednesdays\nSep 10 – Nov 19',
          ch: '周三\n9月10日 – 11月19日'
        }),
        schedule: byLanguage({
          en: ' 7:00 PM – 8:30 PM',
          ch: ' 晚上7:00 – 8:30'
        }),
        location: byLanguage({
          en: ' 5451 Minoru Blvd, Richmond, BC',
          ch: ' 5451 Minoru Blvd, Richmond, BC'
        }),
        price: byLanguage({
          en: ' $308 per course (11 sessions)',
          ch: ' $308 整个课程 (11节课)'
        })
      },
      {
        id: getUUID(),
        class: byLanguage({
          en: 'Private Classes',
          ch: '私人课程'
        }),
        day: byLanguage({
          en: 'Thursdays',
          ch: '周四'
        }),
        schedule: byLanguage({
          en: 'One-on-one sessions',
          ch: '一对一课程'
        }),
        location: byLanguage({
          en: 'Burnaby Private Studio, BC',
          ch: '本拿比私人工作室, BC'
        }),
        price: byLanguage({
          en: ' $110 per session',
          ch: ' $110 每节课'
        })
      }
    ],
    bottomNotes: byLanguage({
      en: ' Drop-in $38 | 📞 Registration & Inquiries: 604-512-5617 | 📧 adalatdance@gmail.com',
      ch: ' 单次课 $38 | 📞 注册咨询: 604-512-5617 | 📧 adalatdance@gmail.com'
    })
  }
};
