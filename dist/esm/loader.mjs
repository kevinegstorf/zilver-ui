import { a as patchEsm, b as bootstrapLazy } from './core-930aed62.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["zui-number-input_2",[[1,"zui-number-input",{"placeholder":[1],"minimalNumber":[2,"minimal-number"],"value":[1],"numValue":[32]},[[2,"keydown","handleKeyDown"]]],[0,"zui-text-input",{"placeholder":[1],"value":[1],"textValue":[32]},[[0,"keydown","handleKeyDown"]]]]]], options);
  });
};

export { defineCustomElements };
