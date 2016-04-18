var fs = require('fs');
var path = require('path');

var mocha = require('mocha');

var input = require('./input');

var testRunner = new mocha();

module.exports = gotOrNot;

function gotOrNot(options) {
  if (Array.isArray(options.files)) {
    input.files = options.files;
    gotOrNotForType(
      path.resolve(__dirname, './files'));
  }
  if (Array.isArray(options.urls)) {
    input.urls = options.urls;
    gotOrNotForType(
      path.resolve(__dirname, './urls'));
  }

  testRunner.run(function onFinishedRunningTests(failures) {
    process.on('exit', function onProcessExit() {
      process.exit(failures);
    });
  });
}

function gotOrNotForType(testsDir) {
  fs
    .readdirSync(testsDir)
    .filter(function filterFiles(fileName) {
      return !!fileName.match(/\.spec\.js$/);
    })
    .forEach(function addSpecFiles(fileName) {
      testRunner.addFile(path.join(testsDir, fileName));
    });
}
