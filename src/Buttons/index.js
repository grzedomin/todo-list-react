import React from "react";
import "./style.css";

const Buttons = ({tasks, hideDoneTasks, toggleHideDone}) => (
    <div className="section__buttons">
    {tasks.length > 0 && (
            <React.Fragment>
                <button onClick={toggleHideDone} className="section__button">
                    {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>

                <button
                    className="section__button"
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>
            </React.Fragment>      
    )}
    </div>
)

export default Buttons;