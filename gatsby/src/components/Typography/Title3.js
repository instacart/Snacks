import React from 'react'
import {colors} from 'ic-snacks'

const style = {
  fontSize: 32,
  fontWeight: 700,
  lineHeight: '65px',
  color: colors.GRAY_20,
  characterSpacing: '0.3em',
}

export default function Title3({children}) {
  return (
    <div style={style}>
      {children}
    </div>
  )
}
