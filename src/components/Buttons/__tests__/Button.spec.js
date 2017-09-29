import Button from '../Button'
import Icon from '../../Icon/Icon'
import React from 'react'
import renderer from 'react-test-renderer'
import { StyleRoot } from 'radium'
import { mount } from 'enzyme'
import { spy } from 'sinon'

describe('Button', () => {
  it('renders all sizes correctly', () => {
    const testCases = [
      { snacksStyle: 'primary', size: 'tiny' },
      { snacksStyle: 'primary', size: 'small' },
      { snacksStyle: 'primary', size: 'standard' },
      { snacksStyle: 'primary', size: 'large' }
    ]

    testCases.forEach(props => {
      const tree = renderer
        .create(
          <StyleRoot>
            <Button {...props}>Primary Button</Button>
          </StyleRoot>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  it('renders all snacks button variants correctly', () => {
    const testCases = [
      { snacksStyle: 'primary', size: 'standard' },
      { snacksStyle: 'secondary', size: 'standard' },
      { snacksStyle: 'coupon', size: 'standard' }
    ]

    testCases.forEach(props => {
      const tree = renderer
        .create(
          <StyleRoot>
            <Button {...props}>Hi</Button>
          </StyleRoot>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  it('renders with inverted colors', () => {
    const tree = renderer
      .create(
        <StyleRoot>
          <Button inverted snacksType="primary" size="small">
            Hi
          </Button>
        </StyleRoot>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders icons correctly', () => {
    const testCases = [
      { icon: 'cart' },
      { icon: 'cart', iconPosition: 'right' },
      { icon: <Icon name="cart" /> },
      { icon: <Icon name="cart" />, iconPosition: 'right ' }
    ]

    testCases.forEach(props => {
      const tree = renderer
        .create(
          <StyleRoot>
            <Button {...props}>Hi</Button>
          </StyleRoot>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  })

  it('fires the onClick prop', () => {
    const onClick = spy()
    const wrapper = mount(
      <StyleRoot>
        <div>
          <Button snacksType="primary" onClick={onClick}>
            Hi
          </Button>
        </div>
      </StyleRoot>
    )

    wrapper.find('button').simulate('click')

    expect(onClick.calledOnce).toBe(true)
  })

  it('renders correctly when disabled', () => {
    const tree = renderer
      .create(
        <StyleRoot>
          <Button disabled snacksType="primary">
            Hi
          </Button>
        </StyleRoot>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('does not fire the onClick prop when disabled', () => {
    const onClick = spy()
    const wrapper = mount(
      <StyleRoot>
        <Button disabled snacksType="primary">
          Hi
        </Button>
      </StyleRoot>
    )

    wrapper.find('button').simulate('click')

    expect(onClick.calledOnce).toBe(false)
  })

  it('can render as a link if an href is provided', () => {
    const tree = renderer.create(
      <StyleRoot>
        <Button href="/carrot" snacksType="primary">
          Hi
        </Button>
      </StyleRoot>
    )
    expect(tree).toMatchSnapshot()
  })
})
