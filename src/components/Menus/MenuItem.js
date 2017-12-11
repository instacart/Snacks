import React             from 'react'
import PropTypes         from 'prop-types'
import Radium            from 'radium'
import { colors }        from '../../styles'
import Icon              from '../Icon/Icon'

/* eslint jsx-a11y/no-noninteractive-tabindex: 0 */

const styles = {
  root: {
    backgroundColor: '#ffffff',
    padding: '16px 0',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: colors.GRAY_97
    },
    ':focus': {
      backgroundColor: colors.GRAY_97
    }
  },
  focus: {
    backgroundColor: colors.GRAY_97
  },
  disabled: {
    color: colors.GRAY_74,
    backgroundColor: '#FFF',
    pointerEvents: 'none'
  },
  menuitem: {
    display: 'table'
  },
  iconContainer: {
    display: 'table-cell',
    verticalAlign: 'middle',
    paddingLeft: '16px'
  },
  label: {
    padding: '0 16px',
    whiteSpace: 'nowrap'
  },
  leftIconStyles: {
    fontSize: '22px'
  }
}

@Radium
class MenuItem extends React.Component {
  static propTypes = {
    /** Completely override the MenuItem rendering and create a custom MenuItem */
    children        : PropTypes.node,
    /** Disable the MenuItem */
    disabled        : PropTypes.bool,
    /** Focus the MenuItem */
    focus           : PropTypes.bool,
    /** Index of MenuItem within Menu. Used for currentIndex */
    index           : PropTypes.number,
    /** Text for the menu item */
    label           : PropTypes.string.isRequired,
    /** Override styles of label */
    labelStyles     : PropTypes.shape({}),
    /** Icon name or Icon component displayed left of label*/
    leftIcon        : PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    /** Override styles for leftIcon */
    leftIconStyles  : PropTypes.shape({}),
    /** Callback function fired when the menu item is selected. Sends option object as {value:, label:} and index */
    onClick         : PropTypes.func,
    /** Callback function fired when the menu item is focused. */
    onFocus         : PropTypes.func,
    /** Used by menu to keep track of current focus index. */
    onMenuItemFocus : PropTypes.func,
    /** Whether or not to prevent default when menu item is clicked */
    preventDefault     : PropTypes.bool,
    /** Role HTML attribute */
    role            : PropTypes.string,
    /** Customize style of MenuItem */
    style           : PropTypes.shape({}),
    /** Override tabIndex property*/
    tabIndex        : PropTypes.number,
    /** Whether or not to use use the tabIndex HTML attribute */
    useTabIndex     : PropTypes.bool,
    /** Underlying value. Also, passed into onClick function */
    value           : PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool
    ]).isRequired,
  }

  static defaultProps = {
    disabled: false,
    role: 'menuitem',
    useTabIndex: true,
    focus: false,
    preventDefault: true
  }

  componentWillReceiveProps(nextProps) {
    const { focus } = this.props
    if (!focus && nextProps.focus) {
      setTimeout( () => {
        this.menuItem.focus()
      }, 0)
    }
  }

  handleClick = (e) => {
    const {
      disabled,
      index,
      onClick,
      value,
      label,
      preventDefault
    } = this.props
    preventDefault && e.preventDefault()

    const option = {value: value, label: label}
    !disabled && onClick && onClick(e, option, index)
  }

  handleKeyDown = (event) => {
    switch(event.key) {
      case 'Enter':
        this.props.preventDefault && event.preventDefault()
        this.handleClick()
    }
  }

  handleFocus = (event) => {
    const { onFocus, onMenuItemFocus, index } = this.props
    onMenuItemFocus && onMenuItemFocus(index)
    onFocus && onFocus(index, event)
  }

  renderLeftIcon() {
    const { leftIcon, leftIconStyles } = this.props
    if (!leftIcon) { return }

    const iconComponent = typeof leftIcon === 'string'
      ? <Icon name={leftIcon} style={[styles.leftIconStyles, leftIconStyles]} />
      : leftIcon

    return (
      <div
        style={styles.iconContainer}
      >
        <div style={{display: 'flex'}}>
          { iconComponent }
        </div>
      </div>
    )
  }

  renderMenuItem() {
    const {
      children,
      label,
      labelStyles,
    } = this.props

    if (children) {
      return children
    }

    return (
      <div style={styles.menuitem}>
        { this.renderLeftIcon() }
        <div style={[styles.label, labelStyles]}>
          { label }
        </div>
      </div>
    )
  }

  render() {
    const {
      disabled,
      role,
      style,
      tabIndex,
      useTabIndex
    } = this.props

    return (
      <div
        ref={(node) => this.menuItem = node}
        role={role}
        style={[
          styles.root,
          style,
          disabled && styles.disabled
        ]}
        onClick={this.handleClick}
        onFocus={this.handleFocus}
        tabIndex={useTabIndex && !disabled && (tabIndex || 0)}
        onKeyDown={this.handleKeyDown}
      >
        { this.renderMenuItem() }
      </div>
    )
  }
}

export default MenuItem
