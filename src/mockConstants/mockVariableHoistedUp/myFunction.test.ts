import { dayNight } from './myFunctions';

const mockMoon = jest.fn().mockReturnValue('Salam')
jest.mock('./config', () => ({
  __esModule: true,
  // this part important because without this, other constants turned to undefined
  ...jest.requireActual('./config'),
  get MOON() {
    return mockMoon()
  }
}))

describe('mock and spy on constants', () => {
  test('', () => {
    mockMoon.mockReturnValue('My little Moon')
    expect(dayNight('day')).toEqual('Sun')
    expect(dayNight('night')).toEqual('My little Moon')
  })
})
