import React     from 'react'
import PropTypes from 'prop-types'
import Radium    from 'radium'
import { pill as pillStyles } from './NavigationPillStyles'

const NavigationPill = props => {
  const { isActive, text } = props

  return (
    <li style={pillStyles.container}>
      <a
        href={this.props.path || '#'}
        data-bypass={true}
        onClick={e => this.props.onClick(e, this.props)}
        style={[
          pillStyles.main.default,
          isActive && pillStyles.main.active
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
