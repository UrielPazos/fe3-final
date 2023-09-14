import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';

const Favs = () => {
  // Estado para manejar los favoritos en el componente
  const [favs, setFavs] = useState([]);

  // Cargar favoritos de localStorage cuando el componente se monta
  useEffect(() => {
    const savedFavs = localStorage.getItem('favs');
    if (savedFavs) {
      setFavs(JSON.parse(savedFavs));
    }
  }, []);

  // Función para eliminar un favorito
  const removeFavorite = (dentistId) => {
    const newFavs = favs.filter(dentist => dentist.id !== dentistId);
    setFavs(newFavs);
    localStorage.setItem('favs', JSON.stringify(newFavs));
  };

  return (
    <div className="card-grid">
      {favs.map(dentist => (
        <div key={dentist.id}>
          <Card
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
          <button onClick={() => removeFavorite(dentist.id)}>Eliminar de favoritos</button>
        </div>
      ))}
    </div>
  );
};

export default Favs;

