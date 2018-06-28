import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styles from './styles'

function NavLink({title, path}) {
  if (!path) { return <div />}
  return (
    <Link to={path} style={styles.navLink} >
      {title}
    </Link>
  )
}

NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.bool.isRequired,
}

export default NavLink
