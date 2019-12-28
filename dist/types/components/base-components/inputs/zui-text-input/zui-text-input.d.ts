export declare class TextInput {
    textInput: HTMLInputElement;
    /**
     * numValue is used to control the input value
     */
    textValue: string;
    /**
     * placeholder text to set the placeholder attribute
     */
    placeholder: string;
    handleKeyDown(): void;
    render(): any;
}
