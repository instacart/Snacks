import React from 'react'
import styles from './styles'
import NavGroup from './NavGroup'
import data from './data'

function Navigation() {

  const navigationlinks = data.map((navGroup) => {
    return (
      <NavGroup
        key={navGroup.id}
        heading={navGroup.heading}
        links={navGroup.links}
        role={navGroup.role}
      />
    )
  })

  return (
    <div style={styles.container}>
      {navigationlinks}
    </div>
  )
}
export default Navigation
