/* global define */
define(function () {
    'use strict';

    var scoreManager;

    scoreManager = (function () {
        function saveScore(name, tries) {
            localStorage.setItem(name, tries);
        }

        function getScores() {
            var allScores = [];

            for (var i = 0; i < localStorage.length; i++) {
                allScores.push({name: localStorage.key(i), score: localStorage.getItem(localStorage.key(i))});
            }

            return allScores;
        }

        return {
            saveScore: saveScore,
            getScores: getScores
        };
    })();

    return scoreManager;
});
