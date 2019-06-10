/* eslint-disable react/no-unused-prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import responsive from '../../styles/responsive'
import { supportsCSSGrid } from '../../utils/detectFeature'

// used for browsers without css grid support
const legacyStyles = {
  display: 'block',

  [responsive.sm]: {
    width: `${6 * responsive.columnWidth}px`,
  },

  [responsive.md]: {
    width: `${8 * responsive.columnWidth}px`,
  },

  [responsive.mdLg]: {
    width: `${10 * responsive.columnWidth}px`,
  },

  [responsive.lg]: {
    width: `${12 * responsive.columnWidth}px`,
  },

  [responsive.xl]: {
    width: `${14 * responsive.columnWidth}px`,
  },
}

const styles = {
  [responsive.xs]: {
    display: 'block',
  },

  [responsive.sm]: {
    display: 'grid',
    gridTemplateColumns: `repeat(6, ${responsive.columnWidth}px)`,
  },

  [responsive.md]: {
    display: 'grid',
    gridTemplateColumns: `repeat(8, ${responsive.columnWidth}px)`,
  },

  [responsive.mdLg]: {
    display: 'grid',
    gridTemplateColumns: `repeat(10, ${responsive.columnWidth}px)`,
  },

  [responsive.lg]: {
    display: 'grid',
    gridTemplateColumns: `repeat(12, ${responsive.columnWidth}px)`,
  },

  [responsive.xl]: {
    display: 'grid',
    gridTemplateColumns: `repeat(14, ${responsive.columnWidth}px)`,
  },
}

const getMaxColumnsStyles = props => {
  const { maxColumns } = props

  const override = supportsCSSGrid()
    ? {
        display: 'grid',
        gridTemplateColumns: `repeat(${maxColumns}, ${responsive.columnWidth}px)`,
        justifyContent: 'center',
      }
    : {
        width: `${maxColumns * responsive.columnWidth}px`,
        marginTop: 0,
        marginRight: 'auto',
        marginBottom: 0,
        marginLeft: 'auto',
      }

  if (maxColumns <= 6) {
    return {
      [responsive.md]: override,
      [responsive.mdLg]: override,
      [responsive.lg]: override,
      [responsive.xl]: override,
    }
  }
  if (maxColumns <= 8) {
    return {
      [responsive.mdLg]: override,
      [responsive.lg]: override,
      [responsive.xl]: override,
    }
  }
  if (maxColumns <= 10) {
    return {
      [responsive.lg]: override,
      [responsive.xl]: override,
    }
  }
  if (maxColumns <= 12) {
    return {
      [responsive.xl]: override,
    }
  }

  return {}
}

const fullWidthStyles = ['xs', 'sm', 'md', 'mdLg', 'lg', 'xl'].reduce(
  (stylesAcc, size) => ({
    ...stylesAcc,
    [responsive[size]]: {
      display: 'block',
      marginTop: 0,
      marginRight: `calc(-1 * (100vw - ${responsive.screenWidths[size]}px) / 2)`,
      marginBottom: 0,
      marginLeft: `calc(-1 * (100vw - ${responsive.screenWidths[size]}px) / 2)`,
    },
  }),
  { width: '100vw', justifyContent: 'center' }
)

const getFullWidthStyles = props => (props.forceFullPage ? fullWidthStyles : {})

const Row = props => {
  const componentStyles = supportsCSSGrid() ? styles : legacyStyles

  return (
    <div
      css={[
        {
          ...componentStyles,
          ...getMaxColumnsStyles(props),
          ...getFullWidthStyles(props),
        },
        props.style,
      ]}
    >
      {props.children}
    </div>
  )
}

Row.propTypes = {
  children: PropTypes.node,
  /** Force Row to width of 100vw -- Snacks will add negative margin */
  forceFullPage: PropTypes.bool,
  /** Maximum number of columns this Row should grow to as screen width increases. Cannot exceed 14. */
  maxColumns: PropTypes.number,
  /** Optional style overrides */
  style: PropTypes.object,
}

Row.defaultProps = {
  maxColumns: 14,
}

export default Row
