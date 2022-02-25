/*
  The origin (0,0) of the canvas is the upper left:

  (0,0)
    --------- +X
   |
   |
   |
   |
   +Y

  Positive x coordinates go to the right, and positive y coordinates go down.

  The origin in mathematics is the "center," and positive y goes *up*.

  We'll refer to the mathematics coordinate system as the "logical"
  coordinate system, and the coordinate system for the canvas as the
  "physical" coordinate system.

  The functions just below set up a mapping between the two coordinate
  systems.

  They're defined as functions, so that one wanted to, they could read
  ther values from a from instead of having them hard-coded.

 */

class TwoDGraph {
    constructor(canvas, context, drawing_function, max_x, min_x, max_y, min_y, undefined_points) {
        this.canvas = canvas;
        this.context = context;
        this.drawing_function = drawing_function;

        this.maxX = max_x !== undefined ? max_x : 10;
        this.minX = min_x !== undefined ? min_x : -10;

        this.maxY = max_y !== undefined ? max_y : this.maxX * this.max_height / this.max_width;
        this.minY = min_y !== undefined ? min_y : this.minX * this.max_height / this.max_width;

        this.undefined_points = undefined_points !== undefined ? undefined_points : [];
    }

    get max_width() {
        return this.canvas.width;
    }

    get max_height() {
        return this.canvas.height;
    }

    xc(x) {
        return (x - this.minX) / (this.maxX - this.minX) * this.max_width;
    }

    yc(y) {
        return this.max_height - (y - this.minY) / (this.maxY - this.minY) * this.max_height;
    }

    draw() {
        this.context.clearRect(0, 0, this.max_width, this.max_height);

        this.drawAxes();
        this.renderFunction();
    }

    drawAxes() {
        let ctx = this.context;

        let tickDelta = 1;

        ctx.save();
        ctx.strokeStyle = "black";
        ctx.lineWidth = 4;
        // Y axis
        ctx.beginPath();
        ctx.moveTo(this.xc(0), this.yc(this.minY));
        ctx.lineTo(this.xc(0), this.yc(this.maxY));
        ctx.stroke();

        // X axis
        ctx.beginPath();
        ctx.moveTo(this.xc(this.minX), this.yc(0));
        ctx.lineTo(this.xc(this.maxX), this.yc(0));
        ctx.stroke();

        // Y axis tick marks
        ctx.lineWidth = 2;
        for (let i = this.minY; (i * tickDelta) < this.maxY; i++) {
            if (i == 0) {
                continue;
            }
            ctx.beginPath();
            ctx.moveTo(this.xc(0) - 5, this.yc(i * tickDelta));
            ctx.lineTo(this.xc(0) + 5, this.yc(i * tickDelta));
            ctx.stroke();
        }

        // X tick marks
        for (var i = this.minX; (i * tickDelta) < this.maxX; i++) {
            ctx.beginPath();
            ctx.moveTo(this.xc(i * tickDelta), this.yc(0) - 5);
            ctx.lineTo(this.xc(i * tickDelta), this.yc(0) + 5);
            ctx.stroke();
        }
        ctx.restore();
    }

    renderFunction() {
        let step = (this.maxX - this.minX) / this.max_width;

        this.context.beginPath();

        this.context.lineWidth = 1;
        this.context.strokeStyle = "red";

        let hasMoved = false;

        for (let x = this.minX; x <= this.maxX; x += step) {
            if (this.undefined_points.includes(x)) {
                continue;
            }
            let y = this.drawing_function(x);
            if (isNaN(y)) {
                this.undefined_points.push(x);
                continue;
            }
            if (!isFinite(y)) {
                hasMoved = false;
                continue;
            }
            if (hasMoved) {
                this.context.lineTo(this.xc(x), this.yc(y));
            } else {
                this.context.moveTo(this.xc(x), this.yc(y));
                hasMoved = true;
            }
        }

        this.context.stroke();

        for (let x of this.undefined_points) {
            let circle = new Path2D();  // <<< Declaration
            circle.arc(this.xc(x), this.yc(this.limit(x)), 5, 0, 2 * Math.PI, false);

            let backgroundColor = getComputedStyle(document.body).getPropertyValue('--bg');
            this.context.fillStyle = backgroundColor;
            this.context.fill(circle); //   <<< pass circle to context

            this.context.strokeStyle = "red";
            this.context.stroke(circle);  // <<< pass circle here too
            // compute limit as x approaches the undefinedPoint
        }
    }

    limit(approaching) {
        let step = (this.maxX - this.minX) / this.max_width;
        return (this.drawing_function(approaching - step) + this.drawing_function(approaching + step)) / 2;
    }
}

function Draw(canvas, func, max_x, min_x, max_y, min_y, undefined_points) {
    if (canvas.getContext) {
        ctx = canvas.getContext('2d');
        let graph = new TwoDGraph(canvas, ctx, func, max_x, min_x, max_y, min_y, undefined_points);
        graph.draw();
    }
}
