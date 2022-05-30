const fs = require('fs');

const randomNum = (x) => Math.floor(Math.random() * x);

class Style {
  constructor() {
    this.attributes = {};
  }

  addProperty(property, value) {
    this.attributes[property] = value;
  }
  attributesToHtml() {
    return Object.entries(this.attributes).map(([attribute, value]) => {
      return `${attribute}:${value}`;
    }).join(';');
  }
}

class Circle {
  constructor(point, radius, color) {
    this.point = point;
    this.radius = radius;
    this.color = color;
  }

  toHtml() {
    return `<div style="${this.attributes()}" ></div>`;
  }

  attributes() {
    const style = new Style();
    const diameter = this.radius * 2;

    style.addProperty('height', `${diameter}px`);
    style.addProperty('width', `${diameter}px`);
    style.addProperty('top', `${this.point.y}px`);
    style.addProperty('left', `${this.point.x}px`);
    style.addProperty('border-radius', '50%');
    style.addProperty('position', 'absolute');
    style.addProperty('background-color', this.color);

    return style.attributesToHtml();
  }
}

class RGB {
  constructor(red, green, blue) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  toHex() {
    const colors = [this.red, this.green, this.blue].map(color =>
      color.toString(16).padStart(2, 0)
    ).join('');

    return '#' + colors;
  }

  toRgb() {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }
}

const smallCircle = () => {
  const color = new RGB(randomNum(255), randomNum(255), randomNum(255));
  const point = { x: randomNum(1500), y: randomNum(800) };
  const radius = randomNum(80);

  return new Circle(point, radius, color.toHex()).toHtml();
};

const circles = () => Array(300).fill(1).map(smallCircle).join('');

fs.writeFileSync('circle.html', circles(), 'utf8');
