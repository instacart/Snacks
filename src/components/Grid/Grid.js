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
  return (
    <div className={props.className} css={[styles, props.style]}>
      {props.children}
    </div>
  )
}

Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  /**
   * Optional style overrides merged into emotion css
   *
   * @deprecated
   * This prop exists for backwards compatibility and will be
   * removed in a future version
   */
  style: PropTypes.object,
}

export default Grid
