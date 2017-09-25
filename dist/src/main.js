/*!
 * [Dojo](https://dojo.io/)
 * Copyright [JS Foundation](https://js.foundation/) & contributors
 * [New BSD license](https://github.com/dojo/meta/blob/master/LICENSE)
 * All rights reserved
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("src/main", [], factory);
	else if(typeof exports === 'object')
		exports["src/main"] = factory();
	else
		root["src/main"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["dojoWebpackJsonp_hnpwa"];
/******/ 	window["dojoWebpackJsonp_hnpwa"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData === 0) {
/******/ 			return new Promise(function(resolve) { resolve(); });
/******/ 		}
/******/
/******/ 		// a Promise means "currently loading".
/******/ 		if(installedChunkData) {
/******/ 			return installedChunkData[2];
/******/ 		}
/******/
/******/ 		// setup Promise in chunk cache
/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		installedChunkData[2] = promise;
/******/
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;
/******/
/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + ({"0":"Content"}[chunkId]||chunkId) + ".js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) {
/******/ 					chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				}
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);
/******/
/******/ 		return promise;
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 69);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var globalObject = (function () {
    if (typeof global !== 'undefined') {
        // global spec defines a reference to the global object called 'global'
        // https://github.com/tc39/proposal-global
        // `global` is also defined in NodeJS
        return global;
    }
    else if (typeof window !== 'undefined') {
        // window is defined in browsers
        return window;
    }
    else if (typeof self !== 'undefined') {
        // self is defined in WebWorkers
        return self;
    }
})();
exports.default = globalObject;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lang_1 = __webpack_require__(5);
var Symbol_1 = __webpack_require__(3);
var maquette_1 = __webpack_require__(23);
/**
 * The symbol identifier for a WNode type
 */
exports.WNODE = Symbol_1.default('Identifier for a WNode.');
/**
 * The symbol identifier for a HNode type
 */
exports.HNODE = Symbol_1.default('Identifier for a HNode.');
/**
 * Helper function that returns true if the `DNode` is a `WNode` using the `type` property
 */
function isWNode(child) {
    return Boolean(child && (typeof child !== 'string') && child.type === exports.WNODE);
}
exports.isWNode = isWNode;
/**
 * Helper function that returns true if the `DNode` is a `HNode` using the `type` property
 */
function isHNode(child) {
    return Boolean(child && (typeof child !== 'string') && child.type === exports.HNODE);
}
exports.isHNode = isHNode;
function decorate(dNodes, modifier, predicate) {
    var nodes = Array.isArray(dNodes) ? dNodes.slice() : [dNodes];
    while (nodes.length) {
        var node = nodes.pop();
        if (node) {
            if (!predicate || predicate(node)) {
                modifier(node);
            }
            if ((isWNode(node) || isHNode(node)) && node.children) {
                nodes = nodes.concat(node.children);
            }
        }
    }
    return dNodes;
}
exports.decorate = decorate;
/**
 * Wrapper function for calls to create a widget.
 */
function w(widgetConstructor, properties, children) {
    if (children === void 0) { children = []; }
    return {
        children: children,
        widgetConstructor: widgetConstructor,
        properties: properties,
        type: exports.WNODE
    };
}
exports.w = w;
function v(tag, propertiesOrChildren, children) {
    if (propertiesOrChildren === void 0) { propertiesOrChildren = {}; }
    if (children === void 0) { children = []; }
    var properties = propertiesOrChildren;
    if (Array.isArray(propertiesOrChildren)) {
        children = propertiesOrChildren;
        properties = {};
    }
    var classes = properties.classes;
    if (typeof classes === 'function') {
        classes = classes();
        properties = lang_1.assign(properties, { classes: classes });
    }
    return {
        tag: tag,
        children: children,
        properties: properties,
        render: function () {
            return maquette_1.h(this.tag, this.properties, this.vNodes);
        },
        type: exports.HNODE
    };
}
exports.v = v;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = __webpack_require__(6);
var aspect_1 = __webpack_require__(40);
var Destroyable_1 = __webpack_require__(39);
/**
 * Determines is the value is Actionable (has a `.do` function)
 *
 * @param value the value to check
 * @returns boolean indicating is the value is Actionable
 */
function isActionable(value) {
    return Boolean(value && typeof value.do === 'function');
}
/**
 * Resolve listeners.
 */
function resolveListener(listener) {
    return isActionable(listener) ? function (event) { return listener.do({ event: event }); } : listener;
}
/**
 * Handles an array of handles
 *
 * @param handles an array of handles
 * @returns a single Handle for handles passed
 */
function handlesArraytoHandle(handles) {
    return {
        destroy: function () {
            handles.forEach(function (handle) { return handle.destroy(); });
        }
    };
}
/**
 * Map of computed regular expressions, keyed by string
 */
var regexMap = new Map_1.default();
/**
 * Determines is the event type glob has been matched
 *
 * @returns boolean that indicates if the glob is matched
 */
function isGlobMatch(globString, targetString) {
    if (typeof targetString === 'string' && typeof globString === 'string' && globString.indexOf('*') !== -1) {
        var regex = void 0;
        if (regexMap.has(globString)) {
            regex = regexMap.get(globString);
        }
        else {
            regex = new RegExp("^" + globString.replace(/\*/g, '.*') + "$");
            regexMap.set(globString, regex);
        }
        return regex.test(targetString);
    }
    else {
        return globString === targetString;
    }
}
exports.isGlobMatch = isGlobMatch;
/**
 * Event Class
 */
var Evented = (function (_super) {
    __extends(Evented, _super);
    /**
     * @constructor
     * @param options The constructor argurments
     */
    function Evented(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        /**
         * map of listeners keyed by event type
         */
        _this.listenersMap = new Map_1.default();
        /**
         * Catch all handler for various call signatures. The signatures are defined in
         * `BaseEventedEvents`.  You can add your own event type -> handler types by extending
         * `BaseEventedEvents`.  See example for details.
         *
         * @param args
         *
         * @example
         *
         * interface WidgetBaseEvents extends BaseEventedEvents {
         *     (type: 'properties:changed', handler: PropertiesChangedHandler): Handle;
         * }
         * class WidgetBase extends Evented {
         *    on: WidgetBaseEvents;
         * }
         *
         * @return {any}
         */
        _this.on = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (args.length === 2) {
                var _a = args, type_1 = _a[0], listeners = _a[1];
                if (Array.isArray(listeners)) {
                    var handles = listeners.map(function (listener) { return aspect_1.on(_this.listenersMap, type_1, resolveListener(listener)); });
                    return handlesArraytoHandle(handles);
                }
                else {
                    return aspect_1.on(this.listenersMap, type_1, resolveListener(listeners));
                }
            }
            else if (args.length === 1) {
                var listenerMapArg_1 = args[0];
                var handles = Object.keys(listenerMapArg_1).map(function (type) { return _this.on(type, listenerMapArg_1[type]); });
                return handlesArraytoHandle(handles);
            }
            else {
                throw new TypeError('Invalid arguments');
            }
        };
        var listeners = options.listeners;
        if (listeners) {
            _this.own(_this.on(listeners));
        }
        return _this;
    }
    /**
     * Emits the event objet for the specified type
     *
     * @param event the event to emit
     */
    Evented.prototype.emit = function (event) {
        var _this = this;
        this.listenersMap.forEach(function (method, type) {
            if (isGlobMatch(type, event.type)) {
                method.call(_this, event);
            }
        });
    };
    return Evented;
}(Destroyable_1.Destroyable));
exports.Evented = Evented;
exports.default = Evented;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var has_1 = __webpack_require__(4);
var global_1 = __webpack_require__(0);
var util_1 = __webpack_require__(19);
exports.Symbol = global_1.default.Symbol;
if (!has_1.default('es6-symbol')) {
    /**
     * Throws if the value is not a symbol, used internally within the Shim
     * @param  {any}    value The value to check
     * @return {symbol}       Returns the symbol or throws
     */
    var validateSymbol_1 = function validateSymbol(value) {
        if (!isSymbol(value)) {
            throw new TypeError(value + ' is not a symbol');
        }
        return value;
    };
    var defineProperties_1 = Object.defineProperties;
    var defineProperty_1 = Object.defineProperty;
    var create_1 = Object.create;
    var objPrototype_1 = Object.prototype;
    var globalSymbols_1 = {};
    var getSymbolName_1 = (function () {
        var created = create_1(null);
        return function (desc) {
            var postfix = 0;
            var name;
            while (created[String(desc) + (postfix || '')]) {
                ++postfix;
            }
            desc += String(postfix || '');
            created[desc] = true;
            name = '@@' + desc;
            // FIXME: Temporary guard until the duplicate execution when testing can be
            // pinned down.
            if (!Object.getOwnPropertyDescriptor(objPrototype_1, name)) {
                defineProperty_1(objPrototype_1, name, {
                    set: function (value) {
                        defineProperty_1(this, name, util_1.getValueDescriptor(value));
                    }
                });
            }
            return name;
        };
    }());
    var InternalSymbol_1 = function Symbol(description) {
        if (this instanceof InternalSymbol_1) {
            throw new TypeError('TypeError: Symbol is not a constructor');
        }
        return Symbol(description);
    };
    exports.Symbol = global_1.default.Symbol = function Symbol(description) {
        if (this instanceof Symbol) {
            throw new TypeError('TypeError: Symbol is not a constructor');
        }
        var sym = Object.create(InternalSymbol_1.prototype);
        description = (description === undefined ? '' : String(description));
        return defineProperties_1(sym, {
            __description__: util_1.getValueDescriptor(description),
            __name__: util_1.getValueDescriptor(getSymbolName_1(description))
        });
    };
    /* Decorate the Symbol function with the appropriate properties */
    defineProperty_1(exports.Symbol, 'for', util_1.getValueDescriptor(function (key) {
        if (globalSymbols_1[key]) {
            return globalSymbols_1[key];
        }
        return (globalSymbols_1[key] = exports.Symbol(String(key)));
    }));
    defineProperties_1(exports.Symbol, {
        keyFor: util_1.getValueDescriptor(function (sym) {
            var key;
            validateSymbol_1(sym);
            for (key in globalSymbols_1) {
                if (globalSymbols_1[key] === sym) {
                    return key;
                }
            }
        }),
        hasInstance: util_1.getValueDescriptor(exports.Symbol.for('hasInstance'), false, false),
        isConcatSpreadable: util_1.getValueDescriptor(exports.Symbol.for('isConcatSpreadable'), false, false),
        iterator: util_1.getValueDescriptor(exports.Symbol.for('iterator'), false, false),
        match: util_1.getValueDescriptor(exports.Symbol.for('match'), false, false),
        observable: util_1.getValueDescriptor(exports.Symbol.for('observable'), false, false),
        replace: util_1.getValueDescriptor(exports.Symbol.for('replace'), false, false),
        search: util_1.getValueDescriptor(exports.Symbol.for('search'), false, false),
        species: util_1.getValueDescriptor(exports.Symbol.for('species'), false, false),
        split: util_1.getValueDescriptor(exports.Symbol.for('split'), false, false),
        toPrimitive: util_1.getValueDescriptor(exports.Symbol.for('toPrimitive'), false, false),
        toStringTag: util_1.getValueDescriptor(exports.Symbol.for('toStringTag'), false, false),
        unscopables: util_1.getValueDescriptor(exports.Symbol.for('unscopables'), false, false)
    });
    /* Decorate the InternalSymbol object */
    defineProperties_1(InternalSymbol_1.prototype, {
        constructor: util_1.getValueDescriptor(exports.Symbol),
        toString: util_1.getValueDescriptor(function () { return this.__name__; }, false, false)
    });
    /* Decorate the Symbol.prototype */
    defineProperties_1(exports.Symbol.prototype, {
        toString: util_1.getValueDescriptor(function () { return 'Symbol (' + validateSymbol_1(this).__description__ + ')'; }),
        valueOf: util_1.getValueDescriptor(function () { return validateSymbol_1(this); })
    });
    defineProperty_1(exports.Symbol.prototype, exports.Symbol.toPrimitive, util_1.getValueDescriptor(function () { return validateSymbol_1(this); }));
    defineProperty_1(exports.Symbol.prototype, exports.Symbol.toStringTag, util_1.getValueDescriptor('Symbol', false, false, true));
    defineProperty_1(InternalSymbol_1.prototype, exports.Symbol.toPrimitive, util_1.getValueDescriptor(exports.Symbol.prototype[exports.Symbol.toPrimitive], false, false, true));
    defineProperty_1(InternalSymbol_1.prototype, exports.Symbol.toStringTag, util_1.getValueDescriptor(exports.Symbol.prototype[exports.Symbol.toStringTag], false, false, true));
}
/**
 * A custom guard function that determines if an object is a symbol or not
 * @param  {any}       value The value to check to see if it is a symbol or not
 * @return {is symbol}       Returns true if a symbol or not (and narrows the type guard)
 */
function isSymbol(value) {
    return (value && ((typeof value === 'symbol') || (value['@@toStringTag'] === 'Symbol'))) || false;
}
exports.isSymbol = isSymbol;
/**
 * Fill any missing well known symbols if the native Symbol is missing them
 */
['hasInstance', 'isConcatSpreadable', 'iterator', 'species', 'replace', 'search', 'split', 'match', 'toPrimitive',
    'toStringTag', 'unscopables', 'observable'].forEach(function (wellKnown) {
    if (!exports.Symbol[wellKnown]) {
        Object.defineProperty(exports.Symbol, wellKnown, util_1.getValueDescriptor(exports.Symbol.for(wellKnown), false, false));
    }
});
exports.default = exports.Symbol;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var has_1 = __webpack_require__(26);
var global_1 = __webpack_require__(0);
exports.default = has_1.default;
__export(__webpack_require__(26));
/* ECMAScript 6 and 7 Features */
/* Array */
has_1.add('es6-array', function () {
    return [
        'from',
        'of'
    ].every(function (key) { return key in global_1.default.Array; }) && [
        'findIndex',
        'find',
        'copyWithin'
    ].every(function (key) { return key in global_1.default.Array.prototype; });
}, true);
has_1.add('es6-array-fill', function () {
    if ('fill' in global_1.default.Array.prototype) {
        /* Some versions of Safari do not properly implement this */
        return [1].fill(9, Number.POSITIVE_INFINITY)[0] === 1;
    }
    return false;
}, true);
has_1.add('es7-array', function () { return 'includes' in global_1.default.Array.prototype; }, true);
/* Map */
has_1.add('es6-map', function () {
    if (typeof global_1.default.Map === 'function') {
        /*
        IE11 and older versions of Safari are missing critical ES6 Map functionality
        We wrap this in a try/catch because sometimes the Map constructor exists, but does not
        take arguments (iOS 8.4)
         */
        try {
            var map = new global_1.default.Map([[0, 1]]);
            return map.has(0) &&
                typeof map.keys === 'function' && has_1.default('es6-symbol') &&
                typeof map.values === 'function' &&
                typeof map.entries === 'function';
        }
        catch (e) {
            /* istanbul ignore next: not testing on iOS at the moment */
            return false;
        }
    }
    return false;
}, true);
/* Math */
has_1.add('es6-math', function () {
    return [
        'clz32',
        'sign',
        'log10',
        'log2',
        'log1p',
        'expm1',
        'cosh',
        'sinh',
        'tanh',
        'acosh',
        'asinh',
        'atanh',
        'trunc',
        'fround',
        'cbrt',
        'hypot'
    ].every(function (name) { return typeof global_1.default.Math[name] === 'function'; });
}, true);
has_1.add('es6-math-imul', function () {
    if ('imul' in global_1.default.Math) {
        /* Some versions of Safari on ios do not properly implement this */
        return Math.imul(0xffffffff, 5) === -5;
    }
    return false;
}, true);
/* Object */
has_1.add('es6-object', function () {
    return has_1.default('es6-symbol') && [
        'assign',
        'is',
        'getOwnPropertySymbols',
        'setPrototypeOf'
    ].every(function (name) { return typeof global_1.default.Object[name] === 'function'; });
}, true);
has_1.add('es2017-object', function () {
    return [
        'values',
        'entries',
        'getOwnPropertyDescriptors'
    ].every(function (name) { return typeof global_1.default.Object[name] === 'function'; });
}, true);
/* Observable */
has_1.add('es-observable', function () { return typeof global_1.default.Observable !== 'undefined'; }, true);
/* Promise */
has_1.add('es6-promise', function () { return typeof global_1.default.Promise !== 'undefined' && has_1.default('es6-symbol'); }, true);
/* Set */
has_1.add('es6-set', function () {
    if (typeof global_1.default.Set === 'function') {
        /* IE11 and older versions of Safari are missing critical ES6 Set functionality */
        var set = new global_1.default.Set([1]);
        return set.has(1) && 'keys' in set && typeof set.keys === 'function' && has_1.default('es6-symbol');
    }
    return false;
}, true);
/* String */
has_1.add('es6-string', function () {
    return [
        'fromCodePoint'
    ].every(function (key) { return typeof global_1.default.String[key] === 'function'; }) && [
        'codePointAt',
        'normalize',
        'repeat',
        'startsWith',
        'endsWith',
        'includes'
    ].every(function (key) { return typeof global_1.default.String.prototype[key] === 'function'; });
}, true);
has_1.add('es6-string-raw', function () {
    function getCallSite(callSite) {
        var substitutions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            substitutions[_i - 1] = arguments[_i];
        }
        return callSite;
    }
    if ('raw' in global_1.default.String) {
        var b = 1;
        var callSite = (_a = ["a\n", ""], _a.raw = ["a\\n", ""], getCallSite(_a, b));
        callSite.raw = ['a\\n'];
        var supportsTrunc = global_1.default.String.raw(callSite, 42) === 'a:\\n';
        return supportsTrunc;
    }
    return false;
    var _a;
}, true);
has_1.add('es2017-string', function () {
    return [
        'padStart',
        'padEnd'
    ].every(function (key) { return typeof global_1.default.String.prototype[key] === 'function'; });
}, true);
/* Symbol */
has_1.add('es6-symbol', function () { return typeof global_1.default.Symbol !== 'undefined' && typeof Symbol() === 'symbol'; }, true);
/* WeakMap */
has_1.add('es6-weakmap', function () {
    if (typeof global_1.default.WeakMap !== 'undefined') {
        /* IE11 and older versions of Safari are missing critical ES6 Map functionality */
        var key1 = {};
        var key2 = {};
        var map = new global_1.default.WeakMap([[key1, 1]]);
        Object.freeze(key1);
        return map.get(key1) === 1 && map.set(key2, 2) === map && has_1.default('es6-symbol');
    }
    return false;
}, true);
/* Miscellaneous features */
has_1.add('microtasks', function () { return has_1.default('es6-promise') || has_1.default('host-node') || has_1.default('dom-mutationobserver'); }, true);
has_1.add('postmessage', function () {
    // If window is undefined, and we have postMessage, it probably means we're in a web worker. Web workers have
    // post message but it doesn't work how we expect it to, so it's best just to pretend it doesn't exist.
    return typeof global_1.default.window !== 'undefined' && typeof global_1.default.postMessage === 'function';
}, true);
has_1.add('raf', function () { return typeof global_1.default.requestAnimationFrame === 'function'; }, true);
has_1.add('setimmediate', function () { return typeof global_1.default.setImmediate !== 'undefined'; }, true);
/* DOM Features */
has_1.add('dom-mutationobserver', function () {
    if (has_1.default('host-browser') && Boolean(global_1.default.MutationObserver || global_1.default.WebKitMutationObserver)) {
        // IE11 has an unreliable MutationObserver implementation where setProperty() does not
        // generate a mutation event, observers can crash, and the queue does not drain
        // reliably. The following feature test was adapted from
        // https://gist.github.com/t10ko/4aceb8c71681fdb275e33efe5e576b14
        var example = document.createElement('div');
        /* tslint:disable-next-line:variable-name */
        var HostMutationObserver = global_1.default.MutationObserver || global_1.default.WebKitMutationObserver;
        var observer = new HostMutationObserver(function () { });
        observer.observe(example, { attributes: true });
        example.style.setProperty('display', 'block');
        return Boolean(observer.takeRecords().length);
    }
    return false;
}, true);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var object_1 = __webpack_require__(12);
var object_2 = __webpack_require__(12);
exports.assign = object_2.assign;
var slice = Array.prototype.slice;
var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Type guard that ensures that the value can be coerced to Object
 * to weed out host objects that do not derive from Object.
 * This function is used to check if we want to deep copy an object or not.
 * Note: In ES6 it is possible to modify an object's Symbol.toStringTag property, which will
 * change the value returned by `toString`. This is a rare edge case that is difficult to handle,
 * so it is not handled here.
 * @param  value The value to check
 * @return       If the value is coercible into an Object
 */
function shouldDeepCopyObject(value) {
    return Object.prototype.toString.call(value) === '[object Object]';
}
function copyArray(array, inherited) {
    return array.map(function (item) {
        if (Array.isArray(item)) {
            return copyArray(item, inherited);
        }
        return !shouldDeepCopyObject(item) ?
            item :
            _mixin({
                deep: true,
                inherited: inherited,
                sources: [item],
                target: {}
            });
    });
}
function _mixin(kwArgs) {
    var deep = kwArgs.deep;
    var inherited = kwArgs.inherited;
    var target = kwArgs.target;
    var copied = kwArgs.copied || [];
    var copiedClone = copied.slice();
    for (var _i = 0, _a = kwArgs.sources; _i < _a.length; _i++) {
        var source = _a[_i];
        if (source === null || source === undefined) {
            continue;
        }
        for (var key in source) {
            if (inherited || hasOwnProperty.call(source, key)) {
                var value = source[key];
                if (copiedClone.indexOf(value) !== -1) {
                    continue;
                }
                if (deep) {
                    if (Array.isArray(value)) {
                        value = copyArray(value, inherited);
                    }
                    else if (shouldDeepCopyObject(value)) {
                        var targetValue = target[key] || {};
                        copied.push(source);
                        value = _mixin({
                            deep: true,
                            inherited: inherited,
                            sources: [value],
                            target: targetValue,
                            copied: copied
                        });
                    }
                }
                target[key] = value;
            }
        }
    }
    return target;
}
function create(prototype) {
    var mixins = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        mixins[_i - 1] = arguments[_i];
    }
    if (!mixins.length) {
        throw new RangeError('lang.create requires at least one mixin object.');
    }
    var args = mixins.slice();
    args.unshift(Object.create(prototype));
    return object_1.assign.apply(null, args);
}
exports.create = create;
function deepAssign(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    return _mixin({
        deep: true,
        inherited: false,
        sources: sources,
        target: target
    });
}
exports.deepAssign = deepAssign;
function deepMixin(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    return _mixin({
        deep: true,
        inherited: true,
        sources: sources,
        target: target
    });
}
exports.deepMixin = deepMixin;
/**
 * Creates a new object using the provided source's prototype as the prototype for the new object, and then
 * deep copies the provided source's values into the new target.
 *
 * @param source The object to duplicate
 * @return The new object
 */
function duplicate(source) {
    var target = Object.create(Object.getPrototypeOf(source));
    return deepMixin(target, source);
}
exports.duplicate = duplicate;
/**
 * Determines whether two values are the same value.
 *
 * @param a First value to compare
 * @param b Second value to compare
 * @return true if the values are the same; false otherwise
 */
function isIdentical(a, b) {
    return a === b ||
        /* both values are NaN */
        (a !== a && b !== b);
}
exports.isIdentical = isIdentical;
/**
 * Returns a function that binds a method to the specified object at runtime. This is similar to
 * `Function.prototype.bind`, but instead of a function it takes the name of a method on an object.
 * As a result, the function returned by `lateBind` will always call the function currently assigned to
 * the specified property on the object as of the moment the function it returns is called.
 *
 * @param instance The context object
 * @param method The name of the method on the context object to bind to itself
 * @param suppliedArgs An optional array of values to prepend to the `instance[method]` arguments list
 * @return The bound function
 */
function lateBind(instance, method) {
    var suppliedArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        suppliedArgs[_i - 2] = arguments[_i];
    }
    return suppliedArgs.length ?
        function () {
            var args = arguments.length ? suppliedArgs.concat(slice.call(arguments)) : suppliedArgs;
            // TS7017
            return instance[method].apply(instance, args);
        } :
        function () {
            // TS7017
            return instance[method].apply(instance, arguments);
        };
}
exports.lateBind = lateBind;
function mixin(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    return _mixin({
        deep: false,
        inherited: true,
        sources: sources,
        target: target
    });
}
exports.mixin = mixin;
/**
 * Returns a function which invokes the given function with the given arguments prepended to its argument list.
 * Like `Function.prototype.bind`, but does not alter execution context.
 *
 * @param targetFunction The function that needs to be bound
 * @param suppliedArgs An optional array of arguments to prepend to the `targetFunction` arguments list
 * @return The bound function
 */
function partial(targetFunction) {
    var suppliedArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        suppliedArgs[_i - 1] = arguments[_i];
    }
    return function () {
        var args = arguments.length ? suppliedArgs.concat(slice.call(arguments)) : suppliedArgs;
        return targetFunction.apply(this, args);
    };
}
exports.partial = partial;
/**
 * Returns an object with a destroy method that, when called, calls the passed-in destructor.
 * This is intended to provide a unified interface for creating "remove" / "destroy" handlers for
 * event listeners, timers, etc.
 *
 * @param destructor A function that will be called when the handle's `destroy` method is invoked
 * @return The handle object
 */
function createHandle(destructor) {
    return {
        destroy: function () {
            this.destroy = function () { };
            destructor.call(this);
        }
    };
}
exports.createHandle = createHandle;
/**
 * Returns a single handle that can be used to destroy multiple handles simultaneously.
 *
 * @param handles An array of handles with `destroy` methods
 * @return The handle object
 */
function createCompositeHandle() {
    var handles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        handles[_i] = arguments[_i];
    }
    return createHandle(function () {
        for (var _i = 0, handles_1 = handles; _i < handles_1.length; _i++) {
            var handle = handles_1[_i];
            handle.destroy();
        }
    });
}
exports.createCompositeHandle = createCompositeHandle;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var iterator_1 = __webpack_require__(9);
var global_1 = __webpack_require__(0);
var object_1 = __webpack_require__(12);
var has_1 = __webpack_require__(4);
__webpack_require__(3);
exports.Map = global_1.default.Map;
if (!has_1.default('es6-map')) {
    exports.Map = (_a = (function () {
            function Map(iterable) {
                var _this = this;
                this._keys = [];
                this._values = [];
                this[Symbol.toStringTag] = 'Map';
                if (iterable) {
                    iterator_1.forOf(iterable, function (value) {
                        _this.set(value[0], value[1]);
                    });
                }
            }
            /**
             * An alternative to Array.prototype.indexOf using Object.is
             * to check for equality. See http://mzl.la/1zuKO2V
             */
            Map.prototype._indexOfKey = function (keys, key) {
                for (var i = 0, length_1 = keys.length; i < length_1; i++) {
                    if (object_1.is(keys[i], key)) {
                        return i;
                    }
                }
                return -1;
            };
            Object.defineProperty(Map.prototype, "size", {
                get: function () {
                    return this._keys.length;
                },
                enumerable: true,
                configurable: true
            });
            Map.prototype.clear = function () {
                this._keys.length = this._values.length = 0;
            };
            Map.prototype.delete = function (key) {
                var index = this._indexOfKey(this._keys, key);
                if (index < 0) {
                    return false;
                }
                this._keys.splice(index, 1);
                this._values.splice(index, 1);
                return true;
            };
            Map.prototype.entries = function () {
                var _this = this;
                var values = this._keys.map(function (key, i) {
                    return [key, _this._values[i]];
                });
                return new iterator_1.ShimIterator(values);
            };
            Map.prototype.forEach = function (callback, context) {
                var keys = this._keys;
                var values = this._values;
                for (var i = 0, length_2 = keys.length; i < length_2; i++) {
                    callback.call(context, values[i], keys[i], this);
                }
            };
            Map.prototype.get = function (key) {
                var index = this._indexOfKey(this._keys, key);
                return index < 0 ? undefined : this._values[index];
            };
            Map.prototype.has = function (key) {
                return this._indexOfKey(this._keys, key) > -1;
            };
            Map.prototype.keys = function () {
                return new iterator_1.ShimIterator(this._keys);
            };
            Map.prototype.set = function (key, value) {
                var index = this._indexOfKey(this._keys, key);
                index = index < 0 ? this._keys.length : index;
                this._keys[index] = key;
                this._values[index] = value;
                return this;
            };
            Map.prototype.values = function () {
                return new iterator_1.ShimIterator(this._values);
            };
            Map.prototype[Symbol.iterator] = function () {
                return this.entries();
            };
            return Map;
        }()),
        _a[Symbol.species] = _a,
        _a);
}
exports.default = exports.Map;
var _a;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Evented_1 = __webpack_require__(2);
var Map_1 = __webpack_require__(6);
__webpack_require__(8); // Imported for side-effects
var WeakMap_1 = __webpack_require__(10);
var d_1 = __webpack_require__(1);
var diff_1 = __webpack_require__(31);
var RegistryHandler_1 = __webpack_require__(53);
var NodeHandler_1 = __webpack_require__(52);
var Registry_1 = __webpack_require__(13);
var WidgetRenderState;
(function (WidgetRenderState) {
    WidgetRenderState[WidgetRenderState["IDLE"] = 1] = "IDLE";
    WidgetRenderState[WidgetRenderState["PROPERTIES"] = 2] = "PROPERTIES";
    WidgetRenderState[WidgetRenderState["CHILDREN"] = 3] = "CHILDREN";
    WidgetRenderState[WidgetRenderState["RENDER"] = 4] = "RENDER";
})(WidgetRenderState || (WidgetRenderState = {}));
var decoratorMap = new Map_1.default();
var boundAuto = diff_1.auto.bind(null);
/**
 * Main widget base for all widgets to extend
 */
var WidgetBase = (function (_super) {
    __extends(WidgetBase, _super);
    /**
     * @constructor
     */
    function WidgetBase() {
        var _this = _super.call(this, {}) || this;
        /**
         * Array of property keys considered changed from the previous set properties
         */
        _this._changedPropertyKeys = [];
        /**
         * Core properties widget base sets for all widget
         */
        _this._coreProperties = {};
        _this._renderState = WidgetRenderState.IDLE;
        _this._metaMap = new WeakMap_1.default();
        _this._currentRootNode = 0;
        _this._numRootNodes = 0;
        _this._children = [];
        _this._decoratorCache = new Map_1.default();
        _this._properties = {};
        _this._cachedChildrenMap = new Map_1.default();
        _this._diffPropertyFunctionMap = new Map_1.default();
        _this._bindFunctionPropertyMap = new WeakMap_1.default();
        _this._registry = new RegistryHandler_1.default();
        _this._nodeHandler = new NodeHandler_1.default();
        _this.own(_this._registry);
        _this.own(_this._nodeHandler);
        _this._boundRenderFunc = _this.render.bind(_this);
        _this._boundInvalidate = _this.invalidate.bind(_this);
        _this.own(_this._registry.on('invalidate', _this._boundInvalidate));
        return _this;
    }
    WidgetBase.prototype.meta = function (MetaType) {
        var cached = this._metaMap.get(MetaType);
        if (!cached) {
            cached = new MetaType({
                invalidate: this._boundInvalidate,
                nodeHandler: this._nodeHandler
            });
            this._metaMap.set(MetaType, cached);
            this.own(cached);
        }
        return cached;
    };
    /**
     * vnode afterCreate callback that calls the onElementCreated lifecycle method.
     */
    WidgetBase.prototype._afterCreateCallback = function (element, projectionOptions, vnodeSelector, properties) {
        this._addElementToNodeHandler(element, projectionOptions, properties);
        this.onElementCreated(element, String(properties.key));
    };
    /**
     * vnode afterUpdate callback that calls the onElementUpdated lifecycle method.
     */
    WidgetBase.prototype._afterUpdateCallback = function (element, projectionOptions, vnodeSelector, properties) {
        this._addElementToNodeHandler(element, projectionOptions, properties);
        this.onElementUpdated(element, String(properties.key));
    };
    WidgetBase.prototype._addElementToNodeHandler = function (element, projectionOptions, properties) {
        var _this = this;
        var isRootNode = !properties.key || this._rootNodeKeys.indexOf(properties.key) > -1;
        var hasKey = !!properties.key;
        var isLastRootNode = false;
        if (isRootNode) {
            this._currentRootNode++;
            isLastRootNode = (this._currentRootNode === this._numRootNodes);
            if (this._projectorAttachEvent === undefined) {
                this._projectorAttachEvent = projectionOptions.nodeEvent.on('rendered', function () {
                    _this._nodeHandler.addProjector();
                });
                this.own(this._projectorAttachEvent);
            }
        }
        if (isLastRootNode) {
            this._nodeHandler.addRoot(element, properties);
        }
        else if (hasKey) {
            this._nodeHandler.add(element, properties);
        }
    };
    /**
     * Widget lifecycle method that is called whenever a dom node is created for a vnode.
     * Override this method to access the dom nodes that were inserted into the dom.
     * @param element The dom node represented by the vdom node.
     * @param key The vdom node's key.
     */
    WidgetBase.prototype.onElementCreated = function (element, key) {
        // Do nothing by default.
    };
    /**
     * Widget lifecycle method that is called whenever a dom node that is associated with a vnode is updated.
     * Note: this method is dependant on the Maquette afterUpdate callback which is called if a dom
     * node might have been updated.  Maquette does not guarantee the dom node was updated.
     * Override this method to access the dom node.
     * @param element The dom node represented by the vdom node.
     * @param key The vdom node's key.
     */
    WidgetBase.prototype.onElementUpdated = function (element, key) {
        // Do nothing by default.
    };
    Object.defineProperty(WidgetBase.prototype, "properties", {
        get: function () {
            return this._properties;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WidgetBase.prototype, "changedPropertyKeys", {
        get: function () {
            return this._changedPropertyKeys.slice();
        },
        enumerable: true,
        configurable: true
    });
    WidgetBase.prototype.__setCoreProperties__ = function (coreProperties) {
        this._renderState = WidgetRenderState.PROPERTIES;
        var baseRegistry = coreProperties.baseRegistry;
        if (this._coreProperties.baseRegistry !== baseRegistry) {
            this._registry.base = baseRegistry;
            this.invalidate();
        }
        this._coreProperties = coreProperties;
    };
    WidgetBase.prototype.__setProperties__ = function (originalProperties) {
        var _this = this;
        var properties = this._runBeforeProperties(originalProperties);
        var changedPropertyKeys = [];
        var allProperties = Object.keys(properties).concat(Object.keys(this._properties));
        var checkedProperties = [];
        var diffPropertyResults = {};
        var registeredDiffPropertyNames = this.getDecorator('registeredDiffProperty');
        var runReactions = false;
        this._renderState = WidgetRenderState.PROPERTIES;
        for (var i = 0; i < allProperties.length; i++) {
            var propertyName = allProperties[i];
            if (checkedProperties.indexOf(propertyName) > 0) {
                continue;
            }
            checkedProperties.push(propertyName);
            var previousProperty = this._properties[propertyName];
            var newProperty = this._bindFunctionProperty(properties[propertyName], this._coreProperties.bind);
            if (registeredDiffPropertyNames.indexOf(propertyName) !== -1) {
                runReactions = true;
                var diffFunctions = this.getDecorator("diffProperty:" + propertyName);
                for (var i_1 = 0; i_1 < diffFunctions.length; i_1++) {
                    var result = diffFunctions[i_1](previousProperty, newProperty);
                    if (result.changed && changedPropertyKeys.indexOf(propertyName) === -1) {
                        changedPropertyKeys.push(propertyName);
                    }
                    if (propertyName in properties) {
                        diffPropertyResults[propertyName] = result.value;
                    }
                }
            }
            else {
                var result = boundAuto(previousProperty, newProperty);
                if (result.changed && changedPropertyKeys.indexOf(propertyName) === -1) {
                    changedPropertyKeys.push(propertyName);
                }
                if (propertyName in properties) {
                    diffPropertyResults[propertyName] = result.value;
                }
            }
        }
        if (runReactions) {
            this._mapDiffPropertyReactions(properties, changedPropertyKeys).forEach(function (args, reaction) {
                if (args.changed) {
                    reaction.call(_this, args.previousProperties, args.newProperties);
                }
            });
        }
        this._properties = diffPropertyResults;
        this._changedPropertyKeys = changedPropertyKeys;
        if (changedPropertyKeys.length > 0) {
            this.invalidate();
        }
    };
    Object.defineProperty(WidgetBase.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: true,
        configurable: true
    });
    WidgetBase.prototype.__setChildren__ = function (children) {
        this._renderState = WidgetRenderState.CHILDREN;
        if (this._children.length > 0 || children.length > 0) {
            this._children = children;
            this.invalidate();
        }
    };
    WidgetBase.prototype.__render__ = function () {
        this._renderState = WidgetRenderState.RENDER;
        if (this._dirty === true || this._cachedVNode === undefined) {
            this._dirty = false;
            var render = this._runBeforeRenders();
            var dNode = render();
            dNode = this.runAfterRenders(dNode);
            this._decorateNodes(dNode);
            var widget = this._dNodeToVNode(dNode);
            this._manageDetachedChildren();
            this._nodeHandler.clear();
            this._cachedVNode = widget;
            this._renderState = WidgetRenderState.IDLE;
            return widget;
        }
        this._renderState = WidgetRenderState.IDLE;
        return this._cachedVNode;
    };
    WidgetBase.prototype._decorateNodes = function (node) {
        var _this = this;
        var nodes = Array.isArray(node) ? node.slice() : [node];
        this._numRootNodes = nodes.length;
        this._currentRootNode = 0;
        var rootNodes = [];
        this._rootNodeKeys = [];
        nodes.forEach(function (node) {
            if (d_1.isHNode(node)) {
                rootNodes.push(node);
                node.properties = node.properties || {};
                if (node.properties.key) {
                    _this._rootNodeKeys.push(node.properties.key);
                }
            }
        });
        while (nodes.length) {
            var node_1 = nodes.pop();
            if (d_1.isHNode(node_1) || d_1.isWNode(node_1)) {
                node_1.properties = node_1.properties || {};
                if (d_1.isHNode(node_1)) {
                    if (rootNodes.indexOf(node_1) !== -1 || node_1.properties.key) {
                        node_1.properties.afterCreate = this._afterCreateCallback;
                        node_1.properties.afterUpdate = this._afterUpdateCallback;
                    }
                    if (node_1.properties.bind === undefined) {
                        node_1.properties.bind = this;
                    }
                }
                else {
                    node_1.coreProperties = {
                        bind: this,
                        baseRegistry: this._coreProperties.baseRegistry
                    };
                }
                nodes = nodes.concat(node_1.children);
            }
        }
    };
    WidgetBase.prototype.invalidate = function () {
        if (this._renderState === WidgetRenderState.IDLE) {
            this._dirty = true;
            this.emit({
                type: 'invalidated',
                target: this
            });
        }
        else if (this._renderState === WidgetRenderState.PROPERTIES) {
            this._dirty = true;
        }
        else if (this._renderState === WidgetRenderState.CHILDREN) {
            this._dirty = true;
        }
    };
    WidgetBase.prototype.render = function () {
        return d_1.v('div', {}, this.children);
    };
    /**
     * Function to add decorators to WidgetBase
     *
     * @param decoratorKey The key of the decorator
     * @param value The value of the decorator
     */
    WidgetBase.prototype.addDecorator = function (decoratorKey, value) {
        value = Array.isArray(value) ? value : [value];
        if (this.hasOwnProperty('constructor')) {
            var decoratorList = decoratorMap.get(this.constructor);
            if (!decoratorList) {
                decoratorList = new Map_1.default();
                decoratorMap.set(this.constructor, decoratorList);
            }
            var specificDecoratorList = decoratorList.get(decoratorKey);
            if (!specificDecoratorList) {
                specificDecoratorList = [];
                decoratorList.set(decoratorKey, specificDecoratorList);
            }
            specificDecoratorList.push.apply(specificDecoratorList, value);
        }
        else {
            var decorators = this.getDecorator(decoratorKey);
            this._decoratorCache.set(decoratorKey, decorators.concat(value));
        }
    };
    /**
     * Function to build the list of decorators from the global decorator map.
     *
     * @param decoratorKey  The key of the decorator
     * @return An array of decorator values
     * @private
     */
    WidgetBase.prototype._buildDecoratorList = function (decoratorKey) {
        var allDecorators = [];
        var constructor = this.constructor;
        while (constructor) {
            var instanceMap = decoratorMap.get(constructor);
            if (instanceMap) {
                var decorators = instanceMap.get(decoratorKey);
                if (decorators) {
                    allDecorators.unshift.apply(allDecorators, decorators);
                }
            }
            constructor = Object.getPrototypeOf(constructor);
        }
        return allDecorators;
    };
    /**
     * Function to retrieve decorator values
     *
     * @param decoratorKey The key of the decorator
     * @returns An array of decorator values
     */
    WidgetBase.prototype.getDecorator = function (decoratorKey) {
        var allDecorators = this._decoratorCache.get(decoratorKey);
        if (allDecorators !== undefined) {
            return allDecorators;
        }
        allDecorators = this._buildDecoratorList(decoratorKey);
        this._decoratorCache.set(decoratorKey, allDecorators);
        return allDecorators;
    };
    WidgetBase.prototype._mapDiffPropertyReactions = function (newProperties, changedPropertyKeys) {
        var _this = this;
        var reactionFunctions = this.getDecorator('diffReaction');
        return reactionFunctions.reduce(function (reactionPropertyMap, _a) {
            var reaction = _a.reaction, propertyName = _a.propertyName;
            var reactionArguments = reactionPropertyMap.get(reaction);
            if (reactionArguments === undefined) {
                reactionArguments = {
                    previousProperties: {},
                    newProperties: {},
                    changed: false
                };
            }
            reactionArguments.previousProperties[propertyName] = _this._properties[propertyName];
            reactionArguments.newProperties[propertyName] = newProperties[propertyName];
            if (changedPropertyKeys.indexOf(propertyName) !== -1) {
                reactionArguments.changed = true;
            }
            reactionPropertyMap.set(reaction, reactionArguments);
            return reactionPropertyMap;
        }, new Map_1.default());
    };
    /**
     * Binds unbound property functions to the specified `bind` property
     *
     * @param properties properties to check for functions
     */
    WidgetBase.prototype._bindFunctionProperty = function (property, bind) {
        if (typeof property === 'function' && Registry_1.isWidgetBaseConstructor(property) === false) {
            var bindInfo = this._bindFunctionPropertyMap.get(property) || {};
            var boundFunc = bindInfo.boundFunc, scope = bindInfo.scope;
            if (boundFunc === undefined || scope !== bind) {
                boundFunc = property.bind(bind);
                this._bindFunctionPropertyMap.set(property, { boundFunc: boundFunc, scope: bind });
            }
            return boundFunc;
        }
        return property;
    };
    Object.defineProperty(WidgetBase.prototype, "registry", {
        get: function () {
            return this._registry;
        },
        enumerable: true,
        configurable: true
    });
    WidgetBase.prototype._runBeforeProperties = function (properties) {
        var _this = this;
        var beforeProperties = this.getDecorator('beforeProperties');
        if (beforeProperties.length > 0) {
            return beforeProperties.reduce(function (properties, beforePropertiesFunction) {
                return __assign({}, properties, beforePropertiesFunction.call(_this, properties));
            }, __assign({}, properties));
        }
        return properties;
    };
    /**
     * Run all registered before renders and return the updated render method
     */
    WidgetBase.prototype._runBeforeRenders = function () {
        var _this = this;
        var beforeRenders = this.getDecorator('beforeRender');
        if (beforeRenders.length > 0) {
            return beforeRenders.reduce(function (render, beforeRenderFunction) {
                var updatedRender = beforeRenderFunction.call(_this, render, _this._properties, _this._children);
                if (!updatedRender) {
                    console.warn('Render function not returned from beforeRender, using previous render');
                    return render;
                }
                return updatedRender;
            }, this._boundRenderFunc);
        }
        return this._boundRenderFunc;
    };
    /**
     * Run all registered after renders and return the decorated DNodes
     *
     * @param dNode The DNodes to run through the after renders
     */
    WidgetBase.prototype.runAfterRenders = function (dNode) {
        var _this = this;
        var afterRenders = this.getDecorator('afterRender');
        if (afterRenders.length > 0) {
            return afterRenders.reduce(function (dNode, afterRenderFunction) {
                return afterRenderFunction.call(_this, dNode);
            }, dNode);
        }
        return dNode;
    };
    WidgetBase.prototype._dNodeToVNode = function (dNode) {
        var _this = this;
        if (typeof dNode === 'string' || dNode === null || dNode === undefined) {
            return dNode;
        }
        if (Array.isArray(dNode)) {
            return dNode.map(function (node) { return _this._dNodeToVNode(node); });
        }
        if (d_1.isWNode(dNode)) {
            var children = dNode.children, properties = dNode.properties, coreProperties = dNode.coreProperties;
            var key = properties.key;
            var widgetConstructor = dNode.widgetConstructor;
            var child = void 0;
            if (!Registry_1.isWidgetBaseConstructor(widgetConstructor)) {
                var item = this._registry.get(widgetConstructor);
                if (item === null) {
                    return null;
                }
                widgetConstructor = item;
            }
            var childrenMapKey = key || widgetConstructor;
            var cachedChildren = this._cachedChildrenMap.get(childrenMapKey) || [];
            var cachedChild = void 0;
            for (var i = 0; i < cachedChildren.length; i++) {
                var cachedChildWrapper = cachedChildren[i];
                if (cachedChildWrapper.widgetConstructor === widgetConstructor && cachedChildWrapper.used === false) {
                    cachedChild = cachedChildWrapper;
                    break;
                }
            }
            if (cachedChild !== undefined) {
                child = cachedChild.child;
                cachedChild.used = true;
            }
            else {
                child = new widgetConstructor();
                child.own(child.on('invalidated', this._boundInvalidate));
                cachedChildren = cachedChildren.concat([{ child: child, widgetConstructor: widgetConstructor, used: true }]);
                this._cachedChildrenMap.set(childrenMapKey, cachedChildren);
                this.own(child);
            }
            child.__setCoreProperties__(coreProperties);
            child.__setProperties__(properties);
            if (typeof childrenMapKey !== 'string' && cachedChildren.length > 1) {
                var widgetName = childrenMapKey.name;
                var errorMsg = 'It is recommended to provide a unique \'key\' property when using the same widget multiple times';
                if (widgetName) {
                    errorMsg = "It is recommended to provide a unique 'key' property when using the same widget (" + widgetName + ") multiple times";
                }
                console.warn(errorMsg);
                this.emit({ type: 'error', target: this, error: new Error(errorMsg) });
            }
            child.__setChildren__(children);
            return child.__render__();
        }
        dNode.vNodes = [];
        for (var i = 0; i < dNode.children.length; i++) {
            var child = dNode.children[i];
            if (child === null || child === undefined) {
                continue;
            }
            dNode.vNodes.push(this._dNodeToVNode(child));
        }
        return dNode.render();
    };
    /**
     * Manage widget instances after render processing
     */
    WidgetBase.prototype._manageDetachedChildren = function () {
        var _this = this;
        this._cachedChildrenMap.forEach(function (cachedChildren, key) {
            var filteredCacheChildren = [];
            for (var i = 0; i < cachedChildren.length; i++) {
                var cachedChild = cachedChildren[i];
                if (cachedChild.used === false) {
                    cachedChild.child.destroy();
                    continue;
                }
                cachedChild.used = false;
                filteredCacheChildren.push(cachedChild);
            }
            _this._cachedChildrenMap.set(key, filteredCacheChildren);
        });
    };
    /**
     * static identifier
     */
    WidgetBase._type = Registry_1.WIDGET_BASE_TYPE;
    return WidgetBase;
}(Evented_1.Evented));
exports.WidgetBase = WidgetBase;
exports.default = WidgetBase;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = __webpack_require__(0);
var queue_1 = __webpack_require__(50);
var iterator_1 = __webpack_require__(9);
__webpack_require__(3);
var has_1 = __webpack_require__(4);
exports.ShimPromise = global_1.default.Promise;
exports.isThenable = function isThenable(value) {
    return value && typeof value.then === 'function';
};
if (!has_1.default('es6-promise')) {
    global_1.default.Promise = exports.ShimPromise = (_a = (function () {
            /**
             * Creates a new Promise.
             *
             * @constructor
             *
             * @param executor
             * The executor function is called immediately when the Promise is instantiated. It is responsible for
             * starting the asynchronous operation when it is invoked.
             *
             * The executor must call either the passed `resolve` function when the asynchronous operation has completed
             * successfully, or the `reject` function when the operation fails.
             */
            function Promise(executor) {
                var _this = this;
                /**
                 * The current state of this promise.
                 */
                this.state = 1 /* Pending */;
                this[Symbol.toStringTag] = 'Promise';
                /**
                 * If true, the resolution of this promise is chained ("locked in") to another promise.
                 */
                var isChained = false;
                /**
                 * Whether or not this promise is in a resolved state.
                 */
                var isResolved = function () {
                    return _this.state !== 1 /* Pending */ || isChained;
                };
                /**
                 * Callbacks that should be invoked once the asynchronous operation has completed.
                 */
                var callbacks = [];
                /**
                 * Initially pushes callbacks onto a queue for execution once this promise settles. After the promise settles,
                 * enqueues callbacks for execution on the next event loop turn.
                 */
                var whenFinished = function (callback) {
                    if (callbacks) {
                        callbacks.push(callback);
                    }
                };
                /**
                 * Settles this promise.
                 *
                 * @param newState The resolved state for this promise.
                 * @param {T|any} value The resolved value for this promise.
                 */
                var settle = function (newState, value) {
                    // A promise can only be settled once.
                    if (_this.state !== 1 /* Pending */) {
                        return;
                    }
                    _this.state = newState;
                    _this.resolvedValue = value;
                    whenFinished = queue_1.queueMicroTask;
                    // Only enqueue a callback runner if there are callbacks so that initially fulfilled Promises don't have to
                    // wait an extra turn.
                    if (callbacks && callbacks.length > 0) {
                        queue_1.queueMicroTask(function () {
                            if (callbacks) {
                                var count = callbacks.length;
                                for (var i = 0; i < count; ++i) {
                                    callbacks[i].call(null);
                                }
                                callbacks = null;
                            }
                        });
                    }
                };
                /**
                 * Resolves this promise.
                 *
                 * @param newState The resolved state for this promise.
                 * @param {T|any} value The resolved value for this promise.
                 */
                var resolve = function (newState, value) {
                    if (isResolved()) {
                        return;
                    }
                    if (exports.isThenable(value)) {
                        value.then(settle.bind(null, 0 /* Fulfilled */), settle.bind(null, 2 /* Rejected */));
                        isChained = true;
                    }
                    else {
                        settle(newState, value);
                    }
                };
                this.then = function (onFulfilled, onRejected) {
                    return new Promise(function (resolve, reject) {
                        // whenFinished initially queues up callbacks for execution after the promise has settled. Once the
                        // promise has settled, whenFinished will schedule callbacks for execution on the next turn through the
                        // event loop.
                        whenFinished(function () {
                            var callback = _this.state === 2 /* Rejected */ ? onRejected : onFulfilled;
                            if (typeof callback === 'function') {
                                try {
                                    resolve(callback(_this.resolvedValue));
                                }
                                catch (error) {
                                    reject(error);
                                }
                            }
                            else if (_this.state === 2 /* Rejected */) {
                                reject(_this.resolvedValue);
                            }
                            else {
                                resolve(_this.resolvedValue);
                            }
                        });
                    });
                };
                try {
                    executor(resolve.bind(null, 0 /* Fulfilled */), resolve.bind(null, 2 /* Rejected */));
                }
                catch (error) {
                    settle(2 /* Rejected */, error);
                }
            }
            Promise.all = function (iterable) {
                return new this(function (resolve, reject) {
                    var values = [];
                    var complete = 0;
                    var total = 0;
                    var populating = true;
                    function fulfill(index, value) {
                        values[index] = value;
                        ++complete;
                        finish();
                    }
                    function finish() {
                        if (populating || complete < total) {
                            return;
                        }
                        resolve(values);
                    }
                    function processItem(index, item) {
                        ++total;
                        if (exports.isThenable(item)) {
                            // If an item Promise rejects, this Promise is immediately rejected with the item
                            // Promise's rejection error.
                            item.then(fulfill.bind(null, index), reject);
                        }
                        else {
                            Promise.resolve(item).then(fulfill.bind(null, index));
                        }
                    }
                    var i = 0;
                    iterator_1.forOf(iterable, function (value) {
                        processItem(i, value);
                        i++;
                    });
                    populating = false;
                    finish();
                });
            };
            Promise.race = function (iterable) {
                return new this(function (resolve, reject) {
                    iterator_1.forOf(iterable, function (item) {
                        if (item instanceof Promise) {
                            // If a Promise item rejects, this Promise is immediately rejected with the item
                            // Promise's rejection error.
                            item.then(resolve, reject);
                        }
                        else {
                            Promise.resolve(item).then(resolve);
                        }
                    });
                });
            };
            Promise.reject = function (reason) {
                return new this(function (resolve, reject) {
                    reject(reason);
                });
            };
            Promise.resolve = function (value) {
                return new this(function (resolve) {
                    resolve(value);
                });
            };
            Promise.prototype.catch = function (onRejected) {
                return this.then(undefined, onRejected);
            };
            return Promise;
        }()),
        _a[Symbol.species] = exports.ShimPromise,
        _a);
}
exports.default = exports.ShimPromise;
var _a;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var string_1 = __webpack_require__(49);
__webpack_require__(3);
var staticDone = { done: true, value: undefined };
/**
 * A class that _shims_ an iterator interface on array like objects.
 */
var ShimIterator = (function () {
    function ShimIterator(list) {
        this._nextIndex = -1;
        if (isIterable(list)) {
            this._nativeIterator = list[Symbol.iterator]();
        }
        else {
            this._list = list;
        }
    }
    ;
    /**
     * Return the next iteration result for the Iterator
     */
    ShimIterator.prototype.next = function () {
        if (this._nativeIterator) {
            return this._nativeIterator.next();
        }
        if (!this._list) {
            return staticDone;
        }
        if (++this._nextIndex < this._list.length) {
            return {
                done: false,
                value: this._list[this._nextIndex]
            };
        }
        return staticDone;
    };
    ;
    ShimIterator.prototype[Symbol.iterator] = function () {
        return this;
    };
    return ShimIterator;
}());
exports.ShimIterator = ShimIterator;
/**
 * A type guard for checking if something has an Iterable interface
 *
 * @param value The value to type guard against
 */
function isIterable(value) {
    return value && typeof value[Symbol.iterator] === 'function';
}
exports.isIterable = isIterable;
/**
 * A type guard for checking if something is ArrayLike
 *
 * @param value The value to type guard against
 */
function isArrayLike(value) {
    return value && typeof value.length === 'number';
}
exports.isArrayLike = isArrayLike;
/**
 * Returns the iterator for an object
 *
 * @param iterable The iterable object to return the iterator for
 */
function get(iterable) {
    if (isIterable(iterable)) {
        return iterable[Symbol.iterator]();
    }
    else if (isArrayLike(iterable)) {
        return new ShimIterator(iterable);
    }
}
exports.get = get;
/**
 * Shims the functionality of `for ... of` blocks
 *
 * @param iterable The object the provides an interator interface
 * @param callback The callback which will be called for each item of the iterable
 * @param thisArg Optional scope to pass the callback
 */
function forOf(iterable, callback, thisArg) {
    var broken = false;
    function doBreak() {
        broken = true;
    }
    /* We need to handle iteration of double byte strings properly */
    if (isArrayLike(iterable) && typeof iterable === 'string') {
        var l = iterable.length;
        for (var i = 0; i < l; ++i) {
            var char = iterable[i];
            if ((i + 1) < l) {
                var code = char.charCodeAt(0);
                if ((code >= string_1.HIGH_SURROGATE_MIN) && (code <= string_1.HIGH_SURROGATE_MAX)) {
                    char += iterable[++i];
                }
            }
            callback.call(thisArg, char, iterable, doBreak);
            if (broken) {
                return;
            }
        }
    }
    else {
        var iterator = get(iterable);
        if (iterator) {
            var result = iterator.next();
            while (!result.done) {
                callback.call(thisArg, result.value, iterable, doBreak);
                if (broken) {
                    return;
                }
                result = iterator.next();
            }
        }
    }
}
exports.forOf = forOf;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = __webpack_require__(0);
var iterator_1 = __webpack_require__(9);
var has_1 = __webpack_require__(4);
__webpack_require__(3);
exports.WeakMap = global_1.default.WeakMap;
if (!has_1.default('es6-weakmap')) {
    var DELETED_1 = {};
    var getUID_1 = function getUID() {
        return Math.floor(Math.random() * 100000000);
    };
    var generateName_1 = (function () {
        var startId = Math.floor(Date.now() % 100000000);
        return function generateName() {
            return '__wm' + getUID_1() + (startId++ + '__');
        };
    })();
    exports.WeakMap = (function () {
        function WeakMap(iterable) {
            var _this = this;
            this[Symbol.toStringTag] = 'WeakMap';
            Object.defineProperty(this, '_name', {
                value: generateName_1()
            });
            this._frozenEntries = [];
            if (iterable) {
                iterator_1.forOf(iterable, function (_a) {
                    var key = _a[0], value = _a[1];
                    return _this.set(key, value);
                });
            }
        }
        WeakMap.prototype._getFrozenEntryIndex = function (key) {
            for (var i = 0; i < this._frozenEntries.length; i++) {
                if (this._frozenEntries[i].key === key) {
                    return i;
                }
            }
            return -1;
        };
        WeakMap.prototype.delete = function (key) {
            if (key === undefined || key === null) {
                return false;
            }
            var entry = key[this._name];
            if (entry && entry.key === key && entry.value !== DELETED_1) {
                entry.value = DELETED_1;
                return true;
            }
            var frozenIndex = this._getFrozenEntryIndex(key);
            if (frozenIndex >= 0) {
                this._frozenEntries.splice(frozenIndex, 1);
                return true;
            }
            return false;
        };
        WeakMap.prototype.get = function (key) {
            if (key === undefined || key === null) {
                return undefined;
            }
            var entry = key[this._name];
            if (entry && entry.key === key && entry.value !== DELETED_1) {
                return entry.value;
            }
            var frozenIndex = this._getFrozenEntryIndex(key);
            if (frozenIndex >= 0) {
                return this._frozenEntries[frozenIndex].value;
            }
        };
        WeakMap.prototype.has = function (key) {
            if (key === undefined || key === null) {
                return false;
            }
            var entry = key[this._name];
            if (Boolean(entry && entry.key === key && entry.value !== DELETED_1)) {
                return true;
            }
            var frozenIndex = this._getFrozenEntryIndex(key);
            if (frozenIndex >= 0) {
                return true;
            }
            return false;
        };
        WeakMap.prototype.set = function (key, value) {
            if (!key || (typeof key !== 'object' && typeof key !== 'function')) {
                throw new TypeError('Invalid value used as weak map key');
            }
            var entry = key[this._name];
            if (!entry || entry.key !== key) {
                entry = Object.create(null, {
                    key: { value: key }
                });
                if (Object.isFrozen(key)) {
                    this._frozenEntries.push(entry);
                }
                else {
                    Object.defineProperty(key, this._name, {
                        value: entry
                    });
                }
            }
            entry.value = value;
            return this;
        };
        return WeakMap;
    }());
}
exports.default = exports.WeakMap;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generic decorator handler to take care of whether or not the decorator was called at the class level
 * or the method level.
 *
 * @param handler
 */
function handleDecorator(handler) {
    return function (target, propertyKey, descriptor) {
        if (typeof target === 'function') {
            handler(target.prototype, undefined);
        }
        else {
            handler(target, propertyKey);
        }
    };
}
exports.handleDecorator = handleDecorator;
exports.default = handleDecorator;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = __webpack_require__(0);
var has_1 = __webpack_require__(4);
var Symbol_1 = __webpack_require__(3);
if (has_1.default('es6-object')) {
    var globalObject = global_1.default.Object;
    exports.assign = globalObject.assign;
    exports.getOwnPropertyDescriptor = globalObject.getOwnPropertyDescriptor;
    exports.getOwnPropertyNames = globalObject.getOwnPropertyNames;
    exports.getOwnPropertySymbols = globalObject.getOwnPropertySymbols;
    exports.is = globalObject.is;
    exports.keys = globalObject.keys;
}
else {
    exports.keys = function symbolAwareKeys(o) {
        return Object.keys(o).filter(function (key) { return !Boolean(key.match(/^@@.+/)); });
    };
    exports.assign = function assign(target) {
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }
        var to = Object(target);
        sources.forEach(function (nextSource) {
            if (nextSource) {
                exports.keys(nextSource).forEach(function (nextKey) {
                    to[nextKey] = nextSource[nextKey];
                });
            }
        });
        return to;
    };
    exports.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(o, prop) {
        if (Symbol_1.isSymbol(prop)) {
            return Object.getOwnPropertyDescriptor(o, prop);
        }
        else {
            return Object.getOwnPropertyDescriptor(o, prop);
        }
    };
    exports.getOwnPropertyNames = function getOwnPropertyNames(o) {
        return Object.getOwnPropertyNames(o).filter(function (key) { return !Boolean(key.match(/^@@.+/)); });
    };
    exports.getOwnPropertySymbols = function getOwnPropertySymbols(o) {
        return Object.getOwnPropertyNames(o).filter(function (key) { return Boolean(key.match(/^@@.+/)); })
            .map(function (key) { return Symbol.for(key.substring(2)); });
    };
    exports.is = function is(value1, value2) {
        if (value1 === value2) {
            return value1 !== 0 || 1 / value1 === 1 / value2; // -0
        }
        return value1 !== value1 && value2 !== value2; // NaN
    };
}
if (has_1.default('es2017-object')) {
    var globalObject = global_1.default.Object;
    exports.getOwnPropertyDescriptors = globalObject.getOwnPropertyDescriptors;
    exports.entries = globalObject.entries;
    exports.values = globalObject.values;
}
else {
    exports.getOwnPropertyDescriptors = function getOwnPropertyDescriptors(o) {
        return exports.getOwnPropertyNames(o).reduce(function (previous, key) {
            previous[key] = exports.getOwnPropertyDescriptor(o, key);
            return previous;
        }, {});
    };
    exports.entries = function entries(o) {
        return exports.keys(o).map(function (key) { return [key, o[key]]; });
    };
    exports.values = function values(o) {
        return exports.keys(o).map(function (key) { return o[key]; });
    };
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Promise_1 = __webpack_require__(8);
var Map_1 = __webpack_require__(6);
var Symbol_1 = __webpack_require__(3);
var Evented_1 = __webpack_require__(2);
/**
 * Widget base symbol type
 */
exports.WIDGET_BASE_TYPE = Symbol_1.default('Widget Base');
/**
 * Checks is the item is a subclass of WidgetBase (or a WidgetBase)
 *
 * @param item the item to check
 * @returns true/false indicating if the item is a WidgetBaseConstructor
 */
function isWidgetBaseConstructor(item) {
    return Boolean(item && item._type === exports.WIDGET_BASE_TYPE);
}
exports.isWidgetBaseConstructor = isWidgetBaseConstructor;
/**
 * The Registry implementation
 */
var Registry = (function (_super) {
    __extends(Registry, _super);
    function Registry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Emit loaded event for registry label
     */
    Registry.prototype.emitLoadedEvent = function (widgetLabel, item) {
        this.emit({
            type: widgetLabel,
            action: 'loaded',
            item: item
        });
    };
    Registry.prototype.define = function (label, item) {
        var _this = this;
        if (this._widgetRegistry === undefined) {
            this._widgetRegistry = new Map_1.default();
        }
        if (this._widgetRegistry.has(label)) {
            throw new Error("widget has already been registered for '" + label.toString() + "'");
        }
        this._widgetRegistry.set(label, item);
        if (item instanceof Promise_1.default) {
            item.then(function (widgetCtor) {
                _this._widgetRegistry.set(label, widgetCtor);
                _this.emitLoadedEvent(label, widgetCtor);
                return widgetCtor;
            }, function (error) {
                throw error;
            });
        }
        else {
            this.emitLoadedEvent(label, item);
        }
    };
    Registry.prototype.defineInjector = function (label, item) {
        if (this._injectorRegistry === undefined) {
            this._injectorRegistry = new Map_1.default();
        }
        if (this._injectorRegistry.has(label)) {
            throw new Error("injector has already been registered for '" + label.toString() + "'");
        }
        this._injectorRegistry.set(label, item);
        this.emitLoadedEvent(label, item);
    };
    Registry.prototype.get = function (label) {
        var _this = this;
        if (!this.has(label)) {
            return null;
        }
        var item = this._widgetRegistry.get(label);
        if (isWidgetBaseConstructor(item)) {
            return item;
        }
        if (item instanceof Promise_1.default) {
            return null;
        }
        var promise = item();
        this._widgetRegistry.set(label, promise);
        promise.then(function (widgetCtor) {
            _this._widgetRegistry.set(label, widgetCtor);
            _this.emitLoadedEvent(label, widgetCtor);
            return widgetCtor;
        }, function (error) {
            throw error;
        });
        return null;
    };
    Registry.prototype.getInjector = function (label) {
        if (!this.hasInjector(label)) {
            return null;
        }
        return this._injectorRegistry.get(label);
    };
    Registry.prototype.has = function (label) {
        return Boolean(this._widgetRegistry && this._widgetRegistry.has(label));
    };
    Registry.prototype.hasInjector = function (label) {
        return Boolean(this._injectorRegistry && this._injectorRegistry.has(label));
    };
    return Registry;
}(Evented_1.Evented));
exports.Registry = Registry;
exports.default = Registry;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WeakMap_1 = __webpack_require__(10);
var handleDecorator_1 = __webpack_require__(11);
var beforeProperties_1 = __webpack_require__(56);
/**
 * Map of instances against registered injectors.
 */
var registeredInjectorsMap = new WeakMap_1.default();
/**
 * Decorator retrieves an injector from an available registry using the name and
 * calls the `getProperties` function with the payload from the injector
 * and current properties with the the injected properties returned.
 *
 * @param InjectConfig the inject configuration
 */
function inject(_a) {
    var name = _a.name, getProperties = _a.getProperties;
    return handleDecorator_1.handleDecorator(function (target, propertyKey) {
        beforeProperties_1.beforeProperties(function (properties) {
            var _this = this;
            var injector = this.registry.getInjector(name);
            if (injector) {
                var registeredInjectors = registeredInjectorsMap.get(this) || [];
                if (registeredInjectors.length === 0) {
                    registeredInjectorsMap.set(this, registeredInjectors);
                }
                if (registeredInjectors.indexOf(injector) === -1) {
                    injector.on('invalidate', function () {
                        _this.emit({ type: 'invalidated', target: _this });
                    });
                    registeredInjectors.push(injector);
                }
                return getProperties(injector.get(), properties);
            }
        })(target);
    });
}
exports.inject = inject;
exports.default = inject;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lang_1 = __webpack_require__(5);
/**
 * Parses a query string, returning a ParamList object.
 */
function parseQueryString(input) {
    var query = {};
    for (var _i = 0, _a = input.split('&'); _i < _a.length; _i++) {
        var entry = _a[_i];
        var indexOfFirstEquals = entry.indexOf('=');
        var key = void 0;
        var value = '';
        if (indexOfFirstEquals >= 0) {
            key = entry.slice(0, indexOfFirstEquals);
            value = entry.slice(indexOfFirstEquals + 1);
        }
        else {
            key = entry;
        }
        key = key ? decodeURIComponent(key) : '';
        value = value ? decodeURIComponent(value) : '';
        if (key in query) {
            query[key].push(value);
        }
        else {
            query[key] = [value];
        }
    }
    return query;
}
/**
 * Represents a set of URL query search parameters.
 */
var UrlSearchParams = (function () {
    /**
     * Constructs a new UrlSearchParams from a query string, an object of parameters and values, or another
     * UrlSearchParams.
     */
    function UrlSearchParams(input) {
        var list;
        if (input instanceof UrlSearchParams) {
            // Copy the incoming UrlSearchParam's internal list
            list = lang_1.duplicate(input._list);
        }
        else if (typeof input === 'object') {
            // Copy the incoming object, assuming its property values are either arrays or strings
            list = {};
            for (var key in input) {
                var value = input[key];
                if (Array.isArray(value)) {
                    list[key] = value.length ? value.slice() : [''];
                }
                else if (value == null) {
                    list[key] = [''];
                }
                else {
                    list[key] = [value];
                }
            }
        }
        else if (typeof input === 'string') {
            // Parse the incoming string as a query string
            list = parseQueryString(input);
        }
        else {
            list = {};
        }
        Object.defineProperty(this, '_list', { value: list });
    }
    /**
     * Appends a new value to the set of values for a key.
     * @param key The key to add a value for
     * @param value The value to add
     */
    UrlSearchParams.prototype.append = function (key, value) {
        if (!this.has(key)) {
            this.set(key, value);
        }
        else {
            var values = this._list[key];
            if (values) {
                values.push(value);
            }
        }
    };
    /**
     * Deletes all values for a key.
     * @param key The key whose values are to be removed
     */
    UrlSearchParams.prototype.delete = function (key) {
        // Set to undefined rather than deleting the key, for better consistency across browsers.
        // If a deleted key is re-added, most browsers put it at the end of iteration order, but IE maintains
        // its original position.  This approach maintains the original position everywhere.
        this._list[key] = undefined;
    };
    /**
     * Returns the first value associated with a key.
     * @param key The key to return the first value for
     * @return The first string value for the key
     */
    UrlSearchParams.prototype.get = function (key) {
        if (!this.has(key)) {
            return undefined;
        }
        var value = this._list[key];
        return value ? value[0] : undefined;
    };
    /**
     * Returns all the values associated with a key.
     * @param key The key to return all values for
     * @return An array of strings containing all values for the key
     */
    UrlSearchParams.prototype.getAll = function (key) {
        if (!this.has(key)) {
            return undefined;
        }
        return this._list[key];
    };
    /**
     * Returns true if a key has been set to any value, false otherwise.
     * @param key The key to test for existence
     * @return A boolean indicating if the key has been set
     */
    UrlSearchParams.prototype.has = function (key) {
        return Array.isArray(this._list[key]);
    };
    /**
     * Returns an array of all keys which have been set.
     * @return An array of strings containing all keys set in the UrlSearchParams instance
     */
    UrlSearchParams.prototype.keys = function () {
        var keys = [];
        for (var key in this._list) {
            if (this.has(key)) {
                keys.push(key);
            }
        }
        return keys;
    };
    /**
     * Sets the value associated with a key.
     * @param key The key to set the value of
     */
    UrlSearchParams.prototype.set = function (key, value) {
        this._list[key] = [value];
    };
    /**
     * Returns this object's data as an encoded query string.
     * @return A string in application/x-www-form-urlencoded format containing all of the set keys/values
     */
    UrlSearchParams.prototype.toString = function () {
        var query = [];
        for (var key in this._list) {
            if (!this.has(key)) {
                continue;
            }
            var values = this._list[key];
            if (values) {
                var encodedKey = encodeURIComponent(key);
                for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                    var value = values_1[_i];
                    query.push(encodedKey + (value ? ('=' + encodeURIComponent(value)) : ''));
                }
            }
        }
        return query.join('&');
    };
    return UrlSearchParams;
}());
exports.default = UrlSearchParams;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Injector_1 = __webpack_require__(20);
var HashHistory_1 = __webpack_require__(46);
var Router_1 = __webpack_require__(45);
/**
 * Key for the router injector
 */
exports.routerKey = Symbol();
/**
 * Creates a router instance for a specific History manager (default is `HashHistory`) and registers
 * the route configuration.
 *
 * @param config The route config to register for the router
 * @param registry An optional registry that defaults to the global registry
 * @param options The router injector options
 */
function registerRouterInjector(config, registry, options) {
    if (options === void 0) { options = {}; }
    var _a = options.key, key = _a === void 0 ? exports.routerKey : _a, _b = options.history, history = _b === void 0 ? new HashHistory_1.default() : _b;
    if (registry.hasInjector(key)) {
        throw new Error('Router has already been defined');
    }
    var router = new Router_1.Router({ history: history, config: config });
    var injector = new Injector_1.Injector(router);
    router.on('navstart', function () {
        injector.emit({ type: 'invalidate' });
    });
    registry.defineInjector(key, injector);
    return router;
}
exports.registerRouterInjector = registerRouterInjector;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The type of match for a route
 */
var MatchType;
(function (MatchType) {
    MatchType[MatchType["INDEX"] = 0] = "INDEX";
    MatchType[MatchType["PARTIAL"] = 1] = "PARTIAL";
    MatchType[MatchType["ERROR"] = 2] = "ERROR";
})(MatchType = exports.MatchType || (exports.MatchType = {}));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = __webpack_require__(0);
var iterator_1 = __webpack_require__(9);
var number_1 = __webpack_require__(48);
var has_1 = __webpack_require__(4);
var util_1 = __webpack_require__(19);
if (has_1.default('es6-array') && has_1.default('es6-array-fill')) {
    exports.from = global_1.default.Array.from;
    exports.of = global_1.default.Array.of;
    exports.copyWithin = util_1.wrapNative(global_1.default.Array.prototype.copyWithin);
    exports.fill = util_1.wrapNative(global_1.default.Array.prototype.fill);
    exports.find = util_1.wrapNative(global_1.default.Array.prototype.find);
    exports.findIndex = util_1.wrapNative(global_1.default.Array.prototype.findIndex);
}
else {
    // It is only older versions of Safari/iOS that have a bad fill implementation and so aren't in the wild
    // To make things easier, if there is a bad fill implementation, the whole set of functions will be filled
    /**
     * Ensures a non-negative, non-infinite, safe integer.
     *
     * @param length The number to validate
     * @return A proper length
     */
    var toLength_1 = function toLength(length) {
        length = Number(length);
        if (isNaN(length)) {
            return 0;
        }
        if (isFinite(length)) {
            length = Math.floor(length);
        }
        // Ensure a non-negative, real, safe integer
        return Math.min(Math.max(length, 0), number_1.MAX_SAFE_INTEGER);
    };
    /**
     * From ES6 7.1.4 ToInteger()
     *
     * @param value A value to convert
     * @return An integer
     */
    var toInteger_1 = function toInteger(value) {
        value = Number(value);
        if (isNaN(value)) {
            return 0;
        }
        if (value === 0 || !isFinite(value)) {
            return value;
        }
        return (value > 0 ? 1 : -1) * Math.floor(Math.abs(value));
    };
    /**
     * Normalizes an offset against a given length, wrapping it if negative.
     *
     * @param value The original offset
     * @param length The total length to normalize against
     * @return If negative, provide a distance from the end (length); otherwise provide a distance from 0
     */
    var normalizeOffset_1 = function normalizeOffset(value, length) {
        return value < 0 ? Math.max(length + value, 0) : Math.min(value, length);
    };
    exports.from = function from(arrayLike, mapFunction, thisArg) {
        if (arrayLike == null) {
            throw new TypeError('from: requires an array-like object');
        }
        if (mapFunction && thisArg) {
            mapFunction = mapFunction.bind(thisArg);
        }
        /* tslint:disable-next-line:variable-name */
        var Constructor = this;
        var length = toLength_1(arrayLike.length);
        // Support extension
        var array = (typeof Constructor === 'function') ? Object(new Constructor(length)) : new Array(length);
        if (!iterator_1.isArrayLike(arrayLike) && !iterator_1.isIterable(arrayLike)) {
            return array;
        }
        var i = 0;
        iterator_1.forOf(arrayLike, function (value) {
            array[i] = mapFunction ? mapFunction(value, i) : value;
            i++;
        });
        if (arrayLike.length !== undefined) {
            array.length = length;
        }
        return array;
    };
    exports.of = function of() {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        return Array.prototype.slice.call(items);
    };
    exports.copyWithin = function copyWithin(target, offset, start, end) {
        if (target == null) {
            throw new TypeError('copyWithin: target must be an array-like object');
        }
        var length = toLength_1(target.length);
        offset = normalizeOffset_1(toInteger_1(offset), length);
        start = normalizeOffset_1(toInteger_1(start), length);
        end = normalizeOffset_1(end === undefined ? length : toInteger_1(end), length);
        var count = Math.min(end - start, length - offset);
        var direction = 1;
        if (offset > start && offset < (start + count)) {
            direction = -1;
            start += count - 1;
            offset += count - 1;
        }
        while (count > 0) {
            if (start in target) {
                target[offset] = target[start];
            }
            else {
                delete target[offset];
            }
            offset += direction;
            start += direction;
            count--;
        }
        return target;
    };
    exports.fill = function fill(target, value, start, end) {
        var length = toLength_1(target.length);
        var i = normalizeOffset_1(toInteger_1(start), length);
        end = normalizeOffset_1(end === undefined ? length : toInteger_1(end), length);
        while (i < end) {
            target[i++] = value;
        }
        return target;
    };
    exports.find = function find(target, callback, thisArg) {
        var index = exports.findIndex(target, callback, thisArg);
        return index !== -1 ? target[index] : undefined;
    };
    exports.findIndex = function findIndex(target, callback, thisArg) {
        var length = toLength_1(target.length);
        if (!callback) {
            throw new TypeError('find: second argument must be a function');
        }
        if (thisArg) {
            callback = callback.bind(thisArg);
        }
        for (var i = 0; i < length; i++) {
            if (callback(target[i], i, target)) {
                return i;
            }
        }
        return -1;
    };
}
if (has_1.default('es7-array')) {
    exports.includes = util_1.wrapNative(global_1.default.Array.prototype.includes);
}
else {
    /**
     * Ensures a non-negative, non-infinite, safe integer.
     *
     * @param length The number to validate
     * @return A proper length
     */
    var toLength_2 = function toLength(length) {
        length = Number(length);
        if (isNaN(length)) {
            return 0;
        }
        if (isFinite(length)) {
            length = Math.floor(length);
        }
        // Ensure a non-negative, real, safe integer
        return Math.min(Math.max(length, 0), number_1.MAX_SAFE_INTEGER);
    };
    exports.includes = function includes(target, searchElement, fromIndex) {
        if (fromIndex === void 0) { fromIndex = 0; }
        var len = toLength_2(target.length);
        for (var i = fromIndex; i < len; ++i) {
            var currentElement = target[i];
            if (searchElement === currentElement ||
                (searchElement !== searchElement && currentElement !== currentElement)) {
                return true;
            }
        }
        return false;
    };
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Helper function to generate a value property descriptor
 *
 * @param value        The value the property descriptor should be set to
 * @param enumerable   If the property should be enumberable, defaults to false
 * @param writable     If the property should be writable, defaults to true
 * @param configurable If the property should be configurable, defaults to true
 * @return             The property descriptor object
 */
function getValueDescriptor(value, enumerable, writable, configurable) {
    if (enumerable === void 0) { enumerable = false; }
    if (writable === void 0) { writable = true; }
    if (configurable === void 0) { configurable = true; }
    return {
        value: value,
        enumerable: enumerable,
        writable: writable,
        configurable: configurable
    };
}
exports.getValueDescriptor = getValueDescriptor;
/**
 * A helper function which wraps a function where the first argument becomes the scope
 * of the call
 *
 * @param nativeFunction The source function to be wrapped
 */
function wrapNative(nativeFunction) {
    return function (target) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return nativeFunction.apply(target, args);
    };
}
exports.wrapNative = wrapNative;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Evented_1 = __webpack_require__(2);
var Injector = (function (_super) {
    __extends(Injector, _super);
    function Injector(payload) {
        var _this = _super.call(this, {}) || this;
        _this._payload = payload;
        return _this;
    }
    Injector.prototype.get = function () {
        return this._payload;
    };
    Injector.prototype.set = function (payload) {
        this._payload = payload;
        this.emit({ type: 'invalidate' });
    };
    return Injector;
}(Evented_1.Evented));
exports.Injector = Injector;
exports.default = Injector;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lang_1 = __webpack_require__(5);
var array_1 = __webpack_require__(18);
var Map_1 = __webpack_require__(6);
var Injector_1 = __webpack_require__(20);
var inject_1 = __webpack_require__(14);
var handleDecorator_1 = __webpack_require__(11);
var diffProperty_1 = __webpack_require__(57);
var diff_1 = __webpack_require__(31);
var THEME_KEY = ' _key';
exports.INJECTED_THEME_KEY = Symbol('theme');
/**
 * Decorator for base css classes
 */
function theme(theme) {
    return handleDecorator_1.handleDecorator(function (target) {
        target.addDecorator('baseThemeClasses', theme);
    });
}
exports.theme = theme;
/**
 * Split class strings containing spaces into separate array entries.
 * ie. ['class1 class2', 'class3] -> ['class1', 'class2', 'class3'];
 *
 * @param classes The array of class strings to split.
 * @return the complete classes array including any split classes.
 */
function splitClassStrings(classes) {
    return classes.reduce(function (splitClasses, className) {
        if (className.indexOf(' ') > -1) {
            splitClasses.push.apply(splitClasses, className.split(' '));
        }
        else {
            splitClasses.push(className);
        }
        return splitClasses;
    }, []);
}
/**
 * Returns the class object map based on the class names and whether they are
 * active.
 *
 * @param className an array of string class names
 * @param applied indicates is the class is applied
 */
function createClassNameObject(classNames, applied) {
    return classNames.reduce(function (flaggedClassNames, className) {
        flaggedClassNames[className] = applied;
        return flaggedClassNames;
    }, {});
}
/**
 * Creates a reverse lookup for the classes passed in via the `theme` function.
 *
 * @param classes The baseClasses object
 * @requires
 */
function createThemeClassesLookup(classes) {
    return classes.reduce(function (currentClassNames, baseClass) {
        Object.keys(baseClass).forEach(function (key) {
            currentClassNames[baseClass[key]] = key;
        });
        return currentClassNames;
    }, {});
}
/**
 * Convenience function that is given a theme and an optional registry, the theme
 * injector is defined against the registry, returning the theme.
 *
 * @param theme the theme to set
 * @param themeRegistry registry to define the theme injector against. Defaults
 * to the global registry
 *
 * @returns the theme injector used to set the theme
 */
function registerThemeInjector(theme, themeRegistry) {
    var themeInjector = new Injector_1.Injector(theme);
    themeRegistry.defineInjector(exports.INJECTED_THEME_KEY, themeInjector);
    return themeInjector;
}
exports.registerThemeInjector = registerThemeInjector;
/**
 * Function that returns a class decorated with with Themeable functionality
 */
function ThemeableMixin(Base) {
    var Themeable = (function (_super) {
        __extends(Themeable, _super);
        function Themeable() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * All classes ever seen by the instance
             */
            _this._allClasses = {};
            /**
             * Indicates if classes meta data need to be calculated.
             */
            _this._recalculateClasses = true;
            /**
             * Map of registered classes
             */
            _this._registeredClassesMap = new Map_1.default();
            /**
             * Loaded theme
             */
            _this._theme = {};
            return _this;
        }
        /**
         * Function used to add themeable classes to a widget. Returns a chained function 'fixed'
         * that can be used to pass non-themeable classes to a widget. Filters out any null
         * values passed.
         *
         * @param classNames the classes to be added to the domNode. These classes must come from
         * the baseClasses passed into the @theme decorator.
         * @return A function chain containing the 'fixed' function and a 'get' finalizer function.
         * Class names passed to the 'fixed' function can be any string.
         *
         */
        Themeable.prototype.classes = function () {
            var classNames = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                classNames[_i] = arguments[_i];
            }
            if (this._recalculateClasses) {
                this._recalculateThemeClasses();
            }
            var themeable = this;
            function classesGetter() {
                var themeClasses = themeable._getThemeClasses(this.classes);
                var fixedClasses = themeable._getFixedClasses(this.fixedClasses);
                return lang_1.assign({}, themeable._allClasses, themeClasses, fixedClasses);
            }
            var classesFunctionChain = {
                classes: classNames,
                fixedClasses: [],
                fixed: function () {
                    var classNames = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        classNames[_i] = arguments[_i];
                    }
                    var filteredClassNames = classNames.filter(function (className) { return className !== null; });
                    (_a = this.fixedClasses).push.apply(_a, filteredClassNames);
                    return this;
                    var _a;
                },
                get: classesGetter
            };
            return lang_1.assign(classesGetter.bind(classesFunctionChain), classesFunctionChain);
        };
        /**
         * Function fired when `theme` or `extraClasses` are changed.
         */
        Themeable.prototype.onPropertiesChanged = function () {
            this._recalculateClasses = true;
        };
        /**
         * Get theme class object from classNames
         */
        Themeable.prototype._getThemeClasses = function (classNames) {
            var _this = this;
            return classNames
                .filter(function (className) { return !!className; })
                .reduce(function (appliedClasses, className) {
                if (!_this._baseThemeClassesReverseLookup[className]) {
                    console.warn("Class name: " + className + " not found, use chained 'fixed' method instead");
                    return appliedClasses;
                }
                className = _this._baseThemeClassesReverseLookup[className];
                if (!_this._registeredClassesMap.has(className)) {
                    _this._registerThemeClass(className);
                }
                return lang_1.assign(appliedClasses, _this._registeredClassesMap.get(className));
            }, {});
        };
        /**
         * Get fixed class object from classNames
         */
        Themeable.prototype._getFixedClasses = function (classNames) {
            var splitClasses = splitClassStrings(classNames);
            this._appendToAllClassNames(splitClasses);
            return createClassNameObject(splitClasses, true);
        };
        /**
         * Adds classes to the internal allClasses property
         *
         * @param classNames an array of string class names
         */
        Themeable.prototype._appendToAllClassNames = function (classNames) {
            var negativeClassFlags = createClassNameObject(classNames, false);
            this._allClasses = lang_1.assign({}, this._allClasses, negativeClassFlags);
        };
        /**
         * Register the classes object for the class name and adds the class to the instances `allClasses` object.
         *
         * @param className the name of the class to register.
         */
        Themeable.prototype._registerThemeClass = function (className) {
            var _this = this;
            var _a = this.properties.extraClasses, extraClasses = _a === void 0 ? {} : _a;
            var themeClass = this._theme[className] ? this._theme[className] : this._getBaseThemeClass(className);
            var extraClassesClassNames = extraClasses[className];
            var extraClassesClassNamesArray = extraClassesClassNames ? extraClassesClassNames.split(' ') : [];
            var cssClassNames = themeClass.split(' ').concat(extraClassesClassNamesArray);
            var classesObject = cssClassNames.reduce(function (classesObject, cssClassName) {
                classesObject[cssClassName] = true;
                _this._allClasses[cssClassName] = false;
                return classesObject;
            }, {});
            this._registeredClassesMap.set(className, classesObject);
        };
        /**
         * Recalculate registered classes for current theme.
         */
        Themeable.prototype._recalculateThemeClasses = function () {
            var _this = this;
            var _a = this.properties, _b = _a.injectedTheme, injectedTheme = _b === void 0 ? {} : _b, _c = _a.theme, theme = _c === void 0 ? injectedTheme : _c;
            if (!this._registeredBaseThemes) {
                this._registeredBaseThemes = this.getDecorator('baseThemeClasses').slice().reverse();
                this._checkForDuplicates();
            }
            var registeredBaseThemeKeys = this._registeredBaseThemes.map(function (registeredBaseThemeClasses) {
                return registeredBaseThemeClasses[THEME_KEY];
            });
            this._baseThemeClassesReverseLookup = createThemeClassesLookup(this._registeredBaseThemes);
            this._theme = registeredBaseThemeKeys.reduce(function (baseTheme, themeKey) {
                return lang_1.assign(baseTheme, theme[themeKey]);
            }, {});
            this._registeredClassesMap.forEach(function (value, key) {
                _this._registerThemeClass(key);
            });
            this._recalculateClasses = false;
        };
        /**
         * Find the base theme class for the class name
         */
        Themeable.prototype._getBaseThemeClass = function (className) {
            var registeredBaseTheme = array_1.find(this._registeredBaseThemes, function (registeredBaseThemeClasses) {
                return Boolean(registeredBaseThemeClasses[className]);
            });
            return (registeredBaseTheme && registeredBaseTheme[className]) || '';
        };
        /**
         * Check for duplicates across the registered base themes.
         */
        Themeable.prototype._checkForDuplicates = function () {
            var _this = this;
            this._registeredBaseThemes.forEach(function (registeredBaseThemeClasses, index) {
                Object.keys(registeredBaseThemeClasses).some(function (key) {
                    return _this._isDuplicate(key, registeredBaseThemeClasses);
                });
            });
        };
        /**
         * Search for the class name in other base themes
         */
        Themeable.prototype._isDuplicate = function (key, originatingBaseTheme) {
            var duplicate = false;
            if (key !== THEME_KEY) {
                for (var i = 0; i < this._registeredBaseThemes.length; i++) {
                    if (originatingBaseTheme === this._registeredBaseThemes[i]) {
                        continue;
                    }
                    if (this._registeredBaseThemes[i][key]) {
                        console.warn("Duplicate base theme class key '" + key + "' detected, this could cause unexpected results");
                        duplicate = true;
                        break;
                    }
                }
                return duplicate;
            }
            return duplicate;
        };
        __decorate([
            diffProperty_1.diffProperty('theme', diff_1.shallow),
            diffProperty_1.diffProperty('extraClasses', diff_1.shallow),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], Themeable.prototype, "onPropertiesChanged", null);
        Themeable = __decorate([
            inject_1.inject({
                name: exports.INJECTED_THEME_KEY,
                getProperties: function (theme, properties) {
                    if (!properties.theme) {
                        return { theme: theme };
                    }
                    return {};
                }
            })
        ], Themeable);
        return Themeable;
    }(Base));
    return Themeable;
}
exports.ThemeableMixin = ThemeableMixin;
exports.default = ThemeableMixin;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports);
    } else {
        // Browser globals
        factory(root.maquette = {});
    }
}(this, function (exports) {
    'use strict';
    // Comment that is displayed in the API documentation for the maquette module:
    /**
 * Welcome to the API documentation of the **maquette** library.
 *
 * [[http://maquettejs.org/|To the maquette homepage]]
 */
    Object.defineProperty(exports, '__esModule', { value: true });
    var NAMESPACE_W3 = 'http://www.w3.org/';
    var NAMESPACE_SVG = NAMESPACE_W3 + '2000/svg';
    var NAMESPACE_XLINK = NAMESPACE_W3 + '1999/xlink';
    // Utilities
    var emptyArray = [];
    var extend = function (base, overrides) {
        var result = {};
        Object.keys(base).forEach(function (key) {
            result[key] = base[key];
        });
        if (overrides) {
            Object.keys(overrides).forEach(function (key) {
                result[key] = overrides[key];
            });
        }
        return result;
    };
    // Hyperscript helper functions
    var same = function (vnode1, vnode2) {
        if (vnode1.vnodeSelector !== vnode2.vnodeSelector) {
            return false;
        }
        if (vnode1.properties && vnode2.properties) {
            if (vnode1.properties.key !== vnode2.properties.key) {
                return false;
            }
            return vnode1.properties.bind === vnode2.properties.bind;
        }
        return !vnode1.properties && !vnode2.properties;
    };
    var toTextVNode = function (data) {
        return {
            vnodeSelector: '',
            properties: undefined,
            children: undefined,
            text: data.toString(),
            domNode: null
        };
    };
    var appendChildren = function (parentSelector, insertions, main) {
        for (var i = 0, length_1 = insertions.length; i < length_1; i++) {
            var item = insertions[i];
            if (Array.isArray(item)) {
                appendChildren(parentSelector, item, main);
            } else {
                if (item !== null && item !== undefined) {
                    if (!item.hasOwnProperty('vnodeSelector')) {
                        item = toTextVNode(item);
                    }
                    main.push(item);
                }
            }
        }
    };
    // Render helper functions
    var missingTransition = function () {
        throw new Error('Provide a transitions object to the projectionOptions to do animations');
    };
    var DEFAULT_PROJECTION_OPTIONS = {
        namespace: undefined,
        eventHandlerInterceptor: undefined,
        styleApplyer: function (domNode, styleName, value) {
            // Provides a hook to add vendor prefixes for browsers that still need it.
            domNode.style[styleName] = value;
        },
        transitions: {
            enter: missingTransition,
            exit: missingTransition
        }
    };
    var applyDefaultProjectionOptions = function (projectorOptions) {
        return extend(DEFAULT_PROJECTION_OPTIONS, projectorOptions);
    };
    var checkStyleValue = function (styleValue) {
        if (typeof styleValue !== 'string') {
            throw new Error('Style values must be strings');
        }
    };
    var setProperties = function (domNode, properties, projectionOptions) {
        if (!properties) {
            return;
        }
        var eventHandlerInterceptor = projectionOptions.eventHandlerInterceptor;
        var propNames = Object.keys(properties);
        var propCount = propNames.length;
        var _loop_1 = function (i) {
            var propName = propNames[i];
            /* tslint:disable:no-var-keyword: edge case */
            var propValue = properties[propName];
            /* tslint:enable:no-var-keyword */
            if (propName === 'className') {
                throw new Error('Property "className" is not supported, use "class".');
            } else if (propName === 'class') {
                propValue.split(/\s+/).forEach(function (token) {
                    return domNode.classList.add(token);
                });
            } else if (propName === 'classes') {
                // object with string keys and boolean values
                var classNames = Object.keys(propValue);
                var classNameCount = classNames.length;
                for (var j = 0; j < classNameCount; j++) {
                    var className = classNames[j];
                    if (propValue[className]) {
                        domNode.classList.add(className);
                    }
                }
            } else if (propName === 'styles') {
                // object with string keys and string (!) values
                var styleNames = Object.keys(propValue);
                var styleCount = styleNames.length;
                for (var j = 0; j < styleCount; j++) {
                    var styleName = styleNames[j];
                    var styleValue = propValue[styleName];
                    if (styleValue) {
                        checkStyleValue(styleValue);
                        projectionOptions.styleApplyer(domNode, styleName, styleValue);
                    }
                }
            } else if (propName !== 'key' && propValue !== null && propValue !== undefined) {
                var type = typeof propValue;
                if (type === 'function') {
                    if (propName.lastIndexOf('on', 0) === 0) {
                        if (eventHandlerInterceptor) {
                            propValue = eventHandlerInterceptor(propName, propValue, domNode, properties);    // intercept eventhandlers
                        }
                        if (propName === 'oninput') {
                            (function () {
                                // record the evt.target.value, because IE and Edge sometimes do a requestAnimationFrame between changing value and running oninput
                                var oldPropValue = propValue;
                                propValue = function (evt) {
                                    oldPropValue.apply(this, [evt]);
                                    evt.target['oninput-value'] = evt.target.value;    // may be HTMLTextAreaElement as well
                                };
                            }());
                        }
                        domNode[propName] = propValue;
                    }
                } else if (type === 'string' && propName !== 'value' && propName !== 'innerHTML') {
                    if (projectionOptions.namespace === NAMESPACE_SVG && propName === 'href') {
                        domNode.setAttributeNS(NAMESPACE_XLINK, propName, propValue);
                    } else {
                        domNode.setAttribute(propName, propValue);
                    }
                } else {
                    domNode[propName] = propValue;
                }
            }
        };
        for (var i = 0; i < propCount; i++) {
            _loop_1(i);
        }
    };
    var updateProperties = function (domNode, previousProperties, properties, projectionOptions) {
        if (!properties) {
            return;
        }
        var propertiesUpdated = false;
        var propNames = Object.keys(properties);
        var propCount = propNames.length;
        for (var i = 0; i < propCount; i++) {
            var propName = propNames[i];
            // assuming that properties will be nullified instead of missing is by design
            var propValue = properties[propName];
            var previousValue = previousProperties[propName];
            if (propName === 'class') {
                if (previousValue !== propValue) {
                    throw new Error('"class" property may not be updated. Use the "classes" property for conditional css classes.');
                }
            } else if (propName === 'classes') {
                var classList = domNode.classList;
                var classNames = Object.keys(propValue);
                var classNameCount = classNames.length;
                for (var j = 0; j < classNameCount; j++) {
                    var className = classNames[j];
                    var on = !!propValue[className];
                    var previousOn = !!previousValue[className];
                    if (on === previousOn) {
                        continue;
                    }
                    propertiesUpdated = true;
                    if (on) {
                        classList.add(className);
                    } else {
                        classList.remove(className);
                    }
                }
            } else if (propName === 'styles') {
                var styleNames = Object.keys(propValue);
                var styleCount = styleNames.length;
                for (var j = 0; j < styleCount; j++) {
                    var styleName = styleNames[j];
                    var newStyleValue = propValue[styleName];
                    var oldStyleValue = previousValue[styleName];
                    if (newStyleValue === oldStyleValue) {
                        continue;
                    }
                    propertiesUpdated = true;
                    if (newStyleValue) {
                        checkStyleValue(newStyleValue);
                        projectionOptions.styleApplyer(domNode, styleName, newStyleValue);
                    } else {
                        projectionOptions.styleApplyer(domNode, styleName, '');
                    }
                }
            } else {
                if (!propValue && typeof previousValue === 'string') {
                    propValue = '';
                }
                if (propName === 'value') {
                    var domValue = domNode[propName];
                    if (domValue !== propValue    // The 'value' in the DOM tree !== newValue
&& (domNode['oninput-value'] ? domValue === domNode['oninput-value']    // If the last reported value to 'oninput' does not match domValue, do nothing and wait for oninput
 : propValue !== previousValue    // Only update the value if the vdom changed
)) {
                        domNode[propName] = propValue;
                        // Reset the value, even if the virtual DOM did not change
                        domNode['oninput-value'] = undefined;
                    }
                    // else do not update the domNode, otherwise the cursor position would be changed
                    if (propValue !== previousValue) {
                        propertiesUpdated = true;
                    }
                } else if (propValue !== previousValue) {
                    var type = typeof propValue;
                    if (type === 'function') {
                        throw new Error('Functions may not be updated on subsequent renders (property: ' + propName + '). Hint: declare event handler functions outside the render() function.');
                    }
                    if (type === 'string' && propName !== 'innerHTML') {
                        if (projectionOptions.namespace === NAMESPACE_SVG && propName === 'href') {
                            domNode.setAttributeNS(NAMESPACE_XLINK, propName, propValue);
                        } else if (propName === 'role' && propValue === '') {
                            domNode.removeAttribute(propName);
                        } else {
                            domNode.setAttribute(propName, propValue);
                        }
                    } else {
                        if (domNode[propName] !== propValue) {
                            domNode[propName] = propValue;
                        }
                    }
                    propertiesUpdated = true;
                }
            }
        }
        return propertiesUpdated;
    };
    var findIndexOfChild = function (children, sameAs, start) {
        if (sameAs.vnodeSelector !== '') {
            // Never scan for text-nodes
            for (var i = start; i < children.length; i++) {
                if (same(children[i], sameAs)) {
                    return i;
                }
            }
        }
        return -1;
    };
    var nodeAdded = function (vNode, transitions) {
        if (vNode.properties) {
            var enterAnimation = vNode.properties.enterAnimation;
            if (enterAnimation) {
                if (typeof enterAnimation === 'function') {
                    enterAnimation(vNode.domNode, vNode.properties);
                } else {
                    transitions.enter(vNode.domNode, vNode.properties, enterAnimation);
                }
            }
        }
    };
    var nodeToRemove = function (vNode, transitions) {
        var domNode = vNode.domNode;
        if (vNode.properties) {
            var exitAnimation = vNode.properties.exitAnimation;
            if (exitAnimation) {
                domNode.style.pointerEvents = 'none';
                var removeDomNode = function () {
                    if (domNode.parentNode) {
                        domNode.parentNode.removeChild(domNode);
                    }
                };
                if (typeof exitAnimation === 'function') {
                    exitAnimation(domNode, removeDomNode, vNode.properties);
                    return;
                } else {
                    transitions.exit(vNode.domNode, vNode.properties, exitAnimation, removeDomNode);
                    return;
                }
            }
        }
        if (domNode.parentNode) {
            domNode.parentNode.removeChild(domNode);
        }
    };
    var checkDistinguishable = function (childNodes, indexToCheck, parentVNode, operation) {
        var childNode = childNodes[indexToCheck];
        if (childNode.vnodeSelector === '') {
            return;    // Text nodes need not be distinguishable
        }
        var properties = childNode.properties;
        var key = properties ? properties.key === undefined ? properties.bind : properties.key : undefined;
        if (!key) {
            for (var i = 0; i < childNodes.length; i++) {
                if (i !== indexToCheck) {
                    var node = childNodes[i];
                    if (same(node, childNode)) {
                        if (operation === 'added') {
                            throw new Error(parentVNode.vnodeSelector + ' had a ' + childNode.vnodeSelector + ' child ' + 'added, but there is now more than one. You must add unique key properties to make them distinguishable.');
                        } else {
                            throw new Error(parentVNode.vnodeSelector + ' had a ' + childNode.vnodeSelector + ' child ' + 'removed, but there were more than one. You must add unique key properties to make them distinguishable.');
                        }
                    }
                }
            }
        }
    };
    var createDom;
    var updateDom;
    var updateChildren = function (vnode, domNode, oldChildren, newChildren, projectionOptions) {
        if (oldChildren === newChildren) {
            return false;
        }
        oldChildren = oldChildren || emptyArray;
        newChildren = newChildren || emptyArray;
        var oldChildrenLength = oldChildren.length;
        var newChildrenLength = newChildren.length;
        var transitions = projectionOptions.transitions;
        var oldIndex = 0;
        var newIndex = 0;
        var i;
        var textUpdated = false;
        while (newIndex < newChildrenLength) {
            var oldChild = oldIndex < oldChildrenLength ? oldChildren[oldIndex] : undefined;
            var newChild = newChildren[newIndex];
            if (oldChild !== undefined && same(oldChild, newChild)) {
                textUpdated = updateDom(oldChild, newChild, projectionOptions) || textUpdated;
                oldIndex++;
            } else {
                var findOldIndex = findIndexOfChild(oldChildren, newChild, oldIndex + 1);
                if (findOldIndex >= 0) {
                    // Remove preceding missing children
                    for (i = oldIndex; i < findOldIndex; i++) {
                        nodeToRemove(oldChildren[i], transitions);
                        checkDistinguishable(oldChildren, i, vnode, 'removed');
                    }
                    textUpdated = updateDom(oldChildren[findOldIndex], newChild, projectionOptions) || textUpdated;
                    oldIndex = findOldIndex + 1;
                } else {
                    // New child
                    createDom(newChild, domNode, oldIndex < oldChildrenLength ? oldChildren[oldIndex].domNode : undefined, projectionOptions);
                    nodeAdded(newChild, transitions);
                    checkDistinguishable(newChildren, newIndex, vnode, 'added');
                }
            }
            newIndex++;
        }
        if (oldChildrenLength > oldIndex) {
            // Remove child fragments
            for (i = oldIndex; i < oldChildrenLength; i++) {
                nodeToRemove(oldChildren[i], transitions);
                checkDistinguishable(oldChildren, i, vnode, 'removed');
            }
        }
        return textUpdated;
    };
    var addChildren = function (domNode, children, projectionOptions) {
        if (!children) {
            return;
        }
        for (var i = 0; i < children.length; i++) {
            createDom(children[i], domNode, undefined, projectionOptions);
        }
    };
    var initPropertiesAndChildren = function (domNode, vnode, projectionOptions) {
        addChildren(domNode, vnode.children, projectionOptions);
        // children before properties, needed for value property of <select>.
        if (vnode.text) {
            domNode.textContent = vnode.text;
        }
        setProperties(domNode, vnode.properties, projectionOptions);
        if (vnode.properties && vnode.properties.afterCreate) {
            vnode.properties.afterCreate.apply(vnode.properties.bind || vnode.properties, [
                domNode,
                projectionOptions,
                vnode.vnodeSelector,
                vnode.properties,
                vnode.children
            ]);
        }
    };
    createDom = function (vnode, parentNode, insertBefore, projectionOptions) {
        var domNode, i, c, start = 0, type, found;
        var vnodeSelector = vnode.vnodeSelector;
        var doc = parentNode.ownerDocument;
        if (vnodeSelector === '') {
            domNode = vnode.domNode = doc.createTextNode(vnode.text);
            if (insertBefore !== undefined) {
                parentNode.insertBefore(domNode, insertBefore);
            } else {
                parentNode.appendChild(domNode);
            }
        } else {
            for (i = 0; i <= vnodeSelector.length; ++i) {
                c = vnodeSelector.charAt(i);
                if (i === vnodeSelector.length || c === '.' || c === '#') {
                    type = vnodeSelector.charAt(start - 1);
                    found = vnodeSelector.slice(start, i);
                    if (type === '.') {
                        domNode.classList.add(found);
                    } else if (type === '#') {
                        domNode.id = found;
                    } else {
                        if (found === 'svg') {
                            projectionOptions = extend(projectionOptions, { namespace: NAMESPACE_SVG });
                        }
                        if (projectionOptions.namespace !== undefined) {
                            domNode = vnode.domNode = doc.createElementNS(projectionOptions.namespace, found);
                        } else {
                            domNode = vnode.domNode = vnode.domNode || doc.createElement(found);
                            if (found === 'input' && vnode.properties && vnode.properties.type !== undefined) {
                                // IE8 and older don't support setting input type after the DOM Node has been added to the document
                                domNode.setAttribute('type', vnode.properties.type);
                            }
                        }
                        if (insertBefore !== undefined) {
                            parentNode.insertBefore(domNode, insertBefore);
                        } else if (domNode.parentNode !== parentNode) {
                            parentNode.appendChild(domNode);
                        }
                    }
                    start = i + 1;
                }
            }
            initPropertiesAndChildren(domNode, vnode, projectionOptions);
        }
    };
    updateDom = function (previous, vnode, projectionOptions) {
        var domNode = previous.domNode;
        var textUpdated = false;
        if (previous === vnode) {
            return false;    // By contract, VNode objects may not be modified anymore after passing them to maquette
        }
        var updated = false;
        if (vnode.vnodeSelector === '') {
            if (vnode.text !== previous.text) {
                var newVNode = domNode.ownerDocument.createTextNode(vnode.text);
                domNode.parentNode.replaceChild(newVNode, domNode);
                vnode.domNode = newVNode;
                textUpdated = true;
                return textUpdated;
            }
        } else {
            if (vnode.vnodeSelector.lastIndexOf('svg', 0) === 0) {
                projectionOptions = extend(projectionOptions, { namespace: NAMESPACE_SVG });
            }
            if (previous.text !== vnode.text) {
                updated = true;
                if (vnode.text === undefined) {
                    domNode.removeChild(domNode.firstChild);    // the only textnode presumably
                } else {
                    domNode.textContent = vnode.text;
                }
            }
            updated = updateChildren(vnode, domNode, previous.children, vnode.children, projectionOptions) || updated;
            updated = updateProperties(domNode, previous.properties, vnode.properties, projectionOptions) || updated;
            if (vnode.properties && vnode.properties.afterUpdate) {
                vnode.properties.afterUpdate.apply(vnode.properties.bind || vnode.properties, [
                    domNode,
                    projectionOptions,
                    vnode.vnodeSelector,
                    vnode.properties,
                    vnode.children
                ]);
            }
        }
        if (updated && vnode.properties && vnode.properties.updateAnimation) {
            vnode.properties.updateAnimation(domNode, vnode.properties, previous.properties);
        }
        vnode.domNode = previous.domNode;
        return textUpdated;
    };
    var createProjection = function (vnode, projectionOptions) {
        return {
            update: function (updatedVnode) {
                if (vnode.vnodeSelector !== updatedVnode.vnodeSelector) {
                    throw new Error('The selector for the root VNode may not be changed. (consider using dom.merge and add one extra level to the virtual DOM)');
                }
                updateDom(vnode, updatedVnode, projectionOptions);
                vnode = updatedVnode;
            },
            domNode: vnode.domNode
        };
    };
    // The other two parameters are not added here, because the Typescript compiler creates surrogate code for destructuring 'children'.
    exports.h = function (selector) {
        var properties = arguments[1];
        if (typeof selector !== 'string') {
            throw new Error();
        }
        var childIndex = 1;
        if (properties && !properties.hasOwnProperty('vnodeSelector') && !Array.isArray(properties) && typeof properties === 'object') {
            childIndex = 2;
        } else {
            // Optional properties argument was omitted
            properties = undefined;
        }
        var text;
        var children;
        var argsLength = arguments.length;
        // Recognize a common special case where there is only a single text node
        if (argsLength === childIndex + 1) {
            var onlyChild = arguments[childIndex];
            if (typeof onlyChild === 'string') {
                text = onlyChild;
            } else if (onlyChild !== undefined && onlyChild !== null && onlyChild.length === 1 && typeof onlyChild[0] === 'string') {
                text = onlyChild[0];
            }
        }
        if (text === undefined) {
            children = [];
            for (; childIndex < argsLength; childIndex++) {
                var child = arguments[childIndex];
                if (child === null || child === undefined) {
                } else if (Array.isArray(child)) {
                    appendChildren(selector, child, children);
                } else if (child.hasOwnProperty('vnodeSelector')) {
                    children.push(child);
                } else {
                    children.push(toTextVNode(child));
                }
            }
        }
        return {
            vnodeSelector: selector,
            properties: properties,
            children: children,
            text: text === '' ? undefined : text,
            domNode: null
        };
    };
    /**
 * Contains simple low-level utility functions to manipulate the real DOM.
 */
    exports.dom = {
        /**
     * Creates a real DOM tree from `vnode`. The [[Projection]] object returned will contain the resulting DOM Node in
     * its [[Projection.domNode|domNode]] property.
     * This is a low-level method. Users will typically use a [[Projector]] instead.
     * @param vnode - The root of the virtual DOM tree that was created using the [[h]] function. NOTE: [[VNode]]
     * objects may only be rendered once.
     * @param projectionOptions - Options to be used to create and update the projection.
     * @returns The [[Projection]] which also contains the DOM Node that was created.
     */
        create: function (vnode, projectionOptions) {
            projectionOptions = applyDefaultProjectionOptions(projectionOptions);
            createDom(vnode, document.createElement('div'), undefined, projectionOptions);
            return createProjection(vnode, projectionOptions);
        },
        /**
     * Appends a new child node to the DOM which is generated from a [[VNode]].
     * This is a low-level method. Users will typically use a [[Projector]] instead.
     * @param parentNode - The parent node for the new child node.
     * @param vnode - The root of the virtual DOM tree that was created using the [[h]] function. NOTE: [[VNode]]
     * objects may only be rendered once.
     * @param projectionOptions - Options to be used to create and update the [[Projection]].
     * @returns The [[Projection]] that was created.
     */
        append: function (parentNode, vnode, projectionOptions) {
            projectionOptions = applyDefaultProjectionOptions(projectionOptions);
            createDom(vnode, parentNode, undefined, projectionOptions);
            return createProjection(vnode, projectionOptions);
        },
        /**
     * Inserts a new DOM node which is generated from a [[VNode]].
     * This is a low-level method. Users wil typically use a [[Projector]] instead.
     * @param beforeNode - The node that the DOM Node is inserted before.
     * @param vnode - The root of the virtual DOM tree that was created using the [[h]] function.
     * NOTE: [[VNode]] objects may only be rendered once.
     * @param projectionOptions - Options to be used to create and update the projection, see [[createProjector]].
     * @returns The [[Projection]] that was created.
     */
        insertBefore: function (beforeNode, vnode, projectionOptions) {
            projectionOptions = applyDefaultProjectionOptions(projectionOptions);
            createDom(vnode, beforeNode.parentNode, beforeNode, projectionOptions);
            return createProjection(vnode, projectionOptions);
        },
        /**
     * Merges a new DOM node which is generated from a [[VNode]] with an existing DOM Node.
     * This means that the virtual DOM and the real DOM will have one overlapping element.
     * Therefore the selector for the root [[VNode]] will be ignored, but its properties and children will be applied to the Element provided.
     * This is a low-level method. Users wil typically use a [[Projector]] instead.
     * @param element - The existing element to adopt as the root of the new virtual DOM. Existing attributes and child nodes are preserved.
     * @param vnode - The root of the virtual DOM tree that was created using the [[h]] function. NOTE: [[VNode]] objects
     * may only be rendered once.
     * @param projectionOptions - Options to be used to create and update the projection, see [[createProjector]].
     * @returns The [[Projection]] that was created.
     */
        merge: function (element, vnode, projectionOptions) {
            projectionOptions = applyDefaultProjectionOptions(projectionOptions);
            vnode.domNode = element;
            initPropertiesAndChildren(element, vnode, projectionOptions);
            return createProjection(vnode, projectionOptions);
        },
        /**
     * Replaces an existing DOM node with a node generated from a [[VNode]].
     * This is a low-level method. Users will typically use a [[Projector]] instead.
     * @param element - The node for the [[VNode]] to replace.
     * @param vnode - The root of the virtual DOM tree that was created using the [[h]] function. NOTE: [[VNode]]
     * objects may only be rendered once.
     * @param projectionOptions - Options to be used to create and update the [[Projection]].
     * @returns The [[Projection]] that was created.
     */
        replace: function (element, vnode, projectionOptions) {
            projectionOptions = applyDefaultProjectionOptions(projectionOptions);
            createDom(vnode, element.parentNode, element, projectionOptions);
            element.parentNode.removeChild(element);
            return createProjection(vnode, projectionOptions);
        }
    };
    /**
 * Creates a [[CalculationCache]] object, useful for caching [[VNode]] trees.
 * In practice, caching of [[VNode]] trees is not needed, because achieving 60 frames per second is almost never a problem.
 * For more information, see [[CalculationCache]].
 *
 * @param <Result> The type of the value that is cached.
 */
    exports.createCache = function () {
        var cachedInputs;
        var cachedOutcome;
        return {
            invalidate: function () {
                cachedOutcome = undefined;
                cachedInputs = undefined;
            },
            result: function (inputs, calculation) {
                if (cachedInputs) {
                    for (var i = 0; i < inputs.length; i++) {
                        if (cachedInputs[i] !== inputs[i]) {
                            cachedOutcome = undefined;
                        }
                    }
                }
                if (!cachedOutcome) {
                    cachedOutcome = calculation();
                    cachedInputs = inputs;
                }
                return cachedOutcome;
            }
        };
    };
    /**
 * Creates a {@link Mapping} instance that keeps an array of result objects synchronized with an array of source objects.
 * See {@link http://maquettejs.org/docs/arrays.html|Working with arrays}.
 *
 * @param <Source>       The type of source items. A database-record for instance.
 * @param <Target>       The type of target items. A [[Component]] for instance.
 * @param getSourceKey   `function(source)` that must return a key to identify each source object. The result must either be a string or a number.
 * @param createResult   `function(source, index)` that must create a new result object from a given source. This function is identical
 *                       to the `callback` argument in `Array.map(callback)`.
 * @param updateResult   `function(source, target, index)` that updates a result to an updated source.
 */
    exports.createMapping = function (getSourceKey, createResult, updateResult) {
        var keys = [];
        var results = [];
        return {
            results: results,
            map: function (newSources) {
                var newKeys = newSources.map(getSourceKey);
                var oldTargets = results.slice();
                var oldIndex = 0;
                for (var i = 0; i < newSources.length; i++) {
                    var source = newSources[i];
                    var sourceKey = newKeys[i];
                    if (sourceKey === keys[oldIndex]) {
                        results[i] = oldTargets[oldIndex];
                        updateResult(source, oldTargets[oldIndex], i);
                        oldIndex++;
                    } else {
                        var found = false;
                        for (var j = 1; j < keys.length + 1; j++) {
                            var searchIndex = (oldIndex + j) % keys.length;
                            if (keys[searchIndex] === sourceKey) {
                                results[i] = oldTargets[searchIndex];
                                updateResult(newSources[i], oldTargets[searchIndex], i);
                                oldIndex = searchIndex + 1;
                                found = true;
                                break;
                            }
                        }
                        if (!found) {
                            results[i] = createResult(source, i);
                        }
                    }
                }
                results.length = newSources.length;
                keys = newKeys;
            }
        };
    };
    /**
 * Creates a [[Projector]] instance using the provided projectionOptions.
 *
 * For more information, see [[Projector]].
 *
 * @param projectorOptions   Options that influence how the DOM is rendered and updated.
 */
    exports.createProjector = function (projectorOptions) {
        var projector;
        var projectionOptions = applyDefaultProjectionOptions(projectorOptions);
        projectionOptions.eventHandlerInterceptor = function (propertyName, eventHandler, domNode, properties) {
            return function () {
                // intercept function calls (event handlers) to do a render afterwards.
                projector.scheduleRender();
                return eventHandler.apply(properties.bind || this, arguments);
            };
        };
        var renderCompleted = true;
        var scheduled;
        var stopped = false;
        var projections = [];
        var renderFunctions = [];
        // matches the projections array
        var doRender = function () {
            scheduled = undefined;
            if (!renderCompleted) {
                return;    // The last render threw an error, it should be logged in the browser console.
            }
            renderCompleted = false;
            for (var i = 0; i < projections.length; i++) {
                var updatedVnode = renderFunctions[i]();
                projections[i].update(updatedVnode);
            }
            renderCompleted = true;
        };
        projector = {
            renderNow: doRender,
            scheduleRender: function () {
                if (!scheduled && !stopped) {
                    scheduled = requestAnimationFrame(doRender);
                }
            },
            stop: function () {
                if (scheduled) {
                    cancelAnimationFrame(scheduled);
                    scheduled = undefined;
                }
                stopped = true;
            },
            resume: function () {
                stopped = false;
                renderCompleted = true;
                projector.scheduleRender();
            },
            append: function (parentNode, renderMaquetteFunction) {
                projections.push(exports.dom.append(parentNode, renderMaquetteFunction(), projectionOptions));
                renderFunctions.push(renderMaquetteFunction);
            },
            insertBefore: function (beforeNode, renderMaquetteFunction) {
                projections.push(exports.dom.insertBefore(beforeNode, renderMaquetteFunction(), projectionOptions));
                renderFunctions.push(renderMaquetteFunction);
            },
            merge: function (domNode, renderMaquetteFunction) {
                projections.push(exports.dom.merge(domNode, renderMaquetteFunction(), projectionOptions));
                renderFunctions.push(renderMaquetteFunction);
            },
            replace: function (domNode, renderMaquetteFunction) {
                projections.push(exports.dom.replace(domNode, renderMaquetteFunction(), projectionOptions));
                renderFunctions.push(renderMaquetteFunction);
            },
            detach: function (renderMaquetteFunction) {
                for (var i = 0; i < renderFunctions.length; i++) {
                    if (renderFunctions[i] === renderMaquetteFunction) {
                        renderFunctions.splice(i, 1);
                        return projections.splice(i, 1)[0];
                    }
                }
                throw new Error('renderMaquetteFunction was not found');
            }
        };
        return projector;
    };
}));
//# sourceMappingURL=maquette.js.map


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var lang_1 = __webpack_require__(5);
function emit(target, event) {
    if (target.dispatchEvent &&
        ((target.ownerDocument && target.ownerDocument.createEvent) ||
            (target.document && target.document.createEvent) ||
            target.createEvent) /* matches document */) {
        var nativeEvent = (target.ownerDocument || target.document || target).createEvent('HTMLEvents');
        nativeEvent.initEvent(event.type, Boolean(event.bubbles), Boolean(event.cancelable));
        for (var key in event) {
            if (!(key in nativeEvent)) {
                nativeEvent[key] = event[key];
            }
        }
        return target.dispatchEvent(nativeEvent);
    }
    if (target.emit) {
        if (target.removeListener) {
            // Node.js EventEmitter
            target.emit(event.type, event);
            return false;
        }
        else if (target.on) {
            // Dojo Evented or similar
            target.emit(event);
            return false;
        }
    }
    throw new Error('Target must be an event emitter');
}
exports.emit = emit;
function on(target, type, listener, capture) {
    if (Array.isArray(type)) {
        var handles = type.map(function (type) {
            return on(target, type, listener, capture);
        });
        return lang_1.createCompositeHandle.apply(void 0, handles);
    }
    var callback = function () {
        listener.apply(this, arguments);
    };
    // DOM EventTarget
    if (target.addEventListener && target.removeEventListener) {
        target.addEventListener(type, callback, capture);
        return lang_1.createHandle(function () {
            target.removeEventListener(type, callback, capture);
        });
    }
    if (target.on) {
        // EventEmitter
        if (target.removeListener) {
            target.on(type, callback);
            return lang_1.createHandle(function () {
                target.removeListener(type, callback);
            });
        }
        else if (target.emit) {
            return target.on(type, listener);
        }
    }
    throw new TypeError('Unknown event emitter object');
}
exports.default = on;
function once(target, type, listener, capture) {
    // FIXME
    // tslint:disable-next-line:no-var-keyword
    var handle = on(target, type, function () {
        handle.destroy();
        return listener.apply(this, arguments);
    }, capture);
    return handle;
}
exports.once = once;
function pausable(target, type, listener, capture) {
    var paused;
    var handle = on(target, type, function () {
        if (!paused) {
            return listener.apply(this, arguments);
        }
    }, capture);
    handle.pause = function () {
        paused = true;
    };
    handle.resume = function () {
        paused = false;
    };
    return handle;
}
exports.pausable = pausable;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process) {
Object.defineProperty(exports, "__esModule", { value: true });
function isFeatureTestThenable(value) {
    return value && value.then;
}
/**
 * A cache of results of feature tests
 */
exports.testCache = {};
/**
 * A cache of the un-resolved feature tests
 */
exports.testFunctions = {};
/**
 * A cache of unresolved thenables (probably promises)
 * @type {{}}
 */
var testThenables = {};
/**
 * A reference to the global scope (`window` in a browser, `global` in NodeJS)
 */
var globalScope = (function () {
    /* istanbul ignore else */
    if (typeof window !== 'undefined') {
        // Browsers
        return window;
    }
    else if (typeof global !== 'undefined') {
        // Node
        return global;
    }
    else if (typeof self !== 'undefined') {
        // Web workers
        return self;
    }
    /* istanbul ignore next */
    return {};
})();
/* Grab the staticFeatures if there are available */
var staticFeatures = (globalScope.DojoHasEnvironment || {}).staticFeatures;
/* Cleaning up the DojoHasEnviornment */
if ('DojoHasEnvironment' in globalScope) {
    delete globalScope.DojoHasEnvironment;
}
/**
 * Custom type guard to narrow the `staticFeatures` to either a map or a function that
 * returns a map.
 *
 * @param value The value to guard for
 */
function isStaticFeatureFunction(value) {
    return typeof value === 'function';
}
/**
 * The cache of asserted features that were available in the global scope when the
 * module loaded
 */
var staticCache = staticFeatures
    ? isStaticFeatureFunction(staticFeatures)
        ? staticFeatures.apply(globalScope)
        : staticFeatures
    : {};/* Providing an empty cache, if none was in the environment

/**
* AMD plugin function.
*
* Conditional loads modules based on a has feature test value.
*
* @param resourceId Gives the resolved module id to load.
* @param require The loader require function with respect to the module that contained the plugin resource in its
*                dependency list.
* @param load Callback to loader that consumes result of plugin demand.
*/
function load(resourceId, require, load, config) {
    resourceId ? require([resourceId], load) : load();
}
exports.load = load;
/**
 * AMD plugin function.
 *
 * Resolves resourceId into a module id based on possibly-nested tenary expression that branches on has feature test
 * value(s).
 *
 * @param resourceId The id of the module
 * @param normalize Resolves a relative module id into an absolute module id
 */
function normalize(resourceId, normalize) {
    var tokens = resourceId.match(/[\?:]|[^:\?]*/g) || [];
    var i = 0;
    function get(skip) {
        var term = tokens[i++];
        if (term === ':') {
            // empty string module name, resolves to null
            return null;
        }
        else {
            // postfixed with a ? means it is a feature to branch on, the term is the name of the feature
            if (tokens[i++] === '?') {
                if (!skip && has(term)) {
                    // matched the feature, get the first value from the options
                    return get();
                }
                else {
                    // did not match, get the second value, passing over the first
                    get(true);
                    return get(skip);
                }
            }
            // a module
            return term;
        }
    }
    var id = get();
    return id && normalize(id);
}
exports.normalize = normalize;
/**
 * Check if a feature has already been registered
 *
 * @param feature the name of the feature
 */
function exists(feature) {
    var normalizedFeature = feature.toLowerCase();
    return Boolean(normalizedFeature in staticCache || normalizedFeature in exports.testCache || exports.testFunctions[normalizedFeature]);
}
exports.exists = exists;
/**
 * Register a new test for a named feature.
 *
 * @example
 * has.add('dom-addeventlistener', !!document.addEventListener);
 *
 * @example
 * has.add('touch-events', function () {
 *    return 'ontouchstart' in document
 * });
 *
 * @param feature the name of the feature
 * @param value the value reported of the feature, or a function that will be executed once on first test
 * @param overwrite if an existing value should be overwritten. Defaults to false.
 */
function add(feature, value, overwrite) {
    if (overwrite === void 0) { overwrite = false; }
    var normalizedFeature = feature.toLowerCase();
    if (exists(normalizedFeature) && !overwrite && !(normalizedFeature in staticCache)) {
        throw new TypeError("Feature \"" + feature + "\" exists and overwrite not true.");
    }
    if (typeof value === 'function') {
        exports.testFunctions[normalizedFeature] = value;
    }
    else if (isFeatureTestThenable(value)) {
        testThenables[feature] = value.then(function (resolvedValue) {
            exports.testCache[feature] = resolvedValue;
            delete testThenables[feature];
        }, function () {
            delete testThenables[feature];
        });
    }
    else {
        exports.testCache[normalizedFeature] = value;
        delete exports.testFunctions[normalizedFeature];
    }
}
exports.add = add;
/**
 * Return the current value of a named feature.
 *
 * @param feature The name (if a string) or identifier (if an integer) of the feature to test.
 */
function has(feature) {
    var result;
    var normalizedFeature = feature.toLowerCase();
    if (normalizedFeature in staticCache) {
        result = staticCache[normalizedFeature];
    }
    else if (exports.testFunctions[normalizedFeature]) {
        result = exports.testCache[normalizedFeature] = exports.testFunctions[normalizedFeature].call(null);
        delete exports.testFunctions[normalizedFeature];
    }
    else if (normalizedFeature in exports.testCache) {
        result = exports.testCache[normalizedFeature];
    }
    else if (feature in testThenables) {
        return false;
    }
    else {
        throw new TypeError("Attempt to detect unregistered has feature \"" + feature + "\"");
    }
    return result;
}
exports.default = has;
/*
 * Out of the box feature tests
 */
/* Environments */
/* Used as a value to provide a debug only code path */
add('debug', true);
/* Detects if the environment is "browser like" */
add('host-browser', typeof document !== 'undefined' && typeof location !== 'undefined');
/* Detects if the environment appears to be NodeJS */
add('host-node', function () {
    if (typeof process === 'object' && process.versions && process.versions.node) {
        return process.versions.node;
    }
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21), __webpack_require__(24)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WidgetBase_1 = __webpack_require__(7);
var d_1 = __webpack_require__(1);
var inject_1 = __webpack_require__(14);
var RouterInjector_1 = __webpack_require__(16);
var getProperties = function (router, properties) {
    var to = properties.to, _a = properties.isOutlet, isOutlet = _a === void 0 ? true : _a, _b = properties.params, params = _b === void 0 ? {} : _b, onClick = properties.onClick, props = __rest(properties, ["to", "isOutlet", "params", "onClick"]);
    var href = isOutlet ? router.link(to, __assign({}, router.getCurrentParams(), params)) : to;
    var handleOnClick = function (event) {
        if (onClick) {
            onClick(event);
        }
        if (!event.defaultPrevented && event.button === 0 && !properties.target) {
            event.preventDefault();
            router.setPath(href);
        }
    };
    return __assign({ href: href, onClick: handleOnClick }, props);
};
var BaseLink = (function (_super) {
    __extends(BaseLink, _super);
    function BaseLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseLink.prototype._onClick = function (event) {
        this.properties.onClick && this.properties.onClick(event);
    };
    BaseLink.prototype.render = function () {
        var props = __assign({}, this.properties, { onclick: this._onClick, onClick: undefined, to: undefined, isOutlet: undefined, params: undefined, routerKey: undefined, router: undefined });
        return d_1.v('a', __assign({}, props), this.children);
    };
    return BaseLink;
}(WidgetBase_1.WidgetBase));
exports.BaseLink = BaseLink;
function createLink(routerKey) {
    var Link = (function (_super) {
        __extends(Link, _super);
        function Link() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Link = __decorate([
            inject_1.inject({ name: routerKey, getProperties: getProperties })
        ], Link);
        return Link;
    }(BaseLink));
    ;
    return Link;
}
exports.createLink = createLink;
exports.Link = createLink(RouterInjector_1.routerKey);


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WidgetBase_1 = __webpack_require__(7);
var d_1 = __webpack_require__(1);
var inject_1 = __webpack_require__(14);
var RouterInjector_1 = __webpack_require__(16);
var interfaces_1 = __webpack_require__(17);
function isComponent(value) {
    return Boolean(value && ((typeof value === 'string') || (typeof value === 'function') || (typeof value === 'symbol')));
}
exports.isComponent = isComponent;
function Outlet(outletComponents, outlet, mapParams, key) {
    if (mapParams === void 0) { mapParams = function (options) { }; }
    if (key === void 0) { key = RouterInjector_1.routerKey; }
    var indexComponent = isComponent(outletComponents) ? undefined : outletComponents.index;
    var mainComponent = isComponent(outletComponents) ? outletComponents : outletComponents.main;
    var errorComponent = isComponent(outletComponents) ? undefined : outletComponents.error;
    function getProperties(router, properties) {
        return { router: router };
    }
    ;
    var OutletComponent = (function (_super) {
        __extends(OutletComponent, _super);
        function OutletComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OutletComponent.prototype.__setProperties__ = function (properties) {
            _super.prototype.__setProperties__.call(this, properties);
            this.invalidate();
        };
        OutletComponent.prototype.render = function () {
            var router = this.properties.router;
            var outletContext = router.getOutlet(outlet);
            if (outletContext) {
                var params = outletContext.params, type = outletContext.type, location_1 = outletContext.location;
                var properties = __assign({}, this.properties, mapParams({ params: params, type: type, location: location_1, router: router }));
                if ((type === interfaces_1.MatchType.INDEX || type === interfaces_1.MatchType.ERROR) && indexComponent) {
                    return d_1.w(indexComponent, properties, this.children);
                }
                else if (type === interfaces_1.MatchType.ERROR && errorComponent) {
                    return d_1.w(errorComponent, properties, this.children);
                }
                else if (type !== interfaces_1.MatchType.ERROR && mainComponent) {
                    return d_1.w(mainComponent, properties, this.children);
                }
            }
            return null;
        };
        OutletComponent = __decorate([
            inject_1.inject({ name: RouterInjector_1.routerKey, getProperties: getProperties })
        ], OutletComponent);
        return OutletComponent;
    }(WidgetBase_1.WidgetBase));
    return OutletComponent;
}
exports.Outlet = Outlet;
exports.default = Outlet;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UrlSearchParams_1 = __webpack_require__(15);
/**
 * Parses a path
 * @param path The path to parse.
 * @return The search params, pathname segments, and whether it ended with a trailing slash.
 */
function parse(path) {
    var tokens = path.split(/([/?#])/).filter(Boolean);
    var pathnameTokens = tokens;
    var searchParams;
    var searchStart = tokens.indexOf('?');
    var hashStart = tokens.indexOf('#');
    if (searchStart >= 0) {
        if (hashStart >= 0) {
            // Either `/foo?bar#baz` or `/foo#bar?baz`
            pathnameTokens = tokens.slice(0, Math.min(searchStart, hashStart));
            searchParams = new UrlSearchParams_1.default(tokens.slice(searchStart + 1, hashStart).join(''));
        }
        else {
            // `/foo?bar`
            pathnameTokens = tokens.slice(0, searchStart);
            searchParams = new UrlSearchParams_1.default(tokens.slice(searchStart + 1).join(''));
        }
    }
    else {
        searchParams = new UrlSearchParams_1.default();
        if (hashStart >= 0) {
            // `/foo#bar`
            pathnameTokens = tokens.slice(0, hashStart);
        }
    }
    var segments = pathnameTokens.filter(function (t) { return t !== '/'; });
    var trailingSlash = pathnameTokens[pathnameTokens.length - 1] === '/' && segments.length > 0;
    return {
        searchParams: searchParams,
        segments: segments,
        trailingSlash: trailingSlash
    };
}
exports.parse = parse;
/**
 * Determines whether a DeconstructedPath is a (partial) match for given pathname segments.
 * @param expectedSegments Part of a DeconstructedPath object.
 * @param segments Pathname segments as returned by `parse()`
 * @return A result object.
 */
function match(_a, segments) {
    var expectedSegments = _a.expectedSegments;
    if (expectedSegments.length === 0) {
        return {
            hasRemaining: segments.length > 0,
            offset: 0,
            values: []
        };
    }
    if (expectedSegments.length > segments.length) {
        return null;
    }
    var isMatch = true;
    var values = [];
    for (var i = 0; isMatch && i < expectedSegments.length; i++) {
        var value = segments[i];
        var expected = expectedSegments[i];
        if (isNamedSegment(expected)) {
            values.push(value);
        }
        else if (expected.literal !== value) {
            isMatch = false;
        }
    }
    if (!isMatch) {
        return null;
    }
    return {
        hasRemaining: expectedSegments.length < segments.length,
        offset: expectedSegments.length,
        values: values
    };
}
exports.match = match;
/**
 * Determine whether the segment is a NamedSegment.
 *
 * @param segment The segment to be checked
 * @return true if the segment is a NamedSegment, false otherwise
 */
function isNamedSegment(segment) {
    return segment.name !== undefined;
}
exports.isNamedSegment = isNamedSegment;
/**
 * Deconstruct a route path into its constituent parts.
 * @param path The path to deconstruct.
 * @return An object describing the path's constituent parts.
 */
function deconstruct(path) {
    var expectedSegments = [];
    var parameters = [];
    var searchParameters = [];
    var trailingSlash = false;
    var tokens = path.split(/([/{}?&])/).filter(Boolean);
    var leadingSlash = tokens[0] === '/';
    var i = 0;
    var consume = function () { return tokens[i++]; };
    var peek = function () { return tokens[i]; };
    var inSearchComponent = false;
    while (i < tokens.length) {
        var t = consume();
        switch (t) {
            case '{': {
                var name_1 = consume();
                if (!name_1 || name_1 === '}') {
                    throw new TypeError('Parameter must have a name');
                }
                // Reserve : for future use, e.g. including type data in the parameter declaration.
                if (name_1 === '{' || name_1 === '&' || /:/.test(name_1)) {
                    throw new TypeError('Parameter name must not contain \'{\', \'&\' or \':\'');
                }
                if (parameters.indexOf(name_1) !== -1 || searchParameters.indexOf(name_1) !== -1) {
                    throw new TypeError("Parameter must have a unique name, got '" + name_1 + "'");
                }
                var closing = consume();
                if (!closing || closing !== '}') {
                    throw new TypeError("Parameter name must be followed by '}', got '" + closing + "'");
                }
                var separator = peek();
                if (separator) {
                    if (inSearchComponent) {
                        if (separator !== '&') {
                            throw new TypeError("Search parameter must be followed by '&', got '" + separator + "'");
                        }
                    }
                    else if (separator !== '/' && separator !== '?') {
                        throw new TypeError("Parameter must be followed by '/' or '?', got '" + separator + "'");
                    }
                }
                if (inSearchComponent) {
                    searchParameters.push(name_1);
                }
                else {
                    parameters.push(name_1);
                    expectedSegments.push(Object.freeze({ name: name_1 }));
                }
                break;
            }
            case '?':
            case '/':
                if (inSearchComponent) {
                    throw new TypeError("Expected parameter in search component, got '" + t + "'");
                }
                if (t === '?') {
                    inSearchComponent = true;
                    if (expectedSegments.length === 0) {
                        throw new TypeError('Path must contain at least one segment');
                    }
                }
                if (t === '/') {
                    var next_1 = peek();
                    if (next_1 === '/') {
                        throw new TypeError('Path segment must not be empty');
                    }
                    if (expectedSegments.length > 0 && (!next_1 || next_1 === '?')) {
                        trailingSlash = true;
                    }
                }
                break;
            case '&':
                if (!inSearchComponent) {
                    throw new TypeError('Path segment must not contain \'&\'');
                }
                var next = peek();
                if (next === '&') {
                    throw new TypeError('Expected parameter in search component, got \'&\'');
                }
                break;
            default:
                if (inSearchComponent) {
                    throw new TypeError("Expected parameter in search component, got '" + t + "'");
                }
                expectedSegments.push(Object.freeze({ literal: t }));
        }
    }
    return Object.freeze({
        expectedSegments: Object.freeze(expectedSegments),
        leadingSlash: leadingSlash,
        parameters: Object.freeze(parameters),
        searchParameters: Object.freeze(searchParameters),
        trailingSlash: trailingSlash
    });
}
exports.deconstruct = deconstruct;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WeakMap_1 = __webpack_require__(10);
exports.parentMap = new WeakMap_1.default();
/**
 * Whether the route has been appended to another route or router.
 */
function hasBeenAppended(route) {
    return exports.parentMap.has(route) || route.parent !== undefined;
}
exports.hasBeenAppended = hasBeenAppended;
/**
 * Finds the router whose route hierarchy the route has been appended to.
 *
 * Throws if the route was not appended to any router.
 */
function findRouter(route) {
    while (route.parent) {
        route = route.parent;
    }
    var router = exports.parentMap.get(route);
    if (!router) {
        throw new Error('Cannot generate link for route that is not in the hierarchy');
    }
    else {
        return router;
    }
}
exports.findRouter = findRouter;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Registry_1 = __webpack_require__(13);
function isObjectOrArray(value) {
    return Object.prototype.toString.call(value) === '[object Object]' || Array.isArray(value);
}
function always(previousProperty, newProperty) {
    return {
        changed: true,
        value: newProperty
    };
}
exports.always = always;
function ignore(previousProperty, newProperty) {
    return {
        changed: false,
        value: newProperty
    };
}
exports.ignore = ignore;
function reference(previousProperty, newProperty) {
    return {
        changed: previousProperty !== newProperty,
        value: newProperty
    };
}
exports.reference = reference;
function shallow(previousProperty, newProperty) {
    var changed = false;
    var validOldProperty = previousProperty && isObjectOrArray(previousProperty);
    var validNewProperty = newProperty && isObjectOrArray(newProperty);
    if (!validOldProperty || !validNewProperty) {
        return {
            changed: true,
            value: newProperty
        };
    }
    var previousKeys = Object.keys(previousProperty);
    var newKeys = Object.keys(newProperty);
    if (previousKeys.length !== newKeys.length) {
        changed = true;
    }
    else {
        changed = newKeys.some(function (key) {
            return newProperty[key] !== previousProperty[key];
        });
    }
    return {
        changed: changed,
        value: newProperty
    };
}
exports.shallow = shallow;
function auto(previousProperty, newProperty) {
    var result;
    if (typeof newProperty === 'function') {
        if (newProperty._type === Registry_1.WIDGET_BASE_TYPE) {
            result = reference(previousProperty, newProperty);
        }
        else {
            result = ignore(previousProperty, newProperty);
        }
    }
    else if (isObjectOrArray(newProperty)) {
        result = shallow(previousProperty, newProperty);
    }
    else {
        result = reference(previousProperty, newProperty);
    }
    return result;
}
exports.auto = auto;


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var require = function () { return 'src/main'; };

Object.defineProperty(exports, "__esModule", { value: true });
var Projector_1 = __webpack_require__(58);
var Registry_1 = __webpack_require__(13);
var RouterInjector_1 = __webpack_require__(16);
var Context_1 = __webpack_require__(61);
var App_1 = __webpack_require__(66);
var registerServiceWorker_1 = __webpack_require__(65);
var load_1 = __webpack_require__(43);
var registry = new Registry_1.Registry();
registry.define('content', function() { return (__webpack_require__.e/* require.ensure */(0).then((function () {
    return load_1.default(require, './widgets/Content').then(function (_a) {
        var someWidget = _a[0];
        return someWidget.Content;
    });
}).bind(null, __webpack_require__)).catch(__webpack_require__.oe))});
var routingConfig = [
    {
        path: 'user',
        outlet: 'user'
    },
    {
        path: '{category}',
        outlet: 'menu',
        defaultRoute: true,
        defaultParams: {
            category: 'top'
        }
    }
];
var router = RouterInjector_1.registerRouterInjector(routingConfig, registry);
registry.defineInjector('state', new Context_1.Context({}));
var Projector = Projector_1.ProjectorMixin(App_1.App);
var projector = new Projector();
projector.setProperties({ registry: registry });
projector.append();
router.start();
registerServiceWorker_1.default();


/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {" _key":"menu","root":"_34HPGizk","menuContainer":"_1lZUlBuW","home":"_3ExrLjEz","logo":"_2cdP4aDq"};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {" _key":"menuItem","root":"_3nC3wHuO","item":"_2otQ-Bk4","selected":"_3H86Omvm"};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * PEP v0.4.3 | https://github.com/jquery/PEP
 * Copyright jQuery Foundation and other contributors | http://jquery.org/license
 */

(function (global, factory) {
   true ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.PointerEventsPolyfill = factory());
}(this, function () { 'use strict';

  /**
   * This is the constructor for new PointerEvents.
   *
   * New Pointer Events must be given a type, and an optional dictionary of
   * initialization properties.
   *
   * Due to certain platform requirements, events returned from the constructor
   * identify as MouseEvents.
   *
   * @constructor
   * @param {String} inType The type of the event to create.
   * @param {Object} [inDict] An optional dictionary of initial event properties.
   * @return {Event} A new PointerEvent of type `inType`, initialized with properties from `inDict`.
   */
  var MOUSE_PROPS = [
    'bubbles',
    'cancelable',
    'view',
    'detail',
    'screenX',
    'screenY',
    'clientX',
    'clientY',
    'ctrlKey',
    'altKey',
    'shiftKey',
    'metaKey',
    'button',
    'relatedTarget',
    'pageX',
    'pageY'
  ];

  var MOUSE_DEFAULTS = [
    false,
    false,
    null,
    null,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null,
    0,
    0
  ];

  function PointerEvent(inType, inDict) {
    inDict = inDict || Object.create(null);

    var e = document.createEvent('Event');
    e.initEvent(inType, inDict.bubbles || false, inDict.cancelable || false);

    // define inherited MouseEvent properties
    // skip bubbles and cancelable since they're set above in initEvent()
    for (var i = 2, p; i < MOUSE_PROPS.length; i++) {
      p = MOUSE_PROPS[i];
      e[p] = inDict[p] || MOUSE_DEFAULTS[i];
    }
    e.buttons = inDict.buttons || 0;

    // Spec requires that pointers without pressure specified use 0.5 for down
    // state and 0 for up state.
    var pressure = 0;

    if (inDict.pressure && e.buttons) {
      pressure = inDict.pressure;
    } else {
      pressure = e.buttons ? 0.5 : 0;
    }

    // add x/y properties aliased to clientX/Y
    e.x = e.clientX;
    e.y = e.clientY;

    // define the properties of the PointerEvent interface
    e.pointerId = inDict.pointerId || 0;
    e.width = inDict.width || 0;
    e.height = inDict.height || 0;
    e.pressure = pressure;
    e.tiltX = inDict.tiltX || 0;
    e.tiltY = inDict.tiltY || 0;
    e.twist = inDict.twist || 0;
    e.tangentialPressure = inDict.tangentialPressure || 0;
    e.pointerType = inDict.pointerType || '';
    e.hwTimestamp = inDict.hwTimestamp || 0;
    e.isPrimary = inDict.isPrimary || false;
    return e;
  }

  /**
   * This module implements a map of pointer states
   */
  var USE_MAP = window.Map && window.Map.prototype.forEach;
  var PointerMap = USE_MAP ? Map : SparseArrayMap;

  function SparseArrayMap() {
    this.array = [];
    this.size = 0;
  }

  SparseArrayMap.prototype = {
    set: function(k, v) {
      if (v === undefined) {
        return this.delete(k);
      }
      if (!this.has(k)) {
        this.size++;
      }
      this.array[k] = v;
    },
    has: function(k) {
      return this.array[k] !== undefined;
    },
    delete: function(k) {
      if (this.has(k)) {
        delete this.array[k];
        this.size--;
      }
    },
    get: function(k) {
      return this.array[k];
    },
    clear: function() {
      this.array.length = 0;
      this.size = 0;
    },

    // return value, key, map
    forEach: function(callback, thisArg) {
      return this.array.forEach(function(v, k) {
        callback.call(thisArg, v, k, this);
      }, this);
    }
  };

  var CLONE_PROPS = [

    // MouseEvent
    'bubbles',
    'cancelable',
    'view',
    'detail',
    'screenX',
    'screenY',
    'clientX',
    'clientY',
    'ctrlKey',
    'altKey',
    'shiftKey',
    'metaKey',
    'button',
    'relatedTarget',

    // DOM Level 3
    'buttons',

    // PointerEvent
    'pointerId',
    'width',
    'height',
    'pressure',
    'tiltX',
    'tiltY',
    'pointerType',
    'hwTimestamp',
    'isPrimary',

    // event instance
    'type',
    'target',
    'currentTarget',
    'which',
    'pageX',
    'pageY',
    'timeStamp'
  ];

  var CLONE_DEFAULTS = [

    // MouseEvent
    false,
    false,
    null,
    null,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null,

    // DOM Level 3
    0,

    // PointerEvent
    0,
    0,
    0,
    0,
    0,
    0,
    '',
    0,
    false,

    // event instance
    '',
    null,
    null,
    0,
    0,
    0,
    0
  ];

  var BOUNDARY_EVENTS = {
    'pointerover': 1,
    'pointerout': 1,
    'pointerenter': 1,
    'pointerleave': 1
  };

  var HAS_SVG_INSTANCE = (typeof SVGElementInstance !== 'undefined');

  /**
   * This module is for normalizing events. Mouse and Touch events will be
   * collected here, and fire PointerEvents that have the same semantics, no
   * matter the source.
   * Events fired:
   *   - pointerdown: a pointing is added
   *   - pointerup: a pointer is removed
   *   - pointermove: a pointer is moved
   *   - pointerover: a pointer crosses into an element
   *   - pointerout: a pointer leaves an element
   *   - pointercancel: a pointer will no longer generate events
   */
  var dispatcher = {
    pointermap: new PointerMap(),
    eventMap: Object.create(null),
    captureInfo: Object.create(null),

    // Scope objects for native events.
    // This exists for ease of testing.
    eventSources: Object.create(null),
    eventSourceList: [],
    /**
     * Add a new event source that will generate pointer events.
     *
     * `inSource` must contain an array of event names named `events`, and
     * functions with the names specified in the `events` array.
     * @param {string} name A name for the event source
     * @param {Object} source A new source of platform events.
     */
    registerSource: function(name, source) {
      var s = source;
      var newEvents = s.events;
      if (newEvents) {
        newEvents.forEach(function(e) {
          if (s[e]) {
            this.eventMap[e] = s[e].bind(s);
          }
        }, this);
        this.eventSources[name] = s;
        this.eventSourceList.push(s);
      }
    },
    register: function(element) {
      var l = this.eventSourceList.length;
      for (var i = 0, es; (i < l) && (es = this.eventSourceList[i]); i++) {

        // call eventsource register
        es.register.call(es, element);
      }
    },
    unregister: function(element) {
      var l = this.eventSourceList.length;
      for (var i = 0, es; (i < l) && (es = this.eventSourceList[i]); i++) {

        // call eventsource register
        es.unregister.call(es, element);
      }
    },
    contains: /*scope.external.contains || */function(container, contained) {
      try {
        return container.contains(contained);
      } catch (ex) {

        // most likely: https://bugzilla.mozilla.org/show_bug.cgi?id=208427
        return false;
      }
    },

    // EVENTS
    down: function(inEvent) {
      inEvent.bubbles = true;
      this.fireEvent('pointerdown', inEvent);
    },
    move: function(inEvent) {
      inEvent.bubbles = true;
      this.fireEvent('pointermove', inEvent);
    },
    up: function(inEvent) {
      inEvent.bubbles = true;
      this.fireEvent('pointerup', inEvent);
    },
    enter: function(inEvent) {
      inEvent.bubbles = false;
      this.fireEvent('pointerenter', inEvent);
    },
    leave: function(inEvent) {
      inEvent.bubbles = false;
      this.fireEvent('pointerleave', inEvent);
    },
    over: function(inEvent) {
      inEvent.bubbles = true;
      this.fireEvent('pointerover', inEvent);
    },
    out: function(inEvent) {
      inEvent.bubbles = true;
      this.fireEvent('pointerout', inEvent);
    },
    cancel: function(inEvent) {
      inEvent.bubbles = true;
      this.fireEvent('pointercancel', inEvent);
    },
    leaveOut: function(event) {
      this.out(event);
      this.propagate(event, this.leave, false);
    },
    enterOver: function(event) {
      this.over(event);
      this.propagate(event, this.enter, true);
    },

    // LISTENER LOGIC
    eventHandler: function(inEvent) {

      // This is used to prevent multiple dispatch of pointerevents from
      // platform events. This can happen when two elements in different scopes
      // are set up to create pointer events, which is relevant to Shadow DOM.
      if (inEvent._handledByPE) {
        return;
      }
      var type = inEvent.type;
      var fn = this.eventMap && this.eventMap[type];
      if (fn) {
        fn(inEvent);
      }
      inEvent._handledByPE = true;
    },

    // set up event listeners
    listen: function(target, events) {
      events.forEach(function(e) {
        this.addEvent(target, e);
      }, this);
    },

    // remove event listeners
    unlisten: function(target, events) {
      events.forEach(function(e) {
        this.removeEvent(target, e);
      }, this);
    },
    addEvent: /*scope.external.addEvent || */function(target, eventName) {
      target.addEventListener(eventName, this.boundHandler);
    },
    removeEvent: /*scope.external.removeEvent || */function(target, eventName) {
      target.removeEventListener(eventName, this.boundHandler);
    },

    // EVENT CREATION AND TRACKING
    /**
     * Creates a new Event of type `inType`, based on the information in
     * `inEvent`.
     *
     * @param {string} inType A string representing the type of event to create
     * @param {Event} inEvent A platform event with a target
     * @return {Event} A PointerEvent of type `inType`
     */
    makeEvent: function(inType, inEvent) {

      // relatedTarget must be null if pointer is captured
      if (this.captureInfo[inEvent.pointerId]) {
        inEvent.relatedTarget = null;
      }
      var e = new PointerEvent(inType, inEvent);
      if (inEvent.preventDefault) {
        e.preventDefault = inEvent.preventDefault;
      }
      e._target = e._target || inEvent.target;
      return e;
    },

    // make and dispatch an event in one call
    fireEvent: function(inType, inEvent) {
      var e = this.makeEvent(inType, inEvent);
      return this.dispatchEvent(e);
    },
    /**
     * Returns a snapshot of inEvent, with writable properties.
     *
     * @param {Event} inEvent An event that contains properties to copy.
     * @return {Object} An object containing shallow copies of `inEvent`'s
     *    properties.
     */
    cloneEvent: function(inEvent) {
      var eventCopy = Object.create(null);
      var p;
      for (var i = 0; i < CLONE_PROPS.length; i++) {
        p = CLONE_PROPS[i];
        eventCopy[p] = inEvent[p] || CLONE_DEFAULTS[i];

        // Work around SVGInstanceElement shadow tree
        // Return the <use> element that is represented by the instance for Safari, Chrome, IE.
        // This is the behavior implemented by Firefox.
        if (HAS_SVG_INSTANCE && (p === 'target' || p === 'relatedTarget')) {
          if (eventCopy[p] instanceof SVGElementInstance) {
            eventCopy[p] = eventCopy[p].correspondingUseElement;
          }
        }
      }

      // keep the semantics of preventDefault
      if (inEvent.preventDefault) {
        eventCopy.preventDefault = function() {
          inEvent.preventDefault();
        };
      }
      return eventCopy;
    },
    getTarget: function(inEvent) {
      var capture = this.captureInfo[inEvent.pointerId];
      if (!capture) {
        return inEvent._target;
      }
      if (inEvent._target === capture || !(inEvent.type in BOUNDARY_EVENTS)) {
        return capture;
      }
    },
    propagate: function(event, fn, propagateDown) {
      var target = event.target;
      var targets = [];

      // Order of conditions due to document.contains() missing in IE.
      while (target !== document && !target.contains(event.relatedTarget)) {
        targets.push(target);
        target = target.parentNode;

        // Touch: Do not propagate if node is detached.
        if (!target) {
          return;
        }
      }
      if (propagateDown) {
        targets.reverse();
      }
      targets.forEach(function(target) {
        event.target = target;
        fn.call(this, event);
      }, this);
    },
    setCapture: function(inPointerId, inTarget, skipDispatch) {
      if (this.captureInfo[inPointerId]) {
        this.releaseCapture(inPointerId, skipDispatch);
      }

      this.captureInfo[inPointerId] = inTarget;
      this.implicitRelease = this.releaseCapture.bind(this, inPointerId, skipDispatch);
      document.addEventListener('pointerup', this.implicitRelease);
      document.addEventListener('pointercancel', this.implicitRelease);

      var e = new PointerEvent('gotpointercapture');
      e.pointerId = inPointerId;
      e._target = inTarget;

      if (!skipDispatch) {
        this.asyncDispatchEvent(e);
      }
    },
    releaseCapture: function(inPointerId, skipDispatch) {
      var t = this.captureInfo[inPointerId];
      if (!t) {
        return;
      }

      this.captureInfo[inPointerId] = undefined;
      document.removeEventListener('pointerup', this.implicitRelease);
      document.removeEventListener('pointercancel', this.implicitRelease);

      var e = new PointerEvent('lostpointercapture');
      e.pointerId = inPointerId;
      e._target = t;

      if (!skipDispatch) {
        this.asyncDispatchEvent(e);
      }
    },
    /**
     * Dispatches the event to its target.
     *
     * @param {Event} inEvent The event to be dispatched.
     * @return {Boolean} True if an event handler returns true, false otherwise.
     */
    dispatchEvent: /*scope.external.dispatchEvent || */function(inEvent) {
      var t = this.getTarget(inEvent);
      if (t) {
        return t.dispatchEvent(inEvent);
      }
    },
    asyncDispatchEvent: function(inEvent) {
      requestAnimationFrame(this.dispatchEvent.bind(this, inEvent));
    }
  };
  dispatcher.boundHandler = dispatcher.eventHandler.bind(dispatcher);

  var targeting = {
    shadow: function(inEl) {
      if (inEl) {
        return inEl.shadowRoot || inEl.webkitShadowRoot;
      }
    },
    canTarget: function(shadow) {
      return shadow && Boolean(shadow.elementFromPoint);
    },
    targetingShadow: function(inEl) {
      var s = this.shadow(inEl);
      if (this.canTarget(s)) {
        return s;
      }
    },
    olderShadow: function(shadow) {
      var os = shadow.olderShadowRoot;
      if (!os) {
        var se = shadow.querySelector('shadow');
        if (se) {
          os = se.olderShadowRoot;
        }
      }
      return os;
    },
    allShadows: function(element) {
      var shadows = [];
      var s = this.shadow(element);
      while (s) {
        shadows.push(s);
        s = this.olderShadow(s);
      }
      return shadows;
    },
    searchRoot: function(inRoot, x, y) {
      if (inRoot) {
        var t = inRoot.elementFromPoint(x, y);
        var st, sr;

        // is element a shadow host?
        sr = this.targetingShadow(t);
        while (sr) {

          // find the the element inside the shadow root
          st = sr.elementFromPoint(x, y);
          if (!st) {

            // check for older shadows
            sr = this.olderShadow(sr);
          } else {

            // shadowed element may contain a shadow root
            var ssr = this.targetingShadow(st);
            return this.searchRoot(ssr, x, y) || st;
          }
        }

        // light dom element is the target
        return t;
      }
    },
    owner: function(element) {
      var s = element;

      // walk up until you hit the shadow root or document
      while (s.parentNode) {
        s = s.parentNode;
      }

      // the owner element is expected to be a Document or ShadowRoot
      if (s.nodeType !== Node.DOCUMENT_NODE && s.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
        s = document;
      }
      return s;
    },
    findTarget: function(inEvent) {
      var x = inEvent.clientX;
      var y = inEvent.clientY;

      // if the listener is in the shadow root, it is much faster to start there
      var s = this.owner(inEvent.target);

      // if x, y is not in this root, fall back to document search
      if (!s.elementFromPoint(x, y)) {
        s = document;
      }
      return this.searchRoot(s, x, y);
    }
  };

  var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);
  var map = Array.prototype.map.call.bind(Array.prototype.map);
  var toArray = Array.prototype.slice.call.bind(Array.prototype.slice);
  var filter = Array.prototype.filter.call.bind(Array.prototype.filter);
  var MO = window.MutationObserver || window.WebKitMutationObserver;
  var SELECTOR = '[touch-action]';
  var OBSERVER_INIT = {
    subtree: true,
    childList: true,
    attributes: true,
    attributeOldValue: true,
    attributeFilter: ['touch-action']
  };

  function Installer(add, remove, changed, binder) {
    this.addCallback = add.bind(binder);
    this.removeCallback = remove.bind(binder);
    this.changedCallback = changed.bind(binder);
    if (MO) {
      this.observer = new MO(this.mutationWatcher.bind(this));
    }
  }

  Installer.prototype = {
    watchSubtree: function(target) {

      // Only watch scopes that can target find, as these are top-level.
      // Otherwise we can see duplicate additions and removals that add noise.
      //
      // TODO(dfreedman): For some instances with ShadowDOMPolyfill, we can see
      // a removal without an insertion when a node is redistributed among
      // shadows. Since it all ends up correct in the document, watching only
      // the document will yield the correct mutations to watch.
      if (this.observer && targeting.canTarget(target)) {
        this.observer.observe(target, OBSERVER_INIT);
      }
    },
    enableOnSubtree: function(target) {
      this.watchSubtree(target);
      if (target === document && document.readyState !== 'complete') {
        this.installOnLoad();
      } else {
        this.installNewSubtree(target);
      }
    },
    installNewSubtree: function(target) {
      forEach(this.findElements(target), this.addElement, this);
    },
    findElements: function(target) {
      if (target.querySelectorAll) {
        return target.querySelectorAll(SELECTOR);
      }
      return [];
    },
    removeElement: function(el) {
      this.removeCallback(el);
    },
    addElement: function(el) {
      this.addCallback(el);
    },
    elementChanged: function(el, oldValue) {
      this.changedCallback(el, oldValue);
    },
    concatLists: function(accum, list) {
      return accum.concat(toArray(list));
    },

    // register all touch-action = none nodes on document load
    installOnLoad: function() {
      document.addEventListener('readystatechange', function() {
        if (document.readyState === 'complete') {
          this.installNewSubtree(document);
        }
      }.bind(this));
    },
    isElement: function(n) {
      return n.nodeType === Node.ELEMENT_NODE;
    },
    flattenMutationTree: function(inNodes) {

      // find children with touch-action
      var tree = map(inNodes, this.findElements, this);

      // make sure the added nodes are accounted for
      tree.push(filter(inNodes, this.isElement));

      // flatten the list
      return tree.reduce(this.concatLists, []);
    },
    mutationWatcher: function(mutations) {
      mutations.forEach(this.mutationHandler, this);
    },
    mutationHandler: function(m) {
      if (m.type === 'childList') {
        var added = this.flattenMutationTree(m.addedNodes);
        added.forEach(this.addElement, this);
        var removed = this.flattenMutationTree(m.removedNodes);
        removed.forEach(this.removeElement, this);
      } else if (m.type === 'attributes') {
        this.elementChanged(m.target, m.oldValue);
      }
    }
  };

  function shadowSelector(v) {
    return 'body /shadow-deep/ ' + selector(v);
  }
  function selector(v) {
    return '[touch-action="' + v + '"]';
  }
  function rule(v) {
    return '{ -ms-touch-action: ' + v + '; touch-action: ' + v + '; }';
  }
  var attrib2css = [
    'none',
    'auto',
    'pan-x',
    'pan-y',
    {
      rule: 'pan-x pan-y',
      selectors: [
        'pan-x pan-y',
        'pan-y pan-x'
      ]
    }
  ];
  var styles = '';

  // only install stylesheet if the browser has touch action support
  var hasNativePE = window.PointerEvent || window.MSPointerEvent;

  // only add shadow selectors if shadowdom is supported
  var hasShadowRoot = !window.ShadowDOMPolyfill && document.head.createShadowRoot;

  function applyAttributeStyles() {
    if (hasNativePE) {
      attrib2css.forEach(function(r) {
        if (String(r) === r) {
          styles += selector(r) + rule(r) + '\n';
          if (hasShadowRoot) {
            styles += shadowSelector(r) + rule(r) + '\n';
          }
        } else {
          styles += r.selectors.map(selector) + rule(r.rule) + '\n';
          if (hasShadowRoot) {
            styles += r.selectors.map(shadowSelector) + rule(r.rule) + '\n';
          }
        }
      });

      var el = document.createElement('style');
      el.textContent = styles;
      document.head.appendChild(el);
    }
  }

  var pointermap = dispatcher.pointermap;

  // radius around touchend that swallows mouse events
  var DEDUP_DIST = 25;

  // left, middle, right, back, forward
  var BUTTON_TO_BUTTONS = [1, 4, 2, 8, 16];

  var HAS_BUTTONS = false;
  try {
    HAS_BUTTONS = new MouseEvent('test', { buttons: 1 }).buttons === 1;
  } catch (e) {}

  // handler block for native mouse events
  var mouseEvents = {
    POINTER_ID: 1,
    POINTER_TYPE: 'mouse',
    events: [
      'mousedown',
      'mousemove',
      'mouseup',
      'mouseover',
      'mouseout'
    ],
    register: function(target) {
      dispatcher.listen(target, this.events);
    },
    unregister: function(target) {
      dispatcher.unlisten(target, this.events);
    },
    lastTouches: [],

    // collide with the global mouse listener
    isEventSimulatedFromTouch: function(inEvent) {
      var lts = this.lastTouches;
      var x = inEvent.clientX;
      var y = inEvent.clientY;
      for (var i = 0, l = lts.length, t; i < l && (t = lts[i]); i++) {

        // simulated mouse events will be swallowed near a primary touchend
        var dx = Math.abs(x - t.x);
        var dy = Math.abs(y - t.y);
        if (dx <= DEDUP_DIST && dy <= DEDUP_DIST) {
          return true;
        }
      }
    },
    prepareEvent: function(inEvent) {
      var e = dispatcher.cloneEvent(inEvent);

      // forward mouse preventDefault
      var pd = e.preventDefault;
      e.preventDefault = function() {
        inEvent.preventDefault();
        pd();
      };
      e.pointerId = this.POINTER_ID;
      e.isPrimary = true;
      e.pointerType = this.POINTER_TYPE;
      return e;
    },
    prepareButtonsForMove: function(e, inEvent) {
      var p = pointermap.get(this.POINTER_ID);

      // Update buttons state after possible out-of-document mouseup.
      if (inEvent.which === 0 || !p) {
        e.buttons = 0;
      } else {
        e.buttons = p.buttons;
      }
      inEvent.buttons = e.buttons;
    },
    mousedown: function(inEvent) {
      if (!this.isEventSimulatedFromTouch(inEvent)) {
        var p = pointermap.get(this.POINTER_ID);
        var e = this.prepareEvent(inEvent);
        if (!HAS_BUTTONS) {
          e.buttons = BUTTON_TO_BUTTONS[e.button];
          if (p) { e.buttons |= p.buttons; }
          inEvent.buttons = e.buttons;
        }
        pointermap.set(this.POINTER_ID, inEvent);
        if (!p || p.buttons === 0) {
          dispatcher.down(e);
        } else {
          dispatcher.move(e);
        }
      }
    },
    mousemove: function(inEvent) {
      if (!this.isEventSimulatedFromTouch(inEvent)) {
        var e = this.prepareEvent(inEvent);
        if (!HAS_BUTTONS) { this.prepareButtonsForMove(e, inEvent); }
        e.button = -1;
        pointermap.set(this.POINTER_ID, inEvent);
        dispatcher.move(e);
      }
    },
    mouseup: function(inEvent) {
      if (!this.isEventSimulatedFromTouch(inEvent)) {
        var p = pointermap.get(this.POINTER_ID);
        var e = this.prepareEvent(inEvent);
        if (!HAS_BUTTONS) {
          var up = BUTTON_TO_BUTTONS[e.button];

          // Produces wrong state of buttons in Browsers without `buttons` support
          // when a mouse button that was pressed outside the document is released
          // inside and other buttons are still pressed down.
          e.buttons = p ? p.buttons & ~up : 0;
          inEvent.buttons = e.buttons;
        }
        pointermap.set(this.POINTER_ID, inEvent);

        // Support: Firefox <=44 only
        // FF Ubuntu includes the lifted button in the `buttons` property on
        // mouseup.
        // https://bugzilla.mozilla.org/show_bug.cgi?id=1223366
        e.buttons &= ~BUTTON_TO_BUTTONS[e.button];
        if (e.buttons === 0) {
          dispatcher.up(e);
        } else {
          dispatcher.move(e);
        }
      }
    },
    mouseover: function(inEvent) {
      if (!this.isEventSimulatedFromTouch(inEvent)) {
        var e = this.prepareEvent(inEvent);
        if (!HAS_BUTTONS) { this.prepareButtonsForMove(e, inEvent); }
        e.button = -1;
        pointermap.set(this.POINTER_ID, inEvent);
        dispatcher.enterOver(e);
      }
    },
    mouseout: function(inEvent) {
      if (!this.isEventSimulatedFromTouch(inEvent)) {
        var e = this.prepareEvent(inEvent);
        if (!HAS_BUTTONS) { this.prepareButtonsForMove(e, inEvent); }
        e.button = -1;
        dispatcher.leaveOut(e);
      }
    },
    cancel: function(inEvent) {
      var e = this.prepareEvent(inEvent);
      dispatcher.cancel(e);
      this.deactivateMouse();
    },
    deactivateMouse: function() {
      pointermap.delete(this.POINTER_ID);
    }
  };

  var captureInfo = dispatcher.captureInfo;
  var findTarget = targeting.findTarget.bind(targeting);
  var allShadows = targeting.allShadows.bind(targeting);
  var pointermap$1 = dispatcher.pointermap;

  // This should be long enough to ignore compat mouse events made by touch
  var DEDUP_TIMEOUT = 2500;
  var CLICK_COUNT_TIMEOUT = 200;
  var ATTRIB = 'touch-action';
  var INSTALLER;

  // handler block for native touch events
  var touchEvents = {
    events: [
      'touchstart',
      'touchmove',
      'touchend',
      'touchcancel'
    ],
    register: function(target) {
      INSTALLER.enableOnSubtree(target);
    },
    unregister: function() {

      // TODO(dfreedman): is it worth it to disconnect the MO?
    },
    elementAdded: function(el) {
      var a = el.getAttribute(ATTRIB);
      var st = this.touchActionToScrollType(a);
      if (st) {
        el._scrollType = st;
        dispatcher.listen(el, this.events);

        // set touch-action on shadows as well
        allShadows(el).forEach(function(s) {
          s._scrollType = st;
          dispatcher.listen(s, this.events);
        }, this);
      }
    },
    elementRemoved: function(el) {
      el._scrollType = undefined;
      dispatcher.unlisten(el, this.events);

      // remove touch-action from shadow
      allShadows(el).forEach(function(s) {
        s._scrollType = undefined;
        dispatcher.unlisten(s, this.events);
      }, this);
    },
    elementChanged: function(el, oldValue) {
      var a = el.getAttribute(ATTRIB);
      var st = this.touchActionToScrollType(a);
      var oldSt = this.touchActionToScrollType(oldValue);

      // simply update scrollType if listeners are already established
      if (st && oldSt) {
        el._scrollType = st;
        allShadows(el).forEach(function(s) {
          s._scrollType = st;
        }, this);
      } else if (oldSt) {
        this.elementRemoved(el);
      } else if (st) {
        this.elementAdded(el);
      }
    },
    scrollTypes: {
      EMITTER: 'none',
      XSCROLLER: 'pan-x',
      YSCROLLER: 'pan-y',
      SCROLLER: /^(?:pan-x pan-y)|(?:pan-y pan-x)|auto$/
    },
    touchActionToScrollType: function(touchAction) {
      var t = touchAction;
      var st = this.scrollTypes;
      if (t === 'none') {
        return 'none';
      } else if (t === st.XSCROLLER) {
        return 'X';
      } else if (t === st.YSCROLLER) {
        return 'Y';
      } else if (st.SCROLLER.exec(t)) {
        return 'XY';
      }
    },
    POINTER_TYPE: 'touch',
    firstTouch: null,
    isPrimaryTouch: function(inTouch) {
      return this.firstTouch === inTouch.identifier;
    },
    setPrimaryTouch: function(inTouch) {

      // set primary touch if there no pointers, or the only pointer is the mouse
      if (pointermap$1.size === 0 || (pointermap$1.size === 1 && pointermap$1.has(1))) {
        this.firstTouch = inTouch.identifier;
        this.firstXY = { X: inTouch.clientX, Y: inTouch.clientY };
        this.scrolling = false;
        this.cancelResetClickCount();
      }
    },
    removePrimaryPointer: function(inPointer) {
      if (inPointer.isPrimary) {
        this.firstTouch = null;
        this.firstXY = null;
        this.resetClickCount();
      }
    },
    clickCount: 0,
    resetId: null,
    resetClickCount: function() {
      var fn = function() {
        this.clickCount = 0;
        this.resetId = null;
      }.bind(this);
      this.resetId = setTimeout(fn, CLICK_COUNT_TIMEOUT);
    },
    cancelResetClickCount: function() {
      if (this.resetId) {
        clearTimeout(this.resetId);
      }
    },
    typeToButtons: function(type) {
      var ret = 0;
      if (type === 'touchstart' || type === 'touchmove') {
        ret = 1;
      }
      return ret;
    },
    touchToPointer: function(inTouch) {
      var cte = this.currentTouchEvent;
      var e = dispatcher.cloneEvent(inTouch);

      // We reserve pointerId 1 for Mouse.
      // Touch identifiers can start at 0.
      // Add 2 to the touch identifier for compatibility.
      var id = e.pointerId = inTouch.identifier + 2;
      e.target = captureInfo[id] || findTarget(e);
      e.bubbles = true;
      e.cancelable = true;
      e.detail = this.clickCount;
      e.button = 0;
      e.buttons = this.typeToButtons(cte.type);
      e.width = (inTouch.radiusX || inTouch.webkitRadiusX || 0) * 2;
      e.height = (inTouch.radiusY || inTouch.webkitRadiusY || 0) * 2;
      e.pressure = inTouch.force || inTouch.webkitForce || 0.5;
      e.isPrimary = this.isPrimaryTouch(inTouch);
      e.pointerType = this.POINTER_TYPE;

      // forward modifier keys
      e.altKey = cte.altKey;
      e.ctrlKey = cte.ctrlKey;
      e.metaKey = cte.metaKey;
      e.shiftKey = cte.shiftKey;

      // forward touch preventDefaults
      var self = this;
      e.preventDefault = function() {
        self.scrolling = false;
        self.firstXY = null;
        cte.preventDefault();
      };
      return e;
    },
    processTouches: function(inEvent, inFunction) {
      var tl = inEvent.changedTouches;
      this.currentTouchEvent = inEvent;
      for (var i = 0, t; i < tl.length; i++) {
        t = tl[i];
        inFunction.call(this, this.touchToPointer(t));
      }
    },

    // For single axis scrollers, determines whether the element should emit
    // pointer events or behave as a scroller
    shouldScroll: function(inEvent) {
      if (this.firstXY) {
        var ret;
        var scrollAxis = inEvent.currentTarget._scrollType;
        if (scrollAxis === 'none') {

          // this element is a touch-action: none, should never scroll
          ret = false;
        } else if (scrollAxis === 'XY') {

          // this element should always scroll
          ret = true;
        } else {
          var t = inEvent.changedTouches[0];

          // check the intended scroll axis, and other axis
          var a = scrollAxis;
          var oa = scrollAxis === 'Y' ? 'X' : 'Y';
          var da = Math.abs(t['client' + a] - this.firstXY[a]);
          var doa = Math.abs(t['client' + oa] - this.firstXY[oa]);

          // if delta in the scroll axis > delta other axis, scroll instead of
          // making events
          ret = da >= doa;
        }
        this.firstXY = null;
        return ret;
      }
    },
    findTouch: function(inTL, inId) {
      for (var i = 0, l = inTL.length, t; i < l && (t = inTL[i]); i++) {
        if (t.identifier === inId) {
          return true;
        }
      }
    },

    // In some instances, a touchstart can happen without a touchend. This
    // leaves the pointermap in a broken state.
    // Therefore, on every touchstart, we remove the touches that did not fire a
    // touchend event.
    // To keep state globally consistent, we fire a
    // pointercancel for this "abandoned" touch
    vacuumTouches: function(inEvent) {
      var tl = inEvent.touches;

      // pointermap.size should be < tl.length here, as the touchstart has not
      // been processed yet.
      if (pointermap$1.size >= tl.length) {
        var d = [];
        pointermap$1.forEach(function(value, key) {

          // Never remove pointerId == 1, which is mouse.
          // Touch identifiers are 2 smaller than their pointerId, which is the
          // index in pointermap.
          if (key !== 1 && !this.findTouch(tl, key - 2)) {
            var p = value.out;
            d.push(p);
          }
        }, this);
        d.forEach(this.cancelOut, this);
      }
    },
    touchstart: function(inEvent) {
      this.vacuumTouches(inEvent);
      this.setPrimaryTouch(inEvent.changedTouches[0]);
      this.dedupSynthMouse(inEvent);
      if (!this.scrolling) {
        this.clickCount++;
        this.processTouches(inEvent, this.overDown);
      }
    },
    overDown: function(inPointer) {
      pointermap$1.set(inPointer.pointerId, {
        target: inPointer.target,
        out: inPointer,
        outTarget: inPointer.target
      });
      dispatcher.enterOver(inPointer);
      dispatcher.down(inPointer);
    },
    touchmove: function(inEvent) {
      if (!this.scrolling) {
        if (this.shouldScroll(inEvent)) {
          this.scrolling = true;
          this.touchcancel(inEvent);
        } else {
          inEvent.preventDefault();
          this.processTouches(inEvent, this.moveOverOut);
        }
      }
    },
    moveOverOut: function(inPointer) {
      var event = inPointer;
      var pointer = pointermap$1.get(event.pointerId);

      // a finger drifted off the screen, ignore it
      if (!pointer) {
        return;
      }
      var outEvent = pointer.out;
      var outTarget = pointer.outTarget;
      dispatcher.move(event);
      if (outEvent && outTarget !== event.target) {
        outEvent.relatedTarget = event.target;
        event.relatedTarget = outTarget;

        // recover from retargeting by shadow
        outEvent.target = outTarget;
        if (event.target) {
          dispatcher.leaveOut(outEvent);
          dispatcher.enterOver(event);
        } else {

          // clean up case when finger leaves the screen
          event.target = outTarget;
          event.relatedTarget = null;
          this.cancelOut(event);
        }
      }
      pointer.out = event;
      pointer.outTarget = event.target;
    },
    touchend: function(inEvent) {
      this.dedupSynthMouse(inEvent);
      this.processTouches(inEvent, this.upOut);
    },
    upOut: function(inPointer) {
      if (!this.scrolling) {
        dispatcher.up(inPointer);
        dispatcher.leaveOut(inPointer);
      }
      this.cleanUpPointer(inPointer);
    },
    touchcancel: function(inEvent) {
      this.processTouches(inEvent, this.cancelOut);
    },
    cancelOut: function(inPointer) {
      dispatcher.cancel(inPointer);
      dispatcher.leaveOut(inPointer);
      this.cleanUpPointer(inPointer);
    },
    cleanUpPointer: function(inPointer) {
      pointermap$1.delete(inPointer.pointerId);
      this.removePrimaryPointer(inPointer);
    },

    // prevent synth mouse events from creating pointer events
    dedupSynthMouse: function(inEvent) {
      var lts = mouseEvents.lastTouches;
      var t = inEvent.changedTouches[0];

      // only the primary finger will synth mouse events
      if (this.isPrimaryTouch(t)) {

        // remember x/y of last touch
        var lt = { x: t.clientX, y: t.clientY };
        lts.push(lt);
        var fn = (function(lts, lt) {
          var i = lts.indexOf(lt);
          if (i > -1) {
            lts.splice(i, 1);
          }
        }).bind(null, lts, lt);
        setTimeout(fn, DEDUP_TIMEOUT);
      }
    }
  };

  INSTALLER = new Installer(touchEvents.elementAdded, touchEvents.elementRemoved,
    touchEvents.elementChanged, touchEvents);

  var pointermap$2 = dispatcher.pointermap;
  var HAS_BITMAP_TYPE = window.MSPointerEvent &&
    typeof window.MSPointerEvent.MSPOINTER_TYPE_MOUSE === 'number';
  var msEvents = {
    events: [
      'MSPointerDown',
      'MSPointerMove',
      'MSPointerUp',
      'MSPointerOut',
      'MSPointerOver',
      'MSPointerCancel',
      'MSGotPointerCapture',
      'MSLostPointerCapture'
    ],
    register: function(target) {
      dispatcher.listen(target, this.events);
    },
    unregister: function(target) {
      dispatcher.unlisten(target, this.events);
    },
    POINTER_TYPES: [
      '',
      'unavailable',
      'touch',
      'pen',
      'mouse'
    ],
    prepareEvent: function(inEvent) {
      var e = inEvent;
      if (HAS_BITMAP_TYPE) {
        e = dispatcher.cloneEvent(inEvent);
        e.pointerType = this.POINTER_TYPES[inEvent.pointerType];
      }
      return e;
    },
    cleanup: function(id) {
      pointermap$2.delete(id);
    },
    MSPointerDown: function(inEvent) {
      pointermap$2.set(inEvent.pointerId, inEvent);
      var e = this.prepareEvent(inEvent);
      dispatcher.down(e);
    },
    MSPointerMove: function(inEvent) {
      var e = this.prepareEvent(inEvent);
      dispatcher.move(e);
    },
    MSPointerUp: function(inEvent) {
      var e = this.prepareEvent(inEvent);
      dispatcher.up(e);
      this.cleanup(inEvent.pointerId);
    },
    MSPointerOut: function(inEvent) {
      var e = this.prepareEvent(inEvent);
      dispatcher.leaveOut(e);
    },
    MSPointerOver: function(inEvent) {
      var e = this.prepareEvent(inEvent);
      dispatcher.enterOver(e);
    },
    MSPointerCancel: function(inEvent) {
      var e = this.prepareEvent(inEvent);
      dispatcher.cancel(e);
      this.cleanup(inEvent.pointerId);
    },
    MSLostPointerCapture: function(inEvent) {
      var e = dispatcher.makeEvent('lostpointercapture', inEvent);
      dispatcher.dispatchEvent(e);
    },
    MSGotPointerCapture: function(inEvent) {
      var e = dispatcher.makeEvent('gotpointercapture', inEvent);
      dispatcher.dispatchEvent(e);
    }
  };

  function applyPolyfill() {

    // only activate if this platform does not have pointer events
    if (!window.PointerEvent) {
      window.PointerEvent = PointerEvent;

      if (window.navigator.msPointerEnabled) {
        var tp = window.navigator.msMaxTouchPoints;
        Object.defineProperty(window.navigator, 'maxTouchPoints', {
          value: tp,
          enumerable: true
        });
        dispatcher.registerSource('ms', msEvents);
      } else {
        Object.defineProperty(window.navigator, 'maxTouchPoints', {
          value: 0,
          enumerable: true
        });
        dispatcher.registerSource('mouse', mouseEvents);
        if (window.ontouchstart !== undefined) {
          dispatcher.registerSource('touch', touchEvents);
        }
      }

      dispatcher.register(document);
    }
  }

  var n = window.navigator;
  var s;
  var r;
  var h;
  function assertActive(id) {
    if (!dispatcher.pointermap.has(id)) {
      var error = new Error('InvalidPointerId');
      error.name = 'InvalidPointerId';
      throw error;
    }
  }
  function assertConnected(elem) {
    var parent = elem.parentNode;
    while (parent && parent !== elem.ownerDocument) {
      parent = parent.parentNode;
    }
    if (!parent) {
      var error = new Error('InvalidStateError');
      error.name = 'InvalidStateError';
      throw error;
    }
  }
  function inActiveButtonState(id) {
    var p = dispatcher.pointermap.get(id);
    return p.buttons !== 0;
  }
  if (n.msPointerEnabled) {
    s = function(pointerId) {
      assertActive(pointerId);
      assertConnected(this);
      if (inActiveButtonState(pointerId)) {
        dispatcher.setCapture(pointerId, this, true);
        this.msSetPointerCapture(pointerId);
      }
    };
    r = function(pointerId) {
      assertActive(pointerId);
      dispatcher.releaseCapture(pointerId, true);
      this.msReleasePointerCapture(pointerId);
    };
  } else {
    s = function setPointerCapture(pointerId) {
      assertActive(pointerId);
      assertConnected(this);
      if (inActiveButtonState(pointerId)) {
        dispatcher.setCapture(pointerId, this);
      }
    };
    r = function releasePointerCapture(pointerId) {
      assertActive(pointerId);
      dispatcher.releaseCapture(pointerId);
    };
  }
  h = function hasPointerCapture(pointerId) {
    return !!dispatcher.captureInfo[pointerId];
  };

  function applyPolyfill$1() {
    if (window.Element && !Element.prototype.setPointerCapture) {
      Object.defineProperties(Element.prototype, {
        'setPointerCapture': {
          value: s
        },
        'releasePointerCapture': {
          value: r
        },
        'hasPointerCapture': {
          value: h
        }
      });
    }
  }

  applyAttributeStyles();
  applyPolyfill();
  applyPolyfill$1();

  var pointerevents = {
    dispatcher: dispatcher,
    Installer: Installer,
    PointerEvent: PointerEvent,
    PointerMap: PointerMap,
    targetFinding: targeting
  };

  return pointerevents;

}));

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(21), __webpack_require__(24)))

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var iterator_1 = __webpack_require__(9);
function isPlugin(value) {
    return Boolean(value) && typeof value.load === 'function';
}
exports.isPlugin = isPlugin;
function useDefault(modules) {
    if (iterator_1.isIterable(modules) || iterator_1.isArrayLike(modules)) {
        var processedModules_1 = [];
        iterator_1.forOf(modules, function (module) {
            processedModules_1.push((module.__esModule && module.default) ? module.default : module);
        });
        return processedModules_1;
    }
    else {
        return (modules.__esModule && modules.default) ? modules.default : modules;
    }
}
exports.useDefault = useDefault;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Promise_1 = __webpack_require__(8);
/**
 * No operation function to replace own once instance is destoryed
 */
function noop() {
    return Promise_1.default.resolve(false);
}
/**
 * No op function used to replace own, once instance has been destoryed
 */
function destroyed() {
    throw new Error('Call made to destroyed method');
}
var Destroyable = (function () {
    /**
     * @constructor
     */
    function Destroyable() {
        this.handles = [];
    }
    /**
     * Register handles for the instance that will be destroyed when `this.destroy` is called
     *
     * @param {Handle} handle The handle to add for the instance
     * @returns {Handle} a handle for the handle, removes the handle for the instance and calls destroy
     */
    Destroyable.prototype.own = function (handle) {
        var handles = this.handles;
        handles.push(handle);
        return {
            destroy: function () {
                handles.splice(handles.indexOf(handle));
                handle.destroy();
            }
        };
    };
    /**
     * Destrpys all handers registered for the instance
     *
     * @returns {Promise<any} a promise that resolves once all handles have been destroyed
     */
    Destroyable.prototype.destroy = function () {
        var _this = this;
        return new Promise_1.default(function (resolve) {
            _this.handles.forEach(function (handle) {
                handle && handle.destroy && handle.destroy();
            });
            _this.destroy = noop;
            _this.own = destroyed;
            resolve(true);
        });
    };
    return Destroyable;
}());
exports.Destroyable = Destroyable;
exports.default = Destroyable;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var WeakMap_1 = __webpack_require__(10);
var lang_1 = __webpack_require__(5);
/**
 * An internal type guard that determines if an value is MapLike or not
 *
 * @param value The value to guard against
 */
function isMapLike(value) {
    return value && typeof value.get === 'function' && typeof value.set === 'function';
}
/**
 * A weak map of dispatchers used to apply the advice
 */
var dispatchAdviceMap = new WeakMap_1.default();
/**
 * A UID for tracking advice ordering
 */
var nextId = 0;
/**
 * Internal function that advises a join point
 *
 * @param dispatcher The current advice dispatcher
 * @param type The type of before or after advice to apply
 * @param advice The advice to apply
 * @param receiveArguments If true, the advice will receive the arguments passed to the join point
 * @return The handle that will remove the advice
 */
function adviseObject(dispatcher, type, advice, receiveArguments) {
    var previous = dispatcher && dispatcher[type];
    var advised = {
        id: nextId++,
        advice: advice,
        receiveArguments: receiveArguments
    };
    if (previous) {
        if (type === 'after') {
            // add the listener to the end of the list
            // note that we had to change this loop a little bit to workaround a bizarre IE10 JIT bug
            while (previous.next && (previous = previous.next)) { }
            previous.next = advised;
            advised.previous = previous;
        }
        else {
            // add to the beginning
            if (dispatcher) {
                dispatcher.before = advised;
            }
            advised.next = previous;
            previous.previous = advised;
        }
    }
    else {
        dispatcher && (dispatcher[type] = advised);
    }
    advice = previous = undefined;
    return lang_1.createHandle(function () {
        var _a = (advised || {}), _b = _a.previous, previous = _b === void 0 ? undefined : _b, _c = _a.next, next = _c === void 0 ? undefined : _c;
        if (dispatcher && !previous && !next) {
            dispatcher[type] = undefined;
        }
        else {
            if (previous) {
                previous.next = next;
            }
            else {
                dispatcher && (dispatcher[type] = next);
            }
            if (next) {
                next.previous = previous;
            }
        }
        if (advised) {
            delete advised.advice;
        }
        dispatcher = advised = undefined;
    });
}
/**
 * Advise a join point (function) with supplied advice
 *
 * @param joinPoint The function to be advised
 * @param type The type of advice to be applied
 * @param advice The advice to apply
 */
function adviseJoinPoint(joinPoint, type, advice) {
    var dispatcher;
    if (type === 'around') {
        dispatcher = getJoinPointDispatcher(advice.apply(this, [joinPoint]));
    }
    else {
        dispatcher = getJoinPointDispatcher(joinPoint);
        // cannot have undefined in map due to code logic, using !
        var adviceMap = dispatchAdviceMap.get(dispatcher);
        if (type === 'before') {
            (adviceMap.before || (adviceMap.before = [])).unshift(advice);
        }
        else {
            (adviceMap.after || (adviceMap.after = [])).push(advice);
        }
    }
    return dispatcher;
}
/**
 * An internal function that resolves or creates the dispatcher for a given join point
 *
 * @param target The target object or map
 * @param methodName The name of the method that the dispatcher should be resolved for
 * @return The dispatcher
 */
function getDispatcherObject(target, methodName) {
    var existing = isMapLike(target) ? target.get(methodName) : target && target[methodName];
    var dispatcher;
    if (!existing || existing.target !== target) {
        /* There is no existing dispatcher, therefore we will create one */
        dispatcher = function () {
            var executionId = nextId;
            var args = arguments;
            var results;
            var before = dispatcher.before;
            while (before) {
                if (before.advice) {
                    args = before.advice.apply(this, args) || args;
                }
                before = before.next;
            }
            if (dispatcher.around && dispatcher.around.advice) {
                results = dispatcher.around.advice(this, args);
            }
            var after = dispatcher.after;
            while (after && after.id !== undefined && after.id < executionId) {
                if (after.advice) {
                    if (after.receiveArguments) {
                        var newResults = after.advice.apply(this, args);
                        results = newResults === undefined ? results : newResults;
                    }
                    else {
                        results = after.advice.call(this, results, args);
                    }
                }
                after = after.next;
            }
            return results;
        };
        if (isMapLike(target)) {
            target.set(methodName, dispatcher);
        }
        else {
            target && (target[methodName] = dispatcher);
        }
        if (existing) {
            dispatcher.around = {
                advice: function (target, args) {
                    return existing.apply(target, args);
                }
            };
        }
        dispatcher.target = target;
    }
    else {
        dispatcher = existing;
    }
    return dispatcher;
}
/**
 * Returns the dispatcher function for a given joinPoint (method/function)
 *
 * @param joinPoint The function that is to be advised
 */
function getJoinPointDispatcher(joinPoint) {
    function dispatcher() {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // cannot have undefined in map due to code logic, using !
        var _a = dispatchAdviceMap.get(dispatcher), before = _a.before, after = _a.after, joinPoint = _a.joinPoint;
        if (before) {
            args = before.reduce(function (previousArgs, advice) {
                var currentArgs = advice.apply(_this, previousArgs);
                return currentArgs || previousArgs;
            }, args);
        }
        var result = joinPoint.apply(this, args);
        if (after) {
            result = after.reduce(function (previousResult, advice) {
                return advice.apply(_this, [previousResult].concat(args));
            }, result);
        }
        return result;
    }
    /* We want to "clone" the advice that has been applied already, if this
     * joinPoint is already advised */
    if (dispatchAdviceMap.has(joinPoint)) {
        // cannot have undefined in map due to code logic, using !
        var adviceMap = dispatchAdviceMap.get(joinPoint);
        var before_1 = adviceMap.before, after_1 = adviceMap.after;
        if (before_1) {
            before_1 = before_1.slice(0);
        }
        if (after_1) {
            after_1 = after_1.slice(0);
        }
        dispatchAdviceMap.set(dispatcher, {
            joinPoint: adviceMap.joinPoint,
            before: before_1,
            after: after_1
        });
    }
    else {
        dispatchAdviceMap.set(dispatcher, { joinPoint: joinPoint });
    }
    return dispatcher;
}
/**
 * Apply advice *after* the supplied joinPoint (function)
 *
 * @param joinPoint A function that should have advice applied to
 * @param advice The after advice
 */
function afterJoinPoint(joinPoint, advice) {
    return adviseJoinPoint(joinPoint, 'after', advice);
}
/**
 * Attaches "after" advice to be executed after the original method.
 * The advising function will receive the original method's return value and arguments object.
 * The value it returns will be returned from the method when it is called (even if the return value is undefined).
 *
 * @param target Object whose method will be aspected
 * @param methodName Name of method to aspect
 * @param advice Advising function which will receive the original method's return value and arguments object
 * @return A handle which will remove the aspect when destroy is called
 */
function afterObject(target, methodName, advice) {
    return adviseObject(getDispatcherObject(target, methodName), 'after', advice);
}
function after(joinPointOrTarget, methodNameOrAdvice, objectAdvice) {
    if (typeof joinPointOrTarget === 'function') {
        return afterJoinPoint(joinPointOrTarget, methodNameOrAdvice);
    }
    else {
        return afterObject(joinPointOrTarget, methodNameOrAdvice, objectAdvice);
    }
}
exports.after = after;
/**
 * Apply advice *around* the supplied joinPoint (function)
 *
 * @param joinPoint A function that should have advice applied to
 * @param advice The around advice
 */
function aroundJoinPoint(joinPoint, advice) {
    return adviseJoinPoint(joinPoint, 'around', advice);
}
exports.aroundJoinPoint = aroundJoinPoint;
/**
 * Attaches "around" advice around the original method.
 *
 * @param target Object whose method will be aspected
 * @param methodName Name of method to aspect
 * @param advice Advising function which will receive the original function
 * @return A handle which will remove the aspect when destroy is called
 */
function aroundObject(target, methodName, advice) {
    var dispatcher = getDispatcherObject(target, methodName);
    var previous = dispatcher.around;
    var advised;
    if (advice) {
        advised = advice(function () {
            if (previous && previous.advice) {
                return previous.advice(this, arguments);
            }
        });
    }
    dispatcher.around = {
        advice: function (target, args) {
            return advised ? advised.apply(target, args) : previous && previous.advice && previous.advice(target, args);
        }
    };
    return lang_1.createHandle(function () {
        advised = dispatcher = undefined;
    });
}
exports.aroundObject = aroundObject;
function around(joinPointOrTarget, methodNameOrAdvice, objectAdvice) {
    if (typeof joinPointOrTarget === 'function') {
        return aroundJoinPoint(joinPointOrTarget, methodNameOrAdvice);
    }
    else {
        return aroundObject(joinPointOrTarget, methodNameOrAdvice, objectAdvice);
    }
}
exports.around = around;
/**
 * Apply advice *before* the supplied joinPoint (function)
 *
 * @param joinPoint A function that should have advice applied to
 * @param advice The before advice
 */
function beforeJoinPoint(joinPoint, advice) {
    return adviseJoinPoint(joinPoint, 'before', advice);
}
exports.beforeJoinPoint = beforeJoinPoint;
/**
 * Attaches "before" advice to be executed before the original method.
 *
 * @param target Object whose method will be aspected
 * @param methodName Name of method to aspect
 * @param advice Advising function which will receive the same arguments as the original, and may return new arguments
 * @return A handle which will remove the aspect when destroy is called
 */
function beforeObject(target, methodName, advice) {
    return adviseObject(getDispatcherObject(target, methodName), 'before', advice);
}
exports.beforeObject = beforeObject;
function before(joinPointOrTarget, methodNameOrAdvice, objectAdvice) {
    if (typeof joinPointOrTarget === 'function') {
        return beforeJoinPoint(joinPointOrTarget, methodNameOrAdvice);
    }
    else {
        return beforeObject(joinPointOrTarget, methodNameOrAdvice, objectAdvice);
    }
}
exports.before = before;
/**
 * Attaches advice to be executed after the original method.
 * The advising function will receive the same arguments as the original method.
 * The value it returns will be returned from the method when it is called *unless* its return value is undefined.
 *
 * @param target Object whose method will be aspected
 * @param methodName Name of method to aspect
 * @param advice Advising function which will receive the same arguments as the original method
 * @return A handle which will remove the aspect when destroy is called
 */
function on(target, methodName, advice) {
    return adviseObject(getDispatcherObject(target, methodName), 'after', advice, true);
}
exports.on = on;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var iterator_1 = __webpack_require__(9);
var Promise_1 = __webpack_require__(8);
__webpack_require__(3);
/**
 * Take a list of values, and if any are ExtensiblePromise objects, insert the wrapped Promise in its place,
 * otherwise use the original object. We use this to help use the native Promise methods like `all` and `race`.
 *
 * @param iterable    The list of objects to iterate over
 * @returns {any[]}    The list of objects, as an array, with ExtensiblePromises being replaced by Promises.
 */
function unwrapPromises(iterable) {
    var unwrapped = [];
    iterator_1.forOf(iterable, function (item) {
        unwrapped.push(item instanceof ExtensiblePromise ? item._promise : item);
    });
    return unwrapped;
}
exports.unwrapPromises = unwrapPromises;
/**
 * An extensible base to allow Promises to be extended in ES5. This class basically wraps a native Promise object,
 * giving an API like a native promise.
 */
var ExtensiblePromise = (function () {
    /**
     * Creates a new extended Promise.
     *
     * @constructor
     *
     * @param executor
     * The executor function is called immediately when the Promise is instantiated. It is responsible for
     * starting the asynchronous operation when it is invoked.
     *
     * The executor must call either the passed `resolve` function when the asynchronous operation has completed
     * successfully, or the `reject` function when the operation fails.
     */
    function ExtensiblePromise(executor) {
        this._promise = new Promise_1.default(executor);
    }
    /**
     * Return a rejected promise wrapped in an ExtensiblePromise
     *
     * @param reason    The reason for the rejection
     * @returns An extensible promise
     */
    ExtensiblePromise.reject = function (reason) {
        return new this(function (resolve, reject) { return reject(reason); });
    };
    ExtensiblePromise.resolve = function (value) {
        return new this(function (resolve, reject) { return resolve(value); });
    };
    /**
     * Return a ExtensiblePromise that resolves when all of the passed in objects have resolved. When used with a key/value
     * pair, the returned promise's argument is a key/value pair of the original keys with their resolved values.
     *
     * @example
     * ExtensiblePromise.all({ one: 1, two: 2 }).then(results => console.log(results));
     * // { one: 1, two: 2 }
     *
     * @param iterable    An iterable of values to resolve, or a key/value pair of values to resolve. These can be Promises, ExtensiblePromises, or other objects
     * @returns An extensible promise
     */
    ExtensiblePromise.all = function (iterable) {
        if (!iterator_1.isArrayLike(iterable) && !iterator_1.isIterable(iterable)) {
            var promiseKeys_1 = Object.keys(iterable);
            return new this(function (resolve, reject) {
                Promise_1.default.all(promiseKeys_1.map(function (key) { return iterable[key]; })).then(function (promiseResults) {
                    var returnValue = {};
                    promiseResults.forEach(function (value, index) {
                        returnValue[promiseKeys_1[index]] = value;
                    });
                    resolve(returnValue);
                }, reject);
            });
        }
        return new this(function (resolve, reject) {
            Promise_1.default.all(unwrapPromises(iterable)).then(resolve, reject);
        });
    };
    /**
     * Return a ExtensiblePromise that resolves when one of the passed in objects have resolved
     *
     * @param iterable    An iterable of values to resolve. These can be Promises, ExtensiblePromises, or other objects
     * @returns {ExtensiblePromise}
     */
    ExtensiblePromise.race = function (iterable) {
        return new this(function (resolve, reject) {
            Promise_1.default.race(unwrapPromises(iterable)).then(resolve, reject);
        });
    };
    /**
     * Adds a callback to be invoked when the wrapped Promise is rejected.
     *
     * @param {Function} onRejected A function to call to handle the error. The parameter to the function will be the caught error.
     *
     * @returns {ExtensiblePromise}
     */
    ExtensiblePromise.prototype.catch = function (onRejected) {
        return this.then(undefined, onRejected);
    };
    /**
     * Adds a callback to be invoked when the wrapped Promise resolves or is rejected.
     *
     * @param {Function} onFulfilled   A function to call to handle the resolution. The paramter to the function will be the resolved value, if any.
     * @param {Function} onRejected    A function to call to handle the error. The parameter to the function will be the caught error.
     *
     * @returns {ExtensiblePromise}
     */
    ExtensiblePromise.prototype.then = function (onFulfilled, onRejected) {
        var _this = this;
        var executor = function (resolve, reject) {
            function handler(rejected, valueOrError) {
                var callback = rejected ? onRejected : onFulfilled;
                if (typeof callback === 'function') {
                    try {
                        resolve(callback(valueOrError));
                    }
                    catch (error) {
                        reject(error);
                    }
                }
                else if (rejected) {
                    reject(valueOrError);
                }
                else {
                    resolve(valueOrError);
                }
            }
            _this._promise.then(handler.bind(null, false), handler.bind(null, true));
        };
        return new this.constructor(executor);
    };
    return ExtensiblePromise;
}());
exports.default = ExtensiblePromise;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ExtensiblePromise_1 = __webpack_require__(41);
/**
 * A type guard that determines if `value` is a `Task`
 * @param value The value to guard
 */
function isTask(value) {
    return Boolean(value && typeof value.cancel === 'function' && Array.isArray(value.children) && isThenable(value));
}
exports.isTask = isTask;
/**
 * Returns true if a given value has a `then` method.
 * @param {any} value The value to check if is Thenable
 * @returns {is Thenable<T>} A type guard if the value is thenable
 */
function isThenable(value) {
    return value && typeof value.then === 'function';
}
exports.isThenable = isThenable;
/**
 * Task is an extension of Promise that supports cancellation and the Task#finally method.
 */
var Task = (function (_super) {
    __extends(Task, _super);
    /**
     * @constructor
     *
     * Create a new task. Executor is run immediately. The canceler will be called when the task is canceled.
     *
     * @param executor Method that initiates some task
     * @param canceler Method to call when the task is canceled
     *
     */
    function Task(executor, canceler) {
        var _this = this;
        // we have to initialize these to avoid a compiler error of using them before they are initialized
        var superResolve = function () { };
        var superReject = function () { };
        _this = _super.call(this, function (resolve, reject) {
            superResolve = resolve;
            superReject = reject;
        }) || this;
        _this._state = 1 /* Pending */;
        _this.children = [];
        _this.canceler = function () {
            if (canceler) {
                canceler();
            }
            _this._cancel();
        };
        // Don't let the Task resolve if it's been canceled
        try {
            executor(function (value) {
                if (_this._state === 3 /* Canceled */) {
                    return;
                }
                _this._state = 0 /* Fulfilled */;
                superResolve(value);
            }, function (reason) {
                if (_this._state === 3 /* Canceled */) {
                    return;
                }
                _this._state = 2 /* Rejected */;
                superReject(reason);
            });
        }
        catch (reason) {
            _this._state = 2 /* Rejected */;
            superReject(reason);
        }
        return _this;
    }
    /**
     * Return a Task that resolves when one of the passed in objects have resolved
     *
     * @param iterable    An iterable of values to resolve. These can be Promises, ExtensiblePromises, or other objects
     * @returns {Task}
     */
    Task.race = function (iterable) {
        return new this(function (resolve, reject) {
            Promise.race(ExtensiblePromise_1.unwrapPromises(iterable)).then(resolve, reject);
        });
    };
    /**
     * Return a rejected promise wrapped in a Task
     *
     * @param reason The reason for the rejection
     * @returns A task
     */
    Task.reject = function (reason) {
        return new this(function (resolve, reject) { return reject(reason); });
    };
    /**
     * Return a resolved task.
     *
     * @param value The value to resolve with
     *
     * @return A task
     */
    Task.resolve = function (value) {
        return new this(function (resolve, reject) { return resolve(value); });
    };
    /**
     * Return a ExtensiblePromise that resolves when all of the passed in objects have resolved. When used with a key/value
     * pair, the returned promise's argument is a key/value pair of the original keys with their resolved values.
     *
     * @example
     * ExtensiblePromise.all({ one: 1, two: 2 }).then(results => console.log(results));
     * // { one: 1, two: 2 }
     *
     * @param iterable    An iterable of values to resolve, or a key/value pair of values to resolve. These can be Promises, ExtensiblePromises, or other objects
     * @returns An extensible promise
     */
    Task.all = function (iterable) {
        return _super.all.call(this, iterable);
    };
    Object.defineProperty(Task.prototype, "state", {
        get: function () {
            return this._state;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Propagates cancellation down through a Task tree. The Task's state is immediately set to canceled. If a Thenable
     * finally task was passed in, it is resolved before calling this Task's finally callback; otherwise, this Task's
     * finally callback is immediately executed. `_cancel` is called for each child Task, passing in the value returned
     * by this Task's finally callback or a Promise chain that will eventually resolve to that value.
     */
    Task.prototype._cancel = function (finallyTask) {
        var _this = this;
        this._state = 3 /* Canceled */;
        var runFinally = function () {
            try {
                return _this._finally();
            }
            catch (error) {
                // Any errors in a `finally` callback are completely ignored during cancelation
            }
        };
        if (this._finally) {
            if (isThenable(finallyTask)) {
                finallyTask = finallyTask.then(runFinally, runFinally);
            }
            else {
                finallyTask = runFinally();
            }
        }
        this.children.forEach(function (child) {
            child._cancel(finallyTask);
        });
    };
    /**
     * Immediately cancels this task if it has not already resolved. This Task and any descendants are synchronously set
     * to the Canceled state and any `finally` added downstream from the canceled Task are invoked.
     */
    Task.prototype.cancel = function () {
        if (this._state === 1 /* Pending */) {
            this.canceler();
        }
    };
    Task.prototype.catch = function (onRejected) {
        return this.then(undefined, onRejected);
    };
    /**
     * Allows for cleanup actions to be performed after resolution of a Promise.
     */
    Task.prototype.finally = function (callback) {
        // if this task is already canceled, call the task
        if (this._state === 3 /* Canceled */) {
            callback();
            return this;
        }
        var task = this.then(function (value) { return Task.resolve(callback()).then(function () { return value; }); }, function (reason) { return Task.resolve(callback()).then(function () {
            throw reason;
        }); });
        // Keep a reference to the callback; it will be called if the Task is canceled
        task._finally = callback;
        return task;
    };
    /**
     * Adds a callback to be invoked when the Task resolves or is rejected.
     *
     * @param onFulfilled   A function to call to handle the resolution. The paramter to the function will be the resolved value, if any.
     * @param onRejected    A function to call to handle the error. The parameter to the function will be the caught error.
     *
     * @returns A task
     */
    Task.prototype.then = function (onFulfilled, onRejected) {
        var _this = this;
        // FIXME
        // tslint:disable-next-line:no-var-keyword
        var task = _super.prototype.then.call(this, 
        // Don't call the onFulfilled or onRejected handlers if this Task is canceled
        function (value) {
            if (task._state === 3 /* Canceled */) {
                return;
            }
            if (onFulfilled) {
                return onFulfilled(value);
            }
            return value;
        }, function (error) {
            if (task._state === 3 /* Canceled */) {
                return;
            }
            if (onRejected) {
                return onRejected(error);
            }
            throw error;
        });
        task.canceler = function () {
            // If task's parent (this) hasn't been resolved, cancel it; downward propagation will start at the first
            // unresolved parent
            if (_this._state === 1 /* Pending */) {
                _this.cancel();
            }
            else {
                task._cancel();
            }
        };
        // Keep track of child Tasks for propogating cancelation back down the chain
        this.children.push(task);
        return task;
    };
    return Task;
}(ExtensiblePromise_1.default));
exports.default = Task;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __modules__ = {"@dojo/shim/global":{"id":0,"lazy":false},"@dojo/widget-core/d":{"id":1,"lazy":false},"@dojo/core/Evented":{"id":2,"lazy":false},"@dojo/shim/Symbol":{"id":3,"lazy":false},"@dojo/core/lang":{"id":5,"lazy":false},"@dojo/shim/Map":{"id":6,"lazy":false},"@dojo/widget-core/WidgetBase":{"id":7,"lazy":false},"@dojo/shim/Promise":{"id":8,"lazy":false},"@dojo/shim/WeakMap":{"id":10,"lazy":false},"@dojo/shim/object":{"id":12,"lazy":false},"@dojo/widget-core/Registry":{"id":13,"lazy":false},"@dojo/core/UrlSearchParams":{"id":15,"lazy":false},"@dojo/routing/RouterInjector":{"id":16,"lazy":false},"@dojo/shim/array":{"id":18,"lazy":false},"@dojo/widget-core/Injector":{"id":20,"lazy":false},"@dojo/widget-core/mixins/Themeable":{"id":22,"lazy":false},"maquette":{"id":23,"lazy":false},"@dojo/core/on":{"id":25,"lazy":false},"@dojo/has/has":{"id":26,"lazy":false},"@dojo/routing/Link":{"id":27,"lazy":false},"@dojo/routing/Outlet":{"id":28,"lazy":false},"pepjs":{"id":36,"lazy":false},"setimmediate":{"id":37,"lazy":false},"@dojo/core/async/Task":{"id":42,"lazy":false},"@dojo/core/load":{"id":43,"lazy":false},"@dojo/widget-core/Container":{"id":51,"lazy":false},"@dojo/widget-core/mixins/Projector":{"id":58,"lazy":false},"src/Context":{"id":61,"lazy":false},"src/registerServiceWorker":{"id":65,"lazy":false},"src/widgets/App":{"id":66,"lazy":false},"src/widgets/Content":{"id":70,"lazy":false}};

Object.defineProperty(exports, "__esModule", { value: true });
var Promise_1 = __webpack_require__(8);
var util_1 = __webpack_require__(38);
exports.isPlugin = util_1.isPlugin;
exports.useDefault = util_1.useDefault;
/**
 * @private
 * Resolves an absolute path from an absolute base path and relative module ID.
 *
 * @param base
 * The absolute base path.
 *
 * @param mid
 * The relative module ID
 *
 * @return
 * The resolved absolute module path.
 */
function resolveRelative(base, mid) {
    var isRelative = mid.match(/^\.+\//);
    var result = base;
    if (isRelative) {
        if (mid.match(/^\.\//)) {
            mid = mid.replace(/\.\//, '');
        }
        var up = mid.match(/\.\.\//g);
        if (up) {
            var chunks = base.split('/');
            if (up.length > chunks.length) {
                throw new Error('Path cannot go beyond root directory.');
            }
            chunks.splice(chunks.length - up.length);
            result = chunks.join('/');
            mid = mid.replace(/\.\.\//g, '');
        }
        mid = result + '/' + mid;
    }
    return mid;
}
/**
 * @private
 * Returns the parent directory for the specified module ID.
 *
 * @param context
 * A function that returns the context module ID.
 *
 * @return
 * The parent directory of the path returned by the context function.
 */
function getBasePath(context) {
    return context().split('/').slice(0, -1).join('/');
}
function load() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var req = __webpack_require__;
    var context = typeof args[0] === 'function' ? args[0] : function () { return ''; };
    var modules = __modules__ || {};
    var base = getBasePath(context);
    var results = args.filter(function (mid) { return typeof mid === 'string'; })
        .map(function (mid) { return resolveRelative(base, mid); })
        .map(function (mid) {
        var _a = mid.split('!'), moduleId = _a[0], pluginResourceId = _a[1];
        var moduleMeta = modules[mid] || modules[moduleId];
        if (!moduleMeta) {
            return Promise_1.default.reject(new Error("Missing module: " + mid));
        }
        if (moduleMeta.lazy) {
            return new Promise_1.default(function (resolve) { return req(moduleMeta.id)(resolve); });
        }
        var module = req(moduleMeta.id);
        var defaultExport = module['default'] || module;
        if (util_1.isPlugin(defaultExport)) {
            pluginResourceId = typeof defaultExport.normalize === 'function' ?
                defaultExport.normalize(pluginResourceId, function (mid) { return resolveRelative(base, mid); }) :
                resolveRelative(base, pluginResourceId);
            return Promise_1.default.resolve(defaultExport.load(pluginResourceId, load));
        }
        return Promise_1.default.resolve(module);
    });
    return Promise_1.default.all(results);
}
exports.default = load;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var UrlSearchParams_1 = __webpack_require__(15);
var WeakMap_1 = __webpack_require__(10);
var interfaces_1 = __webpack_require__(17);
var path_1 = __webpack_require__(29);
var router_1 = __webpack_require__(30);
// Store parent relationships in a separate map, since it's the parent that adds entries to this map. Parents shouldn't
// change the private state of their children.
var parentMap = new WeakMap_1.default();
var noop = function () {
};
function computeDefaultParams(parameters, searchParameters, fromPathname, searchParams) {
    var params = {};
    parameters.forEach(function (name, index) {
        params[name] = fromPathname[index];
    });
    searchParameters.forEach(function (name) {
        var value = searchParams.get(name);
        if (value !== undefined) {
            params[name] = value;
        }
    });
    return params;
}
var Route = (function () {
    function Route(options) {
        if (options === void 0) { options = {}; }
        var exec = options.exec, fallback = options.fallback, guard = options.guard, index = options.index, computeParams = options.params, path = options.path, outlet = options.outlet, _a = options.trailingSlashMustMatch, trailingSlashMustMatch = _a === void 0 ? true : _a, _b = options.defaultParams, defaultParams = _b === void 0 ? {} : _b;
        if (path && /#/.test(path)) {
            throw new TypeError('Path must not contain \'#\'');
        }
        var deconstructedPath = path_1.deconstruct(path || '/');
        var parameters = deconstructedPath.parameters, searchParameters = deconstructedPath.searchParameters;
        if (computeParams) {
            if (parameters.length === 0 && searchParameters.length === 0) {
                throw new TypeError('Can\'t specify params() if path doesn\'t contain any');
            }
            this._computeParams = computeParams;
        }
        else {
            this._computeParams = function (fromPathname, searchParams) {
                return computeDefaultParams(parameters, searchParameters, fromPathname, searchParams);
            };
        }
        this._exec = exec;
        this._fallback = fallback;
        this._guard = guard;
        this._index = index;
        this._path = deconstructedPath;
        this._outlet = outlet;
        this._routes = [];
        this._defaultParams = defaultParams;
        this._trailingSlashMustMatch = trailingSlashMustMatch;
    }
    Object.defineProperty(Route.prototype, "parent", {
        get: function () {
            return parentMap.get(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Route.prototype, "path", {
        get: function () {
            return this._path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Route.prototype, "outlet", {
        get: function () {
            return this._outlet;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Route.prototype, "defaultParams", {
        get: function () {
            return this._defaultParams;
        },
        enumerable: true,
        configurable: true
    });
    Route.prototype.append = function (add) {
        var _this = this;
        var append = function (route) {
            if (router_1.hasBeenAppended(route)) {
                throw new Error('Cannot append route that has already been appended');
            }
            _this._routes.push(route);
            parentMap.set(route, _this);
        };
        if (Array.isArray(add)) {
            for (var _i = 0, add_1 = add; _i < add_1.length; _i++) {
                var route = add_1[_i];
                append(route);
            }
        }
        else {
            append(add);
        }
    };
    Route.prototype.link = function (params) {
        return router_1.findRouter(this).link(this, params);
    };
    Route.prototype.match = function (segments, hasTrailingSlash, searchParams) {
        var result = path_1.match(this._path, segments);
        if (result === null) {
            return null;
        }
        if (!result.hasRemaining && this._trailingSlashMustMatch && this._path.trailingSlash !== hasTrailingSlash) {
            return null;
        }
        // Only extract the search params defined in the route's path.
        var knownSearchParams = this._path.searchParameters.reduce(function (list, name) {
            var value = searchParams.getAll(name);
            if (value !== undefined) {
                list[name] = value;
            }
            return list;
        }, {});
        var params = this._computeParams(result.values, new UrlSearchParams_1.default(knownSearchParams));
        if (params === null) {
            return null;
        }
        return {
            hasRemaining: result.hasRemaining,
            offset: result.offset,
            params: params,
            rawPathValues: result.values,
            rawSearchParams: knownSearchParams
        };
    };
    Route.prototype.select = function (context, segments, hasTrailingSlash, searchParams) {
        var matchResult = this.match(segments, hasTrailingSlash, searchParams);
        // Return early if possible.
        if (!matchResult || matchResult.hasRemaining && this._routes.length === 0 && !this._fallback && !this._outlet) {
            return [];
        }
        var params = matchResult.params;
        if (this._guard) {
            var guardResult = this._guard({ context: context, params: params });
            if (typeof guardResult === 'string') {
                return guardResult;
            }
            if (!guardResult) {
                return [];
            }
        }
        var handler = this._exec;
        var type = interfaces_1.MatchType.PARTIAL;
        var redirect;
        var remainingSelection;
        var selected = false;
        if (matchResult.hasRemaining) {
            // Match the remaining segments. Return a hierarchy if nested routes were selected.
            var remainingSegments_1 = segments.slice(matchResult.offset);
            selected = this._routes.some(function (nested) {
                var nestedResult = nested.select(context, remainingSegments_1, hasTrailingSlash, searchParams);
                if (typeof nestedResult === 'string') {
                    redirect = nestedResult;
                    return true;
                }
                if (nestedResult.length > 0) {
                    remainingSelection = nestedResult;
                    return true;
                }
                return false;
            });
            // No remaining segments matched, only select this route if a fallback handler was specified.
            if (!selected && (this._outlet || this._fallback)) {
                type = interfaces_1.MatchType.ERROR;
                selected = true;
                handler = this._fallback || noop;
            }
        }
        else {
            selected = true;
            type = interfaces_1.MatchType.INDEX;
            if (this._index) {
                handler = this._index;
            }
        }
        if (!selected) {
            return [];
        }
        if (redirect !== undefined) {
            return redirect;
        }
        var rawPathValues = matchResult.rawPathValues, rawSearchParams = matchResult.rawSearchParams;
        var selection = {
            // Use a noop handler if exec was not provided. Something needs to be returned otherwise the router may
            // think no routes were selected.
            handler: handler || noop,
            path: this.path,
            outlet: this.outlet,
            params: params,
            rawPathValues: rawPathValues,
            rawSearchParams: rawSearchParams,
            route: this,
            type: type
        };
        return remainingSelection ? [selection].concat(remainingSelection) : [selection];
    };
    return Route;
}());
exports.Route = Route;
exports.default = Route;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task_1 = __webpack_require__(42);
var Evented_1 = __webpack_require__(2);
var object_1 = __webpack_require__(12);
var on_1 = __webpack_require__(25);
var UrlSearchParams_1 = __webpack_require__(15);
var array_1 = __webpack_require__(18);
var Map_1 = __webpack_require__(6);
var Promise_1 = __webpack_require__(8);
var interfaces_1 = __webpack_require__(17);
var path_1 = __webpack_require__(29);
var router_1 = __webpack_require__(30);
var Route_1 = __webpack_require__(44);
exports.errorOutlet = 'errorOutlet';
// istanbul ignore next
var noop = function () {
};
function createDeferral() {
    // Use noop since TypeScript doesn't know we're assigning cancel and resume in the promise executor.
    var cancel = noop;
    var resume = noop;
    var promise = new Promise_1.default(function (resolve, reject) {
        cancel = reject;
        // Wrap resolve to avoid resume being called with a thenable if type checking is not used.
        resume = function () { return resolve(); };
    });
    return { cancel: cancel, promise: promise, resume: resume };
}
function reportError(router, context, path, error) {
    router.emit({
        context: context,
        error: error,
        path: path,
        target: router,
        type: 'error'
    });
}
function catchRejection(router, context, path, thenable) {
    if (thenable) {
        Promise_1.default.resolve(thenable).catch(function (error) {
            reportError(router, context, path, error);
        });
    }
}
var Router = (function (_super) {
    __extends(Router, _super);
    function Router(options) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, {}) || this;
        _this._outletContextMap = new Map_1.default();
        _this._outletRouteMap = new Map_1.default();
        _this._currentParams = {};
        _this._defaultParams = {};
        var context = options.context, fallback = options.fallback, history = options.history, config = options.config;
        var contextFactory;
        if (typeof context === 'function') {
            contextFactory = context;
        }
        else if (typeof context === 'undefined') {
            contextFactory = function () {
                return {};
            };
        }
        else {
            // Assign to a constant since the context variable may be changed after the function is defined,
            // which would violate its typing.
            var sharedContext_1 = context;
            contextFactory = function () { return sharedContext_1; };
        }
        if (history) {
            _this.own(history);
        }
        _this._contextFactory = contextFactory;
        _this._currentSelection = [];
        _this._dispatchFromStart = false;
        _this._fallback = fallback;
        _this._history = history;
        _this._routes = [];
        _this._started = false;
        if (config) {
            _this.register(config);
        }
        return _this;
    }
    Router.prototype.register = function (config, from) {
        var _this = this;
        if (from === void 0) { from = this; }
        var parent;
        if (typeof from === 'string') {
            parent = this._outletRouteMap.get(from) || this;
        }
        else {
            parent = from;
        }
        config.forEach(function (_a) {
            var defaultRoute = _a.defaultRoute, path = _a.path, _b = _a.outlet, outlet = _b === void 0 ? path : _b, _c = _a.defaultParams, defaultParams = _c === void 0 ? {} : _c, children = _a.children;
            var route = new Route_1.Route({
                path: path,
                outlet: outlet,
                defaultParams: defaultParams
            });
            if (defaultRoute) {
                if (!_this._defaultRoute) {
                    _this._defaultRoute = route;
                }
                else {
                    throw new Error("Default outlet has already been configured. Unable to register outlet " + outlet + " as the default.");
                }
            }
            object_1.assign(_this._defaultParams, defaultParams);
            _this._outletRouteMap.set(outlet, route);
            parent.append(route);
            if (children) {
                _this.register(children, route);
            }
        });
    };
    Router.prototype.append = function (add) {
        var _this = this;
        var append = function (route) {
            if (router_1.hasBeenAppended(route)) {
                throw new Error('Cannot append route that has already been appended');
            }
            _this._routes.push(route);
            router_1.parentMap.set(route, _this);
        };
        if (Array.isArray(add)) {
            for (var _i = 0, add_1 = add; _i < add_1.length; _i++) {
                var route = add_1[_i];
                append(route);
            }
        }
        else {
            append(add);
        }
    };
    Router.prototype.dispatch = function (context, path) {
        var _this = this;
        // Reset, any further calls can't have come from start(). This is necessary since the navstart listeners
        // may call dispatch() themselves.
        var dispatchFromStart = this._dispatchFromStart;
        this._dispatchFromStart = false;
        var canceled = false;
        var cancel = function () {
            canceled = true;
        };
        var deferrals = [];
        this._currentParams = {};
        this._outletContextMap.clear();
        this.emit({
            cancel: cancel,
            defer: function () {
                var _a = createDeferral(), cancel = _a.cancel, promise = _a.promise, resume = _a.resume;
                deferrals.push(promise);
                return { cancel: cancel, resume: resume };
            },
            path: path,
            target: this,
            type: 'navstart'
        });
        // Synchronous cancelation.
        if (canceled) {
            return Task_1.default.resolve({ success: false });
        }
        var _a = path_1.parse(path), searchParams = _a.searchParams, segments = _a.segments, trailingSlash = _a.trailingSlash;
        return new Task_1.default(function (resolve, reject) {
            // *Always* start dispatching in a future turn, even if there were no deferrals.
            Promise_1.default.all(deferrals).then(function () {
                // The cancel() function used in the NavigationStartEvent is reused as the Task canceler.
                // Strictly speaking any navstart listener can cancel the dispatch asynchronously, as long as it
                // manages to do so before this turn.
                if (canceled) {
                    return { success: false };
                }
                var redirect;
                var dispatched = _this._routes.some(function (route) {
                    var result = route.select(context, segments, trailingSlash, searchParams);
                    if (typeof result === 'string') {
                        redirect = result;
                        return true;
                    }
                    if (result.length === 0) {
                        return false;
                    }
                    // Update the selected routes after selecting new routes, but before invoking the handlers.
                    // This means the original value is available to guard() and params() functions, and the
                    // new value when the newly selected routes are executed.
                    //
                    // Reset selected routes if not dispatched from start().
                    _this._currentSelection = dispatchFromStart ? result : [];
                    for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                        var _a = result_1[_i], handler = _a.handler, params = _a.params, outlet = _a.outlet, type = _a.type, route_1 = _a.route;
                        if (outlet) {
                            if (params) {
                                object_1.assign(_this._currentParams, params);
                            }
                            var location_1 = _this.link(route_1, _this._currentParams);
                            _this._outletContextMap.set(outlet, { type: type, params: params, location: location_1 });
                            if (type === interfaces_1.MatchType.ERROR) {
                                _this._outletContextMap.set(exports.errorOutlet, { type: interfaces_1.MatchType.PARTIAL, params: params, location: location_1 });
                            }
                        }
                        catchRejection(_this, context, path, handler({ context: context, params: params }));
                    }
                    return true;
                });
                // Reset the selected routes if the dispatch was unsuccessful, or if a redirect was requested.
                if (!dispatched || redirect !== undefined) {
                    _this._currentSelection = [];
                }
                if (!dispatched) {
                    _this._outletContextMap.set(exports.errorOutlet, {
                        type: interfaces_1.MatchType.PARTIAL,
                        params: {},
                        location: _this._history ? _this._history.current : ''
                    });
                    if (_this._fallback) {
                        catchRejection(_this, context, path, _this._fallback({ context: context, params: {} }));
                        return { success: false };
                    }
                }
                var result = { success: dispatched };
                if (redirect !== undefined) {
                    result.redirect = redirect;
                }
                return result;
            }, 
            // When deferrals are canceled their corresponding promise is rejected. Ensure the task resolves
            // with `false` instead of being rejected too.
            function () {
                return { success: false };
            }).then(resolve, function (error) {
                reportError(_this, context, path, error);
                reject(error);
            });
        }, cancel);
    };
    Router.prototype.link = function (routeOrOutlet, params) {
        var _this = this;
        if (params === void 0) { params = {}; }
        var route;
        if (typeof routeOrOutlet === 'string') {
            var item = this._outletRouteMap.get(routeOrOutlet);
            if (item) {
                route = item;
            }
            else {
                throw new Error("No outlet " + routeOrOutlet + " has been registered");
            }
        }
        else {
            route = routeOrOutlet;
        }
        var hierarchy = [route];
        for (var parent_1 = route.parent; parent_1 !== undefined; parent_1 = parent_1.parent) {
            hierarchy.unshift(parent_1);
        }
        if (!array_1.includes(this._routes, hierarchy[0])) {
            throw new Error('Cannot generate link for route that is not in the hierarchy');
        }
        var addLeadingSlash = hierarchy[0].path.leadingSlash;
        var addTrailingSlash = false;
        var segments = [];
        var searchParams = new UrlSearchParams_1.default();
        hierarchy
            .map(function (route, index) {
            var path = route.path;
            var currentPathValues;
            var currentSearchParams;
            var selection = _this._currentSelection[index];
            if (selection && selection.route === route) {
                currentPathValues = selection.rawPathValues;
                currentSearchParams = selection.rawSearchParams;
            }
            return { currentPathValues: currentPathValues, currentSearchParams: currentSearchParams, path: path, route: route };
        })
            .forEach(function (_a) {
            var currentPathValues = _a.currentPathValues, currentSearchParams = _a.currentSearchParams, path = _a.path, route = _a.route;
            var expectedSegments = path.expectedSegments, searchParameters = path.searchParameters, trailingSlash = path.trailingSlash;
            addTrailingSlash = trailingSlash;
            var namedOffset = 0;
            for (var _i = 0, expectedSegments_1 = expectedSegments; _i < expectedSegments_1.length; _i++) {
                var segment = expectedSegments_1[_i];
                if (path_1.isNamedSegment(segment)) {
                    var value = params[segment.name];
                    if (typeof value === 'string') {
                        segments.push(value);
                    }
                    else if (Array.isArray(value)) {
                        if (value.length === 1) {
                            segments.push(value[0]);
                        }
                        else {
                            throw new TypeError("Cannot generate link, multiple values for parameter '" + segment.name + "'");
                        }
                    }
                    else if (currentPathValues) {
                        segments.push(currentPathValues[namedOffset]);
                    }
                    else if (route.defaultParams[segment.name]) {
                        segments.push(route.defaultParams[segment.name]);
                    }
                    else {
                        throw new Error("Cannot generate link, missing parameter '" + segment.name + "'");
                    }
                    namedOffset++;
                }
                else {
                    segments.push(segment.literal);
                }
            }
            for (var _b = 0, searchParameters_1 = searchParameters; _b < searchParameters_1.length; _b++) {
                var key = searchParameters_1[_b];
                // Don't repeat the search parameter if a previous route in the hierarchy has already appended
                // it.
                if (searchParams.has(key)) {
                    continue;
                }
                var value = params[key] || _this._defaultParams[key];
                if (typeof value === 'string') {
                    searchParams.append(key, value);
                }
                else if (Array.isArray(value)) {
                    for (var _c = 0, value_1 = value; _c < value_1.length; _c++) {
                        var item = value_1[_c];
                        searchParams.append(key, item);
                    }
                }
                else if (currentSearchParams) {
                    for (var _d = 0, _e = currentSearchParams[key]; _d < _e.length; _d++) {
                        var item = _e[_d];
                        searchParams.append(key, item);
                    }
                }
                else {
                    throw new Error("Cannot generate link, missing search parameter '" + key + "'");
                }
            }
        });
        var pathname = segments.join('/');
        if (addLeadingSlash) {
            pathname = '/' + pathname;
        }
        if (addTrailingSlash) {
            pathname += '/';
        }
        if (this._history) {
            pathname = this._history.prefix(pathname);
        }
        var search = searchParams.toString();
        var path = search ? pathname + "?" + search : pathname;
        return path;
    };
    Router.prototype.replacePath = function (path) {
        if (!this._history) {
            throw new Error('Cannot replace path, router was created without a history manager');
        }
        this._history.replace(path);
    };
    Router.prototype.setPath = function (path) {
        if (!this._history) {
            throw new Error('Cannot set path, router was created without a history manager');
        }
        this._history.set(path);
    };
    Router.prototype.hasOutlet = function (outletId) {
        return this._outletContextMap.has(outletId);
    };
    Router.prototype.getOutlet = function (outletId) {
        return this._outletContextMap.get(outletId);
    };
    Router.prototype.getCurrentParams = function () {
        return this._currentParams;
    };
    Router.prototype.start = function (startOptions) {
        var _this = this;
        if (startOptions === void 0) { startOptions = { dispatchCurrent: true }; }
        var dispatchCurrent = startOptions.dispatchCurrent;
        if (this._started) {
            throw new Error('start can only be called once');
        }
        this._started = true;
        if (!this._history) {
            return {
                pause: function () {
                },
                resume: function () {
                },
                destroy: function () {
                }
            };
        }
        var lastDispatch;
        var redirectCount = 0;
        var redirecting = false;
        var dispatch = function (path) {
            if (lastDispatch) {
                lastDispatch.cancel();
            }
            // Reset redirect count if the dispatch was triggered by a non-redirect history change. This allows
            // a route's exec / fallback / index handler to change the history, setting off a new flurry of
            // redirects, without being encumbered by the number of redirects that led to that route being selected.
            if (!redirecting) {
                redirectCount = 0;
            }
            // Signal to dispatch() that it was called from here.
            _this._dispatchFromStart = true;
            var context = _this._contextFactory();
            lastDispatch = _this.dispatch(context, path).then(function (dispatchResult) {
                var _a = dispatchResult || { success: false }, success = _a.success, _b = _a.redirect, redirect = _b === void 0 ? undefined : _b;
                if (success && redirect !== undefined) {
                    redirectCount++;
                    if (redirectCount > 20) {
                        var error = new Error('More than 20 redirects, giving up');
                        reportError(_this, context, path, error);
                        throw error;
                    }
                    redirecting = true;
                    // The history manager MUST emit the change event synchronously.
                    _this._history.replace(redirect);
                    redirecting = false;
                }
                return dispatchResult;
            });
            return lastDispatch;
        };
        var listener = on_1.pausable(this._history, 'change', function (event) {
            dispatch(event.value);
        });
        this.own(listener);
        if (dispatchCurrent) {
            dispatch(this._history.current).then(function (dispatchResult) {
                if (!dispatchResult.success && _this._defaultRoute) {
                    _this.setPath(_this.link(_this._defaultRoute));
                }
            });
        }
        return listener;
    };
    return Router;
}(Evented_1.default));
exports.Router = Router;
exports.default = Router;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = __webpack_require__(0);
var on_1 = __webpack_require__(25);
var HistoryBase_1 = __webpack_require__(47);
var HashHistory = (function (_super) {
    __extends(HashHistory, _super);
    function HashHistory(_a) {
        var window = (_a === void 0 ? { window: global_1.default } : _a).window;
        var _this = _super.call(this, {}) || this;
        var browserLocation = window.location;
        _this._current = browserLocation.hash.slice(1);
        _this._browserLocation = browserLocation;
        _this.own(on_1.default(window, 'hashchange', function () {
            var path = _this._normalizePath(browserLocation.hash);
            // Ignore hashchange for the current path. Guards against browsers firing hashchange when the history
            // manager sets the hash.
            if (path !== _this._current) {
                _this._current = path;
                _this.emit({
                    type: 'change',
                    value: path
                });
            }
        }));
        return _this;
    }
    Object.defineProperty(HashHistory.prototype, "current", {
        get: function () {
            return this._current;
        },
        enumerable: true,
        configurable: true
    });
    HashHistory.prototype.prefix = function (path) {
        if (path[0] !== '#') {
            return "#" + path;
        }
        return path;
    };
    HashHistory.prototype._normalizePath = function (path) {
        if (path[0] === '#') {
            path = path.slice(1);
        }
        return path;
    };
    HashHistory.prototype.set = function (path) {
        path = this._normalizePath(path);
        if (this._current === path) {
            return;
        }
        this._current = path;
        this._browserLocation.hash = this.prefix(path);
        this.emit({
            type: 'change',
            value: path
        });
    };
    HashHistory.prototype.replace = function (path) {
        path = this._normalizePath(path);
        if (this._current === path) {
            return;
        }
        this._current = path;
        var _a = this._browserLocation, pathname = _a.pathname, search = _a.search;
        this._browserLocation.replace(pathname + search + this.prefix(path));
        this.emit({
            type: 'change',
            value: path
        });
    };
    return HashHistory;
}(HistoryBase_1.HistoryBase));
exports.HashHistory = HashHistory;
exports.default = HashHistory;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Evented_1 = __webpack_require__(2);
var HistoryBase = (function (_super) {
    __extends(HistoryBase, _super);
    function HistoryBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HistoryBase;
}(Evented_1.Evented));
exports.HistoryBase = HistoryBase;
exports.default = HistoryBase;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = __webpack_require__(0);
/**
 * The smallest interval between two representable numbers.
 */
exports.EPSILON = 1;
/**
 * The maximum safe integer in JavaScript
 */
exports.MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;
/**
 * The minimum safe integer in JavaScript
 */
exports.MIN_SAFE_INTEGER = -exports.MAX_SAFE_INTEGER;
/**
 * Determines whether the passed value is NaN without coersion.
 *
 * @param value The value to test
 * @return true if the value is NaN, false if it is not
 */
function isNaN(value) {
    return typeof value === 'number' && global_1.default.isNaN(value);
}
exports.isNaN = isNaN;
/**
 * Determines whether the passed value is a finite number without coersion.
 *
 * @param value The value to test
 * @return true if the value is finite, false if it is not
 */
function isFinite(value) {
    return typeof value === 'number' && global_1.default.isFinite(value);
}
exports.isFinite = isFinite;
/**
 * Determines whether the passed value is an integer.
 *
 * @param value The value to test
 * @return true if the value is an integer, false if it is not
 */
function isInteger(value) {
    return isFinite(value) && Math.floor(value) === value;
}
exports.isInteger = isInteger;
/**
 * Determines whether the passed value is an integer that is 'safe,' meaning:
 *   1. it can be expressed as an IEEE-754 double precision number
 *   2. it has a one-to-one mapping to a mathematical integer, meaning its
 *      IEEE-754 representation cannot be the result of rounding any other
 *      integer to fit the IEEE-754 representation
 *
 * @param value The value to test
 * @return true if the value is an integer, false if it is not
 */
function isSafeInteger(value) {
    return isInteger(value) && Math.abs(value) <= exports.MAX_SAFE_INTEGER;
}
exports.isSafeInteger = isSafeInteger;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = __webpack_require__(0);
var has_1 = __webpack_require__(4);
var util_1 = __webpack_require__(19);
/**
 * The minimum location of high surrogates
 */
exports.HIGH_SURROGATE_MIN = 0xD800;
/**
 * The maximum location of high surrogates
 */
exports.HIGH_SURROGATE_MAX = 0xDBFF;
/**
 * The minimum location of low surrogates
 */
exports.LOW_SURROGATE_MIN = 0xDC00;
/**
 * The maximum location of low surrogates
 */
exports.LOW_SURROGATE_MAX = 0xDFFF;
if (has_1.default('es6-string') && has_1.default('es6-string-raw')) {
    exports.fromCodePoint = global_1.default.String.fromCodePoint;
    exports.raw = global_1.default.String.raw;
    exports.codePointAt = util_1.wrapNative(global_1.default.String.prototype.codePointAt);
    exports.endsWith = util_1.wrapNative(global_1.default.String.prototype.endsWith);
    exports.includes = util_1.wrapNative(global_1.default.String.prototype.includes);
    exports.normalize = util_1.wrapNative(global_1.default.String.prototype.normalize);
    exports.repeat = util_1.wrapNative(global_1.default.String.prototype.repeat);
    exports.startsWith = util_1.wrapNative(global_1.default.String.prototype.startsWith);
}
else {
    /**
     * Validates that text is defined, and normalizes position (based on the given default if the input is NaN).
     * Used by startsWith, includes, and endsWith.
     *
     * @return Normalized position.
     */
    var normalizeSubstringArgs_1 = function (name, text, search, position, isEnd) {
        if (isEnd === void 0) { isEnd = false; }
        if (text == null) {
            throw new TypeError('string.' + name + ' requires a valid string to search against.');
        }
        var length = text.length;
        position = position !== position ? (isEnd ? length : 0) : position;
        return [text, String(search), Math.min(Math.max(position, 0), length)];
    };
    exports.fromCodePoint = function fromCodePoint() {
        var codePoints = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            codePoints[_i] = arguments[_i];
        }
        // Adapted from https://github.com/mathiasbynens/String.fromCodePoint
        var length = arguments.length;
        if (!length) {
            return '';
        }
        var fromCharCode = String.fromCharCode;
        var MAX_SIZE = 0x4000;
        var codeUnits = [];
        var index = -1;
        var result = '';
        while (++index < length) {
            var codePoint = Number(arguments[index]);
            // Code points must be finite integers within the valid range
            var isValid = isFinite(codePoint) && Math.floor(codePoint) === codePoint &&
                codePoint >= 0 && codePoint <= 0x10FFFF;
            if (!isValid) {
                throw RangeError('string.fromCodePoint: Invalid code point ' + codePoint);
            }
            if (codePoint <= 0xFFFF) {
                // BMP code point
                codeUnits.push(codePoint);
            }
            else {
                // Astral code point; split in surrogate halves
                // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                codePoint -= 0x10000;
                var highSurrogate = (codePoint >> 10) + exports.HIGH_SURROGATE_MIN;
                var lowSurrogate = (codePoint % 0x400) + exports.LOW_SURROGATE_MIN;
                codeUnits.push(highSurrogate, lowSurrogate);
            }
            if (index + 1 === length || codeUnits.length > MAX_SIZE) {
                result += fromCharCode.apply(null, codeUnits);
                codeUnits.length = 0;
            }
        }
        return result;
    };
    exports.raw = function raw(callSite) {
        var substitutions = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            substitutions[_i - 1] = arguments[_i];
        }
        var rawStrings = callSite.raw;
        var result = '';
        var numSubstitutions = substitutions.length;
        if (callSite == null || callSite.raw == null) {
            throw new TypeError('string.raw requires a valid callSite object with a raw value');
        }
        for (var i = 0, length_1 = rawStrings.length; i < length_1; i++) {
            result += rawStrings[i] + (i < numSubstitutions && i < length_1 - 1 ? substitutions[i] : '');
        }
        return result;
    };
    exports.codePointAt = function codePointAt(text, position) {
        if (position === void 0) { position = 0; }
        // Adapted from https://github.com/mathiasbynens/String.prototype.codePointAt
        if (text == null) {
            throw new TypeError('string.codePointAt requries a valid string.');
        }
        var length = text.length;
        if (position !== position) {
            position = 0;
        }
        if (position < 0 || position >= length) {
            return undefined;
        }
        // Get the first code unit
        var first = text.charCodeAt(position);
        if (first >= exports.HIGH_SURROGATE_MIN && first <= exports.HIGH_SURROGATE_MAX && length > position + 1) {
            // Start of a surrogate pair (high surrogate and there is a next code unit); check for low surrogate
            // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
            var second = text.charCodeAt(position + 1);
            if (second >= exports.LOW_SURROGATE_MIN && second <= exports.LOW_SURROGATE_MAX) {
                return (first - exports.HIGH_SURROGATE_MIN) * 0x400 + second - exports.LOW_SURROGATE_MIN + 0x10000;
            }
        }
        return first;
    };
    exports.endsWith = function endsWith(text, search, endPosition) {
        if (endPosition == null) {
            endPosition = text.length;
        }
        _a = normalizeSubstringArgs_1('endsWith', text, search, endPosition, true), text = _a[0], search = _a[1], endPosition = _a[2];
        var start = endPosition - search.length;
        if (start < 0) {
            return false;
        }
        return text.slice(start, endPosition) === search;
        var _a;
    };
    exports.includes = function includes(text, search, position) {
        if (position === void 0) { position = 0; }
        _a = normalizeSubstringArgs_1('includes', text, search, position), text = _a[0], search = _a[1], position = _a[2];
        return text.indexOf(search, position) !== -1;
        var _a;
    };
    exports.repeat = function repeat(text, count) {
        if (count === void 0) { count = 0; }
        // Adapted from https://github.com/mathiasbynens/String.prototype.repeat
        if (text == null) {
            throw new TypeError('string.repeat requires a valid string.');
        }
        if (count !== count) {
            count = 0;
        }
        if (count < 0 || count === Infinity) {
            throw new RangeError('string.repeat requires a non-negative finite count.');
        }
        var result = '';
        while (count) {
            if (count % 2) {
                result += text;
            }
            if (count > 1) {
                text += text;
            }
            count >>= 1;
        }
        return result;
    };
    exports.startsWith = function startsWith(text, search, position) {
        if (position === void 0) { position = 0; }
        search = String(search);
        _a = normalizeSubstringArgs_1('startsWith', text, search, position), text = _a[0], search = _a[1], position = _a[2];
        var end = position + search.length;
        if (end > text.length) {
            return false;
        }
        return text.slice(position, end) === search;
        var _a;
    };
}
if (has_1.default('es2017-string')) {
    exports.padEnd = util_1.wrapNative(global_1.default.String.prototype.padEnd);
    exports.padStart = util_1.wrapNative(global_1.default.String.prototype.padStart);
}
else {
    exports.padEnd = function padEnd(text, maxLength, fillString) {
        if (fillString === void 0) { fillString = ' '; }
        if (text === null || text === undefined) {
            throw new TypeError('string.repeat requires a valid string.');
        }
        if (maxLength === Infinity) {
            throw new RangeError('string.padEnd requires a non-negative finite count.');
        }
        if (maxLength === null || maxLength === undefined || maxLength < 0) {
            maxLength = 0;
        }
        var strText = String(text);
        var padding = maxLength - strText.length;
        if (padding > 0) {
            strText += exports.repeat(fillString, Math.floor(padding / fillString.length)) + fillString.slice(0, padding % fillString.length);
        }
        return strText;
    };
    exports.padStart = function padStart(text, maxLength, fillString) {
        if (fillString === void 0) { fillString = ' '; }
        if (text === null || text === undefined) {
            throw new TypeError('string.repeat requires a valid string.');
        }
        if (maxLength === Infinity) {
            throw new RangeError('string.padStart requires a non-negative finite count.');
        }
        if (maxLength === null || maxLength === undefined || maxLength < 0) {
            maxLength = 0;
        }
        var strText = String(text);
        var padding = maxLength - strText.length;
        if (padding > 0) {
            strText = exports.repeat(fillString, Math.floor(padding / fillString.length)) + fillString.slice(0, padding % fillString.length) + strText;
        }
        return strText;
    };
}


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(setImmediate) {
Object.defineProperty(exports, "__esModule", { value: true });
var global_1 = __webpack_require__(0);
var has_1 = __webpack_require__(4);
function executeTask(item) {
    if (item && item.isActive && item.callback) {
        item.callback();
    }
}
function getQueueHandle(item, destructor) {
    return {
        destroy: function () {
            this.destroy = function () { };
            item.isActive = false;
            item.callback = null;
            if (destructor) {
                destructor();
            }
        }
    };
}
var checkMicroTaskQueue;
var microTasks;
/**
 * Schedules a callback to the macrotask queue.
 *
 * @param callback the function to be queued and later executed.
 * @returns An object with a `destroy` method that, when called, prevents the registered callback from executing.
 */
exports.queueTask = (function () {
    var destructor;
    var enqueue;
    // Since the IE implementation of `setImmediate` is not flawless, we will test for `postMessage` first.
    if (has_1.default('postmessage')) {
        var queue_1 = [];
        global_1.default.addEventListener('message', function (event) {
            // Confirm that the event was triggered by the current window and by this particular implementation.
            if (event.source === global_1.default && event.data === 'dojo-queue-message') {
                event.stopPropagation();
                if (queue_1.length) {
                    executeTask(queue_1.shift());
                }
            }
        });
        enqueue = function (item) {
            queue_1.push(item);
            global_1.default.postMessage('dojo-queue-message', '*');
        };
    }
    else if (has_1.default('setimmediate')) {
        destructor = global_1.default.clearImmediate;
        enqueue = function (item) {
            return setImmediate(executeTask.bind(null, item));
        };
    }
    else {
        destructor = global_1.default.clearTimeout;
        enqueue = function (item) {
            return setTimeout(executeTask.bind(null, item), 0);
        };
    }
    function queueTask(callback) {
        var item = {
            isActive: true,
            callback: callback
        };
        var id = enqueue(item);
        return getQueueHandle(item, destructor && function () {
            destructor(id);
        });
    }
    ;
    // TODO: Use aspect.before when it is available.
    return has_1.default('microtasks') ? queueTask : function (callback) {
        checkMicroTaskQueue();
        return queueTask(callback);
    };
})();
// When no mechanism for registering microtasks is exposed by the environment, microtasks will
// be queued and then executed in a single macrotask before the other macrotasks are executed.
if (!has_1.default('microtasks')) {
    var isMicroTaskQueued_1 = false;
    microTasks = [];
    checkMicroTaskQueue = function () {
        if (!isMicroTaskQueued_1) {
            isMicroTaskQueued_1 = true;
            exports.queueTask(function () {
                isMicroTaskQueued_1 = false;
                if (microTasks.length) {
                    var item = void 0;
                    while (item = microTasks.shift()) {
                        executeTask(item);
                    }
                }
            });
        }
    };
}
/**
 * Schedules an animation task with `window.requestAnimationFrame` if it exists, or with `queueTask` otherwise.
 *
 * Since requestAnimationFrame's behavior does not match that expected from `queueTask`, it is not used there.
 * However, at times it makes more sense to delegate to requestAnimationFrame; hence the following method.
 *
 * @param callback the function to be queued and later executed.
 * @returns An object with a `destroy` method that, when called, prevents the registered callback from executing.
 */
exports.queueAnimationTask = (function () {
    if (!has_1.default('raf')) {
        return exports.queueTask;
    }
    function queueAnimationTask(callback) {
        var item = {
            isActive: true,
            callback: callback
        };
        var rafId = requestAnimationFrame(executeTask.bind(null, item));
        return getQueueHandle(item, function () {
            cancelAnimationFrame(rafId);
        });
    }
    // TODO: Use aspect.before when it is available.
    return has_1.default('microtasks') ? queueAnimationTask : function (callback) {
        checkMicroTaskQueue();
        return queueAnimationTask(callback);
    };
})();
/**
 * Schedules a callback to the microtask queue.
 *
 * Any callbacks registered with `queueMicroTask` will be executed before the next macrotask. If no native
 * mechanism for scheduling macrotasks is exposed, then any callbacks will be fired before any macrotask
 * registered with `queueTask` or `queueAnimationTask`.
 *
 * @param callback the function to be queued and later executed.
 * @returns An object with a `destroy` method that, when called, prevents the registered callback from executing.
 */
exports.queueMicroTask = (function () {
    var enqueue;
    if (has_1.default('host-node')) {
        enqueue = function (item) {
            global_1.default.process.nextTick(executeTask.bind(null, item));
        };
    }
    else if (has_1.default('es6-promise')) {
        enqueue = function (item) {
            global_1.default.Promise.resolve(item).then(executeTask);
        };
    }
    else if (has_1.default('dom-mutationobserver')) {
        /* tslint:disable-next-line:variable-name */
        var HostMutationObserver = global_1.default.MutationObserver || global_1.default.WebKitMutationObserver;
        var node_1 = document.createElement('div');
        var queue_2 = [];
        var observer = new HostMutationObserver(function () {
            while (queue_2.length > 0) {
                var item = queue_2.shift();
                if (item && item.isActive && item.callback) {
                    item.callback();
                }
            }
        });
        observer.observe(node_1, { attributes: true });
        enqueue = function (item) {
            queue_2.push(item);
            node_1.setAttribute('queueStatus', '1');
        };
    }
    else {
        enqueue = function (item) {
            checkMicroTaskQueue();
            microTasks.push(item);
        };
    }
    return function (callback) {
        var item = {
            isActive: true,
            callback: callback
        };
        enqueue(item);
        return getQueueHandle(item);
    };
})();

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60).setImmediate))

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WidgetBase_1 = __webpack_require__(7);
var inject_1 = __webpack_require__(14);
var d_1 = __webpack_require__(1);
function Container(component, name, _a) {
    var getProperties = _a.getProperties;
    var WidgetContainer = (function (_super) {
        __extends(WidgetContainer, _super);
        function WidgetContainer() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        WidgetContainer.prototype.__setProperties__ = function (properties) {
            _super.prototype.__setProperties__.call(this, properties);
            this.invalidate();
        };
        WidgetContainer.prototype.render = function () {
            return d_1.w(component, this.properties, this.children);
        };
        WidgetContainer = __decorate([
            inject_1.inject({ name: name, getProperties: getProperties })
        ], WidgetContainer);
        return WidgetContainer;
    }(WidgetBase_1.WidgetBase));
    return WidgetContainer;
}
exports.Container = Container;
exports.default = Container;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Evented_1 = __webpack_require__(2);
var Map_1 = __webpack_require__(6);
/**
 * Enum to identify the type of event.
 * Listening to 'Projector' will notify when projector is created or updated
 * Listening to 'Widget' will notifiy when widget root is created or updated
 */
var NodeEventType;
(function (NodeEventType) {
    NodeEventType["Projector"] = "Projector";
    NodeEventType["Widget"] = "Widget";
})(NodeEventType = exports.NodeEventType || (exports.NodeEventType = {}));
var NodeHandler = (function (_super) {
    __extends(NodeHandler, _super);
    function NodeHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._nodeMap = new Map_1.default();
        return _this;
    }
    NodeHandler.prototype.get = function (key) {
        return this._nodeMap.get(key);
    };
    NodeHandler.prototype.has = function (key) {
        return this._nodeMap.has(key);
    };
    NodeHandler.prototype.add = function (element, properties) {
        var key = String(properties.key);
        this._nodeMap.set(key, element);
        this.emit({ type: key });
    };
    NodeHandler.prototype.addRoot = function (element, properties) {
        if (properties && properties.key) {
            this.add(element, properties);
        }
        this.emit({ type: NodeEventType.Widget });
    };
    NodeHandler.prototype.addProjector = function () {
        this.emit({ type: NodeEventType.Projector });
    };
    NodeHandler.prototype.clear = function () {
        this._nodeMap.clear();
    };
    return NodeHandler;
}(Evented_1.Evented));
exports.NodeHandler = NodeHandler;
exports.default = NodeHandler;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Map_1 = __webpack_require__(6);
var Evented_1 = __webpack_require__(2);
var Registry_1 = __webpack_require__(13);
var RegistryHandler = (function (_super) {
    __extends(RegistryHandler, _super);
    function RegistryHandler() {
        var _this = _super.call(this) || this;
        _this._registry = new Registry_1.Registry();
        _this._registryWidgetLabelMap = new Map_1.Map();
        _this._registryInjectorLabelMap = new Map_1.Map();
        _this.own(_this._registry);
        return _this;
    }
    Object.defineProperty(RegistryHandler.prototype, "base", {
        set: function (baseRegistry) {
            this._registryWidgetLabelMap.delete(this._baseRegistry);
            this._registryInjectorLabelMap.delete(this._baseRegistry);
            this._baseRegistry = baseRegistry;
        },
        enumerable: true,
        configurable: true
    });
    RegistryHandler.prototype.define = function (label, widget) {
        this._registry.define(label, widget);
    };
    RegistryHandler.prototype.defineInjector = function (label, injector) {
        this._registry.defineInjector(label, injector);
    };
    RegistryHandler.prototype.has = function (label) {
        return this._registry.has(label) || this._baseRegistry.has(label);
    };
    RegistryHandler.prototype.hasInjector = function (label) {
        return this._registry.hasInjector(label) || this._baseRegistry.hasInjector(label);
    };
    RegistryHandler.prototype.get = function (label, globalPrecedence) {
        if (globalPrecedence === void 0) { globalPrecedence = false; }
        return this._get(label, globalPrecedence, 'get', this._registryWidgetLabelMap);
    };
    RegistryHandler.prototype.getInjector = function (label, globalPrecedence) {
        if (globalPrecedence === void 0) { globalPrecedence = false; }
        return this._get(label, globalPrecedence, 'getInjector', this._registryInjectorLabelMap);
    };
    RegistryHandler.prototype._get = function (label, globalPrecedence, getFunctionName, labelMap) {
        var _this = this;
        var registries = globalPrecedence ? [this._baseRegistry, this._registry] : [this._registry, this._baseRegistry];
        for (var i = 0; i < registries.length; i++) {
            var registry = registries[i];
            if (!registry) {
                continue;
            }
            var item = registry[getFunctionName](label);
            var registeredLabels = labelMap.get(registry) || [];
            if (item) {
                return item;
            }
            else if (registeredLabels.indexOf(label) === -1) {
                var handle = registry.on(label, function (event) {
                    if (event.action === 'loaded' && _this[getFunctionName](label, globalPrecedence) === event.item) {
                        _this.emit({ type: 'invalidate' });
                    }
                });
                this.own(handle);
                labelMap.set(registry, registeredLabels.concat([label]));
            }
        }
        return null;
    };
    return RegistryHandler;
}(Evented_1.Evented));
exports.RegistryHandler = RegistryHandler;
exports.default = RegistryHandler;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var browserSpecificTransitionEndEventName = '';
var browserSpecificAnimationEndEventName = '';
function determineBrowserStyleNames(element) {
    if ('WebkitTransition' in element.style) {
        browserSpecificTransitionEndEventName = 'webkitTransitionEnd';
        browserSpecificAnimationEndEventName = 'webkitAnimationEnd';
    }
    else if (('transition' in element.style) || ('MozTransition' in element.style)) {
        browserSpecificTransitionEndEventName = 'transitionend';
        browserSpecificAnimationEndEventName = 'animationend';
    }
    else {
        throw new Error('Your browser is not supported');
    }
}
function initialize(element) {
    if (browserSpecificAnimationEndEventName === '') {
        determineBrowserStyleNames(element);
    }
}
function runAndCleanUp(element, startAnimation, finishAnimation) {
    initialize(element);
    var finished = false;
    var transitionEnd = function () {
        if (!finished) {
            finished = true;
            element.removeEventListener(browserSpecificTransitionEndEventName, transitionEnd);
            element.removeEventListener(browserSpecificAnimationEndEventName, transitionEnd);
            finishAnimation();
        }
    };
    startAnimation();
    element.addEventListener(browserSpecificAnimationEndEventName, transitionEnd);
    element.addEventListener(browserSpecificTransitionEndEventName, transitionEnd);
}
function exit(node, properties, exitAnimation, removeNode) {
    var activeClass = properties.exitAnimationActive || exitAnimation + "-active";
    runAndCleanUp(node, function () {
        node.classList.add(exitAnimation);
        requestAnimationFrame(function () {
            node.classList.add(activeClass);
        });
    }, function () {
        removeNode();
    });
}
function enter(node, properties, enterAnimation) {
    var activeClass = properties.enterAnimationActive || enterAnimation + "-active";
    runAndCleanUp(node, function () {
        node.classList.add(enterAnimation);
        requestAnimationFrame(function () {
            node.classList.add(activeClass);
        });
    }, function () {
        node.classList.remove(enterAnimation);
        node.classList.remove(activeClass);
    });
}
exports.default = {
    enter: enter,
    exit: exit
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var handleDecorator_1 = __webpack_require__(11);
function afterRender(method) {
    return handleDecorator_1.handleDecorator(function (target, propertyKey) {
        target.addDecorator('afterRender', propertyKey ? target[propertyKey] : method);
    });
}
exports.afterRender = afterRender;
exports.default = afterRender;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var handleDecorator_1 = __webpack_require__(11);
function beforeProperties(method) {
    return handleDecorator_1.handleDecorator(function (target, propertyKey) {
        target.addDecorator('beforeProperties', propertyKey ? target[propertyKey] : method);
    });
}
exports.beforeProperties = beforeProperties;
exports.default = beforeProperties;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var handleDecorator_1 = __webpack_require__(11);
/**
 * Decorator that can be used to register a function as a specific property diff
 *
 * @param propertyName  The name of the property of which the diff function is applied
 * @param diffType      The diff type, default is DiffType.AUTO.
 * @param diffFunction  A diff function to run if diffType if DiffType.CUSTOM
 */
function diffProperty(propertyName, diffFunction, reactionFunction) {
    return handleDecorator_1.handleDecorator(function (target, propertyKey) {
        target.addDecorator("diffProperty:" + propertyName, diffFunction.bind(null));
        target.addDecorator('registeredDiffProperty', propertyName);
        if (reactionFunction || propertyKey) {
            target.addDecorator('diffReaction', {
                propertyName: propertyName,
                reaction: propertyKey ? target[propertyKey] : reactionFunction
            });
        }
    });
}
exports.diffProperty = diffProperty;
exports.default = diffProperty;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lang_1 = __webpack_require__(5);
var global_1 = __webpack_require__(0);
var lang_2 = __webpack_require__(5);
var Evented_1 = __webpack_require__(2);
var maquette_1 = __webpack_require__(23);
__webpack_require__(36);
var cssTransitions_1 = __webpack_require__(54);
var afterRender_1 = __webpack_require__(55);
var d_1 = __webpack_require__(1);
var eventHandlerInterceptor_1 = __webpack_require__(59);
/**
 * Represents the attach state of the projector
 */
var ProjectorAttachState;
(function (ProjectorAttachState) {
    ProjectorAttachState[ProjectorAttachState["Attached"] = 1] = "Attached";
    ProjectorAttachState[ProjectorAttachState["Detached"] = 2] = "Detached";
})(ProjectorAttachState = exports.ProjectorAttachState || (exports.ProjectorAttachState = {}));
/**
 * Attach type for the projector
 */
var AttachType;
(function (AttachType) {
    AttachType[AttachType["Append"] = 1] = "Append";
    AttachType[AttachType["Merge"] = 2] = "Merge";
    AttachType[AttachType["Replace"] = 3] = "Replace";
})(AttachType = exports.AttachType || (exports.AttachType = {}));
/**
 * Internal function that maps existing DOM Elements to virtual DOM nodes.
 *
 * The function does not presume DOM will be there.  It does assume that if a DOM `Element` exists that the `VNode`s are in
 * the same DOM order as the `Element`s.  If a DOM Element does not exist, it will set the `vnode.domNode` to `null` and
 * not descend further into the `VNode` children which will cause the maquette projection to create the Element anew.
 * @param vnode The virtual DOM node
 * @param domNode The Element, if any, to set on the virtual DOM node
 */
function setDomNodes(vnode, domNode) {
    if (domNode === void 0) { domNode = null; }
    vnode.domNode = domNode;
    if (vnode.children && domNode) {
        vnode.children.forEach(function (child, i) { return setDomNodes(child, domNode.children[i]); });
    }
}
function ProjectorMixin(Base) {
    var Projector = (function (_super) {
        __extends(Projector, _super);
        function Projector() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this._async = true;
            var nodeEvent = new Evented_1.Evented();
            _this.own(nodeEvent);
            _this._projectionOptions = {
                transitions: cssTransitions_1.default,
                eventHandlerInterceptor: eventHandlerInterceptor_1.default.bind(_this),
                nodeEvent: nodeEvent
            };
            _this._boundDoRender = _this._doRender.bind(_this);
            _this._boundRender = _this.__render__.bind(_this);
            _this.own(_this.on('invalidated', function () {
                _this.scheduleRender();
            }));
            _this.root = document.body;
            _this.projectorState = ProjectorAttachState.Detached;
            return _this;
        }
        Projector.prototype.append = function (root) {
            var options = {
                type: AttachType.Append,
                root: root
            };
            return this._attach(options);
        };
        Projector.prototype.merge = function (root) {
            var options = {
                type: AttachType.Merge,
                root: root
            };
            return this._attach(options);
        };
        Projector.prototype.replace = function (root) {
            var options = {
                type: AttachType.Replace,
                root: root
            };
            return this._attach(options);
        };
        Projector.prototype.pause = function () {
            if (this._scheduled) {
                global_1.default.cancelAnimationFrame(this._scheduled);
                this._scheduled = undefined;
            }
            this._paused = true;
        };
        Projector.prototype.resume = function () {
            this._paused = false;
            this.scheduleRender();
        };
        Projector.prototype.scheduleRender = function () {
            if (this.projectorState === ProjectorAttachState.Attached && !this._scheduled && !this._paused) {
                if (this._async) {
                    this._scheduled = global_1.default.requestAnimationFrame(this._boundDoRender);
                }
                else {
                    this._boundDoRender();
                }
            }
        };
        Object.defineProperty(Projector.prototype, "root", {
            get: function () {
                return this._root;
            },
            set: function (root) {
                if (this.projectorState === ProjectorAttachState.Attached) {
                    throw new Error('Projector already attached, cannot change root element');
                }
                this._root = root;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Projector.prototype, "async", {
            get: function () {
                return this._async;
            },
            set: function (async) {
                if (this.projectorState === ProjectorAttachState.Attached) {
                    throw new Error('Projector already attached, cannot change async mode');
                }
                this._async = async;
            },
            enumerable: true,
            configurable: true
        });
        Projector.prototype.sandbox = function (doc) {
            var _this = this;
            if (doc === void 0) { doc = document; }
            if (this.projectorState === ProjectorAttachState.Attached) {
                throw new Error('Projector already attached, cannot create sandbox');
            }
            this._async = false;
            var previousRoot = this.root;
            /* free up the document fragment for GC */
            this.own(lang_2.createHandle(function () {
                _this._root = previousRoot;
            }));
            return this._attach({
                /* DocumentFragment is not assignable to Element, but provides everything needed to work */
                root: doc.createDocumentFragment(),
                type: AttachType.Append
            });
        };
        Projector.prototype.setChildren = function (children) {
            this._projectorChildren = children.slice();
            _super.prototype.__setChildren__.call(this, children);
            this.emit({ type: 'invalidated' });
        };
        Projector.prototype.setProperties = function (properties) {
            if (this._projectorProperties && this._projectorProperties.registry !== properties.registry) {
                if (this._projectorProperties.registry) {
                    this._projectorProperties.registry.destroy();
                }
                if (properties.registry) {
                    this.own(properties.registry);
                }
            }
            this._projectorProperties = lang_1.assign({}, properties);
            _super.prototype.__setCoreProperties__.call(this, { bind: this, baseRegistry: properties.registry });
            _super.prototype.__setProperties__.call(this, properties);
            this.emit({ type: 'invalidated' });
        };
        Projector.prototype.toHtml = function () {
            if (this.projectorState !== ProjectorAttachState.Attached || !this._projection) {
                throw new Error('Projector is not attached, cannot return an HTML string of projection.');
            }
            return this._projection.domNode.outerHTML;
        };
        Projector.prototype.afterRender = function (result) {
            var node = result;
            if (Array.isArray(result) || typeof result === 'string' || result === null || result === undefined) {
                if (!this._rootTagName) {
                    this._rootTagName = 'span';
                }
                node = d_1.v(this._rootTagName);
                node.children = Array.isArray(result) ? result : [result];
            }
            else if (d_1.isHNode(node) && !this._rootTagName) {
                this._rootTagName = node.tag;
            }
            if (d_1.isHNode(node)) {
                if (this._rootTagName !== node.tag) {
                    if (this._attachType === AttachType.Merge) {
                        node.tag = this._rootTagName;
                    }
                    else {
                        node = d_1.v(this._rootTagName);
                        node.children = Array.isArray(result) ? result : [result];
                    }
                }
            }
            return node;
        };
        Projector.prototype.__render__ = function () {
            if (this._projectorChildren) {
                this.setChildren(this._projectorChildren);
            }
            if (this._projectorProperties) {
                this.setProperties(this._projectorProperties);
            }
            return _super.prototype.__render__.call(this);
        };
        Projector.prototype.invalidate = function () {
            _super.prototype.invalidate.call(this);
        };
        Projector.prototype._doRender = function () {
            this._scheduled = undefined;
            if (this._projection) {
                this._projection.update(this._boundRender());
                this._projectionOptions.nodeEvent.emit({ type: 'rendered' });
            }
        };
        Projector.prototype._attach = function (_a) {
            var _this = this;
            var type = _a.type, root = _a.root;
            this._attachType = type;
            if (root) {
                this.root = root;
            }
            if (this.projectorState === ProjectorAttachState.Attached) {
                return this._attachHandle;
            }
            this.projectorState = ProjectorAttachState.Attached;
            this._attachHandle = this.own({
                destroy: function () {
                    if (_this.projectorState === ProjectorAttachState.Attached) {
                        _this.pause();
                        _this._projection = undefined;
                        _this.projectorState = ProjectorAttachState.Detached;
                    }
                    _this._attachHandle = { destroy: function () { } };
                }
            });
            switch (type) {
                case AttachType.Append:
                    this._projection = maquette_1.dom.append(this.root, this._boundRender(), this._projectionOptions);
                    break;
                case AttachType.Merge:
                    this._rootTagName = this._root.tagName.toLowerCase();
                    var vnode = this._boundRender();
                    setDomNodes(vnode, this.root);
                    this._projection = maquette_1.dom.merge(this.root, vnode, this._projectionOptions);
                    break;
                case AttachType.Replace:
                    this._projection = maquette_1.dom.replace(this.root, this._boundRender(), this._projectionOptions);
                    break;
            }
            this._projectionOptions.nodeEvent.emit({ type: 'rendered' });
            return this._attachHandle;
        };
        __decorate([
            afterRender_1.afterRender(),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Object]),
            __metadata("design:returntype", void 0)
        ], Projector.prototype, "afterRender", null);
        return Projector;
    }(Base));
    return Projector;
}
exports.ProjectorMixin = ProjectorMixin;
exports.default = ProjectorMixin;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var array_1 = __webpack_require__(18);
exports.eventHandlers = [
    'onblur',
    'onchange',
    'onclick',
    'ondblclick',
    'onfocus',
    'oninput',
    'onkeydown',
    'onkeypress',
    'onkeyup',
    'onload',
    'onmousedown',
    'onmouseenter',
    'onmouseleave',
    'onmousemove',
    'onmouseout',
    'onmouseover',
    'onmouseup',
    'onmousewheel',
    'onscroll',
    'onsubmit'
];
function eventHandlerInterceptor(propertyName, eventHandler, domNode, properties) {
    var _this = this;
    if (array_1.includes(exports.eventHandlers, propertyName)) {
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return eventHandler.apply(properties.bind || this, args);
        };
    }
    else {
        // remove "on" from event name
        var eventName = propertyName.substr(2);
        domNode.addEventListener(eventName, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            eventHandler.apply(properties.bind || _this, args);
        });
    }
}
exports.default = eventHandlerInterceptor;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(37);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Injector_1 = __webpack_require__(20);
var Context = (function (_super) {
    __extends(Context, _super);
    function Context() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._data = [];
        return _this;
    }
    Context.prototype.fetchStories = function (category) {
        return __awaiter(this, void 0, void 0, function () {
            var catKey, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        catKey = category === 'top' ? 'news' : category === 'new' ? 'newest' : category;
                        _a = this;
                        return [4 /*yield*/, fetch("https://api.hackerwebapp.com/" + catKey + "?page=1").then(function (response) { return response.json(); })];
                    case 1:
                        _a._data = _b.sent();
                        this._category = category;
                        this.emit({ type: 'invalidate' });
                        return [2 /*return*/];
                }
            });
        });
    };
    Context.prototype.get = function () {
        return this;
    };
    Object.defineProperty(Context.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Context.prototype, "category", {
        get: function () {
            return this._category;
        },
        enumerable: true,
        configurable: true
    });
    return Context;
}(Injector_1.Injector));
exports.Context = Context;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Container_1 = __webpack_require__(51);
function getProperties(context, properties) {
    var _a = properties.category, category = _a === void 0 ? 'top' : _a;
    if (category !== context.category) {
        context.fetchStories(category);
    }
    return {
        data: context.data
    };
}
exports.ContentContainer = Container_1.Container('content', 'state', { getProperties: getProperties });


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Outlet_1 = __webpack_require__(28);
var ContentContainer_1 = __webpack_require__(62);
exports.ContentOutlet = Outlet_1.Outlet(ContentContainer_1.ContentContainer, 'menu', function (_a) {
    var params = _a.params;
    return { category: params.category };
});
exports.default = exports.ContentOutlet;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Outlet_1 = __webpack_require__(28);
var Menu_1 = __webpack_require__(67);
exports.MenuOutlet = Outlet_1.Outlet(Menu_1.Menu, 'menu', function (_a) {
    var params = _a.params;
    return { category: params.category };
});
exports.DefaultMenuOutlet = Outlet_1.Outlet({ index: Menu_1.Menu }, 'user', function (_a) {
    var params = _a.params;
    return { category: params.category };
});
exports.OtherMenuOutlet = Outlet_1.Outlet({ index: Menu_1.Menu }, 'home', function () {
    return { category: 'top' };
});
exports.default = exports.MenuOutlet;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            var serviceWorkerUrl = '/dojo-2-hn/dist/service-worker.js';
            navigator.serviceWorker
                .register(serviceWorkerUrl)
                .then(function (registration) {
                registration.onupdatefound = function () {
                    var installingWorker = registration.installing;
                    if (installingWorker) {
                        installingWorker.onstatechange = function () {
                            if (installingWorker.state === 'installed') {
                                if (navigator.serviceWorker.controller) {
                                    console.log('New content is available; please refresh.');
                                }
                                else {
                                    console.log('Content is cached for offline use.');
                                }
                            }
                        };
                    }
                };
            })
                .catch(function (error) {
                console.error('Error during service worker registration:', error);
            });
        });
    }
}
exports.default = registerServiceWorker;
function unregister() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(function (registration) {
            registration.unregister();
        });
    }
}
exports.unregister = unregister;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WidgetBase_1 = __webpack_require__(7);
var d_1 = __webpack_require__(1);
var MenuOutlet_1 = __webpack_require__(64);
var ContentOutlet_1 = __webpack_require__(63);
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return d_1.v('div', [
            d_1.w(MenuOutlet_1.MenuOutlet, {}),
            d_1.w(MenuOutlet_1.DefaultMenuOutlet, {}),
            d_1.w(MenuOutlet_1.OtherMenuOutlet, {}),
            d_1.w(ContentOutlet_1.ContentOutlet, {})
        ]);
    };
    return App;
}(WidgetBase_1.WidgetBase));
exports.App = App;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WidgetBase_1 = __webpack_require__(7);
var d_1 = __webpack_require__(1);
var Themeable_1 = __webpack_require__(22);
var Link_1 = __webpack_require__(27);
var MenuItem_1 = __webpack_require__(68);
var css = __webpack_require__(34);
var categories = ['top', 'new', 'show', 'ask', 'jobs'];
var Menu = (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Menu.prototype.render = function () {
        var _a = this.properties.category, category = _a === void 0 ? '' : _a;
        return d_1.v('nav', { classes: this.classes(css.root) }, [
            d_1.w(Link_1.Link, { to: 'menu', params: { category: 'top' }, classes: this.classes(css.home) }, [
                d_1.v('img', { classes: this.classes(css.logo), src: './img/logo2.svg' })
            ]),
            d_1.v('ol', { classes: this.classes(css.menuContainer) }, categories.map(function (cat) {
                return d_1.w(MenuItem_1.MenuItem, {
                    key: cat,
                    selected: cat === category,
                    cat: cat
                }, [cat]);
            }).slice())
        ]);
    };
    Menu = __decorate([
        Themeable_1.theme(css)
    ], Menu);
    return Menu;
}(Themeable_1.ThemeableMixin(WidgetBase_1.WidgetBase)));
exports.Menu = Menu;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WidgetBase_1 = __webpack_require__(7);
var d_1 = __webpack_require__(1);
var Themeable_1 = __webpack_require__(22);
var Link_1 = __webpack_require__(27);
var css = __webpack_require__(35);
var MenuItem = (function (_super) {
    __extends(MenuItem, _super);
    function MenuItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuItem.prototype.render = function () {
        var selected = this.properties.selected;
        return d_1.v('li', { classes: this.classes(css.root) }, [
            d_1.w(Link_1.Link, {
                to: 'menu',
                params: { category: this.properties.cat },
                classes: this.classes(css.item, selected ? css.selected : null)
            }, this.children)
        ]);
    };
    MenuItem = __decorate([
        Themeable_1.theme(css)
    ], MenuItem);
    return MenuItem;
}(Themeable_1.ThemeableMixin(WidgetBase_1.WidgetBase)));
exports.MenuItem = MenuItem;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(32);
module.exports = __webpack_require__(33);


/***/ })
/******/ ]);
})
// When using require, call the module automatically
typeof define === 'function' && define.amd && require(['src/main']);
;
//# sourceMappingURL=main.js.map