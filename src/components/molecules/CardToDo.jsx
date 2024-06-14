import React from 'react';
import Text from "../atoms/Text";
import Button from "../atoms/Button";
import TitleCard from '../atoms/TitleCard';
import './CardToDo.css';

function CardToDo({ titulo, descripcion, moveToCompleted, deleteTask }) {

    const handleUpload = () => {
        moveToCompleted(titulo, descripcion);
    };

    const handleDelete = () => {
        deleteTask(titulo, descripcion);
    };

    return (
        <div id="cards_todo">
            <div id="text">
                <TitleCard text={titulo} />
                <Text text={descripcion} />
            </div>
            <div id="buttons_card">
                <div>
                    <Button
                        title="Eliminar"
                        color="rojo"
                        onClick={handleDelete}>
                    </Button>
                </div>
                <div>
                    <Button
                        title="Hecha"
                        color="verde"
                        onClick={handleUpload}>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default CardToDo;
