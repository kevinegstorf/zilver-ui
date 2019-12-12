import { p as patchBrowser, b as bootstrapLazy } from './core-930aed62.js';

patchBrowser().then(options => {
  return bootstrapLazy([["zui-number-input",[[1,"zui-number-input",{"placeholder":[1],"minimalNumber":[2,"minimal-number"],"value":[1],"numValue":[32]},[[0,"keydown","handleKeyDown"]]]]]], options);
});
