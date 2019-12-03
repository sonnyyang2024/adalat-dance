import React, { Fragment } from 'react';

import { byLanguage, getUUID } from '../../../utility';

export default {
  sections: [
    {
      id: getUUID(),
      title: 'Adalat Omar',
      subtitle: byLanguage({
        en: 'professional dance artist in Vancouver, Canada',
        ch: '加拿大温哥华的专业舞蹈艺术家'
      }),
      imageSrc: 'adalat-omar-sword.jpg',
      description: byLanguage({
        en: (
          <Fragment>
            <p>
              Adalat Omar is an award-winning professional dance artist, choreographer and dance instructor based in Vancouver Canada.
            </p>
            <p>
              She is internationally known for her professional Uyghur Traditional Dance and Middle Eastern Oriental Dance. She is also well proficient in Bollywood, Uzbek, Tajik and Persian dance styles.
            </p>
          </Fragment>
        ),
        ch: (
          <Fragment>
            <p>
              Adalat Omar 是加拿大温哥华屡获殊荣的专业舞蹈艺术家，编舞和舞蹈教练。
            </p>
            <p>
              她以其专业的维吾尔传统舞蹈和中东东方舞蹈而享誉国际。她还精通宝莱坞、乌兹别克、塔吉克和波斯舞蹈风格。
            </p>
          </Fragment>
        )
      })
    },
    {
      id: getUUID(),
      title: byLanguage({
        en: 'Born to dance',
        ch: '为舞而生'
      }),
      subtitle: byLanguage({
        en: 'always learning from the best teachers',
        ch: '总是向最好的老师学习'
      }),
      imageSrc: 'adalat-dance-petals.jpg',
      description: byLanguage({
        en: (
          <Fragment>
            <p>
              Adalat Omar has a professional dance degree. She graduated from the Xinjiang Uyghur Art Institute’s Dance Faculty. She received her early professional training for Oriental Belly Dance from Rahma Haddad (Vancouver).
            </p>
            <p>
              Over the years, she has continued to improve her skills from the world’s top Middle Eastern dancers and teachers like Randa Kamel (Egypt), Tito Seif (Egypt), Mohamed Shahin (Egypt / USA), Mohamed Salah (Egypt), Sema Yildiz (Turkey), Ragaey Hussein (Egypt) and many more.
            </p>
          </Fragment>
        ),
        ch: (
          <Fragment>
            <p>
              Adalat Omar毕业于新疆维吾尔艺术学院舞蹈学院,具有专业的舞蹈学位。她从Rahma Haddad（温哥华）接受了东方肚皮舞的早期专业培训。
            </p>
            <p>
              多年来，她一直在提高世界顶级中东舞者和老师的技能，这些舞者包括Randa Kamel（埃及），Tito Seif（埃及），Mohamed Shahin（埃及/美国），Mohamed Salah（埃及），Sema Yildiz（ 土耳其），Ragaey Hussein（埃及）等。
            </p>
          </Fragment>
        )
      })
    },
    {
      id: getUUID(),
      title: byLanguage({
        en: 'Performances',
        ch: '表演'
      }),
      subtitle: byLanguage({
        en: 'events, festivals, theatre productions',
        ch: '活动、节日表演、电影艺术制作'
      }),
      imageSrc: 'adalat-dark.jpg',
      description: byLanguage({
        en: (
          <Fragment>
            <p>
            Adalat Omar has been performing mainly in the Greater Vancouver area. The venues include Arabic, Greek, Persian, Turkish, Mediterranean restaurants, weddings, events, festivals and theatre productions.
            </p>
            <p>
              Locally, Adalat regularly performs at the Afghan Horseman Restaurant, Paradiz Teahouse & Hookah Lounge, Cazba Restaurant, Saray Turkish Restaurant, Taverna Greka, Zeitoon Restaurant and Arwaz Hookah Lounge. She also regularly performs at weddings, private party and corporate events.
            </p>
          </Fragment>
        ),
        ch: (
          <Fragment>
            <p>
              Adalat Omar主要在大温哥华地区演出。 这些场所包括阿拉伯文，希腊文，波斯文，土耳其文，地中海餐馆，婚礼，活动，节日和戏剧作品。
            </p>
            <p>
              在当地，Adalat 定期在Afghan Horseman Restaurant，Paradiz Teahouse & Hookah Lounge，Cazba Restaurant，Saray Turkish Restaurant，Taverna Greka，Zeitoon Restaurant和Arwaz Hookah Lounge中表演。 她还定期参加婚礼，私人聚会和公司活动。
            </p>
          </Fragment>
        )
      })
    }
  ]
};