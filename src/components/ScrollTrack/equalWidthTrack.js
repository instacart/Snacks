import React, { PureComponent } from 'react'
import PropTypes            from 'prop-types'

class EqualWidthTrackError extends TypeError {
  name = 'EqualWidthTrackError'
}

const equalWidthTrack = (childWidth) => {
  if (typeof childWidth !== 'number') {
    throw new EqualWidthTrackError('childWidth must be a number')
  }

  return (WrappedComponent) => {
    class EqualWidthTrack extends PureComponent {
      static propTypes = {
        left: PropTypes.number.isRequired,
        parentWidth: PropTypes.number.isRequired,
        trackWidth: PropTypes.number.isRequired,
      }

      render() {
        const { left, parentWidth } = this.props

        const startIndex = Math.floor(Math.abs(left)/childWidth)
        const lastIndex = Math.floor((Math.abs(left) + parentWidth)/childWidth)

        return <WrappedComponent {...this.props} startIndex={startIndex} lastIndex={lastIndex} />
      }
    }

    return EqualWidthTrack
  }
}

export default equalWidthTrack
