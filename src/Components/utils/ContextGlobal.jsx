import React, { useReducer, createContext, useMemo, useEffect } from 'react';
import axios from 'axios';

export const initialState = {
  theme: 'light',
  data: [],
};

export const ContextGlobal = createContext(undefined);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch({ type: 'SET_DATA', payload: response.data });
      })
      .catch(error => {
        console.error('Hubo un error al obtener los datos:', error);
      });
  }, []);

  const value = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <ContextGlobal.Provider value={value}>
      {children}
    </ContextGlobal.Provider>
  );
};




