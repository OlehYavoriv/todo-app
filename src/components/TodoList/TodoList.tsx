import { FC } from 'react';
import { Todo } from "../../utils/interfaces";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";
import { success } from "../../utils/toasts";
import styles from './TodoList.module.scss';

interface TodoListProps {
    data: Todo[];
    onDelete: (id: number) => void;
    onToggleCompleted: (id: number) => void;
    onEdit: (editedTodo: Todo) => void;
}

export const TodoList: FC<TodoListProps> = ({ data, onDelete, onToggleCompleted, onEdit }) => {
    const updateText = (todo: Todo) => {
        const updatedText = prompt('Update your todo', todo.text);
        if (updatedText !== null && updatedText !== '') {
            onEdit({...todo, text: updatedText});
            toast.success('ToDo updated successfully!', success)
        }
    }

    return (
        <table className={styles.table}>
            <tbody className={styles.table_body}>
            {data.map((todo, index) => (
                <tr key={todo.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                    <td className={styles.table_body__item}>
                        <label className={styles.label}>
                            <input type="checkbox" className={styles.label__checkbox}
                                   checked={todo.isCompleted} onChange={() => onToggleCompleted(todo.id)}
                            />
                            <span className={`text-gray-800  ${todo.isCompleted ? 'line-through text-gray-400' : ''}`}>
                                {todo.text}
                            </span>
                        </label>
                        <div className={styles.table_body__btns}>
                            <button onClick={() => updateText(todo)} className={styles.update_btn}>
                                <FiEdit/>
                            </button>
                            <button onClick={() => onDelete(todo.id)} className={styles.remove_btn}>
                                <RiDeleteBin6Line/>
                            </button>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};
