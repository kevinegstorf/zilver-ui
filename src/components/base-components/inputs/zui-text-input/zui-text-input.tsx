import { Component, Prop, h, State, Listen } from "@stencil/core";

@Component({
  tag: "zui-text-input",
  styleUrl: "zui-text-input.css"
  // shadow: true
})
export class TextInput {
  textInput: HTMLInputElement;

  /**
   * numValue is used to control the input value
   */
  @State() textValue: string;

  /**
   * placeholder text to set the placeholder attribute
   */
  @Prop() placeholder: string;

  /**
   * value prop that can set the value attribute
   */
  @Prop() value: string;

  @Listen("keydown")
  handleKeyDown() {
    this.textValue = this.textInput.value;
  }

  render() {
    return (
      <input
        type="text"
        placeholder={this.placeholder}
        ref={el => (this.textInput = el)}
        value={this.textValue || this.value}
      />
    );
  }
}
