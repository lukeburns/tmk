#!/usr/bin/env node
var argv = require('minimist')(process.argv.slice(2));
var tmk = require('./')

var opts = argv
var path = argv._[0].toString()

tmk(path, opts, function (err) {
  if (err) return console.error(err.toString())
})
