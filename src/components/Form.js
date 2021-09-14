import React, { Fragment, useState } from 'react';
import { useForm, useFormState } from "react-hook-form";
import PersonsTable from './PersonsTable';
import MessagePerson from './MessagePerson';

import 'bootstrap/dist/css/bootstrap.min.css'



const Form = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [persons, setPersons] = useState([]);

    const [person, setPerson] = useState();

    const [send, setSend] = useState(false);

     const onSubmit = (data) =>{
         console.log("hola nata")
        console.log(data)

        let personCategory;
        let age = data.age;

        if (age >= 0 && age <=12 ){
            personCategory = "Niño";

        }else if (age >=13 && age <=30 ){
            personCategory = "Joven";

        }else if (age >=31 && age <=50 ){
            personCategory = "Adulto";
        }else{
            personCategory = "Mayor";
        };

        let personData ={
            name: data.name,
            age: data.age,
            occupation: data.occupation,
            category: personCategory

        }

        setPerson(personData);
        setPersons([...persons, personData])
        setSend(true);
        

     }
     

    return (
        <Fragment>
            <div className="container mt-4">
                <h1>Examen de Actitud</h1>


                <form className="row g-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="col-md-6">
                        <label>Nombre</label>
                        <input 
                        className="form-control"
                        placeholder= "Ingrese nombre"
                        type = "text"
                        name = "name"
                        {...register('name', { required: true, maxLength: 100, pattern: /^[A-Za-z]+$/i })} />
                        <span className="text-danger text-small d-block mb-2">
                        {errors.name?.type === 'required' && "El campo nombre es requerido"}
                        {errors.name?.type === 'pattern' && "El campo no puede contener numeros ni caracteres especiales"
                        }
                        </span>
                    </div>{/*  name  */}

                    <div className="col-md-2">
                        <label>Edad</label>
                        <input 
                        min="0" 
                        className="form-control"
                        placeholder= "Edad"
                        type="number"
                        name = "age"
                        {...register('age', { required: true, min: 0, max: 115,})}/>
                        <span className="text-danger text-small d-block mb-2">
                        {errors.age?.type === 'required' && "El campo edad es requerido"}
                        </span>
                     </div> {/*  age  */}

                    <div className="col-md-3">
                        <label>Ocupación</label>
                        <select 
                        className="form-control"
                        name = "occupation"
                        {...register("occupation",{ required: true, pattern: /^[A-Za-z]+$/i})}>
                            <option selected >Ocupación</option>
                            <option value="Estudiante">Estudiante</option>
                            <option value="Empleado">Empleado</option>
                            <option value="Jubilado">Jubilado</option>
                        </select>
                        <span className="text-danger text-small d-block mb-2">
                        {errors.ocupation?.type === 'required' && "El campo ocupación es requerido"}
                        </span>
                    </div> {/*  Ocupation */}
                    <div >
                        <button class="btn  btn-primary mt-3" >Guardar</button>
                    </div> {/* button guardar */}
                </form>

                {send && <MessagePerson personData={person} />}
                <PersonsTable persons= {persons} />
            </div>

        </Fragment>

    );
}

export default Form;