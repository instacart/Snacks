import React      from 'react'
import PropTypes  from 'prop-types'
import Radium from 'radium'
import responsive from '../../Styles/responsive'

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

    switch(maxColumns) {
      case 6: {
        return {
          [responsive.md]: override,
          [responsive.mdLg]: override,
          [responsive.lg]: override,
          [responsive.xl]: override
        }
      }
      case 8: {
        return {
          [responsive.mdLg]: override,
          [responsive.lg]: override,
          [responsive.xl]: override
        }
      }
      case 10: {
        return {
          [responsive.lg]:override,
          [responsive.xl]: override
        }
      }
      case 12: {
        // grid already maxes at 12, no overrides needed
        return {}
      }
      default: {
        return {}
      }
    }

  }

  return (
    <div style={[
        styles,
        getMaxColumnsStyles(),
        props.styles
      ]}
    >
      { props.children }
    </div>
  )
}

Row.propTypes = {
  maxColumns: PropTypes.number,
  styles: PropTypes.object
}

export default Radium(Row)
