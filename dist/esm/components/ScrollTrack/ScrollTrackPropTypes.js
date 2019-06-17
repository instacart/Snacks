import PropTypes from 'prop-types';
var propTypes = {
  trackProps: PropTypes.shape({
    showLeftArrow: PropTypes.bool,
    showRightArrow: PropTypes.bool,
    left: PropTypes.number,
    parentWidth: PropTypes.number,
    trackWidth: PropTypes.number,
    trackBounds: PropTypes.object
  })
};
export default propTypes;