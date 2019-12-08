define(["exports", "react", "./App.css", "./SearchPage", "react-router-dom", "./Add"], function (_exports, _react, _App, _SearchPage, _reactRouterDom, _Add) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  _SearchPage = _interopRequireDefault(_SearchPage);
  _Add = _interopRequireDefault(_Add);
  var _jsxFileName = "C:\\Users\\User\\IdeaProjects\\inverted-index-ui\\src\\App.js";

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function App() {
    return _react.default.createElement("div", {
      className: "App",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }, _react.default.createElement(_reactRouterDom.BrowserRouter, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }, _react.default.createElement(_reactRouterDom.Route, {
      exact: true,
      path: "/",
      component: _SearchPage.default,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }), _react.default.createElement(_reactRouterDom.Route, {
      path: "/add",
      component: _Add.default,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    })));
  }

  var _default = App;
  _exports.default = _default;
});
