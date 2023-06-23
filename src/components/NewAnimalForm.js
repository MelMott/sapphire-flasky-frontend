import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const INITIAL_FORM_DATA ={
    name: "",
    age: 0,
    species: ""
};


function NewAnimalForm (props) {
    const[name, SetName] = useState("");
    const[age, SetAge] = useState(0);
    const[species, SetSpecies] = useState("");
    const[animalFormData, setAnimalFormData] = useState(INITIAL_FORM_DATA);
    

    const anInputChanged = (evt) => {
        if(evt.target.name === "name") {
            SetName(evt.target.value); 
        } else if (evt.target.name === "age") {
            SetAge(evt.target.value);
        } else if (evt.target.name === "species") {
            SetSpecies(evt.target.value);
        }


    const NewAnimalFormData = {
        ...animalFormData, [evt.target.name]: evt.target.value
    };
    
    setAnimalFormData(NewAnimalFormData);
}

return (
    <div style={{border: "1px solid red"}}>
        <h2>Create New Animal</h2>
        <form>
            <label htmlFor="animalName">Name:</label>
            <input id="animalName" name="name" type="text" value={animalFormData.name} onChange={ anInputChanged }/>
            <lable htmlFor="animalAge">Age:</lable>
            <input id="animalAge" name="age" type="number" value={animalFormData.age} onChange={ anInputChanged }/>
            <label htmlFor="animalSpecies">Species:</label>
            <input id="animalSpecies" name="species" type="text" value={animalFormData.species} onChange={ anInputChanged }/>
        </form>
    </div>
    )
}


NewAnimalForm.propTypes = {
addAnnimal: PropTypes.func,
};

export default NewAnimalForm;
