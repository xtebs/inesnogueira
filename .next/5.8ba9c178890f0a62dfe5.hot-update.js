webpackHotUpdate(5,{

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

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
			this.AOS = __webpack_require__(395);
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/hugofnesteves/Desktop/InesNoguira/components/bottom.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/hugofnesteves/Desktop/InesNoguira/components/bottom.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS44YmE5YzE3ODg5MGYwYTYyZGZlNS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ib3R0b20uanM/YWQ4NTk2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xudmFyIEFPUyA9IG51bGw7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCAge1xuXG5jb25zdHJ1Y3Rvcigpe1xuXHRzdXBlcigpO1xuXHR0aGlzLnN0YXRlPSB7XG5cdFx0aG92ZXI6IGZhbHNlXG5cdH1cbn1cblxuY29tcG9uZW50RGlkTW91bnQoKXtcbnRoaXMuQU9TID0gcmVxdWlyZShcImFvc1wiKTtcbnRoaXMuQU9TLmluaXQoKTtcbn1cblxuXG5cbnJlbmRlcigpe1xuXG5cdHJldHVybihcblx0XHRcdDxkaXYgc3R5bGU9e2NvbnRhaW5lcn0+XG5cdFx0XHQ8aW1nIGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiICBkYXRhLWFvcy1kZWxheT1cIjEwMDBcIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjE4MDBcIiBzdHlsZT17aW1hZ2VTdHlsZX0gc3JjPXtcImh0dHA6Ly9hY3QtZXNjb2xhZGVhY3RvcmVzLmNvbS9maWxlcy90aHVtYi8yNTIvMjAwXCJ9IC8+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e2Zvb3RlclRleHRCaWd9ID4gIElOw4pTIE5PR1VFSVJBIOGbqyA8L2Rpdj5cblx0XHRcdFx0PGRpdj4gIDxhIHN0eWxlPXtmb290ZXJUZXh0RGVzY30gaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9pbiVDMyVBQXMtbm9ndWVpcmEtNzc5MmEwMTYvXCIgPkxpbmtlZEluPC9hPiA8L2Rpdj5cblx0XHRcdFx0PGRpdj4gIDxhIHN0eWxlPXtmb290ZXJUZXh0RGVzY30gaHJlZj1cIm1haWx0bzplLmluZXNub2d1ZWlyYUBnbWFpbC5jb20/U3ViamVjdD1PbMOhIEluw6pzIVwiID4gICBlLmluZXNub2d1ZWlyYUBnbWFpbC5jb20gIDwvYT4gIDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbmNvbnN0IGltYWdlU3R5bGUgPXtcblx0aGVpZ2h0OlwiMjAwcHhcIixcblx0YmFja2dyb3VuZFBvc2l0aW9uOiBcIjEwMHB4IDVweFwiLFxuXHRiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiLFxuXHRvdmVyZmxvdzogXCJoaWRkZW5cIixcblx0YmFja2dyb3VuZENvbG9yIDpcImJsYWNrXCIsXG5cblxuXG59XG5jb25zdCBjb250YWluZXIgPXtcblx0ZGlzcGxheTogXCJmbGV4XCIsXG5cdGFsaWduSXRlbXMgOlwiY2VudGVyXCIsXG5cdGZsZXg6MSxcblx0YmFja2dyb3VuZENvbG9yOlwiYmxhY2tcIixcblx0aGVpZ2h0OlwiMjAwcHhcIixcblx0d2lkdGg6XCIxMDAlXCIsXG5cdGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsXG5cdGFsaWduQ29udGVudDpcImNlbnRlclwiLFxufVxuXG5jb25zdCBmb290ZXJUZXh0QmlnID0ge1xuXHR6SW5kZXg6IDEwLFxuXHRmb250RmFtaWx5OiAnUm9ib3RvJyxcblx0Zm9udFNpemU6IDI1LFxuXHRwYWRkaW5nOiAyMCAsXG5cdGNvbG9yOlwid2hpdGVcIixcblx0Zm9udFNtb290aDogXCIyZW1cIixcbn1cblxuY29uc3QgZm9vdGVyVGV4dERlc2MgPSB7XG5cdHpJbmRleDogMTAsXG5cdGZvbnRGYW1pbHk6ICdSb2JvdG8nLFxuXHRmb250U2l6ZTogMjUsXG5cdHBhZGRpbmc6IDIwICxcblx0Y29sb3I6XCJncmF5XCIsXG5cdGZvbnRTbW9vdGg6IFwiMmVtXCIsXG5cdHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvYm90dG9tLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFBQTtBQUNBOztBQUlBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBRUE7Ozs7O0FBR0E7QUFBQTtBQUNBOzs7O0FBT0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUF2QkE7QUFDQTs7OztBQTRCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUxBO0FBU0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBUEE7QUFDQTtBQVNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFOQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9