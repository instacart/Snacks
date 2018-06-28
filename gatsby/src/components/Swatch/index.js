import React from 'react'
import * as styles from './styles'

export default function Swatch({name, selected, value}) {
  return (
    <div style={{
      ...(selected ? styles.selected : styles.unselected),
      borderColor: value,
    }}>
      <div style={{...styles.swatch, backgroundColor: value}} />
      <div style={styles.info}>
        <div>{name}</div>
        <div>{value}</div>
      </div>
    </div>
  )
}
