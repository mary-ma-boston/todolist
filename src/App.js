import { useState } from 'react';
import AddTodo from './AddTodo.js';
import TaskList from './TaskList.js';

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Brew tea', done: false },
];

export default function App() {
  const [todos, setTodos] = useState(
    initialTodos
  );

  function handleAddTodo(title) {
    // todos.push({
    //   id: nextId++,
    //   title: title,
    //   done: false
    // });
    setTodos([...todos, {
      id: nextId++,
      title: title,
      done: false
    }])
  }

  function handleChangeTodo(nextTodo) {
    let newLists = todos.map((item)=>{
      if(item.id === nextTodo.id) {
        return nextTodo
      } else {
        return item
      }
    })
    setTodos(newLists);
   
  }

  function handleDeleteTodo(todoId) {

    let newLists = todos.filter((item)=>{
      return item.id !==todoId
    });
    setTodos(newLists);
    
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}


