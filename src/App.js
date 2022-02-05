import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
    { id: 1, content: "przejść na react.js", done: false },
    { id: 2, content: "zjeść obiad", done: true },
];

const hideDoneTasks = false;

function App() {
    return (
        <Container>

            <Header title="Lista zadań"/>

            <main className="main">
                <Section
                    title="Dodaj nowe zadanie"
                    body={<Form />}
                />

                <Section title="Lista zadań"
                    body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
                    extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
                />
            </main>
        </Container>
    );
}

export default App;
