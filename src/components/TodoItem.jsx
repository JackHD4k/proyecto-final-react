/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodoItem = ({ todo }) => {
  const { deleteTodo, toggleTodo } = useContext(TodoContext);

  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={() => toggleTodo(todo.id)}>Completado</button>
      <button onClick={() => deleteTodo(todo.id)}>Eliminar</button>
    </li>
  );
};

export default TodoItem;