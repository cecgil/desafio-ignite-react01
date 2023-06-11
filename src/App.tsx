import { FormEvent, useState } from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import './global.css';

export interface ITask {
  id: string,
  content: string,
  isChecked: boolean
}

export function App() {

  const[tasks, setTasks] = useState<ITask[]>([]);

  function adicionaTask(taskContent: string) {

      setTasks([
        ...tasks, 
      {
        id: crypto.randomUUID(),
        content: taskContent,
        isChecked: false,
      }])

  }

  function removeTask(taskId: string) {
    const newTasks = tasks.filter(task => task.id != taskId);
    setTasks(newTasks);
  }

  function toggleTaskCompleted(taskId: string) {
     const newTasks = tasks.map((task) => {
        if (task.id == taskId){
          return {
            ...task,
            isChecked: !task.isChecked,
          }
        
        }
        return task;
     });

     setTasks(newTasks);
  }

  return (
    <>
       <Header onAdicionaTask={adicionaTask}/>
       <Tasks tasks={tasks} onDelete={removeTask} onCompleted={toggleTaskCompleted} />
    </>
  )
}

