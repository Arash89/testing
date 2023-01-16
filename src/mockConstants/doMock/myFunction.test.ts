import * as CONSTANTS from './config';

describe('mock and spy on constants', () => {
  describe('before spy all constants excepted have their own mocked or actual values', () => {

    afterEach(() => {
      jest.resetModules()
    })

    test('their actual value', async () => {

      jest.doMock('./config', () => ({
        __esModule: true,
        // this part important because without this, other constants turned to undefined
        ...jest.requireActual('./config'),
        get MOON() {
          return 'My little Moon'
        }
      }))
      const { dayNight } = await import('./myFunctions')

      expect(dayNight('day')).toEqual('Sun')
      expect(dayNight('night')).toEqual('My little Moon')
    })
  })

  describe('after spy we have this opportunity to change value that we need', () => {
    test('change the SUN value', async () => {
      jest.doMock('./config', () => ({
        __esModule: true,
        // this part important because without this, other constants turned to undefined
        ...jest.requireActual('./config'),
        get MOON() {
          return 'Rise and shine'
        }
      }))
      const { dayNight } = await import('./myFunctions')
      expect(dayNight('day')).toEqual('Sun')
      expect(dayNight('night')).toEqual('Rise and shine')
    })
  })

  describe('', () => {
    test('their mocked value', async () => {
      // if you comment next line it wouldn't work fine as it is using dynamic import
      // for working fine we should use the jest.resetModules()
      jest.resetModules()
      jest.doMock('./config', () => ({
        __esModule: true,
        // this part important because without this, other constants turned to undefined
        ...jest.requireActual('./config'),
        get MOON() {
          return 'My little Moon'
        }
      }))
      const { dayNight } = await import('./myFunctions')

      expect(dayNight('day')).toEqual('Sun')
      expect(dayNight('night')).toEqual('My little Moon')
    })
  })
})
