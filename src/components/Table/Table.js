import React               from 'react'
import PropTypes           from 'prop-types'
import Radium              from 'radium'
import { spacing, colors } from '../../styles'
import responsive          from '../../styles/responsive'

const styles = {
  table: {
    borderCollapse: 'collapse',
    borderRadius: '4px',
    borderSpacing: 0,
    boxShadow: '0 1px 2px #AAA',
    overflow: 'hidden',
    width: '100%',
  },

  cell: {
    background: colors.WHITE,
    fontSize: '14px',
    fontWeight: 400,
    height: spacing.XL,
    lineHeight: `${spacing.XL}px`,
    padding: `0 ${spacing.SM}px`,
    textAlign: 'left',
    whiteSpace: 'nowrap',

    [responsive.md]: {
      height: spacing.LG,
      lineHeight: `${spacing.LG}px`,
      padding: `0 ${spacing.XS}px`,
    },

    [responsive.sm]: {
      fontSize: '12px',
      height: spacing.MD,
      lineHeight: `${spacing.MD}px`,
    }
  },

  cellAlt: {
    background: colors.GRAY_97,
  }
}
styles.cell[responsive.xs] = styles.cell[responsive.sm]

const Table = props => {
  const { withHeader, definition, data } = props

  return (
    <table style={styles.table}>
      {!withHeader ? null : (
        <thead>
          <tr>
            {definition.map((def, index) => (
              <th key={index} style={styles.cell}>
                {def.header !== undefined ? def.header : def.attribute}
              </th>
            ))}
          </tr>
        </thead>
      )}

      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {definition.map((def, cellIndex) => (
              <td
                key={cellIndex}
                style={[
                  styles.cell,
                  index % 2 === 0 && styles.cellAlt
                ]}
                {...Object.assign({}, def, { header: null, attribute: null, cellRender: null })}
              >
                {def.cellRender ? def.cellRender(row[def.attribute], index, row) : row[def.attribute]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  data: PropTypes
    .arrayOf(PropTypes.object)
    .isRequired,

  definition: (props, propName) => {
    const definition = props[propName]

    if (!Array.isArray(definition)) {
      throw new Error('Table required definition prop must be an Array')
    }

    for (const cell of definition) {
      if (cell.attribute === undefined) {
        throw new Error('All Table definition object must have an .attribute')
      }
    }
  },

  withHeader: PropTypes.bool,
}

Table.defaultProps = {
  withHeader: true,
}

export default Radium(Table)
