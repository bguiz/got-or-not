# `got-or-not`

Ensures that specified URLs are reachable, or
that specified files exist.

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

## Author

[Brendan Graetz](http://bguiz.com/)

## Licence

GPL-3.0
