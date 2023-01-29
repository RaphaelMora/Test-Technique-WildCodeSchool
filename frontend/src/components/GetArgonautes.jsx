import React, { useState, useEffect } from 'react';
import axios from "axios"

const GetArgonautes = () => {
    const [ names, setNames] = useState([])

useEffect(() =>{
    const fetch = async () => {
        const { data } = await axios.get("http://localhost:4000")
        setNames(data)
    }
    fetch()
})

    return (
        <div>
            {names.map((list) => (
             <li key={list._id}>{list.name}</li>
            ))}
        </div>
    );
};

export default GetArgonautes;