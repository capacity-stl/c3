export declare const keyboardEventMapper: (events: {
    [key: string]: (e: React.KeyboardEvent) => void;
}, options?: {
    preventDefault?: boolean;
    stopPropagation?: boolean;
}) => (e: React.KeyboardEvent) => void;
export declare const scopeKeyboardEventToElement: (e: React.KeyboardEvent, element: HTMLElement, callback?: (e: React.KeyboardEvent) => void) => void;
