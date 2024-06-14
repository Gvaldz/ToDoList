import React, { useState } from "react";
import Swal from "sweetalert2";
import '@sweetalert2/theme-dark';
import Field from "../molecules/Field";
import Button from "../atoms/Button";
import './AddSection.css';

function AddSection({ addTask, scrollToSection, todoRef, completedRef }) {
    const [values, setValues] = useState({
        titulo: '',
        descripcion: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const { titulo, descripcion } = values;

        if (!titulo || !descripcion) {
            Swal.fire({
                title: "Error",
                text: "Por favor, llene ambos campos.",
                icon: "error"
            });
            return;
        }

        const task = {
            titulo,
            descripcion,
        };

        addTask(task);

        Swal.fire({
            title: "Tarea creada",
            text: "La tarea se ha creado correctamente",
            icon: "success"
        });

        setValues({
            titulo: '',
            descripcion: '',
        });
    };

    return (
        <div id="dad">
            <form onSubmit={handleSubmit}>
                <div id="Add">
                    <div id="fields">
                        <Field 
                            text="Título"
                            type="text"
                            placeholder="Ingrese el título"
                            val={values.titulo}
                            fnVal={(value) => setValues({ ...values, titulo: value })}
                        />
                        <Field 
                            text="Descripción"
                            type="text"
                            placeholder="Ingrese una descripción"
                            val={values.descripcion}
                            fnVal={(value) => setValues({ ...values, descripcion: value })}
                        />
                    </div>
                    <div id="button">
                        <Button
                            title="Agregar"
                            color="azul"
                            onClick={handleSubmit}
                            type="submit"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddSection;
