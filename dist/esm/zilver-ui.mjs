import { p as patchBrowser, b as bootstrapLazy } from './core-c8080779.js';

patchBrowser().then(options => {
  return bootstrapLazy([["zui-number-input",[[1,"zui-number-input",{"placeholder":[1]},[[0,"keydown","handleKeyDown"]]]]]], options);
});
