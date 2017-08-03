import React      from 'react'
import PropTypes  from 'prop-types'
import Radium     from 'radium'
import pillStyles from './NavigationPillStyles'

const NavigationPill = props => {
  const { isActive, text } = props

  return (
    <li style={pillStyles.pill.container}>
      <a
        href={props.path || '#'}
        data-bypass={true}
        onClick={e => props.onClick(e, props)}
        style={[
          pillStyles.pill.main.default,
          isActive && pillStyles.pill.main.active
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
