const {createSiteMap} = require('../src/sitemap')

describe('createSiteMap function', () => {
  const config = {
    urls: ['/a', '/b']
  }
  const result = createSiteMap(config)
  it('should return xml string', () => {
    expect(typeof(result)).toBe('string')
  })
  it('should return 2 <loc>', () => {
    expect(result.match(/<loc>/g).length).toBe(2)
  })
  it('should return 2 <url>', () => {
    expect(result.match(/<url>/g).length).toBe(2)
  })
})