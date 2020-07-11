import React from 'react'
import renderer from 'react-test-renderer'

import Button from '.'

test('Match snapshot', () => {
  const props = {
    text: 'text',
    icon: 'card',
    type: 'primary',
    small: false,
    disabled: false,
    linkOnDesktop: false,
    onClick: jest.fn(),
  }

  const tree = renderer.create(
    <Button
      text={props.text}
      icon={props.icon}
      type={props.type}
      small={props.small}
      disabled={props.disabled}
      linkOnDesktop={props.linkOnDesktop}
      onClick={props.onClick}
    />
  )

  expect(tree.toJSON()).toMatchSnapshot()
})

test('Match snapshot for a disabled small button with link on desktop', () => {
  const props = {
    text: 'text',
    type: 'primary',
    small: true,
    disabled: true,
    linkOnDesktop: true,
    onClick: jest.fn(),
  }

  const tree = renderer.create(
    <Button
      text={props.text}
      type={props.type}
      small={props.small}
      disabled={props.disabled}
      linkOnDesktop={props.linkOnDesktop}
      onClick={props.onClick}
    />
  )

  expect(tree.toJSON()).toMatchSnapshot()
})
