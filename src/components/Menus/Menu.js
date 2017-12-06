import React             from 'react'
import PropTypes         from 'prop-types'

const styles = {
  borderRadius: '4px',
  backgroundColor: '#ffffff',
  boxShadow: '0 3px 10px 0 rgba(0, 0, 0, 0.16), 0 3px 10px 0 rgba(0, 0, 0, 0.23)',
  display: 'inline-block',
  padding: '8px 0',
  overflowY: 'auto',
  userSelect: 'none',
  maxHeight: '500px',
  outline: 'none'
}

class Menu extends React.Component {
  static propTypes = {
    /** aria-hidden HTML attribute */
    ariaHidden: PropTypes.bool,
    /** MenuItems or Divider */
    children: PropTypes.node.isRequired,
    /** Callback function fired on key down */
    onKeyDown: PropTypes.func,
    /** Callback function fired when a MenuItem is selected */
    onSelect: PropTypes.func,
    /** Callback function fired when a Menu is blurred */
    onBlur: PropTypes.func,
    /** Role HTML attribute */
    role: PropTypes.string,
    /** Customize style of menu parent */
    style: PropTypes.shape({})
  }

  static defaultProps = {
    role: 'menu',
    ariaHidden: false,
    style: {},
  }

  state = {
    currentTabIndex: null
  }

  handleClick = (option, index) => {
    const { onSelect } = this.props

    onSelect && onSelect(option, index)
  }

  handleBlur = (event) => {
    const { onBlur } = this.props
    const currentTarget = event.currentTarget

    setTimeout( () => {
      if (!currentTarget.contains(document.activeElement)) {
        this.setState({currentTabIndex: null}, () => {
          onBlur && onBlur(event)
        })
      }
    }, 0)
  }

  handleKeyDown = (event) => {
    const { onKeyDown } = this.props

    switch(event.key) {
      case 'ArrowDown': {
        event.preventDefault()
        this.incrementTabIndex()
        break
      }
      case 'ArrowUp': {
        event.preventDefault()
        this.decrementTabIndex()
        break
      }
    }

    onKeyDown && onKeyDown(event)
  }

  handleMenuItemFocus = (index) => {
    this.setState({currentTabIndex: index})
  }

  blur() {
    this.menu.blur()
  }

  focus() {
    this.menu.focus()
  }

  incrementTabIndex() {
    this.setState({currentTabIndex: this.nextValidTabIndex()})
  }

  decrementTabIndex() {
    this.setState({currentTabIndex: this.prevValidTabIndex()})
  }

  nextValidTabIndex() {
    const { currentTabIndex } = this.state
    const menuItemChildren = this.getMenuItemChildren()
    const maxIndex = menuItemChildren.length - 1
    const newIndex = currentTabIndex !== null ? currentTabIndex+1 : 0

    for (let index = newIndex; index <= maxIndex; index++) {
      const menuItem = menuItemChildren[index]

      if (this.menuItemIsValid(menuItem)) {
        return index
      }
    }

    return currentTabIndex
  }

  prevValidTabIndex() {
    const { currentTabIndex } = this.state
    const menuItemChildren = this.getMenuItemChildren()

    for (let index = (currentTabIndex-1); index >= 0; index--) {
      const menuItem = menuItemChildren[index]

      if (this.menuItemIsValid(menuItem)) {
        return index
      }
    }

    return currentTabIndex
  }

  menuItemIsValid(menuItem) {
    return menuItem && !menuItem.props.disabled
  }

  getMenuItemChildren() {
    const { children } = this.props
    const menuItemChildren = []

    React.Children.map(children, (child) => {
      if (child.type && child.type.displayName === 'MenuItem') {
        menuItemChildren.push(child)
      }
    })

    return menuItemChildren
  }

  renderChildren() {
    const { children } = this.props
    const { currentTabIndex } = this.state
    let index = 0

    return React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return null
      } else if (child.type && child.type.displayName === 'MenuItem') {
        const component = React.cloneElement(child, {
          index: index,
          focus: currentTabIndex === index,
          onClick: this.handleClick,
          onMenuItemFocus: this.handleMenuItemFocus
        })
        index += 1
        return component
      }

      return child
    })
  }

  render() {
    const {
      ariaHidden,
      style,
      role,
    } = this.props

    const mergedStyles = {
      ...styles,
      ...style
    }

    return (
      <div
        ref={(node) => this.menu = node}
        role={role}
        style={mergedStyles}
        onKeyDown={this.handleKeyDown}
        onBlur={this.handleBlur}
        aria-hidden={ariaHidden}
        tabIndex={-1}
      >
        { this.renderChildren() }
      </div>
    )
  }
}

export default Menu
