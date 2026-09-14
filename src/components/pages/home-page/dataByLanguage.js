/* eslint-disable max-len */
import React, { Fragment } from 'react';
import {
  BELLYDANCE_ID,
  UYGHUR_ID
} from '../../../constants';

import { byLanguage, getUUID } from '../../../utility';

// ==================== 🛠️ 终极云端路径：强行绕过打包工具的漏图缺陷 ====================
const cloudPosterUrl = "https://githubusercontent.com";

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
        {/* Fall 2026 Poster English */}
        <div style={{ textAlign: 'center', margin: '30px auto', maxWidth: '800px' }}>
          <img 
            src={require('adalat-dance/public/images/fall-2026-schedule.png').default}
            alt="Fall 2026 Registration" 
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.15)' }} 
          />
        </div>
      </Fragment>
    ),
    ch: (
      <Fragment>
        <p>中东肚皮舞、维吾尔舞、宝莱坞舞蹈编排、表演与培训。</p>
        {/* Fall 2026 海报中文 */}
        <div style={{ textAlign: 'center', margin: '30px auto', maxWidth: '800px' }}>
          <img 
            src={require('adalat-dance/public/images/fall-2026-schedule.png').default}
            alt="2026秋季注册海报" 
            style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.15)' }} 
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
      title: byLanguage({
        en: 'Classes',
        ch: '课程'
      }),
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
      title: byLanguage({
        en: 'Services',
        ch: '服务'
      }),
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
    },
    
  ],
  publicShows: {
    title: byLanguage({
      en: '✨ BELLY DANCE CLASSES ✨\n🌟 FALL 2026 DANCE CLASSES ARE NOW OPEN FOR REGISTRATION! 🌟',
      ch: '✨ Adalat舞蹈学院 ✨ 2026秋季学期课表'
    }),
    subtitle: byLanguage({
      en: '📅 September 14 – December 6, 2026\n🌸 New Student Trial Class: $15 (Trial fee waived when you register for the full semester.)\n📌 Note: No classes on public holidays.',
      ch: '现在开放注册 - 肚皮舞和维吾尔舞 | 试课优惠 $15 | 公众假期停课'
    }),
    showTableColumns: [
      { key: 'class', label: byLanguage({ en: 'Class', ch: '课程' }) },
      { key: 'day', label: byLanguage({ en: 'Day & Date', ch: '日期' }) },
      { key: 'schedule', label: byLanguage({ en: 'Schedule', ch: '时间安排' }) },
      { key: 'location', label: byLanguage({ en: 'Location', ch: '地点' }) },
      { key: 'price', label: byLanguage({ en: 'Price', ch: '价格' }) }
    ],
    showList: [
      {
        id: getUUID(),
        class: byLanguage({ en: 'Beginner • Techniques & Combos', ch: '基础技巧组合' }),
        day: byLanguage({ en: 'MONDAYS\nSep 14 – Dec 6', ch: '周一\n9月14日 – 12月6日' }),
        schedule: byLanguage({ en: '6:00 PM – 7:30 PM', ch: '下午6:00 – 7:30' }),
        location: byLanguage({ en: '#260–4351 No. 3 Rd, Richmond, BC', ch: '#260–4351 No. 3 Rd, Richmond, BC' }),
        price: byLanguage({ en: '$308 / 11 sessions\nDrop-in: $38', ch: '$308 (11节课)\n单次: $38' })
      },
      {
        id: getUUID(),
        class: byLanguage({ en: 'Intermediate • Techniques & Choreography', ch: '编舞课' }),
        day: byLanguage({ en: 'MONDAYS\nSep 14 – Dec 6', ch: '周一\n9月14日 – 12月6日' }),
        schedule: byLanguage({ en: '7:45 PM – 9:15 PM', ch: '晚上7:45 – 9:15' }),
        location: byLanguage({ en: '#260–4351 No. 3 Rd, Richmond, BC', ch: '#260–4351 No. 3 Rd, Richmond, BC' }),
        price: byLanguage({ en: '$308 / 11 sessions\nDrop-in: $38', ch: '$308 (11节课)\n单次: $38' })
      },
      {
        id: getUUID(),
        class: byLanguage({ en: 'Private Classes', ch: '私人课程' }),
        day: byLanguage({ en: 'TUESDAYS', ch: '周二' }),
        schedule: byLanguage({ en: 'One-on-one sessions', ch: '一对一课程' }),
        location: byLanguage({ en: '5365 Lane Street Studio, Burnaby', ch: '5365 Lane Street Studio, Burnaby' }),
        price: byLanguage({ en: '$110/hour\nPackage rates available', ch: '$110 / 小时' })
      },
      {
        id: getUUID(),
        class: byLanguage({ en: 'Uyghur Dance • All Levels', ch: '维吾尔舞' }),
        day: byLanguage({ en: 'WEDNESDAYS\nSep 14 – Dec 6', ch: '周三\n9月14日 – 12月6日' }),
        schedule: byLanguage({ en: '7:00 PM – 8:30 PM', ch: '晚上7:00 – 8:30' }),
        location: byLanguage({ en: '5451 Minoru Blvd, Richmond, BC', ch: '5451 Minoru Blvd, Richmond, BC' }),
        price: byLanguage({ en: '$280 / 10 sessions\nDrop-in: $38', ch: '$280 (10节课)' })
      },
      {
        id: getUUID(),
        class: byLanguage({ en: 'Belly Dance with Danya • All Levels', ch: '肚皮舞初级班' }),
        day: byLanguage({ en: 'THURSDAYS\nSep 14 – Dec 6', ch: '周四\n9月14日 – 12月6日' }),
        schedule: byLanguage({ en: '7:30 PM – 9:00 PM', ch: '晚上7:30 – 9:00' }),
        location: byLanguage({ en: '#110–16825 104 Ave, Surrey, BC', ch: '#110–16825 104 Ave, Surrey, BC' }),
        price: byLanguage({ en: '$280 / 10 sessions\nDrop-in: $38', ch: '$280 (10节课)' })
      },
      {
        id: getUUID(),
        class: byLanguage({ en: 'Club • Advance (Performing Artists)', ch: '表演艺术班 (需试镜)' }),
        day: byLanguage({ en: 'SUNDAYS\nSep 14 – Dec 6', ch: '周日\n9月14日 – 12月6日' }),
        schedule: byLanguage({ en: '3:00 PM – 5:00 PM', ch: '下午3:00 – 5:00' }),
        location: byLanguage({ en: '250–12551 Vickers Way, Richmond, BC', ch: '250–12551 Vickers Way, Richmond, BC' }),
        price: byLanguage({ en: '$250 / 5 sessions\n(Committed class - no drop-ins)', ch: '$250 (5节课)' })
      }
    ],
    bottomNotes: byLanguage({
      en: '💃✨ Come dance, learn, and grow with us this Fall! | 📩 Register by e-transfer: adalatdancevancouver@gmail.com',
      ch: '欢迎在这个秋天与我们一起起舞成长！ | 📩 注册 E-transfer 邮箱：adalatdancevancouver@gmail.com'
    })
  }
};
