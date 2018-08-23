import Pill from '../Pill'
import React from 'react'
import renderer from 'react-test-renderer'

describe('Pill', () => {
  it('renders without throwing', () => {
    const tree = renderer
      .create(
        <Pill>HI</Pill>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when style overrides are provided', () => {
    const tree = renderer
      .create(
        <Pill style={{ textDecoration: 'underline' }}>HI</Pill>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('applies the elementAttributes prop correctly', () => {
    const tree = renderer
      .create(
        <Pill elementAttributes={{ 'aria-label': 'foo' }}>HI</Pill>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
