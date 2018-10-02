import React from 'react'
import spacing from '../../styles/spacing'
import PropTypes from 'prop-types'
import Radium from 'radium'
import withTheme from '../../styles/themer/withTheme'

const getStyles = props => {
  const { color: colorProp, snacksTheme } = props
  const color = snacksTheme.colors[colorProp] || colorProp

  return {
    backgroundColor: color,
    color: 'white',
    borderRadius: spacing.SM,
    paddingTop: 0,
    paddingBottom: 0,
    ...spacing.PADDING_X_XS,
    ...spacing.MARGIN_XS,
    textAlign: 'center',
    display: 'inline-block',
    width: 'auto',
  }
}

const Pill = props => {
  const styles = getStyles(props)

  return (
    <div
      style={[styles, props.style]}
      {...props.elementAttributes}
    >
      {props.children}
    </div>
  )
}

Pill.propTypes = {
  /** Color of the pill. can be hex value or themer color key as string */
  color: PropTypes.string,

  /** The pill's text content. */
  children: PropTypes.node.isRequired,

  /** Optional styles. */
  style: PropTypes.object,

  /** Any addional props. */
  elementAttributes: PropTypes.object
}

Pill.defaultProps = {
  color: '#CC0033'
}

export default withTheme(Radium(Pill))
