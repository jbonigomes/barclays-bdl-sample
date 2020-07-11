import React from 'react'
import renderer from 'react-test-renderer'

import TileWithBadge from '.'

test('Match snapshot', () => {
  const props = {
    badge: 'badge',
    image: 'image',
    title: 'title',
    onTitleClick: jest.fn(),
  }

  const tree = renderer.create(
    <TileWithBadge
      badge={props.badge}
      image={props.image}
      title={props.title}
      onTitleClick={props.onTitleClick}
    >
      Foo
    </TileWithBadge>
  )

  expect(tree.toJSON()).toMatchSnapshot()
})

test('Match snapshot with button', () => {
  const props = {
    badge: 'badge',
    image: 'image',
    title: 'title',
    buttonText: 'buttonText',
    onTitleClick: jest.fn(),
    onButtonClick: jest.fn(),
  }

  const tree = renderer.create(
    <TileWithBadge
      badge={props.badge}
      image={props.image}
      title={props.title}
      buttonText={props.buttonText}
      onTitleClick={props.onTitleClick}
      onButtonClick={props.onButtonClick}
    >
      Foo
    </TileWithBadge>
  )

  expect(tree.toJSON()).toMatchSnapshot()
})
