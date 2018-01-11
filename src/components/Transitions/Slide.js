import React, { PureComponent } from 'react'
import Transition from 'react-transition-group/Transition'
import PropTypes from 'prop-types'

const TIMEOUT = 0
const TRASITION_TIME = 200
const WIDTH = 200

const AXIS = 'x'

class Slide extends PureComponent {
  static propTypes = {
    /** Delay in milliseconds until animation start. */
    timeout: PropTypes.number,

    /** Time of animation in milliseconds. */
    transitionTime: PropTypes.number,

    /** Width in pixels of the container, this value is used for the translation offset. */
    width: PropTypes.number,

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
    width: WIDTH,
    axis: AXIS,
    style: {},
    in: true,
    appear: true,
  }

  get transformAxis() {
    return this.props.axis == 'x' ? 'translateX' : 'translateY'
  }

  get transitionStyles() {
    const { width } = this.props

    return {
      entering: {
        transform: `${this.transformAxis}(-${width}px)`
      },
      entered: {
        transform: `${this.transformAxis}(0)`
      },
    }
  }

  get initialStyles() {
    const { transitionTime, width } = this.props

    return {
      width: width,
      transform: `${this.transformAxis}(-${width}px)`,
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

export default Slide
