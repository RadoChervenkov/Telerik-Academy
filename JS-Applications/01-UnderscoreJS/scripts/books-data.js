///* global define */
//define(function () {
//    'use strict';
//
//    var books;
//
//    books = [
//        {author: 'Mark Twain', title: 'The Adventures of Tom Sawyer'},
//        {author: 'George R. R. Martin', title: 'A Game of Thrones'},
//        {author: 'J. R. R. Tolkien', title: 'The Hobbit'},
//        {author: 'George R. R. Martin', title: 'A Clash of Kings'},
//        {author: 'George R. R. Martin', title: 'A Storm of Swords'}
//    ];
//
//    return books;
//});

/* global define */
var booksModule = (function () {
    'use strict';

    var books;

    books = [
        {author: 'Mark Twain', title: 'The Adventures of Tom Sawyer'},
        {author: 'George R. R. Martin', title: 'A Game of Thrones'},
        {author: 'J. R. R. Tolkien', title: 'The Hobbit'},
        {author: 'George R. R. Martin', title: 'A Clash of Kings'},
        {author: 'George R. R. Martin', title: 'A Storm of Swords'}
    ];

    return books;
}());