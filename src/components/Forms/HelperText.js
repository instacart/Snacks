import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../styles'

const style = {
  fontSize: '12px',
  lineHeight: '1.33',
  textAlign: 'right',
  color: colors.GRAY_46,
  width: '100%',
}

const HelperText = ({ helperText }) => (helperText ? <div css={style}>{helperText}</div> : null)

HelperText.propTypes = {
  /** Text */
  helperText: PropTypes.string,
}

export default HelperText
