import { effects, addEffect } from './effects'

export const options = {
  // A list of the standard Redux middleware
  middlewares: [],

  // `options.reducers` will be directly handled by `combineReducers`,
  // so reducers defined here must be standard Redux reducer:
  //
  // reducers: {
  //   add: (state, action) => {}
  // }
  //
  reducers: {},

  // An overwrite of the existing effect handler
  addEffect: addEffect(effects),
}

// Can be called multiple times, ie. after load an async component that has
// exported standard Redux `reducer`s that need to be `replaceReducer` for the
// store.
//
// After the first time called, all later calls will try to *merge* `opts.reducers`
// into the previous `options.reducers`, other keys like `historyMode` will be *updated*
// if it is provided, otherwise it will be ignored, which means the previous values will
// be kept.
export default function defaults(opts = {}) {

  const {
    middlewares,
    addEffect
  } = opts

  if (middlewares && !Array.isArray(middlewares)) {
    throw new Error(`middlewares "${middlewares}" is invalid, must be an Array!`)
  }

  if (addEffect) {
    if (typeof addEffect !== 'function' || typeof addEffect({}) !== 'function') {
      throw new Error(`addEffect "${addEffect}" is invalid, must be a function that returns a function`)
    } else {
      // create effects handler with initial effects object
      opts.addEffect = opts.addEffect(effects)
    }
  }

  Object.keys(opts).forEach(key => {
    if (key === 'reducers') {
      options[key] = {
        ...options[key],
        ...opts[key]
      }
    } else {
      options[key] = opts[key]
    }
  })
}
