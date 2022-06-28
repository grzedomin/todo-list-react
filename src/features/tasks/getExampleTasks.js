export const getExampleTasks = async () => {
    const response = await fetch("/todo-list-react/exampasks.json");

    if(!response.ok) {
        throw new Error(response.statusText);
    }

    return await response.json();
};