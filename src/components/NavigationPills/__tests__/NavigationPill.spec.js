import React from 'react'
import renderer from 'react-test-renderer'
import NavigationPill from '../NavigationPill'

it('renders active pill correctly', () => {
  const tree = renderer.create(
    <NavigationPill
      isActive={true}
      text={'Active pill'}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders inactive pill correctly', () => {
  const tree = renderer.create(
    <NavigationPill
      isActive={false}
      text={'Not active pill'}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders href pill correctly', () => {
  const tree = renderer.create(
    <NavigationPill
      isActive={false}
      text={'Pill with href'}
      path={'/store/doms-cool-store'}
    />
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
