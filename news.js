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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./resources/js/admin/imagePicker.js":
/*!*******************************************!*\
  !*** ./resources/js/admin/imagePicker.js ***!
  \*******************************************/
/*! exports provided: validateImage, selectImage, previewImage, getImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateImage", function() { return validateImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectImage", function() { return selectImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "previewImage", function() { return previewImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImage", function() { return getImage; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var image = null;

function validateImage(input, size, maxwidth, maxheight) {
  return new Promise(function (resolve) {
    var errors = {
      size: false,
      dimensions: false,
      validImage: false
    };

    if (typeof input.files[0] !== "undefined") {
      var max = size;
      var mySize = input.files[0].size / 1000;

      if (mySize > max) {
        errors.size = "file size must be less than ".concat(max / 1000, " Mb");
      }

      var _URL = window.URL || window.webkitURL;

      var file = input.files[0];
      var img = new Image();
      var imgwidth = 0;
      var imgheight = 0;
      img.src = _URL.createObjectURL(file);

      img.onload = function () {
        imgwidth = this.width;
        imgheight = this.height;

        if (imgwidth > maxwidth || imgheight > maxheight) {
          errors.dimensions = "Image size must be smaller/equal to".concat(maxwidth, "X").concat(maxheight);
        }

        resolve(errors);
      };

      img.onerror = function () {
        errors.validImage = "".concat(file.type, " : Not a valid image file");
        resolve(errors);
      };
    } else {
      resolve(errors);
    }
  });
}

function selectImage(event) {
  event.target.closest(".image-changer-wrapper").querySelectorAll(".new-img-upload")[0].click();
}

function previewImage(_x) {
  return _previewImage.apply(this, arguments);
}

function _previewImage() {
  _previewImage = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(selectedFile) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              image = selectedFile;

              File.prototype.convertToBase64 = function (callback) {
                var reader = new FileReader();

                reader.onloadend = function (e) {
                  callback(e.target.result, e.target.error);
                };

                reader.readAsDataURL(this);
              };

              selectedFile.convertToBase64(function (base64) {
                resolve(base64);
              });
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _previewImage.apply(this, arguments);
}

function getImage() {
  return image;
}



/***/ }),

/***/ "./resources/js/admin/news/create.js":
/*!*******************************************!*\
  !*** ./resources/js/admin/news/create.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imagePicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imagePicker */ "./resources/js/admin/imagePicker.js");
/* harmony import */ var _slugGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../slugGenerator */ "./resources/js/admin/slugGenerator.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var _window = window,
    axios = _window.axios;
var _window2 = window,
    $ = _window2.$;
var _window3 = window,
    Swal = _window3.Swal;
var toast = window.toastr;
var attachments = [];
var imgHolder = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTU1LjI4IiBoZWlnaHQ9Ijk3LjA1IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA2MjEuMTggMzkwLjYzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KPG1ldGFkYXRhPgo8cmRmOlJERj4KPGNjOldvcmsgcmRmOmFib3V0PSIiPgo8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIvPgo8ZGM6dGl0bGUvPgo8L2NjOldvcms+CjwvcmRmOlJERj4KPC9tZXRhZGF0YT4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMjQ5MyAtOS4zNzM2KSI+CjxnIHRyYW5zZm9ybT0ibWF0cml4KDEuMDQxNyAwIDAgLjk3NjU2IDAgOS4zNzM2KSI+CjxyZWN0IHg9Ii0xLjI4NzhlLTEyIiB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgcnk9IjIuNzI3OSIgZmlsbD0iIzYzNjk2YyIgb3BhY2l0eT0iLjk4Ii8+CjwvZz4KPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS44NzExIDAgMCAxLjY1MjggLTI0Ni4wMyAtMTMwLjc0KSI+CjxwYXRoIGQ9Im0yNDMuMzEgMTU5LjAyYy0zLjI0IDMuNDgtMi4zMSA3LjQ2LTIuMzEgMTEuOTh2MjUgMzdjMC4wMSAyLjU0LTAuMzIgNi40OCAxLjYgOC40IDEuNjMgMS42NCA0LjI2IDEuNTYgNi40IDEuNmgxOCA4MmMyLjE5IDAgNS44NCAwLjIxIDcuNjktMS4wMiAzLjQ4LTIuMzMgMi4zMS0xMy45MSAyLjMxLTE3Ljk4di01NmMtMC4wMS0yLjU0IDAuMzItNi40OC0xLjYtOC40LTEuNjMtMS42NC00LjI2LTEuNTYtNi40LTEuNmgtMTctNjJjLTYuNDggMC0yMy41NS0wLjkzLTI4LjY5IDEuMDJ6bTEwOC42OSA1Ljk4djU4Yy01Ljc3LTIuNzEtMTguNjgtMTUuMDctMjQtMjAuMDItMi4yMS0yLjA3LTYuNjgtNi45OS05Ljk5LTYuNC0zLjA5IDAuNTYtOC43MyA4Ljc2LTExLjAxIDExLjQyLTUuMi0zLjcyLTkuNDctOC41MS0xNC0xMy0xLjU5LTEuNTgtNC44Ny01LjEzLTctNS42Ni0zLjI3LTAuODMtOC42NiA0LjcyLTExIDYuODMtOC4yNyA3LjQ3LTE4LjExIDE3LjY2LTI3IDIzLjgzdi01NWgxMDR6bS0xOSA0LjU3Yy01LjU3IDEuNjktOS45NyA1LjI0LTEwLjU4IDExLjQzLTAuNzkgOC4wOCA3Ljc1IDE1LjI5IDE1LjU4IDEzLjQzIDE0LjgzLTMuNTIgMTEuOC0yNi4yNy01LTI0Ljg2em0yLjAxIDcuMTdjOC44NiAyLjEgNS41NSAxMS4xMyAwIDEwLjcyLTQuOTgtMC4zNi04LjU1LTguMjMgMC0xMC43MnptLTE3LjAxIDI3LjI2YzUuNjUgMi42NyAyMC43MyAxNi45OCAyNiAyMiAzLjc2IDMuNTkgNi40NSA0Ljk3IDggMTBoLTEwNGMwLjA4LTIuMi0wLjAxLTMuOTQgMS4wMi02IDIuMjktNC41OCAyMC4wNS0xOS41MiAyNC45OC0yNC4wOSAyLjQ1LTIuMjcgNy41LTguMDQgMTEtNy44IDMuNjMgMC4yNSAxMi45IDEwLjk2IDE2IDEzLjg1IDIuNjcgMi40OCA1LjIxIDUuMjEgOC44MyAyLjYyIDEuMjktMC45MiAzLjA1LTMuMjggNC4wNC00LjU4IDAgMCA0LjEzLTYgNC4xMy02eiIgZmlsbD0iI2EwYTdhYiIvPgo8L2c+CjwvZz4KPC9zdmc+Cg==";
var documentMaxSize = 10000;
toast.options = {
  closeButton: true,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: "toast-bottom-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: 12000,
  extendedTimeOut: 1000,
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
  tapToDismiss: true
};

function createImgDeleter() {
  var postId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return "<i class=\"mdi mdi-close\" aria-hidden=\"true\" ".concat(postId != null ? "data-postId=\"".concat(postId, "\"") : "", " ></i>");
}

function submitFunction(e) {
  return true;
}

function deleteAttachment(post, attachment) {
  return new Promise(function (resolve, reject) {
    axios["delete"]("/dash/news/".concat(post, "/attachments/").concat(attachment)).then(function (res) {
      resolve(res);
    })["catch"](function (error) {
      var errorString = null;

      if (typeof error.response.data === "string") {
        errorString = error.response.data;
      } else {
        var errArray = Object.values(error.response.data.errors);
        var elist = errArray.map(function (x) {
          return x[0];
        }); // eslint-disable-next-line prefer-destructuring

        errorString = elist[0];
      }

      reject(errorString);
    });
  });
}

function deleteTitlePhoto(e) {
  console.log(e.target);
  var element = e.target;
  var post = element.dataset.postid;
  return new Promise(function (resolve, reject) {
    axios["delete"]("/dash/news/".concat(post, "/photo")).then(function (res) {
      // resolve(res);
      element.parentNode.parentNode.querySelector("input").type = "";
      element.parentNode.parentNode.querySelector("input").type = "file";
      $(element).closest(".image-changer-wrapper").find("img").attr("src", imgHolder);
    })["catch"](function (error) {
      var errorString = null;

      if (typeof error.response.data === "string") {
        errorString = error.response.data;
      } else {
        var errArray = Object.values(error.response.data.errors);
        var elist = errArray.map(function (x) {
          return x[0];
        }); // eslint-disable-next-line prefer-destructuring

        errorString = elist[0];
      }

      reject(errorString);
    });
  });
}

function save(formData) {
  return new Promise(function (resolve, reject) {
    axios.post("/dash/news", formData).then(function (response) {
      resolve(response.data);
    })["catch"](function (error) {
      var errorString = null;

      if (typeof error.response.data === "string") {
        errorString = error.response.data;
      } else {
        var errArray = Object.values(error.response.data.errors);
        var elist = errArray.map(function (x) {
          return x[0];
        }); // eslint-disable-next-line prefer-destructuring

        errorString = elist[0];
      }

      reject(errorString);
    });
  });
}

function imagePickerUpdateCallback(image, el) {
  var element = el.querySelector("i.mdi-close");
  console.log(image);

  if (typeof element === "undefined" || element == null) {
    var postId = window.post != null ? window.post.id : null;
    el.insertAdjacentHTML("beforeend", createImgDeleter(postId));
  }
}

$(document).ready(function () {
  $("#news-post-creator form .headline").on("focusout", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var headline, token, formData, slug;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            headline = $(this).val();
            token = $("#news-post-creator form input[name='_token']").val();
            formData = new FormData();
            formData.append("headline", headline);
            formData.append("_token", token);

            if (!$("#news-post-creator form .id").length) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return");

          case 7:
            _context.next = 9;
            return Object(_slugGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(formData);

          case 9:
            slug = _context.sent;
            $("#news-post-creator form .permalink").val(slug);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
  $("#attachment-list-add-btn").on("click", function () {
    $("#attachments-upload").click();
  });
  var form = document.querySelector("#news-post-creator form");
  var change = "";
  var editor = $("#post-editor-container");
  editor.summernote({
    placeholder: "Some news worthy event goes here",
    callbacks: {
      onChange: function onChange(contents, $editable) {
        change = contents;
      }
    }
  });

  if (window.post !== null) {
    editor.summernote("code", window.post.html);
  }

  $("#news-post-save-btn").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
    var headline, token, permalink, description, status, content, image, formData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            headline = $("#news-post-creator form .headline").val();
            token = $("#news-post-creator form input[name='_token']").val();
            permalink = $("#news-post-creator form .permalink").val();
            description = $("#news-post-creator form .description").val();
            status = $("select#post-status").val();
            content = editor.summernote("code");
            image = Object(_imagePicker__WEBPACK_IMPORTED_MODULE_1__["getImage"])();
            formData = new FormData();
            formData.append("headline", headline);
            formData.append("_token", token);
            formData.append("ops", "");
            formData.append("html", content);
            formData.append("slug", permalink);

            if (image !== null) {
              formData.append("photo", image);
            }

            formData.append("description", description);
            formData.append("status", status);
            $.each(attachments, function (i, file) {
              formData.append("attachment[]", file);
            });
            save(formData).then(function (result) {
              console.log(result);
              toast.success("News post has been updated");
            })["catch"](function (error) {
              console.log(error);
              toast.error("".concat(error));
              toast.warning("Please prefer pdf format for documents and png for images");
            });

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })));
  form.addEventListener("submit", submitFunction); // Save periodically

  setInterval(function () {
    if (change.length > 0) {
      /* 
      Send partial changes
      $.post('/your-endpoint', { 
      partial: JSON.stringify(change) 
      });
      Send entire document
      $.post('/your-endpoint', { 
      doc: JSON.stringify(quill.getContents())
      });
      */
      change = "";
    }
  }, 5 * 1000); // Check for unsaved data

  window.onbeforeunload = function () {
    if (change.length > 0) {
      return "There are unsaved changes. Are you sure you want to leave?";
    }

    return null;
  };

  var imagePickers = document.querySelectorAll(".image-changer-wrapper i:first-child");
  Array.prototype.forEach.call(imagePickers, function (el, i) {
    el.addEventListener("click", _imagePicker__WEBPACK_IMPORTED_MODULE_1__["selectImage"]);
    el.parentNode.parentNode.querySelector("input").addEventListener("change", Object(_imagePicker__WEBPACK_IMPORTED_MODULE_1__["previewImage"])(imagePickerUpdateCallback));
  });
  var imageDeleters = document.querySelectorAll(".image-changer-wrapper i:nth-child(2)");
  Array.prototype.forEach.call(imageDeleters, function (el, i) {
    el.addEventListener("click", deleteTitlePhoto);
  });
  document.getElementById("attachments-upload").addEventListener("change", function (event) {
    if (!event) return;
    var newAttachments = event.target.files;
    newAttachments = _toConsumableArray(newAttachments).filter(function (s) {
      if (!s.type.includes("pdf") && !s.type.includes("wordprocessingml")) {
        toast.error("".concat(s.name, " must be a pdf or word document"));
      }

      if (s.size / 1000 > documentMaxSize) {
        toast.error("".concat(s.name, " [").concat(s.size, "] must be less than ").concat(documentMaxSize / 1000, " mb"));
      }

      return (s.type.includes("pdf") || s.type.includes("wordprocessingml")) && s.size / 1000 <= documentMaxSize;
    });

    for (var i = 0; i < newAttachments.length; i += 1) {
      // get item
      var file = newAttachments[i];
      attachments.push(file);
      var htm = "<li>\n                            <label class=\"form-check-label\">\n                                ".concat(file.name, " </label>\n                            <i class=\"remove mdi mdi-close-circle-outline delete-attachment\" style=\"color: #b66dff !important;\" data-attachment-name=\"").concat(file.name, "\"></i>\n                        </li>");
      $("#attachments-upload").parent().find("ul").append(htm);
    }
  });
  $("ul#news-attachments").on("click", "li i.delete-attachment", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
    var postId, attachmentId, fileName, status;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            postId = window.post.id;
            attachmentId = $(this).data("attachmentId");
            fileName = $(this).data("attachmentName");

            if (attachmentId) {
              _context3.next = 7;
              break;
            }

            attachments = attachments.filter(function (s) {
              return s.name === fileName;
            });
            $(this).closest("li").remove();
            return _context3.abrupt("return");

          case 7:
            _context3.next = 9;
            return deleteAttachment(postId, attachmentId);

          case 9:
            status = _context3.sent;

            if (status) {
              attachments = attachments.filter(function (s) {
                return s.type.includes("pdf") || s.type.includes("wordprocessingml");
              });
              $(this).closest("li").remove();
            }

          case 11:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  })));
});

/***/ }),

/***/ "./resources/js/admin/news/list.js":
/*!*****************************************!*\
  !*** ./resources/js/admin/news/list.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _window = window,
    $ = _window.$;
var _window2 = window,
    axios = _window2.axios;

function deletePost(id) {
  return new Promise(function (resolve, reject) {
    axios["delete"]("/dash/news/".concat(id)).then(function (res) {
      console.log(res);
      resolve(res);
    })["catch"](function (error) {
      console.log(error.response.data);
      var errorString = null;

      if (typeof error.response.data === "string") {
        errorString = error.response.data;
      } else {
        var errArray = Object.values(error.response.data.errors);
        var elist = errArray.map(function (x) {
          return x[0];
        }); // eslint-disable-next-line prefer-destructuring

        errorString = elist[0];
      }

      window.Swal.fire("Error!", errorString, "error");
      reject(errorString);
    });
  });
}

function editPost() {}

$(document).ready(function () {
  $("table#news_table .delete-news").on("click", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var postId, status;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            postId = $(this).data("id");
            _context.next = 3;
            return deletePost(postId);

          case 3:
            status = _context.sent;

            if (status) {
              $(this).closest("tr").remove();
            }

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  })));
});

/***/ }),

/***/ "./resources/js/admin/news/news.js":
/*!*****************************************!*\
  !*** ./resources/js/admin/news/news.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./create */ "./resources/js/admin/news/create.js");

__webpack_require__(/*! ./list */ "./resources/js/admin/news/list.js");

/***/ }),

/***/ "./resources/js/admin/slugGenerator.js":
/*!*********************************************!*\
  !*** ./resources/js/admin/slugGenerator.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _window = window,
    axios = _window.axios;

function slugGenerator(formData) {
  return new Promise(function (resolve, reject) {
    axios.post("/dash/slugger", formData).then(function (response) {
      resolve(response.data);
    })["catch"](function (error) {
      console.log(error.response.data);
      var errorString = null;

      if (typeof error.response.data === "string") {
        errorString = error.response.data;
      } else {
        var errArray = Object.values(error.response.data.errors);
        var elist = errArray.map(function (x) {
          return x[0];
        }); // eslint-disable-next-line prefer-destructuring

        errorString = elist[0];
      }

      window.Swal.fire("Error!", errorString, "error");
      reject(errorString);
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (slugGenerator);

/***/ }),

/***/ 6:
/*!***********************************************!*\
  !*** multi ./resources/js/admin/news/news.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/DC80891C8088FE70/Projects/pass2/resources/js/admin/news/news.js */"./resources/js/admin/news/news.js");


/***/ })

/******/ });