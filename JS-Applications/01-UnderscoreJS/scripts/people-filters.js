/* global define, console */
define(['underscore'], function (_) {
    'use strict';

    var findMostCommonFirstName = function (collection) {
        var names = _.chain(collection)
            .countBy('firstName')
            .pairs()
            .max(_.last)
            .value();

        console.log('The most common first name is: ' + names[0]);
    };

    var findMostCommonLastName = function (collection) {
        var names = _.chain(collection)
            .countBy('lastName')
            .pairs()
            .max(_.last)
            .value();

        console.log('The most common last name is: ' + names[0]);
    };

    return {
        findMostCommonFirstName: findMostCommonFirstName,
        findMostCommonLastName: findMostCommonLastName
    };
});