import React, { Fragment } from 'react';
import { useFormState } from 'react-hook-form';

const PersonsTable = ({ persons }) => {
    return (
        <Fragment>
            <h1 className="py-5">Tabla de Usuarios</h1>
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Edad</th>
                        <th scope="col">Ocupacion</th>
                        <th scope="col">Categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {persons.map(person => {

                        return (
                            <tr>
                                <th scope="row">1</th>
                                <td>{person.name}</td>
                                <td>{person.age}</td>
                                <td>{person.occupation}</td>
                                <td>{person.category}</td>
                            </tr>

                        )

                    })}

                </tbody>
            </table>



        </Fragment>




    );
}

export default PersonsTable;