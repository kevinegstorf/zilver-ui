'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-37dffc90.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["zui-number-input.cjs",[[1,"zui-number-input",{"placeholder":[1]},[[0,"keydown","handleKeyDown"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
