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
    en: 'Bellydance Classes',
    ch: '肚皮舞课程'
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
            en: 'Private Lessons',
            ch: '私人一对一课程'
          }),
          description: byLanguage({
            en: '$110 per hour. 5 - 7PM on Thursdays at 5365 Lane St., Burnaby. Fully booked until July 15th. Sign up for waitlist.',
            ch: '让Adalat设计专属于你的课程和编舞。'
          }),
          imageName: 'adalat-bellydance-pink.JPG',
          linkTo: '#contact-form'
        },
        {
          id: getUUID(),
          name: byLanguage({
            en: 'Uyghur Traditional Dance',
            ch: '维吾尔传统舞'
          }),
          description: byLanguage({
            en: 'Learn authentic Uyghur folk dance with Adalat. Not available at the moment.',
            ch: '跟着Adalat学习正宗的新疆维吾尔族舞蹈。暂未开班。'
          }),
          imageName: 'adalat-uyghur.jpg',
          linkTo: `/dance/${UYGHUR_ID}`
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
      en: 'Upcoming Public Shows',
      ch: '近期公开演出'
    }),
    subtitle: byLanguage({
      en: 'Adalat performs regularly at local venues like hookah lounges and restaurants. Here is her regular public shows schedule. ',
      ch: 'Adalat定期在水烟吧和餐厅等当地场所演出。以下为她的定期公开表演时间表。'
    }),
    showTableColumns: [
      {
        key: 'venueName',
        label: byLanguage({
          en: 'Venue',
          ch: '场所'
        }),
      },
      {
        key: 'time',
        label: byLanguage({
          en: 'Start Time',
          ch: '出场时间'
        }),
      },
      {
        key: 'day',
        label: byLanguage({
          en: 'Day',
          ch: '日期'
        }),
      },
      // {
      //   key: 'address',
      //   label: byLanguage({
      //     en: 'Address',
      //     ch: '地址'
      //   }),
      //   type: 'linkedAddress'
      // }
    ],
    showList: [
      {
        time: '8:00 PM',
        day: byLanguage({
          en: 'Every Friday',
          ch: '每周五'
        }),
        venueName: 'Cazba Restaurant, Vancouver',
        address: 'Downtown',
        venueLink: 'https://google.com'
      },
      {
        time: '8:45 PM',
        day: byLanguage({
          en: 'Every Friday',
          ch: '每周五'
        }),
        venueName: 'Afghan Horsemen Restaurant, Vancouver',
        address: 'Granville Street, Vancouver',
        venueLink: 'https://google.com'
      },
      {
        time: '10:00 PM',
        day: byLanguage({
          en: 'Every Friday',
          ch: '每周五'
        }),
        venueName: 'Saray Turkish Cousine, Vancouver',
        address: 'Vancouver',
        venueLink: 'https://google.com'
      },
      {
        time: '11:00 PM',
        day: byLanguage({
          en: 'Every Friday',
          ch: '每周五'
        }),
        venueName: 'Arwaz Hookah Lounge, Vancouver',
        address: 'Vancouver',
        venueLink: 'https://google.com'
      },
      {
        time: '8:00 PM',
        day: byLanguage({
          en: 'Every Saturday',
          ch: '每周六'
        }),
        venueName: 'Cazba Restaurant, North Vancouver',
        address: 'North Vancouver',
        venueLink: 'https://google.com'
      },
      {
        day: byLanguage({
          en: 'Every Saturday',
          ch: '每周六'
        }),
        time: '8:45 PM',
        venueName: 'Afghan Horsemen Restaurant, Vancouver',
        address: 'Granville Street, Vancouver',
      },
      {
        day: byLanguage({
          en: 'Every Saturday',
          ch: '每周六'
        }),
        time: '10:00 PM',
        venueName: 'Saray Turkish Cousine',
        address: 'Vancouver',
      },
      {
        day: byLanguage({
          en: 'Every Saturday',
          ch: '每周六'
        }),
        time: '11:00 PM',
        venueName: 'Paradiz Hookah Lounge, Port Moody',
        venueLink: 'https://goo.gl/maps/P3tNCCNtnLKEuQz16',
      }
    ],
    bottomNotes: byLanguage({
      en: 'Occassionally, Adalat also performs at other Metro Vancouver venues, such as Taverna Greka (New Westminster), Zeitoon Restaurant (Port Moody), and Minoas Greek Taverna (Burnaby).',
      ch: 'Adalat还常常在其他大温地区场所演出，比如Taverna Greka (New Westminster), Zeitoon Restaurant (Port Moody), 和 Minoas Greek Taverna (Burnaby)。'
    })
  }
};
