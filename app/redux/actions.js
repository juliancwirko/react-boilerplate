/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';
export const COUNTER_TICK = 'COUNTER_TICK';

/*
 * action creators
 */

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

export function counterTick() {
  return {
    type: COUNTER_TICK,
  };
}
