/*jslint node:true plusplus:true  white:true */
'use strict';

/*
 * this solution is solid, but not nearly as simple and beautiful as the 
 * expected solution, which is:
 *
    module.exports = function map(arr, fn) {
      return arr.reduce(function(acc, item, index, arr) {
        return acc.concat(fn(item, index, arr))
      }, [])
    }
 */

module.exports = function (arr, fn) {
  function reducer (currentResult, currentValue, currentIndex, arr) {
    currentResult[currentIndex] = fn(currentValue);
    return currentResult;
  }
  return arr.reduce(reducer, []);
};