import React from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './styles'

function NavLink({title, path, style}) {
  if (!path) { return <div />}
  return (
    <div style={styles.navLinkRow}>
      <Link to={path}
        style={{...style, ...styles.navLinkInactive}}
        activestyle={{color: '#FF8200'}}
      >
        <span style={styles.navLinkText} >{title}</span>
      </Link>
    </div>
  )
}

NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  style: PropTypes.object,
}

export default Radium(NavLink)
