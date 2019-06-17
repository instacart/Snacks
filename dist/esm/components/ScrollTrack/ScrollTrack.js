import _extends from "@babel/runtime/helpers/esm/extends";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";

var _class, _class2, _temp;

import React, { Component } from 'react';
import isEqual from 'lodash.isequal';
import Radium from 'radium';
import PropTypes from 'prop-types';
import componentStyles from './ScrollTrackStyles';
import equalWidthTrack from './equalWidthTrack';
import ScrollTrackPropTypes from './ScrollTrackPropTypes';
import { isNodeEnv } from '../../utils/detectFeature';
import debounce from '../../utils/debounce';
import CircleButton from '../Buttons/CircleButton';
import Icon from '../Icon/Icon';

var noOp = function noOp() {}; // eslint-disable-line no-empty-function


var ScrollTrack = Radium(_class = (_temp = _class2 =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(ScrollTrack, _Component);

  function ScrollTrack(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.getNodeWidths = function () {
      var parentNode = _this.refs.container;
      var parentNodeBounds = parentNode && parentNode.getBoundingClientRect();
      var trackNode = _this.refs.track;
      var trackNodeBounds = trackNode && trackNode.getBoundingClientRect();
      var parentWidth = parentNodeBounds && parentNodeBounds.width;
      var trackWidth = trackNode && trackNode.offsetLeft + trackNode.scrollWidth;
      var trackBounds = trackNodeBounds;
      return {
        parentWidth: parentWidth,
        trackWidth: trackWidth,
        trackBounds: trackBounds
      };
    };

    _this.computeSlideAttributes = function () {
      var _this$getNodeWidths = _this.getNodeWidths(),
          parentWidth = _this$getNodeWidths.parentWidth,
          trackWidth = _this$getNodeWidths.trackWidth;

      var trackAtEnd = parentWidth < trackWidth && _this.state.left <= parentWidth - trackWidth;
      var trackAtBeginning = _this.state.left >= 0;

      if (!parentWidth || !trackWidth) {
        return;
      }

      if (Math.ceil(parentWidth) >= trackWidth) {
        return _this.hideArrows();
      }

      if (!trackAtEnd) {
        _this.showRightArrow();
      } else {
        _this.hideRightArrow();
      }

      if (!trackAtBeginning) {
        _this.showLeftArrow();
      } else {
        _this.hideLeftArrow();
      }
    };

    _this.onKeyDown = function (e) {
      if (![39, 37].includes(e.keyCode)) {
        return;
      }

      e.preventDefault();

      if (e.keyCode === 39) {
        // right arrow
        _this.slideForward();
      } else {
        // left arrow
        _this.slideBack();
      }
    };

    _this.hideArrows = function () {
      _this.setState({
        showLeftArrow: false,
        showRightArrow: false
      });
    };

    _this.hideRightArrow = function () {
      _this.setState({
        showRightArrow: false
      });
    };

    _this.hideLeftArrow = function () {
      _this.setState({
        showLeftArrow: false
      });
    };

    _this.showRightArrow = function () {
      _this.setState({
        showRightArrow: true
      });
    };

    _this.showLeftArrow = function () {
      _this.setState({
        showLeftArrow: true
      });
    };

    _this.setSliding = function () {
      _this.setState({
        isSliding: true
      });
    };

    _this.setNotSliding = function () {
      _this.setState({
        isSliding: false
      });
    };

    _this.slideForward = function () {
      if (_this.state.isSliding) {
        return;
      } // already sliding


      var _this$getNodeWidths2 = _this.getNodeWidths(),
          parentWidth = _this$getNodeWidths2.parentWidth,
          trackWidth = _this$getNodeWidths2.trackWidth;

      var nextForward = _this.state.left - parentWidth + scrollOffset;
      var fullForward = parentWidth - trackWidth;
      var _this$props = _this.props,
          onBeforeNext = _this$props.onBeforeNext,
          scrollOffset = _this$props.scrollOffset; // already is, or is going to be, full forward

      if (nextForward <= fullForward) {
        nextForward = fullForward;
      }

      var callbackProps = {
        atStart: trackWidth <= parentWidth,
        atEnd: fullForward === nextForward,
        slideTo: nextForward,
        parentWidth: parentWidth,
        trackWidth: trackWidth
      };

      _this.setSliding();

      onBeforeNext(callbackProps).then(function (response) {
        return _this.afterBeforeNext(response, callbackProps);
      });
    };

    _this.afterBeforeNext = function (response, callbackProps) {
      if (response === void 0) {
        response = {};
      }

      // calcuate track values once more, in case children have changed the track size
      var _this$getNodeWidths3 = _this.getNodeWidths(),
          parentWidth = _this$getNodeWidths3.parentWidth,
          trackWidth = _this$getNodeWidths3.trackWidth;

      var _this$props2 = _this.props,
          scrollOffset = _this$props2.scrollOffset,
          onAfterNext = _this$props2.onAfterNext;
      var offset = response.scrollOffset || scrollOffset;
      var fullForward = parentWidth - trackWidth;
      var nextForward = _this.state.left - parentWidth + offset; // already is, or is going to be, full forward

      if (nextForward <= fullForward) {
        nextForward = fullForward;
      }

      _this.updateLeftValue({
        left: nextForward,
        callback: onAfterNext,
        callbackProps: _extends({}, callbackProps, {
          atStart: trackWidth <= parentWidth,
          atEnd: fullForward === nextForward,
          slideTo: nextForward,
          parentWidth: parentWidth,
          trackWidth: trackWidth
        })
      });
    };

    _this.slideBack = function () {
      if (_this.state.isSliding) {
        return;
      } // already sliding


      var _this$getNodeWidths4 = _this.getNodeWidths(),
          parentWidth = _this$getNodeWidths4.parentWidth,
          trackWidth = _this$getNodeWidths4.trackWidth;

      var _this$props3 = _this.props,
          onBeforeBack = _this$props3.onBeforeBack,
          scrollOffset = _this$props3.scrollOffset;
      var nextBack = _this.state.left + parentWidth - scrollOffset; // already is, or is going to be, full back

      if (_this.state.left >= 0 || nextBack >= 0) {
        nextBack = 0;
      }

      var callbackProps = {
        atStart: nextBack === 0,
        atEnd: false,
        slideTo: nextBack,
        parentWidth: parentWidth,
        trackWidth: trackWidth
      };

      _this.setSliding();

      onBeforeBack(callbackProps).then(function (response) {
        return _this.afterBeforeBack(response, callbackProps);
      });
    };

    _this.afterBeforeBack = function (response, callbackProps) {
      if (response === void 0) {
        response = {};
      }

      // calcuate track values once more, in case children have changed the track size
      var _this$getNodeWidths5 = _this.getNodeWidths(),
          parentWidth = _this$getNodeWidths5.parentWidth,
          trackWidth = _this$getNodeWidths5.trackWidth;

      var _this$props4 = _this.props,
          scrollOffset = _this$props4.scrollOffset,
          onAfterBack = _this$props4.onAfterBack;
      var offset = response.scrollOffset || scrollOffset;
      var nextBack = _this.state.left + parentWidth - offset; // already is, or is going to be, full back

      if (_this.state.left >= 0 || nextBack >= 0) {
        nextBack = 0;
      }

      _this.updateLeftValue({
        left: nextBack,
        callback: onAfterBack,
        callbackProps: _extends({}, callbackProps, {
          slideTo: nextBack,
          parentWidth: parentWidth,
          trackWidth: trackWidth
        })
      });
    };

    _this.renderRightArrow = function () {
      var slideButtonStyles = componentStyles.slideButtonStyles;
      var showRightArrow = _this.state.showRightArrow;
      var _this$props5 = _this.props,
          _this$props5$styles$R = _this$props5.styles.RightArrow,
          RightArrow = _this$props5$styles$R === void 0 ? {} : _this$props5$styles$R,
          nextButtonContent = _this$props5.nextButtonContent;
      return React.createElement(CircleButton, {
        onClick: _this.slideForward,
        ariaLabel: "next",
        style: [slideButtonStyles["default"], slideButtonStyles.right, showRightArrow && {
          display: 'block'
        }, RightArrow],
        ref: function ref(node) {
          return _this.nextButton = node;
        }
      }, nextButtonContent || React.createElement(Icon, {
        name: "arrowRightSmallBold",
        style: {
          fontSize: '20px'
        }
      }));
    };

    _this.renderLeftArrow = function () {
      var slideButtonStyles = componentStyles.slideButtonStyles;
      var showLeftArrow = _this.state.showLeftArrow;
      var _this$props6 = _this.props,
          _this$props6$styles$L = _this$props6.styles.LeftArrow,
          LeftArrow = _this$props6$styles$L === void 0 ? {} : _this$props6$styles$L,
          backButtonContent = _this$props6.backButtonContent;
      return React.createElement(CircleButton, {
        onClick: _this.slideBack,
        ariaLabel: "back",
        style: [slideButtonStyles["default"], slideButtonStyles.left, showLeftArrow && {
          display: 'block'
        }, LeftArrow],
        ref: function ref(node) {
          return _this.backButton = node;
        }
      }, backButtonContent || React.createElement(Icon, {
        name: "arrowLeftSmallBold",
        style: {
          fontSize: '20px'
        }
      }));
    };

    _this.state = {
      isSliding: false,
      showLeftArrow: false,
      showRightArrow: false,
      left: props.leftOverride
    };
    return _this;
  }

  var _proto = ScrollTrack.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.debouncdComputeSlideAttributes = debounce(this.computeSlideAttributes, 200);
    this.computeSlideAttributes();

    if (!isNodeEnv()) {
      window.addEventListener('resize', this.debouncdComputeSlideAttributes);
    }
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.leftOverride !== this.props.leftOverride) {
      // this allows for control of the scrolltrack by parent components
      this.setState({
        left: nextProps.leftOverride
      });
      this.computeSlideAttributes();
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var prevChildren = prevProps.children || [];
    var newChildren = this.props.children || [];

    if (!isEqual(prevChildren, newChildren)) {
      this.computeSlideAttributes();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!isNodeEnv()) {
      window.removeEventListener('resize', this.debouncdComputeSlideAttributes);
    }
  };

  _proto.updateLeftValue = function updateLeftValue(_ref) {
    var _this2 = this;

    var left = _ref.left,
        callback = _ref.callback,
        callbackProps = _ref.callbackProps;
    this.setState({
      left: left
    }, function () {
      _this2.computeSlideAttributes();

      setTimeout(function () {
        _this2.setNotSliding();

        callback(callbackProps);
      }, _this2.props.scrollSpeed);
    });
  };

  _proto.render = function render() {
    var containerStyles = componentStyles.containerStyles,
        innerContainerStyles = componentStyles.innerContainerStyles;
    var _this$props7 = this.props,
        children = _this$props7.children,
        scrollSpeed = _this$props7.scrollSpeed,
        scrollTimingFunction = _this$props7.scrollTimingFunction,
        style = _this$props7.style,
        _this$props7$styles$T = _this$props7.styles.Track,
        Track = _this$props7$styles$T === void 0 ? {} : _this$props7$styles$T;

    if (!children) {
      return null;
    }

    return (// eslint-disable-next-line jsx-a11y/no-static-element-interactions
      React.createElement("div", {
        ref: "container",
        style: _extends({}, containerStyles, style),
        onKeyDown: this.onKeyDown
      }, this.renderLeftArrow(), React.createElement("div", {
        style: [{
          transition: "transform " + scrollSpeed + "ms " + scrollTimingFunction,
          transform: "translate3d(" + this.state.left + "px, 0, 0)"
        }, innerContainerStyles]
      }, React.createElement("div", {
        ref: "track",
        style: Track
      }, this.childrenWithTrackProps)), this.renderRightArrow())
    );
  };

  _createClass(ScrollTrack, [{
    key: "childrenWithTrackProps",
    get: function get() {
      var nodeWidths = this.getNodeWidths();

      var trackProps = _extends({}, this.state, nodeWidths);

      return React.Children.map(this.props.children, function (child) {
        var isHtmlTag = typeof child.type === 'string' && child.type[0] === child.type[0].toLowerCase();
        var childProps = isHtmlTag ? {} : {
          trackProps: trackProps
        };
        return React.cloneElement(child, childProps);
      });
    }
  }]);

  return ScrollTrack;
}(Component), _class2.equalWidthTrack = equalWidthTrack, _class2.ScrollTrackPropTypes = ScrollTrackPropTypes, _class2.propTypes = {
  /** Prop for passing in custom button content for back button */
  backButtonContent: PropTypes.node,

  /** The elements to scroll */
  children: PropTypes.node,

  /** Manually control left positioning of ScrollTrack */
  leftOverride: PropTypes.number,

  /** Prop for passing in custom button content for next button */
  nextButtonContent: PropTypes.node,

  /**
   * A callback called before sliding to next set.
   * ** Passed function must return a promsie **
   * -- will wait for promise resolution before continuing slide.
   * Use for high levels of control
   */
  onBeforeNext: PropTypes.func,

  /**
   * A callback called before sliding to previous set.
   * ** Passed function must return a promsie **
   * -- will wait for promise resolution before continuing slide.
   * Use for high levels of control
   */
  onBeforeBack: PropTypes.func,

  /**  function to be called after sliding to next set. */
  onAfterNext: PropTypes.func,

  /**  function to be called after sliding to previous set. */
  onAfterBack: PropTypes.func,

  /** number of pixels to offset forward scrolls by */
  scrollOffset: PropTypes.number,

  /** Speed of scrolling animaton in milleseconds - defaults to 150ms */
  scrollSpeed: PropTypes.number,

  /** Transition timing function to use for scrolling animation - defaults to ease-in-out */
  scrollTimingFunction: PropTypes.string,

  /** Style top level element */
  style: PropTypes.object,

  /** Style specifc children elements [LeftArrow, RightArrow, Track] */
  styles: PropTypes.shape({
    LeftArrow: PropTypes.object,
    RightArrow: PropTypes.object,
    Track: PropTypes.object
  })
}, _class2.defaultProps = {
  leftOverride: 0,
  scrollOffset: 0,
  scrollSpeed: 150,
  scrollTimingFunction: 'ease-in-out',
  styles: {
    LeftArrow: {},
    RightArrow: {},
    Track: {}
  },
  style: {},
  onBeforeBack: function onBeforeBack() {
    return new Promise(function (resolve) {
      return resolve();
    });
  },
  onAfterNext: noOp,
  onAfterBack: noOp,
  onBeforeNext: function onBeforeNext() {
    return new Promise(function (resolve) {
      return resolve();
    });
  }
}, _temp)) || _class;

export default ScrollTrack;