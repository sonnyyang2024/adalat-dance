/* eslint-disable max-len */

import React, { Fragment } from 'react';
import {
  BOLLYWOOD_ID,
  BELLYDANCE_ID,
  UYGHUR_ID
} from '../../../constants';

import { byLanguage, getUUID } from '../../../utility';

export default {
  title: 'Adalat Omar',
  information: byLanguage({
    en: (
      <Fragment>
        <p>A Bellydancer, Uyghur and Bollywood dance lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Nulla vestibulum velit nunc, sed ultrices ex faucibus sit amet.</p>
      </Fragment>
    ),
    ch: (
      <Fragment>
        <p>Adalat是一个专业肚皮舞、维吾尔舞、宝莱坞舞蹈艺术家。天地玄黄宇宙洪荒，日月辰宿列张。寒来暑秋收冬藏。成岁，律吕调阳。</p>
        <p>云腾致雨露结，为霜金生丽玉出昆冈。</p>
      </Fragment>
    )
  }),
  callToAction: byLanguage({
    en: 'Contact Adalat',
    ch: '联系Adalat'
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
            en: 'A renowned bellydance artisit, Adalat is also an amazing teacher.',
            ch: '作为一名知名的肚皮舞艺术家，Adalat是一个有趣又有经验的老师。'
          }),
          imageName: 'adalat-students-bellydance.jpg',
          linkTo: `/dance/${BELLYDANCE_ID}`
        },
        {
          id: getUUID(),
          name: byLanguage({
            en: 'Uyghur',
            ch: '维吾尔舞'
          }),
          description: byLanguage({
            en: 'Learn authentic Uyghur Sanam dance with Adalat.',
            ch: '跟着Adalat学习正宗的新疆维吾尔族舞蹈。'
          }),
          imageName: 'adalat-uyghur.jpg',
          linkTo: `/dance/${UYGHUR_ID}`
        },
        {
          id: getUUID(),
          name: byLanguage({
            en: 'Bollywood',
            ch: '宝莱坞舞'
          }),
          description: byLanguage({
            en: 'Explore fun bollywood dance with Adalat.',
            ch: '跟着Adalat探索宝莱坞舞蹈。'
          }),
          imageName: 'adalat-bollywood.jpg',
          linkTo: `/dance/${BOLLYWOOD_ID}`
        }
      ]
    },
    {
      title: byLanguage({
        en: 'Services',
        ch: '服务'
      }),
      list: [
        {
          id: getUUID(),
          name: byLanguage({
            en: 'Private Lessons',
            ch: '私人一对一课程'
          }),
          description: byLanguage({
            en: 'Learn dancing with Adalat, get a choreograph tailored to your style and level.',
            ch: '让Adalat设计专属于你的课程和编舞。'
          }),
          imageName: 'adalat-bellydance-pink.JPG',
          linkTo: '/about'
        },
        {
          id: getUUID(),
          name: byLanguage({
            en: 'Parties and Events',
            ch: '聚会与活动'
          }),
          description: byLanguage({
            en: 'Weddings, birthday parties, celebrations... Adalat will make your party shine even more!',
            ch: '婚礼、生日派对、重大庆祝，让Adalat点亮你的派对，让你的来宾赞不绝口'
          }),
          imageName: 'adalat-performance-candle.jpg',
          linkTo: '/about'
        },
        {
          id: getUUID(),
          name: byLanguage({
            en: 'Discounted Packages',
            ch: '组合优惠'
          }),
          description: byLanguage({
            en: 'Learn tailored curriculum and choreograph with your friends.',
            ch: '招呼你的朋友们一起预定Adalat的课程，即可得到优惠。'
          }),
          imageName: 'bellydance-group.jpg',
          linkTo: '/about'
        }
      ]
    }
  ],
  scheduleBanner: {
    title: byLanguage({
      en: 'Upcoming Shows',
      ch: '近期演出'
    }),
    list: [
      {
        id: getUUID(),
        date: '2019/10/24',
        startTime: '9PM',
        venue: 'Zeitoon Restaurant',
        eventName: byLanguage({
          en: 'Halloween Drum Night',
          ch: '万圣节鼓舞演出'
        })
      },
      {
        id: getUUID(),
        date: '2019/11/23',
        startTime: '11PM',
        venue: 'Paradiz Hookah Lounge',
        eventName: byLanguage({
          en: 'Persian Celebration',
          ch: '波斯庆祝夜'
        })
      },
      {
        id: getUUID(),
        date: '2019/10/22',
        startTime: '9PM',
        venue: 'Zeitoon Restaurant',
        eventName: byLanguage({
          en: 'Halloween Drum Night',
          ch: '万圣节鼓舞演出'
        })
      },
      {
        id: getUUID(),
        date: '2019/11/08',
        startTime: '11PM',
        venue: 'Cozba Middle Eastern Restaurant',
        eventName: byLanguage({
          en: 'Persian Celebration',
          ch: '波斯庆祝夜'
        })
      },
      {
        id: getUUID(),
        date: '2020/2/24',
        startTime: '9PM',
        venue: 'Zeitoon Restaurant',
        eventName: byLanguage({
          en: 'Nowruz Persian New Year Party',
          ch: '万圣节鼓舞演出'
        })
      }
    ]
  }
};
