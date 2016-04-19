// node code/4.js
var argv = require('yargs')
  .option('foo', {
    alias: 'f',
    describe: 'Required string option',
    type: 'string',
    required: true
  })
  .option('bar', {
    alias: 'b',
    describe: 'Optional boolean flag',
    type: 'boolean'
  }).argv
console.log(argv)
