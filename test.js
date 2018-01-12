const sortPjson = require('.')
const pjson = require('./package.json')

console.dir(pjson)
console.dir(sortPjson(pjson))
