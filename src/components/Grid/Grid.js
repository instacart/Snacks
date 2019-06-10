import React from 'react'
import PropTypes from 'prop-types'
import responsive from '../../styles/responsive'

const styles = {
  marginTop: 0,
  marginRight: 'auto',
  marginBottom: 0,
  marginLeft: 'auto',

  [responsive.xs]: {
    width: '100%',
  },

  [responsive.sm]: {
    width: responsive.screenWidths.sm,
  },

  [responsive.md]: {
    width: responsive.screenWidths.md,
  },

  [responsive.mdLg]: {
    width: responsive.screenWidths.mdLg,
  },

  [responsive.lg]: {
    width: responsive.screenWidths.lg,
  },

  [responsive.xl]: {
    width: responsive.screenWidths.xl,
  },
}

const Grid = props => {
  return <div css={[styles, props.style]}>{props.children}</div>
}

Grid.propTypes = {
  children: PropTypes.node,
  /** Optional style overrides */
  style: PropTypes.object,
}

export default Grid
