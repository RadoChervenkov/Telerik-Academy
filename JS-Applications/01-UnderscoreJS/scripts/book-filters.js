/* global define, console */
define(['underscore'], function (_) {
    'use strict';

    var findTheAuthorWithMostBooks = function (collection) {
        var mostPopularAuthor = _.chain(collection)
            .countBy('author')
            .pairs()
            .max(_.last)
            .value();

        console.log('Author: ' + mostPopularAuthor[0]);
        console.log('Number of books: ' + mostPopularAuthor[1]);
    };

    return {
        findTheAuthorWithMostBooks: findTheAuthorWithMostBooks
    };
});