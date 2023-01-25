module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "QfWi");
/******/ })
/************************************************************************/
/******/ ({

/***/ "HteQ":
/***/ (function(module, exports) {

module.exports = require("preact");

/***/ }),

/***/ "NdmY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Fragment) {/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QRet");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function getPWADisplayMode() {
  var isStandalone = window.matchMedia('(display-mode: standalone)').matches;
  if (document.referrer.startsWith('android-app://')) {
    return 'twa';
  } else if (navigator.standalone || isStandalone) {
    return 'standalone';
  }
  return 'browser';
}
var GetOnGooglePlay = function GetOnGooglePlay() {
  var _useState = Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useState */ "c"])(false),
    _useState2 = _slicedToArray(_useState, 2),
    showBadge = _useState2[0],
    setShowBadge = _useState2[1];
  Object(preact_hooks__WEBPACK_IMPORTED_MODULE_1__[/* useEffect */ "a"])(function () {
    var pwaDisplayMode = getPWADisplayMode();
    console.log('pwaDisplayMode', pwaDisplayMode);
    if (pwaDisplayMode !== 'twa') {
      setShowBadge(true);
    }
  }, []);
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Fragment, null, showBadge && Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
    href: "https://play.google.com/store/apps/details?id=com.e_levy_calculator.www.twa&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1",
    target: "_blank",
    rel: "noopener noreferrer"
  }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
    alt: "Get it on Google Play",
    height: 70,
    src: "https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
  })));
};
/* harmony default export */ __webpack_exports__["a"] = (GetOnGooglePlay);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["Fragment"]))

/***/ }),

/***/ "QRet":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export useCallback */
/* unused harmony export useContext */
/* unused harmony export useDebugValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return h; });
/* unused harmony export useErrorBoundary */
/* unused harmony export useId */
/* unused harmony export useImperativeHandle */
/* unused harmony export useLayoutEffect */
/* unused harmony export useMemo */
/* unused harmony export useReducer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return p; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);

var t,
  r,
  u,
  i,
  o = 0,
  f = [],
  c = [],
  e = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b,
  a = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r,
  v = preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed,
  l = preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c,
  m = preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount;
function d(t, u) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__h(r, t, o || u), o = 0;
  var i = r.__H || (r.__H = {
    __: [],
    __h: []
  });
  return t >= i.__.length && i.__.push({
    __V: c
  }), i.__[t];
}
function p(n) {
  return o = 1, y(B, n);
}
function y(n, u, i) {
  var o = d(t++, 2);
  if (o.t = n, !o.__c && (o.__ = [i ? i(u) : B(void 0, u), function (n) {
    var t = o.__N ? o.__N[0] : o.__[0],
      r = o.t(t, n);
    t !== r && (o.__N = [r, o.__[1]], o.__c.setState({}));
  }], o.__c = r, !r.u)) {
    r.u = !0;
    var f = r.shouldComponentUpdate;
    r.shouldComponentUpdate = function (n, t, r) {
      if (!o.__c.__H) return !0;
      var u = o.__c.__H.__.filter(function (n) {
        return n.__c;
      });
      if (u.every(function (n) {
        return !n.__N;
      })) return !f || f.call(this, n, t, r);
      var i = !1;
      return u.forEach(function (n) {
        if (n.__N) {
          var t = n.__[0];
          n.__ = n.__N, n.__N = void 0, t !== n.__[0] && (i = !0);
        }
      }), !(!i && o.__c.props === n) && (!f || f.call(this, n, t, r));
    };
  }
  return o.__N || o.__;
}
function h(u, i) {
  var o = d(t++, 3);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__H.__h.push(o));
}
function s(u, i) {
  var o = d(t++, 4);
  !preact__WEBPACK_IMPORTED_MODULE_0__["options"].__s && z(o.__H, i) && (o.__ = u, o.i = i, r.__h.push(o));
}
function _(n) {
  return o = 5, F(function () {
    return {
      current: n
    };
  }, []);
}
function A(n, t, r) {
  o = 6, s(function () {
    return "function" == typeof n ? (n(t()), function () {
      return n(null);
    }) : n ? (n.current = t(), function () {
      return n.current = null;
    }) : void 0;
  }, null == r ? r : r.concat(n));
}
function F(n, r) {
  var u = d(t++, 7);
  return z(u.__H, r) ? (u.__V = n(), u.i = r, u.__h = n, u.__V) : u.__;
}
function T(n, t) {
  return o = 8, F(function () {
    return n;
  }, t);
}
function q(n) {
  var u = r.context[n.__c],
    i = d(t++, 9);
  return i.c = n, u ? (null == i.__ && (i.__ = !0, u.sub(r)), u.props.value) : n.__;
}
function x(t, r) {
  preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue && preact__WEBPACK_IMPORTED_MODULE_0__["options"].useDebugValue(r ? r(t) : t);
}
function P(n) {
  var u = d(t++, 10),
    i = p();
  return u.__ = n, r.componentDidCatch || (r.componentDidCatch = function (n, t) {
    u.__ && u.__(n, t), i[1](n);
  }), [i[0], function () {
    i[1](void 0);
  }];
}
function V() {
  var n = d(t++, 11);
  if (!n.__) {
    for (var u = r.__v; null !== u && !u.__m && null !== u.__;) u = u.__;
    var i = u.__m || (u.__m = [0, 0]);
    n.__ = "P" + i[0] + "-" + i[1]++;
  }
  return n.__;
}
function b() {
  for (var t; t = f.shift();) if (t.__P && t.__H) try {
    t.__H.__h.forEach(k), t.__H.__h.forEach(w), t.__H.__h = [];
  } catch (r) {
    t.__H.__h = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, t.__v);
  }
}
preact__WEBPACK_IMPORTED_MODULE_0__["options"].__b = function (n) {
  r = null, e && e(n);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__r = function (n) {
  a && a(n), t = 0;
  var i = (r = n.__c).__H;
  i && (u === r ? (i.__h = [], r.__h = [], i.__.forEach(function (n) {
    n.__N && (n.__ = n.__N), n.__V = c, n.__N = n.i = void 0;
  })) : (i.__h.forEach(k), i.__h.forEach(w), i.__h = [])), u = r;
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].diffed = function (t) {
  v && v(t);
  var o = t.__c;
  o && o.__H && (o.__H.__h.length && (1 !== f.push(o) && i === preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame || ((i = preact__WEBPACK_IMPORTED_MODULE_0__["options"].requestAnimationFrame) || j)(b)), o.__H.__.forEach(function (n) {
    n.i && (n.__H = n.i), n.__V !== c && (n.__ = n.__V), n.i = void 0, n.__V = c;
  })), u = r = null;
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].__c = function (t, r) {
  r.some(function (t) {
    try {
      t.__h.forEach(k), t.__h = t.__h.filter(function (n) {
        return !n.__ || w(n);
      });
    } catch (u) {
      r.some(function (n) {
        n.__h && (n.__h = []);
      }), r = [], preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(u, t.__v);
    }
  }), l && l(t, r);
}, preact__WEBPACK_IMPORTED_MODULE_0__["options"].unmount = function (t) {
  m && m(t);
  var r,
    u = t.__c;
  u && u.__H && (u.__H.__.forEach(function (n) {
    try {
      k(n);
    } catch (n) {
      r = n;
    }
  }), u.__H = void 0, r && preact__WEBPACK_IMPORTED_MODULE_0__["options"].__e(r, u.__v));
};
var g = "function" == typeof requestAnimationFrame;
function j(n) {
  var t,
    r = function r() {
      clearTimeout(u), g && cancelAnimationFrame(t), setTimeout(n);
    },
    u = setTimeout(r, 100);
  g && (t = requestAnimationFrame(r));
}
function k(n) {
  var t = r,
    u = n.__c;
  "function" == typeof u && (n.__c = void 0, u()), r = t;
}
function w(n) {
  var t = r;
  n.__c = n.__(), r = t;
}
function z(n, t) {
  return !n || n.length !== t.length || t.some(function (t, r) {
    return t !== n[r];
  });
}
function B(n, t) {
  return "function" == typeof t ? t(n) : t;
}


/***/ }),

/***/ "QfWi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./style/index.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: external "preact"
var external_preact_ = __webpack_require__("HteQ");

// CONCATENATED MODULE: ../node_modules/preact-router/dist/preact-router.es.js

var EMPTY$1 = {};
function preact_router_es_assign(obj, props) {
  // eslint-disable-next-line guard-for-in
  for (var i in props) {
    obj[i] = props[i];
  }
  return obj;
}
function exec(url, route, opts) {
  var reg = /(?:\?([^#]*))?(#.*)?$/,
    c = url.match(reg),
    matches = {},
    ret;
  if (c && c[1]) {
    var p = c[1].split('&');
    for (var i = 0; i < p.length; i++) {
      var r = p[i].split('=');
      matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
    }
  }
  url = segmentize(url.replace(reg, ''));
  route = segmentize(route || '');
  var max = Math.max(url.length, route.length);
  for (var i$1 = 0; i$1 < max; i$1++) {
    if (route[i$1] && route[i$1].charAt(0) === ':') {
      var param = route[i$1].replace(/(^:|[+*?]+$)/g, ''),
        flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
        plus = ~flags.indexOf('+'),
        star = ~flags.indexOf('*'),
        val = url[i$1] || '';
      if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
        ret = false;
        break;
      }
      matches[param] = decodeURIComponent(val);
      if (plus || star) {
        matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
        break;
      }
    } else if (route[i$1] !== url[i$1]) {
      ret = false;
      break;
    }
  }
  if (opts.default !== true && ret === false) {
    return false;
  }
  return matches;
}
function pathRankSort(a, b) {
  return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
  vnode.index = index;
  vnode.rank = rankChild(vnode);
  return vnode.props;
}
function segmentize(url) {
  return url.replace(/(^\/+|\/+$)/g, '').split('/');
}
function rankSegment(segment) {
  return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}
function rank(path) {
  return segmentize(path).map(rankSegment).join('');
}
function rankChild(vnode) {
  return vnode.props.default ? 0 : rank(vnode.props.path);
}
var customHistory = null;
var ROUTERS = [];
var subscribers = [];
var EMPTY = {};
function setUrl(url, type) {
  if (type === void 0) type = 'push';
  if (customHistory && customHistory[type]) {
    customHistory[type](url);
  } else if (typeof history !== 'undefined' && history[type + 'State']) {
    history[type + 'State'](null, null, url);
  }
}
function getCurrentUrl() {
  var url;
  if (customHistory && customHistory.location) {
    url = customHistory.location;
  } else if (customHistory && customHistory.getCurrentLocation) {
    url = customHistory.getCurrentLocation();
  } else {
    url = typeof location !== 'undefined' ? location : EMPTY;
  }
  return "" + (url.pathname || '') + (url.search || '');
}
function route(url, replace) {
  if (replace === void 0) replace = false;
  if (typeof url !== 'string' && url.url) {
    replace = url.replace;
    url = url.url;
  }

  // only push URL into history if we can handle it
  if (preact_router_es_canRoute(url)) {
    setUrl(url, replace ? 'replace' : 'push');
  }
  return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function preact_router_es_canRoute(url) {
  for (var i = ROUTERS.length; i--;) {
    if (ROUTERS[i].canRoute(url)) {
      return true;
    }
  }
  return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
  var didRoute = false;
  for (var i = 0; i < ROUTERS.length; i++) {
    if (ROUTERS[i].routeTo(url) === true) {
      didRoute = true;
    }
  }
  for (var i$1 = subscribers.length; i$1--;) {
    subscribers[i$1](url);
  }
  return didRoute;
}
function routeFromLink(node) {
  // only valid elements
  if (!node || !node.getAttribute) {
    return;
  }
  var href = node.getAttribute('href'),
    target = node.getAttribute('target');

  // ignore links with targets and non-path URLs
  if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
    return;
  }

  // attempt to route, if no match simply cede control to browser
  return route(href);
}
function handleLinkClick(e) {
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  routeFromLink(e.currentTarget || e.target || this);
  return prevent(e);
}
function prevent(e) {
  if (e) {
    if (e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    }
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    e.preventDefault();
  }
  return false;
}
function delegateLinkHandler(e) {
  // ignore events the browser takes care of already:
  if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
    return;
  }
  var t = e.target;
  do {
    if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href')) {
      if (t.hasAttribute('native')) {
        return;
      }
      // if link is handled by the router, prevent browser defaults
      if (routeFromLink(t)) {
        return prevent(e);
      }
    }
  } while (t = t.parentNode);
}
var eventListenersInitialized = false;
function initEventListeners() {
  if (eventListenersInitialized) {
    return;
  }
  if (typeof addEventListener === 'function') {
    if (!customHistory) {
      addEventListener('popstate', function () {
        routeTo(getCurrentUrl());
      });
    }
    addEventListener('click', delegateLinkHandler);
  }
  eventListenersInitialized = true;
}
var preact_router_es_Router = function (Component$$1) {
  function Router(props) {
    Component$$1.call(this, props);
    if (props.history) {
      customHistory = props.history;
    }
    this.state = {
      url: props.url || getCurrentUrl()
    };
    initEventListeners();
  }
  if (Component$$1) Router.__proto__ = Component$$1;
  Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
  Router.prototype.constructor = Router;
  Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
    if (props.static !== true) {
      return true;
    }
    return props.url !== this.props.url || props.onChange !== this.props.onChange;
  };

  /** Check if the given URL can be matched against any children */
  Router.prototype.canRoute = function canRoute(url) {
    var children = Object(external_preact_["toChildArray"])(this.props.children);
    return this.getMatchingChildren(children, url, false).length > 0;
  };

  /** Re-render children with a new URL to match against. */
  Router.prototype.routeTo = function routeTo(url) {
    this.setState({
      url: url
    });
    var didRoute = this.canRoute(url);

    // trigger a manual re-route if we're not in the middle of an update:
    if (!this.updating) {
      this.forceUpdate();
    }
    return didRoute;
  };
  Router.prototype.componentWillMount = function componentWillMount() {
    ROUTERS.push(this);
    this.updating = true;
  };
  Router.prototype.componentDidMount = function componentDidMount() {
    var this$1 = this;
    if (customHistory) {
      this.unlisten = customHistory.listen(function (location) {
        this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
      });
    }
    this.updating = false;
  };
  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    if (typeof this.unlisten === 'function') {
      this.unlisten();
    }
    ROUTERS.splice(ROUTERS.indexOf(this), 1);
  };
  Router.prototype.componentWillUpdate = function componentWillUpdate() {
    this.updating = true;
  };
  Router.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updating = false;
  };
  Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
    return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
      var matches = exec(url, vnode.props.path, vnode.props);
      if (matches) {
        if (invoke !== false) {
          var newProps = {
            url: url,
            matches: matches
          };
          preact_router_es_assign(newProps, matches);
          delete newProps.ref;
          delete newProps.key;
          return Object(external_preact_["cloneElement"])(vnode, newProps);
        }
        return vnode;
      }
    }).filter(Boolean);
  };
  Router.prototype.render = function render(ref, ref$1) {
    var children = ref.children;
    var onChange = ref.onChange;
    var url = ref$1.url;
    var active = this.getMatchingChildren(Object(external_preact_["toChildArray"])(children), url, true);
    var current = active[0] || null;
    var previous = this.previousUrl;
    if (url !== previous) {
      this.previousUrl = url;
      if (typeof onChange === 'function') {
        onChange({
          router: this,
          url: url,
          previous: previous,
          active: active,
          current: current
        });
      }
    }
    return current;
  };
  return Router;
}(external_preact_["Component"]);
var preact_router_es_Link = function Link(props) {
  return Object(external_preact_["createElement"])('a', preact_router_es_assign({
    onClick: handleLinkClick
  }, props));
};
var preact_router_es_Route = function Route(props) {
  return Object(external_preact_["createElement"])(props.component, props);
};
preact_router_es_Router.subscribers = subscribers;
preact_router_es_Router.getCurrentUrl = getCurrentUrl;
preact_router_es_Router.route = route;
preact_router_es_Router.Router = preact_router_es_Router;
preact_router_es_Router.Route = preact_router_es_Route;
preact_router_es_Router.Link = preact_router_es_Link;
preact_router_es_Router.exec = exec;

/* harmony default export */ var preact_router_es = (preact_router_es_Router);
// EXTERNAL MODULE: ../node_modules/preact/hooks/dist/hooks.module.js
var hooks_module = __webpack_require__("QRet");

// EXTERNAL MODULE: ./components/global/GetOnGooglePlay.js
var GetOnGooglePlay = __webpack_require__("NdmY");

// CONCATENATED MODULE: ./utils/ux-enhancements.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var isBrowser = function isBrowser() {
  return (typeof window === "undefined" ? "undefined" : _typeof(window)) !== "undefined";
};
var preserveChoice = function preserveChoice(_ref) {
  var _ref$advanced = _ref.advanced,
    advanced = _ref$advanced === void 0 ? false : _ref$advanced;
  if (isBrowser()) {
    var choice = JSON.stringify(advanced);
    window.localStorage.setItem("elcgh-preference", choice);
  }
};
var getPreservedChoice = function getPreservedChoice() {
  if (isBrowser()) {
    var choice = JSON.parse(window.localStorage.getItem("elcgh-preference"));
    if (choice) {
      return choice.advanced;
    }
    return false;
  }
};
// CONCATENATED MODULE: ./routes/home/index.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var home_Home = function Home(_ref) {
  var showAdvanced = _ref.showAdvanced;
  var elevyTax = 0.01; //1/100
  var _useState = Object(hooks_module["c" /* useState */])(''),
    _useState2 = _slicedToArray(_useState, 2),
    amount = _useState2[0],
    setAmount = _useState2[1];
  var _useState3 = Object(hooks_module["c" /* useState */])(0),
    _useState4 = _slicedToArray(_useState3, 2),
    transferAmount = _useState4[0],
    setTransferAmount = _useState4[1];
  var _useState5 = Object(hooks_module["c" /* useState */])(0),
    _useState6 = _slicedToArray(_useState5, 2),
    elevyAmount = _useState6[0],
    setElevyAmount = _useState6[1];
  var elevyFormRef = Object(hooks_module["b" /* useRef */])(null);
  var elevyChargeRef = Object(hooks_module["b" /* useRef */])(null);
  Object(hooks_module["a" /* useEffect */])(function () {
    if (amount == '') {
      setTransferAmount(0);
      setElevyAmount(0);
    } else if (amount > 100) {
      var taxableAmount = amount - 100;
      var elevyCharge = taxableAmount * elevyTax;
      var totalTransferAmount = amount + elevyCharge;
      setTransferAmount(totalTransferAmount);
      setElevyAmount(elevyCharge);
    } else {
      setTransferAmount(amount);
      setElevyAmount(0);
    }
  }, [amount]);
  var handleChange = function handleChange(event) {
    var parsedAmount = parseInt(event.target.value.replaceAll(',', ''), 10);
    if (!isNaN(parsedAmount)) {
      setAmount(parsedAmount);
    } else {
      // elevyFormRef.current.reportValidity();
      setAmount('');
    }
  };
  var handleTab = function handleTab(event) {
    if (event.keyCode == 13) {
      elevyChargeRef.current.focus();
    }
  };
  return Object(external_preact_["h"])("main", {
    className: "mainContainer"
  }, Object(external_preact_["h"])("form", {
    className: "gridContainer",
    ref: elevyFormRef,
    method: "POST"
  }, Object(external_preact_["h"])("div", {
    className: "gridItem gridItemFull"
  }, Object(external_preact_["h"])("div", {
    className: "inputGroup centerFlex"
  }, Object(external_preact_["h"])("h1", {
    className: "displayText"
  }, "E-LEVY CALCULATOR"))), Object(external_preact_["h"])("div", {
    className: "gridItem gridItemFullMobileOnly"
  }, Object(external_preact_["h"])("div", {
    className: "inputGroup"
  }, Object(external_preact_["h"])("label", {
    for: "amount",
    className: "labelText"
  }, "You want to send:"), Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("input", {
    tabIndex: 1,
    type: "text",
    name: "amount",
    placeholder: "0",
    pattern: "[0-9,.]",
    inputMode: "numeric"
    // required
    ,
    value: amount.toLocaleString('en-US'),
    onInput: handleChange,
    className: "inputField",
    id: "amount",
    onKeyUp: handleTab
  }), Object(external_preact_["h"])("span", {
    className: "currency"
  }, "GHS")))), Object(external_preact_["h"])("div", {
    className: "gridItem gridItemFullMobileOnly"
  }, Object(external_preact_["h"])("div", {
    className: "inputGroup"
  }, Object(external_preact_["h"])("label", {
    for: "transferAmount",
    className: "labelText"
  }, "You will pay:"), Object(external_preact_["h"])("div", null, Object(external_preact_["h"])("input", {
    type: "text",
    value: "".concat(transferAmount.toLocaleString('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    })),
    readOnly: true,
    name: "transferAmount",
    className: "inputField inputFieldEmphasis",
    id: "transferAmount"
  }), Object(external_preact_["h"])("span", {
    className: "currency"
  }, "GHS")))), Object(external_preact_["h"])("div", {
    className: "gridItem gridItemFull"
  }, Object(external_preact_["h"])("div", {
    className: "inputGroup centerFlex"
  }, Object(external_preact_["h"])("span", {
    className: "labelText"
  }, "E-Levy Charge:"), Object(external_preact_["h"])("span", {
    className: "displayText charge",
    tabIndex: 2,
    ref: elevyChargeRef
  }, "+ GHS", ' ', "".concat(elevyAmount.toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  }))), Object(external_preact_["h"])("span", {
    className: "labelText"
  }, "Rate: 1%, first 100GHS exempt"))), Object(external_preact_["h"])("div", {
    className: "gridItem gridItemFull"
  }, Object(external_preact_["h"])("div", {
    className: "inputGroup centerFlex"
  }, Object(external_preact_["h"])("button", {
    className: "labelText button",
    type: "button",
    onClick: function onClick(e) {
      e.preventDefault();
      preserveChoice({
        advanced: true
      });
      showAdvanced();
      return false;
    }
  }, "Click for more Options"))), Object(external_preact_["h"])("div", {
    className: "gridItem gridItemFull"
  }, Object(external_preact_["h"])("div", {
    className: "inputGroup centerFlex"
  }, Object(external_preact_["h"])(GetOnGooglePlay["a" /* default */], null))), Object(external_preact_["h"])("div", {
    className: "gridItem gridItemFull"
  }, Object(external_preact_["h"])("div", {
    className: "inputGroup centerFlex"
  }, Object(external_preact_["h"])("span", {
    className: "disclaimer"
  }, "Disclaimer: We did our best to provide accurate results however, you may experience differences in real-world usage.")))));
};
/* harmony default export */ var home = (home_Home);
// CONCATENATED MODULE: ./baseroute.js
// let basename = '/e-levy-calculator-gh';
var basename = '/';
/* harmony default export */ var baseroute = (basename);
// CONCATENATED MODULE: ./components/containers/GridItem.js

var GridItem_GridItem = function GridItem(_ref) {
  var className = _ref.className,
    children = _ref.children;
  return Object(external_preact_["h"])("div", {
    className: "gridItem ".concat(className)
  }, children);
};
GridItem_GridItem.defaultProps = {
  className: ""
};
/* harmony default export */ var containers_GridItem = (GridItem_GridItem);
// CONCATENATED MODULE: ./components/containers/ItemGroup.js

var ItemGroup_ItemGroup = function ItemGroup(_ref) {
  var className = _ref.className,
    children = _ref.children;
  return Object(external_preact_["h"])("div", {
    className: "inputGroup ".concat(className)
  }, children);
};
ItemGroup_ItemGroup.defaultProps = {
  className: ""
};
/* harmony default export */ var containers_ItemGroup = (ItemGroup_ItemGroup);
// CONCATENATED MODULE: ./components/containers/MainContainer.js

var MainContainer_MainContainer = function MainContainer(_ref) {
  var children = _ref.children;
  return Object(external_preact_["h"])("main", {
    className: "mainContainer"
  }, children);
};
/* harmony default export */ var containers_MainContainer = (MainContainer_MainContainer);
// CONCATENATED MODULE: ./components/form/PickerArrow.js

var PickerArrow_PickerArrow = function PickerArrow() {
  return Object(external_preact_["h"])("div", {
    className: "arrowContainer"
  }, Object(external_preact_["h"])("span", {
    className: "arrow"
  }, Object(external_preact_["h"])("span", {
    className: "alternateText"
  }, "to"), Object(external_preact_["h"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-arrow-right"
  }, Object(external_preact_["h"])("path", {
    d: "M5 12L19 12"
  }), Object(external_preact_["h"])("path", {
    d: "M12 5L19 12 12 19"
  }))));
};
/* harmony default export */ var form_PickerArrow = (PickerArrow_PickerArrow);
// CONCATENATED MODULE: ./components/form/PickerItem.js

var PickerItem_PickerItem = function PickerItem(_ref) {
  var title = _ref.title,
    handleSelect = _ref.handleSelect,
    theme = _ref.theme;
  return Object(external_preact_["h"])("div", {
    className: "pickerItem ".concat(theme),
    role: "button",
    onClick: handleSelect
  }, Object(external_preact_["h"])("span", {
    className: "pickerContent"
  }));
};
PickerItem_PickerItem.defaultProps = {
  title: "",
  theme: ""
};
/* harmony default export */ var form_PickerItem = (PickerItem_PickerItem);
// CONCATENATED MODULE: ./components/form/Picker.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || Picker_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function Picker_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Picker_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Picker_arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Picker_arrayLikeToArray(arr); }
function Picker_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


var Picker_Picker = function Picker(_ref) {
  var data = _ref.data,
    title = _ref.title,
    updateChoice = _ref.updateChoice,
    close = _ref.close;
  return Object(external_preact_["h"])("div", {
    className: "overlayContainer",
    onClick: function onClick() {
      return close();
    }
  }, Object(external_preact_["h"])("div", {
    className: "pickerContainer"
  }, Object(external_preact_["h"])("span", {
    className: "close pointer",
    role: "button",
    onClick: function onClick() {
      return close();
    }
  }, Object(external_preact_["h"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    class: "feather feather-x"
  }, Object(external_preact_["h"])("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), Object(external_preact_["h"])("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))), Object(external_preact_["h"])("div", {
    className: "pickerTitle alignCenter"
  }, Object(external_preact_["h"])("span", {
    className: "labelText"
  }, title)), Object(external_preact_["h"])("div", {
    className: "pickerItemContainer"
  }, _toConsumableArray(data.values()).map(function (item) {
    return Object(external_preact_["h"])(form_PickerItem, {
      key: item.key,
      title: item.name,
      theme: item.theme,
      handleSelect: function handleSelect() {
        updateChoice(item.key);
        close();
        return false;
      }
    });
  }))));
};
/* harmony default export */ var form_Picker = (Picker_Picker);
// EXTERNAL MODULE: ./components/form/TextField.js
var TextField = __webpack_require__("ZH8P");

// CONCATENATED MODULE: ./utils/platformCharges.js
function _objectDestructuringEmpty(obj) { if (obj == null) throw new TypeError("Cannot destructure " + obj); }
var MTN_TO_MTN_EXEMPT = 100;
var MTN_TO_MTN_CHARGE = 0.75;
var MTN_TO_OTHERS_EXEMPT = 100; // change to 100 cedis as per sara's screen shot and run test again
var MTN_TO_OTHERS_CHARGE = 0.75;
var MTN_ABOVE_1000_CAP = 1000; // above 1000 has a flat fee of 7.5gh
var ATMONEY_CHARGE = 0.75; // Same airtelTigo charge for all networks
var ATMONEY_ABOVE_1000_CAP = 1000; // above 1000 has a flat fee of 10gh
var ATMONEY_EXEMPT = 100;
function mtnMomoTariffs(_ref) {
  var source = _ref.source,
    destination = _ref.destination,
    amount = _ref.amount;
  var charge = 0;
  var exempt = MTN_TO_OTHERS_EXEMPT;
  var rate = MTN_TO_MTN_CHARGE;
  if (destination === source) {
    // mtn to mtn
    if (amount >= MTN_ABOVE_1000_CAP) {
      charge = 7.5;
    } else if (amount > MTN_TO_MTN_EXEMPT) {
      charge = amount * MTN_TO_MTN_CHARGE / 100;
    }
    exempt = MTN_TO_OTHERS_EXEMPT;
    rate = MTN_TO_MTN_CHARGE;
  } else {
    //mtn to others
    if (amount >= MTN_ABOVE_1000_CAP) {
      charge = 7.5;
    } else if (amount > MTN_TO_OTHERS_EXEMPT) {
      charge = amount * MTN_TO_OTHERS_CHARGE / 100;
    }
    exempt = MTN_TO_OTHERS_EXEMPT;
    rate = MTN_TO_OTHERS_CHARGE;
  }
  return {
    charge: charge,
    exempt: exempt,
    rate: rate
  };
}
function vodafoneCashTariffs(_ref2) {
  _objectDestructuringEmpty(_ref2);
  return {
    charge: 0,
    exempt: 0,
    rate: 0
  }; // Haha transfer charge de3 entua bi da! lol
}

function airtelTigoMoneyTariffs(_ref3) {
  var amount = _ref3.amount;
  var charge = 0;
  charge = amount * ATMONEY_CHARGE / 100;
  if (amount >= ATMONEY_ABOVE_1000_CAP) {
    charge = 7.5;
  }
  if (amount <= ATMONEY_EXEMPT) {
    charge = 0;
  }
  return {
    charge: charge,
    exempt: 0,
    rate: ATMONEY_CHARGE
  };
}
// CONCATENATED MODULE: ./data/platforms.js

var platforms = new Map([["mtn", {
  name: "MTN",
  company: "MTN",
  img: "./assets/white-waves.png",
  key: "mtn",
  theme: "mtn",
  getCharge: mtnMomoTariffs
}], ["vodafone", {
  name: "Vodafone",
  company: "Vodafone",
  img: "./assets/white-waves.png",
  key: "vodafone",
  theme: "vodafone",
  getCharge: vodafoneCashTariffs
}], ["airtel", {
  name: "AirtelTigo",
  company: "AirtelTigo",
  img: "./assets/white-waves.png",
  key: "airtel",
  theme: "airtel",
  getCharge: airtelTigoMoneyTariffs
}]]);
// CONCATENATED MODULE: ./utils/calculations.js

var calculations_elevyTax = 0.01; //1/100

function exemption(previousAmount) {
  var finalExemptionAmount = 0;
  var initialExemptAmount = 100;
  if (previousAmount >= initialExemptAmount) {
    finalExemptionAmount = 0; //  user has used up all exemption value for the day and therefore has no exemptions left
  } else if (previousAmount < initialExemptAmount) {
    finalExemptionAmount = initialExemptAmount - previousAmount;
  } else {
    finalExemptionAmount = initialExemptAmount;
  }
  return finalExemptionAmount;
}
function getTaxableAmount(amount, exempt) {
  var taxableAmount = amount - exempt;
  if (taxableAmount < 0) {
    return 0;
  }
  return taxableAmount;
}
function getElevyCharge(taxableAmount, elevyTax) {
  var elevyCharge = taxableAmount * elevyTax;
  return elevyCharge;
}
function calculateCharge(_ref) {
  var previousAmount = _ref.previousAmount,
    amount = _ref.amount;
  // pick calculation from react component
  var exempt = exemption(previousAmount);
  var taxableAmount = getTaxableAmount(amount, exempt);
  var elevyCharge = getElevyCharge(taxableAmount, calculations_elevyTax);
  return elevyCharge;
}
function getPlatformCharge(_ref2) {
  var source = _ref2.source,
    destination = _ref2.destination,
    amount = _ref2.amount;
  // get platform charge
  var platformFunction = platforms.get(source).getCharge;
  var platformCharge = platformFunction({
    source: source,
    destination: destination,
    amount: amount
  });
  return platformCharge;
}
var calculations_calculatePlatformCharge = function calculatePlatformCharge(sendingFrom, sendingTo, amount) {
  var source = "";
  var destination = "";
  if (sendingFrom === "" && sendingTo === "") {
    return 0;
  } else if (sendingFrom !== "" && sendingTo !== "") {
    source = platforms.get(sendingFrom).key;
    destination = platforms.get(sendingTo).key;
  } else if (sendingFrom !== "") {
    source = platforms.get(sendingFrom).key;
    destination = platforms.get(sendingFrom).key;
  }
  var _getPlatformCharge = getPlatformCharge({
      source: source,
      destination: destination,
      amount: amount
    }),
    charge = _getPlatformCharge.charge;
  return charge;
};
// CONCATENATED MODULE: ./components/form/ChargeLabel.js

var ChargeLabel_ChargeLabel = function ChargeLabel(_ref) {
  var label = _ref.label,
    className = _ref.className;
  return Object(external_preact_["h"])("span", {
    className: "labelText ".concat(className)
  }, label);
};
ChargeLabel_ChargeLabel.defaultProps = {
  className: ""
};
/* harmony default export */ var form_ChargeLabel = (ChargeLabel_ChargeLabel);
// CONCATENATED MODULE: ./components/form/TextDisplay.js

var TextDisplay_TextDisplay = function TextDisplay(_ref) {
  var className = _ref.className,
    children = _ref.children;
  return Object(external_preact_["h"])("span", {
    className: "displayText ".concat(className)
  }, children);
};
TextDisplay_TextDisplay.defaultProps = {
  className: ""
};
/* harmony default export */ var form_TextDisplay = (TextDisplay_TextDisplay);
// CONCATENATED MODULE: ./components/form/Charge.js
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Charge_Charge = function Charge(_ref) {
  var className = _ref.className,
    value = _ref.value,
    chargeProps = _ref.chargeProps;
  return Object(external_preact_["h"])("span", _extends({}, chargeProps, {
    className: "chargeAlt ".concat(className)
  }), "+ ".concat(value.toLocaleString("en-US", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  }), " GHS"));
};
Charge_Charge.defaultProps = {
  className: "",
  chargeProps: {}
};
/* harmony default export */ var form_Charge = (Charge_Charge);
// CONCATENATED MODULE: ./components/global/Disclaimer.js

var Disclaimer_Disclaimer = function Disclaimer() {
  return Object(external_preact_["h"])("span", {
    className: "disclaimer"
  }, "Disclaimer: We did our best to provide accurate results however, you may experience differences in real-world usage, since Information on Telco and GHIPPS charges are inconsistent.");
};
/* harmony default export */ var global_Disclaimer = (Disclaimer_Disclaimer);
// CONCATENATED MODULE: ./components/form/FromPicker.js

var FromPicker_FromPicker = function FromPicker(_ref) {
  var id = _ref.id,
    handleChange = _ref.handleChange,
    title = _ref.title,
    theme = _ref.theme;
  return Object(external_preact_["h"])("div", {
    className: "fromGrid",
    tabIndex: 3
  }, Object(external_preact_["h"])("div", {
    className: "selectedText alignRight"
  }, Object(external_preact_["h"])("span", {
    className: "selectedPlatform pointer",
    role: "button",
    onClick: function onClick(event) {
      return handleChange(event, id);
    }
  }, title), Object(external_preact_["h"])("span", {
    role: "button",
    className: "togglePicker pointer",
    onClick: function onClick(event) {
      return handleChange(event, id);
    }
  }, "Tap to change")), Object(external_preact_["h"])("div", {
    className: "selectedVisual ".concat(theme, " pointer"),
    role: "button",
    onClick: function onClick(event) {
      return handleChange(event, id);
    }
  }));
};
FromPicker_FromPicker.defaultProps = {
  theme: ""
};
/* harmony default export */ var form_FromPicker = (FromPicker_FromPicker);
// CONCATENATED MODULE: ./components/form/ToPicker.js

var ToPicker_ToPicker = function ToPicker(_ref) {
  var id = _ref.id,
    handleChange = _ref.handleChange,
    title = _ref.title,
    theme = _ref.theme;
  return Object(external_preact_["h"])("div", {
    className: "toGrid",
    tabIndex: 4
  }, Object(external_preact_["h"])("div", {
    className: "selectedVisual ".concat(theme, " pointer"),
    role: "button",
    onClick: function onClick(event) {
      return handleChange(event, id);
    }
  }), Object(external_preact_["h"])("div", {
    className: "selectedText"
  }, Object(external_preact_["h"])("span", {
    className: "selectedPlatform pointer",
    role: "button",
    onClick: function onClick(event) {
      return handleChange(event, id);
    }
  }, title), Object(external_preact_["h"])("span", {
    role: "button",
    className: "togglePicker pointer",
    onClick: function onClick(event) {
      return handleChange(event, id);
    }
  }, "Tap to change")));
};
ToPicker_ToPicker.defaultProps = {
  theme: ""
};
/* harmony default export */ var form_ToPicker = (ToPicker_ToPicker);
// CONCATENATED MODULE: ./routes/advanced/index.js
function advanced_slicedToArray(arr, i) { return advanced_arrayWithHoles(arr) || advanced_iterableToArrayLimit(arr, i) || advanced_unsupportedIterableToArray(arr, i) || advanced_nonIterableRest(); }
function advanced_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function advanced_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return advanced_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return advanced_arrayLikeToArray(o, minLen); }
function advanced_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function advanced_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function advanced_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















var advanced_Advanced = function Advanced(_ref) {
  var showSimple = _ref.showSimple;
  // state
  var _useState = Object(hooks_module["c" /* useState */])(''),
    _useState2 = advanced_slicedToArray(_useState, 2),
    amount = _useState2[0],
    setAmount = _useState2[1];
  var _useState3 = Object(hooks_module["c" /* useState */])(''),
    _useState4 = advanced_slicedToArray(_useState3, 2),
    previousAmount = _useState4[0],
    setPreviousAmount = _useState4[1];
  var _useState5 = Object(hooks_module["c" /* useState */])(false),
    _useState6 = advanced_slicedToArray(_useState5, 2),
    showPicker = _useState6[0],
    setShowPicker = _useState6[1];
  var _useState7 = Object(hooks_module["c" /* useState */])(''),
    _useState8 = advanced_slicedToArray(_useState7, 2),
    pickerType = _useState8[0],
    setPickerType = _useState8[1];
  var _useState9 = Object(hooks_module["c" /* useState */])(0),
    _useState10 = advanced_slicedToArray(_useState9, 2),
    transferAmount = _useState10[0],
    setTransferAmount = _useState10[1];
  var _useState11 = Object(hooks_module["c" /* useState */])(0),
    _useState12 = advanced_slicedToArray(_useState11, 2),
    elevyAmount = _useState12[0],
    setElevyAmount = _useState12[1];
  var _useState13 = Object(hooks_module["c" /* useState */])('mtn'),
    _useState14 = advanced_slicedToArray(_useState13, 2),
    sendingFrom = _useState14[0],
    setSendingFrom = _useState14[1];
  var _useState15 = Object(hooks_module["c" /* useState */])('mtn'),
    _useState16 = advanced_slicedToArray(_useState15, 2),
    sendingTo = _useState16[0],
    setSendingTo = _useState16[1];
  var _useState17 = Object(hooks_module["c" /* useState */])(0),
    _useState18 = advanced_slicedToArray(_useState17, 2),
    platformCharge = _useState18[0],
    setPlatformCharge = _useState18[1];

  //refs
  var elevyChargeRef = Object(hooks_module["b" /* useRef */])(null);
  var pickerData = {
    from: {
      pickerTitle: 'You are sending money using:',
      updateChoice: setSendingFrom
    },
    to: {
      pickerTitle: 'You are sending money to someone with:',
      updateChoice: setSendingTo
    }
  };

  // Effects
  Object(hooks_module["a" /* useEffect */])(function () {
    if (amount == '') {
      setTransferAmount(0);
      setElevyAmount(0);
    } else if (previousAmount !== '') {
      var exempt = exemption(previousAmount);
      var taxableAmount = getTaxableAmount(amount, exempt);
      var elevyCharge = getElevyCharge(taxableAmount, calculations_elevyTax);
      var _platformCharge = calculations_calculatePlatformCharge(sendingFrom, sendingTo, amount);
      var totalTransferAmount = amount + elevyCharge + _platformCharge;
      setTransferAmount(totalTransferAmount);
      setElevyAmount(elevyCharge);
      setPlatformCharge(_platformCharge);
    } else if (amount > 0) {
      var _exempt = exemption(0);
      var _taxableAmount = getTaxableAmount(amount, _exempt);
      var _elevyCharge = getElevyCharge(_taxableAmount, calculations_elevyTax);
      var _platformCharge2 = calculations_calculatePlatformCharge(sendingFrom, sendingTo, amount);
      var _totalTransferAmount = amount + _elevyCharge + _platformCharge2;
      setTransferAmount(_totalTransferAmount);
      setElevyAmount(_elevyCharge);
      setPlatformCharge(_platformCharge2);
    } else {
      setTransferAmount(amount);
      setElevyAmount(0);
    }
  }, [amount, previousAmount, sendingFrom, sendingTo]);

  // event handlers
  var handleChange = function handleChange(event, callback) {
    var parsedAmount = parseInt(event.target.value.replaceAll(',', ''), 10);
    if (!isNaN(parsedAmount)) {
      callback(parsedAmount);
    } else {
      callback('');
    }
  };
  var handlePickerChange = function handlePickerChange(event, selection) {
    console.log(selection);
    setPickerType(selection);
    setShowPicker(true);
  };
  var handleTab = function handleTab(event) {
    if (event.keyCode == 13) {
      elevyChargeRef.current.focus();
    }
  };
  return Object(external_preact_["h"])(containers_MainContainer, null, Object(external_preact_["h"])("form", {
    className: "gridContainer",
    method: "POST"
  }, Object(external_preact_["h"])(containers_GridItem, {
    className: "gridItemFull"
  }, Object(external_preact_["h"])("div", {
    className: "inputGroup centerFlex"
  }, Object(external_preact_["h"])("h1", {
    className: "displayText"
  }, "E-LEVY CALCULATOR"))), Object(external_preact_["h"])(containers_GridItem, {
    className: "gridItemFullMobileOnly"
  }, Object(external_preact_["h"])(containers_ItemGroup, null, Object(external_preact_["h"])(TextField["a" /* default */], {
    label: "You want to send:",
    id: "amount",
    placeholder: "0",
    inputProps: {
      pattern: '[0-9,.]',
      inputMode: 'numeric',
      required: true,
      value: amount.toLocaleString('en-US'),
      onInput: function onInput(e) {
        return handleChange(e, setAmount);
      },
      tabIndex: 1
    }
  }))), Object(external_preact_["h"])(containers_GridItem, {
    className: "gridItemFullMobileOnly"
  }, Object(external_preact_["h"])(containers_ItemGroup, null, Object(external_preact_["h"])(TextField["a" /* default */], {
    label: "You have already sent today: (optional)",
    id: "previousAmount",
    placeholder: "0",
    inputProps: {
      pattern: '[0-9,.]',
      inputMode: 'numeric',
      value: previousAmount.toLocaleString('en-US'),
      onInput: function onInput(e) {
        return handleChange(e, setPreviousAmount);
      },
      tabIndex: 2,
      onKeyUp: handleTab
    }
  }))), Object(external_preact_["h"])(containers_GridItem, {
    className: "gridItemFull"
  }, Object(external_preact_["h"])(containers_ItemGroup, {
    className: "pickerRow"
  }, Object(external_preact_["h"])("div", {
    className: "platformPickerGrid"
  }, Object(external_preact_["h"])(form_FromPicker, {
    title: platforms.get(sendingFrom).name,
    theme: platforms.get(sendingFrom).theme,
    id: "from",
    handleChange: handlePickerChange
  }), Object(external_preact_["h"])(form_PickerArrow, null), Object(external_preact_["h"])(form_ToPicker, {
    title: platforms.get(sendingTo).name,
    theme: platforms.get(sendingTo).theme,
    id: "to",
    handleChange: handlePickerChange
  })))), Object(external_preact_["h"])(containers_GridItem, {
    className: "noMargin"
  }, Object(external_preact_["h"])(containers_ItemGroup, {
    className: "divider chargePadding"
  }, Object(external_preact_["h"])(form_ChargeLabel, {
    className: "alignRight",
    label: "E-Levy Charge"
  }), Object(external_preact_["h"])(form_TextDisplay, {
    className: "alignRight"
  }, Object(external_preact_["h"])(form_Charge, {
    value: elevyAmount
  })))), Object(external_preact_["h"])(containers_GridItem, {
    className: "noMargin"
  }, Object(external_preact_["h"])(containers_ItemGroup, {
    className: "chargePadding"
  }, Object(external_preact_["h"])(form_ChargeLabel, {
    label: "".concat(platforms.get(sendingFrom).company, " Charge")
  }), Object(external_preact_["h"])(form_TextDisplay, null, Object(external_preact_["h"])(form_Charge, {
    chargeProps: {
      ref: elevyChargeRef,
      tabIndex: 5
    },
    value: platformCharge
  })))), Object(external_preact_["h"])(containers_GridItem, {
    className: "centerFlex gridItemFull"
  }, Object(external_preact_["h"])(containers_ItemGroup, null, Object(external_preact_["h"])(form_ChargeLabel, {
    className: "alignCenter",
    label: "You will pay:"
  }), Object(external_preact_["h"])(form_TextDisplay, null, Object(external_preact_["h"])(form_Charge, {
    className: "charge",
    value: transferAmount
  })))), Object(external_preact_["h"])(containers_GridItem, {
    className: "gridItemFull"
  }, Object(external_preact_["h"])(containers_ItemGroup, {
    className: "centerFlex"
  }, Object(external_preact_["h"])("button", {
    className: "labelText button",
    type: "button",
    onClick: function onClick(e) {
      e.preventDefault();
      preserveChoice({
        advanced: false
      });
      showSimple();
      return false;
    }
  }, "Simple View"))), showPicker && Object(external_preact_["h"])(form_Picker, {
    data: platforms,
    selectedPicker: pickerType,
    title: pickerData[pickerType].pickerTitle,
    close: function close() {
      return setShowPicker(false);
    },
    updateChoice: pickerData[pickerType].updateChoice
  }), Object(external_preact_["h"])(containers_GridItem, {
    className: "gridItemFull"
  }, Object(external_preact_["h"])(containers_ItemGroup, {
    className: "centerFlex"
  }, Object(external_preact_["h"])(GetOnGooglePlay["a" /* default */], null))), Object(external_preact_["h"])(containers_GridItem, {
    className: "gridItemFull"
  }, Object(external_preact_["h"])(containers_ItemGroup, {
    className: "centerFlex"
  }, Object(external_preact_["h"])(global_Disclaimer, null)))));
};
/* harmony default export */ var advanced = (advanced_Advanced);
// CONCATENATED MODULE: ./components/app.js
function app_slicedToArray(arr, i) { return app_arrayWithHoles(arr) || app_iterableToArrayLimit(arr, i) || app_unsupportedIterableToArray(arr, i) || app_nonIterableRest(); }
function app_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function app_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return app_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return app_arrayLikeToArray(o, minLen); }
function app_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function app_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function app_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




// Code-splitting is automated for `routes` directory




var app_App = function App() {
  var _useState = Object(hooks_module["c" /* useState */])(getPreservedChoice()),
    _useState2 = app_slicedToArray(_useState, 2),
    showAdvanced = _useState2[0],
    setShowAdvanced = _useState2[1];
  return Object(external_preact_["h"])("div", {
    id: "app"
  }, Object(external_preact_["h"])(preact_router_es_Router, null, showAdvanced === false ? Object(external_preact_["h"])(home, {
    path: "".concat(baseroute, "/"),
    showAdvanced: function showAdvanced() {
      return setShowAdvanced(true);
    }
  }) : Object(external_preact_["h"])(advanced, {
    path: "".concat(baseroute, "/"),
    showSimple: function showSimple() {
      return setShowAdvanced(false);
    }
  })));
};
/* harmony default export */ var app = (app_App);
// CONCATENATED MODULE: ./index.js


/* harmony default export */ var index = __webpack_exports__["default"] = (app);

/***/ }),

/***/ "ZH8P":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Fragment) {/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HteQ");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(preact__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var TextField = function TextField(_ref) {
  var label = _ref.label,
    id = _ref.id,
    placeholder = _ref.placeholder,
    inputProps = _ref.inputProps;
  return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Fragment, null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
    for: id,
    className: "labelText"
  }, label), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("input", _extends({
    type: "text",
    name: id,
    placeholder: placeholder,
    className: "inputField",
    id: id
  }, inputProps)), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
    className: "currency"
  }, "GHS")));
};
TextField.defaultProps = {
  label: "label",
  id: "",
  placeholder: "",
  inputProps: {}
};
/* harmony default export */ __webpack_exports__["a"] = (TextField);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("HteQ")["Fragment"]))

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map