(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["react-callout"] = factory(require("react"));
	else
		root["react-callout"] = factory(root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _callout = __webpack_require__(1);
	
	var _callout2 = _interopRequireDefault(_callout);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _callout2.default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Callout = function (_Component) {
	    _inherits(Callout, _Component);
	
	    function Callout() {
	        _classCallCheck(this, Callout);
	
	        return _possibleConstructorReturn(this, Object.getPrototypeOf(Callout).apply(this, arguments));
	    }
	
	    _createClass(Callout, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var className = _props.className;
	            var children = _props.children;
	            var style = _props.style;
	            var content = _props.content;
	            var isOpen = _props.isOpen;
	            var zIndex = _props.zIndex;
	            var position = _props.position;
	            var alignment = _props.alignment;
	            var offset = _props.offset;
	
	
	            var direction = alignment === 'right' ? 'rtl' : 'ltr';
	            var bottom = position === 'top' ? '100%' : 'auto';
	            var transform = 'translate3d(' + offset.x + ', ' + offset.y + ', 0)';
	
	            var wrapperClass = 'callout_wrapper ' + className;
	            var wrapperStyle = Object.assign({}, style, {
	                direction: direction,
	                display: 'inline-block'
	            });
	
	            var triggerStyle = {
	                direction: 'ltr'
	            };
	
	            var contentStyle = {
	                display: isOpen ? 'block' : 'none',
	                direction: 'ltr',
	                position: 'absolute',
	                zIndex: zIndex,
	                bottom: bottom,
	                transform: transform
	            };
	
	            return _react2.default.createElement(
	                'div',
	                { className: wrapperClass, style: wrapperStyle },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'callout_trigger', style: triggerStyle },
	                    children
	                ),
	                _react2.default.createElement(
	                    'div',
	                    { className: 'callout_content', style: contentStyle },
	                    content
	                )
	            );
	        }
	    }]);
	
	    return Callout;
	}(_react.Component);
	
	exports.default = Callout;
	
	
	Callout.propTypes = {
	    isOpen: _react.PropTypes.bool,
	    className: _react.PropTypes.string,
	    style: _react.PropTypes.object,
	    zIndex: _react.PropTypes.number,
	    position: _react.PropTypes.oneOf(['top', 'bottom']),
	    alignment: _react.PropTypes.oneOf(['left', 'right']),
	    offset: _react.PropTypes.shape({
	        x: _react.PropTypes.string,
	        y: _react.PropTypes.string
	    })
	};
	
	Callout.defaultProps = {
	    isOpen: false,
	    className: '',
	    style: {},
	    zIndex: 99,
	    position: 'top',
	    alignment: 'left',
	    offset: {
	        x: '0',
	        y: '0'
	    }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=react-callout.js.map