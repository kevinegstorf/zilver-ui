import { h } from "@stencil/core";
export class NumberInput {
    constructor() {
        /**
         * minimalNumber is the minimal value it takes
         * the default value is set to 0 so it will not accept negative numbers
         */
        this.minimalNumber = 0;
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
        return (h("input", { pattern: "\\d*", type: "number", min: this.minimalNumber, placeholder: this.placeholder }));
    }
    static get is() { return "zui-number-input"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["zui-number-input.css"]
    }; }
    static get styleUrls() { return {
        "$": ["zui-number-input.css"]
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
        },
        "minimalNumber": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "minimalNumber is the minimal value it takes\nthe default value is set to 0 so it will not accept negative numbers"
            },
            "attribute": "minimal-number",
            "reflect": false,
            "defaultValue": "0"
        }
    }; }
    static get listeners() { return [{
            "name": "keydown",
            "method": "handleKeyDown",
            "target": undefined,
            "capture": false,
            "passive": false
        }]; }
}
