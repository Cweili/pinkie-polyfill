global.window = undefined;

var promisesAplusTests = require('promises-aplus-tests');
var Promise = require('../pinkie-polyfill');

var adapter = {
  deferred: function() {
    var defer;
    defer = {};
    defer.promise = new Promise(function(resolve, reject) {
      defer.resolve = resolve;
      return defer.reject = reject;
    });
    return defer;
  }
};

describe('Promise/A+ tests', function() {
  promisesAplusTests.mocha(adapter);
});
