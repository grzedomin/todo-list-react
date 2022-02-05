import "./style.css";


const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task => (
            <li key={task.id} className={`main__listItem${task.done && props.hideDoneTasks ? " main__listItem--hidden" : ""}`}>
                <button className="main__taskDoneButton">{task.done ? "✓" : ""}</button>
                   <span className={`main__taskListContent${task.done ? " main__listItem--done" : ""}`}>{task.content}</span>
                <button className="main__taskRemoveButton">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;