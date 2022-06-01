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
            <Section
                title={task.content}
                body={<>nana</>}
            />
        </Container>
    );
};
export default TasksPage;