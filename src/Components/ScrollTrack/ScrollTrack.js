import componentStyles from './ScrollTrackStyles'

import Icon   from '../Icon/Icon'
import Radium from 'radium'
import React  from 'react'

const ScrollTrack = React.createClass({
  propTypes: {
    leftOverride: React.PropTypes.number
  },

  getInitialState() {
    return {
      showLeftArrow: false,
      showRightArrow: false,
      left: this.props.leftOverride || 0
    }
  },

  componentDidMount() {
    this.debouncdComputeSlideAttributes = _.debounce(this.computeSlideAttributes, 200)
    this.computeSlideAttributes()

    window.addEventListener('resize', this.debouncdComputeSlideAttributes)
  },

  componentDidUpdate(prevProps) {
    const prevChildren = prevProps.children || []
    const newChildren = this.props.children || []

    if (!_.isEqual(prevChildren, newChildren)) {
      this.computeSlideAttributes()
    }
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.leftOverride !== this.props.leftOverride) {
      // this allows for control of the scrolltrack by parent components
      this.setState({ left: nextProps.leftOverride })
      this.computeSlideAttributes()
    }
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncdComputeSlideAttributes)
  },

  getNodeWidths() {
    const parentNode = ReactDOM.findDOMNode(this)
    const parentNodeBounds = parentNode && parentNode.getBoundingClientRect()
    const trackNode = ReactDOM.findDOMNode(this.refs.track)
    const trackNodeBounds = trackNode && trackNode.getBoundingClientRect()
    const parentWidth = parentNodeBounds && parentNodeBounds.width
    const trackWidth = trackNode && (trackNode.offsetLeft + trackNode.scrollWidth)
    const trackBounds = trackNodeBounds

    return { parentWidth, trackWidth, trackBounds }
  },

  computeSlideAttributes() {
    const { parentWidth, trackWidth } = this.getNodeWidths()
    const trackAtEnd = parentWidth < trackWidth && this.state.left <= (parentWidth - trackWidth)
    const trackAtBeginning = this.state.left >= 0

    if (!parentWidth || !trackWidth) { return }
    if (parentWidth >= trackWidth) { return this.hideArrows() }
    if (!trackAtEnd) { this.showRightArrow() } else { this.hideRightArrow() }
    if (!trackAtBeginning) { this.showLeftArrow() } else { this.hideLeftArrow() }
  },

  hideArrows() {
    this.setState({
      showLeftArrow: false,
      showRightArrow: false
    })
  },

  hideRightArrow() {
    this.setState({ showRightArrow: false })
  },

  hideLeftArrow() {
    this.setState({ showLeftArrow: false })
  },

  showRightArrow() {
    this.setState({ showRightArrow: true })
  },

  showLeftArrow() {
    this.setState({ showLeftArrow: true })
  },

  slideForward() {
    const { parentWidth, trackWidth } = this.getNodeWidths()
    let nextForward = this.state.left - parentWidth
    const fullForward = parentWidth - trackWidth

    // already is, or is going to be, full forward
    if (nextForward <= fullForward) { nextForward = fullForward }

    this.setState({ left: nextForward }, this.computeSlideAttributes)
  },

  slideBack() {
    const { parentWidth, trackWidth, trackBounds } = this.getNodeWidths()
    let nextBack = this.state.left + parentWidth

    // already is, or is going to be, full back
    if (this.state.left >= 0 || nextBack >= 0) { nextBack = 0 }

    this.setState({ left: nextBack }, this.computeSlideAttributes)
  },

  renderRightArrow() {
    const { slideButtonStyles, icons } = componentStyles

    if (!this.state.showRightArrow) { return }

    return (
      <button
        onClick={e => {
          e.preventDefault()
          this.slideForward()
        }}
        aria-label='next'
        key='navigation-next-btn'
        style={[
          slideButtonStyles.default,
          slideButtonStyles.right
        ]}
      >
        <Icon name='arrowRightSmallBold' />
      </button>
    )
  },

  renderLeftArrow() {
    const { slideButtonStyles } = componentStyles

    if (!this.state.showLeftArrow) { return }

    return (
      <button
        onClick={e => {
          e.preventDefault()
          this.slideBack()
        }}
        aria-label='back'
        key='navigation-back-btn'
        style={[
          slideButtonStyles.default,
          slideButtonStyles.left
        ]}
      >
        <Icon name='arrowLeftSmallBold' />
      </button>
    )
  },

  render() {
    const { containerStyles, innerContainerStyles } = componentStyles
    const { children } = this.props

    if (!children) { return null }

    return (
      <div style={containerStyles}>
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
})

export default Radium(ScrollTrack)
