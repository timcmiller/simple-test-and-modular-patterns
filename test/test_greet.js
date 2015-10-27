'use strict';

var expect = require('chai').expect;
var greet = require(__dirname + '/../greet');

describe('the greet function', function() {
  it('should greet someone by name', function() {
    expect(greet.greeting('tim')).to.eql('word tim!');
  });

  it('should process the arguments', function() {
    expect(greet.greeting('tim', 'bob', 'sally')).to.eql('word sally!');
  });
});
