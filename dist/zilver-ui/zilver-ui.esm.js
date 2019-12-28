import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-0cb17d9d.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["zui-number-input",[[1,"zui-number-input",{"placeholder":[1],"minimalNumber":[2,"minimal-number"],"value":[1],"numValue":[32]},[[2,"keydown","handleKeyDown"]]]]],["zui-text-input",[[0,"zui-text-input",{"placeholder":[1],"value":[1],"textValue":[32]},[[0,"keydown","handleKeyDown"]]]]]], options);
});
