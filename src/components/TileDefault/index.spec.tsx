import React from 'react'
import renderer from 'react-test-renderer'

import TileDefault from '.'

test('Match snapshot', () => {
  const props = {
    image: 'image',
    title: 'title',
    onTitleClick: jest.fn(),
  }

  const tree = renderer.create(
    <TileDefault
      image={props.image}
      title={props.title}
      onTitleClick={props.onTitleClick}
    >
      Foo
    </TileDefault>
  )

  expect(tree.toJSON()).toMatchSnapshot()
})

test('Match snapshot with button', () => {
  const props = {
    image: 'image',
    title: 'title',
    buttonText: 'buttonText',
    onTitleClick: jest.fn(),
    onButtonClick: jest.fn(),
  }

  const tree = renderer.create(
    <TileDefault
      image={props.image}
      title={props.title}
      buttonText={props.buttonText}
      onTitleClick={props.onTitleClick}
      onButtonClick={props.onButtonClick}
    >
      Foo
    </TileDefault>
  )

  expect(tree.toJSON()).toMatchSnapshot()
})
