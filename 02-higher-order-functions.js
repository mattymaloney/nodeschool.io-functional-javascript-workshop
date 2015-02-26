function repeat (operation, num) {
  if (num >= 1) {
    operation();
    repeat(operation, num - 1);
  }
}

module.exports = repeat;