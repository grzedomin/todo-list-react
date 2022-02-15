import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import React, { useState } from 'react';




function App() {
    const [tasks, setTasks] = useState([
        { id: 1, content: "przejść na react.js", done: false },
        { id: 2, content: "zjeść obiad", done: false },
        { id: 3, content: "zjeść kolacje", done: false },
    ]);

    const [hideDone, setHideDone] = useState(false);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };

    const taskRemove = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    done: !task.done,
                }
            } return task;
        }))
    };

    return (
        <Container>
            <Header title="Lista zadań" />

            <main className="main">
                <Section
                    title="Dodaj nowe zadanie"
                    body={<Form />}
                />

                <Section title="Lista zadań"
                    body={
                        <Tasks
                            tasks={tasks}
                            hideDone={hideDone}
                            taskRemove={taskRemove}
                            toggleDone={toggleDone}
                        />}

                    extraHeaderContent={
                        <Buttons
                            tasks={tasks}
                            hideDone={hideDone}
                            toggleHideDone={toggleHideDone}
                        />}
                />
            </main>
        </Container>
    );
}

export default App;
