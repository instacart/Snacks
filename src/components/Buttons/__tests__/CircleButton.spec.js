import CircleButton from '../CircleButton'
import Icon from '../../Icon/Icon'
import React from 'react'
import renderer from 'react-test-renderer'
import { StyleRoot } from 'radium'
import { mount } from 'enzyme'
import { spy } from 'sinon'

it('renders basic CircleButton correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <CircleButton>
          1
        </CircleButton>
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders CircleButton with Icon correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <CircleButton>
          <Icon name='arrowLeftSmallBold' />
        </CircleButton>
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders CircleButton with passed styles correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <CircleButton
          styles={{
            top: '8px',
            right: '8px',
            position: 'absolute'
          }}
        >
          1
        </CircleButton>
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders CircleButton with passed ariaLabel correctly', () => {
  const tree = renderer.create(
    <StyleRoot>
      <div>
        <CircleButton
          ariaLabel={'this is a button test'}
        >
          1
        </CircleButton>
      </div>
    </StyleRoot>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('calls onClick callback correctly', () => {
  const onClick = spy()
  const CButton = mount(
    <StyleRoot>
      <div>
        <CircleButton
          onClick={onClick}
        >
          1
        </CircleButton>
      </div>
    </StyleRoot>
  )

  const button = CButton.find('button').first()
  button.simulate('click')
  expect(onClick.calledOnce).toBeTruthy()
})

it('does not call onClick when not passed one', () => {
  const CButton = mount(
    <StyleRoot>
      <div>
        <CircleButton>
          1
        </CircleButton>
      </div>
    </StyleRoot>
  )

  const button = CButton.find('button').first()
  button.simulate('click')
})
