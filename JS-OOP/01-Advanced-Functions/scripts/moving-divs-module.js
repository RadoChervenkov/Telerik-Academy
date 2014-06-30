(function ($) {
    'use strict';

    var movingShapesModule = (function () {
        function add(shape) {
            var centerX,
                centerY,
                radius,
                angle,
                direction,
                timer,
                left,
                right,
                $currentElement;

            $currentElement = $(document.createElement('div'))
                .text('div')
                .css('text-align', 'center')
                .css('width', getRandomNumber(20, 100) + 'px')
                .css('height', getRandomNumber(20, 100) + 'px')
                .css('background-color', getRandomColor())
                .css('color', getRandomColor())
                .css('border', getRandomNumber(1, 20) + 'px' + ' solid ' + getRandomColor())
                .css('border-radius', getRandomNumber(0, 100) + 'px')
                .css('position', 'absolute')
                .appendTo('#wrapper');

            if (shape === 'ellipse') {
                centerX = getRandomNumber(100, 1000);
                centerY = getRandomNumber(100, 500);
                radius = getRandomNumber(30, 80);
                angle = 0;

                timer = setInterval(function moveDivs() {
                    angle++;
                    if (angle === 360) {
                        angle = 0;
                    }

                    left = centerX + Math.cos((2 * 3.14 / 180) * (angle)) * radius;
                    right = centerY + Math.sin((2 * 3.14 / 180) * (angle)) * radius;

                    $currentElement.css('left', left + 'px');
                    $currentElement.css('top', right + 'px');
                }, 30);
            }
            else {
                centerX = getRandomNumber(100, 1000);
                centerY = getRandomNumber(100, 500);
                direction = 0;

                timer = setInterval(function moveDivs() {
                    if (direction > 3) {
                        direction = 0;
                    }

                    switch (direction) {
                        case 0:
                            centerX += 5;
                            if (centerX > 700) {
                                direction++;
                            }
                            break;
                        case 1:
                            centerY += 5;
                            if (centerY > 300) {
                                direction++;
                            }
                            break;
                        case 2:
                            centerX -= 5;
                            if (centerX < 600) {
                                direction++;
                            }
                            break;
                        case 3:
                            centerY -= 5;
                            if (centerY < 200) {
                                direction++;
                            }
                            break;
                    }

                    $currentElement.css('left', centerX);
                    $currentElement.css('top', centerY);
                }, 50);
            }
        }

        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function getRandomColor() {
            var red = Math.floor(Math.random() * 256);
            var green = Math.floor(Math.random() * 256);
            var blue = Math.floor(Math.random() * 256);

            return 'rgb(' + red + ',' + green + ',' + blue + ')';
        }

        return {
            add: add
        };
    }());

    var movingShapes = movingShapesModule;
    movingShapes.add('ellipse');
    movingShapes.add('ellipse');
    movingShapes.add('ellipse');
    movingShapes.add('rect');
    movingShapes.add('rect');
    movingShapes.add('rect');
}(jQuery));