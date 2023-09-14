import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ContextGlobal } from './utils/ContextGlobal';

const dentist = () => {
    const { id } = useParams();
    const [dentist, setDentist] = useState(null);
    const {state} = useContext(ContextGlobal); // Para acceder al tema y demás datos del contexto si es necesario

    useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
        setDentist(response.data);
        })
        .catch(error => {
        console.error('Hubo un error al obtener los datos del dentista:', error);
        });
    }, [id]);

    if (!dentist) return <div>Loading...</div>;

    return (
    <div>
        {<><h1>{dentist.name}</h1>
            <div className='dentist-detail'>
                <p>Email: {dentist.email}</p>
                <p>Teléfono: {dentist.phone}</p>
                <p>Website: {dentist.website}</p>
            </div>
        </>}
        
    </div>
    );
};

export default dentist;
