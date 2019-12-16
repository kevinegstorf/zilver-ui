'use strict';

const core = require('./core-743ed220.js');

core.patchBrowser().then(options => {
  core.globals();
  return core.bootstrapLazy([["zui-number-input.cjs",[[1,"zui-number-input",{"placeholder":[1],"minimalNumber":[2,"minimal-number"],"value":[1025],"numValue":[32]},[[0,"keydown","handleKeyDown"]]]]],["zui-text-input.cjs",[[0,"zui-text-input",{"placeholder":[1],"value":[1],"textValue":[32]},[[0,"keydown","handleKeyDown"]]]]]], options);
});
