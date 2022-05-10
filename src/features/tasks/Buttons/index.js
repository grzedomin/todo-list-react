import React from "react";
import { Button, ButtonsContainer } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <ButtonsContainer>
            {tasks.length > 0 && (
            <>
                <Button
                    disabled={tasks.every(({ done }) => !done)}
                    onClick={toggleHideDone}
                >
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </Button>

                <Button
                    onClick={setAllDone}
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </Button>
            </>
        )}
    </ButtonsContainer>
);
export default Buttons;