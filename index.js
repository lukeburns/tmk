var touch = require('touch')
var mkdirp = require('mkdirp')
var p = require('path')

module.exports = function (path, opts, callback) {
  if (!callback && typeof opts === 'function') {
    callback = opts
    opts = {}
  }

  var dir = (path[path.length-1] === '/') ? path : p.dirname(path)
  mkdirp(dir, opts, function (merr) {
    if (!merr && dir !== path) touch(path, opts, function (terr) {
      callback(terr)
    })
    else callback(merr)
  })
}
