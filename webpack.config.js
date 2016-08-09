const _ = require('lodash');
const common = require('./webpack/common.config');
const prod = require('./webpack/production.config');

let config = '';
if (process.env.NODE_ENV === 'production') config = prod;

module.exports = _.mergeWith(common, config, customizer);

function customizer(objValue, srcValue, key) {
  if (_.isArray(objValue)) {
    if (key === 'loaders') return srcValue.concat(objValue);
    return objValue.concat(srcValue);
  }
}
