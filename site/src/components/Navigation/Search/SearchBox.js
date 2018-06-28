import React from 'react'
import Radium from 'radium'
import styles from './style'
import {SVGIcon, TextField} from 'ic-snacks'

function SearchBox({searchTerm, onChange}) {
  const icon = searchTerm ?
    <SVGIcon name='x' style={styles.xIcon} size='small' />
    : <SVGIcon name='search' style={styles.searchIcon} />

  return (
    <div style={styles.container}>
      {icon}
      <TextField
        name="search"
        type="text"
        floatingLabelText="Search"
        value={searchTerm}
        onChange={onChange}
        inputStyle={styles.textField}
        fullWidth
      />
    </div>
  )
}

export default Radium(SearchBox)
