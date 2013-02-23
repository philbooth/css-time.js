/*globals define, module, window, setTimeout */

(function () {
    'use strict';

    var functions = {
        to: to,
        from: from
    };

    exportFunctions();

    function to (milliseconds) {
        verifyMilliseconds(milliseconds);

        return milliseconds + 'ms';
    }

    function verifyMilliseconds (milliseconds) {
        if (typeof milliseconds !== 'number' || isNaN(milliseconds)) {
            throw new Error('Invalid milliseconds');
        }
    }

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

