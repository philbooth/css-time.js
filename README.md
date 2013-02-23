# css-time.js

[![Build status][ci-image]][ci-status]

A tiny JavaScript library
that converts milliseconds
to and from [CSS time][csstime].

## Installation

### Via NPM

```
npm install css-time
```

### Via Jam

```
jam install css-time
```

### Via Git

```
git clone git@github.com:philbooth/css-time.js.git
```

## Usage

### Loading the library

#### Via CommonJS

```
var cssTime = require('css-time');
```

#### Via AMD

```
require('css-time', function (cssTime) {
});
```

#### Globally

```
<script type="text/javascript" src="css-time.min.js"></script>
```

### Calling the exported functions

Two functions are exported, `from` and `to`.

#### function from (string)

Returns the number of milliseconds
represented by the CSS time string
passed in the argument.

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

[ci-image]: https://secure.travis-ci.org/philbooth/css-time.js.png?branch=master
[ci-status]: http://travis-ci.org/#!/philbooth/css-time.js
[csstime]: http://www.w3.org/TR/css3-values/#time
[node]: http://nodejs.org/
[npm]: https://npmjs.org/
[jake]: https://github.com/mde/jake
[jshint]: https://github.com/jshint/node-jshint
[mocha]: http://visionmedia.github.com/mocha
[chai]: http://chaijs.com/
[uglifyjs]: https://github.com/mishoo/UglifyJS
