import * as CONSTANTS from './config';
import { dayNight } from './myFunctions';

jest.mock('./config', () => ({
  __esModule: true,
  // this part important because without this, other constants turned to undefined
  ...jest.requireActual('./config'),
  get MOON() {
    return 'My little Moon'
  }
}))

describe('mock and spy on constants', () => {
  describe('before spy all constants excepted have their own mocked or actual values', () => {
    test('their actual value', () => {
      expect(dayNight('day')).toEqual('Sun')
    })

    test('their mocked value', () => {
      expect(dayNight('night')).toEqual('My little Moon')
    })
  })

  describe('after spy we have this opportunity to change value that we need', () => {
    test('change the SUN value', () => {
      // You have to do your spy under your test otherwise it make all prior MOON values to undefined
      // and also after this point in any describe/test block you have to set MOON with the spy otherwise
      // you will get undefined for it
      const moonSpy = jest.spyOn(CONSTANTS, 'MOON', 'get')

      moonSpy.mockReturnValue('Rise and shine')
      expect(dayNight('night')).toEqual('Rise and shine')
    })
  })

  describe('', () => {
    test('their mocked value', () => {
      // Because of the point is told on top I have to use spy here for moon because
      // if you comment these 2 lines you will get undefined for MOON
      const moonSpy = jest.spyOn(CONSTANTS, 'MOON', 'get')
      moonSpy.mockReturnValue('My little Moon')
      expect(dayNight('night')).toEqual('My little Moon')
    })
  })

})
