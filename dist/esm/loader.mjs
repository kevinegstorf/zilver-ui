import { a as patchEsm, g as globals, b as bootstrapLazy } from './core-0761f511.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    globals();
    bootstrapLazy([["zui-number-input",[[1,"zui-number-input",{"placeholder":[1],"minimalNumber":[2,"minimal-number"],"value":[1],"numValue":[32]},[[0,"keydown","handleKeyDown"]]]]]], options);
  });
};

export { defineCustomElements };
