import { p as patchBrowser, b as bootstrapLazy } from './core-5f0ed200.js';
patchBrowser().then(function (options) {
    return bootstrapLazy([["zui-number-input", [[1, "zui-number-input", { "placeholder": [1], "minimalNumber": [2, "minimal-number"] }, [[0, "keydown", "handleKeyDown"]]]]]], options);
});
