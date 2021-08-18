/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useReducerState } from '../../state/ContextProvider';
import { inputAction, submitAction } from '../../state/actions';
import { useLazyQuery } from '@apollo/client';
import { RESPOSITORIES } from '../../services/githubService';

export default function InputForm(){
  const dispatch = useDispatch();
  const state = useReducerState();
  const [getRepos, { data }] = useLazyQuery(RESPOSITORIES, {
    variables: { login: state.inputValue }
  });

  useEffect(() => {
    dispatch(submitAction(data));
  }, [data]);

  return (
    <>
      <label> GitHub Username: </label>
      <form 
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        onSubmit={(e) => e.preventDefault()}
      >
        <input 
          value={state.inputValue}
          onChange={({ target }) => dispatch(inputAction(target.value))}
        />
        <button onClick={() => getRepos()}> Search </button>
      </form>
    </>
  );
}
