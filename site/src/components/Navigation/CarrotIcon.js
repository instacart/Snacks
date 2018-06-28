import React from 'react'
import * as carrotIcon from './carrotIcon.svg'

function CarrotIcon({width, height}) {
  return (
    <img
      src={carrotIcon}
      alt='carrot icon'
      width={width}
      height={height}
    />
  )
}

export default CarrotIcon
