'use strict';

const core = require('./core-696fc6d4.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["zui-input.cjs",[[1,"zui-input",{"placeholder":[1]}]]]], options);
});
