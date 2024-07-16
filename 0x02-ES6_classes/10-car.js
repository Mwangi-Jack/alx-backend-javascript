/* eslint-disable class-methods-use-this */
class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const { constructor } = Object.getPrototypeOf(this);
    return new constructor();
  }
}

export default Car;
