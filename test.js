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
    ]))
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
  }
}


scripts[process.argv[2]]();

