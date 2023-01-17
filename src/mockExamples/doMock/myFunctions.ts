import { MOON, SUN } from './myConfig';

const dayNight = (when: string) => {
  return when === 'day' ? SUN : MOON
}

export { dayNight }
