import "./style.css";
import { useState } from 'react';



const Form = ({ addNewTask }) => {

    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <form className="section__form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                className="form__input"
                placeholder="Co jest do zrobienia?"
                autoFocus
            />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    );
}

export default Form;