export interface IActionCounter {
    type: string;
    count: number;
}

export enum COUNTER_ACTIONS {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
    INCREMENT_ASYNC = 'INCREMENT_ASYNC',
    ADD_AMOUNT = 'ADD_AMOUNT',
    ADD_AMOUNT_ASYNC = 'ADD_AMOUNT_ASYNC'
}
