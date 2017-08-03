import React      from 'react'
import PropTypes  from 'prop-types'
import Radium     from 'radium'
import colors     from '../../styles/colors'
import themer     from '../../styles/themer'

const styles = {
  container: {
    display: 'inline-block'
  },
  main: {
    default: {
      padding: '12px 16px',
      display: 'block',
      fontSize: '14px',
      color: themer.get('colors', 'primaryForeground'),
      backgroundColor: colors.GRAY_97,
      borderRadius: '24px',
      margin: '0 4px',
      lineHeight: '1.2',
      transition: 'background-color 150ms ease-in-out',

      ':hover': {
        textDecoration: 'none',
        backgroundColor: colors.GRAY_93
      },
      ':focus': {
        textDecoration: 'none',
        backgroundColor: colors.GRAY_93,
        outline: 'none'
      }
    },
    active: {
      backgroundColor: themer.get('colors', 'primaryForeground'),
      color: colors.WHITE,

      ':hover': {
        backgroundColor: themer.get('colors', 'primaryForeground')
      },
      ':focus': {
        backgroundColor: themer.get('colors', 'primaryForeground'),
      }
    }
  }
}

const NavigationPill = props => {
  const { isActive, text } = props

  return (
    <li style={styles.container}>
      <a
        href={props.path || '#'}
        data-bypass={true}
        onClick={e => props.onClick(e, props)}
        style={[
          styles.main.default,
          isActive && styles.main.active
        ]}
        key={`pill-anchor-${text}`}
      >
        {text}
      </a>
    </li>
  )
}

NavigationPill.propTypes = {
  /** determines wether or not active styles are applied */
  isActive: PropTypes.bool,
  /** Callback function called after pill click
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {props} object All the props passed to the component
  */
  onClick: PropTypes.func,
  /** url used for href property */
  path: PropTypes.string,
  /** text to appear inside pill */
  text: PropTypes.string
}

NavigationPill.defaultProps = {
  isActive: false
}

export default Radium(NavigationPill)
