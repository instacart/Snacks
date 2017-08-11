import PropTypes from 'prop-types'

const propTypes = {
  trackProps: PropTypes.shape({
    showLeftArrow: PropTypes.bool,
    showRightArrow: PropTypes.bool,
    left: PropTypes.number,
    parentWidth: PropTypes.number,
    trackWidth: PropTypes.number,
    trackBounds: PropTypes.number
  })
}

export default propTypes
