import {
  BOLLYWOOD_ID,
  BELLYDANCE_ID,
  UYGHUR_ID
} from '../../../constants';
import { getUUID } from '../../../utility';

export default {
  [BOLLYWOOD_ID]: [
    {
      id: getUUID(),
      location: '1234 Alpha St',
      time: '9pm',
      nameByLanguage: {
        en: 'Intermediate Adult Richmond',
        ch: '列治文成人中级班'
      }
    }
  ],
  [BELLYDANCE_ID]: [
    {
      id: getUUID(),
      location: '1234 Alpha St',
      time: '9pm',
      nameByLanguage: {
        en: 'Intermediate Adult Richmond',
        ch: '列治文成人中级班'
      }
    },
    {
      id: getUUID(),
      location: '1234 Alpha St, Burnaby',
      time: '7pm',
      nameByLanguage: {
        en: 'Beginner Adult Burnaby',
        ch: '本拿比成人初级班'
      }
    }
  ],
  [UYGHUR_ID]: [
    {
      id: getUUID(),
      location: '1234 Alpha St',
      time: '9pm',
      nameByLanguage: {
        en: 'Intermediate Adult Richmond',
        ch: '列治文成人中级班'
      }
    }
  ]
};
