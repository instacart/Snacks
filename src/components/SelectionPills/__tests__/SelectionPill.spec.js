import React from 'react'
import renderer from 'react-test-renderer'
import SelectionPill from '../SelectionPill'

it('renders selected pill correctly', () => {
  const tree = renderer
    .create(<SelectionPill id="selection1" isSelected text={'selected pill'} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders unselected pill correctly', () => {
  const tree = renderer
    .create(<SelectionPill id="selection1" isSelected={false} text={'Not selected pill'} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders disabled pill correctly', () => {
  const tree = renderer
    .create(<SelectionPill id="selection1" isDisabled text={'Disabled pill'} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders element attributes on pill correctly', () => {
  const tree = renderer
    .create(
      <SelectionPill
        id="selection1"
        text={'pill with attributes'}
        listElementAttributes={{ style: { margin: '10px' } }}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders element attributes on pill correctly', () => {
  const tree = renderer
    .create(
      <SelectionPill
        id="selection1"
        text={'pill with attributes'}
        listElementAttributes={{ style: { margin: '10px' } }}
        elementAttributes={{ role: 'tab' }}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
