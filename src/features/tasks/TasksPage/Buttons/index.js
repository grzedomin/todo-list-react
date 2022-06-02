import React from "react";
import { Button, ButtonsContainer } from "../StyledButtons/styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleHideDone, setAllDone, selectHideDone, selectTasksEmpty } from "../../tasksSlice";

const Buttons = () => {
    const { tasks } = useSelector(selectTasksState);
    const hideDone = useSelector(selectHideDone);
    const areTasksEmpty = useSelector(selectTasksEmpty);
    const dispatch = useDispatch();

    return (
        <ButtonsContainer>
            {!areTasksEmpty && (
                <>
                    <Button
                        disabled={tasks.every(({ done }) => !done)}
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>

                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={tasks.every(({ done }) => done)}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </ButtonsContainer>
    );
};
export default Buttons;