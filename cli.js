#!/usr/bin/env node

var yargonaut = require('yargonaut')
var figlet = yargonaut.figlet()
var chalk = yargonaut.chalk()

var utils = require('./lib/utils')
var notes = require('./notes.json')
utils.maxStep(notes.length - 1)

function printNote (step) {
  if (step >= notes.length) step = notes.length - 1
  var note = notes[step]
  if (note.title) {
    var font = note.title.font || 'Small Slant'
    var style = chalk[note.title.style || 'bold']
    console.log(style(figlet.textSync(note.title.text, font)))
  }
  if (note.desc) {
    console.log(note.desc)
    console.log()
  }
  var code = utils.getCode(step)
  if (code) {
    console.log(code)
    console.log()
  }
}

require('yargs')
  .usage('A CLI "presentation" on how to build a CLI with yargs')
  .command('start', 'Start the presentation', {}, function (argv) {
    utils.zero()
    printNote(0)
  })
  .command('next', 'Go to next "slide"', {}, function (argv) {
    printNote(utils.increment())
  })
  .command('prev', 'Go to previous "slide"', {}, function (argv) {
    printNote(utils.decrement())
  })
  .help().alias('h', 'help')
  .version().alias('v', 'version')
  .example('$0 start', 'Output the opening "slide" content')
  .example('$0 next', 'Output the next "slide"')
  .example('$0 prev', 'Output the previous "slide"')
  .epilog('For more information on yargs, go to http://yargs.js.org')
  .argv
