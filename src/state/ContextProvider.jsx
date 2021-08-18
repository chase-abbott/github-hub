/* eslint-disable react/prop-types */
import React, { useContext, createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer';

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      {children}
    </Context.Provider>
  );
};

export const useReducerState = () => {
  const { state } = useContext(Context);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(Context);
  return dispatch;
};
