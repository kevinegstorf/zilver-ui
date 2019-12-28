'use strict';

const core = require('./core-fc49939e.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["zui-number-input_2.cjs",[[1,"zui-number-input",{"placeholder":[1],"minimalNumber":[2,"minimal-number"],"value":[1025],"numValue":[32]},[[0,"keydown","handleKeyDown"]]],[0,"zui-text-input",{"placeholder":[1],"value":[1],"textValue":[32]},[[0,"keydown","handleKeyDown"]]]]]], options);
});
