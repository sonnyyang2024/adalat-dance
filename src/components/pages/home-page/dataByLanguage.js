/* eslint-disable max-len */

import React, { Fragment } from 'react';
import {
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
  banners: [    {
      title: byLanguage({
        en: 'Services',
        ch: '服务'
      }),
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
          linkTo: '/about'
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
          linkTo: '/about'
        },
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
        }
      ]
    },
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
            en: 'Uyghur Traditional Dance',
            ch: '维吾尔传统舞'
          }),
          description: byLanguage({
            en: 'Learn authentic Uyghur dance with Adalat.',
            ch: '跟着Adalat学习正宗的新疆维吾尔族舞蹈。'
          }),
          imageName: 'adalat-uyghur.jpg',
          linkTo: `/dance/${UYGHUR_ID}`
        }
      ]
    }
  ],
  scheduleBanner: {
    title: byLanguage({
      en: 'Upcoming Public Shows',
      ch: '近期公开演出'
    }),
    list: [
      {
        id: getUUID(),
        date: 'Every Saturaday',
        startTime: '10:30 PM',
        venue: 'Zeitoon Restaurant, Port Moody',
        mapLink: 'https://g.page/zeitoon-portmoody?share',
        danceType: byLanguage({
          en: 'Bellydance',
          ch: '肚皮舞'
        })
      },
      {
        id: getUUID(),
        date: 'Every Saturday',
        startTime: '11:00 PM',
        venue: 'Paradiz Hookah Lounge, Port Moody',
        mapLink: 'https://goo.gl/maps/P3tNCCNtnLKEuQz16',
        danceType: byLanguage({
          en: 'Bellydance',
          ch: '肚皮舞'
        })
      },
      {
        id: getUUID(),
        date: 'Every Saturday',
        startTime: 'Evening',
        venue: 'Afghan Horsemen Restaurant, Vancouver',
        mapLink: 'https://goo.gl/maps/55EM66E64P4eP8xD6',
        danceType: byLanguage({
          en: 'Bellydance',
          ch: '肚皮舞'
        })
      }
    ]
  }
};
