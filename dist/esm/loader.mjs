import { a as patchEsm, g as globals, b as bootstrapLazy } from './core-e1dd9043.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    globals();
    bootstrapLazy([["zui-number-input",[[1,"zui-number-input",{"placeholder":[1],"minimalNumber":[2,"minimal-number"],"value":[1025],"numValue":[32]},[[0,"keydown","handleKeyDown"]]]]],["zui-text-input",[[0,"zui-text-input",{"placeholder":[1],"value":[1],"textValue":[32]},[[0,"keydown","handleKeyDown"]]]]]], options);
  });
};

export { defineCustomElements };
