function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

define(["react", "react-dom", "./index.css", "./App", "./serviceWorker", "bootstrap/dist/css/bootstrap.min.css", "./style.css"], function (_react, _reactDom, _index, _App, serviceWorker, _bootstrapMin, _style) {
  "use strict";

  _react = _interopRequireDefault(_react);
  _reactDom = _interopRequireDefault(_reactDom);
  _App = _interopRequireDefault(_App);
  serviceWorker = _interopRequireWildcard(serviceWorker);
  var _jsxFileName = "C:\\Users\\User\\IdeaProjects\\inverted-index-ui\\src\\index.js";

  function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  _reactDom.default.render(_react.default.createElement(_App.default, {
    __self: void 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA


  serviceWorker.unregister();
});
