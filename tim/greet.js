

exports.greeting = function(name) {
  console.log(arguments);
  name = process.argv[2] || name;
  return 'word ' + name + '!';
};

console.log(exports.greeting("tim"));


