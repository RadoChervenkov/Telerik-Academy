(function () {
    'use strict';

    require.config({
        paths: {
            'jquery': '../libs/jquery-2.1.1',
            'handlebars': '../libs/handlebars-v1.3.0',
            'people': 'people',
            'controls': 'controls'
        }
    });

    require(['jquery', 'people', 'controls'], function ($, people, controls) {
        var comboBox = controls.ComboBox(people),
            template = $("#person-template").html(),
            comboBoxHtml = comboBox.render(template);
        $('body').append(comboBoxHtml);
    });
}());