# pinkie-polyfill

[![npm][npm-version]][npm]
[![npm][npm-downloads]][npm]
[![npm][npm-license]][npm]

[![github][github-issues]][github]
[![travis][travis-build]][travis]
[![codecov][codecov-svg]][codecov]

ES2015 [Promise](promise) polyfill by [pinkie](pinkie) with globally assignment.

## Install

```
npm install pinkie-polyfill --save
```

## Basic Usage

```js
import 'pinkie-polyfill';

new Promise((resolve, reject) => {
  // ...
});
```

[npm]: https://www.npmjs.com/package/pinkie-polyfill
[npm-version]: https://img.shields.io/npm/v/pinkie-polyfill.svg
[npm-size]: https://img.shields.io/bundlephobia/minzip/pinkie-polyfill.svg
[npm-downloads]: https://img.shields.io/npm/dt/pinkie-polyfill.svg
[npm-license]: https://img.shields.io/npm/l/pinkie-polyfill.svg

[github]: https://github.com/Cweili/pinkie-polyfill
[github-issues]: https://img.shields.io/github/issues/Cweili/pinkie-polyfill.svg

[travis]: https://travis-ci.org/Cweili/pinkie-polyfill
[travis-build]: https://img.shields.io/travis/Cweili/pinkie-polyfill.svg

[codecov]: https://codecov.io/gh/Cweili/pinkie-polyfill
[codecov-svg]: https://img.shields.io/codecov/c/github/Cweili/pinkie-polyfill.svg

[promise]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
[pinkie]: https://github.com/floatdrop/pinkie
