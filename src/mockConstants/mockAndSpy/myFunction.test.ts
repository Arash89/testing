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
      // you have to do your spy under your test otherwise it make all prior MOON values to undefined
      const moonSpy = jest.spyOn(CONSTANTS, 'MOON', 'get')

      moonSpy.mockReturnValue('Rise and shine')
      expect(dayNight('night')).toEqual('Rise and shine')
    })
  })
})
