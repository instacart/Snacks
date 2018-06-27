import React from 'react'
import PropTypes from 'prop-types'
import {SVGIcon} from 'ic-snacks'
import styles from './styles'

function NavGroup({title, isActive}) {
  return (
    <div style={styles.navGroup}>
      <div style={styles.navGroupTitle}>{title}</div>
      <SVGIcon
        name={isActive ? 'arrowUp' : 'arrowDown'}
        style={styles.navGroupIcon}
      />
    </div>
  )
}

NavGroup.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
}

export default NavGroup
