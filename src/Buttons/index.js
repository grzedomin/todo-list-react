import React from "react";
import "./style.css";

const Buttons = (props) => (
    <div className="section__buttons">
    {props.tasks.length > 0 && (
            <React.Fragment>
                <button className="section__button">
                    {props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
                </button>

                <button
                    className="section__button"
                    disabled={props.tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </button>

            </React.Fragment>      
    )}
    </div>
)

export default Buttons;