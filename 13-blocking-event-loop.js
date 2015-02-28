/*jslint node:true plusplus:true  white:true */
'use strict';

/*
 * the prescribed solution uses setTimout for every 10 iterations.
 * i think the solution i used here is better, but what do i know.
 *
 * the callback is unnecessary for functionality. i added it to see the 
 * final 'done' message when the repeat operation is complete.
 *
 * process.nextTick() and setImmediate() seem to perform equally with 
 * identical results (running code after the call to repeat() immediately
 * after the first invocation of operation().)
 *
 */

function repeat(operation, num, callback) {
  if (num <= 0) { return callback(); }
  operation();
  //process.nextTick(function () {
  setImmediate(function () {
    return repeat(operation, --num, callback);
  });
}

/*
var count = 0;
repeat(function () {
  //console.log('repeating...', ++count);
}, 1, function () {
  console.log('done!');
});
console.log('this should print during the repeat cycle');
*/

module.exports = repeat;
