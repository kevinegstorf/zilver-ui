'use strict';

const core = require('./core-f9af18a5.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["zui-number-input_2.cjs",[[0,"zui-number-input",{"placeholder":[1],"minimalNumber":[2,"minimal-number"],"value":[1537],"numValue":[32]},[[0,"keydown","handleKeyDown"]]],[0,"zui-text-input",{"placeholder":[1],"textValue":[32]},[[0,"keydown","handleKeyDown"]]]]]], options);
});
