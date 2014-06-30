var canvasPainter = (function () {
    'use strict';

    var Shape = (function () {
        function Shape(x, y) {
            this._startX = x;
            this._startY = y;
        }

        return Shape;
    }());

    var Rect = (function () {
        function Rect(x, y, width, height) {
            Shape.call(this, x, y);
            this._width = width;
            this._height = height;
        }

        Rect.prototype = new Shape();

        Rect.prototype.draw = function (context) {
            var ctx = context;
            ctx.beginPath();
            ctx.moveTo(this._startX, this._startY);
            ctx.lineTo(this._startX + this._width, this._startY);
            ctx.lineTo(this._startX + this._width, this._startY + this._height);
            ctx.lineTo(this._startX, this._startY + this._height);
            ctx.closePath();
            ctx.stroke();
        };

        return Rect;
    }());

    var Circle = (function () {
        function Circle(x, y, radius) {
            Shape.call(this, x, y);
            this._radius = radius;
        }

        Circle.prototype = new Shape();

        Circle.prototype.draw = function (context) {
            var ctx = context;
            ctx.beginPath();
            ctx.arc(this._startX, this._startY, this._radius, 0, Math.PI * 2);
            ctx.stroke();
        };

        return Circle;
    }());

    var Line = (function () {
        function Line(x1, y1, x2, y2) {
            Shape.call(this, x1, y1);
            this._endX = x2;
            this._endY = y2;
        }

        Line.prototype = new Shape();

        Line.prototype.draw = function (context) {
            var ctx = context;
            ctx.beginPath();
            ctx.moveTo(this._startX, this._startY);
            ctx.lineTo(this._endX, this._endY);
            ctx.stroke();
        };

        return Line;
    }());

    return {
        Rect: Rect,
        Circle: Circle,
        Line: Line
    };
}());

var canvas = $('#canvas')[0],
    ctx = canvas.getContext('2d'),
    rect = new canvasPainter.Rect(10, 10, 50, 150),
    circle = new canvasPainter.Circle(200, 100, 80),
    line = new canvasPainter.Line(400, 100, 200, 300);

rect.draw(ctx);
circle.draw(ctx);
line.draw(ctx);