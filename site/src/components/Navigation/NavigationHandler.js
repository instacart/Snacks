import React from 'react'
import Radium from 'radium'
import styles from './styles'
import NavGroup from './NavGroup'
import NavLink from './NavLink'
import data from './data'
import CarrotIcon from './CarrotIcon'
import Search from './Search'

class NavigationHandler extends React.PureComponent {
  state = {
    searchTerm: ''
  }

  handleSearchChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  handleClearSearch = () => {
    this.setState({searchTerm: ''})
  }

  includesSearchTerm = (string) => {
    const { searchTerm } = this.state
    if (!searchTerm) { return false}
    return string.toLowerCase().includes(searchTerm.toLowerCase())
  }

  searchTermInGroup = (navGroup) => {
    const { searchTerm } = this.state
    let found = false
    navGroup.links.forEach((link) => {
      if(this.includesSearchTerm(link.title)) {
        found = true
      }
    })
    return found
  }

  renderLinks = () => {
    const { searchTerm } = this.state
    return data.map((navGroup) => {
      if(navGroup.role === 'link') {
        if(searchTerm && !this.includesSearchTerm(navGroup.heading)) { return }
        return (
          <NavLink
            key={navGroup.id}
            title={navGroup.heading}
            path={navGroup.path}
            style={styles.navGroupTitle}
          />
        )
      }
      if(searchTerm && !this.searchTermInGroup(navGroup)) { return }
      return (
        <NavGroup
          key={navGroup.id}
          heading={navGroup.heading}
          links={navGroup.links}
          role={navGroup.role}
          searchTerm={searchTerm}
        />
      )
    })
  }


  render() {
    return (
      <div style={styles.container}>
        <CarrotIcon style={styles.carrotIcon} />
        <Search
          onChange={this.handleSearchChange}
          onClear={this.handleClearSearch}
          searchTerm={this.state.searchTerm}
        />
        {this.renderLinks()}
      </div>
    )
  }
}
export default Radium(NavigationHandler)
