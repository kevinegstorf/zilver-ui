import{r as t,h as e}from"./p-34a69404.js";const r=class{constructor(e){t(this,e),this.minimalNumber=0}handleKeyDown(t){const e=/^[a-zA-Z0-9._\b]+$/.test(String.fromCharCode(t.keyCode));if("ArrowUp"!==t.key&&"ArrowDown"!==t.key)return e?void 0:(t.preventDefault(),!1);this.numValue=this.numInput.value}render(){return e("input",{pattern:"\\d*",type:"number",min:this.minimalNumber,placeholder:this.placeholder,ref:t=>this.numInput=t,value:this.numValue||this.value})}static get style(){return"input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}"}},i=class{constructor(e){t(this,e)}handleKeyDown(){this.textValue=this.textInput.value}render(){return e("input",{type:"text",placeholder:this.placeholder,ref:t=>this.textInput=t,value:this.textValue||this.value})}static get style(){return""}};export{r as zui_number_input,i as zui_text_input};