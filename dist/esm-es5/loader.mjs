import { a as patchEsm, b as bootstrapLazy } from './core-5f0ed200.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["zui-number-input", [[1, "zui-number-input", { "placeholder": [1], "minimalNumber": [2, "minimal-number"] }, [[0, "keydown", "handleKeyDown"]]]]]], options);
    });
};
export { defineCustomElements };
