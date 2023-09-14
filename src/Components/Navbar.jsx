import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/ContextGlobal';

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'SET_THEME', theme: newTheme });
  };

  const themeClass = state.theme === 'light' ? 'light-theme' : 'dark-theme';

  return (
    <nav className={themeClass}>
      <ul className='Lista'>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        <li><Link to="/favs">Destacados</Link></li>
      </ul>
      <button onClick={toggleTheme}>Tema</button>
    </nav>
  );
};

export default Navbar;

