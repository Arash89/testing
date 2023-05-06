import { myLog } from '../../notAdd/myLib';

const earth = (belongings) => {
  myLog.cyanJ('Arash kojai? ', belongings)
  switch (belongings) {
    case 'Moon':
      myLog.pinkJ('I am here')
      return moon()
    case 'Oceans':
      return oceans()
    default:
      return 'Land an Water'
  }
}

const moon = () => {
  myLog.redJ('So I am called')
  return 'I am a perl around Earth'
}

const oceans = () => ['Atlantic', 'Pacific', 'Indian']

export { earth, moon, oceans }
