import { List, Item, Content, Button } from "./styled";

const TaskList = ({ tasks, hideDone, removeTask, toggleDone }) => (
    <List>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.done && hideDone}
            >
                <Button
                    toggleDone
                    onClick={() => toggleDone(task.id)}
                >
                    {task.done ? "✓" : ""}
                </Button>

                <Content
                    done={task.done}
                >
                    {task.content}
                </Content>
                <Button
                    remove
                    onClick={() => removeTask(task.id)}
                >
                </Button>
            </Item>
        ))}
    </List>
);

export default TaskList;