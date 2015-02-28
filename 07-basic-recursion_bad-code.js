/*jslint node:true plusplus:true  white:true */
'use strict';

/*
 * arr: An Array to reduce over
 * fn: Function to use as the reduction step. Like regular Array#reduce, 
   this function must be passed
   -- previousValue, 
   -- currentValue, 
   -- index and
   -- the array we're iterating over.
 * init: Initial value of the reduction. Unlike Array#reduce, this value 
   is required (and you may assume it will always be supplied).
 */


/* i honestly don't know why this works. it's nothing like the solution either.
 * this doesn't work unless I call arrayReduce(), but I'm not using a return value 
from that call, and the console.log line lists the same "result" for each iteration.
 * this code passes the test and seems to reduce the array, i just don't understand why.
 * i'll need to redo this exercise at the end, when i've forgotten the actual solution, which i've now seen.
 */
var originalArray,
    currentIndex = 0;


function arrayReduce (arr, fn, init) {

  if (arr.length === 0) { return {}; }
  
  if (!originalArray) { originalArray = arr; }
  
  var head = arr[0];
  var tail = arr.slice(1);
  
  var result = fn(init, head, currentIndex, originalArray);
  
  arrayReduce(tail, fn, result);
  
  currentIndex++;
  
  //console.log('currentIndex', currentIndex, 'result', result); //, 'ret', ret);
  
  return result;

}

module.exports = arrayReduce;