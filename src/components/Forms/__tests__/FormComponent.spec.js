import React from 'react'
import PropTypes from 'prop-types'
import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import renderer from 'react-test-renderer'
import FormComponent from '../FormComponent'

const noOp = () => true

describe('when a component has a #getValue method', () => {
  it('gets the value from #getValue', () => {
    const TEST_VALUE = 'lololol'
    // change lololol to hahahah
    const getValue = rawValue => rawValue.replace(/l/g, 'h').replace(/o/g, 'a')
    const TEST_FORMATTED_VALUE = getValue(TEST_VALUE)

    @FormComponent
    class MyComponent extends React.Component {
      static propTypes = {
        onChange: PropTypes.func.isRequired,
      }

      getValue = () => {
        return getValue(this.input.value)
      }

      render() {
        return (
          <input
            type="text"
            name="test"
            defaultValue={TEST_VALUE}
            ref={ref => (this.input = ref)}
          />
        )
      }
    }

    const wrapper = mount(
      <div>
        <MyComponent name="test" onChange={noOp} />
      </div>
    )

    expect(
      wrapper
        .find('FormComponent')
        .instance()
        .getValue()
    ).toBe(TEST_FORMATTED_VALUE)
    expect(
      wrapper
        .find('FormComponent')
        .instance()
        .hasValue()
    ).toBe(true)
  })
})

describe('when a component does not have #getValue method, but has value in state', () => {
  it('gets the value from state.value', () => {
    const TEST_VALUE = 'lololol'

    @FormComponent
    class MyComponent extends React.Component {
      state = {
        value: TEST_VALUE,
      }

      render() {
        return <input type="text" ref={ref => (this.input = ref)} />
      }
    }

    const wrapper = mount(
      <div>
        <MyComponent />
      </div>
    )

    expect(
      wrapper
        .find('FormComponent')
        .instance()
        .getValue()
    ).toBe(TEST_VALUE)
    expect(
      wrapper
        .find('FormComponent')
        .instance()
        .hasValue()
    ).toBe(true)
  })
})

describe('when a component is required', () => {
  @FormComponent
  class MyComponent extends React.Component {
    static propTypes = {
      onChange: PropTypes.func.isRequired,
    }

    getValue = () => {
      return this.input.value
    }

    render() {
      return <input type="text" name="test" ref={ref => (this.input = ref)} />
    }
  }

  describe('and the value is null', () => {
    it('#hasValue should be false', () => {
      const wrapper = mount(<MyComponent required />)
      expect(
        wrapper
          .find('FormComponent')
          .instance()
          .hasValue()
      ).toBe(false)
      expect(
        wrapper
          .find('FormComponent')
          .instance()
          .validate()
      ).toBe(false)
    })
  })

  describe('and the value is present', () => {
    it('#hasValue should be true', () => {
      const wrapper = mount(<MyComponent required />)
      wrapper.instance().FormComponent.input.value = 'lol'
      expect(
        wrapper
          .find('FormComponent')
          .instance()
          .hasValue()
      ).toBe(true)
      expect(
        wrapper
          .find('FormComponent')
          .instance()
          .validate()
      ).toBe(true)
    })
  })
})
