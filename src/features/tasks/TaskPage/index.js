import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import React from 'react';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";

function TasksPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header title="Szczegóły zadania" />
            {task ? (
                <Section
                    title={task ? task.content : "Nie znaleziono zadania!"}
                    body={
                        <>
                            <strong>Ukończono: </strong>
                            {task.done ? "Tak" : "Nie"}
                        </>
                    }
                />
            )
                : (
                    <Section
                        title={"Nie znaleziono zadania!"}
                    />
                )}
        </Container>
    );
};
export default TasksPage;