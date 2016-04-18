var gotOrNot = require('../index.js');

gotOrNot({
  urls: [
    'https://github.com/bguiz',
    'http://blog.bguiz.com/'
  ],
  files: [
    './package.json',
    './files/files-got-or-not.spec.js',
    './node_modules/chai/package.json'
  ],
});
