# Pinkie Polyfill

ES2015 [Promise](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise) polyfill by [pinkie](https://github.com/floatdrop/pinkie) with globally assignment.

[![npm](https://nodei.co/npm/pinkie-polyfill.png?downloads=true&stars=true)](https://www.npmjs.com/package/pinkie-polyfill)

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
