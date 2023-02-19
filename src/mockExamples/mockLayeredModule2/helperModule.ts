export const root = {
  planets: {
    earth: {
      seasons: {
        spring() {
          return 'Breeze and rain'
        },
        summer() {
          return {
            ocean() {
              return 'Icebergs'
            },
            wood() {
              return 'Snowy threes'
            }
          }
        },
        fall() {
          return 'Yellow leaves'
        },
        winter() {
          return 'Snow and freeze'
        },
      }
    }
  },
}
