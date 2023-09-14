import React, { useContext, useEffect, useState } from 'react';
import { ContextGlobal } from '../Components/utils/ContextGlobal';


const Detail = (props) => {
  const { theme } = useContext(ContextGlobal);
  const [dentistData, setDentistData] = useState(null);

  const dentistId = props.match.params.id; // Obtiene el ID del dentista desde los parámetros de la URL

  // Función para hacer fetch del dentista específico
  const fetchDentistData = async () => {
    try {
      const response = await fetch(`URL_DE_TU_API/dentists/${dentistId}`);
      const data = await response.json();
      setDentistData(data);
    } catch (error) {
      console.error("Hubo un error obteniendo los datos del dentista:", error);
    }
  };

  useEffect(() => {
    fetchDentistData();
  }, [dentistId]);

  return (
    <div className={theme}>
      <h1>Detail Dentist id {dentistId}</h1>
      {dentistData ? (
        <>
          <p><strong>Nombre del personaje:</strong> {dentistData.name}</p>
          <p><strong>Email:</strong> {dentistData.email}</p>
          <p><strong>Teléfono:</strong> {dentistData.phone}</p>
          <p><strong>Sitio web:</strong> {dentistData.website}</p>
        </>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default Detail;
