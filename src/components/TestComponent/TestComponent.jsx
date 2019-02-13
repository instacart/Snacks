import React from 'react'
import PropTypes from 'prop-types'

const TestComponent = ({ isThing, isOtherThing }) => {
  if (isThing) {
    return <div>isThing!</div>
  }

  if (isOtherThing) {
    return <div>isOtherThing!</div>
  }

  return <div>isNothing!</div>
}
TestComponent.propTypes = {
  isThing: PropTypes.boolean,
  isOtherThing: PropTypes.boolean,
}

export default TestComponent
