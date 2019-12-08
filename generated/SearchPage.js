define(["exports", "react", "reactstrap"], function (_exports, _react, _reactstrap) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireWildcard(_react);
  var _jsxFileName = "C:\\Users\\User\\IdeaProjects\\inverted-index-ui\\src\\SearchPage.js";

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var SearchPage =
  /*#__PURE__*/
  function (_Component) {
    _inherits(SearchPage, _Component);

    function SearchPage(props) {
      var _this;

      _classCallCheck(this, SearchPage);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchPage).call(this, props));
      _this.state = {
        texts: [],
        search: '',
        isLoading: true
      };
      _this.handleFind = _this.handleFind.bind(_assertThisInitialized(_this));
      _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(SearchPage, [{
      key: "handleChange",
      value: function handleChange(event) {
        console.log(event.target.value);
        this.find(event.target.value);
        this.setState({
          search: event.target.value
        });
      }
    }, {
      key: "find",
      value: function find(string) {
        var _this2 = this;

        var words, words1;
        return regeneratorRuntime.async(function find$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                words = string.trim().replace(/\s/g, ',').replace(/\s/g, '');
                words1 = string.trim().split(/\s/g);
                _context2.next = 4;
                return regeneratorRuntime.awrap(fetch('/api/invertedindex?words=' + words).then(function _callee(data) {
                  var texts, trimText, _loop, i;

                  return regeneratorRuntime.async(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return regeneratorRuntime.awrap(data.json());

                        case 2:
                          texts = _context.sent;
                          trimText = [];
                          console.log(texts);
                          console.log(words1);

                          _loop = function _loop(i) {
                            trimText = trimText.concat(texts.map(function (text) {
                              return text.text;
                            }).flatMap(function (text) {
                              return _this2.getMatches(words1[i], text).map(function (x) {
                                return text.substring(x - 100, x + 100);
                              });
                            }));
                          };

                          for (i = 0; i < words1.length; i++) {
                            _loop(i);
                          }

                          console.log(trimText);

                          _this2.setState({
                            texts: trimText,
                            isLoading: false
                          });

                        case 10:
                        case "end":
                          return _context.stop();
                      }
                    }
                  });
                }));

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        });
      }
    }, {
      key: "handleFind",
      value: function handleFind() {
        return regeneratorRuntime.async(function handleFind$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log(this.state);
                _context3.next = 3;
                return regeneratorRuntime.awrap(this.find(this.state.search));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, null, this);
      }
    }, {
      key: "getMatches",
      value: function getMatches(needle, haystack) {
        var myRe = new RegExp("(?:^|\\s)" + needle + "(?:^|\\s)((?!\\W(?=\\w))|(?=\\s))", "gi"),
            myArray,
            myResult = [];

        while ((myArray = myRe.exec(haystack)) !== null) {
          myResult.push(myArray.index);
        }

        return myResult;
      }
    }, {
      key: "render",
      value: function render() {
        var _this$state = this.state,
            isLoading = _this$state.isLoading,
            texts = _this$state.texts;
        var list = texts.map(function (text) {
          return _react.default.createElement(_reactstrap.Row, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }, _react.default.createElement(_reactstrap.Col, {
            align: "justify",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            }
          }, text));
        });
        isLoading = false;

        if (isLoading) {
          return _react.default.createElement("div", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            }
          }, _react.default.createElement(_reactstrap.Jumbotron, {
            fluid: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            }
          }, _react.default.createElement(_reactstrap.Container, {
            fluid: true,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          }, _react.default.createElement("h1", {
            className: "display-3",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            }
          }, "Please wait"), _react.default.createElement("p", {
            className: "lead",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            }
          }, "Loading..."))));
        }

        return _react.default.createElement("div", {
          class: "text",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          }
        }, _react.default.createElement("h3", {
          class: "title",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          }
        }, "Search"), _react.default.createElement(_reactstrap.Form, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          }
        }, _react.default.createElement(_reactstrap.FormGroup, {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          }
        }, _react.default.createElement(_reactstrap.Input, {
          type: "text",
          name: "text",
          id: "text",
          placeholder: "Write down index",
          onChange: this.handleChange,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          }
        }))));
      }
    }]);

    return SearchPage;
  }(_react.Component);

  var _default = SearchPage;
  _exports.default = _default;
});
