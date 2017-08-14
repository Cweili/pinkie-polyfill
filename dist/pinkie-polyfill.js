'use strict';

exports.__esModule = true;

var _pinkie = require('pinkie');

var _pinkie2 = _interopRequireDefault(_pinkie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var root = window || global || undefined;

if (!root.Promise) {
  root.Promise = _pinkie2.default;
}

exports.default = root.Promise;