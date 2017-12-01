'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactParallax = require('react-parallax');

var _Tile = require('../components/Tile');

var _Tile2 = _interopRequireDefault(_Tile);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _bottom = require('../components/bottom');

var _bottom2 = _interopRequireDefault(_bottom);

var _reactSpinners = require('react-spinners');

var _reactSpinners2 = _interopRequireDefault(_reactSpinners);

var _reactYoutube = require('react-youtube');

var _reactYoutube2 = _interopRequireDefault(_reactYoutube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/hugofnesteves/Desktop/InesNoguira/pages/index.js?entry';

var AOS = null; //mounted on "ComponentDidMount()" to be only used on Client Side"


var inesImg = "../static/inesBW.jpg";
var panoImg = "../static/pano.jpg";
var imageTest = "http://fillmurray.com/g/700/500";
var image2 = "../static/forest1.jpg";
var image3 = "../static/drone-bleu.png";

var test = function (_React$Component) {
	(0, _inherits3.default)(test, _React$Component);

	function test() {
		(0, _classCallCheck3.default)(this, test);

		var _this = (0, _possibleConstructorReturn3.default)(this, (test.__proto__ || (0, _getPrototypeOf2.default)(test)).call(this));

		_this.state = {
			allContentLoaded: false

		};

		return _this;
	}

	(0, _createClass3.default)(test, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			AOS = require('aos');
			AOS.init();

			this.setState({
				allContentLoaded: true

			});
		}
	}, {
		key: 'render',
		value: function render() {
			/*
   	AOS.init({
     duration: 1200,
   })
   */

			return _react2.default.createElement('div', {
				className: 'jsx-3617092203',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, _react2.default.createElement(_head2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 50
				}
			}, _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Karla', rel: 'stylesheet', className: 'jsx-3617092203',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 51
				}
			}), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Anton', rel: 'stylesheet', className: 'jsx-3617092203',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 52
				}
			}), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Roboto', rel: 'stylesheet', className: 'jsx-3617092203',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 53
				}
			}), _react2.default.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Over+the+Rainbow', rel: 'stylesheet', className: 'jsx-3617092203',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 54
				}
			}), _react2.default.createElement('link', { href: '../static/aos.css', rel: 'stylesheet', className: 'jsx-3617092203',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 55
				}
			})), _react2.default.createElement(_style2.default, {
				styleId: '3617092203',
				css: 'body{background:#fff;margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEc0IsQUFHMEIsZ0JBQ1IsU0FDSCxVQUNQIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9odWdvZm5lc3RldmVzL0Rlc2t0b3AvSW5lc05vZ3VpcmEiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBQYXJhbGxheCwgQmFja2dyb3VuZCB9IGZyb20gJ3JlYWN0LXBhcmFsbGF4JztcbmltcG9ydCBUaWxlIGZyb20gJy4uL2NvbXBvbmVudHMvVGlsZSc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEJvdHRvbSBmcm9tIFwiLi4vY29tcG9uZW50cy9ib3R0b21cIlxudmFyIEFPUyA9IG51bGw7IC8vbW91bnRlZCBvbiBcIkNvbXBvbmVudERpZE1vdW50KClcIiB0byBiZSBvbmx5IHVzZWQgb24gQ2xpZW50IFNpZGVcIlxuaW1wb3J0IENsaW1iaW5nQm94TG9hZGVyIGZyb20gXCJyZWFjdC1zcGlubmVyc1wiO1xuaW1wb3J0IFlvdVR1YmUgZnJvbSAncmVhY3QteW91dHViZSc7XG5cblxuY29uc3QgaW5lc0ltZyA9IFwiLi4vc3RhdGljL2luZXNCVy5qcGdcIjtcbmNvbnN0IHBhbm9JbWc9IFwiLi4vc3RhdGljL3Bhbm8uanBnXCI7XG5jb25zdCBpbWFnZVRlc3QgID1cImh0dHA6Ly9maWxsbXVycmF5LmNvbS9nLzcwMC81MDBcIjtcbmNvbnN0IGltYWdlMiA9IFwiLi4vc3RhdGljL2ZvcmVzdDEuanBnXCI7XG5jb25zdCBpbWFnZTMgPSBcIi4uL3N0YXRpYy9kcm9uZS1ibGV1LnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB0ZXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50ICB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnN0YXRlID17XG5hbGxDb250ZW50TG9hZGVkOmZhbHNlLFxuXG5cdFx0fVxuXG4gIH1cblxuY29tcG9uZW50RGlkTW91bnQoKXtcbkFPUyA9IHJlcXVpcmUoXCJhb3NcIik7XG5BT1MuaW5pdCgpO1xuXG50aGlzLnNldFN0YXRlKHtcbmFsbENvbnRlbnRMb2FkZWQ6dHJ1ZVxuXG59KVxuXG59XG5cbnJlbmRlcigpe1xuLypcblx0QU9TLmluaXQoe1xuICBkdXJhdGlvbjogMTIwMCxcbn0pXG4qL1xuXG4gIHJldHVybihcbiAgXHRcdDxkaXYgPlxuXG5cdFx0XHQ8SGVhZD5cblx0XHRcdFx0PGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1LYXJsYVwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuXHRcdFx0XHQ8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUFudG9uXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cblx0XHRcdFx0PGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG9cIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cblx0XHRcdFx0PGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1PdmVyK3RoZStSYWluYm93XCIgcmVsPVwic3R5bGVzaGVldFwiLz5cblx0XHRcdFx0PGxpbmsgaHJlZj1cIi4uL3N0YXRpYy9hb3MuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG5cdFx0XHQ8L0hlYWQ+XG5cblx0XHRcdDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cdCAgICAgIGJvZHkge1xuXHQgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG5cdCAgICAgICAgbWFyZ2luOjA7XG5cdFx0XHRcdFx0cGFkZGluZzowO1xuXHQgICAgICB9XG5cdCAgICBgfTwvc3R5bGU+XG5cbnsvKlxuXHRcdFx0PFBhcmFsbGF4IGJnSW1hZ2U9e3Bhbm9JbWd9IGJnU3R5bGU9e21haW5QaWN9IGJsdXI9e3ttaW46IC01LG1heDo1fX0gc3RyZW5ndGg9ezUwMH0+XG5cdFx0XHQgIDxkaXYgc3R5bGU9e3toZWlnaHQ6IDgwMH19ID5cblxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8L1BhcmFsbGF4PiAqL31cblx0XHQgPFBhcmFsbGF4IGJnSW1hZ2U9e2luZXNJbWd9IGJnU3R5bGU9e21haW5QaWN9IGJsdXI9e3ttaW46IC01LG1heDo1fX0gc3RyZW5ndGg9ey01MDB9PlxuXHRcdFx0ICA8ZGl2IHN0eWxlPXt7d2lkdGg6XCIxNjAlXCIsIGhlaWdodDogNTAwfX0gPlxuXHRcdFx0XHQ8aDEgc3R5bGU9e3RpdGxlU3R5bGVfSW5lc30gZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCIgIGRhdGEtYW9zLWRlbGF5PVwiMjAwXCIgZGF0YS1hb3MtZHVyYXRpb249XCIzMDBcIiA+IEluw6pzIDwvaDE+XG5cdFx0XHRcdDxoMSBzdHlsZT17dGl0bGVTdHlsZV9Ob2d1ZWlyYX0gZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCIgIGRhdGEtYW9zLWRlbGF5PVwiMTIwMFwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiPiBOb2d1ZWlyYTwvaDE+XG5cdFx0ICA8L2Rpdj5cblx0XHRcdDwvUGFyYWxsYXg+XG5cblx0XHRcdDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgZmxleDoxLCAgZmxleFdyYXA6XCJ3cmFwXCIsICB3aWR0aDpcIjEwMCVcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn19PlxuXHRcdFx0XHRcdDxkaXYgIGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiIGRhdGEtYW9zLWRlbGF5PVwiMTAwXCI+XG5cdFx0XHRcdFx0XHQ8VGlsZVxuXHRcdFx0XHRcdFx0XHR0aXRsZT0nXCJOZWdybyBlbSBjaMOjbyBkZSBTYW5ndWUgVmVyZGVcIidcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249J0luw6pzIE5vZ3VlaXJhIGUgQ2FybG9zIFwiWsOtbmdhcm9cIiBhIHBhcnRpciBkYSBwb2VzaWEgZGUgTcOhcmlvIERpb27DrXNpbyAtVGVhdHJvIE1hcmlhIE1hdG9zJ1xuXHRcdFx0XHRcdFx0XHRwaWM9XCJodHRwczovL21lZGlhLWV4cDEubGljZG4uY29tL21lZGlhLXByb3h5L2V4dD93PTgwMCZoPTgwMCZmPW4maGFzaD0lMkIlMkJDSWJmUFpPNnU5ZTM3NEJrYWJFTlZsSzdrJTNEJm9yYT0xJTJDYUZCQ1RYZGtSbXBHTDJsdlFVRkJQUSUyQ3hBVnRhOUVyMFZpbmtod2ZqdzgxNzd5RTQxeTg3VU5DVm9yZEVHWHlEM3UwcVlyZGYzYnNLSlRYZXVQMHVRdEVMU3NjbEZGa2ZQS2dFVFN5RDVXMUtJcnJmTnNrM3BTeEpZMjRaeFVCYkZJOGxXeElcIi8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiAgZGF0YS1hb3M9XCJmYWRlLWxlZnRcIiBkYXRhLWFvcy1kZWxheT1cIjMwMFwiPlxuXHRcdFx0XHRcdDxUaWxlXG5cdFx0XHRcdFx0XHRcdHRpdGxlPSdQcm9mZXNzb3JhIGRlIFZveidcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249JyAnXG5cdFx0XHRcdFx0XHRcdHBpYz1cImh0dHBzOi8vc2NvbnRlbnQuZmxpczUtMS5mbmEuZmJjZG4ubmV0L3YvdDEuMC05LzE2MTc0ODk4XzEwMTU0ODA0NDQ1OTUyOTA2XzQxNTUwMjk1MjUzNjIwNDE1NTBfbi5wbmc/b2g9MzViZjA4YWU2NDcyYzAyYmI4NTEwNDNhMjY3MDcxYzQmb2U9NUE4OUJCREVcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiAgZGF0YS1hb3M9XCJmYWRlLXJpZ2h0XCIgZGF0YS1hb3MtZGVsYXk9XCI2MDBcIj5cblx0XHRcdFx0XHQ8VGlsZVxuXHRcdFx0XHRcdFx0XHR0aXRsZT0nXCJPIEltcHJvbXB0dSBkZSBWZXJzYWlsbGVzXCInXG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uPScgTm9tZWFkbyBwYXJhIG1lbGhvciBlc3BlY3TDoWN1bG8gZG8gYW5vIDIwMTYgcGVsYSBTUEEgZSBHbG9ib3MgZGUgT3VybyAtIFRlYXRybyBOYWNpb25hbCBELiBNYXJpYSBJSSdcblx0XHRcdFx0XHRcdFx0cGljPVwiaHR0cHM6Ly9zaW5haXNlbWxpbmhhLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxNi8wNC9uZzY0Nzc4NjkuanBnXCJcblx0XHRcdFx0XHQvPiA8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4OjEsIGJhY2tncm91bmRDb2xvcjpcImJsYWNrXCIsIHdpZHRoOlwiMTAwJVwiLGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsIGFsaWduQ29udGVudDpcImNlbnRlclwiIH19PlxuXHRcdFx0XHRcdFx0XHQ8WW91VHViZSAgIHZpZGVvSWQ9e1wiVGhYX2Y0WTVWVEVcIn0gICAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXg6MSwgIGZsZXhXcmFwOlwid3JhcFwiLCB3aWR0aDpcIjEwMCVcIiwganVzdGlmeUNvbnRlbnQ6XCJjZW50ZXJcIn19PlxuXHRcdFx0XHRcdDxkaXYgIGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiIGRhdGEtYW9zLWRlbGF5PVwiMTAwXCI+XG5cdFx0XHRcdFx0PFRpbGVcblx0XHRcdFx0XHRcdFx0dGl0bGU9J1wiQ29ybyBkYSBBY2hhZGFcIidcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249J0Rlc2RlIGEgc3VhIGZvcm1hw6fDo28gZW0gMjAwOS5DYXNhIGRhIEFjaGFkYSAtIENlbnRybyBNw6FyaW8gRGlvbsOtc2lvJ1xuXHRcdFx0XHRcdFx0XHRwaWM9XCJodHRwOi8vY2VudHJvbWFyaW9kaW9uaXNpby5vcmcvSW1hZ2Vuc19jYXNhZGFjYWhhZGEvY29ybzIuanBnXCJcblx0XHRcdFx0XHQvPiA8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2ICBkYXRhLWFvcz1cImZhZGUtcmlnaHRcIiBkYXRhLWFvcy1kZWxheT1cIjQwMFwiPlxuXHRcdFx0XHRcdDxUaWxlXG5cdFx0XHRcdFx0XHRcdHRpdGxlPSdFbmNlbmFkb3Jlcydcblx0XHRcdFx0XHRcdFx0ZGVzY3JpcHRpb249J0FudG9uaW5vIFNvbG1lciwgRmVybmFuZGEgTGFwYSwgSm/Do28gZ3Jvc3NvLCBNaWd1ZWwgbG91cmVpcm8sSm9yZ2UgU2lsdmEgTWVsbyBlbnRyZSBvdXRyb3MnXG5cdFx0XHRcdFx0XHRcdHBpYz1cImh0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvOS85NC9UaGVhdHJlX1JveWFsX0JyaWdodG9uLmpwZy8xMDI0cHgtVGhlYXRyZV9Sb3lhbF9CcmlnaHRvbi5qcGdcIlxuXHRcdFx0XHRcdC8+IDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgIGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiIGRhdGEtYW9zLWRlbGF5PVwiNzAwXCI+XG5cdFx0XHRcdFx0PFRpbGVcblx0XHRcdFx0XHRcdFx0dGl0bGU9J1wiTWVsYW5pYSBNZWxhbm9tYVwiJ1xuXHRcdFx0XHRcdFx0XHRkZXNjcmlwdGlvbj0nRGlyZcOnw6NvIE1pZ3VlbCBMb3VyZWlybyAtIFJ1YSBkYXMgR2Fpdm90YXMgNidcblx0XHRcdFx0XHRcdFx0cGljPVwiaHR0cDovL3J1YWRhc2dhaXZvdGFzNi5wdC93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNy9NTV9hcnRpZ28uanBnXCJcblxuXHRcdFx0XHRcdC8+IDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgIGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiIGRhdGEtYW9zLWRlbGF5PVwiMTAwMFwiPlxuXHRcdFx0XHRcdDxUaWxlXG5cdFx0XHRcdFx0XHRcdHRpdGxlPSdcIkEgYWLDs2JvZGEgbsOjbyBjYWl1LCBhIGFiw7Nib2RhIG7Do28gY2FpcsOhXCInXG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uPSdFbmNlbmHDp8OjbyBkZSBUb2JpYXMgTW9udGVpcm8gYSBwYXJ0aXIgZGUgXCJBIHBhaXjDo28gZGUgTWVzdHJlIEFmb25zbyBEb21pbmd1ZXNcIiBkZSBBbnTDs25pbyBQYXRyw61jaW8gLSBNb3N0ZWlybyBkYSBCYXRhbGhhJ1xuXHRcdFx0XHRcdFx0XHRwaWM9XCJodHRwczovL2kueXRpbWcuY29tL3ZpL3k3b1ZWdnhsTG9JL21heHJlc2RlZmF1bHQuanBnXCJcblxuXHRcdFx0XHRcdC8+IDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgIGRhdGEtYW9zPVwiZmFkZS1yaWdodFwiIGRhdGEtYW9zLWRlbGF5PVwiMTMwMFwiPlxuXHRcdFx0XHRcdDxUaWxlXG5cdFx0XHRcdFx0XHRcdHRpdGxlPSdcIlJ5dGhtYXNcIiBkZSBMdWlzIGRlIENhbcO1ZXMnXG5cdFx0XHRcdFx0XHRcdGRlc2NyaXB0aW9uPSdEaXJlY8Onw6NvIE1pZ3VlbCBMb3VyZWlybyAtIFNhbMOjbyBOb2JyZSBkbyBUZWF0cm8gTmFjaW9uYWwgRC5NYXJpYSBJSSdcblx0XHRcdFx0XHRcdFx0cGljPVwiaHR0cHM6Ly9tZWRpYS1leHAxLmxpY2RuLmNvbS9tZWRpYS1wcm94eS9leHQ/dz04MDAmaD04MDAmZj1uJmhhc2g9TFdoM2o3WmdUTnJWMzhLdU9ycnhWalVVTzcwJTNEJm9yYT0xJTJDYUZCQ1RYZGtSbXBHTDJsdlFVRkJQUSUyQ3hBVnRhOUVyMFZpbmtod2ZqdzgxNzd5RTQxeTg3VU5DVm9yZEVHWHlEM3UwcVlyZGYzVzZmSlhYTE9laHVWNUVmWDhja1FWbmZQTDVRV0swRDVHLUs0cnZMSTBnaVpmaGRZMjRaeFVCYkZJOGxXNFwiXG5cdFx0XHRcdFx0Lz4gPC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblxuXG5cblx0XHRcdDxCb3R0b20vPlxuXG5cblxuXHRcdDwvZGl2PlxuXHQpfVxuXG59XG5cbmNvbnN0IGxvYWRpbmdTY3JlZW49e1xuXHRiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwiLFxuXHRqdXN0aWZ5Q29udGVudDpcImNlbnRlclwiLFxuXHRhbGlnbkNvbnRlbnQ6XCJjZW50ZXJcIlxufVxuXG5jb25zdCBtYWluUGljID0ge1xuXHRtaW5IZWlnaHQ6XCIyMDBweFwiLFxuXHR3aWR0aDpcIjEwMCVcIixcblx0ekluZGV4OiAtMTAsXG5cdC8vYmFja2dyb3VuZFNpemU6XCJjb3ZlclwiLFxuXHQvL2JhY2tncm91bmRJbWFnZSA6IFwidXJsKC4uL3N0YXRpYy9tYWluUGljLmpwZWcpXCIsXG5cdC8vYmFja2dyb3VuZENvbG9yIDpcImJsYWNrXCIsXG5cdG1hcmdpbjowLFxuXHRwYWRkaW5nOjAsXG59XG5cbmNvbnN0IHdoaXRlQkcgPSB7XG5cdHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuXHR0b3A6XCIwJVwiLFxuXHRsZWZ0OlwiNjAlXCIsXG5cdGhlaWdodDpcIjUwMHB4XCIsXG5cdHdpZHRoOlwiNzAwcHhcIixcblx0ekluZGV4OiAxMCxcblx0Ly9iYWNrZ3JvdW5kU2l6ZTpcImNvdmVyXCIsXG5cdC8vYmFja2dyb3VuZEltYWdlIDogXCJ1cmwoLi4vc3RhdGljL21haW5QaWMuanBlZylcIixcblx0YmFja2dyb3VuZENvbG9yIDpcIndoaXRlXCIsXG59XG5cbmNvbnN0IHRpdGxlU3R5bGVfSW5lcyA9IHtcblx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdHRvcDpcIjAlXCIsXG5cdGxlZnQ6XCI1MCVcIixcblx0bWFyZ2luTGVmdDpcIi0xNTBweFwiLFxuXHR6SW5kZXg6IDExLFxuXHQvL2ZvbnRGYW1pbHk6ICdSb2JvdG8nLFxuXHRmb250RmFtaWx5OiAnT3ZlciB0aGUgUmFpbmJvdycsXG5cdGZvbnRTaXplOiAxMjAsXG5cdHBhZGRpbmc6IDIwICxcblx0Y29sb3I6XCJ3aGl0ZVwiLFxuXHRmb250U21vb3RoOiBcIjJlbVwiLFxufTtcblxuY29uc3QgdGl0bGVTdHlsZV9Ob2d1ZWlyYSA9IHtcblx0cG9zaXRpb246ICdhYnNvbHV0ZScsXG5cdHRvcDpcIjAlXCIsXG5cdGxlZnQ6XCI1MCVcIixcblx0bWFyZ2luTGVmdDpcIjE0MHB4XCIsXG5cdHpJbmRleDogMTAsXG5cdC8vZm9udEZhbWlseTogJ1JvYm90bycsXG5cdGZvbnRGYW1pbHk6ICdPdmVyIHRoZSBSYWluYm93Jyxcblx0Zm9udFNpemU6IDEyMCxcblx0cGFkZGluZzogMjAgLFxuXHRjb2xvcjpcImJsYWNrXCIsXG5cdGZvbnRTbW9vdGg6IFwiMmVtXCIsXG59O1xuXG5jb25zdCB2aWRlb0VzY29sYT17XG5cdFx0aGVpZ2h0OlwiMzAwcHhcIixcblx0XHR3aWR0aDpcIjEwMCVcIixcblx0XHRiYWNrZ3JvdW5kQ29sb3I6XCJibGFja1wiLFxuXHRcdGp1c3RpZnlDb250ZW50OlwiY2VudGVyXCIsXG5cdFx0YWxpZ25Db250ZW50OlwiY2VudGVyXCJcbn1cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
			}), _react2.default.createElement(_reactParallax.Parallax, { bgImage: inesImg, bgStyle: mainPic, blur: { min: -5, max: 5 }, strength: -500, __source: {
					fileName: _jsxFileName,
					lineNumber: 72
				}
			}, _react2.default.createElement('div', { style: { width: "160%", height: 500 }, className: 'jsx-3617092203',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 73
				}
			}, _react2.default.createElement('h1', { style: titleStyle_Ines, 'data-aos': 'fade-right', 'data-aos-delay': '200', 'data-aos-duration': '300', className: 'jsx-3617092203',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 74
				}
			}, ' In\xEAs '), _react2.default.createElement('h1', { style: titleStyle_Nogueira, 'data-aos': 'fade-right', 'data-aos-delay': '1200', 'data-aos-duration': '1000', className: 'jsx-3617092203',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 75
				}
			}, ' Nogueira'))), _react2.default.createElement('div', { style: { display: "flex", flex: 1, flexWrap: "wrap", width: "100%", justifyContent: "center" }, className: 'jsx-3617092203',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 79
				}
			}, _react2.default.createElement('div', { 'data-aos': 'fade-right', 'data-aos-delay': '100', className: 'jsx-3617092203',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 80
				}
			}, _react2.default.createElement(_Tile2.default, {
				title: '"Negro em ch\xE3o de Sangue Verde"',
				description: 'In\xEAs Nogueira e Carlos "Z\xEDngaro" a partir da poesia de M\xE1rio Dion\xEDsio -Teatro Maria Matos',
				pic: 'https://media-exp1.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=%2B%2BCIbfPZO6u9e374BkabENVlK7k%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta9Er0Vinkhwfjw8177yE41y87UNCVordEGXyD3u0qYrdf3bsKJTXeuP0uQtELSsclFFkfPKgETSyD5W1KIrrfNsk3pSxJY24ZxUBbFI8lWxI', __source: {
					fileName: _jsxFileName,
					lineNumber: 81
				}
			})), _react2.default.createElement('div', { 'data-aos': 'fade-left', 'data-aos-delay': '300', className: 'jsx-3617092203',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 86
				}
			}, _react2.default.createElement(_Tile2.default, {
				title: 'Professora de Voz',
				description: ' ',
				pic: 'https://scontent.flis5-1.fna.fbcdn.net/v/t1.0-9/16174898_10154804445952906_4155029525362041550_n.png?oh=35bf08ae6472c02bb851043a267071c4&oe=5A89BBDE',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 87
				}
			})), _react2.default.createElement('div', { 'data-aos': 'fade-right', 'data-aos-delay': '600', className: 'jsx-3617092203',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 93
				}
			}, _react2.default.createElement(_Tile2.default, {
				title: '"O Impromptu de Versailles"',
				description: ' Nomeado para melhor espect\xE1culo do ano 2016 pela SPA e Globos de Ouro - Teatro Nacional D. Maria II',
				pic: 'https://sinaisemlinha.files.wordpress.com/2016/04/ng6477869.jpg',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 94
				}
			}), ' ')), _react2.default.createElement('div', { style: { display: "flex", flex: 1, backgroundColor: "black", width: "100%", justifyContent: "center", alignContent: "center" }, className: 'jsx-3617092203',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 101
				}
			}, _react2.default.createElement(_reactYoutube2.default, { videoId: "ThX_f4Y5VTE", __source: {
					fileName: _jsxFileName,
					lineNumber: 102
				}
			})), _react2.default.createElement('div', { style: { display: "flex", flex: 1, flexWrap: "wrap", width: "100%", justifyContent: "center" }, className: 'jsx-3617092203',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 105
				}
			}, _react2.default.createElement('div', { 'data-aos': 'fade-right', 'data-aos-delay': '100', className: 'jsx-3617092203',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 106
				}
			}, _react2.default.createElement(_Tile2.default, {
				title: '"Coro da Achada"',
				description: 'Desde a sua forma\xE7\xE3o em 2009.Casa da Achada - Centro M\xE1rio Dion\xEDsio',
				pic: 'http://centromariodionisio.org/Imagens_casadacahada/coro2.jpg',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 107
				}
			}), ' '), _react2.default.createElement('div', { 'data-aos': 'fade-right', 'data-aos-delay': '400', className: 'jsx-3617092203',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 112
				}
			}, _react2.default.createElement(_Tile2.default, {
				title: 'Encenadores',
				description: 'Antonino Solmer, Fernanda Lapa, Jo\xE3o grosso, Miguel loureiro,Jorge Silva Melo entre outros',
				pic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Theatre_Royal_Brighton.jpg/1024px-Theatre_Royal_Brighton.jpg',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 113
				}
			}), ' '), _react2.default.createElement('div', { 'data-aos': 'fade-right', 'data-aos-delay': '700', className: 'jsx-3617092203',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 118
				}
			}, _react2.default.createElement(_Tile2.default, {
				title: '"Melania Melanoma"',
				description: 'Dire\xE7\xE3o Miguel Loureiro - Rua das Gaivotas 6',
				pic: 'http://ruadasgaivotas6.pt/wp-content/uploads/2017/07/MM_artigo.jpg',

				__source: {
					fileName: _jsxFileName,
					lineNumber: 119
				}
			}), ' '), _react2.default.createElement('div', { 'data-aos': 'fade-right', 'data-aos-delay': '1000', className: 'jsx-3617092203',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 125
				}
			}, _react2.default.createElement(_Tile2.default, {
				title: '"A ab\xF3boda n\xE3o caiu, a ab\xF3boda n\xE3o cair\xE1"',
				description: 'Encena\xE7\xE3o de Tobias Monteiro a partir de "A paix\xE3o de Mestre Afonso Domingues" de Ant\xF3nio Patr\xEDcio - Mosteiro da Batalha',
				pic: 'https://i.ytimg.com/vi/y7oVVvxlLoI/maxresdefault.jpg',

				__source: {
					fileName: _jsxFileName,
					lineNumber: 126
				}
			}), ' '), _react2.default.createElement('div', { 'data-aos': 'fade-right', 'data-aos-delay': '1300', className: 'jsx-3617092203',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 132
				}
			}, _react2.default.createElement(_Tile2.default, {
				title: '"Rythmas" de Luis de Cam\xF5es',
				description: 'Direc\xE7\xE3o Miguel Loureiro - Sal\xE3o Nobre do Teatro Nacional D.Maria II',
				pic: 'https://media-exp1.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=LWh3j7ZgTNrV38KuOrrxVjUUO70%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta9Er0Vinkhwfjw8177yE41y87UNCVordEGXyD3u0qYrdf3W6fJXXLOehuV5EfX8ckQVnfPL5QWK0D5G-K4rvLI0giZfhdY24ZxUBbFI8lW4',
				__source: {
					fileName: _jsxFileName,
					lineNumber: 133
				}
			}), ' ')), _react2.default.createElement(_bottom2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 142
				}
			}));
		}
	}]);

	return test;
}(_react2.default.Component);

exports.default = test;


var loadingScreen = {
	backgroundColor: "white",
	justifyContent: "center",
	alignContent: "center"
};

var mainPic = {
	minHeight: "200px",
	width: "100%",
	zIndex: -10,
	//backgroundSize:"cover",
	//backgroundImage : "url(../static/mainPic.jpeg)",
	//backgroundColor :"black",
	margin: 0,
	padding: 0
};

var whiteBG = {
	position: 'absolute',
	top: "0%",
	left: "60%",
	height: "500px",
	width: "700px",
	zIndex: 10,
	//backgroundSize:"cover",
	//backgroundImage : "url(../static/mainPic.jpeg)",
	backgroundColor: "white"
};

var titleStyle_Ines = {
	position: 'absolute',
	top: "0%",
	left: "50%",
	marginLeft: "-150px",
	zIndex: 11,
	//fontFamily: 'Roboto',
	fontFamily: 'Over the Rainbow',
	fontSize: 120,
	padding: 20,
	color: "white",
	fontSmooth: "2em"
};

var titleStyle_Nogueira = {
	position: 'absolute',
	top: "0%",
	left: "50%",
	marginLeft: "140px",
	zIndex: 10,
	//fontFamily: 'Roboto',
	fontFamily: 'Over the Rainbow',
	fontSize: 120,
	padding: 20,
	color: "black",
	fontSmooth: "2em"
};

var videoEscola = {
	height: "300px",
	width: "100%",
	backgroundColor: "black",
	justifyContent: "center",
	alignContent: "center"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiUGFyYWxsYXgiLCJCYWNrZ3JvdW5kIiwiVGlsZSIsIkhlYWQiLCJCb3R0b20iLCJBT1MiLCJDbGltYmluZ0JveExvYWRlciIsIllvdVR1YmUiLCJpbmVzSW1nIiwicGFub0ltZyIsImltYWdlVGVzdCIsImltYWdlMiIsImltYWdlMyIsInRlc3QiLCJzdGF0ZSIsImFsbENvbnRlbnRMb2FkZWQiLCJyZXF1aXJlIiwiaW5pdCIsInNldFN0YXRlIiwibWFpblBpYyIsIm1pbiIsIm1heCIsIndpZHRoIiwiaGVpZ2h0IiwidGl0bGVTdHlsZV9JbmVzIiwidGl0bGVTdHlsZV9Ob2d1ZWlyYSIsImRpc3BsYXkiLCJmbGV4IiwiZmxleFdyYXAiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsImFsaWduQ29udGVudCIsImxvYWRpbmdTY3JlZW4iLCJtaW5IZWlnaHQiLCJ6SW5kZXgiLCJtYXJnaW4iLCJwYWRkaW5nIiwid2hpdGVCRyIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIm1hcmdpbkxlZnQiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJjb2xvciIsImZvbnRTbW9vdGgiLCJ2aWRlb0VzY29sYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBVTs7QUFDbkIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVk7Ozs7QUFFbkIsQUFBTzs7OztBQUNQLEFBQU87Ozs7Ozs7O0FBRlAsSUFBSSxNLEFBQUosQUFBVSxNQUFNOzs7QUFLaEIsSUFBTSxVQUFOLEFBQWdCO0FBQ2hCLElBQU0sVUFBTixBQUFlO0FBQ2YsSUFBTSxZQUFOLEFBQWtCO0FBQ2xCLElBQU0sU0FBTixBQUFlO0FBQ2YsSUFBTSxTQUFOLEFBQWU7O0ksQUFFTTsrQkFFcEI7O2lCQUFj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Q1EsQUFDTjtpQkFGRixBQUVjLEFBQ1o7U0FIRixBQUdNOzs7ZUFITjtpQkFEQSxBQUNBO0FBQUE7QUFDRSxPQXRCRixBQW9CQSxBQU9BLHNCQUFBLGNBQUEsU0FBTSxZQUFOLEFBQWUsY0FBYSxrQkFBNUIsQUFBMkMsbUJBQTNDOztlQUFBO2lCQUFBLEFBQ0E7QUFEQTtzQkFDQSxBQUFDO1dBQUQsQUFDUSxBQUNOO2lCQUZGLEFBRWMsQUFDWjtTQUhGLEFBR007O2VBSE47aUJBREEsQUFDQTtBQUFBO0FBQ0UsT0F0RkgsQUF5REMsQUEyQkEsQUFVRix1QkFBQSxBQUFDOztlQUFEO2lCQS9GRCxBQUNFLEFBOEZELEFBS0E7QUFMQTtBQUFBOzs7OztFQTVIK0IsZ0JBQU0sQTs7a0JBQW5CLEE7OztBQXFJckIsSUFBTTtrQkFBYyxBQUNILEFBQ2hCO2lCQUZtQixBQUVKLEFBQ2Y7ZUFIRCxBQUFvQixBQUdOO0FBSE0sQUFDbkI7O0FBS0QsSUFBTTtZQUFVLEFBQ0wsQUFDVjtRQUZlLEFBRVQsQUFDTjtTQUFRLENBSE8sQUFHTixBQUNUO0FBQ0E7QUFDQTtBQUNBO1NBUGUsQUFPUixBQUNQO1VBUkQsQUFBZ0IsQUFRUDtBQVJPLEFBQ2Y7O0FBVUQsSUFBTTtXQUFVLEFBQ0wsQUFDVjtNQUZlLEFBRVgsQUFDSjtPQUhlLEFBR1YsQUFDTDtTQUplLEFBSVIsQUFDUDtRQUxlLEFBS1QsQUFDTjtTQU5lLEFBTVAsQUFDUjtBQUNBO0FBQ0E7a0JBVEQsQUFBZ0IsQUFTRTtBQVRGLEFBQ2Y7O0FBV0QsSUFBTTtXQUFrQixBQUNiLEFBQ1Y7TUFGdUIsQUFFbkIsQUFDSjtPQUh1QixBQUdsQixBQUNMO2FBSnVCLEFBSVosQUFDWDtTQUx1QixBQUtmLEFBQ1I7QUFDQTthQVB1QixBQU9YLEFBQ1o7V0FSdUIsQUFRYixBQUNWO1VBVHVCLEFBU2QsQUFDVDtRQVZ1QixBQVVqQixBQUNOO2FBWEQsQUFBd0IsQUFXWDtBQVhXLEFBQ3ZCOztBQWFELElBQU07V0FBc0IsQUFDakIsQUFDVjtNQUYyQixBQUV2QixBQUNKO09BSDJCLEFBR3RCLEFBQ0w7YUFKMkIsQUFJaEIsQUFDWDtTQUwyQixBQUtuQixBQUNSO0FBQ0E7YUFQMkIsQUFPZixBQUNaO1dBUjJCLEFBUWpCLEFBQ1Y7VUFUMkIsQUFTbEIsQUFDVDtRQVYyQixBQVVyQixBQUNOO2FBWEQsQUFBNEIsQUFXZjtBQVhlLEFBQzNCOztBQWFELElBQU07U0FBWSxBQUNULEFBQ1A7UUFGZ0IsQUFFVixBQUNOO2tCQUhnQixBQUdBLEFBQ2hCO2lCQUpnQixBQUlELEFBQ2Y7ZUFMRixBQUFrQixBQUtIO0FBTEcsQUFDaEIiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2h1Z29mbmVzdGV2ZXMvRGVza3RvcC9JbmVzTm9ndWlyYSJ9