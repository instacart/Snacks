import React from 'react'
import styles from './styles'
import NavGroup from './NavGroup'

export default ({ children, style }) =>
  <div style={styles.container}>
    <NavGroup title='Foundations' />
    {children}
  </div>
