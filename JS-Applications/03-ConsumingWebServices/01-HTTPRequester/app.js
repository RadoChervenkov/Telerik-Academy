/* global require */
(function () {
    'use strict';

    require.config({
        paths: {
            jquery: 'libs/jquery-2.1.1',
            q: 'libs/q',
            httpRequester: 'scripts/httpRequester'
        }
    });

    require(['jquery', 'httpRequester'], function ($, httpRequester) {
        $(function () {
            httpRequester.getJSON('scripts/data.txt', {'X-Requested-By': 'This browser', 'X-Test-Multiple-Headers': 'It is working'})
                .then(function (result) {
                    $('#data-container').text(result);
                }, function (error) {
                    $('#data-container').text('There was an error with the request: ' + error.statusText);
                })
                .done();
        });
    });
}());