import React from 'react'
import renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import { spy } from 'sinon'
import tinycolor from 'tinycolor2'
import Link from '../Link'
import themer from '../../../styles/themer'
import { defaultTheme } from '../../../styles/themer/utils'

describe('Link', () => {
  it('renders without throwing', () => {
    const tree = renderer.create(<Link>HI</Link>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when style overrides are provided', () => {
    const tree = renderer.create(<Link style={{ textDecoration: 'underline' }}>HI</Link>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('applies the elementAttributes prop correctly', () => {
    const tree = renderer
      .create(<Link elementAttributes={{ 'aria-label': 'foo' }}>HI</Link>)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('fires the onClick callback with the correct arguments', () => {
    const onClick = spy()
    const props = {
      onClick,
      href: 'broccoli',
    }
    const wrapper = mount(<Link {...props}>HI</Link>)

    wrapper.find('a').simulate('click')

    const expectedProps = onClick.getCall(0).args[1]
    expect(props.onClick).toEqual(expectedProps.onClick)
    expect(props.href).toEqual(expectedProps.href)
  })

  it('re-renders when the active theme changes', () => {
    const wrapper = mount(<Link elementAttributes={{ 'aria-label': 'foo' }}>HI</Link>)

    const actual = window.getComputedStyle(wrapper.find('a').getDOMNode()).color
    const expected = defaultTheme.colors.action
    expect(actual).toEqual(tinycolor(expected).toRgbString())

    themer.themeConfig = {
      colors: {
        action: '#fff',
        primaryBackground: '#4a4a4a',
        primaryForeground: '#000',
      },
    }
    wrapper.update()

    expect(window.getComputedStyle(wrapper.find('a').getDOMNode()).color).toEqual(
      tinycolor('#fff').toRgbString()
    )
  })
})
