import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import Radium               from 'radium'
import { colors }           from '../../styles'

const styles = {
  root: {
    backgroundColor: 'rgba(233, 0, 56, 0.1)',
    borderRadius: '4px',
    color: colors.RED_500,
    fontSize: '15px',
    marginBottom: '12px',
    paddingTop: '15px',
    paddingRight: '15px',
    paddingBottom: '15px',
    paddingLeft: '15px'
  }
}

@Radium
class ServerError extends Component {
  static propTypes = {
    /** Override styles */
    style: PropTypes.object,
    /** Error text */
    text: PropTypes.string
  }

  render() {
    const {
      style,
      text
    } = this.props

    return (
      <div
        style={[styles.root, style]}
        aria-live={'assertive'}
        aria-atomic={true}
      >
        {text}
      </div>
    )
  }
}

export default ServerError
