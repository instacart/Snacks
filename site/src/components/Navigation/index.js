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
    searchTerm: '',
    openSections: {},
  }

  handleSearchChange = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  handleClearSearch = () => {
    this.setState({searchTerm: ''})
  }

  handleToggle(header) {
    const {openSections: {...openSections}} = this.state
    if(this.isOpen(header)) {
      delete openSections[header]
    } else {
      openSections[header] = true
    }
    this.setState({openSections})
  }

  matches = (input) => {
    const {searchTerm} = this.state
    if(!searchTerm) return true
    const matcher = new RegExp(searchTerm.split('').join('.*'), 'i')
    return input.match(matcher)
  }

  isOpen(header) {
    if(this.state.searchTerm) return true
    return this.state.openSections[header]
  }

  searchTermInGroup = (header) => {
    return header.links.some((link) => (
      this.matches(link.title))
    )
  }

  renderLinks = () => {
    return (
      <FlipMove enterAnimation='fade' leaveAnimation='fade' duration={150}>
        {
          Object.keys(data).reduce((rows, header) => {
            const pages = Object.keys(data[header])
              .filter(page => this.matches(page))
              .map(page => (
                <NavigationLink
                  key={`link-${page}`}
                  title={page}
                  path={data[header][page]}
                />
              ))
            return [
              ...rows,
              pages.length > 0 && (
                <NavGroup
                  key={`group-${header}`}
                  heading={header}
                  isOpen={this.isOpen(header)}
                  onClick={() => this.handleToggle(header)}
                />
              ),
              ...(this.isOpen(header) ? pages : []),
            ]
          }, [])
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
