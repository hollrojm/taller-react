import React, { useState, useEffect, Fragment } from 'react'
import swal from 'sweetalert'




const valuesByOccupations = {
    student: ['Cariñoso', 'Alegre', 'Responsable'],
    employee: ['Empatico', 'Colaborador', 'Comunicativo'],
    retired: ['Agradecido', 'Mesurado', 'Cauto']

}

const MessagePerson = ({ personData }) => {


    let [person, setPerson] = useState(personData);
    let [valueByOccupations, setValueByOccupations] = useState([]);
    let [ageByValue, setAgeByValue] = useState([]);


    useEffect(() => {

        if (personData.occupation == "Estudiante") {
            setValueByOccupations(valuesByOccupations.student)
        }
        else if (personData.occupation == "Empleado") {
            setValueByOccupations(valuesByOccupations.employee)
        }

        else if (personData.occupation == "Jubilado") {
            setValueByOccupations(valuesByOccupations.retired)

        }

    }, {});

     


    return (
        <>


            <div className="col-md-10 col-lg-10 row">
                <hr className="my-4" />
                <div class="alert alert-secondary" role="alert">

                    Al {person.category} de {person.age} años de edad, 
                    le recomendamos tener presente ser,
                    {valueByOccupations.map(value => <em>{" " + value}  </em>)} 
                    como principales valores para obtener un buen resultado como {person.occupation}.

                </div>
            </div>


        </>
    );
    }            

    export default MessagePerson;