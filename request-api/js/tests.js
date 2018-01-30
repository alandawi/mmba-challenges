
mocha.setup('bdd');

var assert = chai.assert;
var expect = chai.expect;

describe("Get Photos", function() {
  var returnedPhotos;
  it('To request for photos', function(done) {
    userCode(function(shots) {
      returnedPhotos = shots
      expect(returnedPhotos).to.not.equal(null);
      done();
    })
  });
  
  it('To return array of photos', function(done) {
    expect(returnedPhotos).to.not.equal(null);
    expect(returnedPhotos).to.be.array;
    expect(returnedPhotos[0]).to.be.array;
    done();
  });

  it('To have valid shots', function(done) {
    expect(returnedPhotos[0]).to.be.an('object');
    expect(returnedPhotos[0]).to.have.property('id');
    expect(returnedPhotos[0]).to.have.property('albumId');
    expect(returnedPhotos[0]).to.have.property('thumbnailUrl');
    expect(returnedPhotos[0]).to.have.property('title');
    expect(returnedPhotos[0]).to.have.property('url');
    done();
  });

  it('To have an uppercase title', function(done) {
    expect(returnedPhotos[0].title).to.be.an('string');
    assert.equal(returnedPhotos[0].title.toUpperCase(), returnedPhotos[0].title);

    done();
  });
});

mocha.run();