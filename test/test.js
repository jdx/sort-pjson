const sort = require('..')
const {expect} = require('chai')

it('sorts dependencies', () => {
  expect(JSON.stringify(sort({
    dependencies: {
      b: '1',
      a: '1',
    },
  })))
    .to.equal('{"dependencies":{"a":"1","b":"1"}}')
})
