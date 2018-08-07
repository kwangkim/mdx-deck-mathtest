'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var css = function css(key) {
  return function (props) {
    return props.theme[key];
  };
};

var Heading = _styledComponents2.default.h1([], {
  lineHeight: 1.25
}, _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, css('heading'));
Heading.defaultProps = {
  color: 'heading',
  mt: 3,
  mb: 3
};

var h1 = (0, _styledComponents2.default)(Heading.withComponent('h1'))([], css('h1'));
h1.defaultProps = {
  fontSize: 4
};

var h2 = (0, _styledComponents2.default)(Heading.withComponent('h2'))([], css('h2'));
h2.defaultProps = {
  fontSize: 3
};

var h3 = (0, _styledComponents2.default)(Heading.withComponent('h3'))([], css('h3'));
h3.defaultProps = {
  fontSize: 2
};
var h4 = (0, _styledComponents2.default)(h3.withComponent('h4'))([], css('h4'));
var h5 = (0, _styledComponents2.default)(h3.withComponent('h5'))([], css('h5'));
var h6 = (0, _styledComponents2.default)(h3.withComponent('h6'))([], css('h6'));

var a = _styledComponents2.default.a([], _styledSystem.color, css('link'), css('a'));
a.defaultProps = {
  target: '_blank',
  color: 'link'
};

var p = _styledComponents2.default.p([], _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, css('paragraph'), css('p'));
p.defaultProps = {
  fontSize: 2
};

var ul = _styledComponents2.default.ul([], {
  textAlign: 'left'
}, _styledSystem.fontSize, css('ul'));
ul.defaultProps = {
  fontSize: 2
};

var ol = _styledComponents2.default.ol([], {
  textAlign: 'left'
}, _styledSystem.fontSize, css('ol'));
ol.defaultProps = {
  fontSize: 2
};
var li = _styledComponents2.default.li([], css('li'));

var blockquote = _styledComponents2.default.blockquote([], {
  textAlign: 'left',
  fontWeight: 'bold'
}, _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, css('blockquote'), css('quote'));
blockquote.defaultProps = {
  fontSize: 2,
  px: 0,
  mx: 0,
  color: 'quote'
};

var pre = _styledComponents2.default.pre([], function (props) {
  return {
    fontFamily: props.theme.monospace
  };
}, _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, css('pre'));
pre.defaultProps = {
  fontSize: 1,
  m: 0,
  p: 2,
  color: 'pre',
  bg: 'preBackground'
};

var code = _styledComponents2.default.code([], function (props) {
  return {
    fontFamily: props.theme.monospace
  };
}, _styledSystem.fontSize, _styledSystem.space, _styledSystem.color, css('code'));
code.defaultProps = {
  color: 'code',
  bg: 'codeBackground'
};

var img = _styledComponents2.default.img([], {
  maxWidth: '100%',
  height: 'auto'
}, css('img'), css('image'));

exports.default = {
  h1: h1,
  h2: h2,
  h3: h3,
  h4: h4,
  h5: h5,
  h6: h6,
  a: a,
  p: p,
  blockquote: blockquote,
  ul: ul,
  ol: ol,
  li: li,
  pre: function pre(props) {
    return props.children;
  },
  code: pre,
  inlineCode: code,
  img: img
};