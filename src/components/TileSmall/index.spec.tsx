import React from 'react'
import renderer from 'react-test-renderer'

import TileSmall from '.'

test('Match snapshot', () => {
  const props = {
    title: 'title',
    image: 'image',
    onClick: jest.fn(),
  }

  const tree = renderer.create(
    <TileSmall title={props.title} image={props.image} onClick={props.onClick}>
      Foo
    </TileSmall>
  )

  expect(tree.toJSON()).toMatchSnapshot()
})
