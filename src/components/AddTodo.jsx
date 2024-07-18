import { useContext, useRef } from 'react';
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {
  const { addTodo } = useContext(TodoContext);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="Tarea" />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default AddTodo;