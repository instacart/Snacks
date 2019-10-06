import React from 'react'
import renderer from 'react-test-renderer'
import SelectionPill from '../SelectionPill/SelectionPill'
import { mount } from 'enzyme'

describe('SelectionPill', () => {
  const onBlur = jest.fn()
  const onFocus = jest.fn()
  const onClick = jest.fn()

  it('renders selected pill correctly', () => {
    const tree = renderer
      .create(<SelectionPill id="selection1" isSelected text={'selected pill'} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders unselected pill correctly', () => {
    const tree = renderer
      .create(<SelectionPill id="selection1" isSelected={false} text={'Not selected pill'} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders disabled pill correctly', () => {
    const tree = renderer
      .create(<SelectionPill id="selection1" isDisabled text={'Disabled pill'} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders element attributes on pill correctly', () => {
    const tree = renderer
      .create(
        <SelectionPill
          id="selection1"
          text={'pill with attributes'}
          listElementAttributes={{ style: { margin: '10px' } }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders element attributes on pill correctly', () => {
    const tree = renderer
      .create(
        <SelectionPill
          id="selection1"
          text={'pill with attributes'}
          listElementAttributes={{ style: { margin: '10px' } }}
          elementAttributes={{ role: 'tab' }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('disables callback functions when disabled', () => {
    const wrapper = mount(
      <SelectionPill
        id="selection1"
        text={'pill with attributes'}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        isDisabled
      />
    )
    wrapper.find('input').simulate('click')

    expect(onClick).not.toHaveBeenCalled()
  })

  it('calls callback functions when enabled', () => {
    const wrapper = mount(
      <SelectionPill
        id="selection1"
        text={'pill with attributes'}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    )
    wrapper.find('input').simulate('change')
    expect(onClick).toHaveBeenCalled()

    wrapper.find('input').simulate('focus')
    expect(onFocus).toHaveBeenCalled()

    wrapper.find('input').simulate('blur')
    expect(onBlur).toHaveBeenCalled()
  })

})
