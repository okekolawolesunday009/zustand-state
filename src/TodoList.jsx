import useTodoStore from "./Todo";
import './styles/todoList.css'

function TodoList() {
    const {tasks, totalTasks, isCompleted} = useTodoStore();

    return (
        <div className="todo-list-container">
       
            <h3>Task List</h3>
            {tasks.length > 0 && (
                <span className="tasks-count">
                    <h4>Total task: {totalTasks}</h4>
                    <h4>Total task completed: {isCompleted}</h4>

                </span>
            )}
            <ul className="todo-list">

            {tasks.map((task) => {
                return (
                        <li key={task.id} className="list-item">
                            <span className="list-item-task">
                                <span>{task.id}</span>
                                <span>{task.name}</span>
                                <span>{task.deadline}</span>


                            </span>

                        </li>

                )
            })}
        </ul>
        </div>
    )
}

export default TodoList;