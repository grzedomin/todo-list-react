import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";


const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        isLoading: false,
        isError: false,
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
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
        fetchExampleTasks: (state) => {
            state.isLoading = true;
        },
        fetchLoadingStateSuccess: (state) => {
            state.isLoading = false;
        },
        fetchLoadingStateError: (state) => {
            state.isError = true;
        }
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    removeTask,
    setAllDone,
    fetchExampleTasks,
    setTasks,
    fetchLoadingStateSuccess,
    fetchLoadingStateError
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsLoading = state => selectTasksState(state).isLoading;
export const selectIsError = state => selectTasksState(state).isError;
export const selectTasksEmpty = state => selectTasks(state).length === 0;
export const getTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);


export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    }
    return selectTasks(state).filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
}

export default tasksSlice.reducer;