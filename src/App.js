import { useState } from 'react';
import Test from './Test';
import TodoForm from './todo/TodoForm';
import TodoList from './todo/TodoList';
import useTodoStore from './store/Todo';

function App() {
  const onEdit = useTodoStore((state) => state.updateEdit)
  const {edit} = useTodoStore()

  console.log(edit)
  return (
    <div className="App">
	  <TodoForm edit={edit}/>
    <TodoList edit={edit} onEdit={onEdit}/>
    </div>
  );
}

export default App;
