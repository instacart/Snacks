import React from 'react'

const SvgGraph = props => (
  <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <path d="M3 21h18.5a.5.5 0 1 1 0 1h-19a.5.5 0 0 1-.5-.5v-19a.5.5 0 0 1 1 0V21zM5.5 8h3a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5zM6 18h2V9H6v9zm5.5-15h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5zm.5 1v14h2V4h-2zm5.5 8h3a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5zm.5 6h2v-5h-2v5z" />
  </svg>
)

export default SvgGraph
