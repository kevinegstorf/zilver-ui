import { r as registerInstance, h } from './core-b328fbee.js';

const TextInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    handleKeyDown() {
        console.log(this.textValue);
        this.textValue = this.textInput.value;
    }
    render() {
        return (h("input", { type: "text", placeholder: this.placeholder, ref: el => (this.textInput = el), value: this.textValue || this.value }));
    }
    static get style() { return ""; }
};

export { TextInput as zui_text_input };
