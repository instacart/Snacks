import PropTypes from 'prop-types'

const propTypes = {
  trackProps: PropTypes.shape({
    isSliding: PropTypes.bool,
    showLeftArrow: PropTypes.bool,
    showRightArrow: PropTypes.bool,
    left: PropTypes.number,
    parentWidth: PropTypes.number,
    trackWidth: PropTypes.number,
    trackBounds: PropTypes.object,
  }),
}

export default propTypes
