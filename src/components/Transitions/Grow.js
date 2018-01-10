import React, { PureComponent } from 'react'
import Transition from 'react-transition-group/Transition'
import PropTypes from 'prop-types'

const TIMEOUT = 0
const TRASITION_TIME = 200
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
    /** Delay in milliseconds until animation start. */
    timeout: PropTypes.number,

    /** Time of animation in milliseconds. */
    transitionTime: PropTypes.number,

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

    /** Axis that is animated */
    axis: PropTypes.oneOf(['x', 'y']),

    /** Show the component; triggers the enter or exit states */
    in: PropTypes.bool,

    /**
     * A convenience prop that enables or disabled appear animations for
     * all children. Note that specifying this will override any defaults
     * set on individual children Transitions.
     */
    appear: PropTypes.bool,

    /** Optional style overrides. */
    style: PropTypes.object,
  }

  static defaultProps = {
    timeout: TIMEOUT,
    transitionTime: TRASITION_TIME,
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
    return this.props.axis == 'x' ? 'scaleX' : 'scaleY'
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
    const { transitionTime } = this.props

    return {
      maxHeight: 0,
      overflow: 'hidden',
      transform: `${this.transformAxis}(${startScale})`,
      transition: `all ${transitionTime}ms ease-in-out`,
    }
  }

  renderChild = (state) => {
    const { style, children } = this.props
    const styles = {
      ...style,
      ...this.initialStyles,
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
