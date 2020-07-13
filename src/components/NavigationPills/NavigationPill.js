import React from 'react'
import PropTypes from 'prop-types'
import Radium from '@instacart/radium'
import colors from '../../styles/colors'
import withTheme from '../../styles/themer/withTheme'
import { themePropTypes } from '../../styles/themer/utils'
import spacing from '../../styles/spacing'

const styles = {
  container: {
    display: 'inline-block',
  },
  main: {
    default: {
      paddingTop: '12px',
      paddingRight: spacing.SM,
      paddingBottom: '12px',
      paddingLeft: spacing.SM,
      display: 'block',
      fontSize: '14px',
      backgroundColor: colors.GRAY_97,
      borderRadius: '24px',
      marginTop: 0,
      marginBottom: 0,
      marginLeft: '4px',
      marginRight: '4px',
      lineHeight: '1.2',
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

const NavigationPill = props => {
  const { isActive, snacksTheme, text } = props
  const { primaryForeground } = snacksTheme.colors
  const activeStyles = {
    backgroundColor: primaryForeground,
    color: colors.WHITE,

    ':hover': {
      backgroundColor: primaryForeground,
    },
    ':focus': {
      backgroundColor: primaryForeground,
    },
  }

  return (
    <li style={styles.container} {...props.elementAttributes}>
      <a
        href={props.path || '#'}
        data-bypass
        onClick={e => props.onClick(e, props)}
        style={[styles.main.default, { color: primaryForeground }, isActive && activeStyles]}
        {...props.anchorItemAttributes}
        key={`pill-anchor-${text}`}
      >
        {text}
      </a>
    </li>
  )
}

NavigationPill.propTypes = {
  /** Any additional props to add to the element (e.g. data attributes). */
  elementAttributes: PropTypes.object,

  /** Any additional props to add to the inner a element (e.g. data attributes). */
  anchorItemAttributes: PropTypes.object,

  /** determines wether or not active styles are applied */
  isActive: PropTypes.bool,
  /** Callback function called after pill click
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {props} object All the props passed to the component
   */
  onClick: PropTypes.func,
  /** url used for href property */
  path: PropTypes.string,
  /** snacks theme attributes */
  snacksTheme: themePropTypes,
  /** text to appear inside pill */
  text: PropTypes.string,
}

NavigationPill.defaultProps = {
  elementAttributes: {},
  isActive: false,
}

export default withTheme(Radium(NavigationPill))
