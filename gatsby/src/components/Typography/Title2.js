import React from 'react'
import {colors} from 'ic-snacks'

const style = {
  fontSize: 48,
  fontWeight: 400,
  lineHeight: '65px',
  color: colors.GRAY_20,
}

export default function Title2({children}) {
  return (
    <div style={style}>
      {children}
    </div>
  )
}
