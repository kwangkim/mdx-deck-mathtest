'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SlideDeck = exports.GoogleFonts = exports.Root = exports.Dots = exports.Slide = exports.Carousel = exports.dec = exports.inc = exports.themes = exports.theme = exports.components = exports.Image = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Image = require('./Image');

Object.defineProperty(exports, 'Image', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Image).default;
  }
});

var _components = require('./components');

Object.defineProperty(exports, 'components', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_components).default;
  }
});

var _themes2 = require('./themes');

Object.defineProperty(exports, 'theme', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_themes2).default;
  }
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tag = require('@mdx-js/tag');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _lodash = require('lodash.debounce');

var _lodash2 = _interopRequireDefault(_lodash);

var _webfont = require('@compositor/webfont');

var _webfont2 = _interopRequireDefault(_webfont);

var _themes = _interopRequireWildcard(_themes2);

var _components2 = _interopRequireDefault(_components);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports.themes = _themes;
var inc = exports.inc = function inc(state) {
  return { index: (state.index + 1) % state.length };
};
var dec = exports.dec = function dec(state) {
  return state.index > 0 ? { index: (state.index - 1) % state.length } : null;
};

var CarouselRoot = _styledComponents2.default.div([], {
  overflowX: 'hidden',
  width: '100%',
  height: '100%',
  '@media print': {
    height: 'auto',
    overflowX: 'visible'
  }
});

var CarouselInner = _styledComponents2.default.div([], {
  display: 'flex',
  width: '100%',
  height: '100%',
  transitionProperty: 'transform',
  transitionTimingFunction: 'ease-out',
  transitionDuration: '.3s',
  '@media print': {
    height: 'auto',
    display: 'block'
  }
}, function (props) {
  return {
    transform: 'translateX(' + -100 * props.index + '%)'
  };
});

var Carousel = exports.Carousel = function Carousel(props) {
  return _react2.default.createElement(
    CarouselRoot,
    null,
    _react2.default.createElement(CarouselInner, props)
  );
};

var Slide = exports.Slide = _styledComponents2.default.div([], {
  flex: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
  '@media print': {
    width: '100vw',
    height: '100vh',
    pageBreakAfter: 'always',
    pageBreakInside: 'avoid',
    WebkitPrintColorAdjust: 'exact'
  }
}, _styledSystem.space, _styledSystem.color);

Slide.defaultProps = {
  px: [4, 5, 6]
};

var Dot = _styledComponents2.default.button([], {
  appearance: 'none',
  border: '4px solid transparent',
  backgroundClip: 'padding-box',
  borderRadius: '9999px',
  width: '8px',
  height: '8px',
  color: 'inherit',
  '&:focus': {
    outline: 'none',
    boxShadow: '0 0 0 1px'
  }
}, function (props) {
  return {
    opacity: props.active ? 0.5 : 0.125
  };
}, _styledSystem.space, _styledSystem.color);
Dot.defaultProps = {
  m: 0,
  p: 1,
  bg: 'currentcolor'
};

var Flex = _styledComponents2.default.div([], {
  display: 'flex',
  justifyContent: 'center',
  '@media print': {
    display: 'none'
  }
}, _styledSystem.space);

var Dots = function Dots(_ref) {
  var index = _ref.index,
      length = _ref.length,
      _onClick = _ref.onClick,
      props = _objectWithoutProperties(_ref, ['index', 'length', 'onClick']);

  return _react2.default.createElement(
    Flex,
    props,
    Array.from({ length: length }).map(function (n, i) {
      return _react2.default.createElement(Dot, {
        key: i,
        active: i <= index,
        title: 'go to: ' + i,
        onClick: function onClick(e) {
          _onClick(i);
        }
      });
    })
  );
};

exports.Dots = Dots;
var Root = exports.Root = _styledComponents2.default.div([], {
  '@media print': {
    fontSize: '24px',
    height: 'auto'
  }
}, function (props) {
  return props.theme.font ? {
    fontFamily: props.theme.font
  } : null;
}, function (props) {
  return props.theme.css;
}, _styledSystem.width, _styledSystem.height, _styledSystem.color);
Root.defaultProps = {
  color: 'text',
  bg: 'background'
};

var GoogleFonts = exports.GoogleFonts = (0, _styledComponents.withTheme)(function (_ref2) {
  var theme = _ref2.theme;

  var links = [_webfont2.default.getURL(theme.font || ''), _webfont2.default.getURL(theme.monospace || '')].filter(Boolean);
  if (!links.length) return false;
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    links.map(function (href, i) {
      return _react2.default.createElement('link', {
        key: i,
        href: href,
        rel: 'stylesheet'
      });
    })
  );
});

var SlideDeck = exports.SlideDeck = function (_React$Component) {
  _inherits(SlideDeck, _React$Component);

  function SlideDeck() {
    var _ref3;

    var _temp, _this, _ret;

    _classCallCheck(this, SlideDeck);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref3 = SlideDeck.__proto__ || Object.getPrototypeOf(SlideDeck)).call.apply(_ref3, [this].concat(args))), _this), _this.state = {
      length: _this.props.slides.length,
      index: 0
    }, _this.update = function (fn) {
      return _this.setState(fn);
    }, _this.handleKeyDown = function (e) {
      if (_this.props.ignoreKeyEvents) {
        return;
      }

      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          _this.update(inc);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          _this.update(dec);
          break;
      }
    }, _this.handleHashChange = function (e) {
      _this.isHashChange = true;
      _this.hashToState();
    }, _this.hashToState = function () {
      var hash = window.location.hash;

      var index = parseInt(hash.replace(/^#/, ''), 10);
      if (isNaN(index)) return;
      _this.setState({ index: index });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SlideDeck, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.body.addEventListener('keydown', this.handleKeyDown);
      window.addEventListener('hashchange', this.handleHashChange);
      this.hashToState();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.body.removeEventListener('keydown', this.handleKeyDown);
      window.removeEventListener('hashchange', this.handleHashChange);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.isHashChange) {
        this.isHashChange = false;
        return;
      }
      var index = this.state.index;

      history.pushState(null, null, '#' + index);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          slides = _props.slides,
          theme = _props.theme,
          components = _props.components,
          width = _props.width,
          height = _props.height;
      var _state = this.state,
          index = _state.index,
          length = _state.length;


      return _react2.default.createElement(
        _styledComponents.ThemeProvider,
        { theme: theme },
        _react2.default.createElement(
          _tag.MDXProvider,
          {
            components: _extends({}, _components2.default, components) },
          _react2.default.createElement(
            Root,
            { width: width, height: height },
            _react2.default.createElement(GoogleFonts, null),
            _react2.default.createElement(
              Carousel,
              { index: index },
              slides.map(function (Component, i) {
                return _react2.default.createElement(
                  Slide,
                  { key: i, id: 'slide-' + i },
                  _react2.default.createElement(Component, null)
                );
              })
            ),
            _react2.default.createElement(Dots, {
              mt: -32,
              mx: 'auto',
              index: index,
              length: length,
              onClick: function onClick(index) {
                _this2.setState({ index: index });
              }
            })
          )
        )
      );
    }
  }]);

  return SlideDeck;
}(_react2.default.Component);

SlideDeck.propTypes = {
  slides: _propTypes2.default.array.isRequired
};
SlideDeck.defaultProps = {
  slides: [],
  theme: _themes.default,
  components: {},
  width: '100vw',
  height: '100vh',
  ignoreKeyEvents: false
};
exports.default = SlideDeck;