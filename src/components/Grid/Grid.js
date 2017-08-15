import React      from 'react'
import PropTypes  from 'prop-types'
import Radium     from 'radium'
import responsive from 'styles/responsive'

const styles = {
  margin: '0 auto',

  [responsive.xs]: {
    width: '100%'
  },

  [responsive.sm]: {
    width: responsive.screenWidths.sm
  },

  [responsive.md]: {
    width: responsive.screenWidths.md
  },

  [responsive.mdLg]: {
    width: responsive.screenWidths.mdLg
  },

  [responsive.lg]: {
    width: responsive.screenWidths.lg
  },

  [responsive.xl]: {
    width: responsive.screenWidths.xl
  }
}

const Grid = props => {
  return (
    <div
      style={[
        styles,
        props.styles
      ]}
    >
      { props.children }
    </div>
  )
}

Grid.propTypes = {
  /** Optional style overrides */
  styles: PropTypes.object
}

export default Radium(Grid)
