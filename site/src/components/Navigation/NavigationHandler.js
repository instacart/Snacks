import React from 'react'
import Radium from 'radium'
import {Link} from 'react-router-dom'
import FlipMove from 'react-flip-move'
import styles from './styles'
import NavGroup from './NavGroup'
import NavigationLink from './NavigationLink'
import data from './data'
import CarrotIcon from './CarrotIcon'
import Search from './Search'

class NavigationHandler extends React.Component {
  state = {
    searchTerm: ''
  }

  handleSearchChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  handleClearSearch = () => {
    this.setState({searchTerm: ''})
  }

  matches = (input) => {
    const {searchTerm} = this.state
    if(!searchTerm) return false
    const matcher = new RegExp(searchTerm.split('').join('.*'), 'i')
    return input.match(matcher)
  }

  searchTermInGroup = (navGroup) => {
    return navGroup.links.some((link) => (
      this.matches(link.title))
    )
  }

  renderLinks = () => {
    const { searchTerm } = this.state
    return (
      <FlipMove enterAnimation="fade" leaveAnimation="fade" duration={100}>
        {
          data.map((navGroup) => {
            if(navGroup.role === 'link') {
              if(searchTerm && !this.matches(navGroup.heading)) { return }
              return (
                <NavigationLink
                  key={navGroup.id}
                  title={navGroup.heading}
                  path={navGroup.path}
                  style={styles.navGroupTitle}
                />
              )
            }
            const resultInGroup = this.searchTermInGroup(navGroup)

            if(searchTerm && !resultInGroup) { return }
            return (
              <NavGroup
                key={navGroup.id}
                heading={navGroup.heading}
                links={navGroup.links.filter(({title}) => (
                  !searchTerm || this.matches(title)
                ))}
                role={navGroup.role}
                searchTerm={searchTerm}
                resultInGroup={resultInGroup}
              />
            )
          })
        }
      </FlipMove>
    )
  }


  render() {
    return (
      <div style={styles.container}>
        <Link to='/' style={styles.logo}>
          <CarrotIcon style={styles.carrotIcon} />
          <div style={styles.title}>Snacks</div>
        </Link>
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
