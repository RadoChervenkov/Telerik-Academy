/* global define, prompt, alert */
define(['jquery'], function ($) {
    'use strict';

    var domInteractor;

    domInteractor = (function () {
        function readInput() {
            return $('#tb-input').val();
        }

        function printResult(userNumber, result) {
            $('<p>').text(userNumber + ': ' + 'Rams: ' + result.rams + '; Sheep: ' + result.sheep).appendTo('#results-container');
        }

        function printNewGameMessage() {
            alert('A new number has been generated, you can continue playing');
        }

        function getUserName() {
            return prompt('Congratulations! You have guessed the number. Please enter your name for high score database.', 'Unnamed player');
        }

        return {
            readInput: readInput,
            printResult: printResult,
            getUserName: getUserName,
            printNewGameMessage: printNewGameMessage
        };
    }());

    return domInteractor;
});