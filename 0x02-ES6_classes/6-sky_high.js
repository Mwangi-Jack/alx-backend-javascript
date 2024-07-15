/* eslint-disable class-methods-use-this */
import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floor = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this.sqft;
  }

  evacuationWarningMessage() {
    return 'Evacuate slowly the NUMBER_OF_FLOORS floors';
  }
}

export default SkyHighBuilding;
