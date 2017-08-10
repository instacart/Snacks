import React, { PureComponent } from 'react'
import ScrollTrackPropTypes from './ScrollTrackPropTypes'

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
        trackProps: ScrollTrackPropTypes.trackProps.isRequired
      }

      render() {
        const { left, parentWidth } = this.props.trackProps

        const startIndex = Math.floor(Math.abs(left)/childWidth)
        const lastIndex = Math.floor((Math.abs(left) + parentWidth)/childWidth)

        return <WrappedComponent {...this.props} startIndex={startIndex} lastIndex={lastIndex} />
      }
    }

    // Access component that is being wrapped
    EqualWidthTrack.WrappedComponent = WrappedComponent.WrappedComponent
      ? WrappedComponent.WrappedComponent
      : WrappedComponent

    return EqualWidthTrack
  }
}

export default equalWidthTrack
