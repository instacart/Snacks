import React from 'react'
import styles from './styles'
import NavGroup from './NavGroup'
import NavLink from './NavLink'
import data from './data'
import CarrotIcon from './CarrotIcon'
import Search from './Search'

function Navigation() {
  const navigationlinks = data.map((navGroup) => {
    if(navGroup.role === 'link') {
      return (
        <NavLink
          key={navGroup.id}
          title={navGroup.heading}
          path={navGroup.path}
          style={styles.navGroupTitle}
        />
      )
    }
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
      <CarrotIcon />
      <Search />
      {navigationlinks}
    </div>
  )
}
export default Navigation
