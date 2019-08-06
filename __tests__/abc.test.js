const { hello } = require('../index')
const { logger } = require('../logger')

describe('abc> ', () => {
  it('should work sample', () => {
    const result = hello()
    console.log('I logged something')
    logger.info('Winston - I logged something')
    expect(result).toBe('world')
    
  })
})
