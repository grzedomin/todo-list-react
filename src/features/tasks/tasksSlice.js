import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(task => task.id === taskId);
            tasks[index].done = !tasks[index].done;
        },
        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(task => task.id === taskId);
            tasks.splice(index, 1);
        },
        setAllDone: ({ tasks }) => {
            tasks.forEach((task) => {
                task.done = true;
            });
        },
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export const selectHideDone = state => selectTasks(state).hideDone;
export const selectTasksEmpty = state => selectTasks(state).length === 0;
export default tasksSlice.reducer;