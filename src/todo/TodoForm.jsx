import React, { useState } from 'react'
import Input from '../Input'
import '../styles/todoForm.css'
import useTodoStore from '../store/Todo'

function TodoForm({edit}) {
  const [form, setForm] = useState({
    id: '',
    name: '',
    desc: '',
    deadline: ''
  });

  const { id, name, desc, deadline } = form;
  const addTask = useTodoStore((state) => state.addTask);
  const updateTask = useTodoStore((state) => state.updateTask)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const submit = (e) => {
    e.preventDefault(); // Prevent form submission's default behavior

    // Simple form validation before adding the task
    if (id !== '' && name !== '' && desc !== '' && deadline !== '') {
        if (edit === true) {
            updateTask(id, form)

        } else {
            addTask(form);  // Add task if form is valid    
        }
    }
    setForm({
        id: '',
        name: '',
        desc: '',
        deadline: ''
        });
  };

  return (
    <div className='container'>
      <form onSubmit={submit} className='form-container'>
        <h1>My Todo Task</h1>
        <Input
          label='Task ID'
          type='text'
          name='id'
          value={id}
          size='30'
          handleOnChange={handleChange}
        />
        <Input
          label='Task Name'
          type='text'
          id='name'
          name='name'
          value={name}
          size='20'
          handleOnChange={handleChange}
        />
        <Input
          label='Task Description'
          type='text'
          id='desc'
          name='desc'
          value={desc}
          size='20'
          handleOnChange={handleChange}
        />
        <Input
          label='Deadline'
          type='date'
          id='deadline'
          name='deadline'
          value={deadline}
          size='20'
          handleOnChange={handleChange}
        />
        <input type="submit" value ={edit === true ? "Update Task" : "Add Task"}/>
      </form>
    </div>
  );
}

export default TodoForm;
