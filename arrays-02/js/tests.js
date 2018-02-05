
mocha.setup('bdd');

var assert = chai.assert;
var expect = chai.expect;

describe("a) Months Interval", function() {
  it('Same month & year', function(done) {
    assert.deepEqual(
      monthsInterval(new Date(2017, 0, 1), new Date(2017, 0, 1)),
      ['January']
    );
    done();
  });

  it('Same month, different year', function(done) {
    assert.deepEqual(
      monthsInterval(new Date(2016, 0, 1), new Date(2017, 0, 1)),
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    );
    done();
  });

  it('Same month, different year (reversed)', function(done) {
    assert.deepEqual(
      monthsInterval(new Date(2017, 0, 1), new Date(2016, 0, 1)),
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    );
    done();
  });

  it('Month interval same year', function(done) {
    assert.deepEqual(
      monthsInterval(new Date(2017, 3, 1), new Date(2017, 7, 1)),
      ['April', 'May', 'June', 'July', 'August']
    );
    done();
  });
  
  it('Month interval same year (reversed)', function(done) {
    assert.deepEqual(
      monthsInterval(new Date(2017, 7, 1), new Date(2017, 3, 1)),
      ['April', 'May', 'June', 'July', 'August']
    );
    done();
  });

  it('Month interval to different year', function(done) {
    assert.deepEqual(
      monthsInterval(new Date(2017, 11, 1), new Date(2018, 0, 1)),
      ['January', 'December']
    );
    done();
  });

  it('Month interval to different year (reversed)', function(done) {
    assert.deepEqual(
      monthsInterval(new Date(2018, 0, 1), new Date(2017, 11, 1)),
      ['January', 'December']
    );
    done();
  });

  it('2 years interval', function(done) {
    assert.deepEqual(
      monthsInterval(new Date(2017, 3, 1), new Date(2019, 3, 1)),
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    );
    done();
  });

  it('2 years interval (reversed)', function(done) {
    assert.deepEqual(
      monthsInterval(new Date(2019, 3, 1), new Date(2017, 3, 1)),
      ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    );
    done();
  });
});

mocha.run();