import { Todo } from "../utils/interfaces";
import { useMutation, useQuery } from "react-query";
import { completedToDo, createToDo, deleteToDo, editToDo, fetchToDo } from "../api/todoApi";
import queryClient from "../utils/queryClient";

export function useCreateToDo() {
    return useMutation((text: string) => createToDo(text), {
        onSuccess: (newTodo: Todo) => {
            queryClient.invalidateQueries("todo-list");
        },
    });
}

export function useDeleteToDo() {
    return useMutation((todoIdDelete: number) => deleteToDo(todoIdDelete), {
        onSuccess: (newTodos: Todo[]) => {
            queryClient.invalidateQueries("todo-list");
        },
    });
}

export function useCompletedToDo() {
    return useMutation((completedToDoId: number) => completedToDo(completedToDoId), {
        onSuccess: (newTodos: Todo[]) => {
            queryClient.invalidateQueries("todo-list");
        },
    });
}

export function useEditToDo() {
    return useMutation((editedToDo: Todo) => editToDo(editedToDo), {
        onSuccess: (editedTodos: Todo[]) => {
            queryClient.invalidateQueries("todo-list");
        },
    });
}

export function useFetchToDo() {
    return useQuery<Todo[]>("todo-list", fetchToDo);
}
