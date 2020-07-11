import React from 'react'
import renderer from 'react-test-renderer'

import App from '.'

test('Match snapshot', () => {
  const props = {
    onClick: jest.fn(),
  }

  const tree = renderer.create(<App onClick={props.onClick}>Foo</App>)

  expect(tree.toJSON()).toMatchSnapshot()
})
