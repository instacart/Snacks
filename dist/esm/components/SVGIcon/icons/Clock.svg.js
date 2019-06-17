import React from 'react'

const SvgClock = props => (
  <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <path d="M12 12h7.5a.5.5 0 1 1 0 1h-8a.5.5 0 0 1-.5-.5v-8a.5.5 0 1 1 1 0V12zm0-11c6.078 0 11 4.923 11 11 0 6.078-4.922 11-11 11-6.077 0-11-4.922-11-11C1 5.923 5.923 1 12 1zm0 1C6.475 2 2 6.475 2 12s4.475 10 10 10 10-4.475 10-10S17.525 2 12 2z" />
  </svg>
)

export default SvgClock
