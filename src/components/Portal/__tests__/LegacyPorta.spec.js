import React            from 'react'
import renderer         from 'react-test-renderer'
import { StyleRoot }    from 'radium'
import { mount }        from 'enzyme'
import LegacyPortal     from '../LegacyPortal'

describe('Legacy Portal', () => {

  it('renders properly', () => {
    const tree = renderer.create(
      <StyleRoot>
        <LegacyPortal>
          <p>Test content</p>
        </LegacyPortal>
      </StyleRoot>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders with a passed in conatiner', () => {
    const container = mount(<div></div>)
    const Portal = mount(
      <StyleRoot>
        <LegacyPortal
          container={container.instance()}
        >
          { <p>Test content</p> }
        </LegacyPortal>
      </StyleRoot>
    )

    expect(Portal).toBeTruthy()
    expect(Portal.find(LegacyPortal).props().container).toEqual(container.instance())
  })

})
