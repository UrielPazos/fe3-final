import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from '../Components/Card';
import { ContextGlobal } from "../Components/utils/ContextGlobal";

  // Actualiza la clase del body cuando el tema cambie
  

const Home = () => {
  
    const [dentists, setDentists] = useState([]);

    useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
        setDentists(response.data);
        })
        .catch(error => {
        console.error("There was an error fetching the data", error);
        });
    }, []);
    
    return (
    <div className="card-grid">
        
        {dentists.map(dentist => (
        <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
        />
        ))}
    </div>
    );
    };

export default Home;