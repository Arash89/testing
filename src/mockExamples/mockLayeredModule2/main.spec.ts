import { main } from './main'

const mockEarth = jest.fn()

jest.mock('./helperModule.ts', () => ({
  root: {
    planets: {
      get earth() {
        return mockEarth()
      }
    }
  }
}));


describe('main', () => {
  test('summer on ocean', () => {
    const newValue = {
      seasons: {
        summer() {
          return {
            ocean(): number | string {
              return 12
            },
            wood() {
              return 'Snowy threes'
            }
          }
        },
      }
    }
    mockEarth.mockReturnValue(newValue)

    expect(main()).toEqual(12)
    const newValue2 = {...newValue}
    newValue2.seasons.summer = function () {return {
      ocean() {
        return 'Salam'
      },
      wood() {
        return 'Snowy threes'
      }
    }}

    mockEarth.mockReturnValue(newValue)
    expect(main()).toEqual('Salam')
  })
})
