'use strict';

exports.greeting = function(name) {
  console.log(arguments);
  var myName = process.argv[2] || arguments[2] || name;
  return 'word ' + myName + '!';
};

console.log(exports.greeting("tim"));


