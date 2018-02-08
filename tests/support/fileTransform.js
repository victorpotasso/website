const path = require('path');

module.exports = {
  process(src, filename, config, options) {
    return "module.exports = '" + path.basename(filename) + "';";
  },
  getCacheKey(fileData, filename, configString, options) {
    return filename;
  },
};
