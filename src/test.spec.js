import test from 'ava'

test('will pass!', t => t.pass())
test.failing('will fail!', t => t.fail())
