import { a as patchEsm, b as bootstrapLazy } from './core-97da44e6.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["zui-input",[[1,"zui-input",{"placeholder":[1]}]]]], options);
  });
};

export { defineCustomElements };
