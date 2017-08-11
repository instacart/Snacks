import componentStyles from './ScrollTrackStyles'
import equalWidthTrack from './equalWidthTrack'
import ScrollTrackPropTypes from './ScrollTrackPropTypes'

import React, { Component } from 'react'
import CircleButton  from '../Buttons/CircleButton'
import Icon          from '../Icon/Icon'
import Radium        from 'radium'
import PropTypes     from 'prop-types'
import _             from 'underscore'

@Radium
class ScrollTrack extends Component {
  static equalWidthTrack = equalWidthTrack
  static ScrollTrackPropTypes = ScrollTrackPropTypes

  static propTypes = {
    /** Manually control left positioning of ScrollTrack */
    leftOverride: PropTypes.number,

    /** Style top level element */
    style: PropTypes.object,

    /** Style specifc children elements [LeftArrow, RightArrow, Track] */
    styles: PropTypes.shape({
      LeftArrow: PropTypes.object,
      RightArrow: PropTypes.object,
      Track: PropTypes.object,
    }),
  }

  static defaultProps = {
    leftOverride: 0,
    styles: {
      LeftArrow: {},
      RightArrow: {},
      Track: {}
    },
    style: {}
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

  get childrenWithTrackProps() {
    const nodeWidths = this.getNodeWidths()
    const trackProps = {
      ...this.state,
      ...nodeWidths
    }

    return React.Children.map(this.props.children, child => {
      return React.cloneElement(child, { trackProps })
    })
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

    const { styles: { RightArrow = {} } } = this.props
    return (
      <CircleButton
        onClick={this.slideForward}
        ariaLabel='next'
        styles={{
          ...slideButtonStyles.default,
          ...slideButtonStyles.right,
          ...RightArrow
        }}
      >
        <Icon
          name='arrowRightSmallBold'
          style={{ fontSize: '20px' }}
        />
      </CircleButton>
    )
  }

  renderLeftArrow = () => {
    const { slideButtonStyles } = componentStyles

    if (!this.state.showLeftArrow) { return }

    const { styles: { LeftArrow = {} } } = this.props

    return (
      <CircleButton
        onClick={this.slideBack}
        ariaLabel='back'
        styles={{
          ...slideButtonStyles.default,
          ...slideButtonStyles.left,
          ...LeftArrow
        }}
      >
        <Icon
          name='arrowLeftSmallBold'
          style={{ fontSize: '20px' }}
        />
      </CircleButton>
    )
  }

  render() {
    const { containerStyles, innerContainerStyles } = componentStyles
    const { children, style, styles: { Track = {} } } = this.props

    if (!children) { return null }

    return (
      <div
        ref='container'
        style={{ ...containerStyles, ...style }}
      >
        {this.renderLeftArrow()}
        <div
          style={[
            { left: this.state.left }, // order matters!
            innerContainerStyles
          ]}
        >
          <div ref='track' style={Track}>
            {this.childrenWithTrackProps}
          </div>
        </div>
        {this.renderRightArrow()}
      </div>
    )
  }
}


export default ScrollTrack
