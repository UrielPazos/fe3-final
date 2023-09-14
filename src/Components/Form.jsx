import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length <= 5 || !email.includes('@')) {
      setError('Por favor verifique su información nuevamente.');
    } else {
      setSuccess(true);
      console.log(`Gracias ${name}, te contactaremos cuando antes vía mail`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nombre completo" />
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <button type="submit">Enviar</button>
      {error && <p>{error}</p>}
      {success && <p>Gracias {name}, te contactaremos cuando antes vía mail</p>}
    </form>
  );
};

export default Form;
