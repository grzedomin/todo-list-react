import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import React, { useState } from 'react';
import { useTasks } from "../../useTasks";



function Tasks() {

    const {
        tasks,
        removeTask,
        toggleDone,
        setAllDone,
        addNewTask,
    } = useTasks();

    const [hideDone, setHideDone] = useState(false);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    return (
        <Container>
            <Header title="Lista zadań" />
            <Section
                title="Dodaj nowe zadanie"
                body={
                    <Form
                        addNewTask={addNewTask}
                    />}
            />

            <Section title="Lista zadań"
                body={
                    <TaskList
                        tasks={tasks}
                        hideDone={hideDone}
                        removeTask={removeTask}
                        toggleDone={toggleDone}
                    />}

                extraHeaderContent={
                    <Buttons
                        tasks={tasks}
                        hideDone={hideDone}
                        toggleHideDone={toggleHideDone}
                        setAllDone={setAllDone}
                    />}
            />
        </Container>
    );
}

export default Tasks;