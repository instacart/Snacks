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
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  path: PropTypes.string,
  text: PropTypes.string
}

export default Radium(NavigationPill)
