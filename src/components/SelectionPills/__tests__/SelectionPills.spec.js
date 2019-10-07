import React from 'react'
import renderer from 'react-test-renderer'
import { StyleRoot } from 'radium'
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
    const Pills = mount(
      <StyleRoot>
        <SelectionPills pills={testPills} onSelectPill={onSelectPill} />
      </StyleRoot>
    )

    Pills.find('input')
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
    const Pills = mount(
      <StyleRoot>
        <SelectionPills pills={selectPills} maxSelectionCount={2} />
      </StyleRoot>
    )

    Pills.find('input')
      .first()
      .simulate('change')
    const applePill = Pills.find('input')
      .last()
      .instance()
    expect(applePill.disabled).toBe(true)
  })

  it('unselects other pills when select all is included', () => {
    const selectPills = [
      { text: 'bananas', id: 'selection-1', isSelected: true },
      { text: 'apple', id: 'selection-2' },
    ]
    const Pills = mount(
      <StyleRoot>
        <SelectionPills pills={selectPills} includeSelectAll />
      </StyleRoot>
    )

    const allPills = Pills.find('input')
    const bananasPill = allPills.at(1).instance()
    const applePill = allPills.at(2).instance()

    expect(bananasPill.checked).toBe(true)
    expect(applePill.checked).toBe(false)

    allPills.first().simulate('change')

    expect(bananasPill.checked).toBe(false)
    expect(applePill.checked).toBe(false)
  })

  xit('responds to parent controlled state correctly', () => {
    const selectPills = [
      { text: 'bananas', id: 'selection-1', isSelected: true },
      { text: 'apple', id: 'selection-2' },
    ]
    const Pills = mount(
      <StyleRoot>
        <SelectionPills pills={selectPills} parentControlledState />
      </StyleRoot>
    )
    const allPills = Pills.find('input')
    const bananasPill = allPills.first()
    expect(bananasPill.instance().checked).toBe(true)
    bananasPill.simulate('change')
    expect(bananasPill.instance().checked).toBe(true)

    const updatedPills = selectPills.map(p => {
      return {
        ...p,
        isSelected: false,
      }
    })
    console.log('UPDATED', updatedPills)
    Pills.setProps({ pills: updatedPills })
    expect(bananasPill.instance().checked).toBe(false)
  })
})
