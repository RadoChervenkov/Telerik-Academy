/* global define */
define(function () {
    'use strict';

    var numberProcessor;

    numberProcessor = (function () {
        function compareNumbers(originalNumber, userGuess) {
            var result = {rams: 0, sheep: 0};

            for (var i = 0; i < originalNumber.length; i++) {
                if (originalNumber[i] === userGuess[i]) {
                    result.rams += 1;
                }
                else if ((originalNumber.indexOf(userGuess[i])) > -1) {
                    result.sheep += 1;
                }
            }

            return result;
        }

        return {
            compareNumbers: compareNumbers
        };
    }());

    return numberProcessor;
});