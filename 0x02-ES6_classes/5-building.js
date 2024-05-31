export default class Building {
  constructor(sqft) {
    this.sqft = sqft;
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage'
        );
      }
    }
  }

  /**
   * @returns {number}
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * @param {number} value
   */
  set sqft(value) {
    if (value < 0) {
      throw new Error('Square footage must be non-negative.');
    }
    this._sqft = value;
  }

}