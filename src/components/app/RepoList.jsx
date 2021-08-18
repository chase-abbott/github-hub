/* eslint-disable max-len */
import React from 'react';
import { useReducerState } from '../../state/ContextProvider';

export default function RepoList(){
  const state = useReducerState();
  let repoItems = [];

  if(state.repositories[0]){
    repoItems = state.repositories.map(({ node }) => {
      return (
        <li key={node.databaseId} style={{ display: 'flex', alignItems: 'center', padding: '5px', justifyContent: 'space-between' }}>
          <p>{node.name}</p>
          <a href={node.url} target="_blank" rel="noreferrer"> Link </a>
        </li>
      );
    });
  }

  
  return <ul style={{ listStyle: 'none' }}>{repoItems}</ul>;
}
