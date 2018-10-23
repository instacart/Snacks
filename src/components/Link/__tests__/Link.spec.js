import Link from '../Link'
import React from 'react'
import renderer from 'react-test-renderer'
import { StyleRoot } from 'radium'
import { mount } from 'enzyme'
import { spy } from 'sinon'
import themer from '../../../styles/themer'
import { defaultTheme } from '../../../styles/themer/utils'

describe('Link', () => {
  it('renders without throwing', () => {
    const tree = renderer
      .create(
        <StyleRoot>
          <Link>HI</Link>
        </StyleRoot>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders correctly when style overrides are provided', () => {
    const tree = renderer
      .create(
        <StyleRoot>
          <Link style={{ textDecoration: 'underline' }}>HI</Link>
        </StyleRoot>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('applies the elementAttributes prop correctly', () => {
    const tree = renderer
      .create(
        <StyleRoot>
          <Link elementAttributes={{ 'aria-label': 'foo' }}>HI</Link>
        </StyleRoot>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('fires the onClick callback with the correct arguments', () => {
    const onClick = spy()
    const props = {
      onClick,
      href: 'broccoli'
    }
    const wrapper = mount(
      <StyleRoot>
        <Link {...props}>HI</Link>
      </StyleRoot>
    )

    wrapper.find('a').simulate('click')

    const expectedProps = onClick.getCall(0).args[1]
    expect(props.onClick).toEqual(expectedProps.onClick)
    expect(props.href).toEqual(expectedProps.href)
  })

  it('re-renders when the active theme changes', () => {
    const wrapper = mount( 
      <StyleRoot>
        <Link elementAttributes={{ 'aria-label': 'foo' }}>HI</Link>
      </StyleRoot>
    )

    const actual = wrapper.find('a').props().style.color
    const expected = defaultTheme.colors.action
    expect(actual).toEqual(expected)

    themer.themeConfig = {
      colors: {
        action: '#fff',
        primaryBackground: '#4a4a4a',
        primaryForeground: '#000'
      }
    }
    wrapper.update()

    expect(wrapper.find('a').props().style.color).toEqual('#fff')
  })

  it('correctly forwards refs', () => {
    const ref = React.createRef()

    renderer.create(<StyleRoot><Link id={1} ref={ref} /></StyleRoot>, { createNodeMock: element => element })

    expect(ref.current.type).toBe('a')
  })
})
