import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import LegacyPortal from '../LegacyPortal'

describe('Legacy Portal', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(
        <LegacyPortal>
          <p>Test content</p>
        </LegacyPortal>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders with a passed in conatiner', () => {
    const container = mount(<div />)
    const Portal = mount(
      <LegacyPortal container={container.instance()}>{<p>Test content</p>}</LegacyPortal>
    )

    expect(Portal).toBeTruthy()
    expect(Portal.find(LegacyPortal).props().container).toEqual(container.instance())
  })
})
