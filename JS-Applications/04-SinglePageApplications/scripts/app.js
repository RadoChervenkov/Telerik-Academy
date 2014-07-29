/* global require */
(function () {
    'use strict';

    require.config({
        paths: {
            'jquery': '../libs/jquery-2.1.1',
            'sammy': '../libs/sammy',
            'q': '../libs/q',
            'httpRequester': '../libs/httpRequester'
        }
    });

    require(['jquery', 'sammy', 'httpRequester'], function ($, sammy, httpRequester, mustache, _) {
        $('#main-content').on('click', '#btn-setUserName', function () {
            var username = $('#tb-userName').val() || 'unnamed';
            sessionStorage.setItem('username', username);
            window.location = '#/chat';
        });

        $('#main-content').on('click', '#btn-sendMessage', function () {
            var message = $('#tb-message').val();
            var username = sessionStorage.getItem('username');
            var url = 'http://crowd-chat.herokuapp.com/posts';
            var data = {user: username, text: message};

            httpRequester.postJSON(url, data)
                .then(function (result) {
                    getAllPosts();
                }, function (error) {
                    console.log(error);
                });
        });

        var app = sammy('#main-content', function () {
            this.get('#/', function () {
                $('#main-content').load('templates/login-form.html');
            });

            this.get('#/chat', function () {
                $('#main-content').load('templates/chat-window.html');
                setInterval(getAllPosts, 2000);
            });
        });

        function getAllPosts() {
            var $tempContainer = $('<ul>');
            var url = 'http://crowd-chat.herokuapp.com/posts';

            httpRequester.getJSON(url)
                .then(function (result) {
                    for (var i = result.length - 1; i >= 0; i--) {
                        $('<li>').html('<strong>' + result[i].by + ': </strong>' + ' ' + result[i].text).appendTo($tempContainer);
                    }
                    $('#post-items').html($tempContainer.html());
                    console.log('Messages updated.');
                }, function (error) {
                    console.log(error);
                })
                .done();
        }

        $(function () {
            app.run('#/');
        });
    });
}());