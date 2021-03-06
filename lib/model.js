"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = model;
exports.models = void 0;

var _actions = require("./actions");

var isObject = function isObject(target) {
  return Object.prototype.toString.call(target) === '[object Object]';
};

var models = [];
exports.models = models;

function model(m) {
  var _validateModel = validateModel(m),
      name = _validateModel.name,
      reducers = _validateModel.reducers,
      initialState = _validateModel.initialState,
      effects = _validateModel.effects;

  var reducer = getReducer((0, _actions.resolveReducers)(name, reducers), initialState);
  var toAdd = {
    name: name,
    reducer: reducer
  };
  models.push(toAdd);
  (0, _actions.addActions)(name, reducers, effects);
  return toAdd;
}

function validateModel() {
  var m = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var name = m.name,
      reducers = m.reducers,
      effects = m.effects;

  if (!name || typeof name !== 'string') {
    throw new Error("Model name must be a valid string!");
  }

  if (models.find(function (item) {
    return item.name === name;
  })) {
    throw new Error("Model \"".concat(name, "\" has been created, please select another name!"));
  }

  if (reducers !== undefined && !isObject(reducers)) {
    throw new Error("Model reducers must be a valid object!");
  }

  if (effects !== undefined && !isObject(effects)) {
    throw new Error("Model effects must be a valid object!");
  }

  m.reducers = filterReducers(reducers);
  m.effects = filterReducers(effects);
  return m;
}

function getReducer(reducers) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    if (typeof reducers[action.type] === 'function') {
      return reducers[action.type](state, action.data);
    }

    return state;
  };
}

function filterReducers(reducers) {
  if (!reducers) {
    return reducers;
  }

  return Object.keys(reducers).reduce(function (acc, action) {
    if (typeof reducers[action] === 'function') {
      acc[action] = reducers[action];
    }

    return acc;
  }, {});
}