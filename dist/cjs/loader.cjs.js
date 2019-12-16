'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-743ed220.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.globals();
    core.bootstrapLazy([["zui-number-input.cjs",[[1,"zui-number-input",{"placeholder":[1],"minimalNumber":[2,"minimal-number"],"value":[1025],"numValue":[32]},[[0,"keydown","handleKeyDown"]]]]],["zui-text-input.cjs",[[0,"zui-text-input",{"placeholder":[1],"value":[1],"textValue":[32]},[[0,"keydown","handleKeyDown"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
