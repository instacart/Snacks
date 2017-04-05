import React           from 'react'
import ReactDOM        from 'react-dom'
import Radium          from 'radium'
import Icon            from '../Icon/Icon'
import componentStyles from './NavigationPillStyles'
import NavigationPill  from './NavigationPill'
import _               from 'underscore'

const NavigationPills = React.createClass({
  propTypes: {
    pills: React.PropTypes.array,
    onPillClick: React.PropTypes.func,
    label: React.PropTypes.string,
    activePill: React.PropTypes.string
  },

  getInitialState() {
    return {
      showLeftArrow: false,
      showRightArrow: false,
      left: 0
    }
  },

  componentDidMount() {
    this.debouncdComputeSlideAttributes = _.debounce(this.computeSlideAttributes, 200)
    this.computeSlideAttributes()

    window.addEventListener('resize', this.debouncdComputeSlideAttributes)
  },

  componentDidUpdate(prevProps) {
    const prevPills = prevProps.pills || []
    const newPills = this.props.pills || []
    const prevLabel = prevProps.label
    const newLabel = this.props.label

    if (!_.isEqual(prevPills, newPills) || prevLabel !== newLabel) {
      this.computeSlideAttributes()
    }
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.debouncdComputeSlideAttributes)
  },

  getNodeWidths() {
    const parentNode = ReactDOM.findDOMNode(this)
    const parentNodeBounds = parentNode && parentNode.getBoundingClientRect()
    const pillsTrackNode = ReactDOM.findDOMNode(this.refs.pillsTrack)
    const pillsTrackNodeBounds = pillsTrackNode && pillsTrackNode.getBoundingClientRect()
    const parentWidth = parentNodeBounds && parentNodeBounds.width
    const trackWidth = pillsTrackNode && (pillsTrackNode.offsetLeft + pillsTrackNode.scrollWidth)
    const trackBounds = pillsTrackNodeBounds

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

  renderLabel() {
    if (!this.props.label) { return }

    return <label style={componentStyles.labelStyles}>{this.props.label}</label>
  },

  renderPill(pill, idx) {
    return (
      <NavigationPill
        isActive={this.props.activePill === pill.text}
        onClick={e => this.props.onPillClick(e, pill)}
        text={pill.text}
        key={`pill-${idx}`}
      />
    )
  },

  renderRightArrow() {
    const { slideButtonStyles, icons } = componentStyles

    if (!this.state.showRightArrow) { return }

    return (
      <button
        onClick={(e) => {e.preventDefault(); this.slideForward()} }
        aria-label='next'
        key='navigation-pills-next-btn'
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
        onClick={(e) => {e.preventDefault(); this.slideBack()} }
        aria-label='back'
        key='navigation-pills-back-btn'
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
    const { containerStyles, innerContainerStyles, pillsContainerStyles } = componentStyles
    if (!this.props.pills || this.props.pills.length <= 1) { return null }

    return (
      <div style={containerStyles}>
        {this.renderLeftArrow()}
        <div style={[
            innerContainerStyles,
            { left: this.state.left }
          ]}>
          <div ref='pillsTrack'>
            {this.renderLabel()}
            <ul style={pillsContainerStyles}>
              {this.props.pills.map(this.renderPill)}
            </ul>
          </div>
        </div>
        {this.renderRightArrow()}
      </div>
    )
  }
})

export default Radium(NavigationPills)
