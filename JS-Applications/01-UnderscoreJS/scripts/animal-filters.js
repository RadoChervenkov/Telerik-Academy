/* global define, console */
define(['underscore'], function (_) {
    'use strict';

    var groupAnimalsByNumberOfLegs = function (collection) {
        var animals = _.chain(collection)
            .groupBy(function (animal) {
                return animal.species;
            })
            .sortBy(function (animal) {
                return animal[0].legs;
            })
            .value();

        console.log(JSON.stringify(animals));
    };

    var countTotalLegs = function (collection) {
        var totalLegs = 0;

        _.each(collection, function (animal) {
            totalLegs += animal.legs;
        });

        console.log('Total number of legs: ' + totalLegs);
    };

    return {
        groupAnimalsByNumberOfLegs: groupAnimalsByNumberOfLegs,
        countTotalLegs: countTotalLegs
    };
});