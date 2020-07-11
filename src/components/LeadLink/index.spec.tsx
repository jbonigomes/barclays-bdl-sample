import React from 'react'
import renderer from 'react-test-renderer'

import LeadLink from '.'

test('Match snapshot', () => {
  const props = {
    text: 'text',
    onClick: jest.fn()
  }

  const tree = renderer.create(
    <LeadLink text={props.text} onClick={props.onClick} />
  )

  expect(tree.toJSON()).toMatchSnapshot()
})

test('Match snapshot with light colour on hover', () => {
  const props = {
    text: 'text',
    lightHover: true,
    onClick: jest.fn(),
  }

  const tree = renderer.create(
    <LeadLink
      text={props.text}
      onClick={props.onClick}
      lightHover={props.lightHover}
    />
  )

  expect(tree.toJSON()).toMatchSnapshot()
})
