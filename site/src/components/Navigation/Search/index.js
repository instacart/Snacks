import React from 'react'
import Radium from 'radium'
import styles from './style'
import SVGIcon from '../../../../../src/components/SVGIcon/SVGIcon'
import TextField from '../../../../../src/components/Forms/TextField'

function SearchBox({searchTerm, onChange, onClear}) {
  const icon = searchTerm ? (
    <span onClick={onClear} style={styles.xIconWrapper}>
      <SVGIcon name='x' style={styles.xIcon} />
    </span>)
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
        autoComplete='off'
        fullWidth
      />
    </div>
  )
}

export default Radium(SearchBox)
