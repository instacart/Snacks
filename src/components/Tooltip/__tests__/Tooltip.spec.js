import React            from 'react'
import ReactTestUtils   from 'react-dom/test-utils'
import renderer         from 'react-test-renderer'
import { StyleRoot }    from 'radium'
import { mount }        from 'enzyme'
import { spy, stub }    from 'sinon'
import Tooltip          from '../Tooltip'

describe('Tooltip', () => {

  it('renders Tooltip properly', () => {
    const tree = renderer.create(
      <StyleRoot>
        <Tooltip
          target={(<div>TRIGGER</div>)}
          placement='right'
          size='small'
          snacksStyle="secondary"
        >
          Right Secondary small
        </Tooltip>
      </StyleRoot>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('expect overlay to appear correctly when shown', () => {
    const tooltip = mount(
      <Tooltip
        target={(<button>TRIGGER</button>)}
        placement='right'
        size='small'
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
})
