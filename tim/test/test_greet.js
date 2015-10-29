

var expect = require('chai').expect;
var greet = require(__dirname + '/../greet');

describe('the greet function', function() {
  it('should greet someone by name', function() {
    expect(greet.greeting('tim')).to.eql('word tim!');
  });

  describe('calling this funciton through node', function() {

    before(function() {
      this.backup = process.argv;
      process.argv = ['node', 'myfile', 'test name'];

    });

    after(function() {
      process.argv = this.backup;
    });

    it('should pull from process.argv', function() {
      expect(greet.greeting()).eql('word test name!');
    });
  });
});
