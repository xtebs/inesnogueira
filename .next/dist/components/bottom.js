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

var _jsxFileName = "/Users/hugofnesteves/Desktop/InesNoguira/components/bottom.js";

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
		key: "render",
		value: function render() {

			return _react2.default.createElement("div", { style: container, __source: {
					fileName: _jsxFileName,
					lineNumber: 24
				}
			}, _react2.default.createElement("img", { "data-aos": "fade-right", "data-aos-delay": "1000", "data-aos-duration": "1800", style: imageStyle, src: "http://act-escoladeactores.com/files/thumb/252/200", __source: {
					fileName: _jsxFileName,
					lineNumber: 25
				}
			}), _react2.default.createElement("div", { style: footerTextBig, __source: {
					fileName: _jsxFileName,
					lineNumber: 26
				}
			}, "  IN\xCAS NOGUEIRA \u16EB "), _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}, "  ", _react2.default.createElement("a", { style: footerTextDesc, href: "https://www.linkedin.com/in/in%C3%AAs-nogueira-7792a016/", __source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}, "LinkedIn"), " "), _react2.default.createElement("div", {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}, "  ", _react2.default.createElement("a", { style: footerTextDesc, href: "mailto:e.inesnogueira@gmail.com?Subject=Ol\xE1 In\xEAs!", __source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}, "   e.inesnogueira@gmail.com  "), "  "));
		}
	}]);

	return Tile;
}(_react2.default.Component);

exports.default = Tile;


var imageStyle = {
	height: "200px",
	backgroundPosition: "100px 5px",
	backgroundSize: "cover",
	overflow: "hidden",
	backgroundColor: "black"

};
var container = {
	display: "flex",
	alignItems: "center",
	flex: 1,
	backgroundColor: "black",
	height: "200px",
	width: "100%",
	justifyContent: "center",
	alignContent: "center"
};

var footerTextBig = {
	zIndex: 10,
	fontFamily: 'Roboto',
	fontSize: 25,
	padding: 20,
	color: "white",
	fontSmooth: "2em"
};

var footerTextDesc = {
	zIndex: 10,
	fontFamily: 'Roboto',
	fontSize: 25,
	padding: 20,
	color: "gray",
	fontSmooth: "2em",
	textDecoration: "none"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYm90dG9tLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQU9TIiwiVGlsZSIsInN0YXRlIiwiaG92ZXIiLCJyZXF1aXJlIiwiaW5pdCIsImNvbnRhaW5lciIsImltYWdlU3R5bGUiLCJmb290ZXJUZXh0QmlnIiwiZm9vdGVyVGV4dERlc2MiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kU2l6ZSIsIm92ZXJmbG93IiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJmbGV4Iiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduQ29udGVudCIsInpJbmRleCIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsInBhZGRpbmciLCJjb2xvciIsImZvbnRTbW9vdGgiLCJ0ZXh0RGVjb3JhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7Ozs7O0FBQ2hCLElBQUksTUFBSixBQUFVOztJQUdXLEE7K0JBRXJCOztpQkFBYTtzQ0FBQTs7MEhBRVo7O1FBQUEsQUFBSztVQUZPLEFBRVosQUFBWSxBQUNKO0FBREksQUFDWDtTQUVEOzs7OztzQ0FFa0IsQUFDbkI7UUFBQSxBQUFLLE1BQUwsQUFBVyxBQUNYO1FBQUEsQUFBSyxJQUFMLEFBQVMsQUFDUjs7OzsyQkFJTyxBQUVQOzswQkFDRSxjQUFBLFNBQUssT0FBTCxBQUFZO2VBQVo7aUJBQUEsQUFDQTtBQURBO0lBQUEseUNBQ0ssWUFBTCxBQUFjLGNBQWMsa0JBQTVCLEFBQTJDLFFBQU8scUJBQWxELEFBQW9FLFFBQU8sT0FBM0UsQUFBa0YsWUFBWSxLQUE5RixBQUFtRztlQUFuRztpQkFEQSxBQUNBLEFBQ0M7QUFERDt1QkFDQyxjQUFBLFNBQUssT0FBTCxBQUFZO2VBQVo7aUJBQUE7QUFBQTtNQUZELEFBRUMsQUFDQSwrQ0FBQSxjQUFBOztlQUFBO2lCQUFBO0FBQUE7QUFBQSxNQUFPLHNCQUFBLGNBQUEsT0FBRyxPQUFILEFBQVUsZ0JBQWdCLE1BQTFCLEFBQStCO2VBQS9CO2lCQUFBO0FBQUE7TUFBUCxBQUFPLGFBSFIsQUFHQyxBQUNBLHNCQUFBLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BQU8sc0JBQUEsY0FBQSxPQUFHLE9BQUgsQUFBVSxnQkFBZ0IsTUFBMUIsQUFBK0I7ZUFBL0I7aUJBQUE7QUFBQTtNQUFQLEFBQU8sa0NBTFYsQUFDRSxBQUlDLEFBR0Y7Ozs7O0VBMUJnQyxnQkFBTSxBOztrQkFBbkIsQTs7O0FBNkJyQixJQUFNO1NBQVksQUFDVixBQUNQO3FCQUZpQixBQUVHLEFBQ3BCO2lCQUhpQixBQUdELEFBQ2hCO1dBSmlCLEFBSVAsQUFDVjtrQkFMRCxBQUFrQixBQUtBOztBQUxBLEFBQ2pCO0FBU0QsSUFBTTtVQUFXLEFBQ1AsQUFDVDthQUZnQixBQUVKLEFBQ1o7T0FIZ0IsQUFHWCxBQUNMO2tCQUpnQixBQUlBLEFBQ2hCO1NBTGdCLEFBS1QsQUFDUDtRQU5nQixBQU1WLEFBQ047aUJBUGdCLEFBT0QsQUFDZjtlQVJELEFBQWlCLEFBUUg7QUFSRyxBQUNoQjs7QUFVRCxJQUFNO1NBQWdCLEFBQ2IsQUFDUjthQUZxQixBQUVULEFBQ1o7V0FIcUIsQUFHWCxBQUNWO1VBSnFCLEFBSVosQUFDVDtRQUxxQixBQUtmLEFBQ047YUFORCxBQUFzQixBQU1UO0FBTlMsQUFDckI7O0FBUUQsSUFBTTtTQUFpQixBQUNkLEFBQ1I7YUFGc0IsQUFFVixBQUNaO1dBSHNCLEFBR1osQUFDVjtVQUpzQixBQUliLEFBQ1Q7UUFMc0IsQUFLaEIsQUFDTjthQU5zQixBQU1WLEFBQ1o7aUJBUEQsQUFBdUIsQUFPTjtBQVBNLEFBQ3RCIiwiZmlsZSI6ImJvdHRvbS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaHVnb2ZuZXN0ZXZlcy9EZXNrdG9wL0luZXNOb2d1aXJhIn0=