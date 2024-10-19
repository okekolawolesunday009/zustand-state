import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

const todoStore = (set, get) => ({
  tasks: [
    {
        id: '1',
        name: 'Default Task',
        desc: 'This is your first default task',
        deadline: '2024-12-01',
        completed: false,
    }
],
  noCompleted: 0,
  totalTasks: 1,
  edit: false,

  updateEdit: () => {
    set((state) => ({
      edit: !state.edit
    }))
  },

  // Add a task to the list and increment the total tasks
  addTask: (task) => {
    set((state) => ({
      tasks: [...state.tasks, task], // No need to wrap task in an extra object
      totalTasks: state.totalTasks + 1,
    }));
  },
  updateTask: (taskId, updatedTaskData) => {
    set((state) => ({
      tasks: state.tasks.map((task) => 
        taskId  === task.id ? {...task, ...updatedTaskData} : task
    )}))
  },
  // Mark a task as completed
  isCompleted: (id) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed} : task
      ),
      noCompleted: state.noCompleted + 1, // Increment the number of completed tasks
    }));
  },

  // Delete a task by ID
  isDeleteTask: (id) => {
    set((state) => {
      const filteredTasks = state.tasks.filter((task) => task.id !== id);
      const count = state.totalTasks - 1
      return {
        tasks: filteredTasks,
        totalTasks: count <= 0 ? 0 : state.totalTasks, // Decrease the total tasks count
      };
    });
  },

  // Reset the store to its initial state
  reset: () => {
    set({
      tasks: [],
      noCompleted: 0,
      totalTasks: 0,
    });
  },
});

const useTodoStore = create(
  persist(todoStore, {
    name:"tasks",
    storage: createJSONStorage(() => sessionStorage),
  }));
export default useTodoStore;
