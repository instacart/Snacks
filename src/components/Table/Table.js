import React               from 'react'
import PropTypes           from 'prop-types'
import Radium              from 'radium'
import { spacing, colors } from '../../styles'

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
  },

  cellAlt: {
    background: colors.GRAY_97,
  },

  clickable: {
    cursor: 'pointer',
    // ':hover': {
    //   background: '#FEFFE8',
    // }
  }
}

const Table = props => {
  const { withHeader, definition, onRowClick, data } = props

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
            {definition.map((def, cellIndex) => {
              const cellStyles = [styles.cell]
              if (index % 2 === 0) {
                cellStyles.push(styles.cellAlt)
              }

              const clickHandler = def.onClick || onRowClick
              if (clickHandler) {
                cellStyles.push(styles.clickable)
              }

              return (
                <td
                  key={cellIndex}
                  style={cellStyles}
                  onClick={!clickHandler ? null : () => {
                    clickHandler(row)
                  }}
                  onKeyPress={event => {
                    if (event.code === 13 && clickHandler) {
                      clickHandler(row)
                    }
                  }}
                >
                  {def.cellRender ? def.cellRender(row[def.attribute], index, row) : row[def.attribute]}
                </td>
              )
            })}
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
      return new Error('Table required definition prop must be an Array')
    }

    for (const cell of definition) {
      if (cell.attribute === undefined) {
        return new Error('All Table definition object must have an .attribute')
      }
    }
  },

  withHeader: PropTypes.bool,

  onRowClick: PropTypes.func
}

Table.defaultProps = {
  withHeader: true,
}

export default Radium(Table)
