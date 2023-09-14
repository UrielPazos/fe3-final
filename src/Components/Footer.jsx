import React from 'react'
import { ContextGlobal } from './utils/ContextGlobal';
import { useContext } from 'react';


const Footer = () => {
  const { state, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    const newTheme = state.theme === 'light' ? 'dark' : 'light';
    dispatch({ type: 'SET_THEME', theme: newTheme });
  };

  const themeClass = state.theme === 'light' ? 'light-theme' : 'dark-theme';
  return (
    <footer className={themeClass}>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />
        <div>
        <img src="/images/ico-facebook.png" alt='logo facebook' />
        <img src="/images/ico-instagram.png" alt='logo instagram' />
        <img src="/images/ico-tiktok.png" alt='logo tiktok' />
        <img src="/images/ico-whatsapp.png" alt='logo whatsapp' />
        </div>
    </footer>
  )
}

export default Footer;
