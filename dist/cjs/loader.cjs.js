'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-696fc6d4.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["zui-input.cjs",[[1,"zui-input",{"placeholder":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
