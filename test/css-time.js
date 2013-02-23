/*globals require */

(function () {
    'use strict';

    var assert = require('chai').assert,
        path = '../src/css-time';

    suite('no setup:', function () {
        test('require does not throw', function () {
            assert.doesNotThrow(function () {
                require(path);
            });
        });

        test('require returns object', function () {
            assert.isObject(require(path));
        });
    });

    suite('require:', function () {
        var cssTime;

        setup(function () {
            cssTime = require(path);
        });

        teardown(function () {
            cssTime = undefined;
        });

        test('from function is exported', function () {
            assert.isFunction(cssTime.from);
        });

        test('from returns correct positive value', function () {
            assert.strictEqual(cssTime.from('500ms'), 500);
        });

        test('from returns correct negative value', function () {
            assert.strictEqual(cssTime.from('-0.5ms'), -0.5);
        });

        test('from returns correct seconds value', function () {
            assert.strictEqual(cssTime.from('1.23s'), 1230);
        });

        test('from throws when no unit is passed', function () {
            assert.throws(function () {
                cssTime.from('0');
            });
        });

        test('from throws when no value is passed', function () {
            assert.throws(function () {
                cssTime.from('ms');
            });
        });

        test('from throws when space is passed', function () {
            assert.throws(function () {
                cssTime.from('500 ms');
            });
        });

        test('from throws when bad unit is passed', function () {
            assert.throws(function () {
                cssTime.from('500m');
            });
        });

        test('to function is exported', function () {
            assert.isFunction(cssTime.to);
        });

        test('to returns correct positive value', function () {
            assert.strictEqual(cssTime.to(500), '500ms');
        });

        test('to returns correct negative value', function () {
            assert.strictEqual(cssTime.to(-0.5), '-0.5ms');
        });

        test('to throws when string is passed', function () {
            assert.throws(function () {
                cssTime.to('500');
            });
        });

        test('to throws when NaN is passed', function () {
            assert.throws(function () {
                cssTime.to(NaN);
            });
        });
    });
}());

