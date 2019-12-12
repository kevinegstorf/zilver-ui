'use strict';

const core = require('./core-99fa7669.js');

core.patchBrowser().then(options => {
  core.globals();
  return core.bootstrapLazy([["zui-number-input.cjs",[[1,"zui-number-input",{"placeholder":[1],"minimalNumber":[2,"minimal-number"],"value":[1],"numValue":[32]},[[0,"keydown","handleKeyDown"]]]]]], options);
});
