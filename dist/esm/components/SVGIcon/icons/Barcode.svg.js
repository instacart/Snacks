import React from 'react'

const SvgBarcode = props => (
  <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <path d="M5.5 4a.5.5 0 0 1 .5.5v15a.5.5 0 1 1-1 0v-15a.5.5 0 0 1 .5-.5zM8 4a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm3.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 1 1-1 0v-15a.5.5 0 0 1 .5-.5zM2 4h1a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm16 0a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1zm2.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 1 1-1 0v-15a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v15a.5.5 0 1 1-1 0v-15a.5.5 0 0 1 .5-.5zM14 4h1a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
  </svg>
)

export default SvgBarcode
