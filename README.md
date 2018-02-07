# pinkie-polyfill

[![npm][npm-version]](npm)
[![npm][npm-downloads]](npm)
[![npm][npm-license]](npm)
[![github][github-issues]](github)

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
[npm-downloads]: https://img.shields.io/npm/dt/pinkie-polyfill.svg
[npm-license]: https://img.shields.io/npm/l/pinkie-polyfill.svg

[github]: https://github.com/Cweili/pinkie-polyfill
[github-issues]: https://img.shields.io/github/issues/Cweili/pinkie-polyfill.svg

[promise]: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise
[pinkie]: https://github.com/floatdrop/pinkie
