import React from 'react'
import { spacings } from '../../styles/spacing'
import PropTypes from 'prop-types'
import Radium from 'radium'
import withTheme from '../../styles/themer/withTheme'

const getStyles = props => {
  const { color: colorProp, snacksTheme } = props
  const color = snacksTheme.colors[colorProp] || colorProp

  return {
    backgroundColor: color,
    color: 'white',
    borderRadius: spacings.SM,
    padding: `0 ${spacings.XS}px`,
    margin: `${spacings.XS}px`,
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
