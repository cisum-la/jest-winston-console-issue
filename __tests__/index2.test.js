const { hello } = require('../index')
const logger = require('../logger') 
var sleep = require('sleep');

describe('hello world 2', () => {
  it('should work', () => {
    const result = hello()
    console.log('Console - I logged something too')
    logger.info('Winston - I logged something too')
    
    expect(result).toBe('world')
  })

  it('should not work', () => {
    const result = hello()
    logger.info('Winston - I logged something before failure')
    expect(result).toBe('worl')
  })
})
