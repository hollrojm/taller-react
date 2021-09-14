import React, { useState, useEffect, Fragment} from 'react'

const ageByValues = {
    kid:['Tierno', 'Angelical'],
    young:['Extrovertido', 'Alegre'],
    adult:['Trabjador', 'Compromiso'],
    old:['Paciente', 'Cariñoso']

}

const valuesByOccupations = {
    student:['Cariñoso', 'Alegre'],
    employee:['Calidad', 'Colaborador'],
    retired:['Sincero', 'Catedratico']
    

}

const personData = ({personData})=>{
    console.log(personData, "personData");
}

    let [personM, setPersonM] = useState(personMessage);
    let [valueByOccupations, setValueByOccupations] = useState([]);
    let [ageByValue, setAgeByValue] = useState([]);
    

    useEffect(()=>{

        if (personMessage.occupation=="Estudiante") {
            setValueByOccupations(valuesByOccupations.student)
        }
        else if(userInfo.ocupacion=="Empleado") {
            setValueByOccupations(valuesByOccupations.employee)
        }
        
        else if(userInfo.ocupacion=="Jubilado"){
            setValueByOccupations(valuesByOccupations.retired)
    
        }
    
    
        if (personM.category == "Niño") {
            setAgeByValue(ageByValues.kid)
        }
        else if(personM.category == "Joven") {
            setAgeByValue(ageByValues.young)
        }
        else if(personM.category == "Adulto") {
            setAgeByValue(ageByValues.adult)
        }
        else{
            setAgeByValues(ageByValues.old)
        }



    },{});


    // return(
    //     <Fragment>





    //     </Fragment>
    // )