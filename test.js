/*jslint node:true plusplus:true  white:true */
'use strict';

var scripts = {
  '03': function basicMap () {
    var test = require("./03-basic-map");
    console.log('output: ', test([1, 3, 5, 7]));
  },
  '04': function basicFilter () {
    var test = require("./04-basic-filter");
    console.log('output', test([
      { message: "qwre qwer qwre qwre qwre" },
      { message: "asdf asdf asdf asdf asdf" },
      { message: "zxcv zxcv zxcv zcxv zxcv" },
      { message: "qwre qwer" },
      { message: "asdf asdf" },
      { message: "zxcv zxcv" }
    ]));
  },
  '06': function basicReduce () {
    var countWords = require("./06-basic-reduce");
    var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian'];
    console.log(countWords(inputWords));

    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }
  },
  '07': function basicRecursion () {
    var reduce = require('./07-basic-recursion');
    var inputArray = [1, 2, 3, 2, 1, 2];
    var func = function (wordCounts, word) {
      wordCounts[word] = (wordCounts[word] || 0) + 1;
      return wordCounts;
    };
    console.log(reduce(inputArray, func, {}));
  },
  '09': function partialWoBind () {
    var logger = require('./09-partial-wo-bind');
    var logMusic = logger('Music:');
    var logBatman = logger('Batman:');
    logMusic('mo mo mo');
    logBatman('shwackk!', 'bblammmm!');
  },
  '10': function partialWithBind () {
    var logger = require('./10-partial-with-bind');
    var logMusic = logger('Music:', 'who let them dogs out');
    var logBatman = logger('Batman:', 'holy arguments batman!');
    logMusic('mo mo mo');
    logBatman('shwackk!', 'bblammmm!');
  },
  '11': function mapViaReduce () {
    var map = require('./11-map-via-reduce');
    var nums = [1,2,3,4,5]
    var output = map(nums, function double(item) {
      return item * 2
    })
    console.log(output) // => [2,4,6,8,10]
  },
  '12': function functionSpy () {
    var Spy = require('./12-function-spy');
    var spy = Spy(console, 'error')
    console.error('calling console.error')
    console.error('calling console.error')
    console.error('calling console.error')
    console.log(spy.count) // 3
  },
  '13': function nonBlockingEventLoop () {
    var repeat = require('./13-blocking-event-loop');
    var count = 0;
    repeat(function () {
      console.log('repeating...', ++count);
    }, 5, function () {
      console.log('done!');
    });
    console.log('this should print during the repeat cycle');
  }
};

scripts[process.argv[2]]();
