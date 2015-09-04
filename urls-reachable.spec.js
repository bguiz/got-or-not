var superagent = require('superagent');
var chai = require('chai');

var input = require('./input');

var agent = superagent.agent();
var expect = chai.expect;

describe('test that URLs are reachable', function() {
  input.urls.forEach(function eachUrl(url) {
    it('Should load '+url, function(done) {
      agent
        .get(url)
        .end(function(err, res) {
          try {
            expect(err).not.to.exist;
            expect(res).to.be.an('object');
            expect(res).to.have.a.property('status').to.be.a('number');
            expect(res.status).to.be.at.least(200);
            expect(res.status).to.be.below(300);
            done();
          }
          catch (ex) {
            done(ex);
          }
        });
    });
  });
});
