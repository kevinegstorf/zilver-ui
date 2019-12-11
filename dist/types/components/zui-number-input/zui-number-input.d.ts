export declare class NumberInput {
    /**
     * placeholder text
     */
    placeholder: string;
    /**
     * minimalNumber is the minimal value it takes
     * the default value is set to 0 so it will not accept negative numbers
     */
    minimalNumber: number;
    handleKeyDown(ev: KeyboardEvent): boolean;
    render(): any;
}
