import React, { PureComponent } from 'react'
import ScrollTrackPropTypes     from 'components/ScrollTrack/ScrollTrackPropTypes'

class EqualWidthTrackError extends TypeError {
  name = 'EqualWidthTrackError'
}

/**
 * A higher order component that will supply the wrapped
 * component with two additional props: `startIndex` and `lastIndex`. This will enable the
 * child to determine how it wants to treat elements that are shown within the track
 * or hidden off the overflow.
 */
const equalWidthTrack = (childWidth) => {
  if (typeof childWidth !== 'number') {
    throw new EqualWidthTrackError('childWidth must be a number')
  }

  return (WrappedComponent) => {
    class EqualWidthTrack extends PureComponent {
      static propTypes = {
        trackProps: ScrollTrackPropTypes.trackProps
      }

      render() {
        if (!this.props.trackProps) { return null }

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
