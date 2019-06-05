import React from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import Radium from 'radium'
import Menu from './Menu'
import Slide from '../Transitions/Slide'
import Fade from '../Transitions/Fade'

const styles = {
  menuContainer: {
    position: 'absolute',
    width: '100%',
    display: 'block',
    pointerEvents: 'none',
  },
  menuContainerClosed: {
    zIndex: -9000,
    pointerEvents: 'none',
  },
  menuContainerOpen: {
    zIndex: 9000,
    pointerEvents: 'inherit',
  },
  transitionContainer: {
    paddingTop: '2px',
    paddingRight: '5px',
    paddingBottom: '5px',
    paddingLeft: '5px',
    width: '100%',
    transform: 'translateX(-5px)',
  },
}

@Radium
class DropdownMenu extends React.Component {
  static propTypes = {
    /** MenuItems or Divider */
    children: PropTypes.node.isRequired,
    /** React component or HTML that will be used as the dropdown trigger. ie. Button or Icon */
    triggerElement: PropTypes.element,
    /** Open and close menu manually */
    open: PropTypes.bool,
    /** Callback fired on dropdown close */
    onClose: PropTypes.func,
    /** Callback fired on click */
    onClick: PropTypes.func,
    /** Callback fired on dropdown open */
    onOpen: PropTypes.func,
    /** Callback function fired on key down */
    onKeyDown: PropTypes.func,
    /** Requesting to open/close for controlled open component. */
    onRequestChange: PropTypes.func,
    /** Callback function fired when a MenuItem is selected */
    onSelect: PropTypes.func,
    /** Customize style root element */
    style: PropTypes.shape({}),
    /** Customize style of menu parent */
    menuContainerStyle: PropTypes.shape({}),
    /** Props passed to Menu component */
    menuProps: PropTypes.shape({}),
  }

  static defaultProps = {
    open: null,
  }

  state = {
    open: false,
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== null && this.props.open !== nextProps.open) {
      if (nextProps.open) {
        this.open()
      } else {
        this.close()
      }
    }
  }

  handleSelect = (e, option) => {
    const { onSelect, onRequestChange } = this.props

    if (this.controlledOpen()) {
      onRequestChange && onRequestChange(false)
    } else {
      // if multi then do not close
      this.close()
    }

    findDOMNode(this.trigger).focus()
    onSelect && onSelect(e, option)
  }

  handleClick = event => {
    event.preventDefault()
    const { open, onClick, onRequestChange } = this.props

    if (this.controlledOpen()) {
      onRequestChange && onRequestChange(!open)
      return
    }

    if (!this.state.open) {
      this.open()
    } else {
      this.close()
    }
    onClick && onClick(event)
  }

  handleMenuBlur = () => {
    const { onRequestChange } = this.props
    if (this.controlledOpen()) {
      onRequestChange && onRequestChange(false)
    } else {
      this.close()
    }
  }

  handleKeyDown = event => {
    const { onRequestChange } = this.props
    switch (event.key) {
      case 'Enter':
        if (!event.defaultPrevented && this.controlledOpen()) {
          event.preventDefault()
          onRequestChange && onRequestChange(true)
        } else {
          event.preventDefault()
          if (this.state.open) {
            this.close()
          } else {
            this.open()
          }
        }
        break
      case 'Escape':
        event.preventDefault()

        if (this.controlledOpen()) {
          onRequestChange && onRequestChange(false)
        } else {
          this.state.open && this.close()
        }
        break
    }
  }

  controlledOpen() {
    return this.props.open !== null
  }

  open() {
    const { onOpen } = this.props
    this.setState({ open: true }, () => {
      this.menu.focus()
      onOpen && onOpen()
    })
  }

  close() {
    const { onClose } = this.props
    this.setState({ open: false }, () => {
      this.menu.blur()
      onClose && onClose()
    })
  }

  renderTriggerElement() {
    const { triggerElement } = this.props
    const { open } = this.state
    if (triggerElement) {
      return React.cloneElement(triggerElement, {
        ref: node => {
          this.trigger = node
          const { ref } = triggerElement
          if (typeof ref === 'function') {
            ref(node)
          }
        },
        onMouseDown: this.handleClick,
        elementAttributes: {
          'aria-expanded': open,
        },
        'aria-expanded': open,
      })
    }
  }

  render() {
    const { style, children, menuProps, menuContainerStyle } = this.props

    const isOpen = this.state.open

    return (
      <div onKeyDown={this.handleKeyDown} style={style}>
        <div style={{ position: 'relative' }}>{this.renderTriggerElement()}</div>
        <div
          style={[
            styles.menuContainer,
            menuContainerStyle,
            isOpen && styles.menuContainerOpen,
            !isOpen && styles.menuContainerClosed,
          ]}
        >
          <Slide in={isOpen} axis="y" style={styles.transitionContainer} offset={30}>
            <Fade in={isOpen} transitionTime={200}>
              <Menu
                ref={node => (this.menu = node)}
                ariaHidden={!isOpen}
                onBlur={this.handleMenuBlur}
                onSelect={this.handleSelect}
                {...menuProps}
              >
                {children}
              </Menu>
            </Fade>
          </Slide>
        </div>
      </div>
    )
  }
}

export default DropdownMenu
