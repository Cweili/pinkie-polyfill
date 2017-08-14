var root = window || global || this;

if (!root.Promise) {
  root.Promise = require('pinkie');
}

module.exports = root.Promise;
