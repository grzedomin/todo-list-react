import { useState, useEffect } from 'react';

export const useTasks = () => {

    const [tasks, setTasks] = useState(() => {
        const localStorageData = localStorage.getItem("taskContent");
        return localStorageData ? JSON.parse(localStorageData) : [];
    });
    useEffect(() => {
        localStorage.setItem("taskContent", JSON.stringify(tasks))
    }, [tasks]);

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    done: !task.done,
                }
            } return task;
        }));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(tasks => ({ ...tasks, done: true })))
    };

    const addNewTask = (newTaskContent) => {
        setTasks(tasks => [...tasks, {
            content: newTaskContent,
            done: false,
            id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1
        }]);
    };

    return {
        tasks,
        removeTask,
        toggleDone,
        setAllDone,
        addNewTask,
    };
};