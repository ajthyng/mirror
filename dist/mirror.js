!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("PropTypes"),require("React"),require("ReactDOM")):"function"==typeof define&&define.amd?define(["PropTypes","React","ReactDOM"],e):"object"==typeof exports?exports.Mirror=e(require("PropTypes"),require("React"),require("ReactDOM")):t.Mirror=e(t.PropTypes,t.React,t.ReactDOM)}(window,function(t,e,n){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=19)}([function(e,n){e.exports=t},function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return u});var r=n(4);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var i={middlewares:[],reducers:{},addEffect:Object(r.a)(r.b)};function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.middlewares,n=t.addEffect;if(e&&!Array.isArray(e))throw new Error('middlewares "'.concat(e,'" is invalid, must be an Array!'));if(n){if("function"!=typeof n||"function"!=typeof n({}))throw new Error('addEffect "'.concat(n,'" is invalid, must be a function that returns a function'));t.addEffect=t.addEffect(r.b)}Object.keys(t).forEach(function(e){i[e]="reducers"===e?function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}({},i[e],t[e]):t[e]})}},function(t,n){t.exports=e},function(t,e,n){"use strict";n.d(e,"e",function(){return a}),n.d(e,"c",function(){return f}),n.d(e,"b",function(){return d}),n.d(e,"a",function(){return h}),n.d(e,"d",function(){return l});var r=n(14),o={INIT:"@@redux/INIT"+Math.random().toString(36).substring(7).split("").join("."),REPLACE:"@@redux/REPLACE"+Math.random().toString(36).substring(7).split("").join(".")},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function c(t){if("object"!==(void 0===t?"undefined":i(t))||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function a(t,e,n){var u;if("function"==typeof e&&void 0===n&&(n=e,e=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(a)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var s=t,f=e,p=[],d=p,l=!1;function h(){d===p&&(d=p.slice())}function b(){if(l)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return f}function y(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(l)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var e=!0;return h(),d.push(t),function(){if(e){if(l)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");e=!1,h();var n=d.indexOf(t);d.splice(n,1)}}}function v(t){if(!c(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,f=s(f,t)}finally{l=!1}for(var e=p=d,n=0;n<e.length;n++){(0,e[n])()}return t}return v({type:o.INIT}),(u={dispatch:v,subscribe:y,getState:b,replaceReducer:function(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");s=t,v({type:o.REPLACE})}})[r.a]=function(){var t,e=y;return(t={subscribe:function(t){if("object"!==(void 0===t?"undefined":i(t))||null===t)throw new TypeError("Expected the observer to be an object.");function n(){t.next&&t.next(b())}return n(),{unsubscribe:e(n)}}})[r.a]=function(){return this},t},u}function s(t,e){var n=e&&e.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function f(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];0,"function"==typeof t[i]&&(n[i]=t[i])}var u=Object.keys(n);var c=void 0;try{!function(t){Object.keys(t).forEach(function(e){var n=t[e];if(void 0===n(void 0,{type:o.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+o.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(t){c=t}return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];if(c)throw c;for(var r=!1,o={},i=0;i<u.length;i++){var a=u[i],f=n[a],p=t[a],d=f(p,e);if(void 0===d){var l=s(a,e);throw new Error(l)}o[a]=d,r=r||d!==p}return r?o:t}}function p(t,e){return function(){return e(t.apply(this,arguments))}}function d(t,e){if("function"==typeof t)return p(t,e);if("object"!==(void 0===t?"undefined":i(t))||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":void 0===t?"undefined":i(t))+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(t),r={},o=0;o<n.length;o++){var u=n[o],c=t[u];"function"==typeof c&&(r[u]=p(c,e))}return r}function l(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce(function(t,e){return function(){return t(e.apply(void 0,arguments))}})}function h(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=t.apply(void 0,r),c=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},a={getState:i.getState,dispatch:function(){return c.apply(void 0,arguments)}},s=e.map(function(t){return t(a)});return c=l.apply(void 0,s)(i.dispatch),u({},i,{dispatch:c})}}}},function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return o});var r={},o=function(t){return function(e,n){t[e]=n}}},function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return u});var r=n(6),o=function(t){return"[object Object]"===Object.prototype.toString.call(t)},i=[];function u(t){var e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.name,n=t.reducers,r=t.effects;if(!e||"string"!=typeof e)throw new Error("Model name must be a valid string!");if(i.find(function(t){return t.name===e}))throw new Error('Model "'.concat(e,'" has been created, please select another name!'));if(void 0!==n&&!o(n))throw new Error("Model reducers must be a valid object!");if(void 0!==r&&!o(r))throw new Error("Model effects must be a valid object!");return t.reducers=c(n),t.effects=c(r),t}(t),n=e.name,u=e.reducers,a=e.initialState,s=e.effects,f={name:n,reducer:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1?arguments[1]:void 0;return"function"==typeof t[r.type]?t[r.type](n,r.data):n}}(Object(r.c)(n,u),a)};return i.push(f),Object(r.b)(n,u,s),f}function c(t){return t?Object.keys(t).reduce(function(e,n){return"function"==typeof t[n]&&(e[n]=t[n]),e},{}):t}},function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return c}),n.d(e,"c",function(){return a});var r=n(10),o=n(1),i="/",u={};function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(Object.keys(e).length||Object.keys(n).length)&&(u[t]=u[t]||{}),s(e,function(e){u[t][e]=f(t,e)}),s(n,function(e){if(u[t][e])throw new Error('Action name "'.concat(e,'" has been used! Please select another name as effect name!'));o.b.addEffect("".concat(t).concat(i).concat(e),n[e]),u[t][e]=f(t,e),u[t][e].isEffect=!0})}function a(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(n,r){return n["".concat(t).concat(i).concat(r)]=e[r],n},{})}function s(t,e){Object.keys(t).forEach(e)}function f(t,e){return function(n){return Object(r.b)({type:"".concat(t).concat(i).concat(e),data:n})}}},function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return o});var r=[];function o(t){if("function"!=typeof t)throw new Error("Invalid hook, must be a function!");return r.push(t),function(){r.splice(r.indexOf(t),1)}}},function(t,e,n){"use strict";var r=n(2),o=n(0),i=n.n(o),u=i.a.shape({trySubscribe:i.a.func.isRequired,tryUnsubscribe:i.a.func.isRequired,notifyNestedSubs:i.a.func.isRequired,isSubscribed:i.a.func.isRequired}),c=i.a.shape({subscribe:i.a.func.isRequired,dispatch:i.a.func.isRequired,getState:i.a.func.isRequired});var a=function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"store",n=arguments[1]||e+"Subscription",o=function(t){function o(n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o);var i=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,n,r));return i[e]=n.store,i}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(o,t),o.prototype.getChildContext=function(){var t;return(t={})[e]=this[e],t[n]=null,t},o.prototype.render=function(){return r.Children.only(this.props.children)},o}(r.Component);return o.propTypes={store:c.isRequired,children:i.a.element.isRequired},o.childContextTypes=((t={})[e]=c.isRequired,t[n]=u,t),o}(),s=n(15),f=n.n(s),p=n(11),d=n.n(p);var l=null,h={notify:function(){}};var b=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.store=e,this.parentSub=n,this.onStateChange=r,this.unsubscribe=null,this.listeners=h}return t.prototype.addNestedSub=function(t){return this.trySubscribe(),this.listeners.subscribe(t)},t.prototype.notifyNestedSubs=function(){this.listeners.notify()},t.prototype.isSubscribed=function(){return Boolean(this.unsubscribe)},t.prototype.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.parentSub?this.parentSub.addNestedSub(this.onStateChange):this.store.subscribe(this.onStateChange),this.listeners=function(){var t=[],e=[];return{clear:function(){e=l,t=l},notify:function(){for(var n=t=e,r=0;r<n.length;r++)n[r]()},get:function(){return e},subscribe:function(n){var r=!0;return e===t&&(e=t.slice()),e.push(n),function(){r&&t!==l&&(r=!1,e===t&&(e=t.slice()),e.splice(e.indexOf(n),1))}}}}())},t.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null,this.listeners.clear(),this.listeners=h)},t}(),y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};var v=0,m={};function w(){}function O(t){var e,n,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=o.getDisplayName,a=void 0===i?function(t){return"ConnectAdvanced("+t+")"}:i,s=o.methodName,p=void 0===s?"connectAdvanced":s,l=o.renderCountProp,h=void 0===l?void 0:l,O=o.shouldHandleStateChanges,g=void 0===O||O,j=o.storeKey,P=void 0===j?"store":j,S=o.withRef,E=void 0!==S&&S,x=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(o,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),C=P+"Subscription",T=v++,M=((e={})[P]=c,e[C]=u,e),N=((n={})[C]=u,n);return function(e){d()("function"==typeof e,"You must pass a component to the function returned by "+p+". Instead received "+JSON.stringify(e));var n=e.displayName||e.name||"Component",o=a(n),i=y({},x,{getDisplayName:a,methodName:p,renderCountProp:h,shouldHandleStateChanges:g,storeKey:P,withRef:E,displayName:o,wrappedComponentName:n,WrappedComponent:e}),u=function(n){function u(t,e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,n.call(this,t,e));return r.version=T,r.state={},r.renderCount=0,r.store=t[P]||e[P],r.propsMode=Boolean(t[P]),r.setWrappedInstance=r.setWrappedInstance.bind(r),d()(r.store,'Could not find "'+P+'" in either the context or props of "'+o+'". Either wrap the root component in a <Provider>, or explicitly pass "'+P+'" as a prop to "'+o+'".'),r.initSelector(),r.initSubscription(),r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(u,n),u.prototype.getChildContext=function(){var t,e=this.propsMode?null:this.subscription;return(t={})[C]=e||this.context[C],t},u.prototype.componentDidMount=function(){g&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},u.prototype.componentWillReceiveProps=function(t){this.selector.run(t)},u.prototype.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},u.prototype.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.notifyNestedSubs=w,this.store=null,this.selector.run=w,this.selector.shouldComponentUpdate=!1},u.prototype.getWrappedInstance=function(){return d()(E,"To access the wrapped instance, you need to specify { withRef: true } in the options argument of the "+p+"() call."),this.wrappedInstance},u.prototype.setWrappedInstance=function(t){this.wrappedInstance=t},u.prototype.initSelector=function(){var e=t(this.store.dispatch,i);this.selector=function(t,e){var n={run:function(r){try{var o=t(e.getState(),r);(o!==n.props||n.error)&&(n.shouldComponentUpdate=!0,n.props=o,n.error=null)}catch(t){n.shouldComponentUpdate=!0,n.error=t}}};return n}(e,this.store),this.selector.run(this.props)},u.prototype.initSubscription=function(){if(g){var t=(this.propsMode?this.props:this.context)[C];this.subscription=new b(this.store,t,this.onStateChange.bind(this)),this.notifyNestedSubs=this.subscription.notifyNestedSubs.bind(this.subscription)}},u.prototype.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=this.notifyNestedSubsOnComponentDidUpdate,this.setState(m)):this.notifyNestedSubs()},u.prototype.notifyNestedSubsOnComponentDidUpdate=function(){this.componentDidUpdate=void 0,this.notifyNestedSubs()},u.prototype.isSubscribed=function(){return Boolean(this.subscription)&&this.subscription.isSubscribed()},u.prototype.addExtraProps=function(t){if(!(E||h||this.propsMode&&this.subscription))return t;var e=y({},t);return E&&(e.ref=this.setWrappedInstance),h&&(e[h]=this.renderCount++),this.propsMode&&this.subscription&&(e[C]=this.subscription),e},u.prototype.render=function(){var t=this.selector;if(t.shouldComponentUpdate=!1,t.error)throw t.error;return Object(r.createElement)(e,this.addExtraProps(t.props))},u}(r.Component);return u.WrappedComponent=e,u.displayName=o,u.childContextTypes=N,u.contextTypes=M,u.propTypes=M,f()(u,e)}}var g=Object.prototype.hasOwnProperty;function j(t,e){return t===e?0!==t||0!==e||1/t==1/e:t!=t&&e!=e}function P(t,e){if(j(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var o=0;o<n.length;o++)if(!g.call(e,n[o])||!j(t[n[o]],e[n[o]]))return!1;return!0}var S=n(3),E=n(16),x="object"==typeof self&&self&&self.Object===Object&&self,C=(E.a||x||Function("return this")()).Symbol,T=Object.prototype;T.hasOwnProperty,T.toString,C&&C.toStringTag;Object.prototype.toString;C&&C.toStringTag;Object.getPrototypeOf,Object;var M=Function.prototype,N=Object.prototype,R=M.toString;N.hasOwnProperty,R.call(Object);function q(t){return function(e,n){var r=t(e,n);function o(){return r}return o.dependsOnOwnProps=!1,o}}function I(t){return null!==t.dependsOnOwnProps&&void 0!==t.dependsOnOwnProps?Boolean(t.dependsOnOwnProps):1!==t.length}function D(t,e){return function(e,n){n.displayName;var r=function(t,e){return r.dependsOnOwnProps?r.mapToProps(t,e):r.mapToProps(t)};return r.dependsOnOwnProps=!0,r.mapToProps=function(e,n){r.mapToProps=t,r.dependsOnOwnProps=I(t);var o=r(e,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=I(o),o=r(e,n)),o},r}}var k=[function(t){return"function"==typeof t?D(t):void 0},function(t){return t?void 0:q(function(t){return{dispatch:t}})},function(t){return t&&"object"==typeof t?q(function(e){return Object(S.b)(t,e)}):void 0}];var A=[function(t){return"function"==typeof t?D(t):void 0},function(t){return t?void 0:q(function(){return{}})}],U=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function _(t,e,n){return U({},n,t,e)}var W=[function(t){return"function"==typeof t?function(t){return function(e,n){n.displayName;var r=n.pure,o=n.areMergedPropsEqual,i=!1,u=void 0;return function(e,n,c){var a=t(e,n,c);return i?r&&o(a,u)||(u=a):(i=!0,u=a),u}}}(t):void 0},function(t){return t?void 0:function(){return _}}];function F(t,e,n,r){return function(o,i){return n(t(o,i),e(r,i),i)}}function B(t,e,n,r,o){var i=o.areStatesEqual,u=o.areOwnPropsEqual,c=o.areStatePropsEqual,a=!1,s=void 0,f=void 0,p=void 0,d=void 0,l=void 0;function h(o,a){var h=!u(a,f),b=!i(o,s);return s=o,f=a,h&&b?(p=t(s,f),e.dependsOnOwnProps&&(d=e(r,f)),l=n(p,d,f)):h?(t.dependsOnOwnProps&&(p=t(s,f)),e.dependsOnOwnProps&&(d=e(r,f)),l=n(p,d,f)):b?function(){var e=t(s,f),r=!c(e,p);return p=e,r&&(l=n(p,d,f)),l}():l}return function(o,i){return a?h(o,i):function(o,i){return p=t(s=o,f=i),d=e(r,f),l=n(p,d,f),a=!0,l}(o,i)}}function H(t,e){var n=e.initMapStateToProps,r=e.initMapDispatchToProps,o=e.initMergeProps,i=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(e,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),u=n(t,i),c=r(t,i),a=o(t,i);return(i.pure?B:F)(u,c,a,t,i)}var Y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};function K(t,e,n){for(var r=e.length-1;r>=0;r--){var o=e[r](t);if(o)return o}return function(e,r){throw new Error("Invalid value of type "+typeof t+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function L(t,e){return t===e}var z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.connectHOC,n=void 0===e?O:e,r=t.mapStateToPropsFactories,o=void 0===r?A:r,i=t.mapDispatchToPropsFactories,u=void 0===i?k:i,c=t.mergePropsFactories,a=void 0===c?W:c,s=t.selectorFactory,f=void 0===s?H:s;return function(t,e,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=i.pure,s=void 0===c||c,p=i.areStatesEqual,d=void 0===p?L:p,l=i.areOwnPropsEqual,h=void 0===l?P:l,b=i.areStatePropsEqual,y=void 0===b?P:b,v=i.areMergedPropsEqual,m=void 0===v?P:v,w=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(i,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),O=K(t,o,"mapStateToProps"),g=K(e,u,"mapDispatchToProps"),j=K(r,a,"mergeProps");return n(f,Y({methodName:"connect",getDisplayName:function(t){return"Connect("+t+")"},shouldHandleStateChanges:Boolean(t),initMapStateToProps:O,initMapDispatchToProps:g,initMergeProps:j,pure:s,areStatesEqual:d,areOwnPropsEqual:h,areStatePropsEqual:y,areMergedPropsEqual:m},w))}}();n.d(e,"a",function(){return a}),n.d(e,"b",function(){return z})},function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s});var r,o=n(3),i=n(10);function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(t,e,n){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],a=[o.a.apply(void 0,c(u).concat([Object(i.a)()]))],s=o.d;var p=f(t,e),d=s.apply(void 0,a);return r=Object(o.e)(p,n,d)}function s(t,e,n){var r=f(e,n);t.replaceReducer(r)}function f(t,e){var n=t.reduce(function(t,e){return t[e.name]=e.reducer,t},{});return Object(o.c)(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){u(t,e,n[e])})}return t}({},e,n))}},function(t,e,n){"use strict";n.d(e,"b",function(){return u}),n.d(e,"a",function(){return a});var r=n(4),o=n(7);function i(){throw new Error('You are calling "dispatch" or "getState" without applying mirrorMiddleware! Please create your store with mirrorMiddleware first!')}var u=i,c=i;function a(){return function(t){return u=t.dispatch,c=t.getState,function(t){return function(e){var n=t(e);return"function"==typeof r.b[e.type]&&(n=r.b[e.type](e.data,c)),o.b.forEach(function(t){return t(e,c)}),n}}}}},function(t,e,n){"use strict";t.exports=function(t,e,n,r,o,i,u,c){if(!t){var a;if(void 0===e)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var s=[n,r,o,i,u,c],f=0;(a=new Error(e.replace(/%s/g,function(){return s[f++]}))).name="Invariant Violation"}throw a.framesToPop=1,a}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return l});var r,o=n(2),i=n.n(o),u=n(18),c=n.n(u),a=n(8),s=n(1),f=n(5),p=n(9),d=!1;function l(e,n,o){var u=s.b.initialState,l=s.b.middlewares,h=s.b.reducers;if(d){if(Object(p.b)(p.c,f.b,h),0===arguments.length)return r}else Object(p.a)(f.b,h,u,l);return r=function(){return i.a.createElement(a.a,{store:p.c},e)},d=!0,t.document&&c.a.render(i.a.createElement(r,null),n,o),r}}).call(this,n(12))},function(t,e,n){"use strict";(function(t,r){var o,i=n(17);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:r;var u=Object(i.a)(o);e.a=u}).call(this,n(12),n(20)(t))},function(t,e,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i=Object.defineProperty,u=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,a=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,f=s&&s(Object);t.exports=function t(e,n,p){if("string"!=typeof n){if(f){var d=s(n);d&&d!==f&&t(e,d,p)}var l=u(n);c&&(l=l.concat(c(n)));for(var h=0;h<l.length;++h){var b=l[h];if(!(r[b]||o[b]||p&&p[b])){var y=a(n,b);try{i(e,b,y)}catch(t){}}}return e}return e}},function(t,e,n){"use strict";(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.a=n}).call(this,n(12))},function(t,e,n){"use strict";function r(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}n.d(e,"a",function(){return r})},function(t,e){t.exports=n},function(t,e,n){"use strict";n.r(e);var r=n(8);n.d(e,"connect",function(){return r.b});var o=n(5);n.d(e,"model",function(){return o.a});var i=n(6);n.d(e,"actions",function(){return i.a});var u=n(13);n.d(e,"render",function(){return u.a});var c=n(7);n.d(e,"hook",function(){return c.a});var a=n(1);n.d(e,"defaults",function(){return a.a}),e.default={model:o.a,actions:i.a,hook:c.a,defaults:a.a,connect:r.b,render:u.a}},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}}])});