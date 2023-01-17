import ArashMethods, { skyColor } from './myConfig';

export const useSkyColor = () => skyColor()

export const useDayNights = (when: string) => ArashMethods.dayNights(when)

export const useGetOceans = () => ArashMethods.getOceans()

export const useGetRain = (where?: string) => ArashMethods.getRain(where)
