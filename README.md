# tmk

touch+mkdirp<3

```js
var tmk = require('tmk')
tmk('path/to/directory/', function (err) {
  if (!err) console.log('directory path/to/directory/ now exists')
})
tmk('path/to/file', function (err) {
  if (!err) console.log('file path/to/file now exists')
})
```
