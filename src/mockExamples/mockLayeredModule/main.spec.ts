import { main } from './main'

const mockOcean = jest.fn()

jest.mock('./helperModule.ts', () => ({
  root: {
    planets: {
      earth: {
        seasons: {
          summer() {
            return {
              ocean() {
                return mockOcean()
              }
            }
          }
        }
      }
    }
  }
}));



describe('main', () => {
  test('summer on ocean', () => {
    mockOcean.mockReturnValue(12)

    expect(main()).toEqual(12)
    mockOcean.mockReturnValue('Salam')
    expect(main()).toEqual('Salam')
  })
})
