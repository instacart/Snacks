import React from 'react'
import PropTypes from 'prop-types'
import Radium from 'radium'
import withTheme from '../../styles/themer/withTheme'
import { themePropTypes } from '../../styles/themer/utils'

const noop = () => {} // eslint-disable-line no-empty-function

const getStyles = props => {
  const { action, actionHover } = props.snacksTheme.colors

  return {
    cursor: 'pointer',
    textDecoration: 'none',
    color: action,

    ':hover': {
      color: actionHover,
      textDecoration: 'underline'
    }
  }
}

const Link = props => {
  const styles = getStyles(props)

  return (
    <a
      href={props.href}
      style={[styles, props.style]}
      onClick={e => {
        props.onClick(e, props)
      }}
      {...props.elementAttributes}
    >
      {props.children}
    </a>
  )
}

Link.propTypes = {
  /** `href` attribute for the anchor tag. */
  href: PropTypes.string,

  /** Callback fired when the link is clicked. */
  onClick: PropTypes.func,

  /** The link's text content. */
  children: PropTypes.node,

  /** Optional styles. */
  style: PropTypes.object,

  /** Any addional props. */
  elementAttributes: PropTypes.object,

  /** Snacks theme attributes provided by `Themer` */
  snacksTheme: themePropTypes
}

Link.defaultProps = {
  href: '#',
  onClick: noop
}

export default withTheme(Radium(Link))
