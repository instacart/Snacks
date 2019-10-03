import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import colors from '../../styles/colors'
import withTheme from '../../styles/themer/withTheme'
import Checkbox from '../Buttons/Checkbox'
import { themePropTypes } from '../../styles/themer/utils'
import spacing from '../../styles/spacing'
import { setAlpha } from '../../utils'

const getStyles = (props, primaryForeground) => {
  const backgroundColor = setAlpha(primaryForeground, 0.1)

  return {
    container: {
      display: 'inline-block',
    },
    checkbox: {
      display: 'block',
      fontWeight: 600,
      fontSize: 14,
      height: 32,
      lineHeight: '32px',
      borderRadius: 24,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: colors.GRAY_88,
      color: primaryForeground,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: '4px',
      marginRight: '4px',
      ...spacing.PADDING_X_SM,
      transition: 'background-color 150ms ease-in-out',
      ':hover': {
        backgroundColor,
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
      height: 1,
      width: 1,
    },
    focusStyles: {
      outline: '5px auto rgb(59, 153, 252)',
      borderColor: primaryForeground,
    },
    disabledStyles: {
      color: setAlpha(primaryForeground, 0.6),
      backgroundColor: colors.GRAY_97,
      ':hover': {
        backgroundColor: colors.GRAY_97,
      },
    },
    activeStyles: {
      backgroundColor,
      borderColor: primaryForeground,
      ':hover': {
        backgroundColor: setAlpha(primaryForeground, 0.3),
      },
    },
  }
}

class SelectionPill extends React.PureComponent {
  static propTypes = {
    /** Required unique identifier for the pill */
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

    /** Any additional props to add to the list element (e.g. data attributes). */
    listElementAttributes: PropTypes.object,

    /** Any additional props to add to the checkbox element (e.g. data attributes). */
    elementAttributes: PropTypes.object,

    /** Determines wether or not selected styles are applied and start is a selected state */
    isSelected: PropTypes.bool,

    /** Determines Whether or not the pill is disabled. */
    isDisabled: PropTypes.bool,

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
    /** Text to appear inside pill */
    text: PropTypes.string,

    /** Optional style overrides. */
    style: PropTypes.object,

    /** Aria overrides for accessibility (i.e. use if label is not descriptive enough for screen readers) */
    aria: PropTypes.shape({
      label: PropTypes.string,
    }),
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
    const { id, snacksTheme, text, style, aria, isDisabled } = this.props
    const { isSelected, isFocused } = this.state
    const internalStyles = getStyles(this.props, snacksTheme.colors.primaryForeground)

    return (
      <li style={internalStyles.container} {...this.props.listElementAttributes}>
        <Checkbox
          id={id}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          isDisabled={isDisabled}
          aria={aria}
          style={{
            button: internalStyles.checkBoxOverrideStyle,
            label: {
              ...internalStyles.checkbox,
              ...(isSelected && internalStyles.activeStyles),
              ...(isFocused && internalStyles.focusStyles),
              ...style,
            },
            disabledLabel: internalStyles.disabledStyles,
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
