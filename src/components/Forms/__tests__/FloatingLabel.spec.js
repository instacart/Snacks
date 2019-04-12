import React from 'react'
import renderer from 'react-test-renderer'
import { StyleRoot } from 'radium'
import FloatingLabel from '../FloatingLabel'

it('renders FloatingLabel correctly when floated', () => {
  const tree = renderer
    .create(
      <StyleRoot>
        <div>
          <FloatingLabel text="Label Text" float />
        </div>
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders FloatingLabel correctly when not floating', () => {
  const tree = renderer
    .create(
      <StyleRoot>
        <div>
          <FloatingLabel text="Label Text" />
        </div>
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders FloatingLabel correctly when isActive and float', () => {
  const tree = renderer
    .create(
      <StyleRoot>
        <div>
          <FloatingLabel text="Label Text" isActive float />
        </div>
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders FloatingLabel correctly when disabled and float', () => {
  const tree = renderer
    .create(
      <StyleRoot>
        <div>
          <FloatingLabel text="Label Text" disabled float />
        </div>
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders FloatingLabel correctly when disabled', () => {
  const tree = renderer
    .create(
      <StyleRoot>
        <div>
          <FloatingLabel text="Label Text" disabled />
        </div>
      </StyleRoot>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
