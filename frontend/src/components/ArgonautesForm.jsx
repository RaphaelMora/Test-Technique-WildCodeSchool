import React, { useEffect } from 'react';
import axios from "axios"

const ArgonautesForm = () => {
const addArgonautes = async (e) => {
    e.preventDefault()
    const { data } = await axios.post("http://localhost:4000", {
        name: e.target[0].value

    });
};
    return (
     <form className="new-member-form" onSubmit={(e) => addArgonautes(e)}>
        <label htmlFor="name">Nom de l'Argonaute</label>
        <input
        type="text"
        id="name"
        name="name"
        placeholder="Charalampos"
         />
         <input type="submit" />
     </form>
    );
};

export default ArgonautesForm;