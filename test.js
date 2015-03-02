/*jslint node:true plusplus:true  white:true vars:true */
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
    var nums = [1,2,3,4,5];
    var output = map(nums, function double(item) {
      return item * 2;
    });
    console.log(output); // => [2,4,6,8,10]
  },
  '12': function functionSpy () {
    var Spy = require('./12-function-spy');
    var spy = Spy(console, 'error');
    console.error('calling console.error');
    console.error('calling console.error');
    console.error('calling console.error');
    console.log(spy.count); // 3
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
  },
  '14': function trampoline () {
    var repeat = require('./14-trampoline');
    var count = 0;
    repeat(function () {
      console.log('repeating...', ++count);
    }, 5, function () {
      console.log('done!');
    });
    console.log('this should print during the repeat cycle');
  },
  '15': function asyncLoops () {
    var loadUsers = require('./15-async-loops');
    function load (userId, callback) {
      callback({
        id: userId
      });
    }
    function loadedAllUsers (allUsers) {
      console.log('loaded all users.', allUsers);
    }
    loadUsers([1,2,3,4,5], load, loadedAllUsers);
  },
  '16': function recursion () {
    var getDependencies = require('./16-recursion');
    var loremIpsum = {
      "name": "lorem-ipsum",
      "version": "0.1.1",
      "dependencies": {
        "optimist": {
          "version": "0.3.7",
          "dependencies": {
            "wordwrap": {
              "version": "0.0.2"
            }
          }
        },
        "inflection": {
          "version": "1.2.6"
        }
      }
    };
    console.log(getDependencies(loremIpsum));
    // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]
  },
  '17': function curry () {
    var curryN = require('./17-curry');
    function add3(one, two, three) {
      return one + two + three;
    }

    var curryC = curryN(add3);
    var curryB = curryC(1);
    var curryA = curryB(2);
    console.log(curryA(3)); // => 6

    var curryA2 = curryB(7);
    console.log(curryA2(9)); // => 17
    
    console.log(curryA(10)); // => 13

    console.log(curryN(add3)(1)(2)(3)); // => 6
    
    function strConcat(){
      var args = Array.prototype.slice.call(arguments);
      return Array.prototype.concat.apply([], args).join(" ");
    }
    console.log(curryN(strConcat, 5)('This')('problem')('has')('been')('solved'));
    // => This problem has been solved
  },
  '18': function functionCall () {
    var slice = require('./18-function-call');
    var nums = [1,2,3,4,5];
    console.log(slice(nums, 1, 3));
  }
};

//scripts['17']();
scripts[process.argv[2]]();
