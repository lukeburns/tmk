var touch = require('touch')
var mkdirp = require('mkdirp')
var p = require('path')

module.exports = function (path, options, callback) {
  if (typeof options === "function") callback = options, options = null
  var dir = (path[path.length-1] === '/') ? path : p.dirname(path)
  mkdirp(dir, options, function (er) {
    if (!er && dir !== path) touch(path, options, function (err) {
      if (err && err.code === 'EISDIR') callback(null, true) // awaiting PR to be merged: https://github.com/isaacs/node-touch/pull/14
      else callback(err, false)
    })
    else callback(er, true)
  })
}
