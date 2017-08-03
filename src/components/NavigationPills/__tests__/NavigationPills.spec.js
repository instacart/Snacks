import React from 'react'
import renderer from 'react-test-renderer'
import NavigationPills from '../NavigationPills'
import { StyleRoot } from 'radium'
import { mount } from 'enzyme'
import { spy } from 'sinon'

const testPills = [
  { path: '/store/doms-pizza-store',  text: 'doms' },
  { text: 'doms1' },
  { path: '/store/doms-pizza-store-two',  text: 'doms2' },
  { path: '/store/doms-pizza-store-three',  text: 'doms3' },
  { path: '/store/doms-pizza-store-four' },
]

it('renders NavigationPills correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <NavigationPills
            pills={ testPills }
            onPillClick={(e, pill) => { console.log(pill) }}
            label={'Filter by'}
            activePill={'dom2'}
          />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders NavigationPills wihtout label correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <NavigationPills
            pills={ testPills }
            onPillClick={(e, pill) => { console.log(pill) }}
            activePill={'dom2'}
          />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders NavigationPills without pills correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <NavigationPills
            onPillClick={(e, pill) => { console.log(pill) }}
            activePill={'dom2'}
            label={'Filter by'}
          />
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('it handles onPillClick correctly', () => {
  const onPillClick = spy()
  const Pills = mount(
    <StyleRoot>
      <div>
        <NavigationPills
            pills={ testPills }
            onPillClick={onPillClick}
            label={'Filter by'}
            activePill={'dom2'}
          />
      </div>
    </StyleRoot>
  )

  const pill = Pills.find('li a').first()
  pill.simulate('click')
  expect(onPillClick.calledOnce).toBeTruthy()
  expect(onPillClick.withArgs(2)).toBeTruthy()
})
