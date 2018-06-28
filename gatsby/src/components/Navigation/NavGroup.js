import React from 'react'
import PropTypes from 'prop-types'
import {SVGIcon} from 'ic-snacks'
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
    if(links.length === 0 || !this.state.isOpen) { return }
    return links.map((link) => {
      return (
        <NavLink key={link.id} title={link.title} path={link.path} />
      )
    })
  }

  render() {
    return (
      <div style={styles.navGroupContainer}>
        <div
          style={styles.navGroupTitleContainer}
          onClick={this.handleClick}
        >
          <div style={styles.navGroupTitle}>{this.props.heading}</div>
          <SVGIcon
            name={this.state.isOpen ? 'arrowUp' : 'arrowDown'}
            style={styles.navGroupIcon}
          />
        </div>
        <div style={styles.navGroupLinks}>
          {this.renderLinks()}
        </div>
      </div>
    )
  }
}

NavGroup.propTypes = {
  heading: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  role: PropTypes.array.isRequired,
}

export default NavGroup
