import React from 'react'
import renderer from 'react-test-renderer'
import { StyleRoot } from '@instacart/radium'
import { mount } from 'enzyme'
import { spy } from 'sinon'
import SelectionPills from '../SelectionPills'

describe('SelectionPills', () => {
  const testPills = [
    {
      text: 'bananas',
      id: 'selection-1',
    },
    {
      text: 'arugula',
      id: 'selection-2',
    },
  ]

  it('renders SelectionPills correctly', () => {
    const tree = renderer
      .create(
        <StyleRoot>
          <SelectionPills
            pills={testPills}
            onSelectPill={(e, pill) => {
              console.log(pill)
            }}
            label={'Filter by'}
          />
        </StyleRoot>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders SelectionPills with select all included correctly', () => {
    const tree = renderer
      .create(
        <StyleRoot>
          <SelectionPills
            includeSelectAll
            selectAllLabel="Select all"
            pills={testPills}
            onSelectPill={(e, pill) => {
              console.log(pill)
            }}
            label={'Filter by'}
          />
        </StyleRoot>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders SelectionPills with pill attributes set correctly', () => {
    const attributesPills = [
      { text: 'bananas', id: 'selection-1', isSelected: true },
      { text: 'arugula', id: 'selection-2', isDisabled: true },
      { text: 'apples', id: 'selection-3', style: { button: { marginLeft: '10px' } } },
    ]
    const tree = renderer
      .create(
        <StyleRoot>
          <SelectionPills
            pills={attributesPills}
            onSelectPill={(e, pill) => {
              console.log(pill)
            }}
            label={'Filter by'}
          />
        </StyleRoot>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('handles onPillClick correctly', () => {
    const onSelectPill = spy()
    const wrapper = mount(
      <StyleRoot>
        <SelectionPills pills={testPills} onSelectPill={onSelectPill} />
      </StyleRoot>
    )

    wrapper
      .find('input')
      .first()
      .simulate('change')
    expect(onSelectPill.called).toBeTruthy()
    expect(onSelectPill.withArgs(3)).toBeTruthy()
  })

  it('disables remaining pills when max selected', () => {
    const selectPills = [
      { text: 'bananas', id: 'selection-1' },
      { text: 'arugula', id: 'selection-2', isSelected: true },
      { text: 'apple', id: 'selection-3' },
    ]
    const wrapper = mount(
      <StyleRoot>
        <SelectionPills pills={selectPills} maxSelectionCount={2} />
      </StyleRoot>
    )

    wrapper
      .find('input')
      .first()
      .simulate('change')
    const applePill = wrapper
      .find('input')
      .last()
      .instance()
    expect(applePill.disabled).toBe(true)
  })

  it('handles select all correctly', () => {
    const selectPills = [
      { text: 'bananas', id: 'selection-1', isSelected: true },
      { text: 'apple', id: 'selection-2' },
    ]
    const wrapper = mount(
      <StyleRoot>
        <SelectionPills pills={selectPills} includeSelectAll />
      </StyleRoot>
    )

    const allPills = wrapper.find('input')
    const selectAll = allPills.first()
    // Select all is in position 0
    const bananasPill = allPills.at(1).instance()
    const applePill = allPills.at(2).instance()

    expect(bananasPill.checked).toBe(true)
    expect(applePill.checked).toBe(false)

    selectAll.simulate('change')

    expect(selectAll.instance().checked).toBe(true)
    expect(bananasPill.checked).toBe(false)
    expect(applePill.checked).toBe(false)
  })
})
