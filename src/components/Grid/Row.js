import React      from 'react'
import PropTypes  from 'prop-types'
import Radium from 'radium'
import responsive from '../../styles/responsive'

const styles = {
  [responsive.xs]: {
    display: 'block'
  },

  [responsive.sm]: {
    display: 'grid',
    gridTemplateColumns: `repeat(6, ${responsive.columnWidth}px)`
  },

  [responsive.md]: {
    display: 'grid',
    gridTemplateColumns: `repeat(8, ${responsive.columnWidth}px)`
  },

  [responsive.mdLg]: {
    display: 'grid',
    gridTemplateColumns: `repeat(10, ${responsive.columnWidth}px)`
  },

  [responsive.lg]: {
    display: 'grid',
    gridTemplateColumns: `repeat(12, ${responsive.columnWidth}px)`
  },

  [responsive.xl]: {
    display: 'grid',
    gridTemplateColumns: `repeat(14, ${responsive.columnWidth}px)`
  }
}

const Row = props => {
  const getMaxColumnsStyles = () => {
    const { maxColumns } = props

    const override = {
      gridTemplateColumns: `repeat(${maxColumns}, ${responsive.columnWidth}px)`,
      justifyContent: 'center'
    }

    if (maxColumns <= 6) {
      return {
        [responsive.md]: override,
        [responsive.mdLg]: override,
        [responsive.lg]: override,
        [responsive.xl]: override
      }
    } else if (maxColumns <= 8) {
      return {
        [responsive.mdLg]: override,
        [responsive.lg]: override,
        [responsive.xl]: override
      }
    } else if (maxColumns <= 10) {
      return {
        [responsive.lg]:override,
        [responsive.xl]: override
      }
    } else if (maxColumns <= 12) {
      return {
        [responsive.xl]: override
      }
    }

    return {}
  }

  const getFullWidthStyles = () => {
    const { screenWidths } = responsive
    if (!props.forceFullPage) { return {} }

    return {
      width: '100vw',
      justifyContent: 'center',
      [responsive.xs]: {
        display: 'block',
        margin: `0 calc(-1 * (100vw - ${screenWidths.xs}px) / 2)`
      },

      [responsive.sm]: {
        display: 'block',
        margin: `0 calc(-1 * (100vw - ${screenWidths.sm}px) / 2)`
      },

      [responsive.md]: {
        display: 'block',
        margin: `0 calc(-1 * (100vw - ${screenWidths.md}px) / 2)`
      },

      [responsive.mdLg]: {
        display: 'block',
        margin: `0 calc(-1 * (100vw - ${screenWidths.mdLg}px) / 2)`
      },

      [responsive.lg]: {
        display: 'block',
        margin: `0 calc(-1 * (100vw - ${screenWidths.lg}px) / 2)`
      },

      [responsive.xl]: {
        display: 'block',
        margin: `0 calc(-1 * (100vw - ${screenWidths.xl}px) / 2)`
      }
    }
  }

  return (
    <div
      style={[
        styles,
        getMaxColumnsStyles(),
        getFullWidthStyles(),
        props.styles
      ]}
    >
      { props.children }
    </div>
  )
}

Row.propTypes = {
  /** Force Row to width of 100vw -- Snacks will add negative margin */
  forceFullPage: PropTypes.bool,
  /** Maximum number of columns this Row should grow to as screen width increases. Cannot exceed 14. */
  maxColumns: PropTypes.number,
  /** Optional style overrides */
  styles: PropTypes.object
}

Row.defaultProps = {
  maxColumns: 14
}

export default Radium(Row)
