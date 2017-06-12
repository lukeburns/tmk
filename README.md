# tmk

touch+mkdirp<3

```js
var tmk = require('tmk')

tmk('path/to/file', function (err) {
  if (!err) console.log('file path/to/file now exists')
})

tmk('path/to/directory/', function (err) {
  if (!err) console.log('directory path/to/directory/ now exists')
})
```

If you run

```
npm install -g tmk
```

then you can run

```
mk path/to/file
```

to create a file and

```
mk path/to/dir/
```

to create a directory.
