import Currency from './Currency';
/**
 * This class represents a pricing object
 */
export default class Pricing{
  constructor(amount, currency) {
    this.currency = currency;
    this.amount = amount;
  }
  
  /**
   * This method returns the amount of the pricing object
   */
  get amount() {
    return this._amount;
  }

  /**
   * This method sets the amount of the pricing object
   */
  set amount(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = amount;
  }

  /**
   * This method returns the currency of the pricing object
   */
  get currency() {
    return this._currency;
  }

  /**
   * This method sets the currency of the pricing object
   */
  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }
    this._currency = currency;
  }

  /**
   * This method returns the full price of the pricing object
   */
  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  /**
   * This method converts the price of the pricing object
   */
  static convertPrice(amount, conversionRate) {
    if ((typeof amount !== 'number') && (typeof conversionRate !== 'number')) {
      throw new TypeError('amount and conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
