'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-37dffc90.js');

const NumberInput = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    handleKeyDown(ev) {
        const isNum = /^[a-zA-Z0-9._\b]+$/.test(String.fromCharCode(ev.keyCode));
        if (ev.key === "ArrowUp" || ev.key === "ArrowDown") {
            return;
        }
        else if (!isNum) {
            ev.preventDefault();
            return false;
        }
        return undefined;
    }
    render() {
        return (core.h("input", { pattern: "\\d*", type: "number", placeholder: this.placeholder, value: "" }));
    }
    static get style() { return "input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}"; }
};

exports.zui_number_input = NumberInput;
