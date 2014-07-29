/* global define */
define(function () {
    'use strict';

    var students;

    students = [
        {firstName: 'Thomas', lastName: 'Mueller', age: 24, marks: [4, 5, 6]},
        {firstName: 'Mario', lastName: 'Goetze', age: 22, marks: [2, 3, 4]},
        {firstName: 'Manuel', lastName: 'Neuer', age: 28, marks: [3, 4, 5]},
        {firstName: 'Marko', lastName: 'Reus', age: 25, marks: [6, 6, 6]},
        {firstName: 'Julian', lastName: 'Draxler', age: 20, marks: [5, 6, 5]}
    ];

    return students;
});