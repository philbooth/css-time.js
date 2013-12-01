# css-time.js

[![Build status][ci-image]][ci-status]

A tiny JavaScript library
that converts milliseconds
to and from [CSS time][csstime].

## Installation

You can install trier.js
with one of
the package managers:
[NPM];
[Jam];
[Bower];
or [Component].
The package name
for the first three
is `css-time`
and for Component
it's `philbooth/css-time.js`:

```
npm install css-time

jam install css-time

bower install css-time

component install philbooth/css-time.js
```

Alternatively,
you can just clone
the git repository
from GitHub:

```
git clone git@github.com:philbooth/css-time.js.git
```

## Usage

### Loading the library

Both
CommonJS
(e.g. if you're using [Browserify])
and AMD
(e.g. if you're using [Require.js][require])
loading styles are supported.
If neither system is detected,
the library defaults to
exporting it's interface globally
as `cssTime`.

### Calling the exported functions

Two functions are exported, `from` and `to`.

#### function from (string)

Returns the number of milliseconds
represented by a CSS time string.

##### Examples

```
cssTime.from('500ms'); // returns 500

cssTime.from('-1.5s'); // returns -1500
```

#### function to (number)

Returns a CSS time string
representing the number of milliseconds
passed in the argument.

##### Examples

```
cssTime.to(500); // returns '500ms'

cssTime.to(-0.5); // returns '-0.5ms'
```

## Development

### Dependencies

The build environment relies on
[Node.js][node],
[NPM],
[Jake],
[JSHint],
[Mocha],
[Chai] and
[UglifyJS].
Assuming that you already have Node.js and NPM set up,
you just need to run `npm install` to
install all of the dependencies as listed in `package.json`.

### Unit tests

The unit tests are in `test/css-time.js`.
You can run them with the command `npm test` or `jake test`.
To run the tests in a web browser,
open `test/css-time.html`.

[ci-image]: https://secure.travis-ci.org/philbooth/css-time.js.png
[ci-status]: http://travis-ci.org/#!/philbooth/css-time.js
[csstime]: http://www.w3.org/TR/css3-values/#time
[npm]: https://npmjs.org/
[jam]: http://jamjs.org/
[component]: http://component.io/
[bower]: http://bower.io/
[browserify]: http://browserify.org/
[require]: http://requirejs.org/
[node]: http://nodejs.org/
[jake]: https://github.com/mde/jake
[jshint]: https://github.com/jshint/node-jshint
[mocha]: http://visionmedia.github.com/mocha
[chai]: http://chaijs.com/
[uglifyjs]: https://github.com/mishoo/UglifyJS

