import React from 'react'
import PropTypes from 'prop-types'
import Radium, {getState} from 'radium'
import SVGIcon from '../../../../../src/components/SVGIcon/SVGIcon'
import * as styles from './styles'

class NavGroup extends React.PureComponent {
  renderIcon = () => {
    return (
      <SVGIcon
        name='arrowDown'
        style={{
          ...styles.icon,
          ...(this.props.isOpen && styles.iconOpen),
          ...(Radium.getState(this.state, this.props.key, ':hover') &&
            styles.iconHover)
        }}
        size="small"
      />
    )
  }

  render() {
    return (
      <div
        style={styles.container}
        onClick={this.props.onClick}
        key={this.props.key}
      >
        <div style={{
          ...styles.navGroupTitle,
          ...(Radium.getState(this.state, this.props.key, ':hover') &&
            styles.navGroupTitleHover)
        }}>
          {this.props.heading}
        </div>
        {this.renderIcon()}
      </div>
    )
  }
}

NavGroup.propTypes = {
  heading: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Radium(NavGroup)
