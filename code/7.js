// node code/7.js list
require('yargs')
  .command(
    'list',
    'List something',
    function (yargs) {
      return yargs.option('verbose', {
        describe: 'Verbose mode',
        type: 'boolean'
      })
    },
    function (argv) {
      console.log('list handler, verbose:', argv.verbose)
    }
  ).help().argv
