import { Component, Prop, h, Listen, State } from "@stencil/core";

@Component({
  tag: "zui-number-input",
  styleUrl: "zui-number-input.css",
  shadow: true
})
export class NumberInput {
  numInput: any;

  /**
   * numValue is used to control the input value
   */
  @State() numValue: string;

  /**
   * placeholder text to set the placeholder attribute
   */
  @Prop() placeholder: string;

  /**
   * minimalNumber is the minimal value it takes
   * the default value is set to 0 so it will not accept negative numbers
   */
  @Prop() minimalNumber = 0;

  /**
   * value prop that can set the value attribute
   */
  @Prop() value: string;

  /**
   * handleKeydown makes sure it only accepts numbers
   */
  @Listen("keydown", { capture: true })
  handleKeyDown(ev: KeyboardEvent) {
    const isNum = /^[a-zA-Z0-9._\b]+$/.test(String.fromCharCode(ev.keyCode));
    if (ev.key === "ArrowUp" || ev.key === "ArrowDown") {
      this.numValue = this.numInput.value;
      return;
    } else if (!isNum) {
      ev.preventDefault();
      return false;
    }
    return undefined;
  }

  render() {
    return (
      <input
        pattern="\d*"
        type="number"
        min={this.minimalNumber}
        placeholder={this.placeholder}
        // ref={el => (this.numInput = el)}
        ref={el => console.log(el)}
        value={this.numValue || this.value}
      />
    );
  }
}
