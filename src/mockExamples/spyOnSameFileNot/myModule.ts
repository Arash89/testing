import { myLog } from '../../notAdd/myLib';
import { moon, oceans } from './utils';

const earth = (belongings) => {
  switch (belongings) {
    case 'Moon':
      return moon()
    case 'Oceans':
      return oceans()
    default:
      return 'Land an Water'
  }
}

export { earth }
