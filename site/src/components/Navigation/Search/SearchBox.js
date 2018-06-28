import React from 'react'
import styles from './style'
import {SVGIcon} from 'ic-snacks'

function SearchBox() {

  return (
    <div style={styles.container}>
      <SVGIcon name='search' style={styles.icon} />
      <span style={styles.placeHolder}>Search</span>
    </div>
  )
}

export default SearchBox
