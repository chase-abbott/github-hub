import React from 'react';
import { useDispatch, useReducerState } from '../../state/ContextProvider';
import { inputAction } from '../../state/actions';

export default function App() {
  const dispatch = useDispatch();
  const state = useReducerState();
  return (
    <input 
      value={state.inputValue}
      onChange={({ target }) => dispatch(inputAction(target.value))}
    />
  );
}
