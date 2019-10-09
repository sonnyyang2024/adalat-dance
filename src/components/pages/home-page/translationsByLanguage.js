import React, { Fragment } from 'react';
import {
  BOLLYWOOD_ID,
  BELLYDANCE_ID,
  UYGHUR_ID
} from '../../../constants';

export default {
  en: {
    title: 'Adalat Omar',
    information: (
      <Fragment>
        <p>A Bellydancer, Uyghur and Bollywood dance lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Nulla vestibulum velit nunc, sed ultrices ex faucibus sit amet.</p>
      </Fragment>
    ),
    callToAction: 'Contact Adalat',
    banners: [
      {
        title: 'Classes',
        list: [
          {
            name: 'Bellydance',
            description: 'A renowned bellydance artisit, Ada is also an amazing teacher.',
            imageName: 'adalat-students-bellydance.jpg',
            linkTo: `/dance/${BELLYDANCE_ID}`
          },
          {
            name: 'Uyghur',
            description: 'Learn Uyghur Sanam dance with Ada.',
            imageName: 'adalat-uyghur.jpg',
            linkTo: `/dance/${UYGHUR_ID}`
          },
          {
            name: 'Bollywood',
            description: 'Experience fun bollywood dance with Ada.',
            imageName: 'adalat-bollywood.jpg',
            linkTo: `/dance/${BOLLYWOOD_ID}`
          }
        ]
      },
      {
        title: 'Services',
        list: [
          {
            name: 'Private Lessons',
            description: 'Learn dancing with Ada, get a choreograph tailored to your style and level.',
            imageName: 'adalat-bellydance-pink.JPG',
            linkTo: '/about'
          },
          {
            name: 'Parties and Events',
            description: 'Weddings, birthday parties, celebrations... Ada will make your party shine even more!',
            imageName: 'adalat-performance-candle.jpg',
            linkTo: '/about'
          },
          {
            name: 'Discounted Packages',
            description: 'Get a deal when you gather your friends and book group lessons with Ada.',
            imageName: 'bellydance-group.jpg',
             linkTo: '/about'
          }
        ]
      }
    ],
    scheduleBanner: {
      title: 'Upcoming Shows',
      list: [
        {
          date: '2019/10/31',
          startTime: '9PM',
          venue: 'Zeitoon Restaurant',
          eventName: 'Halloween Drum Night'
        },
        {
          date: '2019/11/08',
          startTime: '11PM',
          venue: 'Paradiz Hookah Lounge',
          eventName: 'Persian Celebration'
        },
        {
          date: '2019/10/31',
          startTime: '9PM',
          venue: 'Zeitoon Restaurant',
          eventName: 'Halloween Drum Night'
        },
        {
          date: '2019/11/08',
          startTime: '11PM',
          venue: 'Paradiz Hookah Lounge',
          eventName: 'Persian Celebration'
        },
        {
          date: '2019/10/31',
          startTime: '9PM',
          venue: 'Zeitoon Restaurant',
          eventName: 'Halloween Drum Night'
        }
      ]
    }
  },
  ch: {
    title: 'Adalat Omar',
    information: (
      <Fragment>
        <p>Adalat是一个专业肚皮舞、维吾尔舞、宝莱坞舞蹈艺术家。天地玄黄宇宙洪荒，日月辰宿列张。寒来暑秋收冬藏。成岁，律吕调阳。</p>
        <p>云腾致雨露结，为霜金生丽玉出昆冈。</p>
      </Fragment>
    ),
    callToAction: '联系Adalat',
    banners: [
      {
        title: '课程',
        list: [
          {
            name: '肚皮舞',
            description: '作为一名知名的肚皮舞艺术家，Ada是一个有趣又有经验的老师。',
            imageName: 'adalat-students-bellydance.jpg',
            linkTo: `/dance/${BELLYDANCE_ID}`
          },
          {
            name: '维吾尔舞',
            description: '跟着Ada学习新疆维吾尔族舞蹈。',
            imageName: 'adalat-uyghur.jpg',
            linkTo: `/dance/${UYGHUR_ID}`
          },
          {
            name: '宝莱坞舞',
            description: '跟着Ada探索宝莱坞舞蹈。',
            imageName: 'adalat-bollywood.jpg',
            linkTo: `/dance/${BOLLYWOOD_ID}`
          }
        ]
      },
      {
        title: '服务',
        list: [
          {
            name: '私人一对一课程',
            description: '让Ada设计专属于你的课程和编舞。',
            imageName: 'adalat-bellydance-pink.JPG',
            linkTo: '/about'
          },
          {
            name: '聚会与活动',
            description: '婚礼、生日派对、重大庆祝，让Ada点亮你的派对，让你的客人赞不绝口',
            imageName: 'adalat-performance-candle.jpg',
            linkTo: '/about'
          },
          {
            name: '组合优惠',
            description: '招呼你的朋友们一起预定Ada的课程，即可得到优惠。',
            imageName: 'bellydance-group.jpg',
            linkTo: '/about'
          }
        ]
      }
    ],
    scheduleBanner: {
      title: '近期演出',
      list: [
        {
          date: '2019/10/31',
          startTime: '9PM',
          venue: 'Zeitoon Restaurant',
          eventName: '万圣节鼓舞演出'
        },
        {
          date: '2019/11/08',
          startTime: '11PM',
          venue: 'Paradiz Hookah Lounge',
          eventName: '波斯庆祝夜'
        },
        {
          date: '2019/10/31',
          startTime: '9PM',
          venue: 'Zeitoon Restaurant',
          eventName: '万圣节鼓舞演出'
        },
        {
          date: '2019/11/08',
          startTime: '11PM',
          venue: 'Paradiz Hookah Lounge',
          eventName: '波斯庆祝夜'
        },
        {
          date: '2019/11/08',
          startTime: '11PM',
          venue: 'Paradiz Hookah Lounge',
          eventName: '波斯庆祝夜'
        }
      ]
    }
  }
};
