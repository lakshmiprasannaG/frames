const square = number => number * number;

class Point {
  constructor(point1) {
    this.x1 = point1.x;
    this.y1 = point1.y;
  }
  distance(point2) {
    this.x2 = point2.x;
    this.y2 = point2.y;

    return Math.sqrt(square(this.x1 - this.x2) + square(this.y1 - this.y2));
  }
}

const point1 = { x: 2, y: 1 };
const point2 = { x: 2, y: 3 };

const point = new Point(point1);
console.log(point.distance(point2));
