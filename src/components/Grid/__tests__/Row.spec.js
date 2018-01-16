import React from 'react'
import renderer from 'react-test-renderer'
import Row from '../Row'
import { StyleRoot } from 'radium'

it('renders Row correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <Row />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Row with styles passed in correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <Row style={{ color: '#ccc', width: '100%' }} />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Row with maxColumns correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <Row maxColumns={1} />
        <Row maxColumns={2} />
        <Row maxColumns={3} />
        <Row maxColumns={4} />
        <Row maxColumns={5} />
        <Row maxColumns={6} />
        <Row maxColumns={7} />
        <Row maxColumns={8} />
        <Row maxColumns={9} />
        <Row maxColumns={10} />
        <Row maxColumns={11} />
        <Row maxColumns={12} />
        <Row maxColumns={13} />
        <Row maxColumns={14} />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Row with styles and maxColumns passed in correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <Row
          maxColumns={1}
          style={{ color: '#ccc', width: '100%' }}
        />
        <Row
          maxColumns={6}
          style={{ color: '#ccc', width: '100%' }}
        />
        <Row
          maxColumns={10}
          style={{ color: '#ccc', width: '100%' }}
        />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders Row with styles, maxColumns and forceFullPage passed in correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <Row
          forceFullPage={true}
          maxColumns={8}
        />
        <Row
          forceFullPage={true}
          style={{ color: '#ccc', width: '100%' }}
        />
        <Row
          forceFullPage={true}
          maxColumns={10}
          style={{ color: '#ccc', width: '100%' }}
        />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
