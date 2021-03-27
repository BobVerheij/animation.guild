//Example One: Basic Shapes

var exampleOne = function (p) {
    var x;
    var y;
    var target;
    var current;
    var sizeTarget;
    var sizeCurrent;
    var speed;
    p.setup = function () {
        var thisDiv = document.getElementById("exampleTwo");
        var xSize = thisDiv.offsetWidth;
        var ySize = thisDiv.offsetHeight;
        p.createCanvas(xSize, ySize);
        x = p.width / 2;
        y = p.height / 2;
        target = p.createVector(x, y);
        current = p.createVector(x, y);
        sizeCurrent = 0;
        sizeTarget = 0;
    };

    p.draw = function () {
        p.clear();
        p.fill(1);

        if (!(p.mouseX < 0 || p.mouseX > p.width || p.mouseY < 0 || p.mouseY > p.height)) {
            target.x = p.mouseX;
            target.y = p.mouseY;
            speed = 0.1;
            sizeTarget = 50;
        } else {
            target.x = p.width/2;
            target.y = p.height/2;
            speed = 0.03;
            sizeTarget = 50;
        }

        current = p5.Vector.lerp(current, target, speed);

        sizeCurrent += (sizeTarget - sizeCurrent) * speed;
        p.ellipse(current.x, current.y, sizeCurrent);

    };
};
var myp5 = new p5(exampleOne, 'exampleOne');

var exampleTwo = function (p) {
    var x = 100;
    var y = 100;
    var currentColor;
    var targetColor;
    p.setup = function () {
        var thisDiv = document.getElementById("exampleOne");
        var xSize = thisDiv.offsetWidth;
        var ySize = thisDiv.offsetHeight;
        p.createCanvas(xSize, ySize);
        x = p.width / 2;
        y = p.height / 2;
        currentColor = p.color(300);
        targetColor = p.color(300);
    };

    p.largestOf = function (A, B) {
        if (A > B) { return A;
        } else { return B }
    }

    p.smallestOf = function (A, B) {
        if (A > B) { return B;
        } else { return A }
    }

    p.draw = function () {
        var size = p.smallestOf(p.width, p.height)*.75;
        p.rectMode(p.CENTER);

        p.noStroke();
        p.fill(255);
        p.rect(x + size/2 + p.width/100, y, size);
        p.noFill();
        p.strokeWeight(3);
        p.stroke(255);
        p.rect(x - size/2 - p.width/100, y, size);
    };
};
var myp5 = new p5(exampleTwo, 'exampleTwo');
