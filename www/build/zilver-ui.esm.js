import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-16483a35.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["zui-input",[[1,"zui-input",{"placeholder":[1]}]]]], options);
});
