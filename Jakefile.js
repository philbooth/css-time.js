/*jshint nomen:false */
/*globals require, console, complete, __dirname, process */

'use strict';

var exec = require('child_process').exec,

commands = {
    minify: './node_modules/.bin/uglifyjs ./src/css-time.js --compress --mangle --output ./src/css-time.min.js',
    test: './node_modules/.bin/mocha --ui tdd --reporter spec --colors --slow 50 ./test/css-time.js',
    lint: './node_modules/.bin/jshint ./src/css-time.js --config config/jshint.json',
    prepare: 'npm install'
};

desc('Minify the source code for deployment.');
task('minify', [ 'prepare', 'lint', 'test' ], function () {
    runCommand('minify', 'Minifying...');
}, {
    async: true
});

desc('Run the unit tests.');
task('test', [ 'prepare' ], function () {
    runCommand('test', 'Testing...');
}, {
    async: true
});

desc('Lint the source code.');
task('lint', [ 'prepare' ], function () {
    runCommand('lint', 'Linting...');
}, {
    async: true
});

desc('Install dependencies.');
task('prepare', function () {
    runCommand('prepare', 'Preparing the build environment...');
}, {
    async: true
});

function runCommand (command, message) {
    console.log(message);
    exec(commands[command], { cwd: __dirname }, function (error, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        if (typeof error === 'object' && error !== null) {
            console.log(error.message);
            process.exit(1);
        }
        complete();
    });
}

