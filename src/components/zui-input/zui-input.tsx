import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "zui-input",
  styleUrl: "zui-input.css",
  shadow: true
})
export class Input {
  /**
   * placeholder text
   */
  @Prop() placeholder: string;

  render() {
    return <input type="number" placeholder={this.placeholder}></input>;
  }
}
