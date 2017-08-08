import componentStyles from './ScrollTrackStyles'

import React, { Component } from 'react'
import CircleButton  from '../Buttons/CircleButton'
import Icon          from '../Icon/Icon'
import Radium        from 'radium'
import PropTypes     from 'prop-types'
import _             from 'underscore'

@Radium
class ScrollTrack extends Component {
  static propTypes = {
    /** prop to manually control left positioning of ScrollTrack */
    leftOverride: PropTypes.number
  }

  static defaultProps = {
    leftOverride: 0
  }

  constructor(props) {
    super(props)

    this.state = {
      showLeftArrow: false,
      showRightArrow: false,
      left: props.leftOverride
    }
  }

  componentDidMount() {
    this.debouncdComputeSlideAttributes = _.debounce(this.computeSlideAttributes, 200)
    this.computeSlideAttributes()

    window.addEventListener('resize', this.debouncdComputeSlideAttributes)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.leftOverride !== this.props.leftOverride) {
      // this allows for control of the scrolltrack by parent components
      this.setState({ left: nextProps.leftOverride })
      this.computeSlideAttributes()
    }
  }

  componentDidUpdate(prevProps) {
    const prevChildren = prevProps.children || []
    const newChildren = this.props.children || []

    if (!_.isEqual(prevChildren, newChildren)) {
      this.computeSlideAttributes()
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncdComputeSlideAttributes)
  }

  getNodeWidths = () => {
    const parentNode = this.refs.container
    const parentNodeBounds = parentNode && parentNode.getBoundingClientRect()
    const trackNode = this.refs.track
    const trackNodeBounds = trackNode && trackNode.getBoundingClientRect()
    const parentWidth = parentNodeBounds && parentNodeBounds.width
    const trackWidth = trackNode && (trackNode.offsetLeft + trackNode.scrollWidth)
    const trackBounds = trackNodeBounds

    return { parentWidth, trackWidth, trackBounds }
  }

  computeSlideAttributes = () => {
    const { parentWidth, trackWidth } = this.getNodeWidths()
    const trackAtEnd = parentWidth < trackWidth && this.state.left <= (parentWidth - trackWidth)
    const trackAtBeginning = this.state.left >= 0

    if (!parentWidth || !trackWidth) { return }
    if (Math.ceil(parentWidth) >= trackWidth) { return this.hideArrows() }
    if (!trackAtEnd) { this.showRightArrow() } else { this.hideRightArrow() }
    if (!trackAtBeginning) { this.showLeftArrow() } else { this.hideLeftArrow() }
  }

  hideArrows = () => {
    this.setState({
      showLeftArrow: false,
      showRightArrow: false
    })
  }

  hideRightArrow = () => {
    this.setState({ showRightArrow: false })
  }

  hideLeftArrow = () => {
    this.setState({ showLeftArrow: false })
  }

  showRightArrow = () => {
    this.setState({ showRightArrow: true })
  }

  showLeftArrow = () => {
    this.setState({ showLeftArrow: true })
  }

  slideForward = () => {
    const { parentWidth, trackWidth } = this.getNodeWidths()
    let nextForward = this.state.left - parentWidth
    const fullForward = parentWidth - trackWidth

    // already is, or is going to be, full forward
    if (nextForward <= fullForward) { nextForward = fullForward }

    this.setState({ left: nextForward }, this.computeSlideAttributes)
  }

  slideBack = () => {
    const { parentWidth } = this.getNodeWidths()
    let nextBack = this.state.left + parentWidth

    // already is, or is going to be, full back
    if (this.state.left >= 0 || nextBack >= 0) { nextBack = 0 }

    this.setState({ left: nextBack }, this.computeSlideAttributes)
  }

  renderRightArrow = () => {
    const { slideButtonStyles } = componentStyles

    if (!this.state.showRightArrow) { return }

    return (
      <CircleButton
        onClick={this.slideForward}
        ariaLabel='next'
        styles={Object.assign({},
          slideButtonStyles.default,
          slideButtonStyles.right
        )}
      >
        <Icon name='arrowRightSmallBold' />
      </CircleButton>
    )
  }

  renderLeftArrow = () => {
    const { slideButtonStyles } = componentStyles

    if (!this.state.showLeftArrow) { return }

    return (
      <CircleButton
        onClick={this.slideBack}
        ariaLabel='back'
        styles={Object.assign({},
          slideButtonStyles.default,
          slideButtonStyles.left
        )}
      >
        <Icon name='arrowLeftSmallBold' />
      </CircleButton>
    )
  }

  render() {
    const { containerStyles, innerContainerStyles } = componentStyles
    const { children } = this.props

    if (!children) { return null }

    return (
      <div
        ref='container'
        style={containerStyles}
      >
        {this.renderLeftArrow()}
        <div
          style={[
            { left: this.state.left }, // order matters!
            innerContainerStyles
          ]}
        >
          <div ref='track'>
            {children}
          </div>
        </div>
        {this.renderRightArrow()}
      </div>
    )
  }
}

export default ScrollTrack
