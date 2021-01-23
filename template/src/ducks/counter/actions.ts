import { COUNTER_ACTIONS } from "./types";

export const addAmount = (count: number) => ({
  type: COUNTER_ACTIONS.ADD_AMOUNT,
  count,
});

export const increment = () => ({
  type: COUNTER_ACTIONS.INCREMENT,
});

export const decrement = () => ({
  type: COUNTER_ACTIONS.DECREMENT,
});

export const incrementAsync = () => ({
  type: COUNTER_ACTIONS.INCREMENT_ASYNC,
});

export const addAmoutAsync = (count: number) => ({
  type: COUNTER_ACTIONS.ADD_AMOUNT_ASYNC,
  count,
});
