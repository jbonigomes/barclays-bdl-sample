import React from 'react'
import renderer from 'react-test-renderer'

import Icon from '.'

test('Match snapshot for card', () => {
  const props = {
    type: 'card',
  }

  const tree = renderer.create(<Icon type={props.type} />)

  expect(tree.toJSON()).toMatchSnapshot()
})

test('Match snapshot for share', () => {
  const props = {
    type: 'share',
  }

  const tree = renderer.create(<Icon type={props.type} />)

  expect(tree.toJSON()).toMatchSnapshot()
})

test('Match snapshot for transfer', () => {
  const props = {
    type: 'transfer',
  }

  const tree = renderer.create(<Icon type={props.type} />)

  expect(tree.toJSON()).toMatchSnapshot()
})
