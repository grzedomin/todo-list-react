import { useState } from 'react';
import { Input, Button, FormContent } from "./styled";

const Form = ({ addNewTask }) => {

    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskContent.trim() === "") {
            return;
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <FormContent
            onSubmit={onFormSubmit}
        >
            <Input
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                placeholder="Co jest do zrobienia?"
                autoFocus
            />
            <Button>Dodaj zadanie</Button>
        </FormContent>
    );
}
export default Form;