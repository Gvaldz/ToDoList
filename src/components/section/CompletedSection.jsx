import React from 'react';
import TitleTask from "../atoms/TitleTask";
import CardCompleted from "../molecules/CardCompleted";
import './CompletedSection.css';

function CompletedSection({ listTaskCompleted }) {
    const cards = [];
    let current = listTaskCompleted.head;

    if (current) {
        do {
            const task = current.data;
            cards.push(
                <CardCompleted
                    key={`${task.titulo}-${task.descripcion}`}
                    titulo={task.titulo}
                    descripcion={task.descripcion}
                />
            );
            current = current.next;
        } while (current !== listTaskCompleted.head);
    }

    return (
        <div id="completed">
            <div id='textdiv'>
            <TitleTask text="Realizadas" />
            </div>
            <div id="section_cards">
                {cards}
            </div>
        </div>
    );
}

export default CompletedSection;
