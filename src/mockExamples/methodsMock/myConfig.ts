export const skyColor = () => 'Blue'

const ArashMethods = {
  dayNights(when: string) {
    return when.toLowerCase() === 'day' ? 'Sun' : 'Moon'
  },
  getOceans() {
    return ['Indian', 'Pacific', 'Atlantic']
  },
  getRain(where?: string) {
    switch (where) {
      case 'US':
        return 20;
      case 'Europe':
        return 30;
      case 'Asia':
        return 50;
      default:
        return 0;
    }
  }
}

export default ArashMethods
