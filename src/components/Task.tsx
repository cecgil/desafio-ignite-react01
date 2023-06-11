import { ITask } from '../App';
import { BsFillCheckCircleFill } from 'react-icons/bs' 
import styles from './Task.module.css'
import { TbTrash } from "react-icons/tb";

interface Props {
    tasks: ITask;
    onDelete: (tasksId: string) => void;
    onCompleted: (tasksId: string) => void;

}

export function Task({tasks, onDelete, onCompleted}: Props) {
    return (
        <div className={styles.task}>
            <button className={styles.checkContainer} onClick={() => onCompleted(tasks.id)}>
                {tasks.isChecked ? <BsFillCheckCircleFill/> : <div/>}
                </button>

            <p className={tasks.isChecked ? styles.textCompleted : ""}>
                {tasks.content}
            </p>

            <button className={styles.deleteButton} onClick={() => onDelete(tasks.id)}> 
                <TbTrash size={20} />
            </button>
        </div>
    )
}