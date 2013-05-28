/*globals define, module */

// This module contains functions for converting milliseconds
// to and from CSS time strings.

(function (globals) {
    'use strict';

    var regex = /^([\-\+]?[0-9]+(\.[0-9]+)?)(m?s)$/,

    functions = {
        from: from,
        to: to
    };

    exportFunctions();

    // Public function `from`.
    //
    // Returns the number of milliseconds represented by a
    // CSS time string.
    function from (cssTime) {
        var matches = regex.exec(cssTime);

        if (matches === null) {
            throw new Error('Invalid CSS time');
        }

        return parseFloat(matches[1]) * (matches[3] === 's' ? 1000 : 1);
    }

    // Public function `to`.
    //
    // Returns a CSS time string representing the number
    // of milliseconds passed in the arguments.
    function to (milliseconds) {
        if (typeof milliseconds !== 'number' || isNaN(milliseconds)) {
            throw new Error('Invalid milliseconds');
        }

        return milliseconds + 'ms';
    }

    function exportFunctions () {
        if (typeof define === 'function' && define.amd) {
            define(function () {
                return functions;
            });
        } else if (typeof module !== 'undefined' && module !== null) {
            module.exports = functions;
        } else {
            globals.cssTime = functions;
        }
    }
}(this));

