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
    en: 'Contact Adalat',
    ch: '联系Adalat'
  }),
  banners: [
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
          linkTo: '#contact-form'
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
