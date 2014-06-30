(function ($) {
    'use strict';

    var module = (function () {
        var elementsBuffer = {},
            docFragment = document.createDocumentFragment();

        function appendChild(element, selector) {
            $(selector).append(element);
        }

        function removeChild(selector, elementToDelete) {
            $(selector).find(elementToDelete).remove();
        }

        function addHandler(selector, eventType, codeToExecute) {
            $(selector).on(eventType, new Function('', codeToExecute));
        }

        function appendToBuffer(selector, element) {
            if (!elementsBuffer[selector]) {
                elementsBuffer[selector] = docFragment.cloneNode(true);
                elementsBuffer[selector].appendChild(element);
            } else if (elementsBuffer[selector].childElementCount === 99) {
                elementsBuffer[selector].appendChild(element);
                for (var currentSelector in elementsBuffer) {
                    $(currentSelector).append(elementsBuffer[currentSelector]);
                }
                elementsBuffer = [];
            } else {
                elementsBuffer[selector].appendChild(element);
            }
        }

        function getElements(selector) {
            return $(selector);
        }

        return {
            appendChild: appendChild,
            removeChild: removeChild,
            addHandler: addHandler,
            appendToBuffer: appendToBuffer,
            getElements: getElements
        };
    }());

    var domModule = module,
        div = document.createElement('div'),
        navItem = document.createElement('li');

    domModule.appendChild(div, "#wrapper");
    domModule.removeChild('ul', 'li:first-child');
    domModule.addHandler('#button', 'click', 'alert("asd")');
    domModule.appendToBuffer("body", div.cloneNode(true));
    for (var i = 0; i < 99; i += 1) {
        domModule.appendToBuffer("#main-nav ul", navItem.cloneNode(true));
    }

    domModule.appendToBuffer("#main-nav ul", navItem.cloneNode(true));

    var elements = domModule.getElements('li');
    console.log(elements.length);
}(jQuery));