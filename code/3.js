require('yargs')
  .option('foo', {
    describe: 'Required string option',
    type: 'string',
    required: true
  })
  .option('bar', {
    describe: 'Optional boolean flag',
    type: 'boolean'
  })
  .argv
