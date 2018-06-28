import React from 'react'
import PropTypes from 'prop-types'
import {BodyTitle2} from '../Typography'
import * as styles from './styles'

PropsDocs.propTypes = {
  docs: PropTypes.object.isRequired,
}

export default function PropsDocs({docs: {props}}) {
  return (
    <div style={styles.table}>
      <div style={styles.headers}>
        <span style={styles.header}>
          <BodyTitle2>Prop</BodyTitle2>
        </span>
        <span style={styles.header}>
          <BodyTitle2>Type</BodyTitle2>
        </span>
        <span style={styles.header}>
          <BodyTitle2>Required</BodyTitle2>
        </span>
        <span style={styles.header}>
          <BodyTitle2>Default</BodyTitle2>
        </span>
        <span style={styles.header}>
          <BodyTitle2>Description</BodyTitle2>
        </span>
      </div>
      {Object.keys(props).map(prop => (
        <div style={styles.row} key={prop}>
          <div style={styles.prop}>
            {prop}
          </div>
          <div style={styles.type}>
            {props[prop].type.name}
          </div>
          <div style={styles.description}>
            {props[prop].required ? 'Yes' : 'No'}
          </div>
          <div style={styles.defaultValue}>
            {props[prop].defaultValue && props[prop].defaultValue.value}
          </div>
          <div style={styles.description}>
            {props[prop].description}
          </div>
        </div>
      ))}
    </div>
  )
}
