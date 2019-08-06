const { hello } = require('../index')
const { logger } = require('../logger')

describe('hello world', () => {
  it('should work sample', () => {
    const result = hello()
    console.log('Console - I logged something')
    logger.info('Winston - I logged something')
    expect(result).toBe('world')
  })
})
