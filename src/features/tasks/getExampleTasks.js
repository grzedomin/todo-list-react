export const getExampleTasks = async () => {
    const response = await fetch("/todo-list-react/exampleTasks.json");

    if(!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
};