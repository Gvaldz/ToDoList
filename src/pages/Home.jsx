import React, { useState, useRef } from "react";
import TitleSection from "../components/section/TitleSection";
import ToDoSection from "../components/section/ToDoSection";
import CompletedSection from "../components/section/CompletedSection";
import AddSection from "../components/section/AddSection";
import { LinkedList } from "../data/LinkedList";
import './Home.css';

function Home() {
    const [tasks, setTasks] = useState(new LinkedList());
    const [update, setUpdate] = useState(0);

    const addTask = (task) => {
        tasks.push(task);
        setUpdate(prev => prev + 1); 
    };

    const [tasksC, setTasksC] = useState(new LinkedList());
    const [updateC, setUpdateC] = useState(0);

    const addTaskC = (taskC) => {
        tasksC.push(taskC);
        setUpdateC(prev => prev + 1); 
    };

    const moveToCompleted = (titulo, descripcion) => {
        const task = { titulo, descripcion };
        tasks.remove(task);
        tasksC.push(task);
        setUpdate(prev => prev + 1);  
        setUpdateC(prev => prev + 1); 
    };

    const deleteTask = (titulo, descripcion) => {
        const task = { titulo, descripcion };
        tasks.remove(task);
        setUpdate(prev => prev + 1);  
    };

    const todoRef = useRef(null);
    const completedRef = useRef(null);

    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div id="home">
            <TitleSection />
            <AddSection addTask={addTask} scrollToSection={scrollToSection} todoRef={todoRef} completedRef={completedRef} />
            <ToDoSection listTask={tasks} moveToCompleted={moveToCompleted} deleteTask={deleteTask} />
            <CompletedSection listTaskCompleted={tasksC} />
        </div>
    );
}

export default Home;
