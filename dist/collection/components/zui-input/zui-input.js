import { h } from "@stencil/core";
export class Input {
    render() {
        return h("input", { type: "number", placeholder: this.placeholder });
    }
    static get is() { return "zui-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["zui-input.css"]
    }; }
    static get styleUrls() { return {
        "$": ["zui-input.css"]
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
                "text": "placeholder text"
            },
            "attribute": "placeholder",
            "reflect": false
        }
    }; }
}
