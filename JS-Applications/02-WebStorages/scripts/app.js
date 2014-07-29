/* global define, require */
(function () {
    'use strict';

    require.config({
        paths: {
            jquery: '../bower_components/jquery/dist/jquery.min',
            numberGenerator: './numberGenerator',
            domInteractor: './domInteractor',
            numberProcessor: './numberProcessor',
            scoreManager: './scoreManager'
        }
    });

    define(['jquery', 'numberGenerator', 'domInteractor', 'numberProcessor', 'scoreManager'],
        function ($, numberGenerator, domInteractor, numberProcessor, scoreManager) {
            var allNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            var tries = 0;
            var computerNumber = numberGenerator.generateNumber(allNumbers);

            $('#btn-checkInput').on('click', function () {
                var userNumber = domInteractor.readInput();
                var result = numberProcessor.compareNumbers(computerNumber, userNumber);
                tries += 1;
                if (result.rams === 4) {
                    $('#results-container').empty();
                    var name = domInteractor.getUserName();
                    scoreManager.saveScore(name, tries);
                    computerNumber = numberGenerator.generateNumber(allNumbers);
                    domInteractor.printNewGameMessage();
                } else {
                    domInteractor.printResult(userNumber, result);
                }
            });

            $('#btn-showScores').on('click', function () {
                // I know this isn't perfect, but i had only 10 minutes to deadline :(
                $('#scores-container').empty().toggle();
                var allScores = scoreManager.getScores();
                for (var i = 0; i < allScores.length; i += 1) {
                    $('<p>').text(allScores[i].name + ' -> ' + allScores[i].score + ' points').appendTo('#scores-container');
                }
            });
        });
}());

