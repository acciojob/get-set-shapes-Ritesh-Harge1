// script.js

class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // getter for width
  get width() {
    return this._width;
  }

  // getter for height
  get height() {
    return this._height;
  }

  // method to calculate area
  getArea() {
    return this._width * this._height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side); // call Rectangle constructor with equal width & height
    this._side = side;
  }

  // method to calculate perimeter of square
  getPerimeter() {
    return this._side * 4;
  }
}

// Export to browser (Cypress will pick up from window)
if (typeof window !== "undefined") {
  window.Rectangle = Rectangle;
  window.Square = Square;
}

// Export to Node.js/CommonJS if needed
if (typeof module !== "undefined" && module.exports) {
  module.exports = { Rectangle, Square };
}

