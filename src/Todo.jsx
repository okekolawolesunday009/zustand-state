import { create } from "zustand";

const todoStore = (set, get) => ({
  tasks: [],
  noCompleted: 0,
  totalTasks: 0,

  // Add a task to the list and increment the total tasks
  addTask: (task) => {
    set((state) => ({
      tasks: [...state.tasks, task], // No need to wrap task in an extra object
      totalTasks: state.totalTasks + 1,
    }));
  },

  // Mark a task as completed
  isCompleted: (id) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      ),
      noCompleted: state.noCompleted + 1, // Increment the number of completed tasks
    }));
  },

  // Delete a task by ID
  isDeleteTask: (id) => {
    set((state) => {
      const filteredTasks = state.tasks.filter((task) => task.id !== id);
      return {
        tasks: filteredTasks,
        totalTasks: state.totalTasks - 1, // Decrease the total tasks count
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

const useTodoStore = create(todoStore);
export default useTodoStore;
