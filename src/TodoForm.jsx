import React, { useState } from 'react'
import Input from './Input'
import './styles/todoForm.css'
import useTodoStore from './Todo'

function TodoForm() {

    const [form, setForm] = useState({
        id: '',
        name: '',
        desc:'',
        deadline:''
    })
    const addTask = useTodoStore((state) => state.addTask)
    const task = useTodoStore((state) => state.tasks)

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm((prev) => ({
            ...prev,
            [name]: value
        }))

    }
    const submit = (e) => {
        console.log(form, task)
        
        addTask(form)
        e.preventDefault()
    }

  return (
    <div className='container'>
    
       <form action="" onSubmit={submit} className='form-container'>
       <h1> My todo task</h1>
        <Input 
            label = 'Task ID'
            type ='text'
            name = 'id'
            value ={form.id}
            size = '30'
            handleOnChange={handleChange}
        />
        <Input 
            label = 'Task Name'
            type ='text'
            id = 'name'
            name = 'name'
            value = {form.name}
            size = '20'
            handleOnChange={handleChange}
        />
        <Input 
            label = 'Task Description'
            type ='text'
            id = 'desc'
            name = 'desc'
            value = {form.desc}
            size = '20'
            handleOnChange={handleChange}
        />
        <Input 
            label = 'Deadline'
            type ='date'
            id = 'deadline'
            name = 'deadline'
            value = {form.deadline}
            size = '20'
            handleOnChange={handleChange}
        />

        <button type="submit">Add Task </button>

       </form>
     
    </div>
  )
}

export default TodoForm