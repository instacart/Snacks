/* eslint-disable max-classes-per-file */
import React, { PureComponent } from 'react'
import ScrollTrackPropTypes from './ScrollTrackPropTypes'

class EqualWidthTrackError extends TypeError {
  name = 'EqualWidthTrackError'
}

/**
 * A higher order component that will supply the wrapped
 * component with two additional props: `startIndex` and `lastIndex`. This will enable the
 * child to determine how it wants to treat elements that are shown within the track
 * or hidden off the overflow.
 */
const equalWidthTrack = childWidth => {
  if (!['number', 'function'].includes(typeof childWidth)) {
    throw new EqualWidthTrackError('childWidth must be a number or function bassed on props')
  }

  return WrappedComponent => {
    class EqualWidthTrack extends PureComponent {
      static propTypes = {
        trackProps: ScrollTrackPropTypes.trackProps,
      }

      render() {
        if (!this.props.trackProps) {
          return null
        }
        const childWidthNumber =
          typeof childWidth === 'function' ? childWidth(this.props) : childWidth

        const { left, parentWidth } = this.props.trackProps

        const startIndex = Math.floor(Math.abs(left) / childWidthNumber)
        const lastIndex = Math.floor((Math.abs(left) + parentWidth) / childWidthNumber)

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
