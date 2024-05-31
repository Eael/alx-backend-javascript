import Currency from './Currency';
/**
 * This class represents a pricing object
 */
export default class Pricing extends Currency{
  constructor(amount, currency) {
    super(currency);
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
    this._currency = currency;
  }


  displayFullPrice() {
    return `${this.amount} ${super.currency.name} ${super.currency.code}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

}