import React from 'react';
import TitleTask from "../atoms/TitleTask";
import CardToDo from "../molecules/CardToDo";
import './ToDoSection.css';

function ToDoSection({ listTask, moveToCompleted, deleteTask }) {
    const cards = [];
    let current = listTask.head;

    if (current) {
        do {
            const task = current.data;
            cards.push(
                <CardToDo
                    key={`${task.titulo}-${task.descripcion}`}
                    titulo={task.titulo}
                    descripcion={task.descripcion}
                    moveToCompleted={moveToCompleted}
                    deleteTask={deleteTask}
                />
            );
            current = current.next;
        } while (current !== listTask.head);
    }

    return (
        <div id="todo">
            <div id='textdiv'>
            <TitleTask text="Pendientes" />
            </div>
            <div id="section_cards">
                {cards}
            </div>
        </div>
    );
}

export default ToDoSection;
