var root = global || window || this;

if (!root.Promise) {
  root.Promise = require('pinkie');
}

module.exports = root.Promise;
