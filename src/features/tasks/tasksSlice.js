import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";


const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
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
        fetchExampleTasks: () => { },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        }
    },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone, fetchExampleTasks, setTasks } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export const selectHideDone = state => selectTasks(state).hideDone;
export const selectTasksEmpty = state => selectTasks(state).length === 0;
export default tasksSlice.reducer;