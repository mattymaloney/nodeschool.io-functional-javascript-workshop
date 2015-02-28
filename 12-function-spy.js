/*jslint node:true plusplus:true  white:true */
'use strict';

/*
 * according to the prescribed solution, the arguments quasi array does not have
 * to be slice()d into a real array before being apply()ed to the originalMethod.

      function Spy(target, method) {
        var originalFunction = target[method]

        // use an object so we can pass by reference, not value
        // i.e. we can return result, but update count from this scope
        var result = {
          count: 0
        }

        // replace method with spy method
        target[method] = function() {
          result.count++ // track function was called
          return originalFunction.apply(this, arguments) // invoke original function
        }

        return result
      }

      module.exports = Spy

 */

function Spy(target, method) {
  var originalMethod = target[method];  
  var ret = { 
    count: 0
  };
  
  target[method] = function () {
    ret.count++;
    return originalMethod.apply(target, Array.prototype.slice.call(arguments));
  };
  
  return ret;
}

module.exports = Spy;