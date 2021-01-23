import { COUNTER_ACTIONS, IActionCounter} from '../../ducks/counter/types';

interface ICounterState {
    value: number
}

const initialState: ICounterState = {
    value: 3
}

const counterReducer = (
    state = initialState, 
    action: IActionCounter
) => {
    switch (action.type) {
        case COUNTER_ACTIONS.INCREMENT:
            return {
                ...state,
                value: state.value + 1
            };
        case COUNTER_ACTIONS.DECREMENT:
            return {
                ...state,
                value: state.value - 1
            };
        case COUNTER_ACTIONS.ADD_AMOUNT: {
            return {
                ...state,
                value: state.value + action.count
            }
        }
        default:
            return state;
    }
};

export default counterReducer;