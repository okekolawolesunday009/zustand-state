import useTodoStore from "../store/Todo";
import '../styles/todoList.css'

function TodoList({onEdit, edit}) {
    const {tasks, totalTasks, isCompleted, isDeleteTask, noCompleted} = useTodoStore();

    return (
        <div className="todo-list-container">
            <h3 className="title-header">Task List</h3>
            {!tasks.length ? <h4>No task Available</h4> : ''}
            {tasks.length > 0 && (
                <span className="tasks-count">
                    <h4>Total task: {totalTasks}</h4>
                    <h4>Total task completed: {noCompleted}</h4>

                </span>
            )}
            <ul className="todo-list">

            {tasks.map((task) => {
                return (
                        <li key={task.id} className="list-item">
                            <span className="list-item-task">
                                <span>{task.id}</span>
                                <span style={{textDecoration: task.completed ?
                                    "line-through" : ""
                                }}>{task.name}</span>
                                <span>{task.deadline}</span>


                            </span>

                            <div className="action">
                                <button onClick={() => onEdit()}> {!edit ? "Edit" : "Done"}</button>
                                <button className="delete" onClick={() => isDeleteTask(task.id)}>Delete</button>

                                {task && (
                                    <button className="completed" 
                                    onClick={() => isCompleted(task.id)}
                                    >{task.completed ? 'Undo' : 'Completed'}</button>

                                )}
                            </div>

                        </li>

                )
            })}
        </ul>
        </div>
    )
}

export default TodoList;