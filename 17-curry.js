/*jslint node:true plusplus:true  white:true */
'use strict';

/*
 * The prescribed solution is quite different than the solution I came
 * up with. They both seem to provide the required functionality.
 * Mine does allow you to include arguments for the function durring the
 * original curryN call as well as allowing you to provide as many arguments
 * as you want with additional curry requests. It will accept arguments until
 * all the required arguments have been received.
 *
 * Prior to this exercise, I really didn't understand currying at all. I
 * thoroughly read from the resources below, and scrathed my head til it
 * was bleeding. Literally. Weird.
 * 
 * see also: 
 * -  http://stackoverflow.com/questions/218025/what-is-the-difference-between-currying-and-partial-application
 * - http://www.phyast.pitt.edu/~micheles/scheme/scheme14.html
 * - http://tech.pro/tutorial/2011/functional-javascript-part-4-function-currying
 * - http://www.westhoffswelt.de/blog/2010/10/8/currying-functions-in-javascript-a-generic-approach
 * - http://benalman.com/news/2012/09/partial-application-in-javascript/#manually-specifying-function-arity
 * - http://www.crockford.com/javascript/www_svendtofte_com/code/curried_javascript/index.html
 *
 * And here's the prescribed solution:
 *
       function curryN(fn, n) {
        // If `n` argument was omitted, use the function .length property.
        if (typeof n !== 'number') n = fn.length

        function getCurriedFn(prev) {
          return function(arg) {
            // Concat the just-specified argument with the array of
            // previously-specified arguments.
            var args = prev.concat(arg)
            // Not all arguments have been satisfied yet, so return a curried
            // version of the original function.
            if (args.length < n) return getCurriedFn(args)
            // Otherwise, invoke the original function with the arguments and
            // return its value.
            else return fn.apply(this, args)
          };
        }

        // Return a curried version of the original function.
        return getCurriedFn([])
      }

      module.exports = curryN

      // Solution Source:
      // http://benalman.com/news/2012/09/partial-application-in-javascript/#manually-specifying-function-arity

 *
 */

var slice = Array.prototype.slice;

//function curry (fn /*, args */) {
//  var numFnArgs = fn.length;
//  var args = slice.call(arguments, 1);
//  var numArgs = args.length;
//
//  if (numArgs < numFnArgs) {
//    // the function needs to be curried until we receive more arguments.
//    return function (/* args */) {
//      return curry.apply(null, [fn].concat(args).concat(slice.call(arguments)));
//    };
//  } else {
//    // we've received all required arguments, and the function needs to be called.
//    return fn.apply(null, args);
//  }
//}

function curryN (fn, numFnArgs /*, args */) {
  numFnArgs = (numFnArgs !== undefined) ? numFnArgs : fn.length;
  var args = slice.call(arguments, 2);
  var numGivenArgs = args.length;

  if (numGivenArgs < numFnArgs) {
    // the function needs to be curried until we receive more arguments.
    return function (/* args */) {
      return curryN.apply(null, [fn, numFnArgs].concat(args).concat(slice.call(arguments)));
    };
  } else {
    // we've received all required arguments. the function needs to be called.
    return fn.apply(null, args);
  }
}

function curry (fn /*, args */) {
  var numFnArgs = fn.length;
  var args = slice.call(arguments, 1);
  return curryN(fn, numFnArgs, args);
}

module.exports = curryN;
