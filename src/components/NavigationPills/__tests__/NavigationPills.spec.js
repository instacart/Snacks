import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { spy } from 'sinon'
import NavigationPills from '../NavigationPills'

const testPills = [
  { path: '/store/doms-pizza-store', text: 'doms' },
  { text: 'doms1' },
  { path: '/store/doms-pizza-store-two', text: 'doms2' },
  { path: '/store/doms-pizza-store-three', text: 'doms3' },
  { path: '/store/doms-pizza-store-four' },
]

it('renders NavigationPills correctly', () => {
  const tree = renderer
    .create(
      <div>
        <NavigationPills
          pills={testPills}
          onPillClick={(e, pill) => {
            console.log(pill)
          }}
          label={'Filter by'}
          activePill={'dom2'}
        />
      </div>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders NavigationPills wihtout label correctly', () => {
  const tree = renderer
    .create(
      <div>
        <NavigationPills
          pills={testPills}
          onPillClick={(e, pill) => {
            console.log(pill)
          }}
          activePill={'dom2'}
        />
      </div>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders NavigationPills without pills correctly', () => {
  const tree = renderer
    .create(
      <div>
        <NavigationPills
          onPillClick={(e, pill) => {
            console.log(pill)
          }}
          activePill={'dom2'}
          label={'Filter by'}
        />
      </div>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders NavigationPills with elementAttributes correctly', () => {
  const tree = renderer
    .create(
      <div>
        <NavigationPills
          pills={testPills}
          onPillClick={(e, pill) => {
            console.log(pill)
          }}
          label={'Filter by'}
          activePill={'dom2'}
          elementAttributes={{ ariaLabel: 'this is an aria label', role: 'tabs' }}
        />
      </div>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders NavigationPills with inner elementAttributes correctly', () => {
  const tree = renderer
    .create(
      <div>
        <NavigationPills
          pills={testPills}
          onPillClick={(e, pill) => {
            console.log(pill)
          }}
          label={'Filter by'}
          activePill={'dom2'}
          elementAttributes={{ role: 'tabs' }}
          listItemAttributes={{ ariaLabel: 'this is an aria label' }}
        />
      </div>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it("renders NavigationPills with each pill's elementAttributes correctly", () => {
  const testPillsElmAttrs = [
    {
      path: '/store/doms-pizza-store',
      text: 'doms',
      elementAttributes: { 'aria-label': 'doms' },
      anchorItemAttributes: { role: 'tab' },
    },
    {
      text: 'doms1',
      elementAttributes: { 'aria-label': 'doms1' },
      anchorItemAttributes: { role: 'tab' },
    },
    {
      path: '/store/doms-pizza-store-two',
      text: 'doms2',
      elementAttributes: { 'aria-label': 'doms2' },
      anchorItemAttributes: { role: 'tab' },
    },
    {
      path: '/store/doms-pizza-store-three',
      text: 'doms3',
      elementAttributes: { 'aria-label': 'doms3' },
      anchorItemAttributes: { role: 'tab' },
    },
    {
      path: '/store/doms-pizza-store-four',
      elementAttributes: { 'aria-label': 'four' },
      anchorItemAttributes: { role: 'tab' },
    },
  ]

  const tree = renderer
    .create(
      <div>
        <NavigationPills
          pills={testPillsElmAttrs}
          onPillClick={(e, pill) => {
            console.log(pill)
          }}
          label={'Filter by'}
          activePill={'dom2'}
          elementAttributes={{ ariaLabel: 'this is an aria label', role: 'tabs' }}
        />
      </div>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('it handles onPillClick correctly', () => {
  const onPillClick = spy()
  const Pills = mount(
    <div>
      <NavigationPills
        pills={testPills}
        onPillClick={onPillClick}
        label={'Filter by'}
        activePill={'dom2'}
      />
    </div>
  )

  const pill = Pills.find('li a').first()
  pill.simulate('click')
  expect(onPillClick.calledOnce).toBeTruthy()
  expect(onPillClick.withArgs(2)).toBeTruthy()
})
