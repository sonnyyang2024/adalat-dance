import React, { Fragment } from 'react';

import { byLanguage, getUUID } from '../../../utility';
import {
  BELLYDANCE_ID,
  UYGHUR_ID
} from '../../../constants';

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
              Adalat Omar主要在大温哥华地区演出。 这些场所包括阿拉伯文，希腊，波斯，土耳其，地中海餐馆，婚礼，活动，节日和戏剧作品。
            </p>
            <p>
              在当地，Adalat 定期在Afghan Horseman Restaurant，Paradiz Teahouse & Hookah Lounge，Cazba Restaurant，Saray Turkish Restaurant，Taverna Greka，Zeitoon Restaurant和Arwaz Hookah Lounge中表演。 她还定期参加婚礼，私人聚会和公司活动。
            </p>
          </Fragment>
        )
      })
    },
    {
      id: getUUID(),
      title: byLanguage({
        en: 'Productions',
        ch: '制作'
      }),
      subtitle: byLanguage({
        en: 'movies, tv, and theatre productions',
        ch: '电影，电视和戏剧作品'
      }),
      imageSrc: 'adalat-dark.jpg',
      description: byLanguage({
        en: (
          <Fragment>
            <p>
              Adalat Omar is one of the main dancers in popular TV series “Shimmy’’. She has also appeared on TV series “The Real Housewives of Vancouver” and movie “Kayan”. She has performed as a featured artist with dance and music troupe around the world for many events and festivals.
            </p>
            <p>
              She is currently the official dance choreographer for 2019 and 2020 Beauties of 5 Continents International Pageant.
            </p>
          </Fragment>
        ),
        ch: (
          <Fragment>
            <p>
              Adalat Omar是受欢迎的电视连续剧《Shimmy》的主要舞蹈演员之一。 她还出现在电视连续剧《温哥华真正的家庭主妇》和电影《 Kayan》中。她作为特色艺术家与舞蹈和音乐团在许多活动和节日中一起演出。            </p>
            <p>
              她目前是五洲国际选美大赛2019年和2020年的官方舞蹈编舞。
            </p>
          </Fragment>
        )
      })
    },
    {
      id: getUUID(),
      title: byLanguage({
        en: 'Adalat Dance Company',
        ch: 'Adalat舞蹈团'
      }),
      subtitle: byLanguage({
        en: 'group performance services',
        ch: '团体表演服务'
      }),
      imageSrc: 'adalat-dance-company.jpg',
      description: byLanguage({
        en: (
          <p>
            Adalat Dance Company is a professional Middle Eastern Oriental Dance and Uyghur Traditional Dance group. Adalat Omar is a founding member of it. It has performed for many large events and festivals in Canada. 
          </p>
        ),
        ch: (
          <p>
            Adalat舞蹈团是一个专业东方舞蹈和维吾尔族传统舞蹈团体。Adalat是该舞蹈团的创始成员。 该舞蹈团在加拿大参与演出过许多大型活动和节日。
          </p>
        )
      })
    },
    {
      id: getUUID(),
      title: byLanguage({
        en: 'Dance Classes',
        ch: '舞蹈课程'
      }),
      subtitle: byLanguage({
        en: 'group & private classes available',
        ch: '团体和私人班'
      }),
      imageSrc: 'adalat-omar-class.jpg',
      description: byLanguage({
        en: (
          <Fragment>
            <p>
              Adalat Omar teaches classes in Middle Eastern Oriental Dance and Uyghur Traditional Folk Dance for many years. Currently, her advanced class students proudly perform groups or solo dance in many festivals and events as a part of Adalat Dance Company. They are booked for many upcoming events.
            </p>
            <p>
              Her Uyghur kids class also successfully performed Uyghur traditional folk dance at many festivals, such as Nowruz Festival, Canada Day Festival, Silk Road Festival, Turkic Festival, World Festival, and Fusion Festival.
            </p>
          </Fragment>
        ),
        ch: (
          <Fragment>
            <p>
              Adalat Omar教授中东东方舞蹈和维吾尔传统民间舞蹈多年。 目前，作为Adalat舞蹈团的一员，她的高级班学生在许多节日和活动中表演团体或独舞。 他们已被许多大型活动预定。
            </p>
            <p>
              她的维吾尔族儿童班还成功地在许多节日中表演了维吾尔族传统民间舞蹈，例如诺鲁孜（波斯新年）节，加拿大国庆日节，丝绸之路节，突厥节，世界节和融合节。
            </p>
          </Fragment>
        )
      }),
      buttons: [
        {
          text: byLanguage({
            en: 'Learn Uyghur Dance',
            ch: '学习维吾尔族舞蹈'
          }),
          link: `/dance/${UYGHUR_ID}`
        },
        {
          text: byLanguage({
            en: 'Learn Bellydance',
            ch: '学习肚皮舞'
          }),
          link: `/dance/${BELLYDANCE_ID}`
        }
      ]
    }
  ]
};
