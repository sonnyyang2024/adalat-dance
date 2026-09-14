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
        
        {/* ==================== 2026 全新通告栏与海报（英文版） ==================== */}
        <div style={{ background: '#fff', border: '1px solid #f0f0f0', borderRadius: '16px', padding: '30px 20px', margin: '30px auto', maxWidth: '800px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', textAlign: 'center' }}>
          
          <h2 style={{ color: '#b12854', fontSize: '24px', margin: '0 0 10px 0' }}>✨ BELLY DANCE CLASSES ✨</h2>
          <h3 style={{ color: '#e05275', fontSize: '18px', margin: '0 0 20px 0' }}>🌟 FALL 2026 DANCE CLASSES ARE NOW OPEN FOR REGISTRATION! 🌟</h3>
          <p style={{ fontWeight: 'bold', fontSize: '16px', color: '#555', margin: '0 0 25px 0' }}>📅 September 14 – December 6, 2026</p>

          {/* 强制引用的海报图片 */}
          <div style={{ margin: '20px auto 30px auto', maxWidth: '100%' }}>
            <img 
              src="images/fall-2026-schedule.png" 
              alt="Fall 2026 Registration Poster" 
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
              onError={(e) => { e.target.src = '/images/fall-2026-schedule.png'; }}
            />
          </div>

          {/* 纯享文本区：确保你的所有信息 100% 完整展示 */}
          <div style={{ textAlign: 'left', background: '#fff5f7', padding: '20px', borderRadius: '12px', lineHeight: '1.8', color: '#333' }}>
            
            <p style={{ margin: '0 0 15px 0', borderBottom: '1px dashed #e05275', paddingBottom: '10px' }}>
              <strong>MONDAYS | RICHMOND 💃</strong><br />
              • 6:00–7:30 PM — Beginner • Techniques & Combos<br />
              • 7:45–9:15 PM — Intermediate • Techniques & Choreography<br />
              <span style={{ fontSize: '13px', color: '#666' }}>📍 #260–4351 No. 3 Rd, Richmond, BC | $308 / 11 sessions | Drop-in: $38</span>
            </p>

            <p style={{ margin: '0 0 15px 0', borderBottom: '1px dashed #e05275', paddingBottom: '10px' }}>
              <strong>TUESDAYS | BURNABY ✨</strong><br />
              • Private Classes (One-on-one sessions)<br />
              <span style={{ fontSize: '13px', color: '#666' }}>📍 5365 Lane Street Studio | $110/hour | Package rates available</span>
            </p>

            <p style={{ margin: '0 0 15px 0', borderBottom: '1px dashed #e05275', paddingBottom: '10px' }}>
              <strong>WEDNESDAYS | RICHMOND 💃</strong><br />
              • 7:00–8:30 PM — Uyghur Dance • All Levels<br />
              <span style={{ fontSize: '13px', color: '#666' }}>📍 5451 Minoru Blvd, Richmond, BC | $280 / 10 sessions | Drop-in: $38</span>
            </p>

            <p style={{ margin: '0 0 15px 0', borderBottom: '1px dashed #e05275', paddingBottom: '10px' }}>
              <strong>THURSDAYS | SURREY 🌟</strong><br />
              • 7:30–9:00 PM — Belly Dance with Danya • All Levels<br />
              <span style={{ fontSize: '13px', color: '#666' }}>📍 #110–16825 104 Ave, Surrey, BC | $280 / 10 sessions | Drop-in: $38</span>
            </p>

            <p style={{ margin: '0 0 20px 0', borderBottom: '1px dashed #e05275', paddingBottom: '10px' }}>
              <strong>SUNDAYS | RICHMOND 💫</strong><br />
              • 3:00–5:00 PM — Club • Advance 💫 (Class for performing artists)<br />
              <span style={{ fontSize: '13px', color: '#666' }}>📍 250–12551 Vickers Way, Richmond, BC | $250 / 5 sessions | Committed class — no drop-ins or make-up classes.</span>
            </p>

            <p style={{ margin: '0 0 10px 0', fontWeight: 'bold' }}>🌸 New Student Trial Class: $15</p>
            <p style={{ margin: '0 0 15px 0', fontSize: '14px', color: '#555' }}>Trial fee waived when you register for the full semester.</p>
            
            <p style={{ margin: '0 0 20px 0', color: '#e05275' }}>📌 Note: No classes on public holidays.</p>

            <p style={{ margin: '0 0 20px 0', fontStyle: 'italic', textAlign: 'center', fontWeight: '500' }}>
              Come dance, learn, and grow with us this Fall! 💃✨<br />
              Whether you’re a beginner, returning dancer, or experienced performer, there’s a place for you at Adalat Dance Academy. 💞
            </p>

            <div style={{ background: '#fff', border: '1px solid #ffccd7', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
              <strong style={{ color: '#b12854' }}>📩 Register by e-transfer:</strong><br />
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>adalatdancevancouver@gmail.com</span><br />
              <span style={{ fontSize: '13px', color: '#666' }}>DM for more information 💌</span>
            </div>

          </div>
        </div>
      </Fragment>
    ),
    ch: (
      <Fragment>
        <p>中东肚皮舞、维吾尔舞、宝莱坞舞蹈编排、表演与培训。</p>
        {/* 中文版海报 */}
        <div style={{ textAlign: 'center', margin: '30px auto', maxWidth: '800px' }}>
          <img 
            src="images/fall-2026-schedule.png" 
            alt="2026秋季注册海报" 
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.15)' }} 
            onError={(e) => { e.target.src = '/images/fall-2026-schedule.png'; }}
          />
        </div>
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
      title: byLanguage({ en: 'Classes', ch: '课程' }),
      list: [
        {
          id: getUUID(),
          name: byLanguage({ en: 'Bellydance', ch: '肚皮舞' }),
          description: byLanguage({ en: 'Learn Oriental Bellydance with Adalat.', ch: '跟着Adalat学习东方肚皮舞。' }),
          imageName: 'adalat-students-bellydance.jpg',
          linkTo: `/dance/${BELLYDANCE_ID}`
        },
        {
          id: getUUID(),
          name: byLanguage({ en: 'Uyghur Traditional Dance', ch: '维吾尔传统舞' }),
          description: byLanguage({ en: 'Learn authentic Uyghur folk dance with Adalat.', ch: '跟着Adalat学习正宗的新疆维吾尔族舞蹈。' }),
          imageName: 'adalat-uyghur.jpg',
          linkTo: `/dance/${UYGHUR_ID}`
        },
        {
          id: getUUID(),
          name: byLanguage({ en: 'Private Lessons', ch: '私人一对一课程' }),
          description: byLanguage({ en: 'Thursdays only at Burnaby Private Studio. One-on-one: $110 per session. Package price available.', ch: '仅周四在Burnaby私人工作室, 一对一: $110 每节课。套餐价格可咨询。' }),
          imageName: 'adalat-bellydance-pink.JPG'
        }
      ]
    },
    {
      title: byLanguage({ en: 'Services', ch: '服务' }),
      type: 'in-page',
      list: [
        {
          id: getUUID(),
          name: byLanguage({ en: 'Festivals & Theatre Productions', ch: '节庆和剧场制作' }),
          description: byLanguage({ en: 'Hire Adalat and Adalat Dance Company for your next tv show, movie, or festival production.', ch: '聘请Adalat和她的公司来创造你的下一个电视剧、电影或节庆表演制作。' }),
          imageName: 'bellydance-group.jpg',
          linkTo: '#contact-form'
        },
        {
          id: getUUID(),
          name: byLanguage({ en: 'Parties and Events', ch: '聚会与活动' }),
          description: byLanguage({ en: 'Hire Adalat for weddings, birthday parties, and other celebrations!', ch: '婚礼、生日派对、重大庆祝，让Adalat点亮你的派对，让你的来宾赞不绝口' }),
          imageName: 'adalat-candle-min.jpg',
          linkTo: '#contact-form'
        }
      ]
    }
  ],
  publicShows: {
    title: byLanguage({
      en: '✨ Adalat Dance Academy ✨ 2026 Fall Schedule Table',
      ch: '✨ Adalat舞蹈学院 ✨ 2026秋季学期课表'
    }),
    subtitle: byLanguage({
      en: 'Please refer to the detailed notice box above for full registration guidelines.',
      ch: '现在开放注册 - 肚皮舞和维吾尔舞'
    }),
    showTableColumns: [
      { key: 'class', label: byLanguage({ en: 'Class', ch: '课程' }) },
      { key: 'day', label: byLanguage({ en: 'Day', ch: '日期' }) },
      { key: 'schedule', label: byLanguage({ en: 'Schedule', ch: '时间安排' }) },
      { key: 'location', label: byLanguage({ en: 'Location', ch: '地点' }) },
      { key: 'price', label: byLanguage({ en: 'Price', ch: '价格' }) }
    ],
    showList: [
      {
        id: getUUID(),
        class: byLanguage({ en: 'Beginner • Techniques & Combos', ch: '基础技巧组合' }),
        day: byLanguage({ en: 'Mondays\nSep 14 – Dec 6', ch: '周一' }),
        schedule: byLanguage({ en: '6:00 PM – 7:30 PM', ch: '下午6:00 – 7:30' }),
        location: byLanguage({ en: 'Richmond, BC', ch: 'Richmond, BC' }),
        price: byLanguage({ en: '$308 (11 sessions)', ch: '$308' })
      },
      {
        id: getUUID(),
        class: byLanguage({ en: 'Intermediate • Techniques & Choreography', ch: '编舞课' }),
        day: byLanguage({ en: 'Mondays\nSep 14 – Dec 6', ch: '周一' }),
        schedule: byLanguage({ en: '7:45 PM – 9:15 PM', ch: '晚上7:45 – 9:15' }),
        location: byLanguage({ en: 'Richmond, BC', ch: 'Richmond, BC' }),
        price: byLanguage({ en: '$308 (11 sessions)', ch: '$308' })
      },
      {
        id: getUUID(),
        class: byLanguage({ en: 'Private Classes', ch: '私人课程' }),
        day: byLanguage({ en: 'Tuesdays', ch: '周二' }),
        schedule: byLanguage({ en: 'One-on-one sessions', ch: '一对一课程' }),
        location: byLanguage({ en: 'Burnaby Studio', ch: '本拿比私人工作室' }),
        price: byLanguage({ en: '$110/hour', ch: '$110' })
      },
      {
        id: getUUID(),



