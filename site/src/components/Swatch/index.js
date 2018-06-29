import React from 'react'
import {SVGIcon} from 'ic-snacks'
import Radium from 'radium'
import * as styles from './styles'

function Swatch({name, inverted, selected, value}) {
  return (
    <div style={styles.container(value)}>
      <div
        style={{
          ...styles.name,
          ...(inverted && styles.inverted)
        }}
      >
        {name}
      </div>
      <div
        style={{
          ...styles.value,
          ...(inverted && styles.inverted)
        }}
      >
        {value}
      </div>
      {selected && <SVGIcon name='starFilled' style={styles.star} />}
    </div>
  )
}

export default Radium(Swatch)
