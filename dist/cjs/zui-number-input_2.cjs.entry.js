'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-5ea93307.js');

const NumberInput = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /**
         * minimalNumber is the minimal value it takes
         * the default value is set to 0 so it will not accept negative numbers
         */
        this.minimalNumber = 0;
    }
    /**
     * handleKeydown makes sure it only accepts numbers
     */
    handleKeyDown(ev) {
        const isNum = /^[a-zA-Z0-9._\b]+$/.test(String.fromCharCode(ev.keyCode));
        if (ev.key === "ArrowUp" || ev.key === "ArrowDown") {
            this.numValue = this.numInput.value;
            return;
        }
        else if (!isNum) {
            ev.preventDefault();
            return false;
        }
        return undefined;
    }
    render() {
        return (core.h("input", { pattern: "\\d*", type: "number", min: this.minimalNumber, placeholder: this.placeholder, ref: el => (this.numInput = el.shadowRoot), value: this.numValue || this.value }));
    }
    static get style() { return "input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}"; }
};

const TextInput = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    handleKeyDown() {
        this.textValue = this.textInput.value;
    }
    render() {
        return (core.h("input", { type: "text", placeholder: this.placeholder, ref: el => (this.textInput = el), value: this.textValue || this.value }));
    }
    static get style() { return ""; }
};

exports.zui_number_input = NumberInput;
exports.zui_text_input = TextInput;
