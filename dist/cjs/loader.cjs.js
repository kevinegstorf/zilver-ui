'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-99fa7669.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.globals();
    core.bootstrapLazy([["zui-number-input.cjs",[[1,"zui-number-input",{"placeholder":[1],"minimalNumber":[2,"minimal-number"],"value":[1],"numValue":[32]},[[0,"keydown","handleKeyDown"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
