// node code/9.js --min 2 --max 1
var argv = require('yargs')
  .option('min', { desc: 'minimum', type: 'number' })
  .option('max', { desc: 'maximum', type: 'number' })
  .check(function (argv) {
    if (argv.min > argv.max) throw new Error('min must be less than max')
    return true
  })
  // .fail(function (msg, err) {
  //   throw err
  // })
  .argv
console.log('yay, your min and max look good!')
