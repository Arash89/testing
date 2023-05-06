import * as MyModule from './myModule'
import { json } from 'stream/consumers';
import { myLog } from '../../notAdd/myLib';

describe('test spyOn same file', () => {
  let spyOnEarth
  beforeEach(() => {
    spyOnEarth = jest.spyOn(MyModule, 'moon')
  })

  test('should not work when in the same file', () => {
    myLog.yellowJ('Salam')
    expect(MyModule.earth('Moon')).toEqual('I am a perl around Earth');
    expect(spyOnEarth).toHaveBeenCalledTimes(1)
  })

})
