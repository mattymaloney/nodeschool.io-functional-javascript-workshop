/*jslint node:true plusplus:true  white:true */
'use strict';

/*
 * my hacked solution is definitely more complicated than the presecribed
 * solution. convoluted too. prescribed solution is simple:
 * 
      module.exports = function(namespace) {
        return console.log.bind(console, namespace)
      }
 */

module.exports = function (namespace) {
  return (function () {
    console.log.apply(console, [namespace].concat(Array.prototype.slice.call(arguments)));
  }).bind();
}