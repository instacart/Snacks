import React      from 'react'
import PropTypes  from 'prop-types'
import { colors } from '../../styles'
import spacing    from '../../styles/spacing'

const styles = {
  backgroundColor: colors.GRAY_88,
  width: '100%',
  ...spacing.MARGIN_Y_XS,
  marginLeft: 0,
  marginRight: 0,
  height: 1,
  border: 'none'
}

const MenuDivider = (props) => {
  const { style } = props

  return (
    <hr style={{...styles, ...style}}/>
  )
}

MenuDivider.propTypes = {
  /** Override default styles */
  style: PropTypes.shape({})
}

export default MenuDivider
