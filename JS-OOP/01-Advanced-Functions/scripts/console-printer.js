(function () {
    'use strict';

    var module = (function () {
        function writeLine(message) {
            if (arguments.length === 1) {
                console.log(message.toString());
            } else {
                var result = formatString(arguments);
                console.log(result.toString());
            }
        }

        function writeError(message) {
            if (arguments.length === 1) {
                console.error(message.toString());
            } else {
                var result = formatString(arguments);
                console.error(result.toString());
            }
        }

        function writeWarning(message) {
            if (arguments.length === 1) {
                console.warn(message.toString());
            } else {
                var result = formatString(arguments);
                console.warn(result.toString());
            }
        }

        function formatString(args) {
            var stringToFormat = args[0],
                strings = Array.prototype.slice.call(args, 1),
                indexStart = stringToFormat.indexOf('{'),
                indexEnd = stringToFormat.indexOf('}');

            while (indexStart !== -1 && indexEnd !== -1) {
                var indexNum = parseInt(stringToFormat.substr(indexStart + 1, indexEnd - indexStart - 1)),
                    placeholder = stringToFormat.substring(indexStart, indexEnd + 1);

                stringToFormat = stringToFormat.replace(placeholder, strings[indexNum]);
                indexStart = stringToFormat.indexOf('{');
                indexEnd = stringToFormat.indexOf('}');
            }

            return stringToFormat;
        }

        return {
            writeLine: writeLine,
            writeError: writeError,
            writeWarning: writeWarning
        };
    }());

    var writer = module;
    writer.writeLine('asdasdasd');
    writer.writeLine('Message: {0}', 'hello');
    writer.writeLine('Message: {0} {1}', 'hello', 'hello');
    writer.writeLine('Message: {0} {1} {2}', 'hello', 'hello', 'hello');
    writer.writeLine('Message: {0} {1} {2} {3}', 'hello', 'hello', 'hello', 'hello');
    writer.writeLine('Message: {0} {1} {2} {3} {4}', 'hello', 'hello', 'hello', 'hello', 'hello');
    writer.writeLine('Message: {0} {1} {2} {3} {4} {5}', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello');
    writer.writeLine('Message: {0} {1} {2} {3} {4} {5} {6}', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello');
    writer.writeLine('Message: {0} {1} {2} {3} {4} {5} {6} {7}', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello');
    writer.writeLine('Message: {0} {1} {2} {3} {4} {5} {6} {7} {8}', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello');
    writer.writeLine('Message: {0} {1} {2} {3} {4} {5} {6} {7} {8} {9}', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello');

    writer.writeWarning('Warn message: {0}', 'warned!');
    writer.writeError('Error message: {0} {1} {2} {3} {4} {5} {6}', 'There', 'was', 'an', 'error', 'with', 'your', 'code!');
}(jQuery));