import React from "react";
import { Link } from 'react-router-dom';

const Card = ({ name, username, id }) => {

  const addFav = () => {
    let favs = localStorage.getItem('favs');
    favs = favs ? JSON.parse(favs) : [];
    const newFav = { name, username, id };
    favs.push(newFav);
    localStorage.setItem('favs', JSON.stringify(favs));
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <h3>{name}</h3>
        <p>{username}</p>
        <p>ID: {id}</p>
      </Link>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
