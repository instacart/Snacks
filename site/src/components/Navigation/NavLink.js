import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './styles'

function NavLink({title, path, style}) {
  if (!path) { return <div />}
  return (
    <div style={styles.navLinkRow}>
      <Link to={path}
        style={{...styles.navLinkInactive, ...style}}
        activeStyle={{color: '#FF8200'}}
      >
        {title}
      </Link>
    </div>
  )
}

NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  style: PropTypes.object,
}

export default NavLink
