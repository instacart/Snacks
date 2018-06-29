import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import FlipMove from 'react-flip-move'
import SVGIcon from '../../../../src/components/SVGIcon/SVGIcon'
import styles from './styles'
import NavigationLink from './NavigationLink'

class NavGroup extends React.Component {
  state = {
    isOpen: false
  }

  handleClick = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  renderLinks = () => {
    return this.props.links.map(link => (
      <NavigationLink
        key={link.id}
        title={link.title}
        path={link.path}
      />
    ))
  }

  renderIcon = () => {
    if(this.props.role === 'link') { return }
    return (
      <SVGIcon
        name={'arrowDown'}
        style={{
          ...styles.navGroupIcon,
          ...(this.state.isOpen && styles.navGroupIconOpen),
          ...(Radium.getState(this.state, `${this.props.id}-navGroup`, ':hover') &&
            styles.navGroupIconHover)
        }}
        size="small"
      />
    )
  }

  render() {
    const {resultInGroup} = this.props
    return (
      <div style={styles.navGroupContainer}>
        <div
          style={styles.navGroupTitleContainer}
          onClick={this.handleClick}
          key={`${this.props.id}-navGroup`}
        >
          <div style={{
            ...styles.navGroupTitle,
            ...(Radium.getState(this.state, `${this.props.id}-navGroup`, ':hover') &&
              styles.navGroupTitleHover)
          }}>
            {this.props.heading}
          </div>
          {this.renderIcon()}
        </div>
        <div style={styles.navGroupLinks}>
          <FlipMove enterAnimation="fade" leaveAnimation="fade" duration={100}>
            {(this.state.isOpen || resultInGroup) && this.renderLinks()}
          </FlipMove>
        </div>
      </div>
    )
  }
}

NavGroup.propTypes = {
  heading: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  role: PropTypes.string.isRequired,
  resultInGroup: PropTypes.bool,
}

export default Radium(NavGroup)
