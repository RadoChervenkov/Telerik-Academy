/* global define, console */
define(['underscore'], function (_) {
    'use strict';

    var sortByFirstBeforeLastName = function (collection) {
        _.chain(collection)
            .filter(function (student) {
                return student.firstName < student.lastName;
            })
            .map(function (student) {
                student.fullName = student.firstName + ' ' + student.lastName;
                return student;
            })
            .sortBy(function (student) {
                return student.fullName;
            })
            .reverse()
            .each(function (student) {
                console.log(student.fullName);
            });
    };

    var findStudentsBetween18And24Years = function (collection) {
        _.chain(collection)
            .filter(function (student) {
                return student.age >= 18 && student.age <= 24;
            })
            .each(function (student) {
                console.log(student.firstName + ' ' + student.lastName);
            });
    };

    var findStudentWithHighestMarks = function (collection) {
        var topStudent = _.chain(collection)
            .map(function (student) {
                var avgMarks = _.reduce(student.marks, function (memo, num) {
                    return memo + num;
                }, 0);

                avgMarks = avgMarks / student.marks.length;

                student.averageMarks = avgMarks;

                return student;
            })
            .sortBy(function (student) {
                return student.averageMarks;
            })
            .last()
            .value();

        console.log('Top student: ' + topStudent.firstName + ' ' + topStudent.lastName + ' ' + topStudent.averageMarks);
    };

    return {
        sortByFirstBeforeLastName: sortByFirstBeforeLastName,
        findStudentsBetween18And24Years: findStudentsBetween18And24Years,
        findStudentWithHighestMarks: findStudentWithHighestMarks
    };
});