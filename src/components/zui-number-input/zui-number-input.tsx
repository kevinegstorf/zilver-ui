import { Component, Prop, h, Listen } from "@stencil/core";

@Component({
  tag: "zui-number-input",
  styleUrl: "zui-number-input.css",
  shadow: true
})
export class NumberInput {
  /**
   * placeholder text
   */
  @Prop() placeholder: string;

  @Listen("keydown")
  handleKeyDown(ev: KeyboardEvent) {
    const isNum = /^[a-zA-Z0-9._\b]+$/.test(String.fromCharCode(ev.keyCode));
    if (ev.key === "ArrowUp" || ev.key === "ArrowDown") {
      return;
    } else if (!isNum) {
      ev.preventDefault();
      return false;
    }
    return undefined;
  }

  render() {
    return <input pattern="\d*" type="number" placeholder={this.placeholder} />;
  }
}
