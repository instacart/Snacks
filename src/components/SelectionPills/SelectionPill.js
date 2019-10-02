import React from 'react'
import tinycolor from 'tinycolor2'
import PropTypes from 'prop-types'
import Radium from 'radium'
import colors from '../../styles/colors'
import withTheme from '../../styles/themer/withTheme'
import Checkbox from '../Buttons/Checkbox'
import { themePropTypes } from '../../styles/themer/utils'
import spacing from '../../styles/spacing'
import { setAlpha } from '../../utils'

const styles = {
  container: {
    display: 'inline-block',
  },
  main: {
    default: {
      fontWeight: 600,
      fontSize: 14,
      height: 32,
      lineHeight: '32px',
      borderRadius: 24,
      display: 'block',
      ...spacing.PADDING_X_SM,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: '4px',
      marginRight: '4px',
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: colors.GRAY_88,
      transition: 'background-color 150ms ease-in-out',

      ':hover': {
        textDecoration: 'none',
      },
    },
  },
  checkBoxOverrideStyle: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    clippath: 'inset(50%)',
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    whiteSpace: 'nowrap',
  }
}

class SelectionPill extends React.PureComponent {
  static propTypes = {
    /** Required unique identifier for the checkbox */
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

    /** Any additonal props to add to the list element (e.g. data attributes). */
    listElementAttributes: PropTypes.object,

    /** Any additonal props to add to the checkbox element (e.g. data attributes). */
    elementAttributes: PropTypes.object,

    /** determines wether or not selected styles are applied and start is a selected state */
    isSelected: PropTypes.bool,

    /** Callback function called after pill click
     * @param {SyntheticEvent} event The react `SyntheticEvent`
     * @param {props} object All the props passed to the component
     */
    onClick: PropTypes.func,

    /** Callback function called after pill gained focus
     * @param {SyntheticEvent} event The react `SyntheticEvent`
     * @param {props} object All the props passed to the component
     */
    onFocus: PropTypes.func,

    /** Callback function called after pill has lost focus
      * @param {SyntheticEvent} event The react `SyntheticEvent`
      * @param {props} object All the props passed to the component
      */
    onBlur: PropTypes.func,

    snacksTheme: themePropTypes,
    /** text to appear inside pill */
    text: PropTypes.string,

  /** Optional style overrides. */
    style: PropTypes.object,
  }

  static defaultProps = {
    elementAttributes: {},
    isSelected: false,
  }

  state = {
    isSelected: this.props.isSelected,
    isFocused: false,
  }

  handleChange = event => {
    const { onClick } = this.props
    const { isSelected } = this.state

    this.setState({ isSelected: !isSelected })
    onClick(event, { ...this.props, isSelected: !isSelected })
  }

  toggleFocus = () => {
    const { isFocused } = this.state
    this.setState({ isFocused: !isFocused })
  }

  handleFocus = event => {
    const { onFocus } = this.props
    const { isFocused } = this.state

    this.toggleFocus()
    onFocus(event, { ...this.props, isFocused: !isFocused })
  }

  handleBlur = event => {
    const { onBlur } = this.props
    const { isFocused } = this.state

    this.toggleFocus()
    onBlur(event, { ...this.props, isFocused: !isFocused })
  }

  render() {
    const { id, snacksTheme, text } = this.props
    const { isSelected, isFocused } = this.state
    const { primaryForeground } = snacksTheme.colors
    const backgroundColor = setAlpha(primaryForeground, 0.1)
    const activeStyles = {
      backgroundColor,
      borderColor: primaryForeground,
      ':hover': {
        backgroundColor: setAlpha(primaryForeground, 0.2),
      },
    }

    const mainStyles = {
      color: primaryForeground,

      ':hover': {
        backgroundColor,
      },
    }

    const focusStyles = {
      outline: '5px auto rgb(59, 153, 252)',
      borderColor: primaryForeground,
    }

    return (
      <li style={styles.container} {...this.props.listElementAttributes}>
        <Checkbox
          id={id}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          style={{
            label: {
              ...styles.main.default,
              ...mainStyles,
              ...(isSelected && activeStyles),
              ...(isFocused && focusStyles),
            },
            button: styles.checkBoxOverrideStyle,
          }}
          {...this.props.elementAttributes}
      >
          {text}
        </Checkbox>
      </li>
    )
  }
}

export default withTheme(Radium(SelectionPill))
