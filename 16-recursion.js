/*jslint node:true plusplus:true  white:true */
'use strict';

/*
 * my solution is, i believe/wonder, breaking a convention of recurion
 * in that it's not returning the current result to the calling 
 * recursive instance. instead, i'm collecting the dependencies in a 
 * separate object, and adding to that object from within
 * each recursion.
 *
 */

function getDependencies(tree) {
  
  var collectedDependencies = {};

  function _getDependencies(tree) {
    if (tree.dependencies) {
      Object.keys(tree.dependencies).forEach(function (key) {
        var o = tree.dependencies[key];
        collectedDependencies[key + '@' + o.version] = true;
        if (o.dependencies) {
          _getDependencies(o);
        }
      });
    }
  }
  _getDependencies(tree);
  
  return Object.keys(collectedDependencies).sort();
}

module.exports = getDependencies;