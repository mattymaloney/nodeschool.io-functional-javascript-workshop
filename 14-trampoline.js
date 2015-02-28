/*jslint node:true plusplus:true  white:true */
'use strict';

/*
 * Like the previous challenge, the callbacks I included are not 
 * necessary, just helpful for hack-debugging.
 *
 * I just read a ton about trampolining. it was an entirely new concept
 * to me. Most of what I read, I could not implement in vanilla javascript.
 * I found this stack overflow question, which unfortunately was about this
 * very exercise. But The ZenCoder's answer was invaluable in understanding
 * the trampolining concept and how it is applied in javascript. Although, 
 * like one other example I read about, this implementation will not 
 * work for repeating functions that return functions rather than scalar
 * values.
 *
 * http://stackoverflow.com/questions/25228871/how-to-understand-trampoline-in-javascript
 *
 */

function repeat(operation, num, callback) {
  return function () {
    if (num <= 0) { return; }
    operation();
    return repeat(operation, --num, callback);
  };
}

function trampoline(fn) {
  while (fn) {
    fn = fn();
  }
}

module.exports = function(operation, num, callback) {
  return trampoline(function () {
    return repeat(operation, num, callback);
  });
};