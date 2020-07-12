import { identity, dynamicHeader } from '.'

test('identity()', () => {
  expect(identity('foo')).toEqual('foo')
})

test('dynamicHeader()', () => {
  expect(dynamicHeader()).toEqual('h1')
  expect(dynamicHeader(1)).toEqual('h1')
  expect(dynamicHeader(2)).toEqual('h2')
  expect(dynamicHeader(3)).toEqual('h3')
  expect(dynamicHeader(4)).toEqual('h4')
  expect(dynamicHeader(5)).toEqual('h5')
  expect(dynamicHeader(6)).toEqual('h6')
})
