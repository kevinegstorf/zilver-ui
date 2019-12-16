'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-743ed220.js');

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
        return (core.h("input", { pattern: "\\d*", type: "number", min: this.minimalNumber, placeholder: this.placeholder, ref: el => (this.numInput = el), value: this.numValue || this.value }));
    }
    static get style() { return "input[type=\"number\"]::-webkit-outer-spin-button,\ninput[type=\"number\"]::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\ninput[type=\"number\"] {\n  -moz-appearance: textfield;\n}"; }
};

exports.zui_number_input = NumberInput;
