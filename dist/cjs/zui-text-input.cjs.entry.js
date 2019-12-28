'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-569d62bd.js');

const TextInput = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    handleKeyDown() {
        this.textValue = this.textInput.value;
    }
    render() {
        return (core.h("input", { type: "text", placeholder: this.placeholder,
            // ref={el => (this.textInput = el)}
            ref: el => console.log(el), value: this.textValue }));
    }
    static get style() { return ""; }
};

exports.zui_text_input = TextInput;
