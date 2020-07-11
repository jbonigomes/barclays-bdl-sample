import React from 'react'
import renderer from 'react-test-renderer'

import QuickLink from '.'

test('Match snapshot', () => {
  const props = {
    text: 'text',
    icon: 'card',
    onClick: jest.fn()
  }

  const tree = renderer.create(
    <QuickLink text={props.text} icon={props.icon} onClick={props.onClick} />
  )

  expect(tree.toJSON()).toMatchSnapshot()
})
