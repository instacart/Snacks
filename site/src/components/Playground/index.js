import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live'
import * as Snacks from '../../../../src'

class State extends PureComponent {
  state = this.props.initial || {}
  setter = state => this.setState(state)
  render = () => this.props.children(this.state, this.setter)
}

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
    <LiveProvider code={stripped} scope={{...Snacks, State}}>
      <LiveEditor/>
      <LiveError/>
      <LivePreview/>
    </LiveProvider>
  )
}
