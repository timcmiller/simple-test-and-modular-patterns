'use strict';

exports.greeting = function(name) {
  console.log(arguments);
  name = name || process.argv[2] || arguments[2];
  return 'word ' + name + '!';
};

console.log(exports.greeting("tim"));


