# pinkie-polyfill

[![npm][npm-version]][npm]
[![npm][npm-size]][npm]
[![npm][npm-downloads]][npm]
[![npm][npm-license]][npm]

[![github][github-issues]][github]
[![build][badge-build]][workflows]
[![coverage][badge-coverage]][coveralls]

ES2015 [Promise](promise) polyfill by [pinkie](pinkie) with globally assignment.

## Install

### NPM

```
npm install pinkie-polyfill --save
```

ES modules for Webpack 2+ or Rollup

```js
import 'pinkie-polyfill';
```

CommonJS for Webpack 1 or Browserify

```js
require('pinkie-polyfill');
```

### Browser

Direct `<script>` include

```html
<script src="https://cdn.jsdelivr.net/npm/pinkie-polyfill"></script>
```

## Basic Usage

A Promise is an object representing the eventual completion or failure of an asynchronous operation. See [full documents](promise).

[npm]: https://www.npmjs.com/package/pinkie-polyfill
[npm-version]: https://img.shields.io/npm/v/pinkie-polyfill.svg
[npm-size]: https://img.shields.io/bundlephobia/minzip/pinkie-polyfill.svg
[npm-downloads]: https://img.shields.io/npm/dt/pinkie-polyfill.svg
[npm-license]: https://img.shields.io/npm/l/pinkie-polyfill.svg

[github]: https://github.com/Cweili/pinkie-polyfill
[github-issues]: https://img.shields.io/github/issues/Cweili/pinkie-polyfill.svg

[badge-build]: https://img.shields.io/github/actions/workflow/status/Cweili/pinkie-polyfill/ci.yml?branch=master
[workflows]: https://github.com/Cweili/pinkie-polyfill/actions/workflows/ci.yml?query=branch%3Amaster

[badge-coverage]: https://img.shields.io/coveralls/github/Cweili/pinkie-polyfill/master.svg
[coveralls]: https://coveralls.io/github/Cweili/pinkie-polyfill?branch=master

[promise]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
[pinkie]: https://github.com/floatdrop/pinkie
