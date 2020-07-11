import React from 'react'
import renderer from 'react-test-renderer'

import Tile from '.'

test('Match snapshot', () => {
  const tree = renderer.create(
    <Tile>Foo</Tile>
  )

  expect(tree.toJSON()).toMatchSnapshot()
})
