export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
    this.displayFullCurrency = this.displayFullCurrency.bind(this);
  }

  get Code() {
    return this._code;
  }

  set Code(value) {
    this._code = value;
  }

  get Name() {
    return this._name;
  }

  set Name(value) {
    this._name = value;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
