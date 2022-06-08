const reducer = (state, action) => {
  let todos;
  switch (action.type) {
    case 'set_input':
      return { ...state, inputValue: action.data };
    case 'add_todo':
      todos = [...state.todos, action.data];
      localStorage.setItem('todos', JSON.stringify(todos));
      return { inputValue: '', todos };
    case 'remove_todo':
      todos = state.todos.filter((todo, index) => index !== action.id);
      localStorage.setItem('todos', JSON.stringify(todos));
      return {
        ...state,
        todos,
      };
    default:
      throw new Error('Invalid action');
  }
};
export default reducer;

export const initValue = {
  inputValue: '',
  todos: JSON.parse(localStorage.getItem('todos')) ?? [],
};
