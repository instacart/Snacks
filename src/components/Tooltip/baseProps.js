import PropTypes from 'prop-types'

export default {
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large',
  ]),
  position: PropTypes.oneOf([
    'topLeft',
    'top',
    'topRight',
    'left',
    'right',
    'bottomLeft',
    'bottom',
    'bottomRight',
  ]),
}
