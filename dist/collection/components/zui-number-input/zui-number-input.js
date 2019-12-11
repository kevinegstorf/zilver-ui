import { h } from "@stencil/core";
export class NumberInput {
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
        return (h("input", { pattern: "\\d*", type: "number", placeholder: this.placeholder, value: "" }));
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
