import React from 'react'
import PropTypes from 'prop-types'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live'
import * as Snacks from 'ic-snacks'

Playground.propTypes = {
  children: PropTypes.string.isRequired,
}

export default function Playground({children}) {
  const indentLevel = Math.min(
    ...children.split('\n')
      .filter(line => line.replace(/\s/g, '') !== '')
      .map(line => line.match(/(^ *)/)[1].length)
  )
  const stripped = children
    .split('\n').map(line => line.slice(indentLevel)).join('\n')
    .trim()
  return (
    <LiveProvider code={stripped} scope={Snacks}>
      <LiveEditor/>
      <LiveError/>
      <LivePreview/>
    </LiveProvider>
  )
}
