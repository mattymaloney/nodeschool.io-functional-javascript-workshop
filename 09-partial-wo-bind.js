/*jslint node:true plusplus:true  white:true */
'use strict';

/*
 * my solution differs from the expected solution only in the first argument 
 * to console.log.apply(). i used null, and the solution passes. i'm not sure
 * what circumstances influence the challenge writers to use 'console' as the 
 * 'this' argument to console.log.apply().
 */

var slice = Array.prototype.slice;

function logger (namespace) {
  return function () {
    console.log.apply(null, [namespace].concat(slice.call(arguments)));
  };
}

module.exports = logger;