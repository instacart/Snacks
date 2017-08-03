import React      from 'react'
import PropTypes  from 'prop-types'
import Radium from 'radium'
import responsive from '../../styles/responsive'

const Column = props => {
  if (props.sizes.xs) {
    console.warn('xs size prop passed to Column!',
    'This will be ignored. All columns at xs screen size are full-width. ',
    'Please remove this definition. Sizes passed: ', props.sizes)
  }

  const getSizedStyles = () => {
    return {
      [responsive.sm]: {
        gridColumn: `span ${props.sizes.sm || 1}`
      },

      [responsive.md]: {
        gridColumn: `span ${props.sizes.md || props.sizes.sm || 1}`
      },

      [responsive.mdLg]: {
        gridColumn: `span ${props.sizes.mdLg || props.sizes.md || props.sizes.sm || 1}`
      },

      [responsive.lg]: {
        gridColumn: `span ${props.sizes.lg || props.sizes.mdLg || props.sizes.md || props.sizes.sm || 1}`
      },

      [responsive.xl]: {
        gridColumn: `span ${props.sizes.xl || props.sizes.lg || props.sizes.mdLg || props.sizes.md || props.sizes.sm || 1}`
      }
    }
  }

  return (
    <div
      style={[
        getSizedStyles(),
        props.styles
      ]}
    >
      { props.children }
    </div>
  )
}

Column.propTypes = {
  /** object where keys are breakpoint and value is number of columns to span at that breakpoint */
  sizes: PropTypes.shape({
    sm: PropTypes.number,
    md: PropTypes.number,
    mdLg: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
  /** Optional style overrides */
  styles: PropTypes.object
}

Column.defaultProps = {
  sizes: {}
}

export default Radium(Column)
