/*jslint node:true plusplus:true  white:true */
'use strict';

/*
 * this function passes the challenge test, but it uses apply() rather than Array#filter as used in the expected solution. either way, it takes advantage of Array#call for both expeted purposes, so I think the intended goal is met.
 */

function duckCount () {
  if (arguments.length === 0) return 0;
  var args = Array.prototype.slice.call(arguments, 0);
  var thisOneHasQuack = Object.prototype.hasOwnProperty.call(args[0], 'quack');
  return (thisOneHasQuack ? 1 : 0) + duckCount.apply(null, args.slice(1))
}

module.exports = duckCount;