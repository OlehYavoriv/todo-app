import { useState } from 'react';
import { toast } from "react-toastify";
import { Todo } from '../../utils/interfaces';
import { TodoList } from "../TodoList";
import { error, success } from "../../utils/toasts";
import { useCreateToDo, useDeleteToDo, useCompletedToDo, useEditToDo, useFetchToDo } from '../../hooks/todoHooks';
import styles from './TodoBox.module.scss';

export const TodoBox = () => {
    const [textToDo, setTextToDo] = useState('');
    const createToDoItem = useCreateToDo();
    const deleteToDoItem = useDeleteToDo();
    const completedToDoItem = useCompletedToDo();
    const editToDoItem = useEditToDo();
    const {data: initialData} = useFetchToDo();

    const handleCreateToDo = () => {
        if (textToDo.trim() === '') {
            toast.error("Please fill in the field!", error);
            return;
        } else {
            toast.success("Added successfully!", success);
        }
        createToDoItem.mutate(textToDo);
        setTextToDo('');
    };

    const handleDeleteToDo = (todoId: number) => {
        deleteToDoItem.mutate(todoId);
    };

    const handleCompletedToDo = (todoId: number) => {
        completedToDoItem.mutate(todoId);
    };

    const handleEditToDo = (editedTodo: Todo) => {
        editToDoItem.mutate(editedTodo);
    };

    const data = initialData || [];

    return (
        <div className={styles.container}>
            <h5 className={styles.container_title}>Todos ({data.length})</h5>
            <div className={styles.inside_box}>
                <form className={styles.form}>
                    <input type="text" className={styles.form__input} placeholder="Enter todo here"
                           required value={textToDo}
                           onChange={(e) => setTextToDo(e.target.value)}
                    />
                    <button className={styles.form__send_btn} type="button" onClick={handleCreateToDo}>
                        Submit
                    </button>
                </form>
                <TodoList data={data} onDelete={handleDeleteToDo} onToggleCompleted={handleCompletedToDo}
                          onEdit={handleEditToDo}/>
            </div>
        </div>
    );
};
