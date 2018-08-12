import React from 'react'
import PropTypes from 'prop-types'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from 'react-live'
import * as Snacks from '../../../../dist/snacks'
import State from './State'
import format from './format'
import * as styles from './styles'

Playground.propTypes = {
  children: PropTypes.string.isRequired,
}

export default function Playground({children}) {
  return (
    <LiveProvider
      code={format(children)}
      scope={{...Snacks, State}}
      mountStylesheet={false}
      style={styles.container}
    >
      <div style={styles.preview}>
        <LivePreview />
        <LiveError />
      </div>
      <LiveEditor style={styles.editor} />
    </LiveProvider>
  )
}
