import { MOON, SUN } from './config';

const dayNight = (when: string) => {
  return when === 'day' ? SUN : MOON
}

export { dayNight }
