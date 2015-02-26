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
  }
}


scripts[process.argv[2]]();

