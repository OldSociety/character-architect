import {API_BASE_URL, fetchJson} from '../utils/api.js';

// A simple example test
describe('#fetchJson() using Promises', () => {
  it('should load pantheon data', () => {
    return fetchJson(`${API_BASE_URL}/moons`)
    .then(data => {
      expect(data).toBeDefined()
      expect(data[0].name).toEqual('Miira')
    })
  })
})

describe('Race API route', () => {
    it('should load race data', () => {
      return fetchJson(`${API_BASE_URL}/races`)
      .then(data => {
        expect(data).toBeDefined()
        expect(data.race[0].name).toEqual("Ash'a")
      })
    })
  })
  