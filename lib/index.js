"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "connect", {
  enumerable: true,
  get: function get() {
    return _reactRedux.connect;
  }
});
Object.defineProperty(exports, "model", {
  enumerable: true,
  get: function get() {
    return _model.default;
  }
});
Object.defineProperty(exports, "actions", {
  enumerable: true,
  get: function get() {
    return _actions.actions;
  }
});
Object.defineProperty(exports, "render", {
  enumerable: true,
  get: function get() {
    return _render.default;
  }
});
Object.defineProperty(exports, "hook", {
  enumerable: true,
  get: function get() {
    return _hook.default;
  }
});
Object.defineProperty(exports, "defaults", {
  enumerable: true,
  get: function get() {
    return _defaults.default;
  }
});
exports.default = void 0;

var _reactRedux = require("react-redux");

var _model = _interopRequireDefault(require("./model"));

var _actions = require("./actions");

var _render = _interopRequireDefault(require("./render"));

var _hook = _interopRequireDefault(require("./hook"));

var _defaults = _interopRequireDefault(require("./defaults"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  model: _model.default,
  actions: _actions.actions,
  hook: _hook.default,
  defaults: _defaults.default,
  connect: _reactRedux.connect,
  render: _render.default
};
exports.default = _default;