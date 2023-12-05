import { Todo } from "../utils/interfaces";
import { getStoredTodos, updateStoredTodos } from "../utils/storedToDo";

export const createToDo = (text: string): Promise<Todo> => {
    const createTodo: Todo = {id: Date.now(), text, isCompleted: false};
    const storedTodos = getStoredTodos();
    storedTodos.push(createTodo);
    updateStoredTodos(storedTodos);

    return Promise.resolve(createTodo);
};

export const deleteToDo = (id: number): Promise<Todo[]> => {
    const storedTodos = getStoredTodos();
    const updatedStoredTodos = storedTodos.filter((todo) => todo.id !== id);
    updateStoredTodos(updatedStoredTodos);

    return Promise.resolve(updatedStoredTodos);
};

export const editToDo = (updatedTodo: Todo): Promise<Todo[]> => {
    const storedTodos = getStoredTodos();
    const editedTodos = storedTodos.map((todo) => {
        if (todo.id === updatedTodo.id) {
            return updatedTodo;
        }
        return todo;
    });
    updateStoredTodos(editedTodos);

    return Promise.resolve(editedTodos);
};

export const completedToDo = (completedId: number): Promise<Todo[]> => {
    const storedTodos = getStoredTodos();
    const completedTodos = storedTodos.map((todo) => {
        if (todo.id === completedId) {
            return {...todo, isCompleted: !todo.isCompleted};
        }
        return todo;
    });
    updateStoredTodos(completedTodos);

    return Promise.resolve(completedTodos);
};

export const fetchToDo = (): Promise<Todo[]> => {
    const parsedTodos = getStoredTodos();

    return Promise.resolve(parsedTodos);
};
