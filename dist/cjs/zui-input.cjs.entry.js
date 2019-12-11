'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-696fc6d4.js');

const Input = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    render() {
        return core.h("input", { type: "number", placeholder: this.placeholder });
    }
    static get style() { return ""; }
};

exports.zui_input = Input;
