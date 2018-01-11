import React, { PureComponent } from 'react'
import Transition from 'react-transition-group/Transition'
import PropTypes from 'prop-types'

const TIMEOUT = 0
const TRASITION_TIME = 200
const TIMING_FUNCTION = 'ease-in-out'
const START_SCALE = 0
const END_SCALE = 1
const START_MAX_HEIGHT = 0
const END_MAX_HEIGHT = 1500

const SCALE_DEFAULT = {
  start: 0,
  end: 1,
}
const MAX_HEIGHT = {
  start: 0,
  end: 1000,
}

const AXIS = 'y'

class Grow extends PureComponent {
  static propTypes = {
    /**
     * A convenience prop that enables or disabled appear animations for
     * all children. Note that specifying this will override any defaults
     * set on individual children Transitions.
    */
    appear: PropTypes.bool,

    /** Axis that is animated */
    axis: PropTypes.oneOf(['x', 'y']),

    /** Show the component; triggers the enter or exit states */
    in: PropTypes.bool,

    /**
     * Settings for max-height during animation (this is what animates the element's height).
     *
     * Default start: 0
     * Default end: 1500 (If content's height is larger than 1500, pass the content's height here )
    */
    maxHeight: PropTypes.shape({
      start: PropTypes.number,
      end: PropTypes.number,
    }),

    /**
     * Settings for starting and ending transformation to scale.
     *
     * Default start: 0
     * Default end: 1
    */
    scale: PropTypes.shape({
      start: PropTypes.number,
      end: PropTypes.number,
    }),

    /** Optional style overrides. */
    style: PropTypes.object,

    /** Delay in milliseconds until animation start. */
    timeout: PropTypes.number,

    /** Name of the transition-timing-function CSS property. */
    timingFunction: PropTypes.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),

    /** Time of animation in milliseconds. */
    transitionTime: PropTypes.number,
  }

  static defaultProps = {
    timeout: TIMEOUT,
    transitionTime: TRASITION_TIME,
    timingFunction: TIMING_FUNCTION,
    scale: SCALE_DEFAULT,
    maxHeight: MAX_HEIGHT,
    axis: AXIS,
    style: {},
    in: true,
    appear: true,
  }

  get scale() {
    const { start = START_SCALE, end = END_SCALE } = this.props.scale
    return {
      start,
      end
    }
  }

  get maxHeight() {
    const { start = START_MAX_HEIGHT, end = END_MAX_HEIGHT } = this.props.maxHeight
    return {
      start,
      end
    }
  }

  get transformAxis () {
    return this.props.axis === 'x' ? 'scaleX' : 'scaleY'
  }

  get transitionStyles () {
    const { start: startScale , end: endScale } = this.scale
    const { start: startMaxHeight, end: endMaxHeight } = this.maxHeight

    return {
      entering: {
        maxHeight: startMaxHeight,
        transform: `${this.transformAxis}(${startScale})`
      },
      entered: {
        maxHeight: endMaxHeight,
        transform: `${this.transformAxis}(${endScale})`
      },
    }
  }

  get initialStyles () {
    const { start: startScale } = this.scale
    const { start: startMaxHeight } = this.maxHeight
    const { transitionTime, timingFunction } = this.props

    return {
      maxHeight: startMaxHeight,
      overflow: 'hidden',
      transform: `${this.transformAxis}(${startScale})`,
      transition: `all ${transitionTime}ms ${timingFunction}`,
    }
  }

  renderChild = (state) => {
    const { style, children } = this.props
    const styles = {
      ...this.initialStyles,
      ...style,
      ...this.transitionStyles[state]
    }

    return (
      <div style={styles} >
        {children}
      </div>
    )
  }

  render() {
    const { in: inProp, timeout, appear } = this.props

    return (
      <Transition
        in={inProp}
        appear={appear}
        timeout={timeout}
      >
        {this.renderChild}
      </Transition>
    )
  }
}

export default Grow
