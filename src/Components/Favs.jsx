import React from 'react';
import Card from './Card';

const Favs = () => {
    const favs = JSON.parse(localStorage.getItem('favs')) || [];

    return (
    <div>
        {favs.map(dentist => (
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
export default Favs;
