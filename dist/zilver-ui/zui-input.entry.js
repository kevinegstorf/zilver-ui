import { r as registerInstance, h } from './core-16483a35.js';

const Input = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return h("input", { type: "number", placeholder: this.placeholder });
    }
    static get style() { return ""; }
};

export { Input as zui_input };
