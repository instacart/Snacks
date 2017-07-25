import React  from 'react'
import Radium from 'radium'
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
  isActive: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  path: React.PropTypes.string,
  text: React.PropTypes.string
}

export default Radium(NavigationPill)
