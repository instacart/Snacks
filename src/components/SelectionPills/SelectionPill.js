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
      fontSize: 14,
      height: 32,
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
        backgroundColor: colors.GRAY_93,
      },

      ':focus': {
        textDecoration: 'none',
        backgroundColor: colors.GRAY_93,
      },
    },
  },
}

const checkBoxOverrideStyle = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  clippath: 'inset(50%)',
  height: 1,
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: 1,
}



// const Checkbox = props => (
//   <input
//     type="checkbox"
//     checked={isSelected}
//     disabled={isDisabled}
//     aria-label={aria.label}
//     {...props}
//   />
// )

class SelectionPill extends React.PureComponent {
  static propTypes = {
    /** Required unique identifier for the checkbox */
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

    /** Any additonal props to add to the element (e.g. data attributes). */
    elementAttributes: PropTypes.object,

    /** Any additonal props to add to the inner a element (e.g. data attributes). */
    anchorItemAttributes: PropTypes.object,

    /** determines wether or not active styles are applied */
    isSelected: PropTypes.bool,
    /** Callback function called after pill click
     * @param {SyntheticEvent} event The react `SyntheticEvent`
     * @param {props} object All the props passed to the component
     */
    onClick: PropTypes.func,
    /** url used for href property */

    snacksTheme: themePropTypes,
    /** text to appear inside pill */
    text: PropTypes.string,
  }

  static defaultProps = {
    elementAttributes: {},
    isSelected: false,
  }

  state = {
    isSelected: this.props.isSelected,
  }

  handleChange = (event, props) => {
    // const { onChange } = this.props
    // const { isSelected } = this.state

    this.setState({ isSelected: !props.isSelected })
    // onChange(event, { ...this.props, isSelected: !isSelected })
    console.log(props.isSelected)
  }

  render() {
    const { id, snacksTheme, text } = this.props
    const { isSelected } = this.state
    const { primaryForeground } = snacksTheme.colors
    const activeStyles = {
      backgroundColor: setAlpha(primaryForeground, .1),
      fontWeight: 600,
      borderColor: primaryForeground,


      ':hover': {
        backgroundColor: primaryForeground,
      },
      ':focus': {
        backgroundColor: primaryForeground,
      },
    }

    return (
      <li style={styles.container} {...this.props.elementAttributes}>
        <Checkbox
          id={id}
          onChange={this.handleChange}
          style={{
            wrapEl: {
              ...styles.main.default,
              color: primaryForeground,
              ...(isSelected && activeStyles)
            },
            button: checkBoxOverrideStyle,
            inputBtn: {
              height: 32,
              borderRadius: 24,
            }
          }}
        >
          {text}
        </Checkbox>
      </li>
    )
  }
}

export default withTheme(Radium(SelectionPill))
