import { useState, useRef } from 'react';
import { Button, StyledForm } from "./styled";
import { useDispatch } from 'react-redux';
import { addTask } from "../../tasksSlice";
import { nanoid } from '@reduxjs/toolkit';
import { Input } from '../Input';

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskContent.trim() === "") {
            return;
        }
        dispatch(addTask({
            content: newTaskContent.trim(),
            done: false,
            id: nanoid(),
        }));
        setNewTaskContent("");
        focusInput();
    };

    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit} >
            <Input
                ref={inputRef}
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)}
                placeholder="Co jest do zrobienia?"
                autoFocus
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    );
};
export default Form;