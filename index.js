var _ = require('lodash');
var loaderUtils = require("loader-utils");

module.exports = function (source) {
  this.cacheable && this.cacheable();
  var options = loaderUtils.parseQuery(this.query);
  if (options.removeNewlines == true) {
    source = source.replace(/<!--.*-->/g, '').replace(/\s{2,}/gm, ' ').replace(/\n/g, '');
  }
  var template = _.template(source, options);
  return 'module.exports = ' + template;
};
