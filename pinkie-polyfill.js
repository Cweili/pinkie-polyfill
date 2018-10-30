var root = typeof global != 'undefined' ? global : typeof window != 'undefined' ? window : this;

if (!root.Promise) {
  root.Promise = require('pinkie');
}

module.exports = root.Promise;
