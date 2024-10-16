var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/lodash/fp/_mapping.js
var require_mapping = __commonJS({
  "../../node_modules/lodash/fp/_mapping.js"(exports) {
    exports.aliasToReal = {
      // Lodash aliases.
      "each": "forEach",
      "eachRight": "forEachRight",
      "entries": "toPairs",
      "entriesIn": "toPairsIn",
      "extend": "assignIn",
      "extendAll": "assignInAll",
      "extendAllWith": "assignInAllWith",
      "extendWith": "assignInWith",
      "first": "head",
      // Methods that are curried variants of others.
      "conforms": "conformsTo",
      "matches": "isMatch",
      "property": "get",
      // Ramda aliases.
      "__": "placeholder",
      "F": "stubFalse",
      "T": "stubTrue",
      "all": "every",
      "allPass": "overEvery",
      "always": "constant",
      "any": "some",
      "anyPass": "overSome",
      "apply": "spread",
      "assoc": "set",
      "assocPath": "set",
      "complement": "negate",
      "compose": "flowRight",
      "contains": "includes",
      "dissoc": "unset",
      "dissocPath": "unset",
      "dropLast": "dropRight",
      "dropLastWhile": "dropRightWhile",
      "equals": "isEqual",
      "identical": "eq",
      "indexBy": "keyBy",
      "init": "initial",
      "invertObj": "invert",
      "juxt": "over",
      "omitAll": "omit",
      "nAry": "ary",
      "path": "get",
      "pathEq": "matchesProperty",
      "pathOr": "getOr",
      "paths": "at",
      "pickAll": "pick",
      "pipe": "flow",
      "pluck": "map",
      "prop": "get",
      "propEq": "matchesProperty",
      "propOr": "getOr",
      "props": "at",
      "symmetricDifference": "xor",
      "symmetricDifferenceBy": "xorBy",
      "symmetricDifferenceWith": "xorWith",
      "takeLast": "takeRight",
      "takeLastWhile": "takeRightWhile",
      "unapply": "rest",
      "unnest": "flatten",
      "useWith": "overArgs",
      "where": "conformsTo",
      "whereEq": "isMatch",
      "zipObj": "zipObject"
    };
    exports.aryMethod = {
      "1": [
        "assignAll",
        "assignInAll",
        "attempt",
        "castArray",
        "ceil",
        "create",
        "curry",
        "curryRight",
        "defaultsAll",
        "defaultsDeepAll",
        "floor",
        "flow",
        "flowRight",
        "fromPairs",
        "invert",
        "iteratee",
        "memoize",
        "method",
        "mergeAll",
        "methodOf",
        "mixin",
        "nthArg",
        "over",
        "overEvery",
        "overSome",
        "rest",
        "reverse",
        "round",
        "runInContext",
        "spread",
        "template",
        "trim",
        "trimEnd",
        "trimStart",
        "uniqueId",
        "words",
        "zipAll"
      ],
      "2": [
        "add",
        "after",
        "ary",
        "assign",
        "assignAllWith",
        "assignIn",
        "assignInAllWith",
        "at",
        "before",
        "bind",
        "bindAll",
        "bindKey",
        "chunk",
        "cloneDeepWith",
        "cloneWith",
        "concat",
        "conformsTo",
        "countBy",
        "curryN",
        "curryRightN",
        "debounce",
        "defaults",
        "defaultsDeep",
        "defaultTo",
        "delay",
        "difference",
        "divide",
        "drop",
        "dropRight",
        "dropRightWhile",
        "dropWhile",
        "endsWith",
        "eq",
        "every",
        "filter",
        "find",
        "findIndex",
        "findKey",
        "findLast",
        "findLastIndex",
        "findLastKey",
        "flatMap",
        "flatMapDeep",
        "flattenDepth",
        "forEach",
        "forEachRight",
        "forIn",
        "forInRight",
        "forOwn",
        "forOwnRight",
        "get",
        "groupBy",
        "gt",
        "gte",
        "has",
        "hasIn",
        "includes",
        "indexOf",
        "intersection",
        "invertBy",
        "invoke",
        "invokeMap",
        "isEqual",
        "isMatch",
        "join",
        "keyBy",
        "lastIndexOf",
        "lt",
        "lte",
        "map",
        "mapKeys",
        "mapValues",
        "matchesProperty",
        "maxBy",
        "meanBy",
        "merge",
        "mergeAllWith",
        "minBy",
        "multiply",
        "nth",
        "omit",
        "omitBy",
        "overArgs",
        "pad",
        "padEnd",
        "padStart",
        "parseInt",
        "partial",
        "partialRight",
        "partition",
        "pick",
        "pickBy",
        "propertyOf",
        "pull",
        "pullAll",
        "pullAt",
        "random",
        "range",
        "rangeRight",
        "rearg",
        "reject",
        "remove",
        "repeat",
        "restFrom",
        "result",
        "sampleSize",
        "some",
        "sortBy",
        "sortedIndex",
        "sortedIndexOf",
        "sortedLastIndex",
        "sortedLastIndexOf",
        "sortedUniqBy",
        "split",
        "spreadFrom",
        "startsWith",
        "subtract",
        "sumBy",
        "take",
        "takeRight",
        "takeRightWhile",
        "takeWhile",
        "tap",
        "throttle",
        "thru",
        "times",
        "trimChars",
        "trimCharsEnd",
        "trimCharsStart",
        "truncate",
        "union",
        "uniqBy",
        "uniqWith",
        "unset",
        "unzipWith",
        "without",
        "wrap",
        "xor",
        "zip",
        "zipObject",
        "zipObjectDeep"
      ],
      "3": [
        "assignInWith",
        "assignWith",
        "clamp",
        "differenceBy",
        "differenceWith",
        "findFrom",
        "findIndexFrom",
        "findLastFrom",
        "findLastIndexFrom",
        "getOr",
        "includesFrom",
        "indexOfFrom",
        "inRange",
        "intersectionBy",
        "intersectionWith",
        "invokeArgs",
        "invokeArgsMap",
        "isEqualWith",
        "isMatchWith",
        "flatMapDepth",
        "lastIndexOfFrom",
        "mergeWith",
        "orderBy",
        "padChars",
        "padCharsEnd",
        "padCharsStart",
        "pullAllBy",
        "pullAllWith",
        "rangeStep",
        "rangeStepRight",
        "reduce",
        "reduceRight",
        "replace",
        "set",
        "slice",
        "sortedIndexBy",
        "sortedLastIndexBy",
        "transform",
        "unionBy",
        "unionWith",
        "update",
        "xorBy",
        "xorWith",
        "zipWith"
      ],
      "4": [
        "fill",
        "setWith",
        "updateWith"
      ]
    };
    exports.aryRearg = {
      "2": [1, 0],
      "3": [2, 0, 1],
      "4": [3, 2, 0, 1]
    };
    exports.iterateeAry = {
      "dropRightWhile": 1,
      "dropWhile": 1,
      "every": 1,
      "filter": 1,
      "find": 1,
      "findFrom": 1,
      "findIndex": 1,
      "findIndexFrom": 1,
      "findKey": 1,
      "findLast": 1,
      "findLastFrom": 1,
      "findLastIndex": 1,
      "findLastIndexFrom": 1,
      "findLastKey": 1,
      "flatMap": 1,
      "flatMapDeep": 1,
      "flatMapDepth": 1,
      "forEach": 1,
      "forEachRight": 1,
      "forIn": 1,
      "forInRight": 1,
      "forOwn": 1,
      "forOwnRight": 1,
      "map": 1,
      "mapKeys": 1,
      "mapValues": 1,
      "partition": 1,
      "reduce": 2,
      "reduceRight": 2,
      "reject": 1,
      "remove": 1,
      "some": 1,
      "takeRightWhile": 1,
      "takeWhile": 1,
      "times": 1,
      "transform": 2
    };
    exports.iterateeRearg = {
      "mapKeys": [1],
      "reduceRight": [1, 0]
    };
    exports.methodRearg = {
      "assignInAllWith": [1, 0],
      "assignInWith": [1, 2, 0],
      "assignAllWith": [1, 0],
      "assignWith": [1, 2, 0],
      "differenceBy": [1, 2, 0],
      "differenceWith": [1, 2, 0],
      "getOr": [2, 1, 0],
      "intersectionBy": [1, 2, 0],
      "intersectionWith": [1, 2, 0],
      "isEqualWith": [1, 2, 0],
      "isMatchWith": [2, 1, 0],
      "mergeAllWith": [1, 0],
      "mergeWith": [1, 2, 0],
      "padChars": [2, 1, 0],
      "padCharsEnd": [2, 1, 0],
      "padCharsStart": [2, 1, 0],
      "pullAllBy": [2, 1, 0],
      "pullAllWith": [2, 1, 0],
      "rangeStep": [1, 2, 0],
      "rangeStepRight": [1, 2, 0],
      "setWith": [3, 1, 2, 0],
      "sortedIndexBy": [2, 1, 0],
      "sortedLastIndexBy": [2, 1, 0],
      "unionBy": [1, 2, 0],
      "unionWith": [1, 2, 0],
      "updateWith": [3, 1, 2, 0],
      "xorBy": [1, 2, 0],
      "xorWith": [1, 2, 0],
      "zipWith": [1, 2, 0]
    };
    exports.methodSpread = {
      "assignAll": { "start": 0 },
      "assignAllWith": { "start": 0 },
      "assignInAll": { "start": 0 },
      "assignInAllWith": { "start": 0 },
      "defaultsAll": { "start": 0 },
      "defaultsDeepAll": { "start": 0 },
      "invokeArgs": { "start": 2 },
      "invokeArgsMap": { "start": 2 },
      "mergeAll": { "start": 0 },
      "mergeAllWith": { "start": 0 },
      "partial": { "start": 1 },
      "partialRight": { "start": 1 },
      "without": { "start": 1 },
      "zipAll": { "start": 0 }
    };
    exports.mutate = {
      "array": {
        "fill": true,
        "pull": true,
        "pullAll": true,
        "pullAllBy": true,
        "pullAllWith": true,
        "pullAt": true,
        "remove": true,
        "reverse": true
      },
      "object": {
        "assign": true,
        "assignAll": true,
        "assignAllWith": true,
        "assignIn": true,
        "assignInAll": true,
        "assignInAllWith": true,
        "assignInWith": true,
        "assignWith": true,
        "defaults": true,
        "defaultsAll": true,
        "defaultsDeep": true,
        "defaultsDeepAll": true,
        "merge": true,
        "mergeAll": true,
        "mergeAllWith": true,
        "mergeWith": true
      },
      "set": {
        "set": true,
        "setWith": true,
        "unset": true,
        "update": true,
        "updateWith": true
      }
    };
    exports.realToAlias = function() {
      var hasOwnProperty = Object.prototype.hasOwnProperty, object = exports.aliasToReal, result = {};
      for (var key in object) {
        var value = object[key];
        if (hasOwnProperty.call(result, value)) {
          result[value].push(key);
        } else {
          result[value] = [key];
        }
      }
      return result;
    }();
    exports.remap = {
      "assignAll": "assign",
      "assignAllWith": "assignWith",
      "assignInAll": "assignIn",
      "assignInAllWith": "assignInWith",
      "curryN": "curry",
      "curryRightN": "curryRight",
      "defaultsAll": "defaults",
      "defaultsDeepAll": "defaultsDeep",
      "findFrom": "find",
      "findIndexFrom": "findIndex",
      "findLastFrom": "findLast",
      "findLastIndexFrom": "findLastIndex",
      "getOr": "get",
      "includesFrom": "includes",
      "indexOfFrom": "indexOf",
      "invokeArgs": "invoke",
      "invokeArgsMap": "invokeMap",
      "lastIndexOfFrom": "lastIndexOf",
      "mergeAll": "merge",
      "mergeAllWith": "mergeWith",
      "padChars": "pad",
      "padCharsEnd": "padEnd",
      "padCharsStart": "padStart",
      "propertyOf": "get",
      "rangeStep": "range",
      "rangeStepRight": "rangeRight",
      "restFrom": "rest",
      "spreadFrom": "spread",
      "trimChars": "trim",
      "trimCharsEnd": "trimEnd",
      "trimCharsStart": "trimStart",
      "zipAll": "zip"
    };
    exports.skipFixed = {
      "castArray": true,
      "flow": true,
      "flowRight": true,
      "iteratee": true,
      "mixin": true,
      "rearg": true,
      "runInContext": true
    };
    exports.skipRearg = {
      "add": true,
      "assign": true,
      "assignIn": true,
      "bind": true,
      "bindKey": true,
      "concat": true,
      "difference": true,
      "divide": true,
      "eq": true,
      "gt": true,
      "gte": true,
      "isEqual": true,
      "lt": true,
      "lte": true,
      "matchesProperty": true,
      "merge": true,
      "multiply": true,
      "overArgs": true,
      "partial": true,
      "partialRight": true,
      "propertyOf": true,
      "random": true,
      "range": true,
      "rangeRight": true,
      "subtract": true,
      "zip": true,
      "zipObject": true,
      "zipObjectDeep": true
    };
  }
});

// ../../node_modules/lodash/fp/placeholder.js
var require_placeholder = __commonJS({
  "../../node_modules/lodash/fp/placeholder.js"(exports, module) {
    module.exports = {};
  }
});

// ../../node_modules/lodash/fp/_baseConvert.js
var require_baseConvert = __commonJS({
  "../../node_modules/lodash/fp/_baseConvert.js"(exports, module) {
    var mapping = require_mapping();
    var fallbackHolder = require_placeholder();
    var push = Array.prototype.push;
    function baseArity(func, n) {
      return n == 2 ? function(a, b) {
        return func.apply(void 0, arguments);
      } : function(a) {
        return func.apply(void 0, arguments);
      };
    }
    function baseAry(func, n) {
      return n == 2 ? function(a, b) {
        return func(a, b);
      } : function(a) {
        return func(a);
      };
    }
    function cloneArray(array) {
      var length = array ? array.length : 0, result = Array(length);
      while (length--) {
        result[length] = array[length];
      }
      return result;
    }
    function createCloner(func) {
      return function(object) {
        return func({}, object);
      };
    }
    function flatSpread(func, start) {
      return function() {
        var length = arguments.length, lastIndex = length - 1, args = Array(length);
        while (length--) {
          args[length] = arguments[length];
        }
        var array = args[start], otherArgs = args.slice(0, start);
        if (array) {
          push.apply(otherArgs, array);
        }
        if (start != lastIndex) {
          push.apply(otherArgs, args.slice(start + 1));
        }
        return func.apply(this, otherArgs);
      };
    }
    function wrapImmutable(func, cloner) {
      return function() {
        var length = arguments.length;
        if (!length) {
          return;
        }
        var args = Array(length);
        while (length--) {
          args[length] = arguments[length];
        }
        var result = args[0] = cloner.apply(void 0, args);
        func.apply(void 0, args);
        return result;
      };
    }
    function baseConvert(util, name, func, options) {
      var isLib = typeof name == "function", isObj = name === Object(name);
      if (isObj) {
        options = func;
        func = name;
        name = void 0;
      }
      if (func == null) {
        throw new TypeError();
      }
      options || (options = {});
      var config = {
        "cap": "cap" in options ? options.cap : true,
        "curry": "curry" in options ? options.curry : true,
        "fixed": "fixed" in options ? options.fixed : true,
        "immutable": "immutable" in options ? options.immutable : true,
        "rearg": "rearg" in options ? options.rearg : true
      };
      var defaultHolder = isLib ? func : fallbackHolder, forceCurry = "curry" in options && options.curry, forceFixed = "fixed" in options && options.fixed, forceRearg = "rearg" in options && options.rearg, pristine = isLib ? func.runInContext() : void 0;
      var helpers = isLib ? func : {
        "ary": util.ary,
        "assign": util.assign,
        "clone": util.clone,
        "curry": util.curry,
        "forEach": util.forEach,
        "isArray": util.isArray,
        "isError": util.isError,
        "isFunction": util.isFunction,
        "isWeakMap": util.isWeakMap,
        "iteratee": util.iteratee,
        "keys": util.keys,
        "rearg": util.rearg,
        "toInteger": util.toInteger,
        "toPath": util.toPath
      };
      var ary = helpers.ary, assign = helpers.assign, clone = helpers.clone, curry = helpers.curry, each = helpers.forEach, isArray2 = helpers.isArray, isError = helpers.isError, isFunction = helpers.isFunction, isWeakMap = helpers.isWeakMap, keys = helpers.keys, rearg = helpers.rearg, toInteger = helpers.toInteger, toPath = helpers.toPath;
      var aryMethodKeys = keys(mapping.aryMethod);
      var wrappers = {
        "castArray": function(castArray) {
          return function() {
            var value = arguments[0];
            return isArray2(value) ? castArray(cloneArray(value)) : castArray.apply(void 0, arguments);
          };
        },
        "iteratee": function(iteratee) {
          return function() {
            var func2 = arguments[0], arity = arguments[1], result = iteratee(func2, arity), length = result.length;
            if (config.cap && typeof arity == "number") {
              arity = arity > 2 ? arity - 2 : 1;
              return length && length <= arity ? result : baseAry(result, arity);
            }
            return result;
          };
        },
        "mixin": function(mixin) {
          return function(source) {
            var func2 = this;
            if (!isFunction(func2)) {
              return mixin(func2, Object(source));
            }
            var pairs2 = [];
            each(keys(source), function(key) {
              if (isFunction(source[key])) {
                pairs2.push([key, func2.prototype[key]]);
              }
            });
            mixin(func2, Object(source));
            each(pairs2, function(pair) {
              var value = pair[1];
              if (isFunction(value)) {
                func2.prototype[pair[0]] = value;
              } else {
                delete func2.prototype[pair[0]];
              }
            });
            return func2;
          };
        },
        "nthArg": function(nthArg) {
          return function(n) {
            var arity = n < 0 ? 1 : toInteger(n) + 1;
            return curry(nthArg(n), arity);
          };
        },
        "rearg": function(rearg2) {
          return function(func2, indexes) {
            var arity = indexes ? indexes.length : 0;
            return curry(rearg2(func2, indexes), arity);
          };
        },
        "runInContext": function(runInContext) {
          return function(context) {
            return baseConvert(util, runInContext(context), options);
          };
        }
      };
      function castCap(name2, func2) {
        if (config.cap) {
          var indexes = mapping.iterateeRearg[name2];
          if (indexes) {
            return iterateeRearg(func2, indexes);
          }
          var n = !isLib && mapping.iterateeAry[name2];
          if (n) {
            return iterateeAry(func2, n);
          }
        }
        return func2;
      }
      function castCurry(name2, func2, n) {
        return forceCurry || config.curry && n > 1 ? curry(func2, n) : func2;
      }
      function castFixed(name2, func2, n) {
        if (config.fixed && (forceFixed || !mapping.skipFixed[name2])) {
          var data = mapping.methodSpread[name2], start = data && data.start;
          return start === void 0 ? ary(func2, n) : flatSpread(func2, start);
        }
        return func2;
      }
      function castRearg(name2, func2, n) {
        return config.rearg && n > 1 && (forceRearg || !mapping.skipRearg[name2]) ? rearg(func2, mapping.methodRearg[name2] || mapping.aryRearg[n]) : func2;
      }
      function cloneByPath(object, path) {
        path = toPath(path);
        var index = -1, length = path.length, lastIndex = length - 1, result = clone(Object(object)), nested = result;
        while (nested != null && ++index < length) {
          var key = path[index], value = nested[key];
          if (value != null && !(isFunction(value) || isError(value) || isWeakMap(value))) {
            nested[key] = clone(index == lastIndex ? value : Object(value));
          }
          nested = nested[key];
        }
        return result;
      }
      function convertLib(options2) {
        return _.runInContext.convert(options2)(void 0);
      }
      function createConverter(name2, func2) {
        var realName = mapping.aliasToReal[name2] || name2, methodName = mapping.remap[realName] || realName, oldOptions = options;
        return function(options2) {
          var newUtil = isLib ? pristine : helpers, newFunc = isLib ? pristine[methodName] : func2, newOptions = assign(assign({}, oldOptions), options2);
          return baseConvert(newUtil, realName, newFunc, newOptions);
        };
      }
      function iterateeAry(func2, n) {
        return overArg(func2, function(func3) {
          return typeof func3 == "function" ? baseAry(func3, n) : func3;
        });
      }
      function iterateeRearg(func2, indexes) {
        return overArg(func2, function(func3) {
          var n = indexes.length;
          return baseArity(rearg(baseAry(func3, n), indexes), n);
        });
      }
      function overArg(func2, transform) {
        return function() {
          var length = arguments.length;
          if (!length) {
            return func2();
          }
          var args = Array(length);
          while (length--) {
            args[length] = arguments[length];
          }
          var index = config.rearg ? 0 : length - 1;
          args[index] = transform(args[index]);
          return func2.apply(void 0, args);
        };
      }
      function wrap(name2, func2, placeholder) {
        var result, realName = mapping.aliasToReal[name2] || name2, wrapped = func2, wrapper = wrappers[realName];
        if (wrapper) {
          wrapped = wrapper(func2);
        } else if (config.immutable) {
          if (mapping.mutate.array[realName]) {
            wrapped = wrapImmutable(func2, cloneArray);
          } else if (mapping.mutate.object[realName]) {
            wrapped = wrapImmutable(func2, createCloner(func2));
          } else if (mapping.mutate.set[realName]) {
            wrapped = wrapImmutable(func2, cloneByPath);
          }
        }
        each(aryMethodKeys, function(aryKey) {
          each(mapping.aryMethod[aryKey], function(otherName) {
            if (realName == otherName) {
              var data = mapping.methodSpread[realName], afterRearg = data && data.afterRearg;
              result = afterRearg ? castFixed(realName, castRearg(realName, wrapped, aryKey), aryKey) : castRearg(realName, castFixed(realName, wrapped, aryKey), aryKey);
              result = castCap(realName, result);
              result = castCurry(realName, result, aryKey);
              return false;
            }
          });
          return !result;
        });
        result || (result = wrapped);
        if (result == func2) {
          result = forceCurry ? curry(result, 1) : function() {
            return func2.apply(this, arguments);
          };
        }
        result.convert = createConverter(realName, func2);
        result.placeholder = func2.placeholder = placeholder;
        return result;
      }
      if (!isObj) {
        return wrap(name, func, defaultHolder);
      }
      var _ = func;
      var pairs = [];
      each(aryMethodKeys, function(aryKey) {
        each(mapping.aryMethod[aryKey], function(key) {
          var func2 = _[mapping.remap[key] || key];
          if (func2) {
            pairs.push([key, wrap(key, func2, _)]);
          }
        });
      });
      each(keys(_), function(key) {
        var func2 = _[key];
        if (typeof func2 == "function") {
          var length = pairs.length;
          while (length--) {
            if (pairs[length][0] == key) {
              return;
            }
          }
          func2.convert = createConverter(key, func2);
          pairs.push([key, func2]);
        }
      });
      each(pairs, function(pair) {
        _[pair[0]] = pair[1];
      });
      _.convert = convertLib;
      _.placeholder = _;
      each(keys(_), function(key) {
        each(mapping.realToAlias[key] || [], function(alias) {
          _[alias] = _[key];
        });
      });
      return _;
    }
    module.exports = baseConvert;
  }
});

// ../../node_modules/lodash/identity.js
var require_identity = __commonJS({
  "../../node_modules/lodash/identity.js"(exports, module) {
    function identity(value) {
      return value;
    }
    module.exports = identity;
  }
});

// ../../node_modules/lodash/_freeGlobal.js
var require_freeGlobal = __commonJS({
  "../../node_modules/lodash/_freeGlobal.js"(exports, module) {
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    module.exports = freeGlobal;
  }
});

// ../../node_modules/lodash/_root.js
var require_root = __commonJS({
  "../../node_modules/lodash/_root.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    module.exports = root;
  }
});

// ../../node_modules/lodash/_Symbol.js
var require_Symbol = __commonJS({
  "../../node_modules/lodash/_Symbol.js"(exports, module) {
    var root = require_root();
    var Symbol2 = root.Symbol;
    module.exports = Symbol2;
  }
});

// ../../node_modules/lodash/_getRawTag.js
var require_getRawTag = __commonJS({
  "../../node_modules/lodash/_getRawTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var nativeObjectToString = objectProto.toString;
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function getRawTag(value) {
      var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      try {
        value[symToStringTag] = void 0;
        var unmasked = true;
      } catch (e) {
      }
      var result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    module.exports = getRawTag;
  }
});

// ../../node_modules/lodash/_objectToString.js
var require_objectToString = __commonJS({
  "../../node_modules/lodash/_objectToString.js"(exports, module) {
    var objectProto = Object.prototype;
    var nativeObjectToString = objectProto.toString;
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    module.exports = objectToString;
  }
});

// ../../node_modules/lodash/_baseGetTag.js
var require_baseGetTag = __commonJS({
  "../../node_modules/lodash/_baseGetTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var getRawTag = require_getRawTag();
    var objectToString = require_objectToString();
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    module.exports = baseGetTag;
  }
});

// ../../node_modules/lodash/isObject.js
var require_isObject = __commonJS({
  "../../node_modules/lodash/isObject.js"(exports, module) {
    function isObject2(value) {
      var type = typeof value;
      return value != null && (type == "object" || type == "function");
    }
    module.exports = isObject2;
  }
});

// ../../node_modules/lodash/isFunction.js
var require_isFunction = __commonJS({
  "../../node_modules/lodash/isFunction.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObject2 = require_isObject();
    var asyncTag = "[object AsyncFunction]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var proxyTag = "[object Proxy]";
    function isFunction(value) {
      if (!isObject2(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
    }
    module.exports = isFunction;
  }
});

// ../../node_modules/lodash/_coreJsData.js
var require_coreJsData = __commonJS({
  "../../node_modules/lodash/_coreJsData.js"(exports, module) {
    var root = require_root();
    var coreJsData = root["__core-js_shared__"];
    module.exports = coreJsData;
  }
});

// ../../node_modules/lodash/_isMasked.js
var require_isMasked = __commonJS({
  "../../node_modules/lodash/_isMasked.js"(exports, module) {
    var coreJsData = require_coreJsData();
    var maskSrcKey = function() {
      var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
      return uid ? "Symbol(src)_1." + uid : "";
    }();
    function isMasked(func) {
      return !!maskSrcKey && maskSrcKey in func;
    }
    module.exports = isMasked;
  }
});

// ../../node_modules/lodash/_toSource.js
var require_toSource = __commonJS({
  "../../node_modules/lodash/_toSource.js"(exports, module) {
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    function toSource(func) {
      if (func != null) {
        try {
          return funcToString.call(func);
        } catch (e) {
        }
        try {
          return func + "";
        } catch (e) {
        }
      }
      return "";
    }
    module.exports = toSource;
  }
});

// ../../node_modules/lodash/_baseIsNative.js
var require_baseIsNative = __commonJS({
  "../../node_modules/lodash/_baseIsNative.js"(exports, module) {
    var isFunction = require_isFunction();
    var isMasked = require_isMasked();
    var isObject2 = require_isObject();
    var toSource = require_toSource();
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var reIsNative = RegExp(
      "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
    );
    function baseIsNative(value) {
      if (!isObject2(value) || isMasked(value)) {
        return false;
      }
      var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
      return pattern.test(toSource(value));
    }
    module.exports = baseIsNative;
  }
});

// ../../node_modules/lodash/_getValue.js
var require_getValue = __commonJS({
  "../../node_modules/lodash/_getValue.js"(exports, module) {
    function getValue2(object, key) {
      return object == null ? void 0 : object[key];
    }
    module.exports = getValue2;
  }
});

// ../../node_modules/lodash/_getNative.js
var require_getNative = __commonJS({
  "../../node_modules/lodash/_getNative.js"(exports, module) {
    var baseIsNative = require_baseIsNative();
    var getValue2 = require_getValue();
    function getNative(object, key) {
      var value = getValue2(object, key);
      return baseIsNative(value) ? value : void 0;
    }
    module.exports = getNative;
  }
});

// ../../node_modules/lodash/_WeakMap.js
var require_WeakMap = __commonJS({
  "../../node_modules/lodash/_WeakMap.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var WeakMap = getNative(root, "WeakMap");
    module.exports = WeakMap;
  }
});

// ../../node_modules/lodash/_metaMap.js
var require_metaMap = __commonJS({
  "../../node_modules/lodash/_metaMap.js"(exports, module) {
    var WeakMap = require_WeakMap();
    var metaMap = WeakMap && new WeakMap();
    module.exports = metaMap;
  }
});

// ../../node_modules/lodash/_baseSetData.js
var require_baseSetData = __commonJS({
  "../../node_modules/lodash/_baseSetData.js"(exports, module) {
    var identity = require_identity();
    var metaMap = require_metaMap();
    var baseSetData = !metaMap ? identity : function(func, data) {
      metaMap.set(func, data);
      return func;
    };
    module.exports = baseSetData;
  }
});

// ../../node_modules/lodash/_baseCreate.js
var require_baseCreate = __commonJS({
  "../../node_modules/lodash/_baseCreate.js"(exports, module) {
    var isObject2 = require_isObject();
    var objectCreate = Object.create;
    var baseCreate = /* @__PURE__ */ function() {
      function object() {
      }
      return function(proto) {
        if (!isObject2(proto)) {
          return {};
        }
        if (objectCreate) {
          return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object();
        object.prototype = void 0;
        return result;
      };
    }();
    module.exports = baseCreate;
  }
});

// ../../node_modules/lodash/_createCtor.js
var require_createCtor = __commonJS({
  "../../node_modules/lodash/_createCtor.js"(exports, module) {
    var baseCreate = require_baseCreate();
    var isObject2 = require_isObject();
    function createCtor(Ctor) {
      return function() {
        var args = arguments;
        switch (args.length) {
          case 0:
            return new Ctor();
          case 1:
            return new Ctor(args[0]);
          case 2:
            return new Ctor(args[0], args[1]);
          case 3:
            return new Ctor(args[0], args[1], args[2]);
          case 4:
            return new Ctor(args[0], args[1], args[2], args[3]);
          case 5:
            return new Ctor(args[0], args[1], args[2], args[3], args[4]);
          case 6:
            return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
          case 7:
            return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype), result = Ctor.apply(thisBinding, args);
        return isObject2(result) ? result : thisBinding;
      };
    }
    module.exports = createCtor;
  }
});

// ../../node_modules/lodash/_createBind.js
var require_createBind = __commonJS({
  "../../node_modules/lodash/_createBind.js"(exports, module) {
    var createCtor = require_createCtor();
    var root = require_root();
    var WRAP_BIND_FLAG = 1;
    function createBind(func, bitmask, thisArg) {
      var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
      function wrapper() {
        var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
      }
      return wrapper;
    }
    module.exports = createBind;
  }
});

// ../../node_modules/lodash/_apply.js
var require_apply = __commonJS({
  "../../node_modules/lodash/_apply.js"(exports, module) {
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    module.exports = apply;
  }
});

// ../../node_modules/lodash/_composeArgs.js
var require_composeArgs = __commonJS({
  "../../node_modules/lodash/_composeArgs.js"(exports, module) {
    var nativeMax = Math.max;
    function composeArgs(args, partials, holders, isCurried) {
      var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(leftLength + rangeLength), isUncurried = !isCurried;
      while (++leftIndex < leftLength) {
        result[leftIndex] = partials[leftIndex];
      }
      while (++argsIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[holders[argsIndex]] = args[argsIndex];
        }
      }
      while (rangeLength--) {
        result[leftIndex++] = args[argsIndex++];
      }
      return result;
    }
    module.exports = composeArgs;
  }
});

// ../../node_modules/lodash/_composeArgsRight.js
var require_composeArgsRight = __commonJS({
  "../../node_modules/lodash/_composeArgsRight.js"(exports, module) {
    var nativeMax = Math.max;
    function composeArgsRight(args, partials, holders, isCurried) {
      var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(rangeLength + rightLength), isUncurried = !isCurried;
      while (++argsIndex < rangeLength) {
        result[argsIndex] = args[argsIndex];
      }
      var offset = argsIndex;
      while (++rightIndex < rightLength) {
        result[offset + rightIndex] = partials[rightIndex];
      }
      while (++holdersIndex < holdersLength) {
        if (isUncurried || argsIndex < argsLength) {
          result[offset + holders[holdersIndex]] = args[argsIndex++];
        }
      }
      return result;
    }
    module.exports = composeArgsRight;
  }
});

// ../../node_modules/lodash/_countHolders.js
var require_countHolders = __commonJS({
  "../../node_modules/lodash/_countHolders.js"(exports, module) {
    function countHolders(array, placeholder) {
      var length = array.length, result = 0;
      while (length--) {
        if (array[length] === placeholder) {
          ++result;
        }
      }
      return result;
    }
    module.exports = countHolders;
  }
});

// ../../node_modules/lodash/_baseLodash.js
var require_baseLodash = __commonJS({
  "../../node_modules/lodash/_baseLodash.js"(exports, module) {
    function baseLodash() {
    }
    module.exports = baseLodash;
  }
});

// ../../node_modules/lodash/_LazyWrapper.js
var require_LazyWrapper = __commonJS({
  "../../node_modules/lodash/_LazyWrapper.js"(exports, module) {
    var baseCreate = require_baseCreate();
    var baseLodash = require_baseLodash();
    var MAX_ARRAY_LENGTH = 4294967295;
    function LazyWrapper(value) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__dir__ = 1;
      this.__filtered__ = false;
      this.__iteratees__ = [];
      this.__takeCount__ = MAX_ARRAY_LENGTH;
      this.__views__ = [];
    }
    LazyWrapper.prototype = baseCreate(baseLodash.prototype);
    LazyWrapper.prototype.constructor = LazyWrapper;
    module.exports = LazyWrapper;
  }
});

// ../../node_modules/lodash/noop.js
var require_noop = __commonJS({
  "../../node_modules/lodash/noop.js"(exports, module) {
    function noop() {
    }
    module.exports = noop;
  }
});

// ../../node_modules/lodash/_getData.js
var require_getData = __commonJS({
  "../../node_modules/lodash/_getData.js"(exports, module) {
    var metaMap = require_metaMap();
    var noop = require_noop();
    var getData = !metaMap ? noop : function(func) {
      return metaMap.get(func);
    };
    module.exports = getData;
  }
});

// ../../node_modules/lodash/_realNames.js
var require_realNames = __commonJS({
  "../../node_modules/lodash/_realNames.js"(exports, module) {
    var realNames = {};
    module.exports = realNames;
  }
});

// ../../node_modules/lodash/_getFuncName.js
var require_getFuncName = __commonJS({
  "../../node_modules/lodash/_getFuncName.js"(exports, module) {
    var realNames = require_realNames();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function getFuncName(func) {
      var result = func.name + "", array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0;
      while (length--) {
        var data = array[length], otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) {
          return data.name;
        }
      }
      return result;
    }
    module.exports = getFuncName;
  }
});

// ../../node_modules/lodash/_LodashWrapper.js
var require_LodashWrapper = __commonJS({
  "../../node_modules/lodash/_LodashWrapper.js"(exports, module) {
    var baseCreate = require_baseCreate();
    var baseLodash = require_baseLodash();
    function LodashWrapper(value, chainAll) {
      this.__wrapped__ = value;
      this.__actions__ = [];
      this.__chain__ = !!chainAll;
      this.__index__ = 0;
      this.__values__ = void 0;
    }
    LodashWrapper.prototype = baseCreate(baseLodash.prototype);
    LodashWrapper.prototype.constructor = LodashWrapper;
    module.exports = LodashWrapper;
  }
});

// ../../node_modules/lodash/isArray.js
var require_isArray = __commonJS({
  "../../node_modules/lodash/isArray.js"(exports, module) {
    var isArray2 = Array.isArray;
    module.exports = isArray2;
  }
});

// ../../node_modules/lodash/isObjectLike.js
var require_isObjectLike = __commonJS({
  "../../node_modules/lodash/isObjectLike.js"(exports, module) {
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    module.exports = isObjectLike;
  }
});

// ../../node_modules/lodash/_copyArray.js
var require_copyArray = __commonJS({
  "../../node_modules/lodash/_copyArray.js"(exports, module) {
    function copyArray(source, array) {
      var index = -1, length = source.length;
      array || (array = Array(length));
      while (++index < length) {
        array[index] = source[index];
      }
      return array;
    }
    module.exports = copyArray;
  }
});

// ../../node_modules/lodash/_wrapperClone.js
var require_wrapperClone = __commonJS({
  "../../node_modules/lodash/_wrapperClone.js"(exports, module) {
    var LazyWrapper = require_LazyWrapper();
    var LodashWrapper = require_LodashWrapper();
    var copyArray = require_copyArray();
    function wrapperClone(wrapper) {
      if (wrapper instanceof LazyWrapper) {
        return wrapper.clone();
      }
      var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
      result.__actions__ = copyArray(wrapper.__actions__);
      result.__index__ = wrapper.__index__;
      result.__values__ = wrapper.__values__;
      return result;
    }
    module.exports = wrapperClone;
  }
});

// ../../node_modules/lodash/wrapperLodash.js
var require_wrapperLodash = __commonJS({
  "../../node_modules/lodash/wrapperLodash.js"(exports, module) {
    var LazyWrapper = require_LazyWrapper();
    var LodashWrapper = require_LodashWrapper();
    var baseLodash = require_baseLodash();
    var isArray2 = require_isArray();
    var isObjectLike = require_isObjectLike();
    var wrapperClone = require_wrapperClone();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function lodash(value) {
      if (isObjectLike(value) && !isArray2(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) {
          return value;
        }
        if (hasOwnProperty.call(value, "__wrapped__")) {
          return wrapperClone(value);
        }
      }
      return new LodashWrapper(value);
    }
    lodash.prototype = baseLodash.prototype;
    lodash.prototype.constructor = lodash;
    module.exports = lodash;
  }
});

// ../../node_modules/lodash/_isLaziable.js
var require_isLaziable = __commonJS({
  "../../node_modules/lodash/_isLaziable.js"(exports, module) {
    var LazyWrapper = require_LazyWrapper();
    var getData = require_getData();
    var getFuncName = require_getFuncName();
    var lodash = require_wrapperLodash();
    function isLaziable(func) {
      var funcName = getFuncName(func), other = lodash[funcName];
      if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
        return false;
      }
      if (func === other) {
        return true;
      }
      var data = getData(other);
      return !!data && func === data[0];
    }
    module.exports = isLaziable;
  }
});

// ../../node_modules/lodash/_shortOut.js
var require_shortOut = __commonJS({
  "../../node_modules/lodash/_shortOut.js"(exports, module) {
    var HOT_COUNT = 800;
    var HOT_SPAN = 16;
    var nativeNow = Date.now;
    function shortOut(func) {
      var count = 0, lastCalled = 0;
      return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
          if (++count >= HOT_COUNT) {
            return arguments[0];
          }
        } else {
          count = 0;
        }
        return func.apply(void 0, arguments);
      };
    }
    module.exports = shortOut;
  }
});

// ../../node_modules/lodash/_setData.js
var require_setData = __commonJS({
  "../../node_modules/lodash/_setData.js"(exports, module) {
    var baseSetData = require_baseSetData();
    var shortOut = require_shortOut();
    var setData = shortOut(baseSetData);
    module.exports = setData;
  }
});

// ../../node_modules/lodash/_getWrapDetails.js
var require_getWrapDetails = __commonJS({
  "../../node_modules/lodash/_getWrapDetails.js"(exports, module) {
    var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/;
    var reSplitDetails = /,? & /;
    function getWrapDetails(source) {
      var match = source.match(reWrapDetails);
      return match ? match[1].split(reSplitDetails) : [];
    }
    module.exports = getWrapDetails;
  }
});

// ../../node_modules/lodash/_insertWrapDetails.js
var require_insertWrapDetails = __commonJS({
  "../../node_modules/lodash/_insertWrapDetails.js"(exports, module) {
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
    function insertWrapDetails(source, details) {
      var length = details.length;
      if (!length) {
        return source;
      }
      var lastIndex = length - 1;
      details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
      details = details.join(length > 2 ? ", " : " ");
      return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
    }
    module.exports = insertWrapDetails;
  }
});

// ../../node_modules/lodash/constant.js
var require_constant = __commonJS({
  "../../node_modules/lodash/constant.js"(exports, module) {
    function constant(value) {
      return function() {
        return value;
      };
    }
    module.exports = constant;
  }
});

// ../../node_modules/lodash/_defineProperty.js
var require_defineProperty = __commonJS({
  "../../node_modules/lodash/_defineProperty.js"(exports, module) {
    var getNative = require_getNative();
    var defineProperty = function() {
      try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
      } catch (e) {
      }
    }();
    module.exports = defineProperty;
  }
});

// ../../node_modules/lodash/_baseSetToString.js
var require_baseSetToString = __commonJS({
  "../../node_modules/lodash/_baseSetToString.js"(exports, module) {
    var constant = require_constant();
    var defineProperty = require_defineProperty();
    var identity = require_identity();
    var baseSetToString = !defineProperty ? identity : function(func, string) {
      return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
      });
    };
    module.exports = baseSetToString;
  }
});

// ../../node_modules/lodash/_setToString.js
var require_setToString = __commonJS({
  "../../node_modules/lodash/_setToString.js"(exports, module) {
    var baseSetToString = require_baseSetToString();
    var shortOut = require_shortOut();
    var setToString = shortOut(baseSetToString);
    module.exports = setToString;
  }
});

// ../../node_modules/lodash/_arrayEach.js
var require_arrayEach = __commonJS({
  "../../node_modules/lodash/_arrayEach.js"(exports, module) {
    function arrayEach(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    module.exports = arrayEach;
  }
});

// ../../node_modules/lodash/_baseFindIndex.js
var require_baseFindIndex = __commonJS({
  "../../node_modules/lodash/_baseFindIndex.js"(exports, module) {
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    module.exports = baseFindIndex;
  }
});

// ../../node_modules/lodash/_baseIsNaN.js
var require_baseIsNaN = __commonJS({
  "../../node_modules/lodash/_baseIsNaN.js"(exports, module) {
    function baseIsNaN(value) {
      return value !== value;
    }
    module.exports = baseIsNaN;
  }
});

// ../../node_modules/lodash/_strictIndexOf.js
var require_strictIndexOf = __commonJS({
  "../../node_modules/lodash/_strictIndexOf.js"(exports, module) {
    function strictIndexOf(array, value, fromIndex) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    module.exports = strictIndexOf;
  }
});

// ../../node_modules/lodash/_baseIndexOf.js
var require_baseIndexOf = __commonJS({
  "../../node_modules/lodash/_baseIndexOf.js"(exports, module) {
    var baseFindIndex = require_baseFindIndex();
    var baseIsNaN = require_baseIsNaN();
    var strictIndexOf = require_strictIndexOf();
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    module.exports = baseIndexOf;
  }
});

// ../../node_modules/lodash/_arrayIncludes.js
var require_arrayIncludes = __commonJS({
  "../../node_modules/lodash/_arrayIncludes.js"(exports, module) {
    var baseIndexOf = require_baseIndexOf();
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    module.exports = arrayIncludes;
  }
});

// ../../node_modules/lodash/_updateWrapDetails.js
var require_updateWrapDetails = __commonJS({
  "../../node_modules/lodash/_updateWrapDetails.js"(exports, module) {
    var arrayEach = require_arrayEach();
    var arrayIncludes = require_arrayIncludes();
    var WRAP_BIND_FLAG = 1;
    var WRAP_BIND_KEY_FLAG = 2;
    var WRAP_CURRY_FLAG = 8;
    var WRAP_CURRY_RIGHT_FLAG = 16;
    var WRAP_PARTIAL_FLAG = 32;
    var WRAP_PARTIAL_RIGHT_FLAG = 64;
    var WRAP_ARY_FLAG = 128;
    var WRAP_REARG_FLAG = 256;
    var WRAP_FLIP_FLAG = 512;
    var wrapFlags = [
      ["ary", WRAP_ARY_FLAG],
      ["bind", WRAP_BIND_FLAG],
      ["bindKey", WRAP_BIND_KEY_FLAG],
      ["curry", WRAP_CURRY_FLAG],
      ["curryRight", WRAP_CURRY_RIGHT_FLAG],
      ["flip", WRAP_FLIP_FLAG],
      ["partial", WRAP_PARTIAL_FLAG],
      ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
      ["rearg", WRAP_REARG_FLAG]
    ];
    function updateWrapDetails(details, bitmask) {
      arrayEach(wrapFlags, function(pair) {
        var value = "_." + pair[0];
        if (bitmask & pair[1] && !arrayIncludes(details, value)) {
          details.push(value);
        }
      });
      return details.sort();
    }
    module.exports = updateWrapDetails;
  }
});

// ../../node_modules/lodash/_setWrapToString.js
var require_setWrapToString = __commonJS({
  "../../node_modules/lodash/_setWrapToString.js"(exports, module) {
    var getWrapDetails = require_getWrapDetails();
    var insertWrapDetails = require_insertWrapDetails();
    var setToString = require_setToString();
    var updateWrapDetails = require_updateWrapDetails();
    function setWrapToString(wrapper, reference, bitmask) {
      var source = reference + "";
      return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
    }
    module.exports = setWrapToString;
  }
});

// ../../node_modules/lodash/_createRecurry.js
var require_createRecurry = __commonJS({
  "../../node_modules/lodash/_createRecurry.js"(exports, module) {
    var isLaziable = require_isLaziable();
    var setData = require_setData();
    var setWrapToString = require_setWrapToString();
    var WRAP_BIND_FLAG = 1;
    var WRAP_BIND_KEY_FLAG = 2;
    var WRAP_CURRY_BOUND_FLAG = 4;
    var WRAP_CURRY_FLAG = 8;
    var WRAP_PARTIAL_FLAG = 32;
    var WRAP_PARTIAL_RIGHT_FLAG = 64;
    function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
      var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : void 0, newHoldersRight = isCurry ? void 0 : holders, newPartials = isCurry ? partials : void 0, newPartialsRight = isCurry ? void 0 : partials;
      bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
      bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
      if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
        bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
      }
      var newData = [
        func,
        bitmask,
        thisArg,
        newPartials,
        newHolders,
        newPartialsRight,
        newHoldersRight,
        argPos,
        ary,
        arity
      ];
      var result = wrapFunc.apply(void 0, newData);
      if (isLaziable(func)) {
        setData(result, newData);
      }
      result.placeholder = placeholder;
      return setWrapToString(result, func, bitmask);
    }
    module.exports = createRecurry;
  }
});

// ../../node_modules/lodash/_getHolder.js
var require_getHolder = __commonJS({
  "../../node_modules/lodash/_getHolder.js"(exports, module) {
    function getHolder(func) {
      var object = func;
      return object.placeholder;
    }
    module.exports = getHolder;
  }
});

// ../../node_modules/lodash/_isIndex.js
var require_isIndex = __commonJS({
  "../../node_modules/lodash/_isIndex.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    function isIndex(value, length) {
      var type = typeof value;
      length = length == null ? MAX_SAFE_INTEGER : length;
      return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
    }
    module.exports = isIndex;
  }
});

// ../../node_modules/lodash/_reorder.js
var require_reorder = __commonJS({
  "../../node_modules/lodash/_reorder.js"(exports, module) {
    var copyArray = require_copyArray();
    var isIndex = require_isIndex();
    var nativeMin = Math.min;
    function reorder(array, indexes) {
      var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
      while (length--) {
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : void 0;
      }
      return array;
    }
    module.exports = reorder;
  }
});

// ../../node_modules/lodash/_replaceHolders.js
var require_replaceHolders = __commonJS({
  "../../node_modules/lodash/_replaceHolders.js"(exports, module) {
    var PLACEHOLDER = "__lodash_placeholder__";
    function replaceHolders(array, placeholder) {
      var index = -1, length = array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (value === placeholder || value === PLACEHOLDER) {
          array[index] = PLACEHOLDER;
          result[resIndex++] = index;
        }
      }
      return result;
    }
    module.exports = replaceHolders;
  }
});

// ../../node_modules/lodash/_createHybrid.js
var require_createHybrid = __commonJS({
  "../../node_modules/lodash/_createHybrid.js"(exports, module) {
    var composeArgs = require_composeArgs();
    var composeArgsRight = require_composeArgsRight();
    var countHolders = require_countHolders();
    var createCtor = require_createCtor();
    var createRecurry = require_createRecurry();
    var getHolder = require_getHolder();
    var reorder = require_reorder();
    var replaceHolders = require_replaceHolders();
    var root = require_root();
    var WRAP_BIND_FLAG = 1;
    var WRAP_BIND_KEY_FLAG = 2;
    var WRAP_CURRY_FLAG = 8;
    var WRAP_CURRY_RIGHT_FLAG = 16;
    var WRAP_ARY_FLAG = 128;
    var WRAP_FLIP_FLAG = 512;
    function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
      var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? void 0 : createCtor(func);
      function wrapper() {
        var length = arguments.length, args = Array(length), index = length;
        while (index--) {
          args[index] = arguments[index];
        }
        if (isCurried) {
          var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
        }
        if (partials) {
          args = composeArgs(args, partials, holders, isCurried);
        }
        if (partialsRight) {
          args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        }
        length -= holdersCount;
        if (isCurried && length < arity) {
          var newHolders = replaceHolders(args, placeholder);
          return createRecurry(
            func,
            bitmask,
            createHybrid,
            wrapper.placeholder,
            thisArg,
            args,
            newHolders,
            argPos,
            ary,
            arity - length
          );
        }
        var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
        length = args.length;
        if (argPos) {
          args = reorder(args, argPos);
        } else if (isFlip && length > 1) {
          args.reverse();
        }
        if (isAry && ary < length) {
          args.length = ary;
        }
        if (this && this !== root && this instanceof wrapper) {
          fn = Ctor || createCtor(fn);
        }
        return fn.apply(thisBinding, args);
      }
      return wrapper;
    }
    module.exports = createHybrid;
  }
});

// ../../node_modules/lodash/_createCurry.js
var require_createCurry = __commonJS({
  "../../node_modules/lodash/_createCurry.js"(exports, module) {
    var apply = require_apply();
    var createCtor = require_createCtor();
    var createHybrid = require_createHybrid();
    var createRecurry = require_createRecurry();
    var getHolder = require_getHolder();
    var replaceHolders = require_replaceHolders();
    var root = require_root();
    function createCurry(func, bitmask, arity) {
      var Ctor = createCtor(func);
      function wrapper() {
        var length = arguments.length, args = Array(length), index = length, placeholder = getHolder(wrapper);
        while (index--) {
          args[index] = arguments[index];
        }
        var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
        length -= holders.length;
        if (length < arity) {
          return createRecurry(
            func,
            bitmask,
            createHybrid,
            wrapper.placeholder,
            void 0,
            args,
            holders,
            void 0,
            void 0,
            arity - length
          );
        }
        var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
        return apply(fn, this, args);
      }
      return wrapper;
    }
    module.exports = createCurry;
  }
});

// ../../node_modules/lodash/_createPartial.js
var require_createPartial = __commonJS({
  "../../node_modules/lodash/_createPartial.js"(exports, module) {
    var apply = require_apply();
    var createCtor = require_createCtor();
    var root = require_root();
    var WRAP_BIND_FLAG = 1;
    function createPartial(func, bitmask, thisArg, partials) {
      var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
      function wrapper() {
        var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
        while (++leftIndex < leftLength) {
          args[leftIndex] = partials[leftIndex];
        }
        while (argsLength--) {
          args[leftIndex++] = arguments[++argsIndex];
        }
        return apply(fn, isBind ? thisArg : this, args);
      }
      return wrapper;
    }
    module.exports = createPartial;
  }
});

// ../../node_modules/lodash/_mergeData.js
var require_mergeData = __commonJS({
  "../../node_modules/lodash/_mergeData.js"(exports, module) {
    var composeArgs = require_composeArgs();
    var composeArgsRight = require_composeArgsRight();
    var replaceHolders = require_replaceHolders();
    var PLACEHOLDER = "__lodash_placeholder__";
    var WRAP_BIND_FLAG = 1;
    var WRAP_BIND_KEY_FLAG = 2;
    var WRAP_CURRY_BOUND_FLAG = 4;
    var WRAP_CURRY_FLAG = 8;
    var WRAP_ARY_FLAG = 128;
    var WRAP_REARG_FLAG = 256;
    var nativeMin = Math.min;
    function mergeData(data, source) {
      var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
      var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
      if (!(isCommon || isCombo)) {
        return data;
      }
      if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
      }
      var value = source[3];
      if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
      }
      value = source[5];
      if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
      }
      value = source[7];
      if (value) {
        data[7] = value;
      }
      if (srcBitmask & WRAP_ARY_FLAG) {
        data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
      }
      if (data[9] == null) {
        data[9] = source[9];
      }
      data[0] = source[0];
      data[1] = newBitmask;
      return data;
    }
    module.exports = mergeData;
  }
});

// ../../node_modules/lodash/_trimmedEndIndex.js
var require_trimmedEndIndex = __commonJS({
  "../../node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
    var reWhitespace = /\s/;
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    module.exports = trimmedEndIndex;
  }
});

// ../../node_modules/lodash/_baseTrim.js
var require_baseTrim = __commonJS({
  "../../node_modules/lodash/_baseTrim.js"(exports, module) {
    var trimmedEndIndex = require_trimmedEndIndex();
    var reTrimStart = /^\s+/;
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    module.exports = baseTrim;
  }
});

// ../../node_modules/lodash/isSymbol.js
var require_isSymbol = __commonJS({
  "../../node_modules/lodash/isSymbol.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var symbolTag = "[object Symbol]";
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
    }
    module.exports = isSymbol;
  }
});

// ../../node_modules/lodash/toNumber.js
var require_toNumber = __commonJS({
  "../../node_modules/lodash/toNumber.js"(exports, module) {
    var baseTrim = require_baseTrim();
    var isObject2 = require_isObject();
    var isSymbol = require_isSymbol();
    var NAN = 0 / 0;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject2(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject2(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = baseTrim(value);
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = toNumber;
  }
});

// ../../node_modules/lodash/toFinite.js
var require_toFinite = __commonJS({
  "../../node_modules/lodash/toFinite.js"(exports, module) {
    var toNumber = require_toNumber();
    var INFINITY = 1 / 0;
    var MAX_INTEGER = 17976931348623157e292;
    function toFinite(value) {
      if (!value) {
        return value === 0 ? value : 0;
      }
      value = toNumber(value);
      if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
      }
      return value === value ? value : 0;
    }
    module.exports = toFinite;
  }
});

// ../../node_modules/lodash/toInteger.js
var require_toInteger = __commonJS({
  "../../node_modules/lodash/toInteger.js"(exports, module) {
    var toFinite = require_toFinite();
    function toInteger(value) {
      var result = toFinite(value), remainder = result % 1;
      return result === result ? remainder ? result - remainder : result : 0;
    }
    module.exports = toInteger;
  }
});

// ../../node_modules/lodash/_createWrap.js
var require_createWrap = __commonJS({
  "../../node_modules/lodash/_createWrap.js"(exports, module) {
    var baseSetData = require_baseSetData();
    var createBind = require_createBind();
    var createCurry = require_createCurry();
    var createHybrid = require_createHybrid();
    var createPartial = require_createPartial();
    var getData = require_getData();
    var mergeData = require_mergeData();
    var setData = require_setData();
    var setWrapToString = require_setWrapToString();
    var toInteger = require_toInteger();
    var FUNC_ERROR_TEXT = "Expected a function";
    var WRAP_BIND_FLAG = 1;
    var WRAP_BIND_KEY_FLAG = 2;
    var WRAP_CURRY_FLAG = 8;
    var WRAP_CURRY_RIGHT_FLAG = 16;
    var WRAP_PARTIAL_FLAG = 32;
    var WRAP_PARTIAL_RIGHT_FLAG = 64;
    var nativeMax = Math.max;
    function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
      var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
      if (!isBindKey && typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var length = partials ? partials.length : 0;
      if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = void 0;
      }
      ary = ary === void 0 ? ary : nativeMax(toInteger(ary), 0);
      arity = arity === void 0 ? arity : toInteger(arity);
      length -= holders ? holders.length : 0;
      if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials, holdersRight = holders;
        partials = holders = void 0;
      }
      var data = isBindKey ? void 0 : getData(func);
      var newData = [
        func,
        bitmask,
        thisArg,
        partials,
        holders,
        partialsRight,
        holdersRight,
        argPos,
        ary,
        arity
      ];
      if (data) {
        mergeData(newData, data);
      }
      func = newData[0];
      bitmask = newData[1];
      thisArg = newData[2];
      partials = newData[3];
      holders = newData[4];
      arity = newData[9] = newData[9] === void 0 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
      if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
        bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
      }
      if (!bitmask || bitmask == WRAP_BIND_FLAG) {
        var result = createBind(func, bitmask, thisArg);
      } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
        result = createCurry(func, bitmask, arity);
      } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
        result = createPartial(func, bitmask, thisArg, partials);
      } else {
        result = createHybrid.apply(void 0, newData);
      }
      var setter = data ? baseSetData : setData;
      return setWrapToString(setter(result, newData), func, bitmask);
    }
    module.exports = createWrap;
  }
});

// ../../node_modules/lodash/ary.js
var require_ary = __commonJS({
  "../../node_modules/lodash/ary.js"(exports, module) {
    var createWrap = require_createWrap();
    var WRAP_ARY_FLAG = 128;
    function ary(func, n, guard) {
      n = guard ? void 0 : n;
      n = func && n == null ? func.length : n;
      return createWrap(func, WRAP_ARY_FLAG, void 0, void 0, void 0, void 0, n);
    }
    module.exports = ary;
  }
});

// ../../node_modules/lodash/_baseAssignValue.js
var require_baseAssignValue = __commonJS({
  "../../node_modules/lodash/_baseAssignValue.js"(exports, module) {
    var defineProperty = require_defineProperty();
    function baseAssignValue(object, key, value) {
      if (key == "__proto__" && defineProperty) {
        defineProperty(object, key, {
          "configurable": true,
          "enumerable": true,
          "value": value,
          "writable": true
        });
      } else {
        object[key] = value;
      }
    }
    module.exports = baseAssignValue;
  }
});

// ../../node_modules/lodash/eq.js
var require_eq = __commonJS({
  "../../node_modules/lodash/eq.js"(exports, module) {
    function eq(value, other) {
      return value === other || value !== value && other !== other;
    }
    module.exports = eq;
  }
});

// ../../node_modules/lodash/_assignValue.js
var require_assignValue = __commonJS({
  "../../node_modules/lodash/_assignValue.js"(exports, module) {
    var baseAssignValue = require_baseAssignValue();
    var eq = require_eq();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function assignValue(object, key, value) {
      var objValue = object[key];
      if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
        baseAssignValue(object, key, value);
      }
    }
    module.exports = assignValue;
  }
});

// ../../node_modules/lodash/_copyObject.js
var require_copyObject = __commonJS({
  "../../node_modules/lodash/_copyObject.js"(exports, module) {
    var assignValue = require_assignValue();
    var baseAssignValue = require_baseAssignValue();
    function copyObject(source, props, object, customizer) {
      var isNew = !object;
      object || (object = {});
      var index = -1, length = props.length;
      while (++index < length) {
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
        if (newValue === void 0) {
          newValue = source[key];
        }
        if (isNew) {
          baseAssignValue(object, key, newValue);
        } else {
          assignValue(object, key, newValue);
        }
      }
      return object;
    }
    module.exports = copyObject;
  }
});

// ../../node_modules/lodash/_baseTimes.js
var require_baseTimes = __commonJS({
  "../../node_modules/lodash/_baseTimes.js"(exports, module) {
    function baseTimes(n, iteratee) {
      var index = -1, result = Array(n);
      while (++index < n) {
        result[index] = iteratee(index);
      }
      return result;
    }
    module.exports = baseTimes;
  }
});

// ../../node_modules/lodash/_baseIsArguments.js
var require_baseIsArguments = __commonJS({
  "../../node_modules/lodash/_baseIsArguments.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    function baseIsArguments(value) {
      return isObjectLike(value) && baseGetTag(value) == argsTag;
    }
    module.exports = baseIsArguments;
  }
});

// ../../node_modules/lodash/isArguments.js
var require_isArguments = __commonJS({
  "../../node_modules/lodash/isArguments.js"(exports, module) {
    var baseIsArguments = require_baseIsArguments();
    var isObjectLike = require_isObjectLike();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var isArguments = baseIsArguments(/* @__PURE__ */ function() {
      return arguments;
    }()) ? baseIsArguments : function(value) {
      return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
    };
    module.exports = isArguments;
  }
});

// ../../node_modules/lodash/stubFalse.js
var require_stubFalse = __commonJS({
  "../../node_modules/lodash/stubFalse.js"(exports, module) {
    function stubFalse() {
      return false;
    }
    module.exports = stubFalse;
  }
});

// ../../node_modules/lodash/isBuffer.js
var require_isBuffer = __commonJS({
  "../../node_modules/lodash/isBuffer.js"(exports, module) {
    var root = require_root();
    var stubFalse = require_stubFalse();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
    var isBuffer = nativeIsBuffer || stubFalse;
    module.exports = isBuffer;
  }
});

// ../../node_modules/lodash/isLength.js
var require_isLength = __commonJS({
  "../../node_modules/lodash/isLength.js"(exports, module) {
    var MAX_SAFE_INTEGER = 9007199254740991;
    function isLength(value) {
      return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
    }
    module.exports = isLength;
  }
});

// ../../node_modules/lodash/_baseIsTypedArray.js
var require_baseIsTypedArray = __commonJS({
  "../../node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isLength = require_isLength();
    var isObjectLike = require_isObjectLike();
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    function baseIsTypedArray(value) {
      return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
    }
    module.exports = baseIsTypedArray;
  }
});

// ../../node_modules/lodash/_baseUnary.js
var require_baseUnary = __commonJS({
  "../../node_modules/lodash/_baseUnary.js"(exports, module) {
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    module.exports = baseUnary;
  }
});

// ../../node_modules/lodash/_nodeUtil.js
var require_nodeUtil = __commonJS({
  "../../node_modules/lodash/_nodeUtil.js"(exports, module) {
    var freeGlobal = require_freeGlobal();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    module.exports = nodeUtil;
  }
});

// ../../node_modules/lodash/isTypedArray.js
var require_isTypedArray = __commonJS({
  "../../node_modules/lodash/isTypedArray.js"(exports, module) {
    var baseIsTypedArray = require_baseIsTypedArray();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
    module.exports = isTypedArray;
  }
});

// ../../node_modules/lodash/_arrayLikeKeys.js
var require_arrayLikeKeys = __commonJS({
  "../../node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
    var baseTimes = require_baseTimes();
    var isArguments = require_isArguments();
    var isArray2 = require_isArray();
    var isBuffer = require_isBuffer();
    var isIndex = require_isIndex();
    var isTypedArray = require_isTypedArray();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function arrayLikeKeys(value, inherited) {
      var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
      for (var key in value) {
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
        (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
        isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
        isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
        isIndex(key, length)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = arrayLikeKeys;
  }
});

// ../../node_modules/lodash/_isPrototype.js
var require_isPrototype = __commonJS({
  "../../node_modules/lodash/_isPrototype.js"(exports, module) {
    var objectProto = Object.prototype;
    function isPrototype(value) {
      var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
      return value === proto;
    }
    module.exports = isPrototype;
  }
});

// ../../node_modules/lodash/_overArg.js
var require_overArg = __commonJS({
  "../../node_modules/lodash/_overArg.js"(exports, module) {
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    module.exports = overArg;
  }
});

// ../../node_modules/lodash/_nativeKeys.js
var require_nativeKeys = __commonJS({
  "../../node_modules/lodash/_nativeKeys.js"(exports, module) {
    var overArg = require_overArg();
    var nativeKeys = overArg(Object.keys, Object);
    module.exports = nativeKeys;
  }
});

// ../../node_modules/lodash/_baseKeys.js
var require_baseKeys = __commonJS({
  "../../node_modules/lodash/_baseKeys.js"(exports, module) {
    var isPrototype = require_isPrototype();
    var nativeKeys = require_nativeKeys();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeys(object) {
      if (!isPrototype(object)) {
        return nativeKeys(object);
      }
      var result = [];
      for (var key in Object(object)) {
        if (hasOwnProperty.call(object, key) && key != "constructor") {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeys;
  }
});

// ../../node_modules/lodash/isArrayLike.js
var require_isArrayLike = __commonJS({
  "../../node_modules/lodash/isArrayLike.js"(exports, module) {
    var isFunction = require_isFunction();
    var isLength = require_isLength();
    function isArrayLike(value) {
      return value != null && isLength(value.length) && !isFunction(value);
    }
    module.exports = isArrayLike;
  }
});

// ../../node_modules/lodash/keys.js
var require_keys = __commonJS({
  "../../node_modules/lodash/keys.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeys = require_baseKeys();
    var isArrayLike = require_isArrayLike();
    function keys(object) {
      return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
    }
    module.exports = keys;
  }
});

// ../../node_modules/lodash/_baseAssign.js
var require_baseAssign = __commonJS({
  "../../node_modules/lodash/_baseAssign.js"(exports, module) {
    var copyObject = require_copyObject();
    var keys = require_keys();
    function baseAssign(object, source) {
      return object && copyObject(source, keys(source), object);
    }
    module.exports = baseAssign;
  }
});

// ../../node_modules/lodash/_listCacheClear.js
var require_listCacheClear = __commonJS({
  "../../node_modules/lodash/_listCacheClear.js"(exports, module) {
    function listCacheClear() {
      this.__data__ = [];
      this.size = 0;
    }
    module.exports = listCacheClear;
  }
});

// ../../node_modules/lodash/_assocIndexOf.js
var require_assocIndexOf = __commonJS({
  "../../node_modules/lodash/_assocIndexOf.js"(exports, module) {
    var eq = require_eq();
    function assocIndexOf(array, key) {
      var length = array.length;
      while (length--) {
        if (eq(array[length][0], key)) {
          return length;
        }
      }
      return -1;
    }
    module.exports = assocIndexOf;
  }
});

// ../../node_modules/lodash/_listCacheDelete.js
var require_listCacheDelete = __commonJS({
  "../../node_modules/lodash/_listCacheDelete.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    var arrayProto = Array.prototype;
    var splice = arrayProto.splice;
    function listCacheDelete(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        return false;
      }
      var lastIndex = data.length - 1;
      if (index == lastIndex) {
        data.pop();
      } else {
        splice.call(data, index, 1);
      }
      --this.size;
      return true;
    }
    module.exports = listCacheDelete;
  }
});

// ../../node_modules/lodash/_listCacheGet.js
var require_listCacheGet = __commonJS({
  "../../node_modules/lodash/_listCacheGet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheGet(key) {
      var data = this.__data__, index = assocIndexOf(data, key);
      return index < 0 ? void 0 : data[index][1];
    }
    module.exports = listCacheGet;
  }
});

// ../../node_modules/lodash/_listCacheHas.js
var require_listCacheHas = __commonJS({
  "../../node_modules/lodash/_listCacheHas.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheHas(key) {
      return assocIndexOf(this.__data__, key) > -1;
    }
    module.exports = listCacheHas;
  }
});

// ../../node_modules/lodash/_listCacheSet.js
var require_listCacheSet = __commonJS({
  "../../node_modules/lodash/_listCacheSet.js"(exports, module) {
    var assocIndexOf = require_assocIndexOf();
    function listCacheSet(key, value) {
      var data = this.__data__, index = assocIndexOf(data, key);
      if (index < 0) {
        ++this.size;
        data.push([key, value]);
      } else {
        data[index][1] = value;
      }
      return this;
    }
    module.exports = listCacheSet;
  }
});

// ../../node_modules/lodash/_ListCache.js
var require_ListCache = __commonJS({
  "../../node_modules/lodash/_ListCache.js"(exports, module) {
    var listCacheClear = require_listCacheClear();
    var listCacheDelete = require_listCacheDelete();
    var listCacheGet = require_listCacheGet();
    var listCacheHas = require_listCacheHas();
    var listCacheSet = require_listCacheSet();
    function ListCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    ListCache.prototype.clear = listCacheClear;
    ListCache.prototype["delete"] = listCacheDelete;
    ListCache.prototype.get = listCacheGet;
    ListCache.prototype.has = listCacheHas;
    ListCache.prototype.set = listCacheSet;
    module.exports = ListCache;
  }
});

// ../../node_modules/lodash/_stackClear.js
var require_stackClear = __commonJS({
  "../../node_modules/lodash/_stackClear.js"(exports, module) {
    var ListCache = require_ListCache();
    function stackClear() {
      this.__data__ = new ListCache();
      this.size = 0;
    }
    module.exports = stackClear;
  }
});

// ../../node_modules/lodash/_stackDelete.js
var require_stackDelete = __commonJS({
  "../../node_modules/lodash/_stackDelete.js"(exports, module) {
    function stackDelete(key) {
      var data = this.__data__, result = data["delete"](key);
      this.size = data.size;
      return result;
    }
    module.exports = stackDelete;
  }
});

// ../../node_modules/lodash/_stackGet.js
var require_stackGet = __commonJS({
  "../../node_modules/lodash/_stackGet.js"(exports, module) {
    function stackGet(key) {
      return this.__data__.get(key);
    }
    module.exports = stackGet;
  }
});

// ../../node_modules/lodash/_stackHas.js
var require_stackHas = __commonJS({
  "../../node_modules/lodash/_stackHas.js"(exports, module) {
    function stackHas(key) {
      return this.__data__.has(key);
    }
    module.exports = stackHas;
  }
});

// ../../node_modules/lodash/_Map.js
var require_Map = __commonJS({
  "../../node_modules/lodash/_Map.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Map = getNative(root, "Map");
    module.exports = Map;
  }
});

// ../../node_modules/lodash/_nativeCreate.js
var require_nativeCreate = __commonJS({
  "../../node_modules/lodash/_nativeCreate.js"(exports, module) {
    var getNative = require_getNative();
    var nativeCreate = getNative(Object, "create");
    module.exports = nativeCreate;
  }
});

// ../../node_modules/lodash/_hashClear.js
var require_hashClear = __commonJS({
  "../../node_modules/lodash/_hashClear.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    function hashClear() {
      this.__data__ = nativeCreate ? nativeCreate(null) : {};
      this.size = 0;
    }
    module.exports = hashClear;
  }
});

// ../../node_modules/lodash/_hashDelete.js
var require_hashDelete = __commonJS({
  "../../node_modules/lodash/_hashDelete.js"(exports, module) {
    function hashDelete(key) {
      var result = this.has(key) && delete this.__data__[key];
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = hashDelete;
  }
});

// ../../node_modules/lodash/_hashGet.js
var require_hashGet = __commonJS({
  "../../node_modules/lodash/_hashGet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashGet(key) {
      var data = this.__data__;
      if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? void 0 : result;
      }
      return hasOwnProperty.call(data, key) ? data[key] : void 0;
    }
    module.exports = hashGet;
  }
});

// ../../node_modules/lodash/_hashHas.js
var require_hashHas = __commonJS({
  "../../node_modules/lodash/_hashHas.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function hashHas(key) {
      var data = this.__data__;
      return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
    }
    module.exports = hashHas;
  }
});

// ../../node_modules/lodash/_hashSet.js
var require_hashSet = __commonJS({
  "../../node_modules/lodash/_hashSet.js"(exports, module) {
    var nativeCreate = require_nativeCreate();
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function hashSet(key, value) {
      var data = this.__data__;
      this.size += this.has(key) ? 0 : 1;
      data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
      return this;
    }
    module.exports = hashSet;
  }
});

// ../../node_modules/lodash/_Hash.js
var require_Hash = __commonJS({
  "../../node_modules/lodash/_Hash.js"(exports, module) {
    var hashClear = require_hashClear();
    var hashDelete = require_hashDelete();
    var hashGet = require_hashGet();
    var hashHas = require_hashHas();
    var hashSet = require_hashSet();
    function Hash(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    Hash.prototype.clear = hashClear;
    Hash.prototype["delete"] = hashDelete;
    Hash.prototype.get = hashGet;
    Hash.prototype.has = hashHas;
    Hash.prototype.set = hashSet;
    module.exports = Hash;
  }
});

// ../../node_modules/lodash/_mapCacheClear.js
var require_mapCacheClear = __commonJS({
  "../../node_modules/lodash/_mapCacheClear.js"(exports, module) {
    var Hash = require_Hash();
    var ListCache = require_ListCache();
    var Map = require_Map();
    function mapCacheClear() {
      this.size = 0;
      this.__data__ = {
        "hash": new Hash(),
        "map": new (Map || ListCache)(),
        "string": new Hash()
      };
    }
    module.exports = mapCacheClear;
  }
});

// ../../node_modules/lodash/_isKeyable.js
var require_isKeyable = __commonJS({
  "../../node_modules/lodash/_isKeyable.js"(exports, module) {
    function isKeyable(value) {
      var type = typeof value;
      return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
    }
    module.exports = isKeyable;
  }
});

// ../../node_modules/lodash/_getMapData.js
var require_getMapData = __commonJS({
  "../../node_modules/lodash/_getMapData.js"(exports, module) {
    var isKeyable = require_isKeyable();
    function getMapData(map, key) {
      var data = map.__data__;
      return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
    }
    module.exports = getMapData;
  }
});

// ../../node_modules/lodash/_mapCacheDelete.js
var require_mapCacheDelete = __commonJS({
  "../../node_modules/lodash/_mapCacheDelete.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheDelete(key) {
      var result = getMapData(this, key)["delete"](key);
      this.size -= result ? 1 : 0;
      return result;
    }
    module.exports = mapCacheDelete;
  }
});

// ../../node_modules/lodash/_mapCacheGet.js
var require_mapCacheGet = __commonJS({
  "../../node_modules/lodash/_mapCacheGet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheGet(key) {
      return getMapData(this, key).get(key);
    }
    module.exports = mapCacheGet;
  }
});

// ../../node_modules/lodash/_mapCacheHas.js
var require_mapCacheHas = __commonJS({
  "../../node_modules/lodash/_mapCacheHas.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheHas(key) {
      return getMapData(this, key).has(key);
    }
    module.exports = mapCacheHas;
  }
});

// ../../node_modules/lodash/_mapCacheSet.js
var require_mapCacheSet = __commonJS({
  "../../node_modules/lodash/_mapCacheSet.js"(exports, module) {
    var getMapData = require_getMapData();
    function mapCacheSet(key, value) {
      var data = getMapData(this, key), size = data.size;
      data.set(key, value);
      this.size += data.size == size ? 0 : 1;
      return this;
    }
    module.exports = mapCacheSet;
  }
});

// ../../node_modules/lodash/_MapCache.js
var require_MapCache = __commonJS({
  "../../node_modules/lodash/_MapCache.js"(exports, module) {
    var mapCacheClear = require_mapCacheClear();
    var mapCacheDelete = require_mapCacheDelete();
    var mapCacheGet = require_mapCacheGet();
    var mapCacheHas = require_mapCacheHas();
    var mapCacheSet = require_mapCacheSet();
    function MapCache(entries) {
      var index = -1, length = entries == null ? 0 : entries.length;
      this.clear();
      while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
      }
    }
    MapCache.prototype.clear = mapCacheClear;
    MapCache.prototype["delete"] = mapCacheDelete;
    MapCache.prototype.get = mapCacheGet;
    MapCache.prototype.has = mapCacheHas;
    MapCache.prototype.set = mapCacheSet;
    module.exports = MapCache;
  }
});

// ../../node_modules/lodash/_stackSet.js
var require_stackSet = __commonJS({
  "../../node_modules/lodash/_stackSet.js"(exports, module) {
    var ListCache = require_ListCache();
    var Map = require_Map();
    var MapCache = require_MapCache();
    var LARGE_ARRAY_SIZE = 200;
    function stackSet(key, value) {
      var data = this.__data__;
      if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
          pairs.push([key, value]);
          this.size = ++data.size;
          return this;
        }
        data = this.__data__ = new MapCache(pairs);
      }
      data.set(key, value);
      this.size = data.size;
      return this;
    }
    module.exports = stackSet;
  }
});

// ../../node_modules/lodash/_Stack.js
var require_Stack = __commonJS({
  "../../node_modules/lodash/_Stack.js"(exports, module) {
    var ListCache = require_ListCache();
    var stackClear = require_stackClear();
    var stackDelete = require_stackDelete();
    var stackGet = require_stackGet();
    var stackHas = require_stackHas();
    var stackSet = require_stackSet();
    function Stack(entries) {
      var data = this.__data__ = new ListCache(entries);
      this.size = data.size;
    }
    Stack.prototype.clear = stackClear;
    Stack.prototype["delete"] = stackDelete;
    Stack.prototype.get = stackGet;
    Stack.prototype.has = stackHas;
    Stack.prototype.set = stackSet;
    module.exports = Stack;
  }
});

// ../../node_modules/lodash/_nativeKeysIn.js
var require_nativeKeysIn = __commonJS({
  "../../node_modules/lodash/_nativeKeysIn.js"(exports, module) {
    function nativeKeysIn(object) {
      var result = [];
      if (object != null) {
        for (var key in Object(object)) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = nativeKeysIn;
  }
});

// ../../node_modules/lodash/_baseKeysIn.js
var require_baseKeysIn = __commonJS({
  "../../node_modules/lodash/_baseKeysIn.js"(exports, module) {
    var isObject2 = require_isObject();
    var isPrototype = require_isPrototype();
    var nativeKeysIn = require_nativeKeysIn();
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseKeysIn(object) {
      if (!isObject2(object)) {
        return nativeKeysIn(object);
      }
      var isProto = isPrototype(object), result = [];
      for (var key in object) {
        if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
          result.push(key);
        }
      }
      return result;
    }
    module.exports = baseKeysIn;
  }
});

// ../../node_modules/lodash/keysIn.js
var require_keysIn = __commonJS({
  "../../node_modules/lodash/keysIn.js"(exports, module) {
    var arrayLikeKeys = require_arrayLikeKeys();
    var baseKeysIn = require_baseKeysIn();
    var isArrayLike = require_isArrayLike();
    function keysIn(object) {
      return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
    }
    module.exports = keysIn;
  }
});

// ../../node_modules/lodash/_baseAssignIn.js
var require_baseAssignIn = __commonJS({
  "../../node_modules/lodash/_baseAssignIn.js"(exports, module) {
    var copyObject = require_copyObject();
    var keysIn = require_keysIn();
    function baseAssignIn(object, source) {
      return object && copyObject(source, keysIn(source), object);
    }
    module.exports = baseAssignIn;
  }
});

// ../../node_modules/lodash/_cloneBuffer.js
var require_cloneBuffer = __commonJS({
  "../../node_modules/lodash/_cloneBuffer.js"(exports, module) {
    var root = require_root();
    var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
    var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var Buffer2 = moduleExports ? root.Buffer : void 0;
    var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
    function cloneBuffer(buffer, isDeep) {
      if (isDeep) {
        return buffer.slice();
      }
      var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
      buffer.copy(result);
      return result;
    }
    module.exports = cloneBuffer;
  }
});

// ../../node_modules/lodash/_arrayFilter.js
var require_arrayFilter = __commonJS({
  "../../node_modules/lodash/_arrayFilter.js"(exports, module) {
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    module.exports = arrayFilter;
  }
});

// ../../node_modules/lodash/stubArray.js
var require_stubArray = __commonJS({
  "../../node_modules/lodash/stubArray.js"(exports, module) {
    function stubArray() {
      return [];
    }
    module.exports = stubArray;
  }
});

// ../../node_modules/lodash/_getSymbols.js
var require_getSymbols = __commonJS({
  "../../node_modules/lodash/_getSymbols.js"(exports, module) {
    var arrayFilter = require_arrayFilter();
    var stubArray = require_stubArray();
    var objectProto = Object.prototype;
    var propertyIsEnumerable = objectProto.propertyIsEnumerable;
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
      if (object == null) {
        return [];
      }
      object = Object(object);
      return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
      });
    };
    module.exports = getSymbols;
  }
});

// ../../node_modules/lodash/_copySymbols.js
var require_copySymbols = __commonJS({
  "../../node_modules/lodash/_copySymbols.js"(exports, module) {
    var copyObject = require_copyObject();
    var getSymbols = require_getSymbols();
    function copySymbols(source, object) {
      return copyObject(source, getSymbols(source), object);
    }
    module.exports = copySymbols;
  }
});

// ../../node_modules/lodash/_arrayPush.js
var require_arrayPush = __commonJS({
  "../../node_modules/lodash/_arrayPush.js"(exports, module) {
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    module.exports = arrayPush;
  }
});

// ../../node_modules/lodash/_getPrototype.js
var require_getPrototype = __commonJS({
  "../../node_modules/lodash/_getPrototype.js"(exports, module) {
    var overArg = require_overArg();
    var getPrototype = overArg(Object.getPrototypeOf, Object);
    module.exports = getPrototype;
  }
});

// ../../node_modules/lodash/_getSymbolsIn.js
var require_getSymbolsIn = __commonJS({
  "../../node_modules/lodash/_getSymbolsIn.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var getPrototype = require_getPrototype();
    var getSymbols = require_getSymbols();
    var stubArray = require_stubArray();
    var nativeGetSymbols = Object.getOwnPropertySymbols;
    var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
      var result = [];
      while (object) {
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
      }
      return result;
    };
    module.exports = getSymbolsIn;
  }
});

// ../../node_modules/lodash/_copySymbolsIn.js
var require_copySymbolsIn = __commonJS({
  "../../node_modules/lodash/_copySymbolsIn.js"(exports, module) {
    var copyObject = require_copyObject();
    var getSymbolsIn = require_getSymbolsIn();
    function copySymbolsIn(source, object) {
      return copyObject(source, getSymbolsIn(source), object);
    }
    module.exports = copySymbolsIn;
  }
});

// ../../node_modules/lodash/_baseGetAllKeys.js
var require_baseGetAllKeys = __commonJS({
  "../../node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isArray2 = require_isArray();
    function baseGetAllKeys(object, keysFunc, symbolsFunc) {
      var result = keysFunc(object);
      return isArray2(object) ? result : arrayPush(result, symbolsFunc(object));
    }
    module.exports = baseGetAllKeys;
  }
});

// ../../node_modules/lodash/_getAllKeys.js
var require_getAllKeys = __commonJS({
  "../../node_modules/lodash/_getAllKeys.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbols = require_getSymbols();
    var keys = require_keys();
    function getAllKeys(object) {
      return baseGetAllKeys(object, keys, getSymbols);
    }
    module.exports = getAllKeys;
  }
});

// ../../node_modules/lodash/_getAllKeysIn.js
var require_getAllKeysIn = __commonJS({
  "../../node_modules/lodash/_getAllKeysIn.js"(exports, module) {
    var baseGetAllKeys = require_baseGetAllKeys();
    var getSymbolsIn = require_getSymbolsIn();
    var keysIn = require_keysIn();
    function getAllKeysIn(object) {
      return baseGetAllKeys(object, keysIn, getSymbolsIn);
    }
    module.exports = getAllKeysIn;
  }
});

// ../../node_modules/lodash/_DataView.js
var require_DataView = __commonJS({
  "../../node_modules/lodash/_DataView.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var DataView = getNative(root, "DataView");
    module.exports = DataView;
  }
});

// ../../node_modules/lodash/_Promise.js
var require_Promise = __commonJS({
  "../../node_modules/lodash/_Promise.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Promise2 = getNative(root, "Promise");
    module.exports = Promise2;
  }
});

// ../../node_modules/lodash/_Set.js
var require_Set = __commonJS({
  "../../node_modules/lodash/_Set.js"(exports, module) {
    var getNative = require_getNative();
    var root = require_root();
    var Set = getNative(root, "Set");
    module.exports = Set;
  }
});

// ../../node_modules/lodash/_getTag.js
var require_getTag = __commonJS({
  "../../node_modules/lodash/_getTag.js"(exports, module) {
    var DataView = require_DataView();
    var Map = require_Map();
    var Promise2 = require_Promise();
    var Set = require_Set();
    var WeakMap = require_WeakMap();
    var baseGetTag = require_baseGetTag();
    var toSource = require_toSource();
    var mapTag = "[object Map]";
    var objectTag = "[object Object]";
    var promiseTag = "[object Promise]";
    var setTag = "[object Set]";
    var weakMapTag = "[object WeakMap]";
    var dataViewTag = "[object DataView]";
    var dataViewCtorString = toSource(DataView);
    var mapCtorString = toSource(Map);
    var promiseCtorString = toSource(Promise2);
    var setCtorString = toSource(Set);
    var weakMapCtorString = toSource(WeakMap);
    var getTag = baseGetTag;
    if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
      getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
        if (ctorString) {
          switch (ctorString) {
            case dataViewCtorString:
              return dataViewTag;
            case mapCtorString:
              return mapTag;
            case promiseCtorString:
              return promiseTag;
            case setCtorString:
              return setTag;
            case weakMapCtorString:
              return weakMapTag;
          }
        }
        return result;
      };
    }
    module.exports = getTag;
  }
});

// ../../node_modules/lodash/_initCloneArray.js
var require_initCloneArray = __commonJS({
  "../../node_modules/lodash/_initCloneArray.js"(exports, module) {
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function initCloneArray(array) {
      var length = array.length, result = new array.constructor(length);
      if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
        result.index = array.index;
        result.input = array.input;
      }
      return result;
    }
    module.exports = initCloneArray;
  }
});

// ../../node_modules/lodash/_Uint8Array.js
var require_Uint8Array = __commonJS({
  "../../node_modules/lodash/_Uint8Array.js"(exports, module) {
    var root = require_root();
    var Uint8Array2 = root.Uint8Array;
    module.exports = Uint8Array2;
  }
});

// ../../node_modules/lodash/_cloneArrayBuffer.js
var require_cloneArrayBuffer = __commonJS({
  "../../node_modules/lodash/_cloneArrayBuffer.js"(exports, module) {
    var Uint8Array2 = require_Uint8Array();
    function cloneArrayBuffer(arrayBuffer) {
      var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
      new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
      return result;
    }
    module.exports = cloneArrayBuffer;
  }
});

// ../../node_modules/lodash/_cloneDataView.js
var require_cloneDataView = __commonJS({
  "../../node_modules/lodash/_cloneDataView.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneDataView(dataView, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
      return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
    }
    module.exports = cloneDataView;
  }
});

// ../../node_modules/lodash/_cloneRegExp.js
var require_cloneRegExp = __commonJS({
  "../../node_modules/lodash/_cloneRegExp.js"(exports, module) {
    var reFlags = /\w*$/;
    function cloneRegExp(regexp) {
      var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
      result.lastIndex = regexp.lastIndex;
      return result;
    }
    module.exports = cloneRegExp;
  }
});

// ../../node_modules/lodash/_cloneSymbol.js
var require_cloneSymbol = __commonJS({
  "../../node_modules/lodash/_cloneSymbol.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function cloneSymbol(symbol) {
      return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
    }
    module.exports = cloneSymbol;
  }
});

// ../../node_modules/lodash/_cloneTypedArray.js
var require_cloneTypedArray = __commonJS({
  "../../node_modules/lodash/_cloneTypedArray.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    function cloneTypedArray(typedArray, isDeep) {
      var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
      return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
    }
    module.exports = cloneTypedArray;
  }
});

// ../../node_modules/lodash/_initCloneByTag.js
var require_initCloneByTag = __commonJS({
  "../../node_modules/lodash/_initCloneByTag.js"(exports, module) {
    var cloneArrayBuffer = require_cloneArrayBuffer();
    var cloneDataView = require_cloneDataView();
    var cloneRegExp = require_cloneRegExp();
    var cloneSymbol = require_cloneSymbol();
    var cloneTypedArray = require_cloneTypedArray();
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    function initCloneByTag(object, tag, isDeep) {
      var Ctor = object.constructor;
      switch (tag) {
        case arrayBufferTag:
          return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
          return new Ctor(+object);
        case dataViewTag:
          return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
          return cloneTypedArray(object, isDeep);
        case mapTag:
          return new Ctor();
        case numberTag:
        case stringTag:
          return new Ctor(object);
        case regexpTag:
          return cloneRegExp(object);
        case setTag:
          return new Ctor();
        case symbolTag:
          return cloneSymbol(object);
      }
    }
    module.exports = initCloneByTag;
  }
});

// ../../node_modules/lodash/_initCloneObject.js
var require_initCloneObject = __commonJS({
  "../../node_modules/lodash/_initCloneObject.js"(exports, module) {
    var baseCreate = require_baseCreate();
    var getPrototype = require_getPrototype();
    var isPrototype = require_isPrototype();
    function initCloneObject(object) {
      return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
    }
    module.exports = initCloneObject;
  }
});

// ../../node_modules/lodash/_baseIsMap.js
var require_baseIsMap = __commonJS({
  "../../node_modules/lodash/_baseIsMap.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var mapTag = "[object Map]";
    function baseIsMap(value) {
      return isObjectLike(value) && getTag(value) == mapTag;
    }
    module.exports = baseIsMap;
  }
});

// ../../node_modules/lodash/isMap.js
var require_isMap = __commonJS({
  "../../node_modules/lodash/isMap.js"(exports, module) {
    var baseIsMap = require_baseIsMap();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsMap = nodeUtil && nodeUtil.isMap;
    var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
    module.exports = isMap;
  }
});

// ../../node_modules/lodash/_baseIsSet.js
var require_baseIsSet = __commonJS({
  "../../node_modules/lodash/_baseIsSet.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var setTag = "[object Set]";
    function baseIsSet(value) {
      return isObjectLike(value) && getTag(value) == setTag;
    }
    module.exports = baseIsSet;
  }
});

// ../../node_modules/lodash/isSet.js
var require_isSet = __commonJS({
  "../../node_modules/lodash/isSet.js"(exports, module) {
    var baseIsSet = require_baseIsSet();
    var baseUnary = require_baseUnary();
    var nodeUtil = require_nodeUtil();
    var nodeIsSet = nodeUtil && nodeUtil.isSet;
    var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
    module.exports = isSet;
  }
});

// ../../node_modules/lodash/_baseClone.js
var require_baseClone = __commonJS({
  "../../node_modules/lodash/_baseClone.js"(exports, module) {
    var Stack = require_Stack();
    var arrayEach = require_arrayEach();
    var assignValue = require_assignValue();
    var baseAssign = require_baseAssign();
    var baseAssignIn = require_baseAssignIn();
    var cloneBuffer = require_cloneBuffer();
    var copyArray = require_copyArray();
    var copySymbols = require_copySymbols();
    var copySymbolsIn = require_copySymbolsIn();
    var getAllKeys = require_getAllKeys();
    var getAllKeysIn = require_getAllKeysIn();
    var getTag = require_getTag();
    var initCloneArray = require_initCloneArray();
    var initCloneByTag = require_initCloneByTag();
    var initCloneObject = require_initCloneObject();
    var isArray2 = require_isArray();
    var isBuffer = require_isBuffer();
    var isMap = require_isMap();
    var isObject2 = require_isObject();
    var isSet = require_isSet();
    var keys = require_keys();
    var keysIn = require_keysIn();
    var CLONE_DEEP_FLAG = 1;
    var CLONE_FLAT_FLAG = 2;
    var CLONE_SYMBOLS_FLAG = 4;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var funcTag = "[object Function]";
    var genTag = "[object GeneratorFunction]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var objectTag = "[object Object]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var weakMapTag = "[object WeakMap]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var float32Tag = "[object Float32Array]";
    var float64Tag = "[object Float64Array]";
    var int8Tag = "[object Int8Array]";
    var int16Tag = "[object Int16Array]";
    var int32Tag = "[object Int32Array]";
    var uint8Tag = "[object Uint8Array]";
    var uint8ClampedTag = "[object Uint8ClampedArray]";
    var uint16Tag = "[object Uint16Array]";
    var uint32Tag = "[object Uint32Array]";
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    function baseClone(value, bitmask, customizer, key, object, stack) {
      var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
      if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
      }
      if (result !== void 0) {
        return result;
      }
      if (!isObject2(value)) {
        return value;
      }
      var isArr = isArray2(value);
      if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
          return copyArray(value, result);
        }
      } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
          return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
          result = isFlat || isFunc ? {} : initCloneObject(value);
          if (!isDeep) {
            return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
          }
        } else {
          if (!cloneableTags[tag]) {
            return object ? value : {};
          }
          result = initCloneByTag(value, tag, isDeep);
        }
      }
      stack || (stack = new Stack());
      var stacked = stack.get(value);
      if (stacked) {
        return stacked;
      }
      stack.set(value, result);
      if (isSet(value)) {
        value.forEach(function(subValue) {
          result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
      } else if (isMap(value)) {
        value.forEach(function(subValue, key2) {
          result.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
      }
      var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
      var props = isArr ? void 0 : keysFunc(value);
      arrayEach(props || value, function(subValue, key2) {
        if (props) {
          key2 = subValue;
          subValue = value[key2];
        }
        assignValue(result, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
      });
      return result;
    }
    module.exports = baseClone;
  }
});

// ../../node_modules/lodash/clone.js
var require_clone = __commonJS({
  "../../node_modules/lodash/clone.js"(exports, module) {
    var baseClone = require_baseClone();
    var CLONE_SYMBOLS_FLAG = 4;
    function clone(value) {
      return baseClone(value, CLONE_SYMBOLS_FLAG);
    }
    module.exports = clone;
  }
});

// ../../node_modules/lodash/curry.js
var require_curry = __commonJS({
  "../../node_modules/lodash/curry.js"(exports, module) {
    var createWrap = require_createWrap();
    var WRAP_CURRY_FLAG = 8;
    function curry(func, arity, guard) {
      arity = guard ? void 0 : arity;
      var result = createWrap(func, WRAP_CURRY_FLAG, void 0, void 0, void 0, void 0, void 0, arity);
      result.placeholder = curry.placeholder;
      return result;
    }
    curry.placeholder = {};
    module.exports = curry;
  }
});

// ../../node_modules/lodash/isPlainObject.js
var require_isPlainObject = __commonJS({
  "../../node_modules/lodash/isPlainObject.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var getPrototype = require_getPrototype();
    var isObjectLike = require_isObjectLike();
    var objectTag = "[object Object]";
    var funcProto = Function.prototype;
    var objectProto = Object.prototype;
    var funcToString = funcProto.toString;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var objectCtorString = funcToString.call(Object);
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
      }
      var proto = getPrototype(value);
      if (proto === null) {
        return true;
      }
      var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
    }
    module.exports = isPlainObject;
  }
});

// ../../node_modules/lodash/isError.js
var require_isError = __commonJS({
  "../../node_modules/lodash/isError.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var isPlainObject = require_isPlainObject();
    var domExcTag = "[object DOMException]";
    var errorTag = "[object Error]";
    function isError(value) {
      if (!isObjectLike(value)) {
        return false;
      }
      var tag = baseGetTag(value);
      return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
    }
    module.exports = isError;
  }
});

// ../../node_modules/lodash/isWeakMap.js
var require_isWeakMap = __commonJS({
  "../../node_modules/lodash/isWeakMap.js"(exports, module) {
    var getTag = require_getTag();
    var isObjectLike = require_isObjectLike();
    var weakMapTag = "[object WeakMap]";
    function isWeakMap(value) {
      return isObjectLike(value) && getTag(value) == weakMapTag;
    }
    module.exports = isWeakMap;
  }
});

// ../../node_modules/lodash/_setCacheAdd.js
var require_setCacheAdd = __commonJS({
  "../../node_modules/lodash/_setCacheAdd.js"(exports, module) {
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    function setCacheAdd(value) {
      this.__data__.set(value, HASH_UNDEFINED);
      return this;
    }
    module.exports = setCacheAdd;
  }
});

// ../../node_modules/lodash/_setCacheHas.js
var require_setCacheHas = __commonJS({
  "../../node_modules/lodash/_setCacheHas.js"(exports, module) {
    function setCacheHas(value) {
      return this.__data__.has(value);
    }
    module.exports = setCacheHas;
  }
});

// ../../node_modules/lodash/_SetCache.js
var require_SetCache = __commonJS({
  "../../node_modules/lodash/_SetCache.js"(exports, module) {
    var MapCache = require_MapCache();
    var setCacheAdd = require_setCacheAdd();
    var setCacheHas = require_setCacheHas();
    function SetCache(values) {
      var index = -1, length = values == null ? 0 : values.length;
      this.__data__ = new MapCache();
      while (++index < length) {
        this.add(values[index]);
      }
    }
    SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
    SetCache.prototype.has = setCacheHas;
    module.exports = SetCache;
  }
});

// ../../node_modules/lodash/_arraySome.js
var require_arraySome = __commonJS({
  "../../node_modules/lodash/_arraySome.js"(exports, module) {
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    module.exports = arraySome;
  }
});

// ../../node_modules/lodash/_cacheHas.js
var require_cacheHas = __commonJS({
  "../../node_modules/lodash/_cacheHas.js"(exports, module) {
    function cacheHas(cache, key) {
      return cache.has(key);
    }
    module.exports = cacheHas;
  }
});

// ../../node_modules/lodash/_equalArrays.js
var require_equalArrays = __commonJS({
  "../../node_modules/lodash/_equalArrays.js"(exports, module) {
    var SetCache = require_SetCache();
    var arraySome = require_arraySome();
    var cacheHas = require_cacheHas();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
      if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
      }
      var arrStacked = stack.get(array);
      var othStacked = stack.get(other);
      if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
      }
      var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
      stack.set(array, other);
      stack.set(other, array);
      while (++index < arrLength) {
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== void 0) {
          if (compared) {
            continue;
          }
          result = false;
          break;
        }
        if (seen) {
          if (!arraySome(other, function(othValue2, othIndex) {
            if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
            result = false;
            break;
          }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          result = false;
          break;
        }
      }
      stack["delete"](array);
      stack["delete"](other);
      return result;
    }
    module.exports = equalArrays;
  }
});

// ../../node_modules/lodash/_mapToArray.js
var require_mapToArray = __commonJS({
  "../../node_modules/lodash/_mapToArray.js"(exports, module) {
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    module.exports = mapToArray;
  }
});

// ../../node_modules/lodash/_setToArray.js
var require_setToArray = __commonJS({
  "../../node_modules/lodash/_setToArray.js"(exports, module) {
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    module.exports = setToArray;
  }
});

// ../../node_modules/lodash/_equalByTag.js
var require_equalByTag = __commonJS({
  "../../node_modules/lodash/_equalByTag.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var Uint8Array2 = require_Uint8Array();
    var eq = require_eq();
    var equalArrays = require_equalArrays();
    var mapToArray = require_mapToArray();
    var setToArray = require_setToArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    var boolTag = "[object Boolean]";
    var dateTag = "[object Date]";
    var errorTag = "[object Error]";
    var mapTag = "[object Map]";
    var numberTag = "[object Number]";
    var regexpTag = "[object RegExp]";
    var setTag = "[object Set]";
    var stringTag = "[object String]";
    var symbolTag = "[object Symbol]";
    var arrayBufferTag = "[object ArrayBuffer]";
    var dataViewTag = "[object DataView]";
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
    function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
      switch (tag) {
        case dataViewTag:
          if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
            return false;
          }
          object = object.buffer;
          other = other.buffer;
        case arrayBufferTag:
          if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
            return false;
          }
          return true;
        case boolTag:
        case dateTag:
        case numberTag:
          return eq(+object, +other);
        case errorTag:
          return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
          return object == other + "";
        case mapTag:
          var convert = mapToArray;
        case setTag:
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
          convert || (convert = setToArray);
          if (object.size != other.size && !isPartial) {
            return false;
          }
          var stacked = stack.get(object);
          if (stacked) {
            return stacked == other;
          }
          bitmask |= COMPARE_UNORDERED_FLAG;
          stack.set(object, other);
          var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
          stack["delete"](object);
          return result;
        case symbolTag:
          if (symbolValueOf) {
            return symbolValueOf.call(object) == symbolValueOf.call(other);
          }
      }
      return false;
    }
    module.exports = equalByTag;
  }
});

// ../../node_modules/lodash/_equalObjects.js
var require_equalObjects = __commonJS({
  "../../node_modules/lodash/_equalObjects.js"(exports, module) {
    var getAllKeys = require_getAllKeys();
    var COMPARE_PARTIAL_FLAG = 1;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
      if (objLength != othLength && !isPartial) {
        return false;
      }
      var index = objLength;
      while (index--) {
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
          return false;
        }
      }
      var objStacked = stack.get(object);
      var othStacked = stack.get(other);
      if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
      }
      var result = true;
      stack.set(object, other);
      stack.set(other, object);
      var skipCtor = isPartial;
      while (++index < objLength) {
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
          var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
          result = false;
          break;
        }
        skipCtor || (skipCtor = key == "constructor");
      }
      if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
          result = false;
        }
      }
      stack["delete"](object);
      stack["delete"](other);
      return result;
    }
    module.exports = equalObjects;
  }
});

// ../../node_modules/lodash/_baseIsEqualDeep.js
var require_baseIsEqualDeep = __commonJS({
  "../../node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
    var Stack = require_Stack();
    var equalArrays = require_equalArrays();
    var equalByTag = require_equalByTag();
    var equalObjects = require_equalObjects();
    var getTag = require_getTag();
    var isArray2 = require_isArray();
    var isBuffer = require_isBuffer();
    var isTypedArray = require_isTypedArray();
    var COMPARE_PARTIAL_FLAG = 1;
    var argsTag = "[object Arguments]";
    var arrayTag = "[object Array]";
    var objectTag = "[object Object]";
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
      var objIsArr = isArray2(object), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
      objTag = objTag == argsTag ? objectTag : objTag;
      othTag = othTag == argsTag ? objectTag : othTag;
      var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
      if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
          return false;
        }
        objIsArr = true;
        objIsObj = false;
      }
      if (isSameTag && !objIsObj) {
        stack || (stack = new Stack());
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
      }
      if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
          var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
          stack || (stack = new Stack());
          return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
      }
      if (!isSameTag) {
        return false;
      }
      stack || (stack = new Stack());
      return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
    }
    module.exports = baseIsEqualDeep;
  }
});

// ../../node_modules/lodash/_baseIsEqual.js
var require_baseIsEqual = __commonJS({
  "../../node_modules/lodash/_baseIsEqual.js"(exports, module) {
    var baseIsEqualDeep = require_baseIsEqualDeep();
    var isObjectLike = require_isObjectLike();
    function baseIsEqual(value, other, bitmask, customizer, stack) {
      if (value === other) {
        return true;
      }
      if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
      }
      return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
    }
    module.exports = baseIsEqual;
  }
});

// ../../node_modules/lodash/_baseIsMatch.js
var require_baseIsMatch = __commonJS({
  "../../node_modules/lodash/_baseIsMatch.js"(exports, module) {
    var Stack = require_Stack();
    var baseIsEqual = require_baseIsEqual();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseIsMatch(object, source, matchData, customizer) {
      var index = matchData.length, length = index, noCustomizer = !customizer;
      if (object == null) {
        return !length;
      }
      object = Object(object);
      while (index--) {
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
          return false;
        }
      }
      while (++index < length) {
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
          if (objValue === void 0 && !(key in object)) {
            return false;
          }
        } else {
          var stack = new Stack();
          if (customizer) {
            var result = customizer(objValue, srcValue, key, object, source, stack);
          }
          if (!(result === void 0 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
            return false;
          }
        }
      }
      return true;
    }
    module.exports = baseIsMatch;
  }
});

// ../../node_modules/lodash/_isStrictComparable.js
var require_isStrictComparable = __commonJS({
  "../../node_modules/lodash/_isStrictComparable.js"(exports, module) {
    var isObject2 = require_isObject();
    function isStrictComparable(value) {
      return value === value && !isObject2(value);
    }
    module.exports = isStrictComparable;
  }
});

// ../../node_modules/lodash/_getMatchData.js
var require_getMatchData = __commonJS({
  "../../node_modules/lodash/_getMatchData.js"(exports, module) {
    var isStrictComparable = require_isStrictComparable();
    var keys = require_keys();
    function getMatchData(object) {
      var result = keys(object), length = result.length;
      while (length--) {
        var key = result[length], value = object[key];
        result[length] = [key, value, isStrictComparable(value)];
      }
      return result;
    }
    module.exports = getMatchData;
  }
});

// ../../node_modules/lodash/_matchesStrictComparable.js
var require_matchesStrictComparable = __commonJS({
  "../../node_modules/lodash/_matchesStrictComparable.js"(exports, module) {
    function matchesStrictComparable(key, srcValue) {
      return function(object) {
        if (object == null) {
          return false;
        }
        return object[key] === srcValue && (srcValue !== void 0 || key in Object(object));
      };
    }
    module.exports = matchesStrictComparable;
  }
});

// ../../node_modules/lodash/_baseMatches.js
var require_baseMatches = __commonJS({
  "../../node_modules/lodash/_baseMatches.js"(exports, module) {
    var baseIsMatch = require_baseIsMatch();
    var getMatchData = require_getMatchData();
    var matchesStrictComparable = require_matchesStrictComparable();
    function baseMatches(source) {
      var matchData = getMatchData(source);
      if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
      }
      return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
      };
    }
    module.exports = baseMatches;
  }
});

// ../../node_modules/lodash/_isKey.js
var require_isKey = __commonJS({
  "../../node_modules/lodash/_isKey.js"(exports, module) {
    var isArray2 = require_isArray();
    var isSymbol = require_isSymbol();
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
    var reIsPlainProp = /^\w*$/;
    function isKey(value, object) {
      if (isArray2(value)) {
        return false;
      }
      var type = typeof value;
      if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
        return true;
      }
      return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
    }
    module.exports = isKey;
  }
});

// ../../node_modules/lodash/memoize.js
var require_memoize = __commonJS({
  "../../node_modules/lodash/memoize.js"(exports, module) {
    var MapCache = require_MapCache();
    var FUNC_ERROR_TEXT = "Expected a function";
    function memoize(func, resolver) {
      if (typeof func != "function" || resolver != null && typeof resolver != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
          return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
      };
      memoized.cache = new (memoize.Cache || MapCache)();
      return memoized;
    }
    memoize.Cache = MapCache;
    module.exports = memoize;
  }
});

// ../../node_modules/lodash/_memoizeCapped.js
var require_memoizeCapped = __commonJS({
  "../../node_modules/lodash/_memoizeCapped.js"(exports, module) {
    var memoize = require_memoize();
    var MAX_MEMOIZE_SIZE = 500;
    function memoizeCapped(func) {
      var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
          cache.clear();
        }
        return key;
      });
      var cache = result.cache;
      return result;
    }
    module.exports = memoizeCapped;
  }
});

// ../../node_modules/lodash/_stringToPath.js
var require_stringToPath = __commonJS({
  "../../node_modules/lodash/_stringToPath.js"(exports, module) {
    var memoizeCapped = require_memoizeCapped();
    var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = memoizeCapped(function(string) {
      var result = [];
      if (string.charCodeAt(0) === 46) {
        result.push("");
      }
      string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
      });
      return result;
    });
    module.exports = stringToPath;
  }
});

// ../../node_modules/lodash/_arrayMap.js
var require_arrayMap = __commonJS({
  "../../node_modules/lodash/_arrayMap.js"(exports, module) {
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    module.exports = arrayMap;
  }
});

// ../../node_modules/lodash/_baseToString.js
var require_baseToString = __commonJS({
  "../../node_modules/lodash/_baseToString.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var arrayMap = require_arrayMap();
    var isArray2 = require_isArray();
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isArray2(value)) {
        return arrayMap(value, baseToString) + "";
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = baseToString;
  }
});

// ../../node_modules/lodash/toString.js
var require_toString = __commonJS({
  "../../node_modules/lodash/toString.js"(exports, module) {
    var baseToString = require_baseToString();
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    module.exports = toString;
  }
});

// ../../node_modules/lodash/_castPath.js
var require_castPath = __commonJS({
  "../../node_modules/lodash/_castPath.js"(exports, module) {
    var isArray2 = require_isArray();
    var isKey = require_isKey();
    var stringToPath = require_stringToPath();
    var toString = require_toString();
    function castPath(value, object) {
      if (isArray2(value)) {
        return value;
      }
      return isKey(value, object) ? [value] : stringToPath(toString(value));
    }
    module.exports = castPath;
  }
});

// ../../node_modules/lodash/_toKey.js
var require_toKey = __commonJS({
  "../../node_modules/lodash/_toKey.js"(exports, module) {
    var isSymbol = require_isSymbol();
    var INFINITY = 1 / 0;
    function toKey(value) {
      if (typeof value == "string" || isSymbol(value)) {
        return value;
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    module.exports = toKey;
  }
});

// ../../node_modules/lodash/_baseGet.js
var require_baseGet = __commonJS({
  "../../node_modules/lodash/_baseGet.js"(exports, module) {
    var castPath = require_castPath();
    var toKey = require_toKey();
    function baseGet(object, path) {
      path = castPath(path, object);
      var index = 0, length = path.length;
      while (object != null && index < length) {
        object = object[toKey(path[index++])];
      }
      return index && index == length ? object : void 0;
    }
    module.exports = baseGet;
  }
});

// ../../node_modules/lodash/get.js
var require_get = __commonJS({
  "../../node_modules/lodash/get.js"(exports, module) {
    var baseGet = require_baseGet();
    function get(object, path, defaultValue) {
      var result = object == null ? void 0 : baseGet(object, path);
      return result === void 0 ? defaultValue : result;
    }
    module.exports = get;
  }
});

// ../../node_modules/lodash/_baseHasIn.js
var require_baseHasIn = __commonJS({
  "../../node_modules/lodash/_baseHasIn.js"(exports, module) {
    function baseHasIn(object, key) {
      return object != null && key in Object(object);
    }
    module.exports = baseHasIn;
  }
});

// ../../node_modules/lodash/_hasPath.js
var require_hasPath = __commonJS({
  "../../node_modules/lodash/_hasPath.js"(exports, module) {
    var castPath = require_castPath();
    var isArguments = require_isArguments();
    var isArray2 = require_isArray();
    var isIndex = require_isIndex();
    var isLength = require_isLength();
    var toKey = require_toKey();
    function hasPath(object, path, hasFunc) {
      path = castPath(path, object);
      var index = -1, length = path.length, result = false;
      while (++index < length) {
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
          break;
        }
        object = object[key];
      }
      if (result || ++index != length) {
        return result;
      }
      length = object == null ? 0 : object.length;
      return !!length && isLength(length) && isIndex(key, length) && (isArray2(object) || isArguments(object));
    }
    module.exports = hasPath;
  }
});

// ../../node_modules/lodash/hasIn.js
var require_hasIn = __commonJS({
  "../../node_modules/lodash/hasIn.js"(exports, module) {
    var baseHasIn = require_baseHasIn();
    var hasPath = require_hasPath();
    function hasIn(object, path) {
      return object != null && hasPath(object, path, baseHasIn);
    }
    module.exports = hasIn;
  }
});

// ../../node_modules/lodash/_baseMatchesProperty.js
var require_baseMatchesProperty = __commonJS({
  "../../node_modules/lodash/_baseMatchesProperty.js"(exports, module) {
    var baseIsEqual = require_baseIsEqual();
    var get = require_get();
    var hasIn = require_hasIn();
    var isKey = require_isKey();
    var isStrictComparable = require_isStrictComparable();
    var matchesStrictComparable = require_matchesStrictComparable();
    var toKey = require_toKey();
    var COMPARE_PARTIAL_FLAG = 1;
    var COMPARE_UNORDERED_FLAG = 2;
    function baseMatchesProperty(path, srcValue) {
      if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
      }
      return function(object) {
        var objValue = get(object, path);
        return objValue === void 0 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
    }
    module.exports = baseMatchesProperty;
  }
});

// ../../node_modules/lodash/_baseProperty.js
var require_baseProperty = __commonJS({
  "../../node_modules/lodash/_baseProperty.js"(exports, module) {
    function baseProperty(key) {
      return function(object) {
        return object == null ? void 0 : object[key];
      };
    }
    module.exports = baseProperty;
  }
});

// ../../node_modules/lodash/_basePropertyDeep.js
var require_basePropertyDeep = __commonJS({
  "../../node_modules/lodash/_basePropertyDeep.js"(exports, module) {
    var baseGet = require_baseGet();
    function basePropertyDeep(path) {
      return function(object) {
        return baseGet(object, path);
      };
    }
    module.exports = basePropertyDeep;
  }
});

// ../../node_modules/lodash/property.js
var require_property = __commonJS({
  "../../node_modules/lodash/property.js"(exports, module) {
    var baseProperty = require_baseProperty();
    var basePropertyDeep = require_basePropertyDeep();
    var isKey = require_isKey();
    var toKey = require_toKey();
    function property(path) {
      return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
    }
    module.exports = property;
  }
});

// ../../node_modules/lodash/_baseIteratee.js
var require_baseIteratee = __commonJS({
  "../../node_modules/lodash/_baseIteratee.js"(exports, module) {
    var baseMatches = require_baseMatches();
    var baseMatchesProperty = require_baseMatchesProperty();
    var identity = require_identity();
    var isArray2 = require_isArray();
    var property = require_property();
    function baseIteratee(value) {
      if (typeof value == "function") {
        return value;
      }
      if (value == null) {
        return identity;
      }
      if (typeof value == "object") {
        return isArray2(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
      }
      return property(value);
    }
    module.exports = baseIteratee;
  }
});

// ../../node_modules/lodash/iteratee.js
var require_iteratee = __commonJS({
  "../../node_modules/lodash/iteratee.js"(exports, module) {
    var baseClone = require_baseClone();
    var baseIteratee = require_baseIteratee();
    var CLONE_DEEP_FLAG = 1;
    function iteratee(func) {
      return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
    }
    module.exports = iteratee;
  }
});

// ../../node_modules/lodash/_isFlattenable.js
var require_isFlattenable = __commonJS({
  "../../node_modules/lodash/_isFlattenable.js"(exports, module) {
    var Symbol2 = require_Symbol();
    var isArguments = require_isArguments();
    var isArray2 = require_isArray();
    var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
    function isFlattenable(value) {
      return isArray2(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
    }
    module.exports = isFlattenable;
  }
});

// ../../node_modules/lodash/_baseFlatten.js
var require_baseFlatten = __commonJS({
  "../../node_modules/lodash/_baseFlatten.js"(exports, module) {
    var arrayPush = require_arrayPush();
    var isFlattenable = require_isFlattenable();
    function baseFlatten(array, depth, predicate, isStrict, result) {
      var index = -1, length = array.length;
      predicate || (predicate = isFlattenable);
      result || (result = []);
      while (++index < length) {
        var value = array[index];
        if (depth > 0 && predicate(value)) {
          if (depth > 1) {
            baseFlatten(value, depth - 1, predicate, isStrict, result);
          } else {
            arrayPush(result, value);
          }
        } else if (!isStrict) {
          result[result.length] = value;
        }
      }
      return result;
    }
    module.exports = baseFlatten;
  }
});

// ../../node_modules/lodash/flatten.js
var require_flatten = __commonJS({
  "../../node_modules/lodash/flatten.js"(exports, module) {
    var baseFlatten = require_baseFlatten();
    function flatten(array) {
      var length = array == null ? 0 : array.length;
      return length ? baseFlatten(array, 1) : [];
    }
    module.exports = flatten;
  }
});

// ../../node_modules/lodash/_overRest.js
var require_overRest = __commonJS({
  "../../node_modules/lodash/_overRest.js"(exports, module) {
    var apply = require_apply();
    var nativeMax = Math.max;
    function overRest(func, start, transform) {
      start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
      return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while (++index < length) {
          array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while (++index < start) {
          otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
      };
    }
    module.exports = overRest;
  }
});

// ../../node_modules/lodash/_flatRest.js
var require_flatRest = __commonJS({
  "../../node_modules/lodash/_flatRest.js"(exports, module) {
    var flatten = require_flatten();
    var overRest = require_overRest();
    var setToString = require_setToString();
    function flatRest(func) {
      return setToString(overRest(func, void 0, flatten), func + "");
    }
    module.exports = flatRest;
  }
});

// ../../node_modules/lodash/rearg.js
var require_rearg = __commonJS({
  "../../node_modules/lodash/rearg.js"(exports, module) {
    var createWrap = require_createWrap();
    var flatRest = require_flatRest();
    var WRAP_REARG_FLAG = 256;
    var rearg = flatRest(function(func, indexes) {
      return createWrap(func, WRAP_REARG_FLAG, void 0, void 0, void 0, indexes);
    });
    module.exports = rearg;
  }
});

// ../../node_modules/lodash/toPath.js
var require_toPath = __commonJS({
  "../../node_modules/lodash/toPath.js"(exports, module) {
    var arrayMap = require_arrayMap();
    var copyArray = require_copyArray();
    var isArray2 = require_isArray();
    var isSymbol = require_isSymbol();
    var stringToPath = require_stringToPath();
    var toKey = require_toKey();
    var toString = require_toString();
    function toPath(value) {
      if (isArray2(value)) {
        return arrayMap(value, toKey);
      }
      return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
    }
    module.exports = toPath;
  }
});

// ../../node_modules/lodash/fp/_util.js
var require_util = __commonJS({
  "../../node_modules/lodash/fp/_util.js"(exports, module) {
    module.exports = {
      "ary": require_ary(),
      "assign": require_baseAssign(),
      "clone": require_clone(),
      "curry": require_curry(),
      "forEach": require_arrayEach(),
      "isArray": require_isArray(),
      "isError": require_isError(),
      "isFunction": require_isFunction(),
      "isWeakMap": require_isWeakMap(),
      "iteratee": require_iteratee(),
      "keys": require_baseKeys(),
      "rearg": require_rearg(),
      "toInteger": require_toInteger(),
      "toPath": require_toPath()
    };
  }
});

// ../../node_modules/lodash/fp/convert.js
var require_convert = __commonJS({
  "../../node_modules/lodash/fp/convert.js"(exports, module) {
    var baseConvert = require_baseConvert();
    var util = require_util();
    function convert(name, func, options) {
      return baseConvert(util, name, func, options);
    }
    module.exports = convert;
  }
});

// ../../node_modules/lodash/_baseSet.js
var require_baseSet = __commonJS({
  "../../node_modules/lodash/_baseSet.js"(exports, module) {
    var assignValue = require_assignValue();
    var castPath = require_castPath();
    var isIndex = require_isIndex();
    var isObject2 = require_isObject();
    var toKey = require_toKey();
    function baseSet(object, path, value, customizer) {
      if (!isObject2(object)) {
        return object;
      }
      path = castPath(path, object);
      var index = -1, length = path.length, lastIndex = length - 1, nested = object;
      while (nested != null && ++index < length) {
        var key = toKey(path[index]), newValue = value;
        if (key === "__proto__" || key === "constructor" || key === "prototype") {
          return object;
        }
        if (index != lastIndex) {
          var objValue = nested[key];
          newValue = customizer ? customizer(objValue, key, nested) : void 0;
          if (newValue === void 0) {
            newValue = isObject2(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
          }
        }
        assignValue(nested, key, newValue);
        nested = nested[key];
      }
      return object;
    }
    module.exports = baseSet;
  }
});

// ../../node_modules/lodash/set.js
var require_set = __commonJS({
  "../../node_modules/lodash/set.js"(exports, module) {
    var baseSet = require_baseSet();
    function set(object, path, value) {
      return object == null ? object : baseSet(object, path, value);
    }
    module.exports = set;
  }
});

// ../../node_modules/lodash/fp/set.js
var require_set2 = __commonJS({
  "../../node_modules/lodash/fp/set.js"(exports, module) {
    var convert = require_convert();
    var func = convert("set", require_set());
    func.placeholder = require_placeholder();
    module.exports = func;
  }
});

// ../react/src/index.ts
var src_exports3 = {};
__export(src_exports3, {
  defineComponent: () => defineComponent,
  defineComponentDecl: () => defineComponentDecl,
  getPartialStore: () => getPartialStore,
  useStore: () => useStore,
  useViewModel: () => useViewModel
});

// ../core/src/index.ts
var src_exports = {};
__export(src_exports, {
  BASE_INDENT: () => BASE_INDENT,
  Node: () => Node,
  applyValues: () => applyValues,
  bindTrailingArgs: () => bindTrailingArgs,
  camelCaseToHyphen: () => camelCaseToHyphen,
  cloneJson: () => cloneJson,
  createAction: () => createAction,
  createActionFromActionFn: () => createActionFromActionFn,
  escapeRegExp: () => escapeRegExp,
  evalDataDefinition: () => evalDataDefinition,
  evalExpression: () => evalExpression,
  evalOutputData: () => evalOutputData,
  execLifecycleHook: () => execLifecycleHook,
  getBaseURL: () => getBaseURL,
  getLibDeps: () => getLibDeps,
  getValue: () => getValue,
  getViewDep: () => getViewDep,
  httpGet: () => httpGet,
  initActions: () => initActions,
  initActionsFromActionFn: () => initActionsFromActionFn,
  interopES6Default: () => interopES6Default,
  isArray: () => isArray,
  isObject: () => isObject,
  isPrimitive: () => isPrimitive,
  parseDataPath: () => parseDataPath,
  parseExpr: () => parseExpr,
  parseView: () => parseView,
  printDomNode: () => printDomNode,
  registerLibDeps: () => registerLibDeps,
  registerViewDeps: () => registerViewDeps,
  registerViewStoreService: () => registerViewStoreService,
  subscribeEvents: () => subscribeEvents,
  unsubscribeEvents: () => unsubscribeEvents
});

// ../core/src/utils.ts
var import_set = __toESM(require_set2());
var BASE_INDENT = "  ";
var Node = {
  ELEMENT_NODE: 1,
  TEXT_NODE: 3,
  CDATA_SECTION_NODE: 4,
  PROCESSING_INSTRUCTION_NODE: 7,
  COMMENT_NODE: 8,
  DOCUMENT_NODE: 9,
  DOCUMENT_TYPE_NODE: 10,
  DOCUMENT_FRAGMENT_NODE: 11
};
var escapeRegExp = (str) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
};
var camelCaseToHyphen = (str) => {
  return str.replace(/^./, str[0].toLowerCase()).replace(/([A-Z])/g, (_, firstMatch) => `-${firstMatch.toLowerCase()}`);
};
var evalExpression = (expr, scope, ignoreError = false, applyObject) => {
  const names = scope ? Object.keys(scope) : [];
  const vals = scope ? Object.values(scope) : [];
  try {
    const func = new Function(...names, `return ${expr};`);
    return func.apply(applyObject, vals);
  } catch (e) {
    if (!ignoreError) {
      throw new Error(`evalExpression('${expr}') => ${e.message}`);
    } else {
      return void 0;
    }
  }
};
var parseView = (input) => {
  const parser = new DOMParser();
  const fragement = document.createDocumentFragment();
  fragement.appendChild(parser.parseFromString(`<div>${input}</div>`, "text/html").body.firstChild || document.createElement("div"));
  return fragement.firstChild || document.createElement("div");
};
var bindTrailingArgs = (fn, ...boundArgs) => {
  return function(...args) {
    return fn(...args, ...boundArgs);
  };
};
var interopES6Default = (obj) => {
  return obj && obj.__esModule && obj.default ? obj.default : obj;
};
var formatNode = (node, level = 0) => {
  const tmpNode = (level && node.parentNode ? node.parentNode : node).cloneNode();
  tmpNode.innerHTML = `
${BASE_INDENT.repeat(level + 1)}<div></div>
${BASE_INDENT.repeat(level)}`;
  const indentBefore = tmpNode.firstChild;
  const indentAfter = tmpNode.lastChild;
  let childCount = node.childNodes.length;
  if (childCount > 0 && indentBefore && indentAfter) {
    let idx = 0;
    while (idx < childCount) {
      const currNode = node.childNodes[idx];
      if (currNode.nodeType === Node.ELEMENT_NODE) {
        node.insertBefore(indentBefore.cloneNode(), currNode);
        formatNode(currNode, level + 1);
        if (node.lastChild === currNode) {
          node.appendChild(indentAfter.cloneNode());
          idx = childCount;
        } else {
          idx += 2;
          childCount++;
        }
      } else if (currNode.nodeType === Node.TEXT_NODE) {
        const textContent = (currNode.nodeValue || "").trim();
        if (textContent) {
          node.insertBefore(indentBefore.cloneNode(), currNode);
          currNode.nodeValue = textContent;
          if (node.lastChild === currNode) {
            node.appendChild(indentAfter.cloneNode());
            idx = childCount;
          } else {
            idx += 2;
            childCount++;
          }
        } else {
          currNode.nodeValue = textContent;
          if (node.lastChild === currNode) {
            node.appendChild(indentAfter.cloneNode());
          }
          idx++;
        }
      } else {
        idx++;
      }
    }
  }
  return node;
};
var printDomNode = (node) => {
  if (!node) {
    return "";
  }
  const elem = formatNode(node);
  return elem.outerHTML;
};
var httpGet = (theUrl) => {
  return new Promise((resolve, reject) => {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        resolve(xmlHttp.responseText);
      }
    };
    xmlHttp.onerror = function(e) {
      reject(e);
    };
    xmlHttp.open("GET", theUrl, true);
    xmlHttp.send(null);
  });
};
var getBaseURL = () => {
  if (!getBaseURL._baseURL) {
    const location = window.location;
    const pathname = location.pathname;
    const origin = location.origin || location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : "");
    getBaseURL._baseURL = origin + pathname.substring(0, pathname.lastIndexOf("/") + 1);
  }
  return getBaseURL._baseURL;
};
var parseDataPath = (pathStr) => {
  const match = pathStr.match(/[.[]/);
  if (match && match.index !== void 0) {
    return {
      scope: pathStr.substr(0, match.index),
      path: pathStr.substr(match[0] === "[" ? match.index : match.index + 1)
    };
  }
  return {
    scope: pathStr,
    path: ""
  };
};
var isPrimitive = (val) => {
  const type = typeof val;
  return type === "number" || type === "string" || type === "boolean";
};
var isArray = Array.isArray;
var isObject = (val) => Boolean(val) && !isPrimitive(val) && !isArray(val);
var getValue = (scope, path) => {
  return evalExpression(path, scope, true);
};
var applyValues = (prev, values) => {
  return Object.entries(values).reduce((prev2, [path, value]) => {
    const prevValue = getValue(prev2, path);
    return prevValue === value ? prev2 : (0, import_set.default)(path, value, prev2);
  }, prev);
};
var parseExpr = (str) => {
  const match = str.match(/^{{(.*)}}$/);
  return match ? match[1] : "";
};
var cloneJson = (input) => {
  return input ? JSON.parse(JSON.stringify(input)) : input;
};

// ../core/src/deps.ts
var _libDeps = {};
var registerLibDeps = (libName, deps) => {
  _libDeps[libName] = {
    ..._libDeps[libName],
    ...deps
  };
};
var getLibDeps = (libName) => {
  return _libDeps[libName] || {};
};

// ../core/src/actions.ts
var evalDataDefinitionInternal = (input, scope, level) => {
  if (Array.isArray(input)) {
    for (const key in input) {
      const value = input[key];
      if (typeof value === "string") {
        const template = parseExpr(value);
        if (template) {
          input[key] = getValue(scope, template);
        }
      } else {
        evalDataDefinitionInternal(value, scope, level + 1);
      }
    }
  } else if (typeof input === "object") {
    for (const key in input) {
      const value = input[key];
      if (typeof value === "string") {
        const template = parseExpr(value);
        if (template) {
          input[key] = getValue(scope, template);
        }
      } else {
        evalDataDefinitionInternal(value, scope, level + 1);
      }
    }
  }
};
var evalDataDefinition = (input, scope) => {
  const store = cloneJson(input);
  evalDataDefinitionInternal(store, scope, 0);
  return store;
};
var evalOutputData = (outputData, result) => {
  return Object.entries(outputData).reduce((prev, [path, resultPath]) => {
    return {
      ...prev,
      [path]: resultPath?.length > 0 ? getValue(result, resultPath) : result
    };
  }, {});
};
var createAction = (actionDef, store, getProps) => {
  return async (eventData) => {
    const actionFn = getLibDeps(actionDef.deps)[actionDef.method];
    const data = store.getData();
    const inputData = evalDataDefinition(actionDef.inputData, { data, props: getProps(), eventData });
    const result = await actionFn(...Object.values(inputData));
    const outputData = evalOutputData(actionDef.outputData || {}, result);
    store.updateData(outputData);
  };
};
var initActions = (actionsDef, store, getProps) => {
  return Object.entries(actionsDef).reduce((prev, [actionName, actionDef]) => {
    return {
      ...prev,
      [actionName]: createAction(
        actionDef,
        store,
        getProps
      )
    };
  }, {});
};
var createActionFromActionFn = (actionFn, store, getProps) => {
  return async (eventData) => {
    const res = await actionFn(store.getData(), getProps(), eventData);
    if (res) {
      store.updateData(res);
    }
  };
};
var initActionsFromActionFn = (actionFnMap, store, getProps) => {
  return Object.entries(actionFnMap).reduce((prev, [actionName, actionFn]) => {
    return {
      ...prev,
      [actionName]: createActionFromActionFn(
        actionFn,
        store,
        getProps
      )
    };
  }, {});
};

// ../core/src/hooks.ts
var execLifecycleHook = async (viewDef, actions, lifecycle) => {
  const lifecycleDef = viewDef.lifecycleHooks?.[lifecycle] || "";
  if (lifecycleDef) {
    const actionFn = actions[lifecycleDef];
    if (actionFn) {
      await actionFn();
    } else {
      console.warn(`action ${lifecycleDef} not found in actions`);
    }
  }
};

// ../interop/src/eventBus.ts
var eventBus_exports = {};
__export(eventBus_exports, {
  publish: () => publish2,
  subscribe: () => subscribe,
  unsubscribe: () => unsubscribe
});

// ../interop/src/utils.ts
var generateId = () => {
  return Math.random().toString(36).substring(2, 11);
};
var publish = ({ topic, channel = "global", payload }, target = null) => {
  const requestId = generateId();
  const request = {
    requestId,
    topic,
    channel,
    payload
  };
  if (target) {
    if (target.postMessage) {
      target.postMessage(request, "*");
    } else {
      throw new Error("Invalid target");
    }
  } else {
    if (window.parent !== window) {
      console.log(`event iframe->parent: ${topic}`);
      window.parent.postMessage(request, "*");
    } else if (window.opener) {
      console.log(`event popup->parent: ${topic}`);
      window.opener.postMessage(request, "*");
    } else if (self !== window) {
      console.log(`event webworker->parent: ${topic}`);
      self.postMessage(request, "*");
    } else {
      console.log(`event to window: ${topic}`);
      window.dispatchEvent(new MessageEvent("message", { data: request }));
    }
  }
  return request;
};
var createMessageEventBus = () => {
  const _subscriptions = {};
  const subscribe2 = ({
    topic,
    channel = "global",
    handler
  }) => {
    const subscription = {
      subscriptionId: generateId(),
      topic,
      channel,
      handler
    };
    _subscriptions[topic] = {
      ..._subscriptions[topic],
      [channel]: {
        ..._subscriptions[topic]?.[channel],
        [subscription.subscriptionId]: subscription
      }
    };
    return subscription;
  };
  const unsubscribe2 = (subscription) => {
    delete _subscriptions[subscription.topic]?.[subscription.channel]?.[subscription.subscriptionId];
  };
  const handleMessage3 = (event) => {
    const { payload, channel, topic } = event.data;
    if (_subscriptions[topic]?.[channel]) {
      return Object.values(_subscriptions[topic][channel]).map(
        ({ handler }) => Promise.resolve(handler(payload))
      );
    }
    return [];
  };
  return {
    publish,
    subscribe: subscribe2,
    unsubscribe: unsubscribe2,
    handleMessage: handleMessage3
  };
};

// ../interop/src/eventBus.ts
var _eventBus = createMessageEventBus();
var publish2 = (eventDef, target) => _eventBus.publish(eventDef, target);
var subscribe = (subsDef) => _eventBus.subscribe(subsDef);
var unsubscribe = (subs) => _eventBus.unsubscribe(subs);
var handleMessage = (event) => _eventBus.handleMessage(event);
window.addEventListener("message", handleMessage);

// ../interop/src/remoteApi.ts
var _pendingRequests = {};
var _eventBus2 = createMessageEventBus();
var handleMessage2 = (event) => {
  const { requestId, topic, ack, payload } = event.data;
  if (requestId) {
    if (ack) {
      const resolve = _pendingRequests[requestId];
      if (resolve) {
        delete _pendingRequests[requestId];
        resolve(payload);
      }
    } else {
      const promises = _eventBus2.handleMessage(event);
      promises.forEach(
        (p) => p.then((payload2) => {
          event.source ? event.source.postMessage({
            requestId,
            ack: true,
            payload: payload2
          }) : window.dispatchEvent(
            new MessageEvent("message", {
              data: {
                requestId,
                topic,
                ack: true,
                payload: payload2
              }
            })
          );
        })
      );
    }
  }
  return [];
};
window.addEventListener("message", handleMessage2);

// ../core/src/events.ts
var subscribeEvents = (viewDef, actions) => {
  return (viewDef.onEvent || []).map((eventListener) => {
    const { eventId, action } = eventListener;
    const actionFn = actions[action];
    if (!actionFn) {
      console.warn(`action ${action} not found in actions`);
      return null;
    }
    return eventBus_exports.subscribe({
      topic: eventId,
      handler: (eventData) => {
        actionFn(eventData);
      }
    });
  });
};
var unsubscribeEvents = (subscriptions) => {
  subscriptions.forEach((sub) => sub && eventBus_exports.unsubscribe(sub));
};

// ../core/src/views.ts
var _ctx = {
  views: {},
  viewStoreService: null
};
var registerViewDeps = (viewName, deps) => {
  _ctx.views[viewName] = deps;
};
var registerViewStoreService = (svc) => {
  _ctx.viewStoreService = svc;
};
var getViewDepsCached = (viewName) => {
  return _ctx.views[viewName] || {};
};
var getViewDep = async (viewName, defineComponentDecl2) => {
  if (!_ctx.views[viewName] && _ctx.viewStoreService) {
    const viewDef = await _ctx.viewStoreService.getView(viewName, {});
    _ctx.views[viewName] = defineComponentDecl2(viewDef);
  }
  return getViewDepsCached(viewName) || {};
};

// ../core/src/index.ts
var globalSwf = globalThis;
globalSwf.swf = {
  ...globalSwf.swf,
  core: src_exports
};

// ../react/src/reactUtils.ts
var import_set2 = __toESM(require_set2());
import { useRef, useEffect, useState, createElement } from "react";

// ../react-compiler/src/index.ts
var src_exports2 = {};
__export(src_exports2, {
  compiler: () => compiler
});

// ../react-compiler/src/transformUtils.ts
var BaseIndent2 = "  ";
var NodeType = {
  ELEMENT_NODE: 1,
  TEXT_NODE: 3,
  CDATA_SECTION_NODE: 4,
  PROCESSING_INSTRUCTION_NODE: 7,
  COMMENT_NODE: 8,
  DOCUMENT_NODE: 9,
  DOCUMENT_TYPE_NODE: 10,
  DOCUMENT_FRAGMENT_NODE: 11
};
var ReactAttr = {
  class: "className",
  // even use class it is OK
  "ng-readonly": "readOnly",
  // value doesn't matter
  autocomplete: "autoComplete",
  // on|off
  onkeydown: "onKeyDown",
  onsubmit: "onSubmit",
  onclick: "onClick",
  oninput: "onInput",
  onchange: "onChange",
  maxlength: "maxLength",
  for: "htmlFor"
};
function preProcessTemplate(elem, vmContext) {
  const currElem = elem.children && elem.children.length === 1 ? elem.firstElementChild : elem;
  if (vmContext && vmContext.options && vmContext.options.useDomNode === true) {
    currElem.setAttribute("ref", "{{vm.ref}}");
  }
  if (currElem.hasAttribute && !currElem.hasAttribute("ng-repeat")) {
    const currClassValue = currElem.classList ? currElem.classList.value : "";
    const expr2 = currClassValue ? `'${currClassValue}' + ( props.className ? ' ' + props.className : '' )` : 'props.className ? props.className : ""';
    currElem.setAttribute("class", `{{${expr2}}}`);
  }
  const expr = "props.style || {}";
  currElem.setAttribute("style", `{{${expr}}}`);
  return currElem;
}
var hyphenToCamelCase = (str) => {
  return str.replace(/^./, str[0].toUpperCase()).replace(/-(.)/g, (_, firstMatch) => firstMatch.toUpperCase());
};
function generateUpdateVmPropFunction(expr, value) {
  const { scope, path } = parseDataPath2(expr);
  return `update${hyphenToCamelCase(scope)}( { scope: '${path || ""}', value: { 'uiValue': ${value}, 'dirty': true, error: vm.validate(${value}, ${expr})} } )`;
}
var parseDataPath2 = (pathStr) => {
  const match = pathStr.match(/[.[]/);
  if (match && match.index !== void 0) {
    return {
      scope: pathStr.substr(0, match.index),
      path: pathStr.substr(match[0] === "[" ? match.index : match.index + 1)
    };
  }
  return {
    scope: pathStr,
    path: void 0
  };
};

// ../react-compiler/src/compileElement.ts
function when(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE;
}
function compile(node, context) {
  let contents = [];
  let currLine = [];
  let deps = {};
  let options = {};
  let partialStore = {};
  const elem = node;
  const viewImports = context.deps || {};
  const level = context.level !== void 0 ? context.level : 0;
  const index = context.index;
  const indent = BaseIndent2.repeat(level);
  let elemName = elem.nodeName.toLowerCase();
  let compiledType = null;
  let viewDesc = null;
  if (/^\S+-\S+$/.test(elemName)) {
    const compName = hyphenToCamelCase(elemName);
    if (viewImports[compName]) {
      compiledType = compName;
      viewDesc = viewImports[compName];
    }
  }
  currLine.push(
    `${indent}${compiledType ? `${compiledType} && ` : ""}createElement( ${compiledType ? compiledType : `"${elemName}"`}`
  );
  elemName = compiledType ? compiledType : elemName;
  const attrLenth = elem.attributes.length || 0;
  const classLength = elem.classList.length || 0;
  if (attrLenth + classLength > 0 || index !== void 0) {
    const attrIndent = "  ".repeat(level + 1);
    currLine.push(", {");
    contents.push(currLine.join(""));
    if (index !== void 0 && !node.hasAttribute("key")) {
      contents.push(`${attrIndent}"key": ${index},`);
    }
    for (let i = 0; i < attrLenth; i++) {
      let name = elem.attributes[i].name;
      const value = elem.attributes[i].value;
      name = ReactAttr[name] ? ReactAttr[name] : name;
      const matchDoubleCurly = value.startsWith("{{") && value.endsWith("}}");
      const matchSingleCurly = value.startsWith("{") && value.endsWith("}");
      if (matchDoubleCurly) {
        contents.push(
          `${attrIndent}"${name}": ${value.substring(2, value.length - 2)},`
        );
      } else if (matchSingleCurly) {
        const path = value.substring(1, value.length - 1);
        partialStore[path] = true;
        contents.push(
          `${attrIndent}"${name}": ${path.replace(/\./g, "_")},`
        );
      } else {
        contents.push(`${attrIndent}"${name}": "${value}",`);
      }
    }
    contents[contents.length - 1] = contents[contents.length - 1].replace(
      /,$/,
      ""
    );
    currLine = [`${indent}}`];
  } else {
    currLine.push(", null");
  }
  const childLength = elem.childNodes.length;
  if (childLength > 0) {
    const childCompileResults = [];
    for (let i = 0; i < childLength; i++) {
      const childDomNode = elem.childNodes[i];
      const childRes = context.transformFn(childDomNode, {
        ...context,
        level: level + 1,
        index: i
      });
      if (childRes) {
        childCompileResults.push(childRes);
      }
    }
    if (childCompileResults.length > 0) {
      if (viewDesc && viewDesc.scopeSlot) {
        const childIndent = BaseIndent2.repeat(level + 1);
        const funcIndent = BaseIndent2.repeat(level + 2);
        currLine.push(", {");
        contents.push(currLine.join(""));
        contents.push(`${childIndent}eval: function(scope){`);
        contents.push(`${funcIndent}return evalExpression(\`[`);
        for (let i = 0; i < childCompileResults.length; i++) {
          const childRes = childCompileResults[i];
          contents = contents.concat(
            childRes.contents.map((c) => {
              const match = c.match(/^(\s+)"(.*)",$/);
              if (match) {
                return `${match[1]}${JSON.stringify(match[2])},`;
              }
              return c;
            })
          );
          deps = Object.assign(deps, childRes.deps);
        }
        contents[contents.length - 1] = contents[contents.length - 1].replace(
          /,$/,
          "]`, scope, true);"
        );
        contents.push(`${childIndent}},`);
        contents.push(`${childIndent}scope: viewDeps`);
        currLine = [`${indent}}`];
      } else {
        currLine.push(", [");
        contents.push(currLine.join(""));
        for (let i = 0; i < childCompileResults.length; i++) {
          const childRes = childCompileResults[i];
          contents = contents.concat(childRes.contents);
          deps = Object.assign(deps, childRes.deps);
          options = Object.assign(options, childRes.options);
          partialStore = Object.assign(partialStore, childRes.partialStore);
        }
        contents[contents.length - 1] = contents[contents.length - 1].replace(
          /,$/,
          ""
        );
        currLine = [`${indent}]`];
      }
    }
  }
  currLine.push(" )");
  if (level > 0) {
    currLine.push(",");
  }
  contents.push(currLine.join(""));
  return {
    contents,
    deps,
    options,
    partialStore
  };
}
function compileToTemplate(node, context) {
  let contents = [];
  const currLine = [];
  let deps = {};
  let options = {};
  let partialStore = {};
  const elem = node;
  const viewImports = context.deps || {};
  const level = context.level !== void 0 ? context.level : 0;
  const index = context.index;
  const indent = BaseIndent2.repeat(level);
  let elemName = elem.nodeName.toLowerCase();
  let compiledType = null;
  let viewDesc = null;
  if (/^\S+-\S+$/.test(elemName)) {
    const compName = hyphenToCamelCase(elemName);
    if (viewImports[compName]) {
      compiledType = compName;
      viewDesc = viewImports[compName];
    }
  }
  currLine.push(`${indent}<${compiledType ? compiledType : elemName}`);
  elemName = compiledType ? compiledType : elemName;
  const attrLenth = elem.attributes.length || 0;
  const classLength = elem.classList.length || 0;
  if (attrLenth + classLength > 0 || index !== void 0) {
    for (let i = 0; i < attrLenth; i++) {
      let name = elem.attributes[i].name;
      const value = elem.attributes[i].value;
      name = ReactAttr[name] ? ReactAttr[name] : name;
      const matchDoubleCurly = value.startsWith("{{") && value.endsWith("}}");
      const matchSingleCurly = value.startsWith("{") && value.endsWith("}");
      if (matchDoubleCurly) {
        currLine.push(`${name}={${value.substr(2, value.length - 4)}}`);
      } else if (matchSingleCurly) {
        const path = value.substring(1, value.length - 1);
        partialStore[path] = true;
        currLine.push(`${name}={${path.replace(/\./g, "_")}}`);
      } else {
        currLine.push(`${name}="${value}"`);
      }
    }
  }
  contents.push(currLine.join(" ") + ">");
  const childLength = elem.childNodes.length;
  if (childLength > 0) {
    const childCompileResults = [];
    for (let i = 0; i < childLength; i++) {
      const childDomNode = elem.childNodes[i];
      const childRes = context.transformFn(childDomNode, {
        ...context,
        level: level + 1,
        index: i,
        toTemplate: !(viewDesc && viewDesc.scopeSlot),
        context: "JSX"
      });
      if (childRes) {
        childCompileResults.push(childRes);
      }
    }
    if (childCompileResults.length > 0) {
      if (viewDesc && viewDesc.scopeSlot) {
        const childIndent = BaseIndent2.repeat(level + 1);
        const funcIndent = BaseIndent2.repeat(level + 2);
        contents.push(`${childIndent}{ {`);
        contents.push(`${childIndent}eval: function(scope){`);
        contents.push(`${funcIndent}return evalExpression(\`[`);
        for (let i = 0; i < childCompileResults.length; i++) {
          const childRes = childCompileResults[i];
          contents = contents.concat(
            childRes.contents.map((c) => {
              const match = c.match(/^(\s+)"(.*)",$/);
              if (match) {
                return `${match[1]}${JSON.stringify(match[2])},`;
              }
              return c;
            })
          );
          deps = Object.assign(deps, childRes.deps);
        }
        contents[contents.length - 1] = contents[contents.length - 1].replace(
          /,$/,
          "]`, scope, true);"
        );
        contents.push(`${childIndent}},`);
        contents.push(`${childIndent}scope: viewDeps`);
        contents.push(`${childIndent}} }`);
      } else {
        for (let i = 0; i < childCompileResults.length; i++) {
          const childRes = childCompileResults[i];
          contents = contents.concat(childRes.contents);
          deps = { ...deps, ...childRes.deps };
          options = { ...options, ...childRes.options };
          partialStore = { ...partialStore, ...childRes.partialStore };
        }
      }
    }
  }
  contents.push(`${indent}</${elemName}>`);
  return {
    contents,
    deps,
    options,
    partialStore
  };
}
var compileElement_default = {
  when,
  compile,
  compileToTemplate
};

// ../react-compiler/src/compileText.ts
function when2(node, _) {
  return node.nodeType === NodeType.TEXT_NODE;
}
function compile2(node, context) {
  const res = [];
  const indent = BaseIndent2.repeat(context.level);
  const matches = (node.textContent || "").split(/({{.*?}})/g);
  for (let i = 0; i < matches.length; i++) {
    const str = matches[i];
    if (!/^(\r?\n)*$/.test(str)) {
      const match = str.match(/^{{(.*)}}$/);
      if (match) {
        res.push(`${indent}${match[1].trim()},`);
      } else {
        res.push(`${indent}${JSON.stringify(str)},`);
      }
    }
  }
  return {
    contents: res
  };
}
function compileToTemplate2(node, context) {
  const indent = BaseIndent2.repeat(context.level);
  const res = [];
  let matches = (node.textContent || "").trim().split(/({{.*?}})/g);
  matches = matches.filter((o) => o.trim());
  if (matches && matches.length > 0) {
    res.push(indent);
    for (let i = 0; i < matches.length; i++) {
      const str = matches[i];
      if (!/^(\r?\n)*$/.test(str)) {
        const match = str.match(/^{{(.*)}}$/);
        if (match) {
          res.push(`{${match[1]}}`);
        } else {
          res.push(`${str}`);
        }
      }
    }
    return {
      contents: [res.join("")]
    };
  }
}
var compileText_default = {
  when: when2,
  compile: compile2,
  compileToTemplate: compileToTemplate2
};

// ../react-compiler/src/compileNgInclude.ts
function when3(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.nodeName === "ng-INCLUDE";
}
function compile3(node, context) {
  const index = context.index;
  const level = context.level;
  const indent = BaseIndent2.repeat(level);
  let componentName = node.getAttribute("src");
  if (componentName) {
    const deps = {};
    let basePath = "";
    const match = componentName.match(/(.*)[\\/]([^\\/]+$)/);
    if (match) {
      basePath = match[1] + "/";
      componentName = match[2];
    }
    const compiledType = `${hyphenToCamelCase(componentName)}`;
    const contents = [];
    contents.push(`${indent}createElement( ${compiledType}, {`);
    const attrIndent = BaseIndent2.repeat(level + 1);
    if (index !== void 0 && !node.hasAttribute("key")) {
      contents.push(`${attrIndent}"key": ${index},`);
    }
    contents[contents.length - 1] = contents[contents.length - 1].replace(/,$/, "");
    contents.push(`${indent}} )${context.level ? "," : ""}`);
    deps[compiledType] = `${basePath}viewmodel/${componentName}ViewModel`;
    return {
      contents,
      deps
    };
  }
}
function compileToTemplate3(node, context) {
  const level = context.level;
  const indent = BaseIndent2.repeat(level);
  let componentName = node.getAttribute("src");
  if (componentName) {
    const deps = {};
    let basePath = "";
    const match = componentName.match(/(.*)[\\/]([^\\/]+$)/);
    if (match) {
      basePath = match[1] + "/";
      componentName = match[2];
    }
    const compiledType = `${hyphenToCamelCase(componentName)}`;
    const contents = [];
    contents.push(`${indent}<${compiledType} />`);
    deps[compiledType] = `${basePath}viewmodel/${componentName}ViewModel`;
    return {
      contents,
      deps
    };
  }
}
var compileNgInclude_default = {
  when: when3,
  compile: compile3,
  compileToTemplate: compileToTemplate3
};

// ../react-compiler/src/compileCondition.ts
var Attr = "exist-when";
function when4(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.hasAttribute(Attr);
}
function compile4(node, context) {
  let contents = [];
  const indent = BaseIndent2.repeat(context.level);
  const expr = node.getAttribute(Attr);
  node.removeAttribute(Attr);
  contents.push(`${indent}( ( ${expr} ) ?`);
  const childRes = context.transformFn(node, {
    ...context,
    level: context.level + 1
  });
  if (childRes) {
    contents = contents.concat(childRes.contents);
    contents[contents.length - 1] = contents[contents.length - 1].replace(/,$/, " : null");
    contents.push(`${indent})${context.level ? "," : ""}`);
    return {
      ...childRes,
      contents
    };
  }
}
function compileToTemplate4(node, context) {
  let contents = [];
  const indent = BaseIndent2.repeat(context.level);
  const expr = node.getAttribute(Attr);
  node.removeAttribute(Attr);
  const isJsxCtx = context.context === "JSX";
  contents.push(`${indent}${isJsxCtx ? "{ " : ""}( ${expr} ) ? (`);
  const childRes = context.transformFn(node, {
    ...context,
    level: context.level + 1,
    context: "JS"
  });
  if (childRes) {
    contents = contents.concat(childRes.contents);
    contents.push(`${indent}) : null${isJsxCtx ? " }" : ""}`);
    return {
      ...childRes,
      contents
    };
  }
}
var compileCondition_default = {
  when: when4,
  compile: compile4,
  compileToTemplate: compileToTemplate4
};

// ../react-compiler/src/compileVisible.ts
var Attr2 = "visible-when";
function when5(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.hasAttribute(Attr2);
}
function compile5(node, context) {
  const expr = node.getAttribute(Attr2);
  node.removeAttribute(Attr2);
  node.setAttribute("style", `{{(${expr}) ? {} : { display: 'none' }}}`);
  return context.transformFn(node, context);
}
var compileVisible_default = {
  when: when5,
  compile: compile5
};

// ../react-compiler/src/compileClass.ts
var Attr3 = "ng-class";
function when6(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.hasAttribute(Attr3);
}
function compile6(node, context) {
  const expr = node.getAttribute(Attr3);
  node.removeAttribute(Attr3);
  const currClassValue = node.classList ? node.classList.value : "";
  const match = currClassValue.match(/^{{(.*)}}$/);
  if (match) {
    const classExpr = `processNgClass(${expr}) + ' ' + ${match[1]}`;
    node.setAttribute("class", `{{${classExpr}}}`);
  } else {
    const classExpr = currClassValue ? `processNgClass(${expr}) + ' ${currClassValue}'` : `processNgClass(${expr})`;
    node.setAttribute("class", `{{${classExpr}}}`);
  }
  return context.transformFn(node, context);
}
var compileClass_default = {
  when: when6,
  compile: compile6
};

// ../react-compiler/src/compileTransclude.ts
var Attr4 = "transclude";
function when7(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.hasAttribute(Attr4);
}
function compile7(node, context) {
  let contents = [];
  let deps = {};
  let scope = {};
  const indent = BaseIndent2.repeat(context.level);
  node.removeAttribute(Attr4);
  const defaultNode = node;
  const slotNode = node.cloneNode(false);
  slotNode.innerHTML = "{{props.children}}";
  contents.push(`${indent}( ( props.children ) ?`);
  const slotChildRes = context.transformFn(slotNode, {
    ...context,
    level: context.level + 1
  });
  const defaultChildRes = context.transformFn(defaultNode, {
    ...context,
    level: context.level + 1
  });
  contents = contents.concat(slotChildRes.contents);
  deps = Object.assign(deps, slotChildRes.deps);
  contents[contents.length - 1] = contents[contents.length - 1].replace(/,$/, " :");
  contents = contents.concat(defaultChildRes.contents);
  deps = Object.assign(deps, defaultChildRes.deps);
  scope = Object.assign(scope, defaultChildRes.scope);
  contents[contents.length - 1] = contents[contents.length - 1].replace(/,$/, "");
  contents.push(`${indent})${context.level ? "," : ""}`);
  return {
    contents,
    deps,
    scope
  };
}
function compileToTemplate5(node, context) {
  let contents = [];
  let deps = {};
  let scope = {};
  const indent = BaseIndent2.repeat(context.level);
  node.removeAttribute(Attr4);
  const defaultNode = node;
  const slotNode = node.cloneNode(false);
  slotNode.innerHTML = "{{props.children}}";
  const isJsxCtx = context.context === "JSX";
  contents.push(`${indent}${isJsxCtx ? "{ " : ""}( props.children ) ? (`);
  const slotChildRes = context.transformFn(slotNode, {
    ...context,
    level: context.level + 1,
    context: "JS"
  });
  contents = contents.concat(slotChildRes.contents);
  deps = Object.assign(deps, slotChildRes.deps);
  contents.push(`${indent}) : (`);
  const defaultChildRes = context.transformFn(defaultNode, {
    ...context,
    level: context.level + 1,
    context: "JS"
  });
  contents = contents.concat(defaultChildRes.contents);
  deps = Object.assign(deps, defaultChildRes.deps);
  scope = Object.assign(scope, defaultChildRes.scope);
  contents.push(`${indent})${isJsxCtx ? " }" : ""}`);
  return {
    contents,
    deps,
    scope
  };
}
var compileTransclude_default = {
  when: when7,
  compile: compile7,
  compileToTemplate: compileToTemplate5
};

// ../react-compiler/src/compileNgTransclude.ts
var Attr5 = "ng-transclude";
function when8(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.hasAttribute(Attr5);
}
function compile8(node, context) {
  let contents = [];
  let deps = {};
  const options = {};
  const indent = BaseIndent2.repeat(context.level);
  node.removeAttribute(Attr5);
  const defaultNode = node;
  const slotNode = node.cloneNode(false);
  slotNode.innerHTML = "{{processScopeSlot(props.children, slotScope)}}";
  contents.push(`${indent}( ( props.children ) ?`);
  const slotChildRes = context.transformFn(slotNode, {
    ...context,
    level: context.level + 1
  });
  const defaultChildRes = context.transformFn(defaultNode, {
    ...context,
    level: context.level + 1
  });
  contents = contents.concat(slotChildRes.contents);
  deps = Object.assign(deps, slotChildRes.deps);
  contents[contents.length - 1] = contents[contents.length - 1].replace(/,$/, " :");
  contents = contents.concat(defaultChildRes.contents);
  deps = Object.assign(deps, defaultChildRes.deps);
  contents[contents.length - 1] = contents[contents.length - 1].replace(/,$/, "");
  contents.push(`${indent})${context.level ? "," : ""}`);
  options.scopeSlot = true;
  return {
    contents,
    deps,
    options
  };
}
function compileToTemplate6(node, context) {
  let contents = [];
  let deps = {};
  const options = {};
  const indent = BaseIndent2.repeat(context.level);
  node.removeAttribute(Attr5);
  const defaultNode = node;
  const slotNode = node.cloneNode(false);
  slotNode.innerHTML = "{{processScopeSlot(props.children, slotScope)}}";
  const isJsxCtx = context.context === "JSX";
  contents.push(`${indent}${isJsxCtx ? "{ " : ""}( props.children ) ? (`);
  const slotChildRes = context.transformFn(slotNode, {
    ...context,
    level: context.level + 1,
    context: "JS"
  });
  const defaultChildRes = context.transformFn(defaultNode, {
    ...context,
    level: context.level + 1,
    context: "JS"
  });
  contents = contents.concat(slotChildRes.contents);
  deps = Object.assign(deps, slotChildRes.deps);
  contents.push(`${indent} ) : (`);
  contents = contents.concat(defaultChildRes.contents);
  deps = Object.assign(deps, defaultChildRes.deps);
  contents.push(`${indent})${isJsxCtx ? " }" : ""}`);
  options.scopeSlot = true;
  return {
    contents,
    deps,
    options
  };
}
var compileNgTransclude_default = {
  when: when8,
  compile: compile8,
  compileToTemplate: compileToTemplate6
};

// ../react-compiler/src/compileNgTransclude.ts
var Attr6 = "ng-transclude";
function when9(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.hasAttribute(Attr6);
}
function compile9(node, context) {
  let contents = [];
  let deps = {};
  let scope = {};
  const indent = BaseIndent2.repeat(context.level);
  node.removeAttribute(Attr6);
  const defaultNode = node;
  const slotNode = node.cloneNode(false);
  slotNode.innerHTML = "{{props.children}}";
  contents.push(`${indent}( ( props.children ) ?`);
  const slotChildRes = context.transformFn(slotNode, {
    ...context,
    level: context.level + 1
  });
  const defaultChildRes = context.transformFn(defaultNode, {
    ...context,
    level: context.level + 1
  });
  contents = contents.concat(slotChildRes.contents);
  deps = Object.assign(deps, slotChildRes.deps);
  contents[contents.length - 1] = contents[contents.length - 1].replace(/,$/, " :");
  contents = contents.concat(defaultChildRes.contents);
  deps = Object.assign(deps, defaultChildRes.deps);
  scope = Object.assign(scope, defaultChildRes.scope);
  contents[contents.length - 1] = contents[contents.length - 1].replace(/,$/, "");
  contents.push(`${indent})${context.level ? "," : ""}`);
  return {
    contents,
    deps,
    scope
  };
}
function compileToTemplate7(node, context) {
  let contents = [];
  let deps = {};
  let scope = {};
  const indent = BaseIndent2.repeat(context.level);
  node.removeAttribute(Attr6);
  const defaultNode = node;
  const slotNode = node.cloneNode(false);
  slotNode.innerHTML = "{{props.children}}";
  const isJsxCtx = context.context === "JSX";
  contents.push(`${indent}${isJsxCtx ? "{ " : ""}( props.children ) ? (`);
  const slotChildRes = context.transformFn(slotNode, {
    ...context,
    level: context.level + 1,
    context: "JS"
  });
  contents = contents.concat(slotChildRes.contents);
  deps = Object.assign(deps, slotChildRes.deps);
  contents.push(`${indent}) : (`);
  const defaultChildRes = context.transformFn(defaultNode, {
    ...context,
    level: context.level + 1,
    context: "JS"
  });
  contents = contents.concat(defaultChildRes.contents);
  deps = Object.assign(deps, defaultChildRes.deps);
  scope = Object.assign(scope, defaultChildRes.scope);
  contents.push(`${indent})${isJsxCtx ? " }" : ""}`);
  return {
    contents,
    deps,
    scope
  };
}
var compileNgTransclude_default = {
  when: when9,
  compile: compile9,
  compileToTemplate: compileToTemplate7
};

// ../react-compiler/src/compileRepeat.ts
var Attr7 = "ng-repeat";
function when10(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.hasAttribute(Attr7);
}
function compile10(node, context) {
  let contents = [];
  const indent = BaseIndent2.repeat(context.level);
  const childIndent = BaseIndent2.repeat(context.level + 1);
  const expr = node.getAttribute(Attr7) || "";
  node.removeAttribute(Attr7);
  node.setAttribute("key", "{{index}}");
  const match = expr.match(/^(.*\S)(\s+in\s+|\s*:\s*)(\S.*)$/);
  if (match) {
    const varExpr = match[1];
    const setExpr = match[3];
    let updatePropExpr = "";
    if (/^(ctx|data)\./.test(setExpr)) {
      updatePropExpr = `vm.getDispatch( \`${setExpr}['\${key}']\` )`;
    } else if (/^[A-Za-z]/.test(setExpr)) {
    }
    contents.push(`${indent}processRepeat(${setExpr}, function( key ) {`);
    if (updatePropExpr) {
      contents.push(`${childIndent}return ${updatePropExpr};`);
    }
    contents.push(`${indent}}, function( ${varExpr}, index ) {`);
    if (updatePropExpr) {
      contents.push(`${childIndent}const update${hyphenToCamelCase(varExpr)} = ${varExpr}.dispatch;`);
    }
    contents.push(`${childIndent}slotScope.${varExpr} = ${varExpr};`);
    const childRes = context.transformFn(node, {
      ...context,
      level: context.level + 1,
      index: 0
    });
    if (childRes) {
      childRes.contents[0] = childRes.contents[0].replace(/^(\s+)/, "$1return ");
      contents = contents.concat(childRes.contents);
      contents[contents.length - 1] = contents[contents.length - 1].replace(/,$/, ";");
      contents.push(`${indent}} )${context.level ? "," : ""}`);
      return {
        ...childRes,
        contents
      };
    }
  }
}
function compileToTemplate8(node, context) {
  let contents = [];
  const indent = BaseIndent2.repeat(context.level);
  const childIndent = BaseIndent2.repeat(context.level + 1);
  const expr = node.getAttribute(Attr7) || "";
  node.removeAttribute(Attr7);
  node.setAttribute("key", "{{index}}");
  const match = expr.match(/^(.*\S)\s+in\s+(\S.*)$/);
  if (match) {
    const varExpr = match[1];
    const setExpr = match[2];
    const isJsxCtx = context.context === "JSX";
    let updatePropExpr = "";
    if (/^(ctx|data)([.[]|$)/.test(setExpr)) {
      updatePropExpr = `vm.getDispatch( \`${setExpr}['\${key}']\` )`;
    }
    contents.push(`${indent}${isJsxCtx ? "{ " : ""}processRepeat(${setExpr}, key => {`);
    if (updatePropExpr) {
      contents.push(`${childIndent}return ${updatePropExpr};`);
    }
    contents.push(`${indent}}, ( ${varExpr}, index ) => {`);
    if (updatePropExpr) {
      contents.push(`${childIndent}const update${hyphenToCamelCase(varExpr)} = ${varExpr}.dispatch;`);
    }
    contents.push(`${childIndent}slotScope.${varExpr} = ${varExpr};`);
    const childRes = context.transformFn(node, {
      ...context,
      level: context.level + 2,
      index: 0,
      context: "JS"
    });
    if (childRes) {
      contents.push(`${childIndent}return (`);
      contents = contents.concat(childRes.contents);
      contents.push(`${childIndent});`);
      contents.push(`${indent}} )${isJsxCtx ? " }" : ""}`);
      return {
        ...childRes,
        contents
      };
    }
  }
}
var compileRepeat_default = {
  when: when10,
  compile: compile10,
  compileToTemplate: compileToTemplate8
};

// ../react-compiler/src/compileEnter.ts
var Attr8 = "ng-enter-key";
function when11(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.hasAttribute(Attr8);
}
function compile11(node, context) {
  const expr = node.getAttribute(Attr8);
  node.removeAttribute(Attr8);
  node.setAttribute("onkeydown", `{{ function(e){ e.which === 13 && ( e.preventDefault() || vm.getAction("${expr}").call()) } }}`);
  return context.transformFn(node, context);
}
var compileEnter_default = {
  when: when11,
  compile: compile11
};

// ../react-compiler/src/compileClick.ts
var Attr9 = "ng-click";
function when12(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.hasAttribute(Attr9);
}
function compile12(node, context) {
  const expr = node.getAttribute(Attr9);
  node.removeAttribute(Attr9);
  node.setAttribute("onclick", `{{ function($event){ return ${expr} } }}`);
  return context.transformFn(node, context);
}
var compileClick_default = {
  when: when12,
  compile: compile12
};

// ../react-compiler/src/compilePropModel.ts
var Attr10 = "ng-prop-model";
function when13(node, _) {
  return node.nodeType === NodeType.ELEMENT_NODE && node.hasAttribute(Attr10);
}
function compile13(node, context) {
  const expr = node.getAttribute(Attr10) || "";
  node.removeAttribute(Attr10);
  const type = node.getAttribute("type");
  const attr = type === "checkbox" ? "checked" : "value";
  const value = type === "checkbox" ? "e.target.checked" : "e.target.value";
  if (/^(ctx|data)[.[]/.test(expr)) {
    node.setAttribute(attr, `{{${expr}.uiValue}}`);
    node.setAttribute("onchange", `{{function(e){vm.dispatch({ scope: '${expr}', value: { 'uiValue': ${value}, 'dirty': true, error: vm.validate(${value}, ${expr})} })}}}`);
  } else {
    node.setAttribute(attr, `{{${expr}.uiValue}}`);
    node.setAttribute("onchange", `{{function(e){${generateUpdateVmPropFunction(expr, value)}}}}`);
  }
  return context.transformFn(node, context);
}
function compileToTemplate9(node, context) {
  const expr = node.getAttribute(Attr10) || "";
  node.removeAttribute(Attr10);
  const type = node.getAttribute("type");
  const attr = type === "checkbox" ? "checked" : "value";
  const value = type === "checkbox" ? "e.target.checked" : "e.target.value";
  if (/^(ctx|data)\./.test(expr)) {
    node.setAttribute(attr, `{{${expr}.uiValue}}`);
    node.setAttribute("onchange", `{{e => vm.dispatch({ scope: '${expr}', value: { 'uiValue': ${value}, 'dirty': true, error: vm.validate(${value}, ${expr})} })}}`);
  } else {
    node.setAttribute(attr, `{{${expr}.uiValue}}`);
    node.setAttribute("onchange", `{{e => ${generateUpdateVmPropFunction(expr, value)}}}`);
  }
  return context.transformFn(node, context);
}
var compilePropModel_default = {
  when: when13,
  compile: compile13,
  compileToTemplate: compileToTemplate9
};

// ../react-compiler/src/compilerFactory.ts
var CompilerFactory = class {
  constructor() {
    this._compilers = [];
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  add(compiler2) {
    this._compilers.push(compiler2);
  }
  compile(node, context = {}) {
    context.transformFn = this.compile.bind(this);
    for (const idx in this._compilers) {
      const compiler2 = this._compilers[idx];
      if (compiler2.when(node, context)) {
        return context.toTemplate && compiler2.compileToTemplate ? compiler2.compileToTemplate(node, context) : compiler2.compile(node, context);
      }
    }
  }
  /**
   * parse view content and convert it to React component
   *
   * @param {Node}  node html content as DOM Node
   * @param {object} vmContext view model definition. See comments for parseViewModel
   * @param {boolean} pretty if true compile to JSX
   * @returns {object} view compile result
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  compileView(node, vmContext = {}, pretty = false) {
    const output = this.compile(preProcessTemplate(node, vmContext), {
      level: 0,
      deps: vmContext.viewDesc || vmContext.viewDeps || {},
      props: vmContext.props || {},
      toTemplate: pretty
    });
    return {
      contents: output.contents.join("\n"),
      inlineDeps: output.inlineDeps || {},
      viewDeps: { ...output.deps, ...vmContext.viewDeps },
      libDeps: vmContext.libDeps || {},
      options: { ...output.options, ...vmContext.options },
      partialStore: { ...output.partialStore, ...vmContext.partialStore },
      props: vmContext.props || {}
    };
  }
};

// ../react-compiler/src/compileReactButton.ts
var Attr11 = "action";
function when14(node, _) {
  const expr = node.getAttribute && node.getAttribute(Attr11);
  return node.nodeType === NodeType.ELEMENT_NODE && node.nodeName === "REACT-BUTTON" && !(expr || "").startsWith("{{");
}
function compile14(node, context) {
  const expr = node.getAttribute(Attr11);
  node.removeAttribute(Attr11);
  node.setAttribute(Attr11, `{{ vm.getAction('${expr}') }}`);
  return context.transformFn(node, context);
}
var compileReactButton_default = {
  when: when14,
  compile: compile14
};

// ../react-compiler/src/compiler.ts
var compiler = new CompilerFactory();
compiler.add(compileRepeat_default);
compiler.add(compileCondition_default);
compiler.add(compileVisible_default);
compiler.add(compileClass_default);
compiler.add(compileTransclude_default);
compiler.add(compileNgTransclude_default);
compiler.add(compileNgTransclude_default);
compiler.add(compileEnter_default);
compiler.add(compilePropModel_default);
compiler.add(compileClick_default);
compiler.add(compileReactButton_default);
compiler.add(compileNgInclude_default);
compiler.add(compileElement_default);
compiler.add(compileText_default);

// ../react-compiler/src/index.ts
var globalSwf2 = globalThis;
globalSwf2.swf = {
  ...globalSwf2.swf,
  react: {
    ...globalSwf2.swf.react,
    compiler: src_exports2
  }
};

// ../react/src/reactUtils.ts
var getPartialStore = (store, path) => {
  const { getData: getStoreData, updateData: updateStoreData } = store;
  const getData = useRef(() => getValue(getStoreData(), path)).current;
  const updateData = useRef((values) => {
    const updatedValues = Object.entries(values).reduce(
      (prev, [path2, value]) => {
        const prevValue = getValue(prev, path2);
        return prevValue === value ? prev : (0, import_set2.default)(path2, value, prev);
      },
      getData()
    );
    updateStoreData({ [path]: updatedValues });
  }).current;
  return { getData, updateData };
};
var useStore = (initFn) => {
  const lastState = useRef(initFn());
  const getData = useRef(() => lastState.current).current;
  const [_, setData] = useState(getData());
  const updateData = useRef((values) => {
    setData(lastState.current = applyValues(getData(), values));
  }).current;
  return { getData, updateData };
};
var useViewModel = (viewDef, props) => {
  const propsRef = useRef({});
  const getProps = useRef(() => propsRef.current).current;
  propsRef.current = props;
  const { getData, updateData } = useStore(() => cloneJson(viewDef.data));
  const actions = useRef(
    initActions(viewDef.actions || {}, { getData, updateData }, getProps)
  ).current;
  useEffect(() => {
    execLifecycleHook(viewDef, actions, "onMount");
    return () => {
      execLifecycleHook(viewDef, actions, "onUnmount");
    };
  }, [actions, viewDef]);
  useEffect(() => {
    execLifecycleHook(viewDef, actions, "onUpdate");
  });
  useEffect(() => {
    const subscriptions = subscribeEvents(viewDef, actions);
    return () => {
      unsubscribeEvents(subscriptions);
    };
  }, [actions, viewDef]);
  return {
    getData,
    updateData,
    actions,
    data: getData()
  };
};
var defineComponent = (componentDef) => {
  const Component = (props) => {
    const propsRef = useRef({});
    const getProps = useRef(() => propsRef.current).current;
    propsRef.current = props;
    const { getData, updateData } = useStore(
      () => cloneJson(componentDef.data)
    );
    const actions = useRef(
      initActionsFromActionFn(
        componentDef.actions,
        { getData, updateData },
        getProps
      )
    ).current;
    useEffect(() => {
      const actionFn = componentDef.lifecycleHooks?.onMount;
      if (actionFn) {
        createActionFromActionFn(actionFn, { getData, updateData }, getProps)();
      }
      const subscriptions = subscribeEvents({ onEvent: componentDef.onEvent }, actions);
      return () => {
        unsubscribeEvents(subscriptions);
        const actionFn2 = componentDef.lifecycleHooks?.onUnmount;
        if (actionFn2) {
          createActionFromActionFn(
            actionFn2,
            { getData, updateData },
            getProps
          )();
        }
      };
    }, [actions, getData, getProps, updateData]);
    useEffect(() => {
      const actionFn = componentDef.lifecycleHooks?.onUpdate;
      if (actionFn) {
        createActionFromActionFn(
          actionFn,
          { getData, updateData },
          getProps
        )();
      }
    });
    return componentDef.render(props, getData(), actions);
  };
  Component.displayName = componentDef.name || "anonymous";
  return Component;
};
var defineComponentDecl = (viewDef) => {
  const viewDepDefs = viewDef.imports || [];
  const viewCompileResult = compiler.compile(parseView(viewDef.view || ""), {
    index: 0,
    level: 0,
    deps: viewDepDefs.reduce((prev, name) => ({ ...prev, [name]: {} }), {})
  });
  const argc = [
    "props",
    "data",
    "actions",
    ...viewDepDefs,
    "styles",
    "createElement",
    "getPartialStore"
  ];
  const argv = [viewDef.styles || {}, createElement, getPartialStore];
  const renderView = bindTrailingArgs(
    new Function(
      ...argc,
      [
        ...Object.keys(viewCompileResult.partialStore).map((fullPath) => {
          const varName = fullPath.replace(/\./g, "_");
          let store, path = "";
          const paths = fullPath.split(".");
          if (fullPath.startsWith("props.")) {
            store = `${paths[0]}.${paths[1]}`;
            path = paths.slice(2).join(".");
          } else {
            store = paths[0];
            path = paths.slice(1).join(".");
          }
          if (path) {
            return `const ${varName} = getPartialStore(${store}, '${path}')`;
          }
          return `const ${varName} = ${store}`;
        }),
        `// quickly overwrite`,
        `data = data.getData();`,
        `return ${viewCompileResult.contents.join("\n")}`
      ].join("\n")
    ),
    ...argv
  );
  const Component = (props) => {
    const { getData, updateData, actions } = useViewModel(viewDef, props);
    const data = { getData, updateData };
    const [viewDeps, setViewDeps] = useState(
      Array(viewDepDefs.length).fill("")
    );
    useEffect(() => {
      const updateViewDeps = async (depNames) => {
        setViewDeps(
          await Promise.all(
            depNames.map((depName) => getViewDep(depName, defineComponentDecl))
          )
        );
      };
      updateViewDeps(viewDepDefs);
    }, [viewDepDefs]);
    return renderView(
      props,
      data,
      actions,
      ...viewDeps
    );
  };
  Component.displayName = viewDef.name || "anonymous";
  return Component;
};
registerLibDeps("view", {
  defineComponent,
  defineComponentDecl
});

// ../react/src/index.ts
var globalSwf3 = globalThis;
globalSwf3.swf = {
  ...globalSwf3.swf,
  react: src_exports3
};

// src/widget-kit/css/SimpleButton.module.scss
var css = `._simple-button_gveqw_1 {
  border-radius: 2px;
  border: 1px solid;
  text-align: center;
  outline: none;
  width: auto;
  padding: 4px 8px;
  font-weight: bold;
  min-height: 24px;
  box-sizing: border-box;
}
._simple-button_gveqw_1._disabled_gveqw_12 {
  border: 1px solid;
  opacity: 1;
}
._simple-button_gveqw_1:not(._disabled_gveqw_12)._accent-highContrast_gveqw_16 {
  background-color: #005f87;
  border-color: #003951;
  color: #fff;
  fill: #fff;
}
._simple-button_gveqw_1:not(._disabled_gveqw_12)._accent-highContrast_gveqw_16:not(._disabled_gveqw_12):hover {
  background-color: #004c6c;
}
._simple-button_gveqw_1:not(._disabled_gveqw_12)._accent-highContrast_gveqw_16:not(._disabled_gveqw_12):active {
  background-color: #003951;
}`;
document.head.appendChild(document.createElement("style")).appendChild(document.createTextNode(css));
var SimpleButton_module_default = {
  "simpleButton": "_simple-button_gveqw_1",
  "disabled": "_disabled_gveqw_12",
  "accentHighContrast": "_accent-highContrast_gveqw_16"
};

// src/widget-kit/viewmodel/SimpleButtonViewModel.json
var SimpleButtonViewModel_default = {
  "schemaVersion": "1.0.0",
  "data": {},
  "actions": {},
  view: `
<button class="{{styles.simpleButton + ' ' + styles.accentHighContrast}}" onclick="{{props.action}}">{{props.children}}</button>
    `,
  styles: SimpleButton_module_default,
  name: "SimpleButton"
};

// src/widget-kit/js/SimpleButton.ts
var SimpleButton = defineComponentDecl(SimpleButtonViewModel_default);
export {
  SimpleButton
};
//# sourceMappingURL=SimpleButton.js.map
