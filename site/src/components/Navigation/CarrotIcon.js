import React from 'react'
import * as carrotIcon from './carrotIcon.svg'

function CarrotIcon({width, height, style}) {
  return (
    <img
      src={carrotIcon}
      alt='carrot icon'
      width={width}
      height={height}
      style={style}
    />
  )
}

export default CarrotIcon
