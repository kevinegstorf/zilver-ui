export declare class NumberInput {
    numInput: any;
    /**
     * numValue is used to control the input value
     */
    numValue: string;
    /**
     * placeholder text to set the placeholder attribute
     */
    placeholder: string;
    /**
     * minimalNumber is the minimal value it takes
     * the default value is set to 0 so it will not accept negative numbers
     */
    minimalNumber: number;
    /**
     * value prop that can set the value attribute
     */
    value: string;
    /**
     * handleKeydown makes sure it only accepts numbers
     */
    handleKeyDown(ev: KeyboardEvent): boolean;
    render(): any;
}
