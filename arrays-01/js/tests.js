
mocha.setup('bdd');

var assert = chai.assert;
var expect = chai.expect;

// getLastItem
describe("a) Get last item", function() {
  it('should return Duck', function(done) {
    assert.equal(getLastItem(['Cat', 'Dog', 'Duck']), 'Duck');
    done();
  });

  it('should return 3', function(done) {
    assert.equal(getLastItem([1, 2, 3]), 3)
    done();
  });

  it('should return undefined', function(done) {
    assert.equal(getLastItem([undefined]))
    done();
  });

  it('should return true', function(done) {
    assert.equal(getLastItem([true, false, false, true]), true)
    done();
  });

  it('should return null', function(done) {
    assert.equal(getLastItem([7, 'String', false, undefined, null]), null)
    done();
  });

  it('should return false', function(done) {
    assert.equal(getLastItem([false]), false)
    done();
  });

  it('should return 1', function(done) {
    assert.equal(getLastItem([1]), 1)
    done();
  });

  it('should return 45', function(done) {
    assert.equal(getLastItem([1, 2, 3, 56, 87, 23, 65, 45]), 45)
    done();
  });
});

// isChristmas
describe("b) Is it Christmas?", function() {
  it('should return true', function(done) {
    assert.equal(isChristmas(new Date( 2018, 11, 24 )), true);
    done();
  });

  it('should return false', function(done) {
    assert.equal(isChristmas(new Date( 2018, 0, 23 )), false);
    done();
  });
});

mocha.run();