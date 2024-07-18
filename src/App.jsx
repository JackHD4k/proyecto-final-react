import { TodoProvider } from './context/TodoContext.jsx';
import TodoList from './components/TodoList.jsx';
import AddTodo from './components/AddTodo.jsx';
import './App.css'

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <h1>Lista de Tareas</h1>
        <AddTodo />
        <TodoList />
      </div>
    </TodoProvider>
  )
}

export default App
