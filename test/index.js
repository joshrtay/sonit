/**
 * Imports
 */

const test = require('tape')
const sonit = require('..')
const fs = require('fs')

/**
 * Tests
 */

test('should work', (t) => {
  const json = {foo: 'bar'}
  sonit('test.json', json).then(_ => {
    const json2 = fs.readFileSync('test.json', 'utf8')
    t.deepEqual('{\n  "foo": "bar"\n}', json2)
    t.end()
  })
})
