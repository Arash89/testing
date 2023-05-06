import * as MyUtils from './utils'
import * as MyModule from './myModule'

describe('test spyOn same file', () => {
  let spyOnEarth
  beforeEach(() => {
    spyOnEarth = jest.spyOn(MyUtils, 'moon')
  })

  test('should not work when in the same file', () => {
    expect(MyModule.earth('Moon')).toEqual('I am a perl around Earth');
    expect(spyOnEarth).toHaveBeenCalledTimes(1)
  })

})
