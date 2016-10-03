const test = require('tape')

// will fail
test(t => {
  t.equal(1, 2)
  t.end()
})
