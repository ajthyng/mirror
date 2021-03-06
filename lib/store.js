"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = createStore;
exports.replaceReducer = replaceReducer;
exports.store = void 0;

var _redux = require("redux");

var _middleware = _interopRequireDefault(require("./middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var store;
exports.store = store;

function createStore(models, reducers, initialState) {
  var middlewares = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  var middleware = _redux.applyMiddleware.apply(void 0, _toConsumableArray(middlewares).concat([(0, _middleware.default)()]));

  var enhancers = [middleware];
  var composeEnhancers = _redux.compose;

  if (process.env.NODE_ENV !== 'production') {
    if (global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  var reducer = createReducer(models, reducers);
  var enhancer = composeEnhancers.apply(void 0, enhancers);
  exports.store = store = (0, _redux.createStore)(reducer, initialState, enhancer);
  return store;
}

function replaceReducer(store, models, reducers) {
  var reducer = createReducer(models, reducers);
  store.replaceReducer(reducer);
}

function createReducer(models, reducers) {
  var modelReducers = models.reduce(function (acc, cur) {
    acc[cur.name] = cur.reducer;
    return acc;
  }, {});
  return (0, _redux.combineReducers)(_objectSpread({}, reducers, modelReducers));
}