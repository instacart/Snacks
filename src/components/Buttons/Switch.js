import React from 'react'
import PropTypes from 'prop-types'
import RadioCheckboxBase from '../../base/RadioCheckboxBase'
import colors from '../../styles/colors'
import ZeroSvg from '../../assets/zero.svg'
import OneSvg from '../../assets/one.svg'

const SWITCH_WIDTH = 36

const STYLES = {
  background: {
    borderRadius: '11px',
    position: 'relative',
    transition: 'background-color 200ms ease-in-out',
  },
  toggle: {
    default: {
      height: '18px',
      width: '18px',
      backgroundColor: colors.WHITE,
      borderRadius: '50%',
      display: 'block',
      position: 'absolute',
      top: '2px',
      left: '2px',
      transition: 'left 200ms ease-in-out',
    },
    selected: {
      left: '16px'
    }
  },
  zero: {
    position: 'absolute',
    right: '5px',
    top: '7px',
  },
  one: {
    position: 'absolute',
    left: '8px',
    top: '7px',
  }
}

const renderInputButton = (isSelected, style, isAccessible) => {
  return (
    <div
      style={[
        style,
        {backgroundColor: style.fill},
        STYLES.background,
      ]}
    >
      {isAccessible && isSelected && <OneSvg style={STYLES.one}/>}
      {isAccessible && !isSelected && <ZeroSvg style={STYLES.zero}/>}
      <div
        style={[
          STYLES.toggle.default,
          isSelected && STYLES.toggle.selected
        ]}
      />
    </div>
  )
}

const Switch = (props) => {
  return (
    <RadioCheckboxBase
      btnType='checkbox'
      width={SWITCH_WIDTH}
      renderInputButton={(isSelected, style) => renderInputButton(isSelected, style, props.isAccessible)}
      {...props}
    />
  )
}

Switch.propTypes = {
  aria          : PropTypes.shape({
    label         :PropTypes.string,
  }),
  children      : PropTypes.string,
  id            : PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isDisabled    : PropTypes.bool,
  isSelected    : PropTypes.bool,
  name          : PropTypes.string,
  onChange      : PropTypes.func,
  style         : PropTypes.shape({
    button        : PropTypes.object,
    label         : PropTypes.object,
    wrapEl        : PropTypes.object,
  }),
  value         : PropTypes.string,
  wrapEl        : PropTypes.string,
  isAccessible    : PropTypes.bool
}

export default Switch

