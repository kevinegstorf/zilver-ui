'use strict';

const core = require('./core-37dffc90.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["zui-number-input.cjs",[[1,"zui-number-input",{"placeholder":[1]},[[0,"keydown","handleKeyDown"]]]]]], options);
});
