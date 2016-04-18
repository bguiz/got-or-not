# `got-or-not`

Ensures that some URLs are reachable.

## Installation

```bash
npm i --save got-or-not
```

## Usage

```javascript
var gotOrNot = require('got-or-not');
gotOrNot({
  urls: [
    'https://github.com/bguiz',
    'http://bguiz.com/'
  ],
  files: [
    './package.json',
    './foo/bar/baz'
  ],
});
```

## Licence

GPLv3
