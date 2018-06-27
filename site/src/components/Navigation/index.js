import React from 'react'
import styles from './styles'
import NavGroup from './NavGroup'

export default ({ children }) =>
  <div style={styles.container}>
    <NavGroup title='Foundations' isActive={false} />
    {children}
  </div>
