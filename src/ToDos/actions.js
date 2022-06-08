import { ADD_TODO, SET_INPUT, REMOVE_TODO } from './constants.js';

export const setInput = (data) => ({
  type: SET_INPUT,
  data,
});

export const addTodo = (data) => ({
  type: ADD_TODO,
  data,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});
