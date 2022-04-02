import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
    <div className="section__buttons">
        {tasks.length > 0 && (
            <React.Fragment>
                <button
                    disabled={tasks.every(({ done }) => !done)}
                    onClick={toggleHideDone}
                    className="section__button">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>

                <button
                    onClick={setAllDone}
                    className="section__button"
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </React.Fragment>
        )}
    </div>
);
export default Buttons;