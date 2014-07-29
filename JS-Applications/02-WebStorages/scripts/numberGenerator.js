/* global define */
define(function () {
    'use strict';

    var numberGenerator;

    numberGenerator = (function () {
        function generateFourDigitNumber(array) {
            var copiedArray = array.slice(0);

            var generatedNumber = '';

            while (generatedNumber.length < 4) {
                var currentDigit = getRandomNumber(copiedArray);
                if (currentDigit === 0 && generatedNumber.length === 0) {
                    continue;
                }
                generatedNumber += currentDigit;
            }

            return generatedNumber;
        }

        function getRandomNumber(array) {
            var position = getRandomPosition(0, array.length - 1);
            var digit = array[position];
            array.splice(position, 1);
            return digit;
        }

        function getRandomPosition(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        return {
            generateNumber: generateFourDigitNumber
        };
    }());

    return numberGenerator;
});