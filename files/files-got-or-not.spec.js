var path = require('path');
var fs = require('fs');

var chai = require('chai');

var input = require('../input');

var expect = chai.expect;
var cwd = process.cwd();

describe('[Got files or not?]', function() {
  input.files.forEach(function(file) {
    it('Got '+file+' or not?', function(done) {
      var filePath = path.resolve(cwd, file);
      // console.log(file, filePath);
      fs.lstat(filePath, function(err, stat) {
        if (!!err || !stat.isFile()) {
          done(''+filePath+' is not a file.');
        }
        else {
          done();
        }
      });
    });
  });
});
