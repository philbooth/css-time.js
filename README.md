# css-time.js

[![Build status][ci-image]][ci-status]

A tiny JavaScript library
that converts milliseconds
to and from [CSS time][csstime].

* [Why would I want that?](#why-would-i-want-that)
* [How tiny is it?](#how-tiny-is-it)
* [How do I install it?](#how-do-i-install-it)
* [How do I use it?](#how-do-i-use-it)
  * [Loading the library](#loading-the-library)
  * [Calling the exported functions](#calling-the-exported-functions)
    * [from (string)](#from-string)
	* [to (number)](#to-number)
* [Where can I use it?](#where-can-i-use-it)
* [How do I set up the build environment?](#how-do-i-set-up-the-build-environment)
* [What license is it released under?](#what-license-is-it-released-under)

## Why would I want that?

Converting to and from CSS time
is really not difficult.
But this library
saves you the bother
of making sure
you get it right
and is well-supported
by unit tests.
It's one less thing
to worry about,
right? `:)`

## How tiny is it?

1.4 kb unminified with comments, 0.5 kb minified, 0.3 kb minified + gzipped

## How do I install it?

If you're using npm:

```
npm install css-time --save
```

Or if you just want the git repo:

```
git clone git@github.com:philbooth/css-time.js.git
```

If you're into
other package managers,
it is also available
from Bower, Component and Jam.

## How do I use it?

### Loading the library

If you are running in
Node.js,
Browserify
or another CommonJS-style
environment,
you can `require`
check-types like so:

```javascript
var check = require('css-time');
```

It also the supports
the AMD-style format
preferred by Require.js.

If you are
including css-time.js
with an HTML `<script>` tag,
or neither of the above environments
are detected,
it will export the interface globally as `cssTime`.

### Calling the exported functions

Two functions are exported, `from` and `to`.

#### from (string)

Returns the number of milliseconds
represented by a CSS time string.
If the argument
can't be parsed
as a CSS time,
an error is thrown.

```js
cssTime.from('500ms'); // returns 500
cssTime.from('-1.5s'); // returns -1500
```

#### to (number)

Returns a CSS time string
representing the number of milliseconds
passed in the argument.
If the argument
is not a number,
an error is thrown.

```js
cssTime.to(500); // returns '500ms'
cssTime.to(-0.5); // returns '-0.5ms'
```

## Where can I use it?

The code
is all written in
ES3 syntax,
so works in any browser.

## How do I set up the build environment?

### Dependencies

The build environment relies on
[Node.js][node],
[NPM],
[JSHint],
[Mocha],
[Chai] and
[UglifyJS].
Assuming that you already have Node.js and NPM set up,
you just need to run `npm install` to
install all of the dependencies as listed in `package.json`.

The unit tests are in `test/css-time.js`.
You can run them with the command `npm test`.
To run the tests in a browser,
open `test/css-time.html`.

## What license is it released under?

[MIT][license]

[ci-image]: https://secure.travis-ci.org/philbooth/css-time.js.png
[ci-status]: http://travis-ci.org/#!/philbooth/css-time.js
[csstime]: http://www.w3.org/TR/css3-values/#time
[node]: http://nodejs.org/
[npm]: https://npmjs.org/
[jshint]: https://github.com/jshint/node-jshint
[mocha]: http://mochajs.org/
[chai]: http://chaijs.com/
[uglifyjs]: https://github.com/mishoo/UglifyJS
[license]: https://github.com/philbooth/css-time.js/blob/master/COPYING

