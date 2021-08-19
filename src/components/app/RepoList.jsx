/* eslint-disable max-len */
import React from 'react';
import { useReducerState } from '../../state/ContextProvider';
import { Link } from 'react-router-dom';

export default function RepoList(){
  const state = useReducerState();
  let repoItems = [];

  if(state.repositories[0]){
    repoItems = state.repositories.map(({ node }) => {
      return (
        <li key={node.databaseId} style={{ display: 'flex', alignItems: 'center', padding: '20px', justifyContent: 'space-between' }}>
          <p>{node.name}</p>
          <Link to={`/detail/${node.name}`}>Pull Requests </Link>
          <a href={node.url} target="_blank" rel="noreferrer"> Link </a>
        </li>
      );
    });
  }

  
  return <ul style={{ listStyle: 'none' }}>{repoItems}</ul>;
}
