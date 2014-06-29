var canvasPainter = (function () {
    var Shape = (function () {
        function Shape(x, y) {
            var startX,
                startY;

            this.startX = x;
            this.startY = y;
        }

        return Shape;
    }());

    var Rect = (function () {
        function Rect(x, y, width, height) {
            var width,
                height;

            Shape.call(this, x, y);
            this.width = width;
            this.height = height;
        }

        Rect.prototype.draw = function (context) {
            var ctx = context;
            ctx.beginPath();
            ctx.moveTo(this.startX, this.startY);
            ctx.lineTo(this.startX + this.width, this.startY);
            ctx.lineTo(this.startX + this.width, this.startY + this.height);
            ctx.lineTo(this.startX, this.startY + this.height);
            ctx.closePath();
            ctx.stroke();
        }

        return Rect;
    }());

    var Circle = (function () {
        function Circle(x, y, radius) {
            var radius;

            Shape.call(this, x, y);
            this.radius = radius;
        }

        Circle.prototype.draw = function (context) {
            var ctx = context;
            ctx.beginPath();
            ctx.arc(this.startX, this.startY, this.radius, 0, Math.PI * 2);
            ctx.stroke();
        };

        return Circle;
    }());

    var Line = (function () {
        function Line(x1, y1, x2, y2) {
            var endX,
                endY;

            Shape.call(this, x1, y1);
            this.endX = x2;
            this.endY = y2;
        };

        Line.prototype.draw = function (context) {
            var ctx = context;
            ctx.beginPath();
            ctx.moveTo(this.startX, this.startY);
            ctx.lineTo(this.endX, this.endY);
            ctx.stroke();
        };

        return Line;
    }());

    return {
        Rect: Rect,
        Circle: Circle,
        Line: Line
    }
}());

var canvas = $('#canvas')[0],
    ctx = canvas.getContext('2d'),
    rect = new canvasPainter.Rect(10, 10, 50, 150),
    circle = new canvasPainter.Circle(200, 100, 80),
    line = new canvasPainter.Line(400, 100, 200, 300);

rect.draw(ctx);
circle.draw(ctx);
line.draw(ctx);