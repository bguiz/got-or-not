var fs = require('fs');
var path = require('path');

var mocha = require('mocha');

var input = require('./input');

var testRunner = new mocha();
var testsDir = __dirname;

fs.readdirSync(testsDir).filter(function filterFiles(fileName) {
  return fileName.substr(-8) === '.spec.js';
}).forEach(function addSpecFiles(fileName) {
  testRunner.addFile(path.join(testsDir, fileName));
});

function ensureReachable(urls) {
  input.urls = urls;
  testRunner.run(function onFinishedRunningTests(failures) {
    process.on('exit', function onProcessExit() {
      process.exit(failures);
    });
  });
}

module.exports = ensureReachable;
