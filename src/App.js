import { useReducer } from 'react';
import { addTodo, removeTodo, setInput } from './ToDos/actions.js';
import reducer, { initValue } from './ToDos/reducer.js';

function App() {
  const [state, dispatch] = useReducer(reducer, initValue);
  const { inputValue, todos } = state;
  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => dispatch(setInput(e.target.value))}
      />
      <button onClick={() => dispatch(addTodo(inputValue))}>Add</button>
      <ol>
        {todos.map((todo, index) => (
          <div key={index}>
            <li>{todo}</li>
            <button onClick={() => dispatch(removeTodo(index))}>Delete</button>
          </div>
        ))}
      </ol>
    </div>
  );
}
export default App;
