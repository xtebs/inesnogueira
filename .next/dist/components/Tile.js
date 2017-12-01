"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/hugofnesteves/Desktop/InesNoguira/components/Tile.js";

var AOS = null;

var Tile = function (_React$Component) {
	(0, _inherits3.default)(Tile, _React$Component);

	function Tile() {
		(0, _classCallCheck3.default)(this, Tile);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Tile.__proto__ || (0, _getPrototypeOf2.default)(Tile)).call(this));

		_this.state = {
			hover: false
		};
		return _this;
	}

	(0, _createClass3.default)(Tile, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			this.AOS = require("aos");
			this.AOS.init();
		}
	}, {
		key: "hoverOn",
		value: function hoverOn() {
			this.setState({ hover: true });
		}
	}, {
		key: "hoverOff",
		value: function hoverOff() {
			this.setState({ hover: false });
		}
	}, {
		key: "contentWithMouseOn",
		value: function contentWithMouseOn() {

			return _react2.default.createElement("div", { style: container, __source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, _react2.default.createElement("img", { style: bgImg, src: this.props.pic, __source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}), _react2.default.createElement("div", { style: tileTitle_hover, __source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, " ", this.props.title, "  "), _react2.default.createElement("div", { style: tileDescription_hover, __source: {
					fileName: _jsxFileName,
					lineNumber: 36
				}
			}, " ", this.props.description, "  "));
		}
	}, {
		key: "contentWithMouseOff",
		value: function contentWithMouseOff() {
			return _react2.default.createElement("div", { style: container, __source: {
					fileName: _jsxFileName,
					lineNumber: 44
				}
			}, _react2.default.createElement("div", { style: tileTitle, __source: {
					fileName: _jsxFileName,
					lineNumber: 45
				}
			}, " ", this.props.title, "  "), _react2.default.createElement("div", { style: tileDescription, __source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}, " ", this.props.description, "  "));
		}
	}, {
		key: "render",
		value: function render() {

			return _react2.default.createElement("div", { style: { background: "#ffffff url(../static/gif_birds-black) no-repeat center center" }, onMouseEnter: this.hoverOn.bind(this), onMouseLeave: this.hoverOff.bind(this), __source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			}, this.state.hover ? this.contentWithMouseOn() : this.contentWithMouseOff());
		}
	}]);

	return Tile;
}(_react2.default.Component);

exports.default = Tile;


var container = {
	height: "400px",
	width: "400px",
	backgroundColor: "white",
	overflow: "hidden"

};
var bgImg = {
	height: "400px",
	backgroundPosition: "-300px 5px",
	backgroundSize: "cover",
	overflow: "hidden",
	backgroundColor: "black"

};

var tileTitle = {
	position: 'absolute',
	top: "10%",
	left: "50%",
	marginLeft: "-140px",
	zIndex: 10,
	fontFamily: 'Roboto',
	fontSize: 30,
	padding: 20,
	color: "black",
	fontSmooth: "2em",
	textAlign: "center"
};

var tileDescription = {
	position: 'absolute',
	top: "50%",
	left: "35%",
	marginLeft: "-100px",
	zIndex: 10,
	fontFamily: 'Roboto',
	fontSize: 15,
	padding: 20,
	color: "black",
	fontSmooth: "2em",
	textAlign: "center"
};

var tileTitle_hover = {
	position: 'absolute',
	top: "5%",
	left: "50%",
	marginLeft: "-150px",
	zIndex: 10,
	fontFamily: 'Roboto',
	fontSize: 40,
	padding: 20,
	color: "white",
	fontSmooth: "2em",
	textAlign: "center"
};

var tileDescription_hover = {
	position: 'absolute',
	top: "50%",
	left: "35%",
	marginLeft: "-100px",
	zIndex: 10,
	fontFamily: 'Roboto',
	fontSize: 25,
	padding: 20,
	color: "white",
	fontSmooth: "2em",
	textAlign: "center"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVGlsZS5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkFPUyIsIlRpbGUiLCJzdGF0ZSIsImhvdmVyIiwicmVxdWlyZSIsImluaXQiLCJzZXRTdGF0ZSIsImNvbnRhaW5lciIsImJnSW1nIiwicHJvcHMiLCJwaWMiLCJ0aWxlVGl0bGVfaG92ZXIiLCJ0aXRsZSIsInRpbGVEZXNjcmlwdGlvbl9ob3ZlciIsImRlc2NyaXB0aW9uIiwidGlsZVRpdGxlIiwidGlsZURlc2NyaXB0aW9uIiwiYmFja2dyb3VuZCIsImhvdmVyT24iLCJiaW5kIiwiaG92ZXJPZmYiLCJjb250ZW50V2l0aE1vdXNlT24iLCJjb250ZW50V2l0aE1vdXNlT2ZmIiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdmVyZmxvdyIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwibWFyZ2luTGVmdCIsInpJbmRleCIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsInBhZGRpbmciLCJjb2xvciIsImZvbnRTbW9vdGgiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTyxBQUFTOzs7Ozs7OztBQUNoQixJQUFJLE1BQUosQUFBVTs7SSxBQUdXOytCQUVyQjs7aUJBQWE7c0NBQUE7OzBIQUVaOztRQUFBLEFBQUs7VUFGTyxBQUVaLEFBQVksQUFDSjtBQURJLEFBQ1g7U0FFRDs7Ozs7c0NBRWtCLEFBQ25CO1FBQUEsQUFBSyxNQUFMLEFBQVcsQUFDWDtRQUFBLEFBQUssSUFBTCxBQUFTLEFBQ1I7Ozs7NEJBR1ksQUFDUDtRQUFBLEFBQUssU0FBUyxFQUFFLE9BQWhCLEFBQWMsQUFBUyxBQUV4Qjs7Ozs2QkFDUyxBQUNSO1FBQUEsQUFBSyxTQUFTLEVBQUUsT0FBaEIsQUFBYyxBQUFTLEFBQ3hCOzs7O3VDQUVnQixBQUVuQjs7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