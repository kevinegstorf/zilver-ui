'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-743ed220.js');

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

exports.zui_text_input = TextInput;
