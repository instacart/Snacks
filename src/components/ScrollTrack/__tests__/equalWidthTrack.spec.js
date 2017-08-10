import equalWidthTrack from '../equalWidthTrack'
import React, { PureComponent } from 'react'
import { mount } from 'enzyme'

const trackElementWidth = 10

@equalWidthTrack(trackElementWidth)
class TestComponent extends PureComponent {
  render() {
    return <div>test</div>
  }
}

it('correctly calculates the startIndex and lastIndex', () => {
  const trackProps = {
    left: -10,
    parentWidth: 100
  }

  const component = mount(
    <TestComponent trackProps={trackProps}/>
  )

  expect(component.find('TestComponent').prop('startIndex')).toEqual(1)
  expect(component.find('TestComponent').prop('lastIndex')).toEqual(11)
})
