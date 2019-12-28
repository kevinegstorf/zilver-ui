'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-fc49939e.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["zui-number-input_2.cjs",[[1,"zui-number-input",{"placeholder":[1],"minimalNumber":[2,"minimal-number"],"value":[1],"numValue":[32]},[[2,"keydown","handleKeyDown"]]],[0,"zui-text-input",{"placeholder":[1],"value":[1],"textValue":[32]},[[0,"keydown","handleKeyDown"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
