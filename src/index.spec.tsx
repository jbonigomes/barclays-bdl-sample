import React from 'react'

import { render } from 'react-dom'

import '.'

jest.mock('react-dom', () => ({
  render: jest.fn()
}))

test('render()', () => {
  expect(render).toHaveBeenCalled()
})
