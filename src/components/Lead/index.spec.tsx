import React from 'react'
import renderer from 'react-test-renderer'

import Lead from '.'

test('Match snapshot', () => {
  const props = {
    text: 'text',
  }

  const tree = renderer.create(<Lead text={props.text} />)

  expect(tree.toJSON()).toMatchSnapshot()
})
