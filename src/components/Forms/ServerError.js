import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../styles'

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
    paddingLeft: '15px',
  },
}

// eslint-disable-next-line react/prefer-stateless-function
class ServerError extends Component {
  static propTypes = {
    className: PropTypes.string,
    /**
     * Optional style overrides merged into emotion css
     *
     * @deprecated
     * This prop exists for backwards compatibility and will be
     * removed in a future version
     */
    style: PropTypes.object,
    /** Error text */
    text: PropTypes.string,
  }

  render() {
    const { className, style, text } = this.props

    return (
      <div className={className} css={[styles.root, style]} aria-live={'assertive'} aria-atomic>
        {text}
      </div>
    )
  }
}

export default ServerError
