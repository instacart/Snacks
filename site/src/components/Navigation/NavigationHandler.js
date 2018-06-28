import React from 'react'
import Radium from 'Radium'
import styles from './styles'
import NavGroup from './NavGroup'
import NavLink from './NavLink'
import data from './data'
import CarrotIcon from './CarrotIcon'
import Search from './Search'

class NavigationHandler extends React.PureComponent {
  state = {
    searchTerm: null
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

  renderLinks = () => {
    const { searchTerm } = this.state
    return data.map((navGroup) => {
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
      if(searchTerm && !this.includesSearchTerm(navGroup.heading)) { return }
      return (
        <NavGroup
          key={navGroup.id}
          heading={navGroup.heading}
          links={navGroup.links}
          role={navGroup.role}
          searchTerm={this.state.searchTerm}
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
