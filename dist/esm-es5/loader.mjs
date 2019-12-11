import { a as patchEsm, b as bootstrapLazy } from './core-c8080779.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["zui-number-input", [[1, "zui-number-input", { "placeholder": [1] }, [[0, "keydown", "handleKeyDown"]]]]]], options);
    });
};
export { defineCustomElements };
