'use strict';

function exportsGetter() {
  return { prop: 'Hi' };
}

Object.defineProperty(module, 'exports', {
  enumerable: true,
  get: exportsGetter
});
