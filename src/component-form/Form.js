import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';


const Form = () => {
    return (  
        <Fragment>
            <h1>Examen de Actitud</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                name = "titulo"
                className = "form-control my-2"
                ref={
                    register({
                        required: {value: true, message:'Obligatorio Titulo'},

                    })
                }
                
                
                />
                <button className = "btn btn-primary">Enviar</button>
                
                

            </form>

        </Fragment>

    );
}
 
export default Form;