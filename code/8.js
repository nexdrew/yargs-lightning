// node code/8.js --help
require('yargs')
  .usage('Usage: $0 [opts] <command>') // <-- this
  .option('x', { desc: 'the x option' })
  .option('y', { desc: 'the y option' })
  .command('hello', 'the hello command')
  .command('goodbye', 'the goodbye command')
  .example('$0 hello -x wut', 'Run hello command with x=wut') // <-- this
  .epilog('Visit docs at myapp.co') // <-- this
  .wrap(null) // <-- and this
  .help()
  .argv
