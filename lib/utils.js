var fs = require('fs')
var hl = require('hl')

var stepMax

function getStep () {
  try {
    return parseInt(fs.readFileSync('./step', { encoding: 'utf8' }).toString(), 10)
  } catch (err) {
    return 0
  }
}

function setStep (step) {
  fs.writeFileSync('./step', step)
}

exports.maxStep = function (max) {
  stepMax = max
}

exports.increment = function () {
  var step = getStep()
  step++;
  if (step > stepMax) step = stepMax
  setStep(step)
  return step
}

exports.decrement = function () {
  var step = getStep()
  step--;
  if (step < 0) step = 0
  setStep(step)
  return step
}

exports.zero = function () {
  setStep(0)
}

exports.getCode = function (step) {
  var file = './code/' + step + '.js'
  try {
    fs.statSync(file)
  } catch (err) {
    return ''
  }
  return hl(fs.readFileSync(file, { encoding: 'utf8' }).toString(), 'js')
}
