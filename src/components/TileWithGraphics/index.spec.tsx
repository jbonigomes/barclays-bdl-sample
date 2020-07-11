import React from 'react'
import renderer from 'react-test-renderer'

import TileWithGraphics from '.'

test('Match snapshot', () => {
  const props = {
    image: 'image',
    title: 'title',
  }

  const tree = renderer.create(
    <TileWithGraphics
      image={props.image}
      title={props.title}
    >
      Foo
    </TileWithGraphics>
  )

  expect(tree.toJSON()).toMatchSnapshot()
})

test('Match snapshot with button', () => {
  const props = {
    image: 'image',
    title: 'title',
    buttonText: 'buttonText',
    onClick: jest.fn(),
  }

  const tree = renderer.create(
    <TileWithGraphics
      image={props.image}
      title={props.title}
      buttonText={props.buttonText}
      onClick={props.onClick}
    >
      Foo
    </TileWithGraphics>
  )

  expect(tree.toJSON()).toMatchSnapshot()
})
