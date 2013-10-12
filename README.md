level-lmdb
==========

**Fast & simple storage - a Node.js-style LMDB wrapper**

[![NPM](https://nodei.co/npm/level-lmdb.png)](https://nodei.co/npm/level-lmdb/)

[![Build Status](https://secure.travis-ci.org/Level/level-lmdb.png)](http://travis-ci.org/Level/level-lmdb)

This is a convenience package that bundles the current release of **[LevelUP](https://github.com/rvagg/node-levelup)** and **[LMDB](https://github.com/rvagg/lmdb)** and exposes LevelUP on its export.

Use this package to avoid having to explicitly install LMDB when you want to use LMDB with LevelUP.

```js
var level = require('level-lmdb')

// 1) Create our database, supply location and options.
//    This will create or open the underlying LevelDB store.
var db = level('./mydb')

// 2) put a key & value
db.put('name', 'Level', function (err) {
  if (err) return console.log('Ooops!', err) // some kind of I/O error

  // 3) fetch by key
  db.get('name', function (err, value) {
    if (err) return console.log('Ooops!', err) // likely the key was not found

    // ta da!
    console.log('name=' + value)
  })
})
```

See **[LevelUP](https://github.com/rvagg/node-levelup)** and **[LMDB](https://github.com/rvagg/lmdb)** for more details.

<a name="contributing"></a>
Contributing
------------

**level-lmdb** is an **OPEN Open Source Project**. This means that:

> Individuals making significant and valuable contributions are given commit-access to the project to contribute as they see fit. This project is more like an open wiki than a standard guarded open source project.

See the [CONTRIBUTING.md](https://github.com/Level/level/blob/master/CONTRIBUTING.md) file for more details.

<a name="licence"></a>
Licence &amp; copyright
-------------------

Copyright (c) 2012-2013 Rod Vagg contributors (listed above).

**level-lmdb** is licensed under an MIT +no-false-attribs license. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.
