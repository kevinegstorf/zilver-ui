'use strict';

const core = require('./core-16721893.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["zui-number-input.cjs",[[1,"zui-number-input",{"placeholder":[1],"minimalNumber":[2,"minimal-number"]},[[0,"keydown","handleKeyDown"]]]]]], options);
});
