sort-pjson
==========

Sorts a package.json using [fixpack](https://npmjs.org/package/fixpack) rules but just with an object, not files.


Usage:

```js
const sort = require('sort-pjson')
const pjson = require('./package.json')
const sorted = sort(pjson)
```
