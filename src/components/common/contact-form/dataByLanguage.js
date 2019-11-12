import { byLanguage } from '../../../utility';

export default {
  title: byLanguage({
    en: 'Contact Adalat for your next event or class.',
    ch: '联系Adalat来预定活动或课程。'
  }),
  name: byLanguage({
    en: 'Name',
    ch: '姓名'
  }),
  email: byLanguage({
    en: 'Email',
    ch: '电邮'
  }),
  phone: byLanguage({
    en: 'Phone',
    ch: '电话'
  }),
  details: byLanguage({
    en: 'Details of my inquiry',
    ch: '咨询细节'
  }),
  interest: byLanguage({
    en: 'I am interested in',
    ch: '我想了解更多关于'
  }),
  interests: [
    byLanguage({
      en: 'Bellydance Classes',
      ch: '肚皮舞课程'
    }),
    byLanguage({
      en: 'Uyghur Classes',
      ch: '维吾尔舞蹈课程'
    }),
    byLanguage({
      en: 'Private Events & Parties',
      ch: '私人活动与聚会'
    }),
    byLanguage({
      en: 'Business Collaboration',
      ch: '商务合作意向'
    }),
    byLanguage({
      en: 'Others',
      ch: '其它'
    })
  ],
  submit: byLanguage({
    en: 'Submit Form',
    ch: '提交表格'
  })
};
