define(["exports", "react", "reactstrap"], function (_exports, _react, _reactstrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  var _jsxFileName = "C:\\Users\\User\\IdeaProjects\\inverted-index-ui\\src\\Add.js";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var Add =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Add, _React$Component);

    function Add(props) {
      var _this;

      _classCallCheck(this, Add);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Add).call(this, props));

      _defineProperty(_assertThisInitialized(_this), "text", {
        text: ''
      });

      _this.state = {
        text: _this.text
      };
      _this.handleAdd = _this.handleAdd.bind(_assertThisInitialized(_this));
      _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(Add, [{
      key: "handleChange",
      value: function handleChange(event) {
        var text = _objectSpread({}, this.state.text);

        text.text = event.target.value;
        this.setState({
          text: text
        });
      }
    }, {
      key: "handleAdd",
      value: function handleAdd() {
        var text;
        return regeneratorRuntime.async(function handleAdd$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                text = this.state.text;
                console.log(text);
                _context.next = 4;
                return regeneratorRuntime.awrap(fetch('/api/invertedindex?words=word1', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(text),
                  credentials: 'include'
                }));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, null, this);
      }
    }, {
      key: "render",
      value: function render() {
        return _react.default.createElement("div", {
          className: "text",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, _react.default.createElement("h1", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, " Add text "), _react.default.createElement(_reactstrap.Input, {
          type: "textarea",
          style: {
            marginBottom: 10,
            height: 400
          },
          name: "text",
          id: "text",
          onChange: this.handleChange,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }), _react.default.createElement(_reactstrap.Button, {
          onClick: this.handleAdd,
          color: "danger",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, "Add"));
      }
    }]);

    return Add;
  }(_react.default.Component);

  var _default = Add;
  _exports.default = _default;
});
