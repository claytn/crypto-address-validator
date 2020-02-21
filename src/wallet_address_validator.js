var currencies = require('./currencies')

var DEFAULT_CURRENCY_NAME = 'bitcoin'

module.exports = {
  validate: function (address, currencyNameOrSymbol, networkType, opts) {
    var currency = currencies.getByNameOrSymbol(currencyNameOrSymbol || DEFAULT_CURRENCY_NAME)

    if (currency && currency.validator) {
      return currency.validator.isValidAddress(address, currency, networkType, opts)
    }

    throw new Error('Missing validator for currency: ' + currencyNameOrSymbol)
  }
}
