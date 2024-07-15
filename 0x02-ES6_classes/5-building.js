/* eslint-disable class-methods-use-this */
class Building {
  constructor(sqft) {
    this._sqft = sqft;
    // if (this.evacuationWarningMessage === undefined) {
    //   throw new Error('Class extending Building must override evacuationWarningMessage');
    // }
  }

  get sqft() {
    return this._sqft;
  }
}

export default Building;
