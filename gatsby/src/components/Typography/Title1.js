import React from 'react'
import {colors} from 'ic-snacks'

const style = {
  fontSize: 60,
  fontWeight: 600,
  lineHeight: '82px',
  color: colors.GRAY_20,
}

export default function Title1({children}) {
  return (
    <div style={style}>
      {children}
    </div>
  )
}
