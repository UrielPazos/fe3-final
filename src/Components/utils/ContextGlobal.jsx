import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

export const ContextGlobal = createContext();

const initialState = {
  theme: 'light', // or dark
  dentists: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.theme };
    case 'SET_DENTISTS':
      return { ...state, dentists: action.dentists };
    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch({ type: 'SET_DENTISTS', dentists: response.data });
      });
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};





