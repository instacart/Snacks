import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import {SVGIcon, Grow, Fade, Slide} from 'ic-snacks'
import styles from './styles'
import NavLink from './NavLink'

class NavGroup extends React.PureComponent {
  state = {
    isOpen: false
  }

  handleClick = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  renderLinks = () => {
    const {links} = this.props
    if(links.length === 0) { return }
    return links.map((link) => {
      return (
        <NavLink key={link.id} title={link.title} path={link.path} />
      )
    })
  }

  renderIcon = () => {
    if(this.props.role === 'link') { return }
    return (
      <SVGIcon
        name={this.state.isOpen ? 'arrowUp' : 'arrowDown'}
        style={styles.navGroupIcon}
      />
    )
  }

  render() {
    return (
      <div style={styles.navGroupContainer}>
        <div
          style={styles.navGroupTitleContainer}
          onClick={this.handleClick}
        >
          <div style={styles.navGroupTitle}>{this.props.heading}</div>
          {this.renderIcon()}
        </div>
        <div style={styles.navGroupLinks}>
          <Grow in={this.state.isOpen} transition={75}>
            <Fade in={this.state.isOpen} transition={75}>
              <Slide in={this.state.isOpen} transition={75}>
                {this.renderLinks()}
              </Slide>
            </Fade>
          </Grow>
        </div>
      </div>
    )
  }
}

NavGroup.propTypes = {
  heading: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  role: PropTypes.string.isRequired,
}

export default Radium(NavGroup)
