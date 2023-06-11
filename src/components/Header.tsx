import styles from './header.module.css'
import todoLogo from '../assets/Logo.svg'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
    onAdicionaTask: (taskContent: string) => void;
}

export function Header({ onAdicionaTask }: Props) {
     const[content, setContent ] = useState('');

    function handleSubmit(event: FormEvent) {
        event.preventDefault()

        onAdicionaTask(content);
        setContent('');
    }

    function onChangeContent(event: ChangeEvent<HTMLInputElement>) {
        setContent(event.target.value);
    }
    return (
        <header className={styles.header}>
            <img src={todoLogo} alt="LogoTipo" />
            <form className={styles.newTaskForm} onSubmit={handleSubmit}>
                <input placeholder="Adicione uma nova tarefa" onChange={onChangeContent} value={content}/>
                <button>
                    Criar
                    <AiOutlinePlusCircle size={20}/>
                </button>

            </form>
        </header>
        
    )
}