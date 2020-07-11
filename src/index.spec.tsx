import React from 'react'

import { render } from 'react-dom'

import { identity } from '.'

jest.mock('react-dom', () => ({
  render: jest.fn()
}))

test('identity()', () => {
  expect(render).toHaveBeenCalled()
  expect(identity('foo')).toEqual('foo')
})
