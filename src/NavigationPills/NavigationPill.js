import React  from 'react'
import Radium from 'radium'
import NavigationPillStyles from './NavigationPillStyles'

function NavigationPill(props) {
  const { isActive, text } = props
  const pillStyles = NavigationPillStyles.pill

  return (
    <li style={pillStyles.container}>
      <a
        href={props.path || '#'}
        data-bypass={true}
        onClick={e => props.onClick && props.onClick(e, props)}
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
