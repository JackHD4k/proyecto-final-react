import { createContext, useState } from 'react';

export const TodoContext = createContext();

// eslint-disable-next-line react/prop-types
export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: Date.now(), text: todo, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};