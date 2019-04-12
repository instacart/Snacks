import React from 'react'
import ReactTestUtils from 'react-dom/test-utils'
import renderer from 'react-test-renderer'
import { StyleRoot } from 'radium'
import { mount } from 'enzyme'
import { spy, stub } from 'sinon'
import Tooltip from '../Tooltip'

describe('Tooltip', () => {
  it('renders Tooltip properly', () => {
    const tree = renderer
      .create(
        <StyleRoot>
          <Tooltip
            target={<div>TRIGGER</div>}
            placement="right"
            size="small"
            snacksStyle="secondary"
          >
            Right Secondary small
          </Tooltip>
        </StyleRoot>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('expect overlay to appear correctly when shown', () => {
    const tooltip = mount(
      <Tooltip
        target={<button>TRIGGER</button>}
        placement="right"
        size="small"
        snacksStyle="secondary"
      >
        Right Secondary small
      </Tooltip>
    )

    const trigger = tooltip.find('button').last()
    trigger.last().simulate('click')

    const tree = renderer.create(tooltip).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should call callbacks', () => {
    const onDismiss = spy()
    const onShow = spy()
    const tooltip = mount(
      <Tooltip
        target={<button>TRIGGER</button>}
        placement="right"
        size="small"
        snacksStyle="secondary"
        onShow={onShow}
        onDismiss={onDismiss}
      >
        Callback tooltip
      </Tooltip>
    )

    const trigger = tooltip.find('button').last()
    trigger.last().simulate('click')
    expect(onShow.calledOnce).toBe(true)
    trigger.last().simulate('click')
    expect(onDismiss.calledOnce).toBe(true)
  })

  it('should not change its internal state if the component is controlled through isVisible', () => {
    const tooltip = mount(<Tooltip target={<button>TRIGGER</button>} isVisible />)

    const trigger = tooltip.find('button').last()
    trigger.last().simulate('click')
    expect(tooltip.props().isVisible).toEqual(true)
    expect(tooltip.state().show).toEqual(false)
  })

  it('should change its internal state when element is uncontrolled', () => {
    const tooltip = mount(<Tooltip target={<button>TRIGGER</button>} />)

    expect(tooltip.state().show).toEqual(false)

    const trigger = tooltip.find('button').last()
    trigger.last().simulate('click')

    expect(tooltip.state().show).toEqual(true)
  })

  it('should not change its internal state when passing in false for isVisible', () => {
    const tooltip = mount(<Tooltip target={<button>TRIGGER</button>} isVisible={false} />)

    const trigger = tooltip.find('button').last()
    trigger.last().simulate('click')

    expect(tooltip.props().isVisible).toEqual(false)
    expect(tooltip.state().show).toEqual(false)
  })

  it('should have false show state and true isVisible prop when not simulating click', () => {
    const tooltip = mount(<Tooltip target={<button>TRIGGER</button>} isVisible />)

    expect(tooltip.props().isVisible).toEqual(true)
    expect(tooltip.state().show).toEqual(false)
  })
})
