import "./style.css";

const Tasks = ({ tasks, hideDone, taskRemove, toggleDone }) => (
    <ul className="tasks">
        {tasks.map(task => (
            <li key={task.id} className={`main__listItem${task.done && hideDone ? " main__listItem--hidden" : ""}`}>
                <button onClick={() => toggleDone(task.id)} className="main__taskDoneButton">{task.done ? "✓" : ""}</button>
                <span className={`main__taskListContent${task.done ? " main__listItem--done" : ""}`}>{task.content}</span>
                <button onClick={() => taskRemove(task.id)} className="main__taskRemoveButton"></button>
            </li>
        ))}
    </ul>
);

export default Tasks;