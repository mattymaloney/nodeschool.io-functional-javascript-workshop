/*jslint node:true plusplus:true  white:true */
'use strict';

function countWords (words) {
  return words.reduce(function (wordCounts, word) {
    wordCounts[word] = (wordCounts[word] || 0) + 1;
    return wordCounts;
  }, {});
}

module.exports = countWords;