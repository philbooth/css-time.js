/*globals define, module, window, setTimeout */

// This module contains functions for converting milliseconds
// to and from CSS time strings.

(function () {
    'use strict';

    var functions = {
        from: from,
        to: to
    };

    exportFunctions();

    // Public function `from`.
    //
    // Returns the number of milliseconds represented by a
    // CSS time string.
    function from (cssTime) {
        verifyCssTime(cssTime);

        if (cssTime.charAt(cssTime.length - 2) === 'm') {
            return parseFloat(cssTime.substring(0, cssTime.length - 2));
        }

        return parseFloat(cssTime.substring(0, cssTime.length - 1)) * 1000;
    }

    function verifyCssTime (cssTime) {
        if (/^[\-\+]?[0-9]+(\.[0-9]+)?m?s$/.test(cssTime) === false) {
            throw new Error('Invalid CSS time');
        }
    }

    // Public function `to`.
    //
    // Returns a CSS time string representing the number
    // of milliseconds passed in the arguments.
    function to (milliseconds) {
        verifyMilliseconds(milliseconds);

        return milliseconds + 'ms';
    }

    function verifyMilliseconds (milliseconds) {
        if (typeof milliseconds !== 'number' || isNaN(milliseconds)) {
            throw new Error('Invalid milliseconds');
        }
    }

    function exportFunctions () {
        if (typeof define === 'function' && define.amd) {
            define(['css-time'], functions);
        } else if (typeof module === 'object' || module !== null) {
            module.exports = functions;
        } else {
            window.cssTime = functions;
        }
    }
}());

