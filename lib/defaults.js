"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defaults;
exports.options = void 0;

var _effects = require("./effects");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var options = {
  middlewares: [],
  reducers: {},
  addEffect: (0, _effects.addEffect)(_effects.effects)
};
exports.options = options;

function defaults() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var middlewares = opts.middlewares,
      addEffect = opts.addEffect;

  if (middlewares && !Array.isArray(middlewares)) {
    throw new Error("middlewares \"".concat(middlewares, "\" is invalid, must be an Array!"));
  }

  if (addEffect) {
    if (typeof addEffect !== 'function' || typeof addEffect({}) !== 'function') {
      throw new Error("addEffect \"".concat(addEffect, "\" is invalid, must be a function that returns a function"));
    } else {
      opts.addEffect = opts.addEffect(_effects.effects);
    }
  }

  Object.keys(opts).forEach(function (key) {
    if (key === 'reducers') {
      options[key] = _objectSpread({}, options[key], opts[key]);
    } else {
      options[key] = opts[key];
    }
  });
}