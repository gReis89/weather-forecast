if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'debug') {
  module.exports = require('./weather-forecast.api')
} else {
  module.exports = require('./weather-forecast.mock.api')
}
