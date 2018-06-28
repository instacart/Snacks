import React from 'react'

const style = {
  display: 'flex',
  flexWrap: 'wrap',
}

export default function SwatchGroup({children}) {
  return (
    <div style={style}>
      {children}
    </div>
  )
}
