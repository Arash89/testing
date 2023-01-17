import { useSkyColor } from './myFunctions';

const mockSkyColor = jest.fn()
jest.mock('./myConfig', () => ({
  __esModule: true,
  // as the "resetMocks": true next line return undefined instead of 'Orange'
  // skyColor: jest.fn().mockReturnValue('Orange')
  skyColor() {return mockSkyColor()}
}))


describe('When testing mock methods plus default export', () => {
 test('useSkyColor functions should returns Orange', () => {
   mockSkyColor.mockReturnValue('Orange')
   expect(useSkyColor()).toEqual('Orange')
 })
})
