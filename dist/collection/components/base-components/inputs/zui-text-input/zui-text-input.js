import { h } from "@stencil/core";
export class TextInput {
    handleKeyDown() {
        console.log(this.textValue);
        this.textValue = this.textInput.value;
    }
    render() {
        return (h("input", { type: "text", placeholder: this.placeholder, ref: el => (this.textInput = el), value: this.textValue || this.value }));
    }
    static get is() { return "zui-text-input"; }
    static get originalStyleUrls() { return {
        "$": ["zui-text-input.css"]
    }; }
    static get styleUrls() { return {
        "$": ["zui-text-input.css"]
    }; }
    static get properties() { return {
        "placeholder": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "placeholder text to set the placeholder attribute"
            },
            "attribute": "placeholder",
            "reflect": false
        },
        "value": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "value prop that can set the value attribute"
            },
            "attribute": "value",
            "reflect": false
        }
    }; }
    static get states() { return {
        "textValue": {}
    }; }
    static get listeners() { return [{
            "name": "keydown",
            "method": "handleKeyDown",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
