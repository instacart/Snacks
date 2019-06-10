import React from 'react'
import SetStyles from '../../src/styles/SetStyles'

export default function Wrapper(props) {
  return (
    <>
      <SetStyles assetsUrl={'src/fonts'} />
      {props.children}
    </>
  )
}
