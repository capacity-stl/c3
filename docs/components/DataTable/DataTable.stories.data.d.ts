export type SimpleExampleDataShape = {
    dexNumber: number;
    name: string;
    evolutionStage: number;
    previousStage: string;
    type1: string;
    type2: string;
    generation: number;
    region: string;
    originalConsole: string;
};
declare const simpleExample: SimpleExampleDataShape[];
export type QueueExampleDataShape = {
    [key: string]: any;
};
declare const queueExample: {
    ticketQueue: Array<QueueExampleDataShape>;
};
export { simpleExample, queueExample };
