/* global require, console */
(function () {
    'use strict';

    require.config({
        paths: {
            jquery: '../libs/jquery-2.1.1',
            underscore: '../libs/underscore'
        }
    });

    require(['students-data', 'student-filters'], function (studentsData, studentFilters) {
        studentFilters.sortByFirstBeforeLastName(studentsData);
        console.log('------------------');
        studentFilters.findStudentsBetween18And24Years(studentsData);
        console.log('------------------');
        studentFilters.findStudentWithHighestMarks(studentsData);
        console.log('------------------');
    });

    require(['animals-data', 'animal-filters'], function (animalsData, animalFilters) {
        animalFilters.groupAnimalsByNumberOfLegs(animalsData);
        console.log('------------------');
        animalFilters.countTotalLegs(animalsData);
        console.log('------------------');
    });

    require(['books-data', 'book-filters'], function (booksData, bookFilters) {
        bookFilters.findTheAuthorWithMostBooks(booksData);
        console.log('------------------');
    });

    require(['people-data', 'people-filters'], function (peopleData, peopleFilters) {
        peopleFilters.findMostCommonFirstName(peopleData);
        peopleFilters.findMostCommonLastName(peopleData);
    });
}());