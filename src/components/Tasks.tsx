import { useState } from "react";
import styles from './tasks.module.css'
import { Task } from "./Task";
import { ITask } from "../App";
import { TbClipboardText } from "react-icons/tb";

interface Props {
    tasks: ITask[];
    onDelete: (taskId: string) => void;
    onCompleted: (taskId: string) => void;
}

export function Tasks({ tasks, onDelete, onCompleted }: Props) {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter(task => task.isChecked).length;

    return (
        <section className={styles.tasks}>
            <header className={styles.header}>
                <div>
                    <p>tarefas criadas</p>
                    <span> {tasksQuantity} </span>
                </div>
                <div>
                    <p className={styles.textPurple}> tarefas concluidas</p>
                    <span>{completedTasks} de {tasksQuantity} </span>
                </div>
            </header>

            <div className={styles.list}>
                {tasks.map((task) => (
                    <Task key={task.id} tasks={task} onDelete={onDelete} onCompleted={onCompleted}/>
                ))}

                {tasks.length <= 0 && (
                    <section className={styles.empty}>
                        <TbClipboardText size={50} />
                        <div>
                            <p>Sem tarefas cadastradas</p>
                            <span>Crie tarefas e organize seus itens</span>
                        </div>
                    </section>
                
                
                )}

            </div>
        </section>
    )
}

