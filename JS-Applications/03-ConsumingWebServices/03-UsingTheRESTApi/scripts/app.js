/* global require */
(function () {
    'use strict';

    require.config({
        paths: {
            jquery: '../libs/jquery-2.1.1',
            q: '../libs/q',
            httpRequester: 'httpRequester'
        }
    });

    require(['jquery', 'httpRequester'], function ($, httpRequester) {
        // get all students event
        var $getStudentsButton = $('#getStudents');
        $getStudentsButton.on('click', function () {
            httpRequester.getJSON('http://localhost:3000/students')
                .then(function (data) {
                    data.students.forEach(function (stu) {
                        $('.addedStudent').hide();
                        $('.deletedStudent').hide();
                        var $studentInfo = $('<p></p>');
                        $studentInfo.addClass('retrievedStudents');
                        $studentInfo.text('Name: ' + stu.name + ', Grade: ' + stu.grade + ', ID: ' + stu.id);
                        $('#informator').append($studentInfo);
                    });
                }, function (error) {
                    $('#error').text('Information was unsuccessfully retrieved ' + error.statusText);
                })
                .done();
        });

        // add student event
        var $addStudentButton = $('#addStudent');
        $addStudentButton.on('click', function () {
            var studentName = $('#studentName').val(),
                studentGrade = $('#studentGrade').val(),
                student = {name: studentName, grade: studentGrade};

            httpRequester.postJSON('http://localhost:3000/students', student)
                .then(function () {
                    $('.retrievedStudents').hide();
                    var $studentInfo = $('<p></p>');
                    $studentInfo.addClass('addedStudent');
                    $studentInfo.text('Name: ' + student.name + ', Grade: ' + student.grade + ' SUCCESSFULLY ADDED');
                    $('#informator').prepend($studentInfo);
                }, function (error) {
                    $('#error').text('Error');
                })
                .done();
        });

        // delete student by id
        var $deleteButton = $('#deleteStudent');
        $deleteButton.on('click', function () {
            var id = $('#studentId').val();


            httpRequester.deleteJSON('http://localhost:3000/students/' + id)
                .then(function () {
                    $('.retrievedStudents').hide();
                    var $studentInfo = $('<p></p>');
                    $studentInfo.addClass('deletedStudent');
                    $studentInfo.text('Student with id: ' + id + ' was SUCCESSFULLY DELETED');
                    $('#informator').prepend($studentInfo);
                }, function (error) {
                    $('#error').text('Error');
                })
                .done();
        });
    });
}());