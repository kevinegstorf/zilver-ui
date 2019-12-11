import { r as registerInstance, h } from './core-c8080779.js';
var NumberInput = /** @class */ (function () {
    function NumberInput(hostRef) {
        registerInstance(this, hostRef);
    }
    NumberInput.prototype.handleKeyDown = function (ev) {
        var isNum = /^[a-zA-Z0-9._\b]+$/.test(String.fromCharCode(ev.keyCode));
        if (ev.key === "ArrowUp" || ev.key === "ArrowDown") {
            return;
        }
        else if (!isNum) {
            ev.preventDefault();
            return false;
        }
        return undefined;
    };
    NumberInput.prototype.render = function () {
        return (h("input", { pattern: "\\d*", type: "number", placeholder: this.placeholder, value: "" }));
    };
    Object.defineProperty(NumberInput, "style", {
        get: function () { return "input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}"; },
        enumerable: true,
        configurable: true
    });
    return NumberInput;
}());
export { NumberInput as zui_number_input };
