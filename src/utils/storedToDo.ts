import { Todo } from "./interfaces";

export const getStoredTodos = (): Todo[] => {
    const storedTodos = localStorage.getItem("todo-list");
    return storedTodos ? JSON.parse(storedTodos) : [];
};

export const updateStoredTodos = (todos: Todo[]): void => {
    localStorage.setItem("todo-list", JSON.stringify(todos));
};
